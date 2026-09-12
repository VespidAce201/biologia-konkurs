(function () {
  'use strict';

  function wrap(inner, size) {
    size = size || 20;
    return (
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      inner +
      '</svg>'
    );
  }

  var paths = {
    leaf: '<path d="M5 21c8 0 14-6 14-14V5h-2C9 5 5 11 5 19v2z"/><path d="M5 21c0-4 2-8 6-11"/>',
    book: '<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M20 19H6.5A2.5 2.5 0 0 0 4 21.5"/>',
    cards: '<rect x="4" y="7" width="13" height="14" rx="2"/><path d="M9 3h11v14"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 4.8 1c0 1.6-2.3 2-2.3 3.5"/><circle cx="12" cy="17" r="0.5" fill="currentColor"/>',
    flask: '<path d="M9 2h6"/><path d="M10 2v6l-5.5 9.5A2 2 0 0 0 6.2 21h11.6a2 2 0 0 0 1.7-3.5L14 8V2"/><path d="M7.5 15h9"/>',
    chart: '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 4H4v2a4 4 0 0 0 4 4"/><path d="M16 4h4v2a4 4 0 0 1-4 4"/><path d="M10 15v3h4v-3"/><path d="M8 21h8"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
    flame: '<path d="M12 22c4 0 7-2.5 7-7 0-3-1.7-4.7-2.6-6.4C15.6 7 15 5 15 3c-3 2-5 5-5 8-1 0-1.7-1-2-2C6 10.4 5 13 5 15c0 4 3 7 7 7z"/>',
    star: '<path d="M12 2l2.9 6.6 7.1.7-5.4 4.8 1.6 7-6.2-3.7L6 21l1.6-7-5.4-4.8 7.1-.7z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="M6 6l12 12"/>',
    flag: '<path d="M5 21V4"/><path d="M5 4h13l-3 4 3 4H5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.9 4.9l1.4 1.4"/><path d="M17.7 17.7l1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M4.9 19.1l1.4-1.4"/><path d="M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/>',
    chevronRight: '<path d="M9 6l6 6-6 6"/>',
    chevronDown: '<path d="M6 9l6 6 6-6"/>',
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    home: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    dna: '<path d="M7 3c0 6 10 12 10 18"/><path d="M17 3c0 6-10 12-10 18"/><path d="M8 7h8"/><path d="M7.5 12h9"/><path d="M8 17h8"/>',
    microscope: '<path d="M9 21h8"/><path d="M12 21v-4"/><path d="M6 17h9a4 4 0 0 0 0-8H9"/><path d="M9 9V4h3l2 2"/><circle cx="7" cy="17" r="0"/>',
    bug: '<rect x="8" y="7" width="8" height="12" rx="4"/><path d="M12 7V4"/><path d="M9 4l1.5 2"/><path d="M15 4l-1.5 2"/><path d="M5 10l3 1.5"/><path d="M19 10l-3 1.5"/><path d="M5 19l3-1.5"/><path d="M19 19l-3-1.5"/><path d="M8 13H4"/><path d="M20 13h-4"/>',
    tree: '<path d="M12 22v-7"/><path d="M12 15L6 9l3 .5L7 5l4 2-1-4 2 1.5L14 3l-1 4 2-1.5-2 4.5 3-.5-6 6z"/>',
    paw: '<circle cx="6" cy="10" r="1.6"/><circle cx="10" cy="6.5" r="1.6"/><circle cx="14" cy="6.5" r="1.6"/><circle cx="18" cy="10" r="1.6"/><path d="M12 12c-3 0-6 2.2-6 5a3 3 0 0 0 5 2c.5-.5 1-1 1-1s.5.5 1 1a3 3 0 0 0 5-2c0-2.8-3-5-6-5z"/>',
    shield: '<path d="M12 3l7 3v6c0 5-3.4 8-7 9-3.6-1-7-4-7-9V6z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 3v4"/><path d="M16 3v4"/>',
    lightbulb: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a6 6 0 0 0-4 10.5c.7.6 1 1.2 1 2.5h6c0-1.3.3-1.9 1-2.5A6 6 0 0 0 12 2z"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/><path d="M3 17.5l9 5 9-5"/>',
    arrowRight: '<path d="M5 12h14"/><path d="M13 6l6 6-6 6"/>',
    refresh: '<path d="M20 11A8 8 0 0 0 5.5 6.5L4 8"/><path d="M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.5 4.5L20 16"/><path d="M20 20v-4h-4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
    alert: '<path d="M12 9v4"/><circle cx="12" cy="16.5" r="0.6" fill="currentColor"/><path d="M10.3 3.9 2.5 18a1.8 1.8 0 0 0 1.6 2.7h15.8a1.8 1.8 0 0 0 1.6-2.7L13.7 3.9a1.8 1.8 0 0 0-3.4 0z"/>',
  };

  function icon(name, size, extraClass) {
    var inner = paths[name];
    if (!inner) {
      console.error('[icons] Nieznana ikona:', name);
      return '';
    }
    var svg = wrap(inner, size);
    if (extraClass) {
      svg = svg.replace('<svg ', '<svg class="' + extraClass + '" ');
    }
    return svg;
  }

  window.App.components.icons = { icon: icon, names: Object.keys(paths) };
})();
