(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t106-podwojna-helisa', function () {
    var w = 420,
      h = 320;
    var inner = k.frameTitle(w, 'Uproszczony schemat cząsteczki DNA (model "drabinki")');

    var xLeft = 110,
      xRight = 310,
      yTop = 55,
      yBottom = 275;

    inner += k.line(xLeft, yTop, xLeft, yBottom, { strokeWidth: 2.5 });
    inner += k.line(xRight, yTop, xRight, yBottom, { strokeWidth: 2.5 });
    inner += k.text(xLeft, yTop - 14, 'Nić 1', { anchor: 'middle', weight: 700, size: 11.5 });
    inner += k.text(xRight, yTop - 14, 'Nić 2', { anchor: 'middle', weight: 700, size: 11.5 });
    inner += k.text(xLeft, yBottom + 20, 'szkielet cukrowo-', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    inner += k.text(xLeft, yBottom + 32, '-fosforanowy', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    inner += k.text(xRight, yBottom + 20, 'szkielet cukrowo-', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });
    inner += k.text(xRight, yBottom + 32, '-fosforanowy', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });

    var pary = [
      { l: 'A', p: 'T', fillL: k.PALETTE.zielonyC, strokeL: k.PALETTE.zielony, fillP: k.PALETTE.niebieskiC, strokeP: k.PALETTE.niebieski },
      { l: 'G', p: 'C', fillL: k.PALETTE.fioletC, strokeL: k.PALETTE.fiolet, fillP: k.PALETTE.czerwonyC, strokeP: k.PALETTE.czerwony },
      { l: 'T', p: 'A', fillL: k.PALETTE.niebieskiC, strokeL: k.PALETTE.niebieski, fillP: k.PALETTE.zielonyC, strokeP: k.PALETTE.zielony },
      { l: 'C', p: 'G', fillL: k.PALETTE.czerwonyC, strokeL: k.PALETTE.czerwony, fillP: k.PALETTE.fioletC, strokeP: k.PALETTE.fiolet },
      { l: 'A', p: 'T', fillL: k.PALETTE.zielonyC, strokeL: k.PALETTE.zielony, fillP: k.PALETTE.niebieskiC, strokeP: k.PALETTE.niebieski },
    ];
    var n = pary.length;
    var step = (yBottom - yTop) / (n + 1);

    pary.forEach(function (para, i) {
      var y = yTop + step * (i + 1);
      inner += k.line(xLeft, y, xRight, y, { strokeWidth: 1.5, dash: '3,2' });
      inner += k.circle(xLeft + 30, y, 13, { fill: para.fillL, stroke: para.strokeL, strokeWidth: 1.5 });
      inner += k.text(xLeft + 30, y + 4, para.l, { anchor: 'middle', weight: 800, size: 12 });
      inner += k.circle(xRight - 30, y, 13, { fill: para.fillP, stroke: para.strokeP, strokeWidth: 1.5 });
      inner += k.text(xRight - 30, y + 4, para.p, { anchor: 'middle', weight: 800, size: 12 });
    });

    inner += k.text(w / 2, 305, 'A-T i G-C to pary zasad połączone wiązaniami wodorowymi (komplementarność)', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });

  register.diagram('d-t106-dna-rna-porownanie', function () {
    var w = 560,
      h = 300;
    var inner = k.frameTitle(w, 'DNA a RNA — porównanie');

    var kolumny = [
      {
        naglowek: 'DNA',
        fill: k.PALETTE.niebieskiC,
        stroke: k.PALETTE.niebieski,
        wiersze: ['Cukier: deoksyryboza', 'Zasady: A, T, G, C', 'Liczba nici: dwie', '(podwójna helisa)', 'Głównie w jądrze', 'komórkowym', 'Rola: przechowuje', 'informację genetyczną'],
      },
      {
        naglowek: 'RNA',
        fill: k.PALETTE.zielonyC,
        stroke: k.PALETTE.zielony,
        wiersze: ['Cukier: ryboza', 'Zasady: A, U, G, C', 'Liczba nici: zwykle', 'jedna (pojedyncza)', 'Jądro i cytoplazma', ' ', 'Rola: odczyt informacji,', 'udział w syntezie białek'],
      },
    ];

    var boxW = 220,
      gap = 40,
      startX = (w - (2 * boxW + gap)) / 2,
      y = 50,
      boxH = 220;

    kolumny.forEach(function (col, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: col.fill, stroke: col.stroke, strokeWidth: 2 });
      inner += k.text(x + boxW / 2, y + 28, col.naglowek, { anchor: 'middle', weight: 800, size: 15 });
      col.wiersze.forEach(function (t, j) {
        inner += k.text(x + boxW / 2, y + 55 + j * 20, t, { anchor: 'middle', size: 10.5 });
      });
    });

    inner += k.text(w / 2, y + boxH + 28, 'Obie cząsteczki to kwasy nukleinowe zbudowane z nukleotydów.', { anchor: 'middle', size: 11, fill: k.PALETTE.szary });

    return k.svg(w, h, inner);
  });
})();
