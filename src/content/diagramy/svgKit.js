/**
 * Zestaw pomocniczych funkcji do ręcznego tworzenia schematycznych diagramów SVG
 * (budowa komórki, tkanki, cykle rozwojowe, drzewa klasyfikacyjne, porównania grup
 * organizmów, schematy doświadczeń itp.). Diagramy są rysowane jako proste kształty
 * wektorowe z podpisami — nie są to zdjęcia/mikrofotografie, tylko poglądowe schematy,
 * co jest wystarczające i odpowiednie dla materiału na poziomie szkoły podstawowej.
 *
 * Każdy diagram treści rejestruje się przez: App.content.register.diagram(id, function () { return svg; })
 * i jest wywoływany przez App.content.queries.diagram(id) -> zwraca string SVG.
 */
(function () {
  'use strict';

  var PALETTE = {
    linia: '#3a4a43',
    tekst: '#1a2420',
    jasny: '#eef6f1',
    zielony: '#4a9c2f',
    zielonyC: '#e4f5ec',
    niebieski: '#2a6f97',
    niebieskiC: '#e5f0f7',
    fiolet: '#8a4fbf',
    fioletC: '#f1e9fb',
    czerwony: '#c0392b',
    czerwonyC: '#fbe8e6',
    zolty: '#b8860b',
    zoltyC: '#fbf1dc',
    pomaranczowy: '#d9622b',
    pomaranczowyC: '#fcece1',
    szary: '#8a9b93',
    szaryC: '#eef1f0',
  };

  function svg(width, height, inner, viewBox) {
    // Diagramy mają zawsze jasne tło (niezależnie od motywu aplikacji), ponieważ
    // kolory wewnętrznych kształtów są dobrane pod czytelność na jasnym tle.
    var vb = viewBox || '0 0 ' + width + ' ' + height;
    var vbParts = vb.split(' ').map(Number);
    return (
      '<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="' +
      vb +
      '" role="img" style="font-family: Segoe UI, system-ui, sans-serif; background:#ffffff; border-radius:10px;">' +
      '<rect x="' + vbParts[0] + '" y="' + vbParts[1] + '" width="' + vbParts[2] + '" height="' + vbParts[3] + '" fill="#ffffff"/>' +
      defs() +
      inner +
      '</svg>'
    );
  }

  function defs() {
    return (
      '<defs>' +
      '<marker id="dkArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">' +
      '<path d="M0,0 L6,3 L0,6 Z" fill="' + PALETTE.linia + '"/>' +
      '</marker>' +
      '</defs>'
    );
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function rect(x, y, w, h, opts) {
    opts = opts || {};
    var rx = opts.rx !== undefined ? opts.rx : 6;
    return (
      '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + rx + '" ' +
      'fill="' + (opts.fill || PALETTE.jasny) + '" stroke="' + (opts.stroke || PALETTE.linia) + '" stroke-width="' + (opts.strokeWidth || 1.5) + '"' +
      (opts.dash ? ' stroke-dasharray="' + opts.dash + '"' : '') + '/>'
    );
  }

  function circle(cx, cy, r, opts) {
    opts = opts || {};
    return (
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + (opts.fill || PALETTE.jasny) + '" ' +
      'stroke="' + (opts.stroke || PALETTE.linia) + '" stroke-width="' + (opts.strokeWidth || 1.5) + '"' +
      (opts.dash ? ' stroke-dasharray="' + opts.dash + '"' : '') + '/>'
    );
  }

  function ellipse(cx, cy, rx, ry, opts) {
    opts = opts || {};
    return (
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="' + (opts.fill || PALETTE.jasny) + '" ' +
      'stroke="' + (opts.stroke || PALETTE.linia) + '" stroke-width="' + (opts.strokeWidth || 1.5) + '"' +
      (opts.dash ? ' stroke-dasharray="' + opts.dash + '"' : '') + '/>'
    );
  }

  function line(x1, y1, x2, y2, opts) {
    opts = opts || {};
    return (
      '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (opts.stroke || PALETTE.linia) + '" ' +
      'stroke-width="' + (opts.strokeWidth || 1.5) + '"' + (opts.dash ? ' stroke-dasharray="' + opts.dash + '"' : '') +
      (opts.arrow ? ' marker-end="url(#dkArrow)"' : '') + '/>'
    );
  }

  function path(d, opts) {
    opts = opts || {};
    return (
      '<path d="' + d + '" fill="' + (opts.fill || 'none') + '" stroke="' + (opts.stroke || PALETTE.linia) + '" ' +
      'stroke-width="' + (opts.strokeWidth || 1.5) + '"' + (opts.arrow ? ' marker-end="url(#dkArrow)"' : '') + '/>'
    );
  }

  function text(x, y, content, opts) {
    opts = opts || {};
    var anchor = opts.anchor || 'start';
    var weight = opts.weight || 400;
    var size = opts.size || 12;
    return (
      '<text x="' + x + '" y="' + y + '" font-size="' + size + '" font-weight="' + weight + '" ' +
      'fill="' + (opts.fill || PALETTE.tekst) + '" text-anchor="' + anchor + '">' + esc(content) + '</text>'
    );
  }

  function multilineText(x, y, lines, opts) {
    opts = opts || {};
    var lh = opts.lineHeight || (opts.size || 12) + 3;
    return lines
      .map(function (line, i) {
        return text(x, y + i * lh, line, opts);
      })
      .join('');
  }

  function numberLabel(cx, cy, n, opts) {
    opts = opts || {};
    var r = opts.r || 10;
    return (
      circle(cx, cy, r, { fill: opts.fill || '#ffffff', stroke: PALETTE.linia, strokeWidth: 1.5 }) +
      text(cx, cy + 4, String(n), { anchor: 'middle', weight: 800, size: opts.size || 12 })
    );
  }

  function leader(fromX, fromY, toX, toY, n, opts) {
    return line(fromX, fromY, toX, toY, { stroke: PALETTE.linia, strokeWidth: 1 }) + numberLabel(toX, toY, n, opts);
  }

  function legend(x, y, items) {
    // items: [{ label, fill }]
    var out = '';
    items.forEach(function (item, i) {
      var iy = y + i * 20;
      out += rect(x, iy - 10, 14, 14, { fill: item.fill, stroke: PALETTE.linia, strokeWidth: 1, rx: 3 });
      out += text(x + 20, iy + 1, item.label, { size: 11.5 });
    });
    return out;
  }

  function frameTitle(width, title) {
    return text(width / 2, 20, title, { anchor: 'middle', weight: 800, size: 14 });
  }

  window.App.content.svgKit = {
    PALETTE: PALETTE,
    svg: svg,
    rect: rect,
    circle: circle,
    ellipse: ellipse,
    line: line,
    path: path,
    text: text,
    multilineText: multilineText,
    numberLabel: numberLabel,
    leader: leader,
    legend: legend,
    frameTitle: frameTitle,
    esc: esc,
  };
})();
