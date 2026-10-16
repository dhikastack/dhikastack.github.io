/* Development-only overlay.
   Every unresolved item lives in a data-draft attribute in the HTML and is
   rendered ONLY when this file decides the page is being previewed locally
   or with ?draft=1. The published site on GitHub Pages never shows any of it.

   To preview the draft notes:
     - open the site from localhost / 127.0.0.1, or
     - add ?draft=1 to the URL.

   Remove nothing from CHECKLIST.md when an item is resolved: tick it instead,
   and delete the matching data-draft attribute from the HTML. */
(function () {
  'use strict';

  var host = location.hostname;
  var local = host === 'localhost' || host === '127.0.0.1' || host === '' || host === '[::1]';
  var forced = new URLSearchParams(location.search).get('draft') === '1';

  if (!local && !forced) return;

  var nodes = document.querySelectorAll('[data-draft]');
  if (!nodes.length) return;

  nodes.forEach(function (el) {
    var note = document.createElement('div');
    note.className = 'draft';

    var head = document.createElement('b');
    head.textContent = 'Draft only · not shown in production';

    note.appendChild(head);
    note.appendChild(document.createTextNode(el.dataset.draft));

    if (el.dataset.draftPlace === 'before') {
      el.parentNode.insertBefore(note, el);
    } else {
      el.parentNode.insertBefore(note, el.nextSibling);
    }
  });

  var banner = document.createElement('aside');
  banner.className = 'draft-banner';
  banner.innerHTML =
    '<b>Draft preview</b>' +
    nodes.length + ' unresolved item' + (nodes.length === 1 ? '' : 's') +
    ' on this page. See CHECKLIST.md.';
  document.body.appendChild(banner);
})();
