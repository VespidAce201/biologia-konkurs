(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna płaza (żaba) =====
  register.diagram('d-t206-plazy-budowa', function () {
    var w = 640,
      h = 470;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna płaza (na przykładzie żaby)');

    // Tułów i głowa (bez wyraźnej szyi)
    inner += k.ellipse(310, 190, 95, 65, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.circle(310, 110, 62, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });

    // Oczy wypukłe
    inner += k.circle(275, 68, 15, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia });
    inner += k.circle(275, 68, 6, { fill: k.PALETTE.linia });
    inner += k.circle(345, 68, 15, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia });
    inner += k.circle(345, 68, 6, { fill: k.PALETTE.linia });
    // Nozdrza
    inner += k.circle(292, 56, 2.2, { fill: k.PALETTE.linia });
    inner += k.circle(328, 56, 2.2, { fill: k.PALETTE.linia });
    // Błona bębenkowa
    inner += k.circle(240, 100, 11, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia });

    // Kończyna przednia (krótka)
    inner += k.path('M230,175 L190,205 L166,236', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 4 });

    // Kończyna tylna (długa, skoczna, zgięta)
    inner += k.path('M388,215 L442,236 L456,292 L410,322', { fill: 'none', stroke: k.PALETTE.linia, strokeWidth: 5 });
    // Błona pławna (stopa z płetwą)
    inner += k.path('M410,322 L392,344 M410,322 L410,349 M410,322 L428,344', { stroke: k.PALETTE.linia, strokeWidth: 2 });
    inner += k.path('M392,344 Q410,336 428,344', { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia, strokeWidth: 1 });

    // Numerowane odnośniki
    inner += k.leader(365, 205, 452, 172, 1);
    inner += k.leader(275, 68, 226, 28, 2);
    inner += k.leader(240, 100, 168, 80, 3);
    inner += k.leader(198, 216, 136, 258, 4);
    inner += k.leader(432, 250, 508, 222, 5);
    inner += k.leader(410, 336, 468, 372, 6);

    var opisy = [
      '1 — Skóra naga i wilgotna — dodatkowy narząd wymiany gazowej (oddychanie skórne)',
      '2 — Duże, wypukłe oczy — szerokie pole widzenia',
      '3 — Błona bębenkowa — odbiera dźwięki (brak zewnętrznej małżowiny usznej)',
      '4 — Krótsze kończyny przednie',
      '5 — Długie, silne kończyny tylne — przystosowanie do skakania',
      '6 — Błony pławne między palcami tylnych kończyn — ułatwiają pływanie',
    ];
    inner += k.multilineText(40, 305, opisy, { size: 12.5, lineHeight: 22 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: cykl rozwojowy żaby (przeobrażenie) =====
  register.diagram('d-t206-plazy-cykl', function () {
    var etapy = [
      ['Jajo (skrzek)', 'złożone w wodzie'],
      ['Kijanka —', 'oddycha skrzelami, ma ogon'],
      ['Kijanka z odnóżami —', 'zanika ogon'],
      ['Żaba dorosła —', 'oddycha płucami i skórą'],
    ];
    var w = 640,
      h = 300;
    var boxW = 132,
      boxH = 74,
      gap = 22;
    var totalW = etapy.length * boxW + (etapy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 60;
    var inner = k.frameTitle(w, 'Cykl rozwojowy żaby — przeobrażenie (metamorfoza)');
    var centers = [];
    etapy.forEach(function (linie, i) {
      var x = startX + i * (boxW + gap);
      centers.push(x + boxW / 2);
      inner += k.rect(x, y, boxW, boxH, { fill: i === 3 ? k.PALETTE.zielonyC : '#eef6f1', stroke: k.PALETTE.zielony });
      inner += k.multilineText(x + boxW / 2, y + 30, linie, { anchor: 'middle', weight: 700, size: 11.5, lineHeight: 16 });
      if (i < etapy.length - 1) {
        inner += k.line(x + boxW, y + boxH / 2, x + boxW + gap, y + boxH / 2, { arrow: true, strokeWidth: 2 });
      }
    });
    var yBottom = y + boxH;
    var pathD =
      'M' + centers[3] + ',' + yBottom +
      ' C ' + centers[3] + ',' + (yBottom + 90) + ' ' + centers[0] + ',' + (yBottom + 90) + ' ' + centers[0] + ',' + yBottom;
    inner += k.path(pathD, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 2, arrow: true });
    inner += k.text(w / 2, yBottom + 70, 'Dorosła żaba wraca do wody, aby złożyć nowe jaja — cykl się powtarza.', {
      anchor: 'middle',
      size: 11.5,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
