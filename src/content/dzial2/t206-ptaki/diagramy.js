(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna ptaka =====
  register.diagram('d-t206-ptaki-budowa', function () {
    var w = 640,
      h = 460;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna ptaka (na przykładzie wróbla)');

    // Tułów
    inner += k.ellipse(320, 200, 100, 70, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
    // Głowa
    inner += k.circle(210, 150, 40, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
    // Dziób
    inner += k.path('M172,150 L128,142 L172,164 Z', { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    // Oko
    inner += k.circle(198, 140, 5, { fill: k.PALETTE.linia });
    // Skrzydło
    inner += k.path('M300,160 Q380,150 420,210 Q370,220 320,215 Z', { fill: k.PALETTE.szaryC, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    // Ogon (pióra sterowe)
    inner += k.path('M410,225 L470,210 L465,232 L472,254 L410,240 Z', { fill: k.PALETTE.szaryC, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    // Nogi z łuskami i pazurami
    inner += k.line(300, 265, 296, 320, { strokeWidth: 3 });
    inner += k.path('M296,320 L282,332 M296,320 L296,336 M296,320 L310,332', { strokeWidth: 2 });
    inner += k.line(340, 265, 344, 320, { strokeWidth: 3 });
    inner += k.path('M344,320 L330,332 M344,320 L344,336 M344,320 L358,332', { strokeWidth: 2 });

    // Numerowane odnośniki
    inner += k.leader(150, 148, 96, 108, 1);
    inner += k.leader(360, 175, 440, 140, 2);
    inner += k.leader(440, 240, 520, 236, 3);
    inner += k.leader(300, 300, 232, 320, 4);

    var opisy = [
      '1 — Rogowy, bezzębny dziób — zmniejsza masę głowy',
      '2 — Skrzydła pokryte piórami lotnymi — powierzchnia nośna do lotu',
      '3 — Pióra sterowe ogona — sterowanie kierunkiem lotu i hamowanie',
      '4 — Nogi pokryte łuskami rogowymi (cecha wspólna z gadami), zakończone pazurami',
    ];
    inner += k.multilineText(40, 350, opisy, { size: 12.5, lineHeight: 22 });
    inner += k.text(w / 2, 420, 'Całe ciało (poza dziobem i nogami) pokrywają pióra puchowe i konturowe — izolacja cieplna i powierzchnia nośna.', {
      anchor: 'middle', size: 11.5, fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: przystosowania szkieletu i układu oddechowego ptaka do lotu =====
  register.diagram('d-t206-ptaki-lot', function () {
    var w = 640,
      h = 340;
    var inner = k.frameTitle(w, 'Przystosowania budowy ptaka do lotu');

    var cechy = [
      ['Kości pneumatyczne', 'cienkie, wypełnione powietrzem — mniejsza masa szkieletu'],
      ['Mostek z grzebieniem (kilem)', 'miejsce przyczepu silnych mięśni piersiowych poruszających skrzydłami'],
      ['Worki powietrzne', 'połączone z płucami — bardzo wydajna wymiana gazowa (podwójne oddychanie)'],
      ['Wysoka intensywność przemiany materii', 'szybkie dostarczanie dużej ilości energii potrzebnej do lotu'],
    ];
    var boxW = 280,
      boxH = 58,
      gapX = 30,
      gapY = 16;
    var startX = (w - (2 * boxW + gapX)) / 2;
    var startY = 60;
    cechy.forEach(function (c, i) {
      var col = i % 2,
        row = Math.floor(i / 2);
      var x = startX + col * (boxW + gapX);
      var y = startY + row * (boxH + gapY);
      inner += k.rect(x, y, boxW, boxH, { fill: i === 1 ? k.PALETTE.zoltyC : '#eef6f1', stroke: k.PALETTE.zolty });
      inner += k.text(x + 10, y + 20, c[0], { weight: 700, size: 12.5 });
      inner += k.multilineText(x + 10, y + 37, [c[1]], { size: 10.5, fill: k.PALETTE.szary, lineHeight: 13 });
    });
    inner += k.text(w / 2, startY + 2 * boxH + gapY + 30, 'Wszystkie te cechy razem zmniejszają masę ciała i zwiększają dostawy energii — umożliwiają aktywny lot.', {
      anchor: 'middle', size: 11.5, fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
