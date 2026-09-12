(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna glisty ludzkiej =====
  register.diagram('d-t206-nicienie-budowa', function () {
    var w = 640,
      h = 260;
    var cx = 320,
      cy = 110;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna glisty ludzkiej (schemat)');

    // wydłużone, wrzecionowate, niesegmentowane ciało
    inner += k.ellipse(cx, cy, 240, 26, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });

    // otwór gębowy (przedni koniec)
    inner += k.circle(cx - 240, cy, 5, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    // otwór odbytowy (bliżej tylnego końca, po stronie brzusznej)
    inner += k.circle(cx + 225, cy + 10, 4, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });

    // numery
    inner += k.numberLabel(cx - 240, cy - 40, 1);
    inner += k.numberLabel(cx, cy - 42, 2);
    inner += k.numberLabel(cx + 225, cy + 45, 3);
    inner += k.numberLabel(cx - 120, cy + 45, 4);

    var legendY = cy + 90;
    var opisy = [
      '1 — Otwór gębowy — na przednim, zaokrąglonym końcu ciała',
      '2 — Kutikula — elastyczna, gładka, odporna okrywa ciała chroniąca przed sokami trawiennymi żywiciela',
      '3 — Otwór odbytowy — bliżej tylnego, zwężonego końca ciała',
      '4 — Wydłużony, nitkowaty (wrzecionowaty), niesegmentowany kształt ciała — cecha charakterystyczna całej grupy',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 20 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: cykl zarażenia glistą ludzką =====
  register.diagram('d-t206-nicienie-cykl', function () {
    var w = 640,
      h = 320;
    var inner = k.frameTitle(w, 'Cykl zarażenia glistą ludzką (schemat uproszczony)');

    var etapy = [
      'Jaja inwazyjne\nw glebie / na warzywach',
      'Połknięcie jaj\nprzez człowieka',
      'Larwy wędrują przez\njelito, wątrobę, płuca',
      'Dorosłe glisty\nw jelicie cienkim',
    ];
    var boxW = 130,
      boxH = 70,
      gap = 24;
    var totalW = etapy.length * boxW + (etapy.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 60;

    etapy.forEach(function (nazwa, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
      var lines = nazwa.split('\n');
      inner += k.multilineText(x + boxW / 2, y + 28, lines, { anchor: 'middle', size: 11.5, lineHeight: 15 });
      if (i < etapy.length - 1) {
        inner += k.line(x + boxW, y + boxH / 2, x + boxW + gap, y + boxH / 2, { arrow: true, strokeWidth: 2 });
      }
    });

    // strzałka powrotna: z ostatniego boksu jaja z kałem wracają do środowiska
    var lastX = startX + (etapy.length - 1) * (boxW + gap) + boxW / 2;
    var firstX = startX + boxW / 2;
    var loopY = y + boxH + 55;
    inner += k.path(
      'M ' + lastX + ',' + (y + boxH) + ' C ' + lastX + ',' + loopY + ' ' + firstX + ',' + loopY + ' ' + firstX + ',' + (y + boxH),
      { arrow: true, strokeWidth: 2, stroke: k.PALETTE.czerwony }
    );
    inner += k.text(w / 2, loopY + 4, 'jaja wydalane z kałem trafiają do środowiska (gleba, brudne warzywa, brudne ręce)', {
      anchor: 'middle',
      size: 11.5,
      fill: k.PALETTE.czerwony,
    });

    return k.svg(w, h, inner);
  });
})();
