/* Andhika Hafizh Albana — portfolio behaviour.
   Three jobs: the mobile nav, the project filter, and scroll-reveal motion.
   Motion classes are only added when the visitor has not asked for reduced
   motion, so the page renders in its final state without JS or with
   prefers-reduced-motion: reduce. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile navigation ---------- */
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

  /* ---------- project filter ---------- */
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

  /* ---------- scroll reveal ----------
     Deliberately a position check rather than an IntersectionObserver: the
     observer can skip a trigger during a fast or programmatic scroll and leave
     a block stuck at opacity 0, which is a far worse failure than a missed
     animation. This runs on every scroll until the last element has played,
     then stops listening. */
  if (reduced) return;

  document.documentElement.classList.add('js-motion');

  var pending = Array.prototype.slice.call(
    document.querySelectorAll('.reveal, .reveal-tilt, .stagger, .torn')
  );
  if (!pending.length) return;

  function reveal(el) {
    Array.prototype.forEach.call(el.children, function (child, i) {
      child.style.transitionDelay = (i * 60) + 'ms';
      child.style.animationDelay = (i * 60) + 'ms';
    });
    el.classList.add('in');
  }

  var queued = false;

  function check() {
    queued = false;
    var limit = window.innerHeight * 0.94;

    pending = pending.filter(function (el) {
      var box = el.getBoundingClientRect();
      if (box.top < limit && box.bottom > 0) { reveal(el); return false; }
      return true;
    });

    if (!pending.length) {
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
    }
  }

  function queue() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(check);
  }

  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue);
  window.addEventListener('load', queue);
  queue();
})();
