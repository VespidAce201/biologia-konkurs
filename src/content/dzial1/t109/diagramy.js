(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Błona komórkowa — dwuwarstwa lipidowa z białkami =====
  register.diagram('d-t109-blona-komorkowa', function () {
    var w = 680,
      h = 340;
    var inner = k.frameTitle(w, 'Budowa błony komórkowej');

    inner += k.text(w / 2, 55, 'Środowisko zewnątrzkomórkowe', { anchor: 'middle', size: 12, fill: k.PALETTE.szary, weight: 700 });
    inner += k.text(w / 2, 265, 'Cytoplazma (wnętrze komórki)', { anchor: 'middle', size: 12, fill: k.PALETTE.szary, weight: 700 });

    var topHeadY = 90,
      tailTopEnd = 122,
      tailBotStart = 148,
      botHeadY = 180;
    var xs = [];
    for (var x = 60; x <= 620; x += 32) xs.push(x);

    xs.forEach(function (cx) {
      // pomijamy fosfolipidy w miejscach, gdzie będą białka błonowe
      if (Math.abs(cx - 240) < 26 || Math.abs(cx - 420) < 26 || Math.abs(cx - 560) < 20) return;
      inner += k.line(cx, tailTopEnd, cx, tailBotStart, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 2.5 }); // 2 ogon (hydrofobowy)
      inner += k.circle(cx, topHeadY, 9, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.5 }); // 1 głowa (hydrofilowa)
      inner += k.circle(cx, botHeadY, 9, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.5 });
    });

    // 3 białko kanałowe (z porem pośrodku)
    inner += k.rect(224, 70, 32, 130, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2, rx: 14 });
    inner += k.rect(236, 78, 8, 114, { fill: '#ffffff', stroke: k.PALETTE.fiolet, strokeWidth: 1, rx: 4 });

    // 4 białko transportowe (nośnikowe) — kształt "klepsydry" sugerujący zmianę konformacji
    inner += k.path('M404,72 C404,105 436,115 436,135 C436,155 404,165 404,198 L436,198 C436,165 404,155 404,135 C404,115 436,105 436,72 Z', {
      fill: k.PALETTE.zoltyC,
      stroke: k.PALETTE.zolty,
      strokeWidth: 2,
    });

    // 5 białko receptorowe (na zewnętrznej powierzchni) + przyłączona cząsteczka sygnałowa
    inner += k.rect(548, 78, 24, 60, { fill: k.PALETTE.czerwonyC, stroke: k.PALETTE.czerwony, strokeWidth: 2, rx: 8 });
    inner += k.circle(560, 65, 9, { fill: k.PALETTE.czerwonyC, stroke: k.PALETTE.czerwony, strokeWidth: 1.5 });
    inner += k.line(560, 56, 560, 44, { stroke: k.PALETTE.czerwony, strokeWidth: 1.5 });
    inner += k.circle(560, 38, 7, { fill: '#ffffff', stroke: k.PALETTE.czerwony, strokeWidth: 1.5, dash: '2,2' });

    inner += k.numberLabel(90, 90, 1);
    inner += k.numberLabel(76, 105, 2);
    inner += k.numberLabel(240, 135, 3);
    inner += k.numberLabel(420, 135, 4);
    inner += k.numberLabel(560, 105, 5);

    var legenda = [
      '1 — głowa fosfolipidu (hydrofilowa, "lubi wodę")',
      '2 — ogon fosfolipidu (hydrofobowy, "unika wody")',
      '3 — białko kanałowe (kanał błonowy)',
      '4 — białko transportowe (nośnikowe)',
      '5 — białko receptorowe',
    ];
    inner += k.multilineText(40, 300, legenda, { size: 11.5, lineHeight: 17 });

    return k.svg(w, h, inner);
  });

  // ===== Porównanie: dyfuzja prosta, osmoza, transport aktywny =====
  register.diagram('d-t109-transport-porownanie', function () {
    var w = 700,
      h = 400;
    var inner = k.frameTitle(w, 'Rodzaje transportu przez błonę komórkową');

    var panelW = 210,
      gap = 20,
      startX = 20,
      topY = 55,
      panelH = 250;

    function panel(x, tytul) {
      var out = k.text(x + panelW / 2, topY - 12, tytul, { anchor: 'middle', weight: 700, size: 12.5 });
      out += k.rect(x, topY, panelW, panelH, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia, strokeWidth: 1, rx: 8 });
      out += k.line(x + panelW / 2, topY, x + panelW / 2, topY + panelH, { stroke: k.PALETTE.niebieski, strokeWidth: 3 }); // błona
      return out;
    }

    // ---- Panel 1: dyfuzja prosta ----
    var x1 = startX;
    inner += panel(x1, 'Dyfuzja prosta');
    var dotsLeft1 = [[x1 + 25, 90], [x1 + 45, 120], [x1 + 25, 150], [x1 + 50, 180], [x1 + 30, 210], [x1 + 55, 240], [x1 + 20, 270]];
    dotsLeft1.forEach(function (p) { inner += k.circle(p[0], p[1], 5, { fill: k.PALETTE.zielony, stroke: 'none' }); });
    var dotsRight1 = [[x1 + 150, 150], [x1 + 175, 220]];
    dotsRight1.forEach(function (p) { inner += k.circle(p[0], p[1], 5, { fill: k.PALETTE.zielony, stroke: 'none' }); });
    inner += k.line(x1 + 90, 180, x1 + 140, 180, { arrow: true, strokeWidth: 2 });
    inner += k.text(x1 + panelW / 2, topY + panelH + 15, 'Duże stężenie → małe stężenie', { anchor: 'middle', size: 10.5 });
    inner += k.text(x1 + panelW / 2, topY + panelH + 30, '(bez udziału białek i ATP)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    // ---- Panel 2: osmoza ----
    var x2 = startX + panelW + gap;
    inner += panel(x2, 'Osmoza');
    // rozpuszczone cząsteczki (nie mogą przejść) — więcej po prawej
    var soluteLeft = [[x2 + 40, 100]];
    var soluteRight = [[x2 + 140, 90], [x2 + 165, 130], [x2 + 145, 170], [x2 + 170, 210], [x2 + 150, 250]];
    soluteLeft.concat(soluteRight).forEach(function (p) { inner += k.rect(p[0] - 5, p[1] - 5, 10, 10, { fill: k.PALETTE.pomaranczowy, stroke: 'none', rx: 2 }); });
    // cząsteczki wody (mogą przejść przez błonę) — strzałka w stronę większego stężenia roztworu
    [[x2 + 20, 150], [x2 + 30, 200], [x2 + 20, 240]].forEach(function (p) { inner += k.circle(p[0], p[1], 4, { fill: k.PALETTE.niebieski, stroke: 'none' }); });
    inner += k.line(x2 + 80, 190, x2 + 130, 190, { arrow: true, strokeWidth: 2, stroke: k.PALETTE.niebieski });
    inner += k.text(x2 + panelW / 2, topY + panelH + 15, 'Woda płynie tam, gdzie', { anchor: 'middle', size: 10.5 });
    inner += k.text(x2 + panelW / 2, topY + panelH + 30, 'stężenie roztworu jest wyższe', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    // ---- Panel 3: transport aktywny ----
    var x3 = startX + 2 * (panelW + gap);
    inner += panel(x3, 'Transport aktywny');
    var dotsRight3 = [[x3 + 150, 100], [x3 + 170, 150], [x3 + 155, 200], [x3 + 175, 240]];
    dotsRight3.forEach(function (p) { inner += k.circle(p[0], p[1], 5, { fill: k.PALETTE.czerwony, stroke: 'none' }); });
    var dotsLeft3 = [[x3 + 30, 90], [x3 + 45, 130], [x3 + 25, 170], [x3 + 50, 210], [x3 + 30, 250], [x3 + 55, 260], [x3 + 20, 110]];
    dotsLeft3.forEach(function (p) { inner += k.circle(p[0], p[1], 5, { fill: k.PALETTE.czerwony, stroke: 'none' }); });
    // białko pompujące (kanał w błonie)
    inner += k.rect(x3 + 90, 150, 30, 60, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2, rx: 10 });
    inner += k.line(x3 + 140, 180, x3 + 100, 180, { arrow: true, strokeWidth: 2 });
    inner += k.text(x3 + panelW / 2, 230, 'ATP → ADP + Pi', { anchor: 'middle', size: 10.5, weight: 700, fill: k.PALETTE.fiolet });
    inner += k.text(x3 + panelW / 2, topY + panelH + 15, 'Małe stężenie → duże stężenie', { anchor: 'middle', size: 10.5 });
    inner += k.text(x3 + panelW / 2, topY + panelH + 30, '(wymaga białka nośnikowego i energii ATP)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
