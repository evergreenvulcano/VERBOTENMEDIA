/* ============================================================
   VERBOTEN MEDIA — main.js
   Minimal, focused JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* --- Rotating lines on the landing page ----------------- */
  const rotatingLines = [
    'LIFE DESIGN — OR LACK THEREOF',
    'LOKALT OCH GLOBALT GENOM TEKNISKA UNIVERSALER',
    'PERSONHOOD AS PERFORMATIVE INTEGRITY',
    'ALL NUMBERS END',
    'FOREVER ENDEAVOUR',
    'WE HAVE NEVER HAD PARIS',
  ];

  function initRotatingLine() {
    const el = document.querySelector('.rotating-line');
    if (!el) return;

    let current = 0;

    function showLine(index) {
      el.classList.remove('visible');
      setTimeout(function () {
        el.textContent = rotatingLines[index];
        el.classList.add('visible');
      }, 500);
    }

    showLine(current);

    setInterval(function () {
      current = (current + 1) % rotatingLines.length;
      showLine(current);
    }, 4200);
  }

  /* --- Navigation scroll state ---------------------------- */
  function initNav() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 20) {
        nav.classList.add('site-nav--scrolled');
      } else {
        nav.classList.remove('site-nav--scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* --- Mobile nav toggle ---------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const links  = document.querySelector('.nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      const open = toggle.classList.toggle('open');
      links.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('open');
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        toggle.classList.remove('open');
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --- Active nav link ------------------------------------ */
  function initActiveNav() {
    var path = window.location.pathname;
    var filename = path.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var hname = href.split('/').pop() || 'index.html';
      if (hname === filename || (filename === '' && hname === 'index.html')) {
        a.classList.add('active');
      }
    });
  }

  /* --- Writings filter ------------------------------------ */
  function initWritingsFilter() {
    var buttons = document.querySelectorAll('.filter-btn');
    var items   = document.querySelectorAll('.writing-item');
    if (!buttons.length || !items.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        var filter = btn.dataset.filter;
        items.forEach(function (item) {
          if (filter === 'all' || item.dataset.type === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  /* --- Markdown card links --------------------------------- */
  function initMarkdownCardLinks() {
    var cards = document.querySelectorAll('[data-md-path]');
    if (!cards.length) return;

    function openCard(path) {
      if (!path) return;
      window.location.href = 'page.html?path=' + encodeURIComponent(path);
    }

    cards.forEach(function (card) {
      var path = card.dataset.mdPath;
      if (!path) return;
      var href = 'page.html?path=' + encodeURIComponent(path);

      card.querySelectorAll('a[href="#"]').forEach(function (link) {
        link.setAttribute('href', href);
      });

      card.classList.add('md-link-card');
      card.setAttribute('tabindex', '0');

      card.addEventListener('click', function (e) {
        if (e.target.closest('a, button')) return;
        openCard(path);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCard(path);
        }
      });
    });
  }

  /* --- Init all ------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initRotatingLine();
    initNav();
    initMobileNav();
    initActiveNav();
    initWritingsFilter();
    initMarkdownCardLinks();
  });
})();
