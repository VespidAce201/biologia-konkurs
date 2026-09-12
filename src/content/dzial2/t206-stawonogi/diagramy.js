(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram: budowa zewnętrzna typowego owada =====
  register.diagram('d-t206-stawonogi-owad', function () {
    var w = 640,
      h = 360;
    var cy = 140;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna typowego owada (schemat)');

    var headCx = 130,
      headR = 26;
    var thoraxCx = 230,
      thoraxRx = 46,
      thoraxRy = 34;
    var abdomenCx = 400,
      abdomenRx = 130,
      abdomenRy = 40;

    // głowa
    inner += k.circle(headCx, cy, headR, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    // czułki
    inner += k.line(headCx - 10, cy - headR, headCx - 55, cy - 65, { strokeWidth: 1.5 });
    inner += k.line(headCx + 10, cy - headR, headCx + 15, cy - 68, { strokeWidth: 1.5 });
    // oczy
    inner += k.circle(headCx - 8, cy - 6, 4, { fill: k.PALETTE.linia, stroke: k.PALETTE.linia });

    // tułów
    inner += k.ellipse(thoraxCx, cy, thoraxRx, thoraxRy, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });

    // odwłok (segmentowany)
    inner += k.ellipse(abdomenCx, cy, abdomenRx, abdomenRy, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
    for (var i = 1; i < 6; i++) {
      var t = i / 6;
      var x = abdomenCx - abdomenRx + t * (2 * abdomenRx);
      var yHalf = abdomenRy * Math.sqrt(Math.max(0, 1 - Math.pow((x - abdomenCx) / abdomenRx, 2)));
      inner += k.line(x, cy - yHalf, x, cy + yHalf, { stroke: k.PALETTE.zolty, strokeWidth: 1 });
    }

    // skrzydła (para, na tułowiu)
    inner += k.ellipse(thoraxCx + 10, cy - 50, 55, 20, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.5 });

    // odnóża - 3 pary, osadzone na tułowiu
    var legBaseXs = [thoraxCx - 25, thoraxCx, thoraxCx + 25];
    legBaseXs.forEach(function (lx) {
      inner += k.line(lx, cy + thoraxRy - 4, lx - 15, cy + thoraxRy + 45, { strokeWidth: 1.5 });
    });

    // numery
    inner += k.numberLabel(headCx, cy + headR + 20, 1);
    inner += k.numberLabel(headCx - 40, cy - 55, 2);
    inner += k.numberLabel(thoraxCx, cy - thoraxRy - 12, 3);
    inner += k.numberLabel(legBaseXs[2] - 10, cy + thoraxRy + 30, 4);
    inner += k.numberLabel(abdomenCx, cy - abdomenRy - 12, 5);

    var legendY = cy + 100;
    var opisy = [
      '1 — Głowa — narządy zmysłów, otwór gębowy',
      '2 — Czułki (1 para) — narząd dotyku i węchu',
      '3 — Tułów — miejsce osadzenia odnóży i skrzydeł',
      '4 — Odnóża (3 pary) — narząd ruchu, cecha rozpoznawcza owadów',
      '5 — Odwłok (segmentowany) — mieści większość narządów wewnętrznych',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 18 });

    return k.svg(w, h, inner);
  });
})();
