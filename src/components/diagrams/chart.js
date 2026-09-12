/**
 * Generyczny renderer wykresów (słupkowy, liniowy, kołowy) na podstawie surowych danych.
 * Treści (moduł "Analiza danych") dostarczają tylko dane liczbowe — bez ręcznego rysowania SVG.
 * spec = { typ: 'slupkowy'|'liniowy'|'kolowy', tytul, jednostka, dane: [{etykieta, wartosc}], kolorySerii? }
 */
(function () {
  'use strict';
  var esc = window.App.core.utils.escapeHTML;

  var KOLORY = ['#1f8a5f', '#2a6f97', '#b8860b', '#8a4fbf', '#c0392b', '#d9622b', '#4a9c2f', '#5b6a64'];

  function niceMax(v) {
    if (v <= 0) return 10;
    var mag = Math.pow(10, Math.floor(Math.log10(v)));
    var norm = v / mag;
    var nice = norm <= 1 ? 1 : norm <= 2 ? 2 : norm <= 5 ? 5 : 10;
    return nice * mag;
  }

  function renderSlupkowy(spec) {
    var W = 560,
      H = 320,
      padL = 56,
      padB = 46,
      padT = 30,
      padR = 20;
    var plotW = W - padL - padR;
    var plotH = H - padT - padB;
    var maxVal = niceMax(Math.max.apply(null, spec.dane.map(function (d) { return d.wartosc; })) * 1.15);
    var barGap = 16;
    var barW = (plotW - barGap * (spec.dane.length + 1)) / spec.dane.length;

    var bars = '';
    var labels = '';
    spec.dane.forEach(function (d, i) {
      var x = padL + barGap + i * (barW + barGap);
      var barH = (d.wartosc / maxVal) * plotH;
      var y = padT + plotH - barH;
      var color = d.kolor || KOLORY[i % KOLORY.length];
      bars +=
        '<rect x="' + x + '" y="' + y + '" width="' + barW + '" height="' + barH + '" fill="' + color + '" rx="3"/>' +
        '<text x="' + (x + barW / 2) + '" y="' + (y - 6) + '" font-size="11.5" font-weight="700" text-anchor="middle" fill="var(--color-text)">' + d.wartosc + '</text>';
      labels += '<text x="' + (x + barW / 2) + '" y="' + (padT + plotH + 18) + '" font-size="11" text-anchor="middle" fill="var(--color-text-muted)">' + esc(d.etykieta) + '</text>';
    });

    var gridLines = '';
    var steps = 4;
    for (var s = 0; s <= steps; s++) {
      var val = (maxVal / steps) * s;
      var y2 = padT + plotH - (val / maxVal) * plotH;
      gridLines +=
        '<line x1="' + padL + '" y1="' + y2 + '" x2="' + (W - padR) + '" y2="' + y2 + '" stroke="var(--color-border)" stroke-width="1"/>' +
        '<text x="' + (padL - 8) + '" y="' + (y2 + 4) + '" font-size="10.5" text-anchor="end" fill="var(--color-text-muted)">' + Math.round(val) + '</text>';
    }

    return (
      '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Wykres słupkowy" style="font-family: Segoe UI, system-ui, sans-serif;">' +
      (spec.tytul ? '<text x="' + W / 2 + '" y="16" font-size="13" font-weight="800" text-anchor="middle" fill="var(--color-text)">' + esc(spec.tytul) + '</text>' : '') +
      gridLines +
      bars +
      labels +
      (spec.jednostka ? '<text x="' + padL + '" y="14" font-size="10.5" fill="var(--color-text-muted)">[' + esc(spec.jednostka) + ']</text>' : '') +
      '</svg>'
    );
  }

  function renderLiniowy(spec) {
    var W = 560,
      H = 320,
      padL = 56,
      padB = 46,
      padT = 30,
      padR = 24;
    var plotW = W - padL - padR;
    var plotH = H - padT - padB;
    var maxVal = niceMax(Math.max.apply(null, spec.dane.map(function (d) { return d.wartosc; })) * 1.15);
    var minVal = Math.min(0, Math.min.apply(null, spec.dane.map(function (d) { return d.wartosc; })));
    var n = spec.dane.length;
    var stepX = n > 1 ? plotW / (n - 1) : 0;

    function xy(i, v) {
      var x = padL + i * stepX;
      var y = padT + plotH - ((v - minVal) / (maxVal - minVal)) * plotH;
      return [x, y];
    }

    var points = spec.dane.map(function (d, i) {
      return xy(i, d.wartosc);
    });
    var pathD = points
      .map(function (p, i) {
        return (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1);
      })
      .join(' ');

    var dots = points
      .map(function (p, i) {
        return (
          '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="4" fill="#2a6f97" stroke="#fff" stroke-width="1.5"/>' +
          '<text x="' + p[0] + '" y="' + (p[1] - 10) + '" font-size="11" font-weight="700" text-anchor="middle" fill="var(--color-text)">' + spec.dane[i].wartosc + '</text>'
        );
      })
      .join('');

    var labels = spec.dane
      .map(function (d, i) {
        var p = xy(i, minVal);
        return '<text x="' + p[0] + '" y="' + (padT + plotH + 18) + '" font-size="11" text-anchor="middle" fill="var(--color-text-muted)">' + esc(d.etykieta) + '</text>';
      })
      .join('');

    var gridLines = '';
    var steps = 4;
    for (var s = 0; s <= steps; s++) {
      var val = minVal + ((maxVal - minVal) / steps) * s;
      var y2 = padT + plotH - ((val - minVal) / (maxVal - minVal)) * plotH;
      gridLines +=
        '<line x1="' + padL + '" y1="' + y2 + '" x2="' + (W - padR) + '" y2="' + y2 + '" stroke="var(--color-border)" stroke-width="1"/>' +
        '<text x="' + (padL - 8) + '" y="' + (y2 + 4) + '" font-size="10.5" text-anchor="end" fill="var(--color-text-muted)">' + Math.round(val) + '</text>';
    }

    return (
      '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Wykres liniowy" style="font-family: Segoe UI, system-ui, sans-serif;">' +
      (spec.tytul ? '<text x="' + W / 2 + '" y="16" font-size="13" font-weight="800" text-anchor="middle" fill="var(--color-text)">' + esc(spec.tytul) + '</text>' : '') +
      gridLines +
      '<path d="' + pathD + '" fill="none" stroke="#2a6f97" stroke-width="2.5"/>' +
      dots +
      labels +
      '</svg>'
    );
  }

  function renderKolowy(spec) {
    var W = 420,
      H = 320;
    var cx = 170,
      cy = H / 2,
      r = 110;
    var total = spec.dane.reduce(function (s, d) { return s + d.wartosc; }, 0) || 1;
    var angle = -Math.PI / 2;
    var slices = '';
    var legendItems = '';
    spec.dane.forEach(function (d, i) {
      var frac = d.wartosc / total;
      var next = angle + frac * Math.PI * 2;
      var x1 = cx + r * Math.cos(angle);
      var y1 = cy + r * Math.sin(angle);
      var x2 = cx + r * Math.cos(next);
      var y2 = cy + r * Math.sin(next);
      var largeArc = frac > 0.5 ? 1 : 0;
      var color = d.kolor || KOLORY[i % KOLORY.length];
      slices += '<path d="M' + cx + ',' + cy + ' L' + x1.toFixed(1) + ',' + y1.toFixed(1) + ' A' + r + ',' + r + ' 0 ' + largeArc + ' 1 ' + x2.toFixed(1) + ',' + y2.toFixed(1) + ' Z" fill="' + color + '" stroke="var(--color-bg-elevated)" stroke-width="2"/>';
      var pct = Math.round(frac * 100);
      legendItems += '<rect x="310" y="' + (40 + i * 24 - 10) + '" width="13" height="13" rx="3" fill="' + color + '"/>' +
        '<text x="330" y="' + (40 + i * 24 + 1) + '" font-size="11" fill="var(--color-text)">' + esc(d.etykieta) + ' — ' + pct + '%</text>';
      angle = next;
    });

    return (
      '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" role="img" aria-label="Wykres kołowy" style="font-family: Segoe UI, system-ui, sans-serif;">' +
      (spec.tytul ? '<text x="' + W / 2 + '" y="16" font-size="13" font-weight="800" text-anchor="middle" fill="var(--color-text)">' + esc(spec.tytul) + '</text>' : '') +
      slices +
      legendItems +
      '</svg>'
    );
  }

  function render(spec) {
    if (spec.typ === 'liniowy') return renderLiniowy(spec);
    if (spec.typ === 'kolowy') return renderKolowy(spec);
    return renderSlupkowy(spec);
  }

  window.App.components.chart = { render: render };
})();
