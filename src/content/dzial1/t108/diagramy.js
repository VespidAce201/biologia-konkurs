(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // ===== Komórka zwierzęca (eukariotyczna) z numerowanymi organellami =====
  register.diagram('d-t108-komorka-zwierzeca', function () {
    var w = 620,
      h = 460;
    var inner = k.frameTitle(w, 'Komórka zwierzęca — organelle komórkowe');

    // 1 błona komórkowa (obrys całej komórki)
    inner += k.ellipse(300, 235, 260, 170, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2.5 });

    // 2 jądro komórkowe + 3 jąderko
    inner += k.circle(190, 220, 62, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
    inner += k.circle(190, 220, 55, { fill: 'none', stroke: k.PALETTE.fiolet, strokeWidth: 1 });
    inner += k.circle(195, 210, 15, { fill: k.PALETTE.fiolet, stroke: 'none' });

    // 4 mitochondria (owalne, z prostymi liniami grzebieni)
    [[420, 150], [440, 300]].forEach(function (p) {
      inner += k.ellipse(p[0], p[1], 34, 17, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
      inner += k.line(p[0] - 18, p[1] - 6, p[0] - 6, p[1] + 6, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 1 });
      inner += k.line(p[0] - 2, p[1] - 8, p[0] + 10, p[1] + 6, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 1 });
      inner += k.line(p[0] + 14, p[1] - 6, p[0] + 24, p[1] + 4, { stroke: k.PALETTE.pomaranczowy, strokeWidth: 1 });
    });

    // 6 siateczka śródplazmatyczna szorstka (faliste, ułożone warstwy z rybosomami)
    var rerY = 130;
    for (var i = 0; i < 3; i++) {
      inner += k.path('M270,' + (rerY + i * 12) + ' Q310,' + (rerY + i * 12 - 10) + ' 350,' + (rerY + i * 12) + ' Q390,' + (rerY + i * 12 + 10) + ' 430,' + (rerY + i * 12), { stroke: k.PALETTE.niebieski, strokeWidth: 1.6 });
    }
    // rybosomy (5) na siateczce i wolne w cytoplazmie
    [[280, 118], [320, 116], [360, 120], [400, 118], [150, 340], [340, 380], [120, 300]].forEach(function (p) {
      inner += k.circle(p[0], p[1], 3, { fill: k.PALETTE.czerwony, stroke: 'none' });
    });

    // 7 aparat Golgiego (stos wygiętych błon)
    var golgiX = 170,
      golgiY = 340;
    for (var j = 0; j < 4; j++) {
      inner += k.path('M' + (golgiX - 35) + ',' + (golgiY + j * 10) + ' Q' + golgiX + ',' + (golgiY + j * 10 - 8) + ' ' + (golgiX + 35) + ',' + (golgiY + j * 10), { stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    }

    // numery
    inner += k.numberLabel(60, 235, 1);
    inner += k.numberLabel(150, 185, 2);
    inner += k.numberLabel(195, 210, 3);
    inner += k.numberLabel(420, 150, 4);
    inner += k.numberLabel(280, 118, 5);
    inner += k.numberLabel(350, 130, 6);
    inner += k.numberLabel(170, 375, 7);
    inner += k.numberLabel(480, 300, 8);

    var legenda = [
      '1 — błona komórkowa',
      '2 — jądro komórkowe',
      '3 — jąderko',
      '4 — mitochondrium',
      '5 — rybosomy (wolne)',
      '6 — siateczka śródplazmatyczna szorstka',
      '7 — aparat Golgiego',
      '8 — cytoplazma (cytozol)',
    ];
    inner += k.multilineText(30, 415, legenda.slice(0, 4), { size: 11.5, lineHeight: 17 });
    inner += k.multilineText(330, 415, legenda.slice(4), { size: 11.5, lineHeight: 17 });

    return k.svg(w, h, inner);
  });

  // ===== Komórka roślinna (eukariotyczna) z numerowanymi organellami =====
  register.diagram('d-t108-komorka-roslinna', function () {
    var w = 620,
      h = 480;
    var inner = k.frameTitle(w, 'Komórka roślinna — organelle komórkowe');

    // 1 ściana komórkowa + 2 błona komórkowa
    inner += k.rect(60, 60, 480, 340, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2.5, rx: 18 });
    inner += k.rect(76, 76, 448, 308, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2, rx: 10 });

    // 6 wakuola centralna (duża, typowa dla komórki roślinnej)
    inner += k.ellipse(360, 250, 130, 105, { fill: '#eaf6fb', stroke: k.PALETTE.niebieski, strokeWidth: 1.5, dash: '3,3' });

    // 3 jądro komórkowe (przesunięte ku ścianie, jak w typowej komórce roślinnej)
    inner += k.circle(160, 150, 48, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
    inner += k.circle(165, 145, 11, { fill: k.PALETTE.fiolet, stroke: 'none' });

    // 4 chloroplasty (owalne, zielone, z liniami błon wewnętrznych)
    [[130, 280], [200, 330], [140, 340]].forEach(function (p) {
      inner += k.ellipse(p[0], p[1], 26, 15, { fill: '#cdeecb', stroke: k.PALETTE.zielony, strokeWidth: 1.5 });
      inner += k.line(p[0] - 14, p[1], p[0] + 14, p[1], { stroke: k.PALETTE.zielony, strokeWidth: 1 });
      inner += k.line(p[0] - 14, p[1] - 4, p[0] + 14, p[1] - 4, { stroke: k.PALETTE.zielony, strokeWidth: 1 });
    });

    // 5 mitochondrium
    inner += k.ellipse(230, 160, 24, 12, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });

    // 8 siateczka śródplazmatyczna (faliste linie)
    inner += k.path('M100,190 Q130,180 160,190 Q190,200 220,190', { stroke: k.PALETTE.niebieski, strokeWidth: 1.6 });
    inner += k.path('M100,200 Q130,190 160,200 Q190,210 220,200', { stroke: k.PALETTE.niebieski, strokeWidth: 1.6 });

    // 9 rybosomy (drobne kropki)
    [[105, 185], [140, 205], [175, 185], [250, 200], [110, 350], [490, 200]].forEach(function (p) {
      inner += k.circle(p[0], p[1], 3, { fill: k.PALETTE.czerwony, stroke: 'none' });
    });

    // 7 aparat Golgiego
    var golgiX = 480,
      golgiY = 340;
    for (var j = 0; j < 4; j++) {
      inner += k.path('M' + (golgiX - 30) + ',' + (golgiY + j * 9) + ' Q' + golgiX + ',' + (golgiY + j * 9 - 7) + ' ' + (golgiX + 30) + ',' + (golgiY + j * 9), { stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    }

    // numery
    inner += k.numberLabel(60, 100, 1);
    inner += k.numberLabel(90, 130, 2);
    inner += k.numberLabel(160, 150, 3);
    inner += k.numberLabel(130, 280, 4);
    inner += k.numberLabel(230, 160, 5);
    inner += k.numberLabel(360, 250, 6);
    inner += k.numberLabel(480, 375, 7);
    inner += k.numberLabel(100, 190, 8);
    inner += k.numberLabel(175, 185, 9);
    inner += k.numberLabel(500, 130, 10);

    var legendaL = [
      '1 — ściana komórkowa',
      '2 — błona komórkowa',
      '3 — jądro komórkowe',
      '4 — chloroplast',
      '5 — mitochondrium',
    ];
    var legendaP = [
      '6 — wakuola centralna',
      '7 — aparat Golgiego',
      '8 — siateczka śródplazmatyczna',
      '9 — rybosomy',
      '10 — cytoplazma',
    ];
    inner += k.multilineText(70, 430, legendaL, { size: 11.5, lineHeight: 17 });
    inner += k.multilineText(340, 430, legendaP, { size: 11.5, lineHeight: 17 });

    return k.svg(w, h, inner);
  });
})();
