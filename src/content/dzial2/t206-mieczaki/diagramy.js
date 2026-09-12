(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Diagram 1: budowa zewnętrzna ślimaka =====
  register.diagram('d-t206-mieczaki-slimak', function () {
    var w = 640,
      h = 335;
    var cy = 160;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna ślimaka (schemat)');

    var shellCx = 420,
      shellCy = cy - 30,
      shellR = 80;

    // muszla - koncentryczne "zwoje" sugerujące spiralę
    inner += k.circle(shellCx, shellCy, shellR, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    inner += k.circle(shellCx + 14, shellCy + 6, shellR * 0.62, { fill: 'none', stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    inner += k.circle(shellCx + 24, shellCy + 12, shellR * 0.32, { fill: 'none', stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    inner += k.circle(shellCx + 30, shellCy + 16, shellR * 0.1, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1 });

    // noga (ciało pełzające), wychodzi spod muszli w lewo
    inner += k.path(
      'M ' + (shellCx - shellR + 10) + ',' + (cy + 30) +
      ' C 260,' + (cy + 50) + ' 150,' + (cy + 40) + ' 90,' + cy +
      ' C 150,' + (cy - 20) + ' 260,' + (cy - 10) + ' ' + (shellCx - shellR + 20) + ',' + (cy - 6) + ' Z',
      { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 }
    );

    // głowa - czułki z oczami na końcach
    inner += k.line(100, cy - 6, 65, cy - 46, { strokeWidth: 1.5 });
    inner += k.line(110, cy + 2, 80, cy - 40, { strokeWidth: 1.5 });
    inner += k.circle(65, cy - 46, 5, { fill: k.PALETTE.linia, stroke: k.PALETTE.linia });
    inner += k.circle(80, cy - 40, 5, { fill: k.PALETTE.linia, stroke: k.PALETTE.linia });

    // numery
    inner += k.numberLabel(shellCx, shellCy - shellR - 14, 1);
    inner += k.numberLabel(72, cy - 60, 2);
    inner += k.numberLabel(100, cy - 30, 3);
    inner += k.numberLabel(170, cy + 42, 4);

    var legendY = cy + 90;
    var opisy = [
      '1 — Muszla — twarda, spiralnie skręcona okrywa wydzielana przez płaszcz',
      '2 — Czułki z oczami — narząd dotyku i wzroku na głowie',
      '3 — Głowa — otwór gębowy z tarką (radulą) do zeskrobywania pokarmu',
      '4 — Noga — mięsisty, szeroki narząd ruchu, po którym ślimak pełznie',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 18 });

    return k.svg(w, h, inner);
  });

  // ===== Diagram 2: budowa zewnętrzna głowonoga (na przykładzie ośmiornicy) =====
  register.diagram('d-t206-mieczaki-glowonog', function () {
    var w = 640,
      h = 420;
    var cx = 320,
      headCy = 90;
    var inner = k.frameTitle(w, 'Budowa zewnętrzna głowonoga — ośmiornica (schemat)');

    // płaszcz (workowaty grzbiet)
    inner += k.ellipse(cx, headCy, 90, 60, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });

    // oczy
    inner += k.circle(cx - 30, headCy - 5, 9, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    inner += k.circle(cx - 30, headCy - 5, 4, { fill: k.PALETTE.linia });
    inner += k.circle(cx + 30, headCy - 5, 9, { fill: '#ffffff', stroke: k.PALETTE.linia, strokeWidth: 1.5 });
    inner += k.circle(cx + 30, headCy - 5, 4, { fill: k.PALETTE.linia });

    // lejek (pod głową)
    inner += k.path('M ' + (cx - 12) + ',' + (headCy + 55) + ' L ' + (cx + 12) + ',' + (headCy + 55) + ' L ' + cx + ',' + (headCy + 80) + ' Z', {
      fill: k.PALETTE.zoltyC,
      stroke: k.PALETTE.zolty,
    });

    // macki (8 ramion) rozchodzące się w dół
    var tentacleBaseY = headCy + 58;
    var tentacleXs = [cx - 150, cx - 105, cx - 60, cx - 20, cx + 20, cx + 60, cx + 105, cx + 150];
    tentacleXs.forEach(function (tx, i) {
      var baseX = cx + (tx - cx) * 0.25;
      inner += k.path(
        'M ' + baseX + ',' + tentacleBaseY + ' C ' + (baseX + (tx - baseX) * 0.3) + ',' + (tentacleBaseY + 70) + ' ' + tx + ',' + (tentacleBaseY + 110) + ' ' + tx + ',' + (tentacleBaseY + 150),
        { stroke: k.PALETTE.zielony, strokeWidth: 3 }
      );
    });

    // numery
    inner += k.numberLabel(cx, headCy - 70, 1);
    inner += k.numberLabel(cx - 30, headCy - 22, 2);
    inner += k.numberLabel(cx + 130, tentacleBaseY + 60, 3);
    inner += k.numberLabel(cx, headCy + 95, 4);

    var legendY = headCy + 250;
    var opisy = [
      '1 — Płaszcz (workowaty grzbiet) — okrywa narządy wewnętrzne, u głowonogów muszla jest zredukowana lub niewidoczna',
      '2 — Oko — duże, dobrze rozwinięte, sprawne narządy wzroku',
      '3 — Macki (ramiona) z przyssawkami — służą do chwytania zdobyczy i poruszania się',
      '4 — Lejek — wyrzuca strumień wody, umożliwiając napęd odrzutowy',
    ];
    inner += k.multilineText(30, legendY, opisy, { size: 12.5, lineHeight: 18 });

    return k.svg(w, h, inner);
  });
})();
