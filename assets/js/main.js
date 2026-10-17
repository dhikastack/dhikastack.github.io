(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var header = document.querySelector('.site-header');

  var toggle = document.querySelector('.nav-toggle');

  if (header && toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    header.querySelectorAll('.nav-list a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && header.classList.contains('open')) {
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  var filterBar = document.querySelector('.filters');

  if (filterBar) {
    var items = Array.prototype.slice.call(document.querySelectorAll('[data-cat]'));
    var status = document.getElementById('filter-status');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-filter]');
      if (!btn) return;

      var want = btn.dataset.filter;
      var shown = 0;

      filterBar.querySelectorAll('button').forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });

      items.forEach(function (el) {
        var match = want === 'all' || el.dataset.cat === want;
        el.hidden = !match;
        if (match) shown++;
      });

      if (status) {
        status.textContent = shown + (shown === 1 ? ' project shown' : ' projects shown');
      }
    });
  }

  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navLinks = [];

  document.querySelectorAll('.nav-list li:not(.nav-cv) > a[href^="#"]').forEach(function (a) {
    var id = a.getAttribute('href').slice(1);
    if (document.getElementById(id)) navLinks.push({ id: id, el: a });
  });

  function markCurrent() {
    if (!sections.length || !navLinks.length) return;

    var line = (header ? header.offsetHeight : 0) + 24;
    var current = sections[0].id;

    sections.forEach(function (s) {
      if (s.getBoundingClientRect().top <= line) current = s.id;
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8) {
      current = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (n) {
      if (n.id === current) n.el.setAttribute('aria-current', 'page');
      else n.el.removeAttribute('aria-current');
    });
  }

  var revealing = false;

  if (!reduced) {
    document.documentElement.classList.add('js-motion');

    ['.cs-head .wrap', '.cs-body .wrap'].forEach(function (sel) {
      var box = document.querySelector(sel);
      if (!box) return;
      Array.prototype.forEach.call(box.children, function (el) {
        el.classList.add('reveal');
      });
    });

    revealing = true;
  }

  var repeat = !!document.querySelector('.cs-body');
  var watched = revealing
    ? Array.prototype.slice.call(document.querySelectorAll('.reveal, .reveal-tilt, .stagger, .torn'))
    : [];

  function leaves(el) {
    return el.classList.contains('torn')
      ? Array.prototype.slice.call(el.querySelectorAll('span:not(.word)'))
      : Array.prototype.slice.call(el.children);
  }

  function reveal(el) {
    var kids = leaves(el);

    kids.forEach(function (child, i) {
      child.style.transitionDelay = (i * 60) + 'ms';
      child.style.animationDelay = (i * 60) + 'ms';
    });

    el.classList.add('in');

    window.setTimeout(function () {
      kids.forEach(function (child) { child.style.transitionDelay = ''; });
    }, kids.length * 60 + 900);
  }

  var decoHost = document.querySelector('.cs-body');

  if (decoHost && !reduced) {
    var SHAPES = [
      "<svg viewBox='0 0 200 220'><path d='M40 10c40-14 86 6 96 48 9 42-18 56-40 86-23 31-60 52-82 34C-8 160 18 128 16 96 14 62 8 22 40 10z' fill='#2E9E5B' opacity='.42'/></svg>",
      "<svg viewBox='0 0 180 180'><path d='M90 6l16 46 46-16-26 40 40 26-46 16 16 46-40-26-26 40-16-46-46 16 26-40L-6 82l46-16L24 20l40 26z' fill='#FFC930' stroke='#16150F' stroke-width='4'/></svg>",
      "<svg viewBox='0 0 150 150'><circle cx='75' cy='75' r='68' fill='#E2512C' opacity='.45'/></svg>",
      "<svg viewBox='0 0 120 120'><path d='M46 6h28v40h40v28H74v40H46V74H6V46h40z' fill='#2E5FA3' stroke='#16150F' stroke-width='5'/></svg>",
      "<svg viewBox='0 0 190 130'><g fill='none' stroke-width='13'><path d='M10 120a85 85 0 0 1 170 0' stroke='#C8401E'/><path d='M30 120a65 65 0 0 1 130 0' stroke='#FFC930'/><path d='M50 120a45 45 0 0 1 90 0' stroke='#227C47'/></g></svg>",
      "<svg viewBox='0 0 160 90'><path d='M8 60c18-40 44 24 62-14s42 26 60-12' fill='none' stroke='#6B4FA8' stroke-width='13' stroke-linecap='round'/></svg>"
    ];

    var layer = document.createElement('div');
    layer.className = 'deco-layer';
    layer.setAttribute('aria-hidden', 'true');

    var tall = decoHost.offsetHeight;
    var many = Math.max(4, Math.min(10, Math.round(tall / 540)));

    for (var d = 0; d < many; d++) {
      var shape = document.createElement('span');
      shape.className = 'deco deco--' + (d % 2 ? 'right' : 'left');
      shape.style.top = Math.round(220 + d * ((tall - 360) / many)) + 'px';
      shape.style.width = (96 + (d % 3) * 26) + 'px';
      shape.style.animationDelay = (d * 1.8) + 's';
      shape.innerHTML = SHAPES[d % SHAPES.length];
      layer.appendChild(shape);
    }

    decoHost.appendChild(layer);
  }

  var queued = false;

  function check() {
    queued = false;
    markCurrent();

    if (!watched.length) return;

    var vh = window.innerHeight;
    var limit = vh * 0.94;

    watched = watched.filter(function (el) {
      var box = el.getBoundingClientRect();
      var inView = box.top < limit && box.bottom > 0;

      if (inView) {
        if (!el.classList.contains('in')) reveal(el);
        return repeat;
      }

      if (repeat && el.classList.contains('in')) el.classList.remove('in');
      return true;
    });
  }

  function queue() {
    if (queued) return;
    queued = true;
    window.requestAnimationFrame(check);
  }

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  window.addEventListener('load', queue);
  queue();
})();
