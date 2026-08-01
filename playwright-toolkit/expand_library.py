import json
import re
import unicodedata
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parent
DATA_JS = ROOT / 'data.js'
EXT_JS = ROOT / 'extended-data.js'
OUT_JS = ROOT / 'library-expansion-20260801.generated.js'
OUT_REPORT = ROOT / 'library-expansion-20260801.report.json'
BATCH = '2026-08-01-script-library-expansion'
TARGET_TOTAL = 2000
TARGET_IMSDB = 600
PULITZER_CATEGORY_LINK = 'https://www.pulitzer.org/prize-winners-by-category/218'


def norm_title(value):
    value = unicodedata.normalize('NFKC', value or '').lower()
    value = re.sub(r'\s+', ' ', value)
    value = re.sub(r'[^0-9a-z\u4e00-\u9fff]+', '', value)
    return value


def collect_existing_titles():
    text = DATA_JS.read_text(encoding='utf-8') + '\n' + EXT_JS.read_text(encoding='utf-8')
    titles = set()
    for m in re.finditer(r"title:\s*['\"]([^'\"]+)['\"]", text):
        titles.add(norm_title(m.group(1)))
    for m in re.finditer(r"\[\s*['\"]([^'\"]+)['\"]\s*,\s*['\"][^'\"]*['\"]\s*,\s*['\"]([^'\"]+)['\"]", text):
        titles.add(norm_title(m.group(1)))
        titles.add(norm_title(m.group(2)))
    return titles


def js_string(value):
    return json.dumps(value, ensure_ascii=False)


def make_structure(kind, title):
    if kind == 'film':
        return {
            'acts': '电影剧本索引条目；当前不内嵌版权全文，按三幕/多幕电影结构留作索引。',
            'turns': '关键转折需结合合法链接页面或正式出版剧本逐场复核。',
            'climax': '高潮设计不做未核验概括，保留为结构学习入口。',
            'arcs': '人物弧线待按授权文本或正式书目细读后补全。',
        }
    if kind == 'award':
        return {
            'acts': '近年获奖剧作索引条目；幕场结构需以官方出版剧本为准。',
            'turns': '关键转折不做未核验细节扩写，保留奖项与书目入口。',
            'climax': '高潮设计待依据正式出版版本补充。',
            'arcs': '人物弧线待按授权剧本或出版社版本复核。',
        }
    return {
        'acts': '公版戏剧文本索引条目；具体幕/场以 Project Gutenberg 原文为准。',
        'turns': '关键转折需结合原文细读补充；当前先建立可靠来源入口。',
        'climax': '高潮设计待逐本阅读后细化。',
        'arcs': '主要人物弧线待后续深读补全。',
    }


def make_cn_versions(title, note):
    return [{
        'title': title,
        'translator': '待核验',
        'publisher': '',
        'isbn': '',
        'link': '',
        'reliability': 'biblio',
        'note': note,
    }]


def parse_imsdb(existing):
    url = 'https://imsdb.com/all-scripts.html'
    html = requests.get(url, timeout=30, headers={'User-Agent': 'Mozilla/5.0'}).text
    soup = BeautifulSoup(html, 'html.parser')
    items = []
    seen = set(existing)
    for p in soup.find_all('p'):
        a = p.find('a', href=True)
        if not a or '/Movie Scripts/' not in a['href']:
            continue
        title = a.get_text(' ', strip=True)
        if not title or norm_title(title) in seen:
            continue
        text = p.get_text(' ', strip=True)
        writer_match = re.search(r'Written by\s+(.+)$', text)
        if not writer_match:
            continue
        writers = writer_match.group(1).strip()
        writers = re.sub(r'\s*,\s*', ', ', writers)
        if not writers or writers.lower() in {'n/a', 'unknown'}:
            continue
        draft = 'Undated Draft'
        draft_match = re.search(r'\(([^)]*Draft[^)]*)\)', text)
        if draft_match:
            draft = draft_match.group(1).strip()
        link = urljoin('https://imsdb.com', a['href'])
        item = {
            'title': title,
            'author': writers,
            'year': draft,
            'type': 'copyright',
            'region': 'foreign',
            'tags': ['电影剧本', 'IMSDB', '版权索引'],
            'sourceInstitution': 'IMSDb',
            'link': link,
            'summary': 'IMSDB 收录的电影剧本索引，供合法链接与结构框架参照。',
            'framework': '救猫咪喜剧节拍表 / 群像压力锅结构',
            'access': '合法剧本链接；版权作品不内嵌全文',
            'chineseVersions': make_cn_versions(title, '未找到可靠汉译版本链接，暂留空。'),
            'originalVersion': {
                'title': title,
                'language': '英语/待核验',
                'publisher': 'IMSDb',
                'link': link,
                'reliability': 'trusted',
                'note': 'IMSDb 电影剧本索引页；本站仅保存链接和结构索引。',
            },
            'structure': make_structure('film', title),
            'expansionBatch': BATCH,
            'expansionCategory': 'A. 电影剧本索引',
        }
        items.append(item)
        seen.add(norm_title(title))
        if len(items) >= TARGET_IMSDB:
            break
    return items


PULITZER_WINNERS = [
    ('Doubt: A Parable', 'John Patrick Shanley', '2005'),
    ('Rabbit Hole', 'David Lindsay-Abaire', '2007'),
    ('August: Osage County', 'Tracy Letts', '2008'),
    ('Ruined', 'Lynn Nottage', '2009'),
    ('Next to Normal', 'Brian Yorkey / Tom Kitt', '2010'),
    ('Clybourne Park', 'Bruce Norris', '2011'),
    ('Water by the Spoonful', 'Quiara Alegría Hudes', '2012'),
    ('Disgraced', 'Ayad Akhtar', '2013'),
    ('The Flick', 'Annie Baker', '2014'),
    ('Between Riverside and Crazy', 'Stephen Adly Guirgis', '2015'),
    ('Hamilton', 'Lin-Manuel Miranda', '2016'),
    ('Sweat', 'Lynn Nottage', '2017'),
    ('Cost of Living', 'Martyna Majok', '2018'),
    ('Fairview', 'Jackie Sibblies Drury', '2019'),
    ('A Strange Loop', 'Michael R. Jackson', '2020'),
    ('The Hot Wing King', 'Katori Hall', '2021'),
    ('Fat Ham', 'James Ijames', '2022'),
    ('English', 'Sanaz Toossi', '2023'),
    ('Primary Trust', 'Eboni Booth', '2024'),
    ('Purpose', 'Branden Jacobs-Jenkins', '2025'),
]


def make_pulitzer(existing):
    items = []
    seen = set(existing)
    for title, author, year in PULITZER_WINNERS:
        if norm_title(title) in seen:
            continue
        item = {
            'title': title,
            'author': author,
            'year': year,
            'type': 'copyright',
            'region': 'foreign',
            'tags': ['普利策戏剧奖', '近年获奖剧本', '版权索引'],
            'sourceInstitution': 'The Pulitzer Prizes',
            'link': PULITZER_CATEGORY_LINK,
            'summary': f'{year} 年普利策戏剧奖获奖剧作，本站仅收录奖项与书目索引。',
            'framework': '群像压力锅结构 / 问题剧剥洋葱结构',
            'access': '获奖/书目索引，不收录全文',
            'awardInfo': f'{year} Pulitzer Prize for Drama winner',
            'chineseVersions': make_cn_versions(title, '未找到可靠中文出版/汉译链接，暂留空。'),
            'originalVersion': {
                'title': title,
                'language': '英语',
                'publisher': 'The Pulitzer Prizes / official award index',
                'link': PULITZER_CATEGORY_LINK,
                'reliability': 'official',
                'note': '普利策官方分类索引；购买/出版页待逐本补充。',
            },
            'structure': make_structure('award', title),
            'expansionBatch': BATCH,
            'expansionCategory': 'B. 普利策近年获奖剧本',
        }
        items.append(item)
        seen.add(norm_title(title))
    return items


def classify_pg_tags(book):
    subjects = ' '.join(book.get('subjects') or [])
    bookshelves = ' '.join(book.get('bookshelves') or [])
    tags = ['公版戏剧', 'Project Gutenberg']
    hay = f'{subjects} {bookshelves} {book.get("title", "")}'.lower()
    if 'comedy' in hay:
        tags.append('喜剧')
    if 'traged' in hay:
        tags.append('悲剧')
    if 'opera' in hay or 'musical' in hay:
        tags.append('音乐/歌剧')
    if 'history' in hay or 'historical' in hay:
        tags.append('历史剧')
    if len(tags) == 2:
        tags.append('世界经典戏剧')
    return tags[:5]


def framework_for_tags(tags):
    if '喜剧' in tags:
        return '错位误会递进法 / 讽刺靶心结构'
    if '历史剧' in tags:
        return '权力棋局结构 / 大时代小人物切片法'
    if '音乐/歌剧' in tags:
        return 'I Want 歌驱动结构 / 主题变奏复现法'
    if '悲剧' in tags:
        return '诗学式过失—识认结构 / 麦基价值极性下坠法'
    return '问题剧剥洋葱结构 / 群像压力锅结构'


def safe_get_gutendex_page(page):
    url = f'https://gutendex.com/books/?topic=plays&page={page}'
    last_error = None
    for _ in range(3):
        try:
            response = requests.get(url, timeout=45, headers={'User-Agent': 'Mozilla/5.0'})
            response.raise_for_status()
            return response.json(), None
        except Exception as exc:
            last_error = str(exc)
    return None, last_error


def parse_gutendex(existing, needed):
    items = []
    seen = set(existing)
    skipped_pages = []
    for page in range(1, 125):
        if len(items) >= needed:
            break
        data, error = safe_get_gutendex_page(page)
        if not data:
            skipped_pages.append({'page': page, 'error': error})
            continue
        for book in data.get('results', []):
            title = re.sub(r'\s+', ' ', book.get('title', '')).strip()
            if not title or norm_title(title) in seen:
                continue
            authors = book.get('authors') or []
            if not authors:
                continue
            author = '; '.join(a.get('name', '').strip() for a in authors if a.get('name'))
            if not author:
                continue
            # Keep drama/play catalogue entries; avoid obvious non-script commentary when possible.
            blob = ' '.join((book.get('subjects') or []) + (book.get('bookshelves') or []) + [title]).lower()
            if not any(k in blob for k in ['drama', 'play', 'plays', 'traged', 'comedy', 'theater', 'theatre']):
                continue
            gutenberg_id = book.get('id')
            link = f'https://www.gutenberg.org/ebooks/{gutenberg_id}'
            language = ','.join(book.get('languages') or []) or '待核验'
            tags = classify_pg_tags(book)
            author_year_bits = []
            for a in authors[:2]:
                by, dy = a.get('birth_year'), a.get('death_year')
                if by or dy:
                    author_year_bits.append(f"{a.get('name', '').strip()} {by or '?'}–{dy or '?'}")
            year = '公版/出版年待核验'
            if author_year_bits:
                year = '公版；作者生卒年 ' + '; '.join(author_year_bits)
            item = {
                'title': title,
                'author': author,
                'year': year,
                'type': 'public',
                'region': 'foreign',
                'tags': tags,
                'sourceInstitution': 'Project Gutenberg',
                'link': link,
                'summary': 'Project Gutenberg 公版戏剧文本，供原文阅读与结构索引。',
                'framework': framework_for_tags(tags),
                'access': '权威全文链接',
                'chineseVersions': make_cn_versions(title, '未找到可靠汉译版本链接，暂留空。'),
                'originalVersion': {
                    'title': title,
                    'language': language,
                    'publisher': 'Project Gutenberg',
                    'link': link,
                    'reliability': 'official',
                    'note': 'Project Gutenberg 公版电子书条目。',
                },
                'structure': make_structure('public_play', title),
                'expansionBatch': BATCH,
                'expansionCategory': 'C. 世界公版戏剧补全',
                'gutenbergId': gutenberg_id,
            }
            items.append(item)
            seen.add(norm_title(title))
            if len(items) >= needed:
                break
        if not data.get('next'):
            break
    parse_gutendex.skipped_pages = skipped_pages
    return items


def dump_js(items):
    lines = []
    lines.append('// Auto-generated expansion batch: 2026-08-01. Copyright works are index-only; no full text is embedded.')
    lines.append('const libraryExpansion20260801 = [')
    for item in items:
        lines.append('  ' + js_string(item) + ',')
    lines.append('];')
    lines.append('')
    lines.append('libraryExpansion20260801.forEach((script) => {')
    lines.append('  if (!scriptLibrary.some((existing) => existing.title === script.title && existing.author === script.author)) {')
    lines.append('    scriptLibrary.push(script);')
    lines.append('  }')
    lines.append('});')
    return '\n'.join(lines) + '\n'


def main():
    existing = collect_existing_titles()
    imsdb = parse_imsdb(existing)
    existing_after_imsdb = existing | {norm_title(i['title']) for i in imsdb}
    pulitzer = make_pulitzer(existing_after_imsdb)
    existing_after_awards = existing_after_imsdb | {norm_title(i['title']) for i in pulitzer}
    pg_needed = 0
    pg = []
    # Gutendex / Project Gutenberg pagination is intentionally disabled for this first stable batch
    # because the public API repeatedly timed out during bulk collection. Keep public-play expansion
    # as a separate segmented task to avoid corrupting the local data file with partial output.
    items = imsdb + pulitzer + pg
    OUT_JS.write_text(dump_js(items), encoding='utf-8')
    report = {
        'target_total': TARGET_TOTAL,
        'actual_generated': len(items),
        'counts': {
            'A_IMSDB_film_index': len(imsdb),
            'B_Pulitzer_award_index': len(pulitzer),
            'C_Project_Gutenberg_public_plays': len(pg),
            'D_Contemporary_Chinese_drama': 0,
        },
        'source_links': {
            'imsdb_all_scripts': 'https://imsdb.com/all-scripts.html',
            'project_gutenberg_plays': 'https://gutenberg.org/ebooks/bookshelf/642',
            'gutendex_topic_plays': 'https://gutendex.com/books/?topic=plays',
            'pulitzer_drama': PULITZER_CATEGORY_LINK,
        },
        'not_written': [
            {'category': 'D. 当代华语话剧', 'reason': '本轮未找到可批量自动校验的官方/豆瓣书目数据源；为避免编造，暂不写入。'},
            {'category': 'B. 托尼/奥利弗提名完整清单', 'reason': '本轮只写入普利策获奖条目；提名与购买页需逐项补充官方出版/购买链接。'},
            {'category': '汉译链接', 'reason': '仅在可确认豆瓣/出版社链接时写入；本轮批量条目未强行补造。'},
        ],
        'skipped_pages': getattr(parse_gutendex, 'skipped_pages', []),
    }
    OUT_REPORT.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
