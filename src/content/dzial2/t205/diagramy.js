(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Uproszczona budowa grzyba wielkoowocnikowego: grzybnia w podłożu + owocnik
  // (kapelusz, blaszki, trzon), z numerowanymi elementami i legendą pod spodem.
  register.diagram('d-t205-owocnik', function () {
    var w = 560,
      h = 480;
    var cx = 280;
    var groundY = 230;
    var capBaseY = 160;
    var capTopY = 80;
    var capHalfW = 90;

    var inner = k.frameTitle(w, 'Budowa grzyba wielkoowocnikowego');

    // Podłoże (gleba)
    inner += k.rect(30, groundY, 500, 150, { fill: '#efe3c8', stroke: k.PALETTE.linia, rx: 4 });

    // Grzybnia (strzępki) rozgałęziająca się w podłożu
    inner += k.path('M ' + cx + ' ' + groundY + ' L ' + (cx - 70) + ' ' + (groundY + 35) + ' L ' + (cx - 100) + ' ' + (groundY + 70), { stroke: k.PALETTE.linia, strokeWidth: 1.3 });
    inner += k.path('M ' + cx + ' ' + groundY + ' L ' + (cx - 30) + ' ' + (groundY + 50) + ' L ' + (cx - 40) + ' ' + (groundY + 100), { stroke: k.PALETTE.linia, strokeWidth: 1.3 });
    inner += k.path('M ' + cx + ' ' + groundY + ' L ' + (cx + 20) + ' ' + (groundY + 45) + ' L ' + (cx + 15) + ' ' + (groundY + 95), { stroke: k.PALETTE.linia, strokeWidth: 1.3 });
    inner += k.path('M ' + cx + ' ' + groundY + ' L ' + (cx + 70) + ' ' + (groundY + 30) + ' L ' + (cx + 110) + ' ' + (groundY + 65), { stroke: k.PALETTE.linia, strokeWidth: 1.3 });
    inner += k.path('M ' + (cx - 30) + ' ' + (groundY + 50) + ' L ' + (cx - 55) + ' ' + (groundY + 80), { stroke: k.PALETTE.linia, strokeWidth: 1 });
    inner += k.path('M ' + (cx + 20) + ' ' + (groundY + 45) + ' L ' + (cx + 50) + ' ' + (groundY + 75), { stroke: k.PALETTE.linia, strokeWidth: 1 });

    // Linia gruntu
    inner += k.line(30, groundY, 530, groundY, { stroke: k.PALETTE.linia, strokeWidth: 2 });

    // Trzon
    inner += k.rect(cx - 18, capBaseY + 14, 36, groundY - (capBaseY + 14), { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia, rx: 6 });

    // Blaszki pod kapeluszem
    for (var gx = cx - 78; gx <= cx + 78; gx += 13) {
      inner += k.line(gx, capBaseY, gx, capBaseY + 14, { stroke: k.PALETTE.linia, strokeWidth: 1 });
    }

    // Kapelusz
    inner += k.path(
      'M ' + (cx - capHalfW) + ' ' + capBaseY + ' Q ' + cx + ' ' + capTopY + ' ' + (cx + capHalfW) + ' ' + capBaseY + ' Z',
      { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 }
    );

    // Numerowane wskaźniki: 1 kapelusz, 2 blaszki, 3 trzon, 4 grzybnia, 5 podłoże
    inner += k.leader(cx + 50, 105, cx + 150, 80, 1);
    inner += k.leader(cx + 65, capBaseY + 8, cx + 175, capBaseY + 30, 2);
    inner += k.leader(cx - 18, capBaseY + 45, cx - 140, capBaseY + 35, 3);
    inner += k.leader(cx - 60, groundY + 50, cx - 170, groundY + 55, 4);
    inner += k.leader(450, groundY + 90, 500, groundY + 115, 5);

    // Legenda
    var legendLines = [
      '1. Kapelusz — górna, rozpłaszczona część owocnika',
      '2. Blaszki — cienkie blaszki pod kapeluszem, na których powstają zarodniki',
      '3. Trzon — łodyga owocnika, unosi kapelusz nad podłoże',
      '4. Grzybnia (strzępki) — podziemna sieć nitkowatych strzępek, właściwe ciało grzyba',
      '5. Podłoże (gleba) — środowisko, z którego grzybnia czerpie wodę i składniki pokarmowe',
    ];
    inner += k.multilineText(40, 405, legendLines, { size: 12, lineHeight: 16 });

    return k.svg(w, h, inner);
  });

  // Trzy sposoby odżywiania się grzybów (cudzożywność): saprotrofizm, pasożytnictwo, mikoryza.
  register.diagram('d-t205-odzywianie', function () {
    var w = 560,
      h = 260;
    var inner = k.frameTitle(w, 'Sposoby odżywiania się grzybów (cudzożywność)');

    var boxY = 60,
      boxW = 150,
      boxH = 150;
    var boxes = [
      {
        x: 30,
        title: 'Saprotrofizm',
        fill: k.PALETTE.zielonyC,
        stroke: k.PALETTE.zielony,
        lines: ['Rozkłada obumarłe', 'szczątki roślin', 'i zwierząt (np. opadłe', 'liście, martwe drewno)'],
      },
      {
        x: 205,
        title: 'Pasożytnictwo',
        fill: k.PALETTE.czerwonyC,
        stroke: k.PALETTE.czerwony,
        lines: ['Czerpie substancje', 'odżywcze z żywego', 'organizmu, szkodząc', 'mu (np. grzybica skóry)'],
      },
      {
        x: 380,
        title: 'Mikoryza',
        fill: k.PALETTE.niebieskiC,
        stroke: k.PALETTE.niebieski,
        lines: ['Współżyje z korzeniami', 'drzew — wymienia wodę', 'i sole mineralne na', 'cukry (symbioza)'],
      },
    ];

    boxes.forEach(function (b) {
      inner += k.rect(b.x, boxY, boxW, boxH, { fill: b.fill, stroke: b.stroke, strokeWidth: 1.5 });
      inner += k.text(b.x + boxW / 2, boxY + 24, b.title, { anchor: 'middle', weight: 800, size: 13.5 });
      inner += k.multilineText(b.x + 12, boxY + 50, b.lines, { size: 11, lineHeight: 16 });
    });

    return k.svg(w, h, inner);
  });
})();
