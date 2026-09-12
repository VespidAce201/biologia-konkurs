(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t105-budowa-tluszczu', function () {
    var w = 560,
      h = 300;
    var inner = k.frameTitle(w, 'Budowa tłuszczu właściwego (triacyloglicerolu)');

    // Glicerol box (left)
    inner += k.rect(40, 110, 120, 70, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });
    inner += k.text(100, 140, 'Glicerol', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.text(100, 158, '(alkohol', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
    inner += k.text(100, 170, 'trójwęglowy)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    // three fatty acid boxes (right), connected by ester bonds
    var yPositions = [55, 140, 225];
    yPositions.forEach(function (y, i) {
      inner += k.line(160, 145, 340, y + 20, { stroke: k.PALETTE.linia, strokeWidth: 1.5 });
      inner += k.text(250, (145 + y + 20) / 2 - 6, 'wiązanie estrowe', { anchor: 'middle', size: 9.5, fill: k.PALETTE.pomaranczowy });
      inner += k.rect(340, y, 170, 45, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
      inner += k.text(425, y + 20, 'Kwas tłuszczowy ' + (i + 1), { anchor: 'middle', weight: 700, size: 11.5 });
      inner += k.text(425, y + 36, i === 1 ? 'np. nasycony lub nienasycony' : ' ', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    });

    inner += k.text(w / 2, 275, 'Estryfikacja: glicerol + 3 kwasy tłuszczowe → tłuszcz + 3 cząsteczki H₂O', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });

  register.diagram('d-t105-rodzaje-lipidow', function () {
    var w = 620,
      h = 280;
    var inner = k.frameTitle(w, 'Rodzaje lipidów i ich główne funkcje');

    var grupy = [
      { nazwa: 'Tłuszcze właściwe', podtytul: '(triacyloglicerole)', funkcja: 'funkcja zapasowa', przyklady: ['tkanka tłuszczowa', 'oleje roślinne'], fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty },
      { nazwa: 'Fosfolipidy', podtytul: '', funkcja: 'funkcja budulcowa', przyklady: ['budują błony', 'komórkowe'], fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony },
      { nazwa: 'Steroidy', podtytul: '', funkcja: 'funkcja regulacyjna', przyklady: ['cholesterol,', 'hormony płciowe'], fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet },
    ];
    var boxW = 170,
      gap = 25,
      startX = (w - (grupy.length * boxW + (grupy.length - 1) * gap)) / 2,
      y = 55,
      boxH = 175;

    grupy.forEach(function (g, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: g.fill, stroke: g.stroke, strokeWidth: 2 });
      inner += k.text(x + boxW / 2, y + 30, g.nazwa, { anchor: 'middle', weight: 800, size: 13 });
      if (g.podtytul) inner += k.text(x + boxW / 2, y + 47, g.podtytul, { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
      inner += k.text(x + boxW / 2, y + 80, g.funkcja, { anchor: 'middle', size: 11.5, weight: 700, fill: g.stroke });
      g.przyklady.forEach(function (p, j) {
        inner += k.text(x + boxW / 2, y + 115 + j * 20, p, { anchor: 'middle', size: 10.5 });
      });
    });

    inner += k.text(w / 2, y + boxH + 30, 'Lipidy to zróżnicowana grupa związków nierozpuszczalnych w wodzie.', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
