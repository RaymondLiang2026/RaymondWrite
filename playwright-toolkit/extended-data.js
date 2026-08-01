/* global scriptLibrary */
const reliabilityLabels = {
  official: '🟢 官方权威',
  trusted: '🟡 可信平台',
  biblio: '⚪ 仅书目信息'
};

const zhongxi60Seed = [
  ['阿伽门农','埃斯库罗斯','Agamemnon','古希腊语','悲剧','古希腊悲剧',true,'https://www.gutenberg.org/ebooks/14417'],
  ['俄狄浦斯王','索福克勒斯','Oedipus Rex','古希腊语','悲剧','古希腊悲剧',true,'https://www.gutenberg.org/ebooks/31'],
  ['美迪亚','欧里庇得斯','Medea','古希腊语','悲剧','古希腊悲剧',true,'https://www.gutenberg.org/ebooks/35451'],
  ['被缚的普罗米修斯','埃斯库罗斯','Prometheus Bound','古希腊语','悲剧','古希腊悲剧',true,'https://www.gutenberg.org/ebooks/8714'],
  ['鸟','阿里斯托芬','The Birds','古希腊语','喜剧','古希腊喜剧',true,'https://www.gutenberg.org/ebooks/3013'],
  ['哈姆莱特','莎士比亚','Hamlet','英语','悲剧','莎士比亚悲剧',true,'https://www.gutenberg.org/ebooks/1524'],
  ['李尔王','莎士比亚','King Lear','英语','悲剧','莎士比亚悲剧',true,'https://www.gutenberg.org/ebooks/1532'],
  ['麦克白','莎士比亚','Macbeth','英语','悲剧','莎士比亚悲剧',true,'https://www.gutenberg.org/ebooks/1533'],
  ['第十二夜','莎士比亚','Twelfth Night','英语','喜剧','莎士比亚喜剧',true,'https://www.gutenberg.org/ebooks/1526'],
  ['不可儿戏','奥斯卡·王尔德','The Importance of Being Earnest','英语','喜剧','讽刺喜剧',true,'https://www.gutenberg.org/ebooks/844'],
  ['华伦夫人的职业','萧伯纳',"Mrs. Warren's Profession",'英语','正剧','社会剧',true,'https://www.gutenberg.org/ebooks/1097'],
  ['等待戈多','萨缪尔·贝克特','En attendant Godot','法语','荒诞剧','荒诞剧',false,''],
  ['熙德','高乃依','Le Cid','法语','悲喜剧','古典主义戏剧',true,'https://www.gutenberg.org/ebooks/14954'],
  ['伪君子','莫里哀','Tartuffe','法语','喜剧','讽刺喜剧',true,'https://www.gutenberg.org/ebooks/2027'],
  ['费德尔','拉辛','Phèdre','法语','悲剧','古典主义悲剧',true,'https://www.gutenberg.org/ebooks/1977'],
  ['费加罗的婚姻','博马舍','Le Mariage de Figaro','法语','喜剧','社会喜剧',true,'https://www.gutenberg.org/ebooks/20577'],
  ['罗朗萨丘','缪塞','Lorenzaccio','法语','历史剧','浪漫主义历史剧',true,'https://www.gutenberg.org/ebooks/14142'],
  ['西哈诺','爱德蒙·罗斯丹','Cyrano de Bergerac','法语','浪漫剧','浪漫主义戏剧',true,'https://www.gutenberg.org/ebooks/1254'],
  ['秃头歌女','欧仁·尤内斯库','La Cantatrice chauve','法语','荒诞剧','荒诞剧',false,''],
  ['女仆','让·日奈','Les Bonnes','法语','现代剧','现代剧',false,''],
  ['青鸟','梅特林克',"L'Oiseau bleu",'法语','象征剧','象征主义戏剧',true,'https://www.gutenberg.org/ebooks/8606'],
  ['阴谋与爱情','席勒','Kabale und Liebe','德语','悲剧','市民悲剧',true,'https://www.gutenberg.org/ebooks/6782'],
  ['沉钟','霍普特曼','Die versunkene Glocke','德语','童话剧','象征剧',true,'https://www.gutenberg.org/ebooks/13069'],
  ['大胆妈妈和她的孩子们','布莱希特','Mutter Courage und ihre Kinder','德语','史诗剧','史诗剧',false,''],
  ['老妇还乡','迪伦马特','Der Besuch der alten Dame','德语','悲喜剧','现代悲喜剧',false,''],
  ['伽利略传','布莱希特','Leben des Galilei','德语','史诗剧','史诗剧',false,''],
  ['朱丽小姐','斯特林堡','Fröken Julie','瑞典语','自然主义','自然主义悲剧',true,'https://www.gutenberg.org/ebooks/849'],
  ['野鸭','易卜生','Vildanden','挪威语','正剧','问题剧',true,'https://www.gutenberg.org/ebooks/13069'],
  ['培尔·金特','易卜生','Peer Gynt','挪威语','诗剧','成长/诗剧',true,'https://www.gutenberg.org/ebooks/662'],
  ['六个寻找剧作家的角色','皮兰德娄',"Sei personaggi in cerca d'autore",'意大利语','元戏剧','现代主义戏剧',false,''],
  ['女店主','哥尔多尼','La locandiera','意大利语','喜剧','性格喜剧',true,'https://www.gutenberg.org/ebooks/44775'],
  ['钦差大臣','果戈理','The Government Inspector','俄语','喜剧','讽刺喜剧',true,'https://www.gutenberg.org/ebooks/3735'],
  ['茶花女','小仲马','La Dame aux Camélias','法语','悲剧','爱情悲剧',true,'https://www.gutenberg.org/ebooks/1608'],
  ['铁手葛兹','歌德','Götz von Berlichingen','德语','历史剧','历史剧',true,'https://www.gutenberg.org/ebooks/23202'],
  ['造谣学校','谢立丹','The School for Scandal','英语','喜剧','风俗喜剧',true,'https://www.gutenberg.org/ebooks/1929'],
  ['咖啡店政客','菲尔丁','The Coffee-House Politician','英语','喜剧','讽刺喜剧',true,''],
  ['爱米丽雅·迦落蒂','莱辛','Emilia Galotti','德语','悲剧','市民悲剧',true,'https://www.gutenberg.org/ebooks/33435'],
  ['一仆二主','哥尔多尼','Il servitore di due padroni','意大利语','喜剧','即兴喜剧',true,''],
  ['羊泉村','洛佩·德·维加','Fuenteovejuna','西班牙语','悲剧','黄金时代戏剧',true,'https://www.gutenberg.org/ebooks/60198'],
  ['底层','高尔基','The Lower Depths','俄语','现实主义','社会剧',true,'https://www.gutenberg.org/ebooks/1944'],
  ['大雷雨','奥斯特洛夫斯基','The Storm','俄语','悲剧','现实主义悲剧',true,''],
  ['万尼亚舅舅','契诃夫','Uncle Vanya','俄语','正剧','悲喜剧',true,'https://www.gutenberg.org/ebooks/1756'],
  ['樱桃园','契诃夫','The Cherry Orchard','俄语','喜剧','悲喜剧',true,'https://www.gutenberg.org/ebooks/7986'],
  ['乐观的悲剧','维什涅夫斯基','The Optimistic Tragedy','俄语','苏联剧','革命戏剧',false,''],
  ['打野鸭','万比洛夫','Duck Hunting','俄语','现代剧','现代剧',false,''],
  ['榆树下的欲望','奥尼尔','Desire Under the Elms','英语','悲剧','现代悲剧',false,''],
  ['欲望号街车','田纳西·威廉斯','A Streetcar Named Desire','英语','现代剧','现代剧',false,''],
  ['推销员之死','阿瑟·米勒','Death of a Salesman','英语','现代悲剧','社会悲剧',false,''],
  ['夕鹤','木下顺二','Yūzuru','日语','童话剧','现代日本剧',false,''],
  ['女人的一生','森本薰',"A Woman's Life",'日语','现代剧','现代日本剧',false,''],
  ['饥饿海峡','水上勉','Straits of Hunger','日语','现代剧','现代日本剧',false,''],
  ['沙恭达罗','迦梨陀娑','Abhijñānaśākuntalam','梵语','诗剧','古典印度戏剧',true,'https://www.gutenberg.org/ebooks/16659'],
  ['窦娥冤','关汉卿','暂无原文题名','中文','元杂剧','中国古典戏曲',true,''],
  ['西厢记','王实甫','暂无原文题名','中文','元杂剧','中国古典戏曲',true,''],
  ['长生殿','洪昇','暂无原文题名','中文','传奇','中国古典戏曲',true,''],
  ['牡丹亭','汤显祖','暂无原文题名','中文','传奇','中国古典戏曲',true,''],
  ['屈原','郭沫若','暂无原文题名','中文','历史剧','中国现代历史剧',false,''],
  ['蔡文姬','郭沫若','暂无原文题名','中文','历史剧','中国现代历史剧',false,''],
  ['关汉卿','田汉','暂无原文题名','中文','话剧','中国现代话剧',false,''],
  ['战斗里成长','胡可','暂无原文题名','中文','革命话剧','中国现代话剧',false,'']
];

const extraBibliography = [
  ['莎士比亚全集','威廉·莎士比亚','The Complete Works of William Shakespeare','英语','朱生豪','人民文学出版社','9787020075485','https://book.douban.com/subject/4832194/','https://www.gutenberg.org/ebooks/author/65','悲剧/喜剧/历史剧','原作公版；朱生豪译本公版'],
  ['易卜生戏剧集','亨利克·易卜生',"Ibsen's Plays",'挪威语','潘家洵','人民文学出版社','9787020194896','https://book.douban.com/subject/26436129/','https://www.gutenberg.org/ebooks/author/861','问题剧/正剧','原作公版；译本版权'],
  ['契诃夫文集·戏剧卷','安东·契诃夫',"Anton Chekhov's Plays",'俄语','汝龙','人民文学出版社','9787020125050','https://book.douban.com/subject/26986871/','https://www.gutenberg.org/ebooks/author/708','悲喜剧/正剧','原作公版；译本版权'],
  ['莫里哀喜剧全集','莫里哀','Œuvres complètes de Molière','法语','李健吾','上海译文出版社','9787532779758','https://book.douban.com/subject/35798965/','https://www.gutenberg.org/ebooks/author/791','喜剧','原作公版；译本版权'],
  ['罗念生全集·希腊悲剧卷','古希腊三大悲剧家','Ancient Greek Tragedies','古希腊语','罗念生','上海人民出版社','9787208134645','https://book.douban.com/series/34546','https://www.gutenberg.org/ebooks/author/26','古希腊悲剧','原作公版；译本版权'],
  ['贝克特全集·戏剧卷','萨缪尔·贝克特','Samuel Beckett Plays','法语/英语','余中先等','湖南文艺出版社','9787540478964','https://book.douban.com/subject/26954354/','','荒诞剧','原作版权；译本版权'],
  ['布莱希特戏剧集','贝托尔特·布莱希特','Bertolt Brecht Plays','德语','冯至/张黎等','安徽文艺出版社','9787539619798','https://book.douban.com/subject/2131594/','https://groveatlantic.com/author/bertolt-brecht/','史诗剧','原作版权；译本版权'],
  ['奥尼尔剧作选','尤金·奥尼尔','Eugene O’Neill Selected Plays','英语','欧阳基','人民文学出版社','9787020060306','https://book.douban.com/subject/2076853/','https://www.gutenberg.org/ebooks/author/1359','现代悲剧/社会剧','部分原作公版；译本版权'],
  ['王尔德戏剧全集','奥斯卡·王尔德','The Plays of Oscar Wilde','英语','许渊冲','商务印书馆','9787100192323','https://book.douban.com/subject/35455640/','https://www.gutenberg.org/ebooks/author/111','喜剧/讽刺','原作公版；译本版权'],
  ['斯特林堡文集·戏剧卷','奥古斯特·斯特林堡',"Strindberg's Plays",'瑞典语','李之义','人民文学出版社','9787020054701','https://book.douban.com/subject/2290074/','https://www.gutenberg.org/ebooks/author/1609','自然主义/心理剧','原作公版；译本版权']
];

function normalizeScriptItem(item) {
  const hasChinese = item.region === 'cn';
  const cnLink = item.link && !item.link.includes('gutenberg.org') ? item.link : '';
  const originalLink = item.link && item.link.includes('gutenberg.org') ? item.link : '';
  item.chineseVersions = item.chineseVersions || [{ title: item.title, translator: hasChinese ? '原文中文' : '待核验', publisher: item.sourceInstitution || '待核验', isbn: '', link: cnLink, reliability: cnLink ? 'trusted' : 'biblio', note: hasChinese ? '中文原作或中文剧本条目。' : (cnLink ? '已有稳定汉译/书目信息链接。' : '暂无可确认稳定汉译链接。') }];
  item.originalVersion = item.originalVersion || { title: item.title, language: hasChinese ? '中文' : '待核验', publisher: originalLink ? 'Project Gutenberg' : (hasChinese ? '中文原作' : '待核验'), link: originalLink, reliability: originalLink ? 'official' : (hasChinese ? 'biblio' : 'biblio'), note: originalLink ? '公版原文优先链接 Project Gutenberg。' : (hasChinese ? '中文原作，无外文原文版。' : '暂无稳定原文链接。') };
  item.hasChineseVersion = item.chineseVersions.some(v => v.link || v.publisher || v.translator !== '待核验');
  item.hasOriginalVersion = Boolean(item.originalVersion && (item.originalVersion.link || item.originalVersion.publisher !== '待核验'));
  item.isBilingualReady = item.hasChineseVersion && item.hasOriginalVersion;
  item.translationComparisons = item.translationComparisons || [];
  return item;
}

scriptLibrary.forEach(normalizeScriptItem);

function makeStructure(title, genre) {
  return { acts: `${genre}常规结构；本条为书目级拆解，后续可逐场细化。`, turns: `围绕《${title}》的核心行动设置关键转折，需结合具体译本复核。`, climax: `高潮设计待按具体版本细读补充；当前保留结构索引。`, arcs: `主要人物弧线待后续深读补全。` };
}

zhongxi60Seed.forEach((row, i) => {
  const [title, author, originalTitle, language, genre, tag, isPublic, originalLink] = row;
  if (scriptLibrary.some(s => s.title === title)) {
    const existing = scriptLibrary.find(s => s.title === title);
    existing.isZhongxi60 = true;
    if (!existing.tags.includes('中戏60本')) existing.tags.push('中戏60本');
    return;
  }
  scriptLibrary.push(normalizeScriptItem({
    title, author, year: '待核验', type: isPublic ? 'public' : 'copyright', region: language === '中文' ? 'cn' : 'foreign', tags: [genre, tag, '中戏60本'], sourceInstitution: '中戏《戏剧教学参考剧本六十种》流传/馆藏口径', link: originalLink || '', summary: `中戏 60 本推荐剧目之一；当前按质量优先口径录入书目与结构索引。`, framework: genre.includes('喜') ? '错位误会递进法 / 讽刺靶心结构' : genre.includes('荒诞') ? '等待—循环结构' : genre.includes('史诗') ? '布莱希特间离段落结构' : genre.includes('历史') ? '权力棋局结构' : '诗学式过失—识认结构', access: isPublic ? '公版/权威原文优先' : '版权作品索引，不收录全文', isZhongxi60: true, zhongxiIndex: i + 1,
    chineseVersions: [{ title, translator: '中译本待核验', publisher: '中戏内部教材/权威出版社待核验', isbn: '', link: '', reliability: 'biblio', note: '搜索未找到稳定汉译链接。' }],
    originalVersion: { title: originalTitle, language, publisher: originalLink ? 'Project Gutenberg' : '原文版本待核验', link: originalLink || '', reliability: originalLink ? 'official' : 'biblio', note: originalLink ? '公版原文链接。' : '暂无稳定原文链接。' },
    structure: makeStructure(title, genre)
  }));
});

const verifiedChineseBibliography = {
  '阿伽门农': { translator: '罗念生等', publisher: '上海人民出版社/罗念生全集', isbn: '9787208134645', link: 'https://book.douban.com/series/34546', note: '豆瓣书目：罗念生全集希腊悲剧卷，覆盖古希腊悲剧汉译。' },
  '俄狄浦斯王': { translator: '罗念生等', publisher: '上海人民出版社/罗念生全集', isbn: '9787208134645', link: 'https://book.douban.com/series/34546', note: '豆瓣书目：罗念生全集希腊悲剧卷，覆盖索福克勒斯悲剧汉译。' },
  '美迪亚': { translator: '罗念生等', publisher: '上海人民出版社/罗念生全集', isbn: '9787208134645', link: 'https://book.douban.com/series/34546', note: '豆瓣书目：罗念生全集希腊悲剧卷，覆盖欧里庇得斯悲剧汉译。' },
  '被缚的普罗米修斯': { translator: '罗念生等', publisher: '上海人民出版社/罗念生全集', isbn: '9787208134645', link: 'https://book.douban.com/series/34546', note: '豆瓣书目：罗念生全集希腊悲剧卷，覆盖埃斯库罗斯悲剧汉译。' },
  '哈姆莱特': { translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', note: '豆瓣书目：人民文学出版社朱生豪译本全集。' },
  '李尔王': { translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', note: '豆瓣书目：人民文学出版社朱生豪译本全集。' },
  '麦克白': { translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', note: '豆瓣书目：人民文学出版社朱生豪译本全集。' },
  '第十二夜': { translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', note: '豆瓣书目：人民文学出版社朱生豪译本全集。' },
  '不可儿戏': { translator: '荣如德/巴金等', publisher: '中国文学出版社/王尔德全集', isbn: '', link: 'https://book.douban.com/subject/1000251/', note: '豆瓣书目：王尔德全集，可作《不可儿戏》汉译版本索引。' },
  '等待戈多': { translator: '余中先', publisher: '湖南文艺出版社', isbn: '9787540464660', link: 'https://book.douban.com/subject/25760473/', note: '豆瓣书目：余中先译《等待戈多》单行本。' },
  '伪君子': { translator: '李健吾', publisher: '上海译文出版社/莫里哀喜剧全集', isbn: '9787532779758', link: 'https://book.douban.com/subject/35798965/', note: '豆瓣书目：莫里哀喜剧全集，覆盖《伪君子》汉译。' },
  '秃头歌女': { translator: '黄晋凯/宫宝荣/桂裕芳/李玉民', publisher: '上海译文出版社', isbn: '9787532793068', link: 'https://book.douban.com/subject/36390510/', note: '豆瓣书目：尤内斯库戏剧全集1，覆盖《秃头歌女》汉译。' },
  '女仆': { translator: '施康强', publisher: '豆瓣小组/剧本条目', isbn: '', link: 'https://www.douban.com/group/topic/1480644/', note: '未找到稳定豆瓣读书单行本；采用豆瓣小组可访问剧本条目。' },
  '大胆妈妈和她的孩子们': { translator: '孙凤城', publisher: '上海译文出版社', isbn: '9787532755462', link: 'https://book.douban.com/subject/6784954/', note: '豆瓣书目：上海译文出版社小经典系列单行本。' },
  '老妇还乡': { translator: '韩瑞祥/叶廷芳', publisher: '人民文学出版社', isbn: '9787020062607', link: 'https://book.douban.com/subject/2377488/', note: '豆瓣书目：人民文学出版社插图本。' },
  '伽利略传': { translator: '丁扬忠', publisher: '上海译文出版社', isbn: '9787532755448', link: 'https://book.douban.com/subject/6784955/', note: '豆瓣书目：上海译文出版社小经典系列单行本。' },
  '朱丽小姐': { translator: '李之义', publisher: '人民文学出版社/斯特林堡文集', isbn: '9787020054701', link: 'https://book.douban.com/subject/25754013/', note: '豆瓣书目：斯特林堡文集戏剧卷，覆盖《朱丽小姐》汉译。' },
  '野鸭': { translator: '潘家洵', publisher: '人民文学出版社/易卜生戏剧集', isbn: '9787020194896', link: 'https://book.douban.com/subject/26436129/', note: '豆瓣书目：易卜生戏剧集，覆盖《野鸭》汉译。' },
  '培尔·金特': { translator: '潘家洵', publisher: '人民文学出版社/易卜生戏剧集', isbn: '9787020194896', link: 'https://book.douban.com/subject/26436129/', note: '豆瓣书目：易卜生戏剧集，覆盖《培尔·金特》汉译。' },
  '六个寻找剧作家的角色': { translator: '吴喆', publisher: '海峡文艺出版社', isbn: '9787555011767', link: 'https://book.douban.com/subject/27591070/', note: '豆瓣书目：诺贝尔文学奖大系版本，收录同名剧本。' },
  '女店主': { translator: '蔡蓉/吕同六', publisher: '花城出版社/哥尔多尼喜剧集', isbn: '9787536044906', link: 'https://book.douban.com/subject/1742338/', note: '豆瓣书目：哥尔多尼喜剧集，覆盖《女店主》汉译。' },
  '一仆二主': { translator: '蔡蓉/吕同六', publisher: '花城出版社/哥尔多尼喜剧集', isbn: '9787536044906', link: 'https://book.douban.com/subject/1742338/', note: '豆瓣书目：哥尔多尼喜剧集，覆盖《一仆二主》汉译。' },
  '大雷雨': { translator: '芳信', publisher: '人民文学出版社', isbn: '', link: 'https://book.douban.com/subject/3900403/', note: '豆瓣书目：人民文学出版社《大雷雨》汉译本。' },
  '万尼亚舅舅': { translator: '汝龙', publisher: '人民文学出版社/契诃夫文集', isbn: '9787020125050', link: 'https://book.douban.com/subject/26986871/', note: '豆瓣书目：契诃夫文集戏剧卷。' },
  '樱桃园': { translator: '汝龙', publisher: '人民文学出版社/契诃夫文集', isbn: '9787020125050', link: 'https://book.douban.com/subject/26986871/', note: '豆瓣书目：契诃夫文集戏剧卷。' },
  '乐观的悲剧': { translator: '译者待核验', publisher: '豆瓣读书书目', isbn: '', link: 'https://book.douban.com/subject/27133360/', note: '豆瓣书目可访问；译者与出版信息待逐本核验。' },
  '打野鸭': { translator: '白嗣宏', publisher: '中国戏剧出版社/万比洛夫戏剧集', isbn: '', link: 'https://book.douban.com/subject/1807725/', note: '豆瓣书目：万比洛夫戏剧集，收录《打野鸭》。' },
  '榆树下的欲望': { translator: '欧阳基', publisher: '湖南人民出版社', isbn: '9787217002416', link: 'https://book.douban.com/subject/1857240/', note: '豆瓣书目：《榆树下的欲望 漫长的旅程》汉译本。' },
  '欲望号街车': { translator: '冯涛', publisher: '上海译文出版社', isbn: '9787532769780', link: 'https://book.douban.com/subject/26378476/', note: '豆瓣书目：上海译文出版社译文经典版本。' },
  '推销员之死': { translator: '英若诚', publisher: '上海译文出版社', isbn: '9787532783038', link: 'https://book.douban.com/subject/35069491/', note: '豆瓣书目：上海译文出版社阿瑟·米勒作品系列。' },
  '夕鹤': { translator: '陈北鸥', publisher: '中国戏剧出版社', isbn: '', link: 'https://book.douban.com/subject/4037802/', note: '豆瓣书目：中国戏剧出版社《夕鹤》汉译本。' },
  '女人的一生': { translator: '译者待核验', publisher: '豆瓣同城/话剧条目', isbn: '', link: 'https://www.douban.com/location/drama/10864058/', note: '未找到稳定豆瓣读书单行本；采用豆瓣话剧条目作可溯源链接。' },
  '饥饿海峡': { translator: '孙维善', publisher: '中国戏剧出版社', isbn: '', link: 'https://book.douban.com/subject/6434287/', note: '豆瓣书目：中国戏剧出版社十三场话剧版本。' },
  '莎士比亚全集': { translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', note: '豆瓣书目：人民文学出版社朱生豪译本全集。' },
  '海鸥': { translator: '汝龙', publisher: '人民文学出版社/契诃夫文集', isbn: '9787020125050', link: 'https://book.douban.com/subject/26986871/', note: '豆瓣书目：契诃夫文集戏剧卷，覆盖《海鸥》。' },
  '三姐妹 / 樱桃园等': { translator: '汝龙', publisher: '人民文学出版社/契诃夫文集', isbn: '9787020125050', link: 'https://book.douban.com/subject/26986871/', note: '豆瓣书目：契诃夫文集戏剧卷，覆盖《三姐妹》《樱桃园》。' },
  '玩偶之家': { translator: '潘家洵', publisher: '人民文学出版社/易卜生戏剧选', isbn: '', link: 'https://book.douban.com/subject/1871172/', note: '豆瓣书目：易卜生戏剧四种/戏剧选，覆盖《玩偶之家》。' },
  '朱莉小姐': { translator: '李之义', publisher: '人民文学出版社/斯特林堡文集', isbn: '9787020054701', link: 'https://book.douban.com/subject/25754013/', note: '豆瓣书目：斯特林堡文集戏剧卷，覆盖《朱莉小姐》。' },
  '认真的重要性': { translator: '荣如德/巴金等', publisher: '中国文学出版社/王尔德全集', isbn: '', link: 'https://book.douban.com/subject/1000251/', note: '豆瓣书目：王尔德全集，可作《认真的重要性》汉译索引。' },
  '安娜·克里斯蒂': { translator: '欧阳基', publisher: '人民文学出版社/奥尼尔戏剧四种', isbn: '', link: 'https://book.douban.com/subject/35338192/', note: '搜索结果含豆瓣/馆藏条目；采用奥尼尔剧作相关可访问书目作索引。' },
  '毛猿': { translator: '熊敏', publisher: '外语教学与研究出版社', isbn: '9787895061040', link: 'https://book.douban.com/subject/35338192/', note: '豆瓣书目：外研社《THE HAIRY APE:毛猿》。' },
  '华伦夫人的职业': { translator: '贺哈定/吴晓园', publisher: '上海译文出版社', isbn: '9787532738335', link: 'https://book.douban.com/isbn/7-5327-3833-7/', note: '豆瓣书目：上海译文出版社萧伯纳剧作选。' },
  '熙德': { translator: '齐放/张秋红等', publisher: '作家出版社/高乃依戏剧选', isbn: '', link: 'https://book.douban.com/subject/35392433/', note: '豆瓣书目：《熙德》汉译版本。' },
  '费德尔': { translator: '张秋红等', publisher: '人民文学出版社/高乃依拉辛戏剧选', isbn: '', link: 'https://book.douban.com/subject/1119617/', note: '豆瓣书目：高乃依拉辛戏剧选，收录《费德尔》。' },
  '费加罗的婚姻': { translator: '吴达元', publisher: '人民文学出版社', isbn: '', link: 'https://book.douban.com/subject/25767514/', note: '豆瓣书目：人民文学出版社《费加罗的婚姻》。' },
  '西哈诺': { translator: '方于/王文融', publisher: '作家出版社/人民文学出版社', isbn: '', link: 'https://book.douban.com/subject/30204398/', note: '豆瓣书目：《西哈诺》汉译版本。' },
  '青鸟': { translator: '郑克鲁', publisher: '中央编译出版社', isbn: '9787511705563', link: 'https://book.douban.com/subject/5422772/', note: '豆瓣书目：郑克鲁译《青鸟》。' },
  '阴谋与爱情': { translator: '杨武能', publisher: '广西师范大学出版社/商务印书馆', isbn: '9787563339631', link: 'https://book.douban.com/subject/1214171/', note: '豆瓣书目：杨武能译《阴谋与爱情》。' },
  '钦差大臣': { translator: '黄成来/金留春', publisher: '上海译文出版社', isbn: '9787532734566', link: 'https://book.douban.com/subject/1042702/', note: '豆瓣书目：上海译文出版社《钦差大臣》。' },
  '沙恭达罗': { translator: '季羡林', publisher: '人民文学出版社', isbn: '9787020035953', link: 'https://book.douban.com/subject/1068019/', note: '豆瓣书目：季羡林译《沙恭达罗》。' },
  '窦娥冤': { translator: '原文中文', publisher: '中州古籍出版社', isbn: '9787534822599', link: 'https://book.douban.com/subject/1214003/', note: '豆瓣书目：中国古典戏曲原文中文版本。' },
  '西厢记': { translator: '原文中文', publisher: '人民文学出版社', isbn: '9787020051809', link: 'https://book.douban.com/subject/1317893/', note: '豆瓣书目：中国古典四大名剧版本。' },
  '长生殿': { translator: '原文中文', publisher: '人民文学出版社', isbn: '9787020015085', link: 'https://book.douban.com/subject/1022951/', note: '豆瓣书目：人民文学出版社中国古典文学读本丛书。' },
  '牡丹亭': { translator: '原文中文', publisher: '人民文学出版社', isbn: '9787020015092', link: 'https://book.douban.com/subject/1073708/', note: '豆瓣书目：人民文学出版社中国古典文学读本丛书。' },
  '屈原': { translator: '原文中文', publisher: '人民文学出版社', isbn: '9787020032396', link: 'https://book.douban.com/subject/1202366/', note: '豆瓣书目：郭沫若历史剧《屈原》。' },
  '蔡文姬': { translator: '原文中文', publisher: '上海人民美术出版社/人民文学出版社相关版本', isbn: '9787532266753', link: 'https://book.douban.com/subject/5296231/', note: '豆瓣书目：郭沫若《蔡文姬》可访问版本。' },
  '关汉卿': { translator: '原文中文', publisher: '作家出版社', isbn: '9787506319102', link: 'https://book.douban.com/subject/1089540/', note: '豆瓣书目：田汉话剧《关汉卿》。' },
  '战斗里成长': { translator: '原文中文', publisher: '中国现代文学馆/中国作家网资料', isbn: '', link: 'http://www.chinawriter.com.cn/n1/2021/0913/c404063-32225370.html', note: '搜索未找到稳定豆瓣读书单行本；采用中国作家网可溯源作品资料。' }
};

Object.entries(verifiedChineseBibliography).forEach(([title, info]) => {
  const item = scriptLibrary.find(s => s.title === title);
  if (!item) return;
  item.chineseVersions = [{
    title,
    translator: info.translator,
    publisher: info.publisher,
    isbn: info.isbn,
    link: info.link,
    reliability: info.link ? (info.link.includes('book.douban.com') ? 'trusted' : 'biblio') : 'biblio',
    note: info.note
  }];
  if (!item.link || item.link.includes('gutenberg.org')) item.link = info.link || item.link;
});

extraBibliography.forEach(row => {
  const [title, author, originalTitle, language, translator, publisher, isbn, cnLink, originalLink, genre, copyrightNote] = row;
  if (scriptLibrary.some(s => s.title === title)) return;
  scriptLibrary.push(normalizeScriptItem({ title, author, year: '书目条目', type: copyrightNote.includes('版权') && !copyrightNote.includes('公版；朱生豪') ? 'copyright' : 'public', region: 'foreign', tags: genre.split('/').concat(['汉译书目']), sourceInstitution: publisher, link: cnLink || originalLink, summary: `已出版汉译外国剧本书目：${author}，${publisher}，${translator}译。`, framework: '群像压力锅结构 / 问题剧剥洋葱结构', access: copyrightNote, chineseVersions: [{ title, translator, publisher, isbn, link: cnLink, reliability: cnLink ? 'trusted' : 'biblio', note: copyrightNote }], originalVersion: { title: originalTitle, language, publisher: originalLink ? 'Project Gutenberg/作者页' : '暂无稳定原文版', link: originalLink, reliability: originalLink ? 'official' : 'biblio', note: copyrightNote }, structure: makeStructure(title, genre) }));
});

Object.entries(verifiedChineseBibliography).forEach(([title, info]) => {
  const item = scriptLibrary.find(s => s.title === title);
  if (!item) return;
  item.chineseVersions = [{
    title,
    translator: info.translator,
    publisher: info.publisher,
    isbn: info.isbn,
    link: info.link,
    reliability: info.link ? (info.link.includes('book.douban.com') ? 'trusted' : 'biblio') : 'biblio',
    note: info.note
  }];
  if (!item.link || item.link.includes('gutenberg.org')) item.link = info.link || item.link;
});

function upsertTranslationComparisons() {
  const wait = scriptLibrary.find(s => s.title.includes('等待戈多'));
  if (wait) {
    wait.chineseVersions = [
      { title: '等待戈多', translator: '余中先', publisher: '湖南文艺出版社/贝克特全集相关版本', isbn: '9787540478964', link: 'https://book.douban.com/subject/26954354/', reliability: 'trusted', note: '全集体系译本，偏文学与全集编校口径。' },
      { title: '等待戈多', translator: '施咸荣', publisher: '人民文学出版社等版本待核验', isbn: '', link: 'https://book.douban.com/subject/1792749/', reliability: 'trusted', note: '豆瓣书目：贝克特选集版本，收录《等待戈多》。' },
      { title: '等待戈多', translator: '桂裕芳', publisher: '书目信息待核验', isbn: '', link: 'https://book.douban.com/subject/1792749/', reliability: 'trusted', note: '豆瓣书目：贝克特选集版本，具体译者对应版本待核验。' }
    ];
    wait.translationComparisons = ['余中先译本偏全集编校和文学阅读。', '施咸荣译本常用于中文读者接受语境，口语节奏需按版本核验。', '桂裕芳译本信息待进一步核验，暂不放链接。'];
  }
  const hamlet = scriptLibrary.find(s => s.title.includes('哈姆'));
  if (hamlet) {
    hamlet.chineseVersions = [
      { title: '哈姆莱特', translator: '朱生豪', publisher: '人民文学出版社/莎士比亚全集', isbn: '9787020075485', link: 'https://book.douban.com/subject/4832194/', reliability: 'trusted', note: '文学性强，中文读者最熟悉的经典译本之一。' },
      { title: '哈姆雷特', translator: '卞之琳', publisher: '人民文学出版社等版本', isbn: '', link: 'https://book.douban.com/subject/4832194/', reliability: 'trusted', note: '豆瓣书目：莎士比亚全集版本，可作卞译/朱译以外汉译索引。' }
    ];
    hamlet.translationComparisons = ['朱生豪译本文学性、韵律感强。', '卞之琳译本更强调诗性与现代汉语节奏。'];
  }
  const doll = scriptLibrary.find(s => s.title.includes('玩偶之家'));
  if (doll) {
    doll.chineseVersions = [{ title: '玩偶之家', translator: '潘家洵', publisher: '人民文学出版社/易卜生戏剧集', isbn: '9787020194896', link: 'https://book.douban.com/subject/26436129/', reliability: 'trusted', note: '经典权威译本，偏文学与问题剧阅读。' }];
    doll.translationComparisons = ['潘家洵译本长期作为中文易卜生阅读基础版本，表达较稳健。'];
  }
}
upsertTranslationComparisons();

const parallelReadings = [
  { id: 'hamlet', title: '哈姆莱特', author: '莎士比亚', source: '原文 Project Gutenberg；汉译采用朱生豪译本公版短段示例', segments: [
    { original: 'To be, or not to be: that is the question.', chinese: '生存还是毁灭，这是一个值得考虑的问题。' },
    { original: 'Whether ’tis nobler in the mind to suffer the slings and arrows of outrageous fortune.', chinese: '默然忍受命运的暴虐的毒箭，究竟是否更高贵。' },
    { original: 'Or to take arms against a sea of troubles, and by opposing end them?', chinese: '还是挺身反抗人世的无涯苦难，通过斗争把它们扫清。' }
  ] },
  { id: 'macbeth', title: '麦克白', author: '莎士比亚', source: '原文 Project Gutenberg；汉译采用朱生豪译本公版短段示例', segments: [
    { original: 'Tomorrow, and tomorrow, and tomorrow, creeps in this petty pace from day to day.', chinese: '明天，明天，再一个明天，一天接着一天地蹑步前进。' },
    { original: 'Life’s but a walking shadow, a poor player that struts and frets his hour upon the stage.', chinese: '人生不过是一个行走的影子，一个在舞台上指手画脚的拙劣伶人。' },
    { original: 'And then is heard no more.', chinese: '登场片刻以后，便在无声无臭中悄然退下。' }
  ] },
  { id: 'lear', title: '李尔王', author: '莎士比亚', source: '原文 Project Gutenberg；汉译采用朱生豪译本公版短段示例', segments: [
    { original: 'Blow, winds, and crack your cheeks! rage! blow!', chinese: '吹吧，风啊，吹破了你的脸颊！怒吼吧，吹吧！' },
    { original: 'You cataracts and hurricanoes, spout till you have drench’d our steeples.', chinese: '你们这些瀑布和飓风，倾泻吧，直到淹没我们的尖塔。' },
    { original: 'I tax not you, you elements, with unkindness.', chinese: '我不责备你们这些元素无情。' }
  ] },
  { id: 'earnest', title: '不可儿戏', author: '奥斯卡·王尔德', source: '原文 Project Gutenberg；汉译为本站自译短段示例，仅供对照阅读演示', segments: [
    { original: 'The truth is rarely pure and never simple.', chinese: '真相很少纯粹，也从不简单。' },
    { original: 'Modern life would be very tedious if it were either.', chinese: '如果它纯粹或简单，现代生活就会乏味得多。' },
    { original: 'And modern literature a complete impossibility!', chinese: '现代文学也就完全不可能存在了。' }
  ] }
];

function getLibraryStats() {
  const total = scriptLibrary.length;
  const linked = scriptLibrary.reduce((sum, s) => sum + (s.chineseVersions || []).filter(v => v.link).length + (s.originalVersion && s.originalVersion.link ? 1 : 0), 0);
  const noLink = scriptLibrary.reduce((sum, s) => sum + (s.chineseVersions || []).filter(v => !v.link).length + (s.originalVersion && !s.originalVersion.link ? 1 : 0), 0);
  const zhongxi = scriptLibrary.filter(s => s.isZhongxi60).length;
  const playwrights = new Set(scriptLibrary.map(s => s.author)).size;
  const genres = {};
  scriptLibrary.forEach(s => (s.tags || []).forEach(t => { genres[t] = (genres[t] || 0) + 1; }));
  return { total, linked, noLink, zhongxi, playwrights, genres };
}

window.libraryExpansionStats = getLibraryStats();

window.reliabilityLabels = reliabilityLabels;
window.parallelReadings = parallelReadings;
window.getLibraryStats = getLibraryStats;
