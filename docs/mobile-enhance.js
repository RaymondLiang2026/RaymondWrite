/* =====================================================================
 * mobile-enhance.js — 移动端渐进增强（自包含，不修改 app.js）
 * 作用：在 ≤767px 下，为首屏 AI 创作卡片的「模型选择 + 配置 Key」区域
 *      注入一个折叠开关，首屏默认只露对话区、输入框、工具选择和发送键。
 * 设计原则：防御式、幂等、失败静默，不影响桌面端与既有逻辑。
 * ===================================================================== */
(function () {
  'use strict';

  var TOGGLE_CLASS = 'mobile-tools-toggle';

  function enhance() {
    try {
      // 仅作用于首屏 AI 创作卡片（id="chat"）内的工具栏
      var card = document.getElementById('chat');
      if (!card) return;
      var toolbarLeft = card.querySelector('.chat-toolbar-left');
      var modelTools = card.querySelector('.model-tools');
      if (!toolbarLeft || !modelTools) return;

      // 幂等：已注入则跳过
      if (toolbarLeft.querySelector('.' + TOGGLE_CLASS)) return;

      toolbarLeft.classList.add('mobile-collapsible');

      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = TOGGLE_CLASS + ' button-reset';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', '展开模型与 Key 设置');
      btn.innerHTML = '⚙︎ 模型 / Key <span class="mtt-caret" aria-hidden="true">▾</span>';

      btn.addEventListener('click', function () {
        var open = toolbarLeft.classList.toggle('tools-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        btn.setAttribute('aria-label', open ? '收起模型与 Key 设置' : '展开模型与 Key 设置');
      });

      // 放在「工具选择」之后、模型行之前
      var modeWrapper = toolbarLeft.querySelector('.mode-select-wrapper');
      if (modeWrapper && modeWrapper.nextSibling) {
        toolbarLeft.insertBefore(btn, modeWrapper.nextSibling);
      } else {
        toolbarLeft.insertBefore(btn, modelTools);
      }
    } catch (e) {
      /* 静默失败，保证不破坏页面 */
      if (window && window.console) console.warn('[mobile-enhance] skipped:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', enhance);
  } else {
    enhance();
  }
  // 兜底：应用脚本可能延迟渲染，load 后再尝试一次（幂等）
  window.addEventListener('load', enhance);
})();
