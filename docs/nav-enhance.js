/* nav-enhance.js — 三段式导航交互（自包含，不改 app.js）
 * 负责：下拉面板点击开合 + 径向光晕 bloom + 外部点击关闭 + 面板链接点击后收起。
 * 汉堡菜单与路由跳转仍由 app.js 处理，本文件不重复接管。 */
(function () {
  'use strict';
  function qsa(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function closeAll() {
    qsa('.nav-dropdown.open').forEach(function (d) { d.classList.remove('open'); });
    qsa('.nav-parent[aria-expanded="true"]').forEach(function (b) { b.setAttribute('aria-expanded', 'false'); });
  }
  function bloom(d) {
    d.classList.remove('bloom');
    void d.offsetWidth;
    d.classList.add('bloom');
    window.setTimeout(function () { d.classList.remove('bloom'); }, 460);
  }
  function init() {
    try {
      var parents = qsa('.nav-parent');
      if (!parents.length) return;
      parents.forEach(function (btn) {
        if (btn.dataset.navBound) return;
        btn.dataset.navBound = '1';
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var dd = btn.closest('.nav-dropdown');
          if (!dd) return;
          var willOpen = !dd.classList.contains('open');
          closeAll();
          bloom(dd);
          if (willOpen) { dd.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        });
      });
      qsa('.nav-dropdown-panel a').forEach(function (a) {
        if (a.dataset.navBound) return;
        a.dataset.navBound = '1';
        a.addEventListener('click', function () {
          closeAll();
          var nl = document.getElementById('navLinks');
          var mt = document.getElementById('menuToggle');
          if (nl) nl.classList.remove('open');
          if (mt) mt.setAttribute('aria-expanded', 'false');
        });
      });
      if (!document.body.dataset.navOutsideBound) {
        document.body.dataset.navOutsideBound = '1';
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.nav')) closeAll();
        });
      }
    } catch (err) {
      if (window.console) console.warn('[nav-enhance] skipped:', err);
    }
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
  window.addEventListener('load', init);
})();
