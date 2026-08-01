/* global storyTypes, parallelReadings, getAllFrameworks, scriptLibrary, reliabilityLabels, getLibraryStats, dailyVideoSources */
const SUPABASE_URL = 'https://uoshmiqwqhfnkomnjqsa.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_tO7eSddTeedoOd3nlpUqUQ_RGHmhsmK';
const supabaseClient = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/*
  Supabase 控制台 SQL 说明：
  1. 请执行本目录 `supabase_schema.sql`，其中包含 profiles/scripts/likes/comments/chat_messages 建表语句。
  2. 对话记录表 `public.chat_messages` 已启用 RLS；select/insert/update/delete 均使用 `auth.uid() = user_id`，确保每个登录用户只能读写自己的 AI 对话数据。
  3. DeepSeek 等模型 API Key 不写入数据库，仍只保存在用户本地浏览器 localStorage 的 `spark_api_keys` 中。
*/
const frameworkOptions = ['三幕式', '英雄旅程', '起承转合', '悬疑反转', '群像结构', '人物弧光', '史诗剧', '荒诞剧', '成长剧', '社会剧'];
const modelConfigs = [
  { id: 'deepseek-v4-flash', name: 'DeepSeek V4 Flash', endpoint: 'https://api.deepseek.com/v1/chat/completions', provider: 'openai', group: 'direct', free: true },
  { id: 'qwen-long', name: '通义 Qwen-Long', endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions', provider: 'openai', group: 'direct', free: true, context: '1M上下文' },
  { id: 'kimi-k3', name: 'Kimi K3', endpoint: 'https://api.moonshot.cn/v1/chat/completions', provider: 'openai', group: 'direct', free: true, context: '1M上下文' },
  { id: 'glm-z1-flash', name: '智谱 GLM-Z1 Flash', endpoint: 'https://open.bigmodel.cn/api/paas/v4/chat/completions', provider: 'openai', group: 'direct', free: true },
  { id: 'hunyuan-turbos-latest', name: '混元 Turbo', endpoint: 'https://api.hunyuan.cloud.tencent.com/v1/chat/completions', provider: 'openai', group: 'direct', free: true },
  { id: 'deepseek-v4-pro', name: 'DeepSeek V4 Pro', endpoint: 'https://api.deepseek.com/v1/chat/completions', provider: 'openai', group: 'direct', free: false },
  { id: 'deepseek-reasoner', name: 'DeepSeek R1', endpoint: 'https://api.deepseek.com/v1/chat/completions', provider: 'openai', group: 'direct', free: false },
  { id: 'gemini-2.5-flash', name: 'Gemini 2.5 Flash', endpoint: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', provider: 'openai', group: 'vpn', free: true },
  { id: 'gpt-5.5', name: 'GPT-5.5', endpoint: 'https://api.openai.com/v1/responses', provider: 'responses', group: 'vpn', free: false },
  { id: 'gpt-5.5-pro', name: 'GPT-5.5 Pro', endpoint: 'https://api.openai.com/v1/responses', provider: 'responses', group: 'vpn', free: false },
  { id: 'gpt-4.1', name: 'GPT-4.1', endpoint: 'https://api.openai.com/v1/chat/completions', provider: 'openai', group: 'vpn', free: false },
  { id: 'claude-fable-5', name: 'Claude Fable 5', endpoint: 'https://api.anthropic.com/v1/messages', provider: 'claude', group: 'vpn', free: false },
  { id: 'claude-sonnet-4-5', name: 'Claude Sonnet 4.5', endpoint: 'https://api.anthropic.com/v1/messages', provider: 'claude', group: 'vpn', free: false },
  { id: 'gemini-2.5-pro', name: 'Gemini 2.5 Pro', endpoint: 'https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', provider: 'openai', group: 'vpn', free: false }
];
const systemPrompts = {
  framework: '你是一位资深编剧结构顾问。用户会描述一个故事概念或问题，你需要：\n1. 分析适合的戏剧结构框架（三幕式/英雄旅程/麦基价值极性等）\n2. 给出具体的幕/场/节拍建议\n3. 指出潜在的叙事风险和优化空间\n回复用结构化格式，条理清晰。',
  coach: '你是用户的写作搭档，专注于中文剧本创作陪跑。你的职责：\n1. 帮助用户突破写作瓶颈，给出具体的场景/对白/动作建议\n2. 保持用户已建立的故事世界观和人物性格一致性\n3. 在用户迷失方向时，温和地回溯结构脉络\n4. 不替用户写完整剧本，而是给出方向和素材，让用户保持创作主导权'
};
const chatModeLabels = {
  framework: '框架匹配',
  coach: '完善灵感'
};
const state = {
  selectedTypeId: storyTypes[0].id,
  selectedFrameworkIndex: 0,
  scriptFilter: 'all',
  scriptQuery: '',
  filterCn: false,
  filterOriginal: false,
  filterBilingual: false,
  selectedParallelId: '',
  parallelQuery: '',
  session: null,
  profile: null,
  community: [],
  comments: [],
  likedScriptIds: new Set(),
  communityQuery: '',
  frameworkFilter: 'all',
  leaderboardPeriod: 'today',
  leaderboardFramework: 'all',
  chatMode: '',
  chatMessages: [],
  selectedChatFramework: '',
  isSending: false,
  dailyVideoPlaying: false,
  activeFrameworkModal: null
};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const allFrameworks = () => getAllFrameworks();
const BASE_PATH = location.pathname.startsWith('/RaymondWrite') ? '/RaymondWrite' : '';
const toAppPath = (path = '/') => {
  const cleanPath = path.startsWith(BASE_PATH) ? path.slice(BASE_PATH.length) || '/' : path;
  return cleanPath.startsWith('/') ? cleanPath : `/${cleanPath}`;
};
const toUrlPath = (path = '/') => `${BASE_PATH}${toAppPath(path)}`;
const esc = (value = '') => String(value).replace(/[&<>"']/g, (s) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[s]));

async function init() {
  renderTypes();
  renderFrameworks();
  renderParallelReadings();
  renderStats();
  renderDailyFramework();
  renderScripts();
  renderFrameworkSelects();
  renderModelSelect();
  renderKeyFields();
  renderChatHistory();
  bindEvents();
  bindCompactTextareas();
  bindDailyAccordions();
  await initAuth();
  setupRealtimeOrPolling();
  routeFromLocation();
}

function bindEvents() {
  $('#scriptSearch')?.addEventListener('input', (event) => { state.scriptQuery = event.target.value.trim().toLowerCase(); renderScripts(); renderAuthorAutocomplete(event.target.value); });
  $('#scriptSearch')?.addEventListener('focus', (event) => renderAuthorAutocomplete(event.target.value));
  $('#scriptSearch')?.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeAuthorAutocomplete(); });
  $('#parallelSearch')?.addEventListener('input', (event) => { state.parallelQuery = event.target.value.trim().toLowerCase(); renderParallelReadings(); });
  $$('.filter').forEach((button) => button.addEventListener('click', () => { $$('.filter').forEach((item) => item.classList.remove('active')); button.classList.add('active'); state.scriptFilter = button.dataset.filter; renderScripts(); }));
  ['filterCn', 'filterOriginal', 'filterBilingual'].forEach((id) => { const input = $('#' + id); if (input) input.addEventListener('change', () => { state[id] = input.checked; renderScripts(); }); });
  $('#recommendBtn')?.addEventListener('click', () => renderRecommendations($('#ideaInput').value));
  $('#clearIdeaBtn')?.addEventListener('click', () => { $('#ideaInput').value = ''; $('#recommendations').innerHTML = ''; });
  $('#coachBtn')?.addEventListener('click', () => renderOutlines($('#coachInput').value));
  $('#favoriteDailyBtn')?.addEventListener('click', favoriteDailyFramework);
  $('#shareDailyBtn')?.addEventListener('click', shareDailyFramework);
  $('#submitChallengeBtn')?.addEventListener('click', submitChallenge);
  $('#toggleHistoryBtn')?.addEventListener('click', () => $('#challengeHistory')?.classList.toggle('hidden'));
  $('#loginOpenBtn')?.addEventListener('click', () => openModal('authModal'));
  $('#authCloseBtn')?.addEventListener('click', () => closeModal('authModal'));
  $('#frameworkModalCloseBtn')?.addEventListener('click', closeFrameworkModal);
  $('#frameworkModal')?.addEventListener('click', (event) => { if (event.target.id === 'frameworkModal') closeFrameworkModal(); });
  $('#parallelModalCloseBtn')?.addEventListener('click', closeParallelModal);
  $('#parallelModal')?.addEventListener('click', (event) => { if (event.target.id === 'parallelModal') closeParallelModal(); });
  $('#publishCloseBtn')?.addEventListener('click', () => closeModal('publishModal'));
  $('#publishOpenBtn')?.addEventListener('click', () => ensureLogin(() => openModal('publishModal')));
  $('#authLoginBtn')?.addEventListener('click', () => loginOrSignup('login'));
  $('#authSignupBtn')?.addEventListener('click', () => loginOrSignup('signup'));
  $('#logoutBtn')?.addEventListener('click', logout);
  $('#myWorksBtn')?.addEventListener('click', () => state.session && navigateTo(`/profile/${state.session.user.id}`));
  $('#publishSubmitBtn')?.addEventListener('click', submitScript);
  $('#communitySearch')?.addEventListener('input', (event) => { state.communityQuery = event.target.value.trim().toLowerCase(); renderCommunityList(); });
  $('#communityFrameworkFilter')?.addEventListener('change', (event) => { state.frameworkFilter = event.target.value; renderCommunityList(); });
  $('#leaderboardPeriod')?.addEventListener('change', (event) => { state.leaderboardPeriod = event.target.value; loadLeaderboard(); });
  $('#leaderboardFramework')?.addEventListener('change', (event) => { state.leaderboardFramework = event.target.value; loadLeaderboard(); });
  $('#detailLikeBtn')?.addEventListener('click', () => toggleLike($('#detailLikeBtn').dataset.scriptId));
  $('#commentSubmitBtn')?.addEventListener('click', submitComment);
  $('#keyConfigBtn')?.addEventListener('click', () => { renderKeyFields(); openModal('keyModal'); });
  $('#keyCloseBtn')?.addEventListener('click', () => closeModal('keyModal'));
  $('#keySaveBtn')?.addEventListener('click', saveApiKeys);
  $('#modelSelect')?.addEventListener('change', (event) => {
    const model = modelConfigs.find((item) => item.id === event.target.value);
    setChatFeedback(model?.group === 'vpn' ? '🔒 该模型需要 VPN 环境。' : (model?.context || ''));
  });
  $('#chatSendBtn')?.addEventListener('click', sendChatMessage);
  document.addEventListener('click', handleDailyVideoAction);
  $('#chatInput')?.addEventListener('keydown', (event) => { if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) sendChatMessage(); });
  $('#frameworkMentionBtn')?.addEventListener('click', toggleFrameworkPicker);
  $('#modeSelectBtn')?.addEventListener('click', toggleModeDropdown);
  $$('#modeDropdown .mode-dropdown-item').forEach((button) => button.addEventListener('click', () => setChatMode(button.dataset.mode)));
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.framework-picker') && !event.target.closest('#frameworkMentionBtn')) closeFrameworkPicker();
    if (!event.target.closest('#authorAutocomplete') && !event.target.closest('#scriptSearch')) closeAuthorAutocomplete();
    if (!event.target.closest('.model-picker')) closeModelPicker();
    if (!event.target.closest('.mode-select-wrapper')) closeModeDropdown();
  });
  const menuToggle = $('#menuToggle');
  const navLinks = $('#navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); });
  }
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-route]');
    if (!link) return;
    event.preventDefault();
    navLinks?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    navigateTo(link.getAttribute('href'));
  });
  window.addEventListener('popstate', routeFromLocation);
  window.addEventListener('hashchange', routeFromLocation);
}

function renderFrameworkSelects() {
  ['publishFramework', 'communityFrameworkFilter', 'leaderboardFramework'].forEach((id) => {
    const select = $('#' + id);
    if (!select) return;
    const first = id === 'publishFramework' ? '<option value="">选择框架类型</option>' : '<option value="all">全部框架</option>';
    select.innerHTML = first + frameworkOptions.map((item) => `<option value="${esc(item)}">${esc(item)}</option>`).join('');
  });
}

function modelLabel(model) {
  const icon = model.free ? '🟢' : '💰';
  const price = model.free ? '免费' : '付费';
  return `${icon} ${model.name} ${price}${model.context ? ` · ${model.context}` : ''}${model.group === 'vpn' ? ' 🔒 VPN' : ''}`;
}

function renderModelSelect() {
  const select = $('#modelSelect');
  if (!select) return;
  const optionHtml = (model) => `<option value="${esc(model.id)}">${esc(modelLabel(model))}</option>`;
  select.innerHTML = `<optgroup label="── 🇨🇳 国内直连 ──">${modelConfigs.filter((model) => model.group !== 'vpn').map(optionHtml).join('')}</optgroup><optgroup label="── 🔒 需要 VPN ──">${modelConfigs.filter((model) => model.group === 'vpn').map(optionHtml).join('')}</optgroup>`;
  renderCustomModelPicker();
}

function renderCustomModelPicker() {
  const select = $('#modelSelect');
  if (!select) return;
  let picker = $('#modelPicker');
  if (!picker) {
    select.insertAdjacentHTML('afterend', '<div class="model-picker" id="modelPicker"><button class="model-picker-trigger button-reset" id="modelPickerTrigger" type="button" aria-expanded="false"></button><div class="model-picker-menu" id="modelPickerMenu" hidden></div></div>');
    picker = $('#modelPicker');
  }
  const selected = modelConfigs.find((model) => model.id === select.value) || modelConfigs[0];
  select.value = selected.id;
  const trigger = $('#modelPickerTrigger');
  trigger.className = `model-picker-trigger button-reset ${selected.free ? 'free' : 'paid'}`;
  trigger.innerHTML = modelOptionHtml(selected);
  $('#modelPickerMenu').innerHTML = ['direct', 'vpn'].map((group) => {
    const title = group === 'direct' ? '── 🇨🇳 国内直连 ──' : '── 🔒 需要 VPN ──';
    return `<div class="model-picker-group ${group === 'vpn' ? 'vpn-group' : ''}"><div class="model-picker-title">${title}</div>${modelConfigs.filter((model) => model.group === group).map((model) => `<button type="button" class="model-option ${model.free ? 'free' : 'paid'} ${model.id === selected.id ? 'selected' : ''}" data-model="${esc(model.id)}">${modelOptionHtml(model)}</button>`).join('')}</div>`;
  }).join('');
  $('#modelPickerTrigger').onclick = (event) => { event.stopPropagation(); toggleModelPicker(); };
  $$('#modelPickerMenu .model-option').forEach((button) => button.addEventListener('click', () => chooseModel(button.dataset.model)));
}

function modelOptionHtml(model) {
  const status = model.group === 'vpn' ? '🔒' : '<span class="model-dot" aria-hidden="true"></span>';
  const price = model.free ? '免费' : '付费';
  const vpn = model.group === 'vpn' ? '<span class="model-badge vpn">VPN</span>' : '';
  const context = model.context ? '<small class="model-context">· 1M</small>' : '';
  return `<span class="model-inline"><span class="model-status">${status}</span><span class="model-name">${esc(model.name)}</span><span class="model-badge ${model.free ? 'free' : 'paid'}">${price}</span>${vpn}${context}</span>`;
}

function toggleModelPicker() {
  const menu = $('#modelPickerMenu');
  const trigger = $('#modelPickerTrigger');
  if (!menu || !trigger) return;
  const open = menu.hidden;
  menu.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
}

function closeModelPicker() {
  const menu = $('#modelPickerMenu');
  const trigger = $('#modelPickerTrigger');
  if (menu) menu.hidden = true;
  trigger?.setAttribute('aria-expanded', 'false');
}

function chooseModel(id) {
  const select = $('#modelSelect');
  const model = modelConfigs.find((item) => item.id === id);
  if (!select || !model) return;
  select.value = id;
  closeModelPicker();
  renderCustomModelPicker();
  setChatFeedback(model.group === 'vpn' ? '🔒 该模型需要 VPN 环境。' : (model.context || ''));
}

function getApiKeys() {
  try { return JSON.parse(localStorage.getItem('spark_api_keys') || '{}') || {}; } catch { return {}; }
}

function renderKeyFields() {
  const box = $('#keyFields');
  if (!box) return;
  const keys = getApiKeys();
  box.innerHTML = modelConfigs.map((model) => {
    const meta = [model.free ? '免费' : '付费', model.group === 'vpn' ? '🔒 VPN' : '', model.context || ''].filter(Boolean).join(' · ');
    return `<label class="key-field"><span>${esc(model.name)}${meta ? `<em>${esc(meta)}</em>` : ''}</span><input type="password" data-key-model="${esc(model.id)}" value="${esc(keys[model.id] || '')}" placeholder="粘贴 ${esc(model.id)} 的 API Key" /></label>`;
  }).join('');
  $$('[data-key-model]').forEach((input) => input.addEventListener('blur', () => autoSaveApiKeys()));
}

function persistApiKeys() {
  const keys = {};
  $$('[data-key-model]').forEach((input) => { if (input.value.trim()) keys[input.dataset.keyModel] = input.value.trim(); });
  localStorage.setItem('spark_api_keys', JSON.stringify(keys));
  return keys;
}

function showToast(message) {
  let toast = $('#sparkToast');
  if (!toast) {
    document.body.insertAdjacentHTML('beforeend', '<div id="sparkToast" class="spark-toast" role="status" aria-live="polite"></div>');
    toast = $('#sparkToast');
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function autoSaveApiKeys() {
  persistApiKeys();
  if ($('#keyFeedback')) $('#keyFeedback').textContent = '已自动保存到本地。';
}

function saveApiKeys() {
  persistApiKeys();
  if ($('#keyFeedback')) $('#keyFeedback').textContent = '配置已保存到本地。';
  showToast('配置已保存到本地');
  closeModal('keyModal');
}

function setChatFeedback(message) {
  if ($('#chatFeedback')) $('#chatFeedback').textContent = message || '';
}

function toggleModeDropdown(event) {
  event?.stopPropagation();
  const dropdown = $('#modeDropdown');
  const trigger = $('#modeSelectBtn');
  if (!dropdown || !trigger) return;
  const open = dropdown.hidden;
  dropdown.hidden = !open;
  trigger.setAttribute('aria-expanded', String(open));
}

function closeModeDropdown() {
  const dropdown = $('#modeDropdown');
  const trigger = $('#modeSelectBtn');
  if (dropdown) dropdown.hidden = true;
  trigger?.setAttribute('aria-expanded', 'false');
}

function setChatMode(mode) {
  state.chatMode = mode;
  const trigger = $('#modeSelectBtn');
  if (trigger) {
    trigger.textContent = chatModeLabels[mode] || '工具选择';
    trigger.classList.toggle('has-selection', Boolean(chatModeLabels[mode]));
  }
  $$('#modeDropdown .mode-dropdown-item').forEach((button) => {
    const selected = button.dataset.mode === mode;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-selected', String(selected));
  });
  closeModeDropdown();
  const placeholder = state.session ? '说说你的故事想法…' : '登录后才能使用 AI 对话功能…';
  if ($('#chatInput')) $('#chatInput').placeholder = placeholder;
}

function getFrameworkChoices() {
  return allFrameworks().map((framework) => ({ name: framework.name, type: framework.typeTitle, summary: framework.summary }));
}

function toggleFrameworkPicker(event) {
  event?.stopPropagation();
  const picker = $('#frameworkPicker');
  if (!picker) return;
  if (!picker.hidden) { closeFrameworkPicker(); return; }
  picker.innerHTML = getFrameworkChoices().map((framework) => `<button type="button" class="framework-choice button-reset" data-framework="${esc(framework.name)}"><strong>${esc(framework.name)}</strong><span>${esc(framework.type)}｜${esc(framework.summary).slice(0, 46)}${framework.summary.length > 46 ? '…' : ''}</span></button>`).join('');
  picker.querySelectorAll('.framework-choice').forEach((button) => button.addEventListener('click', () => selectChatFramework(button.dataset.framework)));
  picker.hidden = false;
  $('#frameworkMentionBtn')?.setAttribute('aria-expanded', 'true');
}

function closeFrameworkPicker() {
  const picker = $('#frameworkPicker');
  if (picker) picker.hidden = true;
  $('#frameworkMentionBtn')?.setAttribute('aria-expanded', 'false');
}

function selectChatFramework(name) {
  state.selectedChatFramework = name;
  closeFrameworkPicker();
}

function buildChatSystemPrompt() {
  const base = systemPrompts[state.chatMode] || systemPrompts.framework;
  return state.selectedChatFramework ? `${base}\n\n当前用户选择的框架：${state.selectedChatFramework}，请结合此框架给出建议` : base;
}

function renderMarkdown(text) {
  const blocks = [];
  const safe = esc(text || '').replace(/```([\s\S]*?)```/g, (_match, code) => {
    const token = `@@CODE_${blocks.length}@@`;
    blocks.push(`<pre><code>${code.trim()}</code></pre>`);
    return token;
  });
  const lines = safe.split('\n');
  let html = '';
  let listMode = '';
  lines.forEach((line) => {
    const unordered = line.match(/^\s*[-*]\s+(.+)/);
    const ordered = line.match(/^\s*\d+[.)]\s+(.+)/);
    if (unordered || ordered) {
      const mode = unordered ? 'ul' : 'ol';
      if (listMode !== mode) { if (listMode) html += `</${listMode}>`; html += `<${mode}>`; listMode = mode; }
      html += `<li>${(unordered || ordered)[1]}</li>`;
      return;
    }
    if (listMode) { html += `</${listMode}>`; listMode = ''; }
    html += line.trim() ? `<p>${line}</p>` : '';
  });
  if (listMode) html += `</${listMode}>`;
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>');
  blocks.forEach((block, index) => { html = html.replace(`@@CODE_${index}@@`, block); });
  return html;
}

function updateChatAccessState() {
  const locked = !state.session;
  $('#chat')?.classList.toggle('chat-locked', locked);
  if ($('#chatInput')) $('#chatInput').placeholder = locked ? '登录后才能使用 AI 对话功能…' : '说说你的故事想法…';
}

function renderChatHistory() {
  updateChatAccessState();
  const box = $('#chatHistory');
  if (!box) return;
  if (!state.session) {
    box.innerHTML = '<div class="chat-empty auth-required"><strong>登录后开始 AI 创作</strong><p>请先使用邮箱和密码登录或注册，登录状态由 Supabase Session 管理。API Key 仅存储在您的本地浏览器，不会上传至服务器。</p><button class="primary-btn button-reset" type="button" onclick="window.openSparkAuth()">登录 / 注册</button></div>';
    return;
  }
  const visibleMessages = state.chatMessages.filter((message) => message.loading || (message.content && message.content.trim()));
  box.innerHTML = visibleMessages.length ? visibleMessages.map((message) => `<article class="chat-message ${message.role}"><div class="message-bubble">${message.loading ? '<span class="typing-dots"><i></i><i></i><i></i></span>' : renderMarkdown(message.content)}</div></article>`).join('') : '<div class="chat-empty"><strong>开始一段新的创作讨论</strong><p>对话记录会保存到 Supabase，并仅允许当前登录用户读取。模型 API Key 仍只保存在您的本地浏览器。</p></div>';
  box.scrollTop = box.scrollHeight;
}

async function loadChatMessages() {
  state.chatMessages = [];
  if (!state.session || !supabaseClient) { renderChatHistory(); return; }
  const { data, error } = await supabaseClient.from('chat_messages').select('role,content,created_at').eq('user_id', state.session.user.id).order('created_at', { ascending: true }).limit(80);
  if (error) {
    setChatFeedback(`对话记录读取失败：${error.message}。请确认已执行 supabase_schema.sql。`);
    renderChatHistory();
    return;
  }
  state.chatMessages = (data || []).map((item) => ({ role: item.role === 'assistant' ? 'assistant' : 'user', content: item.content || '' }));
  renderChatHistory();
}

async function saveChatMessage(role, content) {
  if (!state.session || !supabaseClient || !content?.trim()) return;
  const { error } = await supabaseClient.from('chat_messages').insert({ user_id: state.session.user.id, role, content });
  if (error) setChatFeedback(`对话已显示，但保存失败：${error.message}`);
}

function clearChatForSignedOutUser() {
  state.chatMessages = [];
  renderChatHistory();
}

function appendChatMessage(role, content, loading = false) {
  state.chatMessages.push({ role, content, loading });
  renderChatHistory();
}

function updateLastAssistantMessage(content, loading = false) {
  const index = state.chatMessages.findLastIndex((message) => message.role === 'assistant');
  if (index >= 0) state.chatMessages[index] = { role: 'assistant', content, loading };
  renderChatHistory();
}

function mapApiError(status) {
  if (status === 401) return 'API Key 无效，请检查配置';
  if (status === 429) return '请求太频繁，稍后再试';
  return `请求失败：${status}`;
}

function setSendLoading(loading) {
  const button = $('#chatSendBtn');
  if (!button) return;
  button.disabled = loading;
  button.classList.toggle('loading', loading);
  button.innerHTML = loading ? '<span class="send-spinner" aria-hidden="true"></span>' : '<span class="material-symbols-outlined">arrow_upward</span>';
}

function parseJsonLine(line) {
  try { return JSON.parse(line); } catch { return null; }
}

function extractStreamDelta(model, payload) {
  if (!payload) return '';
  if (model.provider === 'claude') return payload.delta?.text || '';
  if (model.provider === 'responses') return payload.delta || payload.item?.content?.[0]?.text || '';
  return payload.choices?.[0]?.delta?.content || '';
}

function extractFullResponse(model, data) {
  if (!data) return '';
  if (model.provider === 'claude') return (data.content || []).map((item) => item.text || '').join('\n');
  if (model.provider === 'responses') {
    if (data.output_text) return data.output_text;
    return (data.output || []).flatMap((item) => item.content || []).map((item) => item.text || '').filter(Boolean).join('\n');
  }
  return data.choices?.[0]?.message?.content || '';
}

async function readStreamOrFallback(response, fallbackResponse, model, onDelta) {
  if (!response.body) {
    const data = await fallbackResponse.json().catch(() => ({}));
    return extractFullResponse(model, data);
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let buffer = '';
  let fullText = '';
  while (true) {
    const { value, done } = await reader.read();
    buffer += decoder.decode(value || new Uint8Array(), { stream: !done });
    const lines = buffer.split('\n');
    buffer = lines.pop() || '';
    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (!line || !line.startsWith('data:')) continue;
      const dataText = line.replace(/^data:\s*/, '');
      if (dataText === '[DONE]') continue;
      const payload = parseJsonLine(dataText);
      const delta = extractStreamDelta(model, payload);
      if (delta) {
        fullText += delta;
        onDelta(fullText);
      }
    }
    if (done) break;
  }
  if (fullText) return fullText;
  const data = await fallbackResponse.json().catch(() => ({}));
  return extractFullResponse(model, data);
}

async function requestModel(model, key, system, history, userMessage, onDelta) {
  let body;
  let headers = { 'Content-Type': 'application/json' };
  if (model.provider === 'claude') {
    headers = { ...headers, 'x-api-key': key, 'anthropic-version': '2023-06-01' };
    body = { model: model.id, system, max_tokens: 4096, messages: history, stream: true };
  } else if (model.provider === 'responses') {
    headers = { ...headers, Authorization: `Bearer ${key}` };
    body = { model: model.id, instructions: system, input: userMessage, stream: true };
  } else {
    headers = { ...headers, Authorization: `Bearer ${key}` };
    body = { model: model.id, messages: [{ role: 'system', content: system }, ...history], stream: true };
  }
  const response = await fetch(model.endpoint, { method: 'POST', headers, body: JSON.stringify(body) });
  const fallbackResponse = response.clone();
  if (!response.ok) throw new Error(mapApiError(response.status));
  const text = await readStreamOrFallback(response, fallbackResponse, model, onDelta);
  return text || '模型没有返回可展示内容。';
}

async function sendChatMessage() {
  if (state.isSending) return;
  if (!state.session) {
    renderChatHistory();
    openModal('authModal');
    setAuthFeedback('请先登录后使用 AI 对话功能。');
    return setChatFeedback('登录后才能使用 AI 对话功能。');
  }
  const input = $('#chatInput');
  const content = input?.value.trim();
  if (!content) return setChatFeedback('请先输入想讨论的故事内容。');
  const model = modelConfigs.find((item) => item.id === $('#modelSelect')?.value) || modelConfigs[0];
  const key = getApiKeys()[model.id];
  if (!key) {
    setChatFeedback(`请先配置 ${model.name} 的 API Key`);
    renderKeyFields();
    openModal('keyModal');
    return;
  }
  state.isSending = true;
  setSendLoading(true);
  setChatFeedback(model.group === 'vpn' ? '🔒 该模型需要 VPN 环境。' : (model.context || ''));
  input.value = '';
  appendChatMessage('user', content);
  await saveChatMessage('user', content);
  appendChatMessage('assistant', '', true);
  const system = buildChatSystemPrompt();
  const history = state.chatMessages.filter((message) => !message.loading).slice(-12).map((message) => ({ role: message.role === 'assistant' ? 'assistant' : 'user', content: message.content }));
  try {
    const reply = await requestModel(model, key, system, history, content, (partial) => updateLastAssistantMessage(partial));
    updateLastAssistantMessage(reply);
    await saveChatMessage('assistant', reply);
  } catch (error) {
    const message = error instanceof TypeError ? '网络连接失败，请检查网络或 VPN' : (error.message || '网络连接失败，请检查网络或 VPN');
    updateLastAssistantMessage(`调用失败：${message}`);
    setChatFeedback(message);
  } finally {
    state.isSending = false;
    setSendLoading(false);
  }
}

function openModal(id) { $('#' + id)?.classList.add('open'); }
function closeModal(id) { $('#' + id)?.classList.remove('open'); }
function videoMarkup(video) {
  if (!video?.url) return '<div class="framework-video-empty">暂无可稳定嵌入的视频，先保留文字结构。</div>';
  return `<div class="framework-video"><iframe src="${esc(video.url)}" title="${esc(video.title || '框架讲解视频')}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="framework-video-source">${esc(video.title || '讲解视频')}｜${esc(video.source || 'Video')}</p>`;
}
function openFrameworkModal(framework) {
  if (!framework || !$('#frameworkModalBody')) return;
  state.activeFrameworkModal = framework;
  $('#frameworkModalBody').innerHTML = `<div class="detail-header"><span class="material-symbols-outlined">local_movies</span><div><p class="eyebrow">Framework Video</p><h3>${esc(framework.name)}</h3></div></div><p class="source-line">理论来源：${esc(framework.source)}</p><p class="detail-summary">${esc(framework.summary)}</p>${videoMarkup(framework.video)}<div class="detail-block"><h4>模板步骤</h4>${listMarkup(framework.template || [])}</div><div class="detail-block"><h4>节拍列表</h4><div class="beat-flow">${(framework.beats || []).map((beat) => `<span>${esc(beat)}</span>`).join('')}</div></div><div class="detail-block conflict-block"><h4>冲突描述</h4><p>${esc(framework.conflict)}</p></div><div class="detail-block usecase-block"><h4>适用场景</h4><p>${esc(framework.useCase)}</p></div>`;
  openModal('frameworkModal');
}
function closeFrameworkModal() { state.activeFrameworkModal = null; closeModal('frameworkModal'); }
function setNotice(message, type = 'info') { if ($('#globalNotice')) $('#globalNotice').innerHTML = message ? `<span class="${type}">${esc(message)}</span>` : ''; }
function setAuthFeedback(message) { if ($('#authFeedback')) $('#authFeedback').textContent = message; }
function setPublishFeedback(message) { if ($('#publishFeedback')) $('#publishFeedback').textContent = message; }

function navigateTo(path) {
  const urlPath = toUrlPath(path);
  if (location.pathname !== urlPath) history.pushState({}, '', urlPath);
  routeFromLocation();
}

function routeFromLocation() {
  const path = (toAppPath(location.pathname) === '/index.html' ? '/' : toAppPath(location.pathname)).replace(/\/$/, '') || '/';
  const isChatAnchor = location.hash === '#chat' || path === '/chat';
  document.body.dataset.route = (path === '/' || path === '/chat') ? 'home' : path.replace(/^\//, '').split('/')[0];
  $$('.route-page').forEach((page) => page.classList.remove('active-route'));
  $$('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href');
    const linkPath = toAppPath(href.split('#')[0] || '/');
    link.classList.toggle('active', linkPath === path || (isChatAnchor && href.endsWith('/#chat')));
  });
  if (path === '/' || path === '/chat') $('#home')?.classList.add('active-route');
  else if (path === '/community') { $('#communityPage')?.classList.add('active-route'); loadCommunity(); }
  else if (path.startsWith('/script/')) { $('#scriptDetailPage')?.classList.add('active-route'); loadScriptDetail(path.split('/').pop()); }
  else if (path.startsWith('/profile/')) { $('#profilePage')?.classList.add('active-route'); loadProfilePage(path.split('/').pop()); }
  else if (path === '/leaderboard') { $('#leaderboardPage')?.classList.add('active-route'); loadLeaderboard(); }
  else if (path === '/inspiration') $('#inspirationPage')?.classList.add('active-route');
  else if (path === '/generator') $('#generatorRedirectPage')?.classList.add('active-route');
  else if (path === '/directory') $('#directory')?.classList.add('active-route');
  else if (path === '/library') $('#library')?.classList.add('active-route');
  else if (path === '/parallel') $('#parallel')?.classList.add('active-route');
  else if (path === '/open-source') $('#open-source')?.classList.add('active-route');
  else $('#home')?.classList.add('active-route');
  const target = isChatAnchor ? $('#chat') : null;
  window.scrollTo({ top: target ? Math.max(target.offsetTop - 90, 0) : 0, behavior: 'smooth' });
}

async function initAuth() {
  if (!supabaseClient) { setNotice('Supabase SDK 加载失败，社区功能暂不可用。', 'error'); return; }
  const { data } = await supabaseClient.auth.getSession();
  state.session = data.session;
  if (state.session) {
    await ensureProfile();
    await loadChatMessages();
  } else {
    clearChatForSignedOutUser();
  }
  renderAuthNav();
  supabaseClient.auth.onAuthStateChange(async (_event, session) => {
    state.session = session;
    if (session) {
      await ensureProfile();
      await loadChatMessages();
    } else {
      state.profile = null;
      clearChatForSignedOutUser();
    }
    renderAuthNav();
    if (toAppPath(location.pathname) === '/community') loadCommunity();
  });
}

async function ensureProfile() {
  if (!state.session) return;
  const user = state.session.user;
  const { data: profile } = await supabaseClient.from('profiles').select('*').eq('id', user.id).maybeSingle();
  if (profile) { state.profile = profile; return; }
  const base = (user.email || 'writer').split('@')[0].replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, '').slice(0, 18) || 'writer';
  const username = `${base}_${user.id.slice(0, 4)}`;
  const { data, error } = await supabaseClient.from('profiles').insert({ id: user.id, username, avatar_url: '', bio: '' }).select().single();
  if (error) setNotice(`资料初始化失败：${error.message}`, 'error');
  state.profile = data || { id: user.id, username };
}

function renderAuthNav() {
  const panel = $('#authPanel');
  if (!panel) return;
  if (!state.session) {
    panel.innerHTML = '<button id="loginOpenBtn" class="secondary-btn button-reset compact-btn">登录/注册</button>';
    $('#loginOpenBtn')?.addEventListener('click', () => openModal('authModal'));
    return;
  }
  const name = state.profile?.username || state.session.user.email;
  panel.innerHTML = `<div class="user-menu"><button class="user-chip button-reset"><span class="avatar-dot">${esc(String(name)[0] || '用')}</span><span>${esc(name)}</span></button><div class="user-dropdown"><button id="myWorksBtn" class="button-reset">我的作品</button><button id="logoutBtn" class="button-reset">退出登录</button></div></div>`;
  $('#logoutBtn')?.addEventListener('click', logout);
  $('#myWorksBtn')?.addEventListener('click', () => navigateTo(`/profile/${state.session.user.id}`));
}

async function loginOrSignup(mode) {
  if (!supabaseClient) return setAuthFeedback('Supabase SDK 未加载，请刷新页面重试。');
  const email = $('#authEmail')?.value.trim();
  const password = $('#authPassword')?.value.trim();
  if (!email || !password) return setAuthFeedback('请填写邮箱和密码。');
  setAuthFeedback('处理中……');
  const result = mode === 'signup'
    ? await supabaseClient.auth.signUp({ email, password })
    : await supabaseClient.auth.signInWithPassword({ email, password });
  if (result.error) return setAuthFeedback(result.error.message);
  setAuthFeedback(mode === 'signup' ? '注册成功。如项目开启邮箱验证，请先查收验证邮件。' : '登录成功。');
  setTimeout(() => closeModal('authModal'), 600);
}

async function logout() {
  if (!supabaseClient) return;
  await supabaseClient.auth.signOut();
  navigateTo('/');
}

function ensureLogin(next) {
  if (state.session) return next();
  openModal('authModal');
  setAuthFeedback('请先登录后继续操作。');
}

async function loadCommunity() {
  if (!supabaseClient) return renderCommunityError('社区数据暂不可用，请稍后刷新重试。');
  setNotice('');
  if ($('#communityList')) $('#communityList').innerHTML = '<div class="empty-state">正在读取社区作品……</div>';
  const { data, error } = await fetchCommunityScripts({ limit: 100 });
  if (error) return renderCommunityError('暂无公开作品。可以登录后发布第一篇。');
  state.community = data;
  await loadMyLikes();
  renderCommunityList();
}

function renderCommunityError(message) {
  if ($('#communityList')) $('#communityList').innerHTML = `<div class="empty-state">${esc(message)}</div>`;
}

async function loadMyLikes() {
  state.likedScriptIds = new Set();
  if (!state.session || !supabaseClient) return;
  const { data } = await supabaseClient.from('likes').select('script_id').eq('user_id', state.session.user.id);
  (data || []).forEach((item) => state.likedScriptIds.add(item.script_id));
}

function normalizeScripts(data = []) {
  return (data || []).map((item) => ({
    ...item,
    title: item.title || '未命名作品',
    content: item.content || '',
    tags: Array.isArray(item.tags) ? item.tags : [],
    likes_count: Number(item.likes_count || 0),
    profiles: item.profiles || null
  }));
}

async function fetchCommunityScripts({ limit = 100, fromDate = '', orderByLikes = false } = {}) {
  const columnsWithProfile = 'id,user_id,title,content,tags,framework_type,likes_count,created_at,profiles(username,avatar_url)';
  const columns = 'id,user_id,title,content,tags,framework_type,likes_count,created_at';
  const buildQuery = (selectColumns) => {
    let query = supabaseClient.from('scripts').select(selectColumns).limit(limit);
    if (fromDate) query = query.gte('created_at', fromDate);
    if (orderByLikes && state.leaderboardFramework !== 'all') query = query.eq('framework_type', state.leaderboardFramework);
    return query.order(orderByLikes ? 'likes_count' : 'created_at', { ascending: false });
  };
  const primary = await buildQuery(columnsWithProfile);
  if (!primary.error) return { data: normalizeScripts(primary.data), error: null };
  const fallback = await buildQuery(columns);
  return { data: normalizeScripts(fallback.data), error: fallback.error };
}

function communityMatches(item) {
  const query = state.communityQuery;
  const frameworkOk = state.frameworkFilter === 'all' || item.framework_type === state.frameworkFilter;
  if (!frameworkOk) return false;
  if (!query) return true;
  return [item.title, item.framework_type, (item.tags || []).join(' ')].join(' ').toLowerCase().includes(query);
}

function renderCommunityList() {
  const box = $('#communityList');
  if (!box) return;
  const list = state.community.filter(communityMatches);
  box.innerHTML = list.map((item) => communityCard(item)).join('') || '<div class="empty-state">暂无匹配作品。可以登录后发布第一篇。</div>';
}

function communityCard(item) {
  const author = item.profiles?.username || '匿名作者';
  return `<article class="community-card" data-id="${item.id}"><div class="script-top"><span class="script-status">${esc(item.framework_type || '未分类')}</span><span>${formatDate(item.created_at)}</span></div><h3>${esc(item.title)}</h3><p class="script-summary">${esc(item.content).slice(0, 120)}${item.content.length > 120 ? '…' : ''}</p><div class="tag-row">${(item.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><div class="community-meta"><button class="mini-link" onclick="window.appNavigate('/script/${item.id}')">查看全文</button><a href="${toUrlPath(`/profile/${item.user_id}`)}" data-route>作者：${esc(author)}</a><span>❤ ${item.likes_count || 0}</span></div></article>`;
}

async function submitScript() {
  if (!state.session) return ensureLogin(() => {});
  const title = $('#publishTitle').value.trim();
  const content = $('#publishContent').value.trim();
  const tags = $('#publishTags').value.split(/[，,]/).map((tag) => tag.trim()).filter(Boolean);
  const framework_type = $('#publishFramework').value;
  if (!title || !content || !framework_type) return setPublishFeedback('请填写标题、正文并选择框架类型。');
  setPublishFeedback('正在发布……');
  const { error } = await supabaseClient.from('scripts').insert({ user_id: state.session.user.id, title, content, tags, framework_type });
  if (error) return setPublishFeedback(`发布失败：${error.message}`);
  ['publishTitle', 'publishContent', 'publishTags'].forEach((id) => { $('#' + id).value = ''; });
  setPublishFeedback('发布成功。');
  closeModal('publishModal');
  navigateTo('/community');
}

async function loadScriptDetail(id) {
  if (!supabaseClient || !id) return;
  const { data, error } = await supabaseClient.from('scripts').select('id,user_id,title,content,tags,framework_type,likes_count,created_at,profiles(username,avatar_url,bio)').eq('id', id).single();
  if (error) { $('#scriptDetailBox').innerHTML = `<div class="empty-state">读取详情失败：${esc(error.message)}</div>`; return; }
  const liked = state.likedScriptIds.has(id);
  $('#scriptDetailBox').innerHTML = `<article class="detail-article"><div class="script-top"><span class="script-status">${esc(data.framework_type || '未分类')}</span><span>${formatDate(data.created_at)}</span></div><h2>${esc(data.title)}</h2><p class="detail-author"><a href="${toUrlPath(`/profile/${data.user_id}`)}" data-route>${esc(data.profiles?.username || '匿名作者')}</a></p><div class="tag-row">${(data.tags || []).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><p class="detail-content">${esc(data.content).replace(/\n/g, '<br>')}</p></article>`;
  $('#detailLikeBtn').dataset.scriptId = id;
  $('#detailLikeBtn').innerHTML = `${liked ? '已点赞' : '点赞'} · ${data.likes_count || 0}`;
  await loadComments(id);
}

async function toggleLike(scriptId) {
  ensureLogin(async () => {
    const liked = state.likedScriptIds.has(scriptId);
    const action = liked
      ? await supabaseClient.from('likes').delete().eq('user_id', state.session.user.id).eq('script_id', scriptId)
      : await supabaseClient.from('likes').insert({ user_id: state.session.user.id, script_id: scriptId });
    if (action.error) return setNotice(`点赞操作失败：${action.error.message}`, 'error');
    if (liked) state.likedScriptIds.delete(scriptId); else state.likedScriptIds.add(scriptId);
    await loadScriptDetail(scriptId);
  });
}

async function loadComments(scriptId) {
  const { data, error } = await supabaseClient.from('comments').select('id,user_id,content,created_at,profiles(username)').eq('script_id', scriptId).order('created_at', { ascending: false });
  const box = $('#commentList');
  if (!box) return;
  if (error) { box.innerHTML = `<div class="empty-state">评论读取失败：${esc(error.message)}</div>`; return; }
  state.comments = data || [];
  box.innerHTML = state.comments.map((item) => `<article class="comment-card"><strong>${esc(item.profiles?.username || '匿名用户')}</strong><span>${formatDate(item.created_at)}</span><p>${esc(item.content)}</p></article>`).join('') || '<div class="empty-state">暂无评论，登录后可以留下第一条反馈。</div>';
}

async function submitComment() {
  const scriptId = $('#detailLikeBtn')?.dataset.scriptId;
  ensureLogin(async () => {
    const content = $('#commentInput')?.value.trim();
    if (!content) return;
    const { error } = await supabaseClient.from('comments').insert({ user_id: state.session.user.id, script_id: scriptId, content });
    if (error) return setNotice(`评论失败：${error.message}`, 'error');
    $('#commentInput').value = '';
    loadComments(scriptId);
  });
}

async function loadProfilePage(userId) {
  if (!supabaseClient || !userId) return;
  const [{ data: profile }, { data: works, error }] = await Promise.all([
    supabaseClient.from('profiles').select('*').eq('id', userId).maybeSingle(),
    supabaseClient.from('scripts').select('id,title,content,tags,framework_type,likes_count,created_at,user_id').eq('user_id', userId).order('created_at', { ascending: false })
  ]);
  $('#profileBox').innerHTML = `<div class="profile-hero"><div class="avatar-large">${esc((profile?.username || '用')[0])}</div><div><p class="eyebrow">Writer Profile</p><h2>${esc(profile?.username || '匿名作者')}</h2><p>${esc(profile?.bio || '这个作者还没有填写简介。')}</p></div></div>`;
  $('#profileWorks').innerHTML = error ? `<div class="empty-state">读取作品失败：${esc(error.message)}</div>` : (works || []).map(communityCard).join('') || '<div class="empty-state">暂无公开作品。</div>';
}

function periodStart(period) {
  const now = new Date();
  const start = new Date(now);
  if (period === 'today') start.setHours(0, 0, 0, 0);
  if (period === 'week') start.setDate(now.getDate() - 7);
  if (period === 'month') start.setMonth(now.getMonth() - 1);
  if (period === 'twoMonths') start.setMonth(now.getMonth() - 2);
  if (period === 'quarter') start.setMonth(now.getMonth() - 3);
  if (period === 'year') start.setFullYear(now.getFullYear() - 1);
  return start.toISOString();
}

async function loadLeaderboard() {
  const box = $('#leaderboardList');
  if (!box) return;
  if (!supabaseClient) {
    box.innerHTML = '<div class="empty-state">排行榜数据暂不可用，请稍后刷新重试。</div>';
    return;
  }
  box.innerHTML = '<div class="empty-state">正在读取排行榜……</div>';
  const { data, error } = await fetchCommunityScripts({ limit: 50, fromDate: periodStart(state.leaderboardPeriod), orderByLikes: true });
  if (error || !data.length) {
    box.innerHTML = '<div class="empty-state">当前时间档暂无作品。</div>';
    return;
  }
  box.innerHTML = data.map((item, index) => `<article class="rank-row"><strong>${index + 1}</strong><div><h3>${esc(item.title)}</h3><p>${esc(item.profiles?.username || '匿名作者')} · ${esc(item.framework_type || '未分类')}</p></div><span>❤ ${item.likes_count || 0}</span><button class="mini-link" onclick="window.appNavigate('/script/${item.id}')">查看</button></article>`).join('');
}

function setupRealtimeOrPolling() {
  if (!supabaseClient) return;
  try {
    supabaseClient.channel('community-like-changes').on('postgres_changes', { event: '*', schema: 'public', table: 'likes' }, () => {
      if (toAppPath(location.pathname) === '/leaderboard') loadLeaderboard();
      if (toAppPath(location.pathname) === '/community') loadCommunity();
      if (toAppPath(location.pathname).startsWith('/script/')) loadScriptDetail(toAppPath(location.pathname).split('/').pop());
    }).subscribe();
  } catch {
    setInterval(() => { if (toAppPath(location.pathname) === '/leaderboard') loadLeaderboard(); }, 30000);
  }
  setInterval(() => { if (toAppPath(location.pathname) === '/leaderboard') loadLeaderboard(); }, 30000);
}

function bindCompactTextareas() {
  $$('[data-compact-textarea]').forEach((textarea) => {
    textarea.rows = 2;
    textarea.addEventListener('focus', () => { textarea.rows = 4; textarea.classList.add('expanded'); });
    textarea.addEventListener('blur', () => { if (!textarea.value.trim()) { textarea.rows = 2; textarea.classList.remove('expanded'); } });
  });
}
function bindDailyAccordions() { $$('.daily-card-toggle').forEach((toggle) => toggle.addEventListener('click', () => { const card = toggle.closest('.daily-card'); const open = !card.classList.contains('open'); card.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); })); }
function handleDailyVideoAction(event) {
  const button = event.target.closest('[data-daily-video-action]');
  if (!button) return;
  const stage = button.closest('[data-video-stage]');
  const playing = button.dataset.dailyVideoAction === 'play';
  state.dailyVideoPlaying = playing;
  stage?.classList.toggle('is-playing', playing);
  stage?.querySelector('.scene-video-overlay')?.setAttribute('aria-hidden', String(playing));
}
function getSelectedType() { return storyTypes.find((item) => item.id === state.selectedTypeId) || storyTypes[0]; }
function renderTypes() { const container = $('#typeList'); if (!container) return; const selected = getSelectedType(); $('#selectedTypeTitle').textContent = selected.title; container.innerHTML = storyTypes.map((item) => `<button class="type-button ${item.id === state.selectedTypeId ? 'active' : ''}" data-id="${item.id}"><span>${item.title}</span><small>${item.frameworks.length} 个框架</small></button>`).join(''); container.querySelectorAll('.type-button').forEach((button) => button.addEventListener('click', () => { state.selectedTypeId = button.dataset.id; state.selectedFrameworkIndex = 0; renderTypes(); renderFrameworks(); })); }
function renderFrameworks() { const selected = getSelectedType(); if (!$('#frameworkList')) return; $('#selectedTypeTitle').textContent = selected.title; $('#selectedTypeMeta').textContent = selected.meta; $('#selectedTypeDescription').textContent = selected.description; $('#frameworkList').innerHTML = selected.frameworks.map((framework, index) => `<button class="framework-card ${index === state.selectedFrameworkIndex ? 'active' : ''}" data-index="${index}" aria-label="打开 ${esc(framework.name)} 详情弹窗"><span class="framework-index">${String(index + 1).padStart(2, '0')}</span><div><h4>${esc(framework.name)}</h4><p>${esc(framework.summary)}</p><small>${esc(framework.source)}</small><span class="video-badge ${framework.video?.url ? '' : 'empty'}">${framework.video?.url ? '含视频讲解' : '文字详情'}</span></div></button>`).join(''); $('#frameworkList').querySelectorAll('.framework-card').forEach((card) => card.addEventListener('click', () => { state.selectedFrameworkIndex = Number(card.dataset.index); renderFrameworks(); openFrameworkModal(selected.frameworks[state.selectedFrameworkIndex]); })); renderFrameworkDetail(selected.frameworks[state.selectedFrameworkIndex]); }
function jumpToFramework(typeId, frameworkName) { const type = storyTypes.find((item) => item.id === typeId); if (!type) return; state.selectedTypeId = typeId; state.selectedFrameworkIndex = Math.max(0, type.frameworks.findIndex((item) => item.name === frameworkName)); renderTypes(); renderFrameworks(); navigateTo('/directory'); }
function listMarkup(items) { return `<ol>${items.map((item) => `<li>${esc(item)}</li>`).join('')}</ol>`; }
function renderFrameworkDetail(framework) { if (!$('#frameworkDetail')) return; $('#frameworkDetail').innerHTML = `<div class="detail-header"><span class="material-symbols-outlined">theater_comedy</span><div><p class="eyebrow">Framework Detail</p><h3>${esc(framework.name)}</h3></div></div><p class="source-line">理论来源：${esc(framework.source)}</p><p class="detail-summary">${esc(framework.summary)}</p><div class="detail-block"><h4>起承转合模板</h4>${listMarkup(framework.template)}</div><div class="detail-block"><h4>节拍 / 幕结构</h4><div class="beat-flow">${framework.beats.map((beat) => `<span>${esc(beat)}</span>`).join('')}</div></div><div class="detail-block conflict-block"><h4>核心冲突设计</h4><p>${esc(framework.conflict)}</p></div><div class="detail-block usecase-block"><h4>适用场景</h4><p>${esc(framework.useCase)}</p><p><strong>人物建议：</strong>${esc(framework.characterAdvice || '可根据人物欲望与阻力继续扩展。')}</p></div>`; }
function scoreFramework(framework, input) { const text = input.toLowerCase(); let score = 0; framework.keywords.forEach((keyword) => { if (text.includes(keyword.toLowerCase())) score += 4; }); [framework.typeTitle, framework.name, framework.summary, framework.conflict, framework.useCase].join(' ').split(/[\s/、，。；：—-]+/).forEach((token) => { if (token && token.length > 1 && text.includes(token.toLowerCase())) score += 1; }); return score || Math.max(1, Math.round((framework.summary.length + framework.name.length) % 5)); }
function recommendFrameworks(input, count = 5) { const clean = input.trim(); if (!clean) return []; return allFrameworks().map((framework) => ({ ...framework, score: scoreFramework(framework, clean) })).sort((a, b) => b.score - a.score).slice(0, count); }
function renderRecommendations(input) { const container = $('#recommendations'); const list = recommendFrameworks(input, 5); if (!list.length) { container.innerHTML = '<div class="empty-state">先输入一句故事核心，再生成框架推荐。</div>'; return; } container.innerHTML = list.map((item, index) => `<article class="recommend-card"><div class="script-top"><span class="script-status">推荐 ${index + 1}</span><span>${esc(item.typeTitle)}</span></div><h3>${esc(item.name)}</h3><p>${esc(item.matchReason || item.summary)}</p><div class="tag-row">${item.keywords.slice(0, 6).map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><button class="mini-link" data-type="${item.typeId}" data-name="${esc(item.name)}">跳转到目录条目</button></article>`).join(''); container.querySelectorAll('.mini-link').forEach((button) => button.addEventListener('click', () => jumpToFramework(button.dataset.type, button.dataset.name))); }
function buildOutline(framework, idea, index) { const protagonist = extractProtagonist(idea) || '主角'; return { title: `方向 ${index + 1}｜${framework.name}`, type: framework.typeTitle, premise: `用「${framework.name}」处理这个故事：${idea}`, acts: framework.template.map((line) => line.replace(/^起：|^承：|^转：|^合：/, '')), scenes: framework.beats.slice(0, 7).map((beat, i) => `${i + 1}. ${beat}：围绕“${idea.slice(0, 28)}${idea.length > 28 ? '…' : ''}”设置一场可见行动。`), characters: [`${protagonist}：带着明确欲望进入故事，核心盲点与「${framework.conflict}」相连。`, '对手/阻力：不只是阻挠主角，而是代表主角必须面对的价值代价。', '关系角色：负责揭开秘密、制造选择或让主角看到另一种生活可能。'], reason: framework.matchReason || framework.summary }; }
function extractProtagonist(idea) { const match = idea.match(/一个([^，。；、\s]{1,8})|一位([^，。；、\s]{1,8})|([^，。；、\s]{1,8})(为了|想要|试图)/); return match ? (match[1] || match[2] || match[3]) : ''; }
function renderOutlines(input) { const idea = input.trim(); const container = $('#outlineResults'); if (!idea) { container.innerHTML = '<div class="empty-state">先输入故事梗概，系统会生成 5 个不同框架的大纲方向。</div>'; return; } const outlines = recommendFrameworks(idea, 5).map((framework, index) => buildOutline(framework, idea, index)); container.innerHTML = outlines.map((outline) => `<article class="outline-card"><div class="script-top"><span class="script-status">${esc(outline.type)}</span><span>可继续深化</span></div><h3>${esc(outline.title)}</h3><p class="script-summary">${esc(outline.premise)}</p><div class="detail-block"><h4>起承转合</h4>${listMarkup(outline.acts)}</div><div class="detail-block"><h4>关键场景</h4>${listMarkup(outline.scenes)}</div><div class="detail-block"><h4>人物设定建议</h4>${listMarkup(outline.characters)}</div><p class="source-line">推荐理由：${esc(outline.reason)}</p></article>`).join(''); }
function getParallelItems() {
  const segmentMap = new Map((parallelReadings || []).map((item) => [item.title, item]));
  return scriptLibrary.filter((item) => item.chineseLink && item.link).map((item) => ({ ...item, parallelDetail: segmentMap.get(item.title) })).sort((a, b) => `${a.author}${a.title}`.localeCompare(`${b.author}${b.title}`, 'zh-Hans-CN'));
}
function matchesParallelQuery(item) {
  if (!state.parallelQuery) return true;
  return searchableTextForScript(item).includes(state.parallelQuery);
}
function safeCssUrl(url = '') { return String(url).replace(/["'()\\]/g, encodeURIComponent); }
function authorGroupStyle(item) {
  const bg = item.authorGroupColor || '#26384f';
  const photo = item.authorPhoto ? `--author-photo: url(&quot;${safeCssUrl(item.authorPhoto)}&quot;);` : '';
  return `--author-bg:${bg};${photo}`;
}
function parallelLinkButtons(item) {
  return `<div class="parallel-link-actions"><a href="${esc(item.chineseLink)}" target="_blank" rel="noopener noreferrer">前往中文译本 →</a><a href="${esc(item.link)}" target="_blank" rel="noopener noreferrer">前往完整原文 →</a></div>`;
}
function parallelTextRows(item) {
  const cn = Array.isArray(item.parallelText?.cn) ? item.parallelText.cn : [];
  const en = Array.isArray(item.parallelText?.en) ? item.parallelText.en : [];
  const rowCount = Math.min(cn.length, en.length);
  if (!rowCount) return '';
  return `<div class="parallel-columns parallel-text-columns" data-scroll-sync><div class="parallel-col parallel-cn"><h4>中文译文摘录</h4><div class="parallel-scroll-pane">${cn.slice(0, rowCount).map((text, i) => `<p data-row="${i}">${esc(text)}</p>`).join('')}</div></div><div class="parallel-col parallel-en"><h4>原文对应段落</h4><div class="parallel-scroll-pane">${en.slice(0, rowCount).map((text, i) => `<p data-row="${i}">${esc(text)}</p>`).join('')}</div></div></div>`;
}
function parallelReaderBody(item) {
  const textRows = parallelTextRows(item);
  const fallback = '<div class="parallel-static-empty"><strong>点击下方链接阅读完整原文</strong><span>该条目暂未收录可核验的公版对照摘录，保留外链跳转。</span></div>';
  return `${textRows || fallback}${parallelLinkButtons(item)}`;
}
function bindParallelScrollSync(root = document) {
  root.querySelectorAll('[data-scroll-sync]').forEach((box) => {
    const panes = box.querySelectorAll('.parallel-scroll-pane');
    if (panes.length < 2) return;
    let locked = false;
    panes.forEach((pane) => pane.addEventListener('scroll', () => {
      if (locked) return;
      locked = true;
      const ratio = pane.scrollTop / Math.max(1, pane.scrollHeight - pane.clientHeight);
      panes.forEach((other) => { if (other !== pane) other.scrollTop = ratio * (other.scrollHeight - other.clientHeight); });
      window.requestAnimationFrame(() => { locked = false; });
    }));
  });
}
function renderParallelReadings() {
  const listBox = $('#parallelList');
  const reader = $('#parallelReader');
  if (!listBox || !reader) return;
  const items = getParallelItems().filter(matchesParallelQuery);
  if (!items.length) {
    listBox.innerHTML = '<div class="empty-state">未找到可对照阅读的剧本。</div>';
    reader.innerHTML = '<div class="empty-state">请尝试搜索其他剧名或作者。</div>';
    return;
  }
  if (!items.some((item) => parallelKey(item) === state.selectedParallelId)) state.selectedParallelId = parallelKey(items[0]);
  let currentAuthor = '';
  listBox.innerHTML = items.map((item) => {
    const key = parallelKey(item);
    const group = item.author !== currentAuthor ? `<div class="parallel-author-group ${item.authorPhoto ? 'has-photo' : ''}" style="${authorGroupStyle(item)}"><strong>${esc(item.author)}</strong><span>${esc(item.sourceInstitution || '剧作家')}</span></div>` : '';
    currentAuthor = item.author;
    return `${group}<button class="parallel-tab ${key === state.selectedParallelId ? 'active' : ''}" data-id="${esc(key)}"><strong>${esc(item.title)}</strong><span>${esc(item.author)}</span></button>`;
  }).join('');
  listBox.querySelectorAll('.parallel-tab').forEach(btn => btn.addEventListener('click', () => { state.selectedParallelId = btn.dataset.id; renderParallelReadings(); }));
  const item = items.find((entry) => parallelKey(entry) === state.selectedParallelId) || items[0];
  const source = item.parallelText?.cn?.length ? `${item.author} · 内嵌公版摘录` : `${item.author} · ${item.sourceInstitution || '剧本库'}`;
  reader.innerHTML = `<div class="parallel-reader-head"><div><p class="eyebrow">Parallel Reading</p><h3>${esc(item.title)}</h3><p>${esc(source)}</p></div><span class="pill">${item.parallelText?.cn?.length ? '内嵌对照' : '外链阅读'}</span></div>${parallelReaderBody(item)}`;
  bindParallelScrollSync(reader);
}
function parallelKey(item) { return `${item.title}__${item.author}`; }
function matchesFilter(item) { return state.scriptFilter === 'all' || (state.scriptFilter === 'public' && item.type === 'public') || (state.scriptFilter === 'copyright' && item.type === 'copyright') || (state.scriptFilter === 'cn' && item.region === 'cn') || (state.scriptFilter === 'zx60' && item.isZhongxi60) || (state.scriptFilter === 'award' && (item.region === 'award' || item.tags.some((tag) => ['普利策', '诺贝尔文学奖', '托尼奖'].includes(tag)))); }
function matchesBilingual(item) { if (state.filterCn && !item.hasChineseVersion) return false; if (state.filterOriginal && !item.hasOriginalVersion) return false; if (state.filterBilingual && !item.isBilingualReady) return false; return true; }
function searchableTextForScript(item) { return [item.title, item.author, ...(item.authorAliases || []), item.year, item.summary, item.framework, item.tags.join(' '), item.originalVersion?.title, ...(item.chineseVersions || []).map(v => [v.translator, v.publisher, v.isbn].join(' '))].join(' ').toLowerCase(); }
function matchesQuery(item) { if (!state.scriptQuery) return true; return searchableTextForScript(item).includes(state.scriptQuery); }
function getAuthorDisplayNames(author, aliases = []) {
  const candidates = [author, ...aliases].filter(Boolean);
  const chinese = candidates.find((name) => /[\u4e00-\u9fa5]/.test(name)) || author;
  const english = candidates.find((name) => /^[A-Za-zÀ-ž .'-]+$/.test(name) && /[A-Za-z]/.test(name) && name !== chinese) || '';
  return { chinese, english };
}
function getAuthorAutocompleteItems(query) {
  const clean = String(query || '').trim().toLowerCase();
  if (!clean) return [];
  const authorMap = new Map();
  scriptLibrary.forEach((item) => {
    if (!searchableTextForScript(item).includes(clean)) return;
    const key = (item.authorAliases?.[0] || item.author || '').toLowerCase();
    const current = authorMap.get(key) || { author: item.author, aliases: item.authorAliases || [], titles: [] };
    if (!current.titles.includes(item.title)) current.titles.push(item.title);
    current.aliases = [...new Set([...current.aliases, ...(item.authorAliases || [])])];
    authorMap.set(key, current);
  });
  return Array.from(authorMap.values()).slice(0, 8);
}
function renderAuthorAutocomplete(query) {
  const box = $('#authorAutocomplete');
  if (!box) return;
  const items = getAuthorAutocompleteItems(query);
  if (!items.length) { closeAuthorAutocomplete(); return; }
  box.innerHTML = items.map((item) => {
    const names = getAuthorDisplayNames(item.author, item.aliases);
    const works = item.titles.slice(0, 2).join(' / ');
    return `<button type="button" class="author-suggestion button-reset" data-author="${esc(names.chinese)}"><strong>${esc(names.chinese)}</strong>${names.english ? `<span>${esc(names.english)}</span>` : ''}<em>${esc(works)}</em></button>`;
  }).join('');
  box.hidden = false;
  box.querySelectorAll('.author-suggestion').forEach((button) => button.addEventListener('click', () => {
    const input = $('#scriptSearch');
    if (!input) return;
    input.value = button.dataset.author;
    state.scriptQuery = button.dataset.author.toLowerCase();
    closeAuthorAutocomplete();
    renderScripts();
  }));
}
function closeAuthorAutocomplete() { const box = $('#authorAutocomplete'); if (box) { box.hidden = true; box.innerHTML = ''; } }
function hasParallelLinks(item) { return Boolean(item.chineseLink && item.link); }
function parallelActionMarkup(item) { if (hasParallelLinks(item)) return `<button class="secondary-btn button-reset parallel-open-btn" data-parallel-title="${esc(item.title)}">对照阅读</button>`; if (!item.chineseLink && !item.link) return '<span class="parallel-empty-text">暂无公版对照文本</span>'; return ''; }
function openParallelModal(item) {
  const modal = $('#parallelModal');
  const title = $('#parallelModalTitle');
  const body = $('#parallelModalBody');
  if (!modal || !title || !body || !hasParallelLinks(item)) return;
  title.textContent = item.title;
  body.innerHTML = `<section class="parallel-frame-col parallel-static-modal"><div class="parallel-frame-label">对照阅读</div>${parallelReaderBody(item)}</section>`;
  modal.classList.add('open');
  bindParallelScrollSync(body);
}
function closeParallelModal() { const modal = $('#parallelModal'); const body = $('#parallelModalBody'); modal?.classList.remove('open'); if (body) body.innerHTML = ''; }
function bindParallelCardButtons() { $$('.parallel-open-btn').forEach((button) => button.addEventListener('click', () => { const item = scriptLibrary.find((script) => script.title === button.dataset.parallelTitle); if (item) openParallelModal(item); })); }
function sourceBadge(level) { return `<span class="source-badge ${level || 'biblio'}">${reliabilityLabels[level] || reliabilityLabels.biblio}</span>`; }
function versionLinks(item) {
  const cn = (item.chineseVersions || []).map(v => `<div class="version-row">${sourceBadge(v.reliability)}<span><strong>汉译：</strong>${esc(v.translator || '待核验')}｜${esc(v.publisher || '待核验')}${v.isbn ? `｜ISBN ${esc(v.isbn)}` : ''}</span>${v.link ? `<a href="${esc(v.link)}" target="_blank" rel="noopener noreferrer">来源</a>` : '<em>无稳定链接</em>'}</div>`).join('');
  const ov = item.originalVersion || {};
  const originalSource = ov.publisher || item.sourceInstitution || '待核验';
  const original = item.link || ov.link ? `<div class="version-row">${sourceBadge(ov.reliability)}<span><strong>原文</strong> · ${esc(originalSource)}</span><a href="${esc(item.link || ov.link)}" target="_blank" rel="noopener noreferrer">来源</a></div>` : '<div class="version-row"><span><strong>原文</strong> · 暂无稳定链接</span><em>暂无原文版</em></div>';
  const authority = item.authorityLink ? `<div class="version-row authority-row">${sourceBadge('biblio')}<span><strong>📖 权威来源</strong> · ${esc(authoritySourceName(item.authorityLink))}</span><a href="${esc(item.authorityLink)}" target="_blank" rel="noopener noreferrer">来源</a></div>` : '';
  return cn + original + authority;
}
function authoritySourceName(url = '') { if (url.includes('wikipedia.org')) return 'Wikipedia'; if (url.includes('douban.com')) return '豆瓣'; if (url.includes('nobelprize.org')) return 'NobelPrize.org'; if (url.includes('pulitzer.org')) return 'The Pulitzer Prizes'; if (url.includes('tonyawards.com')) return 'Tony Awards'; return '权威资料'; }
function comparisonBlock(item) { if (!item.translationComparisons?.length) return ''; return `<div class="translation-compare"><strong>多译本比较</strong>${item.translationComparisons.map(t => `<p>${esc(t)}</p>`).join('')}</div>`; }
function renderStats() { const stats = window.libraryExpansionStats || getLibraryStats?.(); if (!stats || !$('#libraryStats')) return; $('#libraryStats').innerHTML = `<span>实际收录 ${stats.total} 条</span><span>中戏60本 ${stats.zhongxi}/60</span><span>有效链接 ${stats.linked} 个</span><span>无链接版本 ${stats.noLink} 个</span><span>剧作家 ${stats.playwrights} 位</span>`; }
function renderScripts() { if (!$('#scriptGrid')) return; const list = scriptLibrary.filter((item) => matchesFilter(item) && matchesBilingual(item) && matchesQuery(item)); $('#scriptGrid').innerHTML = list.map((item) => { const status = item.type === 'public' ? '公版/权威链接' : '版权索引'; return `<article class="script-card ${item.type} ${item.isZhongxi60 ? 'zx60-card' : ''}"><div class="script-top"><span class="script-status">${status}</span><span>${esc(item.year)}</span></div><h3>${esc(item.title)}</h3><p class="script-author">${esc(item.author)}${item.isZhongxi60 ? ' · 中戏60本' : ''}</p><p class="script-summary">${esc(item.summary)}</p><div class="tag-row">${item.tags.map((tag) => `<span>${esc(tag)}</span>`).join('')}</div><div class="version-box"><h4>版本收录</h4>${versionLinks(item)}</div>${comparisonBlock(item)}<div class="structure-box"><h4>结构拆解</h4><p><strong>幕/场：</strong>${esc(item.structure.acts)}</p><p><strong>转折点：</strong>${esc(item.structure.turns)}</p><p><strong>高潮：</strong>${esc(item.structure.climax)}</p><p><strong>人物弧线：</strong>${esc(item.structure.arcs)}</p></div><div class="script-analysis"><strong>对应框架</strong><p>${esc(item.framework)}</p></div><div class="script-card-actions">${parallelActionMarkup(item)}</div></article>`; }).join('') || '<div class="empty-state">未找到匹配剧本。可以尝试减少关键词，或后续继续补充条目。</div>'; bindParallelCardButtons(); }
function dayIndex(total) { const start = new Date(new Date().getFullYear(), 0, 0); return Math.floor((new Date() - start) / 86400000) % Math.max(total, 1); }
function getDailyVideoSources() { return typeof dailyVideoSources !== 'undefined' ? dailyVideoSources : []; }
function getDailyVideoSource() { const sources = getDailyVideoSources(); return sources[dayIndex(sources.length || 1)] || sources[0]; }
function getDailyFramework() { const source = getDailyVideoSource(); const list = allFrameworks(); return list.find((item) => getDailyFrameworkCategory(item) === source?.framework) || list[dayIndex(list.length)] || list[0]; }
function famousWorkFor(framework) { const map = { '悲剧': '《哈姆莱特》', '喜剧': '《不可儿戏》', '悲喜剧': '《樱桃园》', '正剧/社会剧': '《玩偶之家》', '历史剧': '《屈原》', '荒诞剧': '《等待戈多》', '音乐剧': '《汉密尔顿》', '独角戏': '《一个人的莎士比亚》', '犯罪/悬疑剧': '《捕鼠器》', '成长剧': '《培尔·金特》', '爱情剧': '《罗密欧与朱丽叶》', '史诗剧': '《大胆妈妈和她的孩子们》' }; return map[framework.typeTitle] || '《雷雨》'; }
function getDailyFrameworkCategory(framework) {
  const type = framework.typeTitle || '';
  const name = framework.name || '';
  if (type.includes('荒诞')) return '荒诞剧';
  if (type.includes('史诗')) return '史诗剧';
  if (type.includes('成长')) return '成长剧';
  if (type.includes('社会') || type.includes('正剧')) return name.includes('群像') ? '群像结构' : '社会剧';
  if (type.includes('犯罪') || type.includes('悬疑')) return '悬疑反转';
  if (name.includes('弧线') || name.includes('弧光') || name.includes('价值极性')) return '人物弧光';
  if (name.includes('英雄') || name.includes('离家')) return '英雄旅程';
  if (name.includes('起承转合') || framework.template?.length === 4) return '起承转合';
  return '三幕式';
}
function getVideoCategory(source, framework) {
  return source?.framework || getDailyFrameworkCategory(framework);
}
function structureNodesFor(category, framework) {
  const map = {
    '三幕式': ['设置', '诱因', '对抗', '低谷', '高潮', '解决'],
    '英雄旅程': ['日常世界', '召唤', '导师', '越界', '试炼', '归来'],
    '起承转合': ['起', '承', '转', '合'],
    '悬疑反转': ['异常', '线索', '误导', '重排', '揭示', '余震'],
    '群像结构': ['入口事件', '立场分化', '联盟', '爆点', '代价分摊'],
    '人物弧光': ['弱点', '欲望', '压力', '自我揭示', '新行动'],
    '史诗剧': ['标题预告', '社会矛盾', '间离评论', '选择代价', '问题返还'],
    '荒诞剧': ['等待', '语言游戏', '重复差异', '延期', '原地循环'],
    '成长剧': ['旧身份', '越界', '试炼', '低谷', '自我命名'],
    '社会剧': ['稳定表面', '证据', '关系审判', '公开选择', '问题悬置']
  };
  return map[category] || framework.beats.slice(0, 6);
}
function dailyStructureMap(framework, compact = false, source = getDailyVideoSource()) {
  const category = getVideoCategory(source, framework);
  const nodes = structureNodesFor(category, framework);
  const step = 360 / Math.max(nodes.length - 1, 1);
  const circles = nodes.map((label, index) => {
    const x = 30 + step * index;
    const y = category === '荒诞剧' ? 118 + Math.sin(index * 1.65) * 42 : 156 - Math.sin(index / Math.max(nodes.length - 1, 1) * Math.PI) * 72;
    return `<g class="structure-node ${index === nodes.length - 1 ? 'final' : ''}"><circle cx="${x}" cy="${y}" r="11"/><text x="${x}" y="${y + 31}" text-anchor="middle">${esc(label)}</text></g>`;
  }).join('');
  const path = category === '荒诞剧'
    ? 'M70 118 C70 42 350 42 350 118 C350 194 70 194 70 118'
    : nodes.map((_, index) => `${index === 0 ? 'M' : 'L'} ${30 + step * index} ${156 - Math.sin(index / Math.max(nodes.length - 1, 1) * Math.PI) * 72}`).join(' ');
  return `<div class="scene-structure-map ${compact ? 'compact' : ''}"><svg viewBox="0 0 420 230" role="img" aria-label="${esc(category)}桥段结构图"><path class="daily-path structure-line ${category === '荒诞剧' ? 'loop' : ''}" d="${path}"/>${circles}<text class="structure-title" x="210" y="34" text-anchor="middle">${esc(category)} · ${esc(framework.name)}</text></svg></div>`;
}
function dailySceneMarkup(framework, compact = false) {
  const source = getDailyVideoSource(framework);
  const analysis = source?.sceneDesc || framework.summary.slice(0, 60);
  if (!source?.embedUrl) {
    return `<div class="daily-visual-wrapper ${compact ? 'compact' : ''}">${dailyStructureMap(framework, compact, source)}${compact ? '' : `<div class="scene-description"><p class="scene-film">${esc(source?.sceneTitle || famousWorkFor(framework))}</p><p class="scene-analysis">${esc(analysis)}</p></div>`}</div>`;
  }
  const playingClass = state.dailyVideoPlaying ? ' is-playing' : '';
  const compactClass = compact ? ' compact' : '';
  const playLabel = compact ? '▶' : '▶ 播放视频';
  const video = `<div class="scene-video-stage${compactClass}${playingClass}" data-video-stage><div class="scene-video-player"><iframe src="${esc(source.embedUrl)}" title="${esc(source.sceneTitle)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><div class="scene-video-overlay" aria-hidden="${state.dailyVideoPlaying ? 'true' : 'false'}">${dailyStructureMap(framework, compact, source)}</div><div class="scene-video-controls"><button class="primary-btn button-reset scene-video-play" type="button" data-daily-video-action="play" aria-label="播放视频">${playLabel}</button><button class="secondary-btn button-reset scene-video-collapse" type="button" data-daily-video-action="collapse">收起</button></div></div>`;
  return `<div class="daily-visual-wrapper ${compact ? 'compact' : ''}">${video}${compact ? '' : `<div class="scene-description"><p class="scene-film">${esc(source?.sceneTitle || famousWorkFor(framework))}</p><p class="scene-analysis">${esc(analysis)}</p></div>`}</div>`;
}
function renderDailyFramework() { const framework = getDailyFramework(); state.dailyFramework = framework; if (!framework) return; const source = getDailyVideoSource(); const category = getVideoCategory(source, framework); if ($('#dailyTypeLabel')) $('#dailyTypeLabel').textContent = category; if ($('#dailyVisual')) $('#dailyVisual').innerHTML = dailySceneMarkup(framework); if ($('#homeDailyVisual')) $('#homeDailyVisual').innerHTML = dailySceneMarkup(framework, true); if ($('#sceneBreakdown')) $('#sceneBreakdown').innerHTML = `<strong>桥段结构解析</strong><p>${esc(source?.sceneDesc || framework.summary.slice(0, 60))}</p>`; if ($('#dailyFrameName')) $('#dailyFrameName').textContent = framework.name; if ($('#homeDailyFrameName')) $('#homeDailyFrameName').textContent = framework.name; if ($('#dailyFrameDefinition')) $('#dailyFrameDefinition').textContent = framework.summary; if ($('#homeDailyNodes')) $('#homeDailyNodes').innerHTML = structureNodesFor(category, framework).map((beat) => `<span>${esc(beat)}</span>`).join(''); if ($('#dailyFamousWork')) $('#dailyFamousWork').textContent = source?.sceneTitle || famousWorkFor(framework); if ($('#dailyQuestion')) $('#dailyQuestion').textContent = framework.conflict; if ($('#challengePrompt')) $('#challengePrompt').textContent = `请用你的故事写出这个冲突：${framework.conflict}`; renderChallengeHistory(); }
function favoriteDailyFramework() { const framework = state.dailyFramework; if (!framework) return; const list = JSON.parse(localStorage.getItem('favoriteFrameworks') || '[]'); if (!list.some((item) => item.name === framework.name)) list.push({ name: framework.name, type: framework.typeTitle, date: new Date().toISOString().slice(0, 10) }); localStorage.setItem('favoriteFrameworks', JSON.stringify(list)); if ($('#dailyActionFeedback')) $('#dailyActionFeedback').textContent = '已收藏到本地浏览器。'; }
function shareDailyFramework() { const framework = state.dailyFramework; if (!framework) return; const text = `今日框架：${framework.name}\n定义：${framework.summary}\n代表作品：${famousWorkFor(framework)}\n创作问题：${framework.conflict}`; navigator.clipboard?.writeText(text); if ($('#dailyActionFeedback')) $('#dailyActionFeedback').textContent = '卡片内容已复制，可直接分享。'; }
function submitChallenge() { const value = $('#challengeInput')?.value.trim(); if (!value || !state.dailyFramework) return; const list = JSON.parse(localStorage.getItem('frameworkChallengeAnswers') || '[]'); list.unshift({ date: new Date().toISOString().slice(0, 10), framework: state.dailyFramework.name, answer: value }); localStorage.setItem('frameworkChallengeAnswers', JSON.stringify(list.slice(0, 30))); $('#challengeInput').value = ''; renderChallengeHistory(); $('#challengeHistory')?.classList.remove('hidden'); }
function renderChallengeHistory() { const box = $('#challengeHistory'); if (!box) return; const list = JSON.parse(localStorage.getItem('frameworkChallengeAnswers') || '[]'); box.innerHTML = list.length ? list.map((item) => `<article><strong>${esc(item.date)}｜${esc(item.framework)}</strong><p>${esc(item.answer)}</p></article>`).join('') : '<p>暂无本地提交记录。</p>'; }
function formatDate(value) { if (!value) return '待定'; return new Date(value).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' }); }
window.appNavigate = navigateTo;
window.openSparkAuth = () => openModal('authModal');
init();
