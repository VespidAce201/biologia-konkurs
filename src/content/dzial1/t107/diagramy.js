(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Porównanie komórki prokariotycznej i eukariotycznej — schemat z numerowanymi
  // strukturami (1-5 = komórka prokariotyczna, 6-10 = komórka eukariotyczna) i legendą.
  register.diagram('d-t107-prokariota-eukariota', function () {
    var w = 720,
      h = 480;
    var inner = k.frameTitle(w, 'Komórka prokariotyczna a eukariotyczna — porównanie budowy');

    inner += k.text(185, 52, 'KOMÓRKA PROKARIOTYCZNA (np. bakteria)', { anchor: 'middle', weight: 700, size: 12.5 });
    inner += k.text(535, 52, 'KOMÓRKA EUKARIOTYCZNA (np. komórka zwierzęca)', { anchor: 'middle', weight: 700, size: 12.5 });

    // ===== LEWA STRONA: komórka prokariotyczna =====
    inner += k.rect(40, 65, 290, 235, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2, rx: 60 }); // 1 ściana komórkowa
    inner += k.rect(58, 83, 254, 199, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2, rx: 48 }); // 2 błona komórkowa
    // 4 nukleoid — kolista cząsteczka DNA BEZ otoczki błonowej (dlatego kontur przerywany)
    inner += k.ellipse(150, 190, 58, 34, { fill: '#ffffff', stroke: k.PALETTE.szary, strokeWidth: 1.5, dash: '4,3' });
    inner += k.path('M105,190 L120,172 L135,205 L150,175 L165,205 L180,172 L195,190', { stroke: k.PALETTE.czerwony, strokeWidth: 1.8 });
    // 5 rybosomy — drobne kropki w cytoplazmie (3 cytoplazma)
    [[240, 115], [255, 145], [265, 230], [220, 255], [95, 140], [90, 250]].forEach(function (p) {
      inner += k.circle(p[0], p[1], 3, { fill: k.PALETTE.fiolet, stroke: 'none' });
    });

    inner += k.numberLabel(40, 100, 1);
    inner += k.numberLabel(58, 250, 2);
    inner += k.numberLabel(270, 260, 3);
    inner += k.numberLabel(150, 190, 4);
    inner += k.numberLabel(255, 145, 5);

    // ===== PRAWA STRONA: komórka eukariotyczna =====
    inner += k.rect(400, 65, 290, 235, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2, rx: 90 }); // 6 błona komórkowa
    // 7 jądro komórkowe — otoczone podwójną otoczką jądrową (ciągły kontur = ma błonę!)
    inner += k.circle(490, 190, 56, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
    inner += k.circle(490, 190, 50, { fill: 'none', stroke: k.PALETTE.fiolet, strokeWidth: 1 });
    inner += k.circle(490, 190, 12, { fill: k.PALETTE.fiolet, stroke: 'none' });
    // 8 mitochondria
    inner += k.ellipse(615, 130, 26, 13, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    inner += k.ellipse(625, 245, 26, 13, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 1.5 });
    // 10 rybosomy — drobne kropki w cytoplazmie (9)
    [[600, 190], [430, 130], [430, 250], [590, 260]].forEach(function (p) {
      inner += k.circle(p[0], p[1], 3, { fill: k.PALETTE.zielony, stroke: 'none' });
    });

    inner += k.numberLabel(400, 100, 6);
    inner += k.numberLabel(490, 134, 7);
    inner += k.numberLabel(615, 130, 8);
    inner += k.numberLabel(420, 260, 9);
    inner += k.numberLabel(600, 190, 10);

    // ===== LEGENDA =====
    var legendaL = [
      '1 — ściana komórkowa',
      '2 — błona komórkowa',
      '3 — cytoplazma',
      '4 — nukleoid (DNA bez otoczki)',
      '5 — rybosomy',
    ];
    var legendaP = [
      '6 — błona komórkowa',
      '7 — jądro komórkowe (z otoczką)',
      '8 — mitochondrium',
      '9 — cytoplazma',
      '10 — rybosomy',
    ];
    inner += k.multilineText(45, 335, legendaL, { size: 12, lineHeight: 19 });
    inner += k.multilineText(400, 335, legendaP, { size: 12, lineHeight: 19 });
    inner += k.text(w / 2, 450, 'Uwaga: nukleoid (4) nie jest otoczony błoną — to kluczowa różnica względem jądra komórkowego (7).', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });
})();
