(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Uproszczona budowa wirusa (typ z otoczką lipidową, np. wirus grypy) + legenda
  register.diagram('d-t202-budowa-wirusa', function () {
    var w = 620,
      h = 470;
    var cx = 310,
      cy = 185;
    var inner = k.frameTitle(w, 'Uproszczona budowa wirusa');

    // 1) Otoczka lipidowa (występuje tylko u niektórych wirusów)
    inner += k.ellipse(cx, cy, 150, 125, { fill: '#fbf1dc', stroke: k.PALETTE.zolty, dash: '6,4', strokeWidth: 1.6 });

    // 2) Białka powierzchniowe (kolce) rozmieszczone na otoczce
    var kolce = [-70, -35, -20, 10, 45, 80, 115, 150, 185, 220, 255, 290];
    kolce.forEach(function (deg) {
      var rad = (deg * Math.PI) / 180;
      var bx = cx + Math.cos(rad) * 150;
      var by = cy + Math.sin(rad) * 125;
      var tx = cx + Math.cos(rad) * 172;
      var ty = cy + Math.sin(rad) * 147;
      inner += k.line(bx, by, tx, ty, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 3 });
      inner += k.circle(tx, ty, 5, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy });
    });

    // 3) Kapsyd (płaszcz białkowy)
    inner += k.circle(cx, cy, 85, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 1.8 });

    // 4) Kwas nukleinowy (DNA/RNA) - zwinięta nić w środku
    inner += k.path(
      'M ' + (cx - 42) + ' ' + (cy - 8) +
        ' Q ' + (cx - 22) + ' ' + (cy - 38) + ' ' + cx + ' ' + (cy - 18) +
        ' Q ' + (cx + 22) + ' ' + cy + ' ' + (cx + 42) + ' ' + (cy - 12) +
        ' Q ' + (cx + 50) + ' ' + (cy + 10) + ' ' + (cx + 22) + ' ' + (cy + 22) +
        ' Q ' + (cx - 5) + ' ' + (cy + 36) + ' ' + (cx - 32) + ' ' + (cy + 18) +
        ' Q ' + (cx - 50) + ' ' + cy + ' ' + (cx - 42) + ' ' + (cy - 8),
      { stroke: k.PALETTE.czerwony, strokeWidth: 2.6 }
    );

    // Numerowane odnośniki (krótkie leadery przy poszczególnych elementach)
    inner += k.leader(169, 142, 100, 90, 1);
    inner += k.leader(471.6, 134.7, 540, 100, 2);
    inner += k.leader(352.5, 258.6, 420, 320, 3);
    inner += k.leader(290, 195, 200, 320, 4);

    // Legenda pod schematem
    inner += k.legend(70, 355, [
      { label: '1 — Otoczka lipidowa (błona zewnętrzna, u niektórych wirusów)', fill: '#fbf1dc' },
      { label: '2 — Białka powierzchniowe (kolce) — wiążą wirus z komórką gospodarza', fill: k.PALETTE.pomaranczowy },
      { label: '3 — Kapsyd (płaszcz białkowy chroniący materiał genetyczny)', fill: k.PALETTE.niebieskiC },
      { label: '4 — Kwas nukleinowy (DNA lub RNA) — materiał genetyczny wirusa', fill: k.PALETTE.czerwonyC },
    ]);
    inner += k.text(w / 2, h - 20, 'Wirus nie ma cytoplazmy, błony komórkowej ani rybosomów — nie jest komórką.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
