(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t104-podzial-cukrow', function () {
    var w = 620,
      h = 300;
    var inner = k.frameTitle(w, 'Podział węglowodanów');

    var grupy = [
      { nazwa: 'Monosacharydy', podtytul: '(cukry proste)', przyklady: ['Glukoza', 'Fruktoza', 'Galaktoza'], fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony },
      { nazwa: 'Disacharydy', podtytul: '(dwucukry)', przyklady: ['Sacharoza', 'Laktoza', 'Maltoza'], fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski },
      { nazwa: 'Polisacharydy', podtytul: '(wielocukry)', przyklady: ['Skrobia', 'Glikogen', 'Celuloza'], fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet },
    ];
    var boxW = 160,
      gap = 30,
      startX = (w - (grupy.length * boxW + (grupy.length - 1) * gap)) / 2,
      y = 55,
      boxH = 190;

    grupy.forEach(function (g, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: g.fill, stroke: g.stroke, strokeWidth: 2 });
      inner += k.numberLabel(x + 16, y + 16, i + 1, {});
      inner += k.text(x + boxW / 2, y + 45, g.nazwa, { anchor: 'middle', weight: 800, size: 13 });
      inner += k.text(x + boxW / 2, y + 62, g.podtytul, { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
      g.przyklady.forEach(function (p, j) {
        inner += k.text(x + boxW / 2, y + 95 + j * 22, p, { anchor: 'middle', size: 11.5 });
      });
      if (i < grupy.length - 1) {
        inner += k.line(x + boxW, y + boxH / 2, x + boxW + gap, y + boxH / 2, { arrow: true, strokeWidth: 2 });
      }
    });

    inner += k.text(w / 2, y + boxH + 25, 'kondensacja (wiązanie glikozydowe) →', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });

  register.diagram('d-t104-skrobia-celuloza', function () {
    var w = 560,
      h = 300;
    var inner = k.frameTitle(w, 'Skrobia i celuloza — ten sam budulec, różne funkcje');

    inner += k.rect(40, 50, 220, 190, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });
    inner += k.text(150, 80, 'Skrobia', { anchor: 'middle', weight: 800, size: 14 });
    var skrobia = ['Funkcja: zapasowa', '(magazyn energii u roślin)', 'Łańcuch: skręcony,', 'rozgałęziony', 'Trawiona przez człowieka'];
    skrobia.forEach(function (t, i) {
      inner += k.text(150, 110 + i * 20, t, { anchor: 'middle', size: 11 });
    });

    inner += k.rect(300, 50, 220, 190, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.text(410, 80, 'Celuloza', { anchor: 'middle', weight: 800, size: 14 });
    var celuloza = ['Funkcja: budulcowa', '(ściana komórkowa roślin)', 'Łańcuch: prosty,', 'nierozgałęziony', 'NIE trawiona przez człowieka'];
    celuloza.forEach(function (t, i) {
      inner += k.text(410, 110 + i * 20, t, { anchor: 'middle', size: 11 });
    });

    inner += k.text(w / 2, 265, 'Obie zbudowane są z cząsteczek glukozy —', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });
    inner += k.text(w / 2, 282, 'różny typ wiązania glikozydowego decyduje o różnych właściwościach.', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
