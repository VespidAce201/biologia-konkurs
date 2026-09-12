(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa tasiemca =====
  register.diagram('d-t206-plazince-tasiemiec', function () {
    var w = 640,
      h = 300;
    var midY = 120;
    var inner = k.frameTitle(w, 'Budowa ciała tasiemca (schemat)');

    // główka (skoleks) z przyssawkami
    inner += k.circle(70, midY, 22, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
    inner += k.circle(60, midY - 10, 5, { fill: '#ffffff', stroke: k.PALETTE.zolty });
    inner += k.circle(80, midY - 10, 5, { fill: '#ffffff', stroke: k.PALETTE.zolty });
    inner += k.circle(60, midY + 10, 5, { fill: '#ffffff', stroke: k.PALETTE.zolty });
    inner += k.circle(80, midY + 10, 5, { fill: '#ffffff', stroke: k.PALETTE.zolty });
    inner += k.line(70, midY - 22, 66, midY - 30, { strokeWidth: 1.5 });
    inner += k.line(70, midY - 22, 74, midY - 30, { strokeWidth: 1.5 });

    // szyjka
    inner += k.rect(92, midY - 7, 34, 14, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia });

    // proglotydy (człony) - rosnące
    var segX = 128;
    var segCount = 8;
    var youngSegCenterX = 0,
      matureSegCenterX = 0;
    for (var i = 0; i < segCount; i++) {
      var segH = 16 + i * 4;
      var segW = 58;
      var isMature = i >= segCount - 2;
      inner += k.rect(segX, midY - segH / 2, segW, segH, {
        fill: isMature ? k.PALETTE.pomaranczowyC : k.PALETTE.zielonyC,
        stroke: isMature ? k.PALETTE.pomaranczowy : k.PALETTE.zielony,
      });
      if (i === 1) youngSegCenterX = segX + segW / 2;
      if (i === segCount - 1) matureSegCenterX = segX + segW / 2;
      segX += segW + 2;
    }

    // numery
    inner += k.numberLabel(70, midY - 40, 1);
    inner += k.numberLabel(109, midY - 30, 2);
    inner += k.numberLabel(youngSegCenterX, midY - 34, 3);
    inner += k.numberLabel(matureSegCenterX, midY - 60, 4);

    // legenda opisowa
    var legendY = midY + 90;
    var opisy = [
      '1 — Skoleks (główka) z przyssawkami i haczykami — narząd przyczepny',
      '2 — Szyjka — strefa nieustannego wzrostu, tu powstają nowe człony',
      '3 — Młody proglotyd (człon) — blisko szyjki, jeszcze bez dojrzałych jaj',
      '4 — Dojrzały proglotyd — wypełniony jajami, odrywa się i jest wydalany z kałem',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 20 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: budowa wypławka =====
  register.diagram('d-t206-plazince-wyplawek', function () {
    var w = 640,
      h = 280;
    var cx = 320,
      cy = 120;
    var inner = k.frameTitle(w, 'Budowa ciała wypławka (schemat)');

    // spłaszczone ciało
    inner += k.ellipse(cx, cy, 220, 52, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    // głowa (trójkątny przód)
    inner += k.path('M 100,' + cy + ' L 140,' + (cy - 30) + ' L 140,' + (cy + 30) + ' Z', {
      fill: k.PALETTE.zielonyC,
      stroke: k.PALETTE.zielony,
    });
    // oczka
    inner += k.circle(118, cy - 8, 4, { fill: k.PALETTE.czerwony, stroke: k.PALETTE.czerwony });
    inner += k.circle(118, cy + 8, 4, { fill: k.PALETTE.czerwony, stroke: k.PALETTE.czerwony });
    // gardziel (środek ciała)
    inner += k.circle(cx, cy, 15, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    // rozgałęzione jelito ślepe
    inner += k.line(cx, cy, cx + 60, cy - 30, { strokeWidth: 1.5 });
    inner += k.line(cx, cy, cx + 90, cy + 10, { strokeWidth: 1.5 });
    inner += k.line(cx, cy, cx + 40, cy + 35, { strokeWidth: 1.5 });
    inner += k.line(cx, cy, cx - 40, cy - 30, { strokeWidth: 1.5 });
    inner += k.line(cx, cy, cx - 40, cy + 30, { strokeWidth: 1.5 });

    // numery
    inner += k.numberLabel(118, cy - 40, 1);
    inner += k.numberLabel(cx, cy - 40, 2);
    inner += k.numberLabel(cx + 60, cy - 45, 3);
    inner += k.numberLabel(cx, cy + 66, 4);

    var legendY = cy + 105;
    var opisy = [
      '1 — Oczka (plamki oczne) — wykrywają światło, umożliwiają unikanie jasnych miejsc',
      '2 — Gardziel — wysuwany narząd służący do pobierania pokarmu',
      '3 — Rozgałęzione, ślepo zakończone jelito — rozprowadza strawiony pokarm po ciele',
      '4 — Ciało spłaszczone grzbietowo-brzusznie — zwiększa powierzchnię wymiany gazowej',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 20 });

    return k.svg(w, h, inner);
  });
})();
