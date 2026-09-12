(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Diagram 1: hierarchia jednostek systematycznych (od najwęższej do najszerszej)
  register.diagram('d-t201-hierarchia', function () {
    var poziomy = ['Gatunek', 'Rodzaj', 'Rodzina', 'Rząd', 'Gromada (klasa)', 'Typ', 'Królestwo'];
    var szerokosci = [150, 205, 260, 315, 370, 425, 480];
    var kolory = [
      k.PALETTE.zielonyC,
      k.PALETTE.niebieskiC,
      k.PALETTE.fioletC,
      k.PALETTE.zoltyC,
      k.PALETTE.pomaranczowyC,
      k.PALETTE.czerwonyC,
      k.PALETTE.szaryC,
    ];
    var obwodki = [
      k.PALETTE.zielony,
      k.PALETTE.niebieski,
      k.PALETTE.fiolet,
      k.PALETTE.zolty,
      k.PALETTE.pomaranczowy,
      k.PALETTE.czerwony,
      k.PALETTE.szary,
    ];
    var w = 640;
    var rectH = 32;
    var gap = 9;
    var startY = 46;
    var totalH = poziomy.length * rectH + (poziomy.length - 1) * gap;
    var h = startY + totalH + 46;

    var inner = k.frameTitle(w, 'Hierarchia jednostek systematycznych');
    poziomy.forEach(function (nazwa, i) {
      var x = (w - szerokosci[i]) / 2;
      var y = startY + i * (rectH + gap);
      inner += k.rect(x, y, szerokosci[i], rectH, { fill: kolory[i], stroke: obwodki[i], strokeWidth: 1.6 });
      inner += k.text(w / 2, y + rectH / 2 + 4, nazwa, { anchor: 'middle', weight: 700, size: 12.5 });
      if (i < poziomy.length - 1) {
        inner += k.line(w / 2, y + rectH, w / 2, y + rectH + gap, { arrow: true, strokeWidth: 1.6 });
      }
    });
    inner += k.text(
      w / 2,
      startY + totalH + 26,
      'Każda kolejna jednostka (w dół schematu) obejmuje więcej organizmów o coraz mniejszej liczbie cech wspólnych.',
      { anchor: 'middle', size: 11, fill: k.PALETTE.szary }
    );
    return k.svg(w, h, inner);
  });

  // Diagram 2: pięć królestw organizmów
  register.diagram('d-t201-piec-krolestw', function () {
    var krolestwa = ['Monera\n(Bakterie)', 'Protisty', 'Grzyby', 'Rośliny', 'Zwierzęta'];
    var kolory = [k.PALETTE.pomaranczowyC, k.PALETTE.zoltyC, k.PALETTE.fioletC, k.PALETTE.zielonyC, k.PALETTE.niebieskiC];
    var obwodki = [k.PALETTE.pomaranczowy, k.PALETTE.zolty, k.PALETTE.fiolet, k.PALETTE.zielony, k.PALETTE.niebieski];
    var w = 640,
      h = 190;
    var boxW = 108,
      gap = 18;
    var totalW = krolestwa.length * boxW + (krolestwa.length - 1) * gap;
    var startX = (w - totalW) / 2;
    var y = 55,
      boxH = 74;
    var inner = k.frameTitle(w, 'Pięć królestw organizmów żywych');
    krolestwa.forEach(function (nazwa, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: kolory[i], stroke: obwodki[i], strokeWidth: 1.6 });
      var linie = nazwa.split('\n');
      inner += k.multilineText(x + boxW / 2, y + boxH / 2 - (linie.length > 1 ? 6 : 0), linie, {
        anchor: 'middle',
        weight: 700,
        size: 12,
        lineHeight: 15,
      });
    });
    inner += k.text(w / 2, y + boxH + 34, 'Klasyczny podział organizmów na pięć królestw stosowany w nauczaniu szkolnym.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
