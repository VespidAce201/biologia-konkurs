(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t114-schemat-oddychania', function () {
    var w = 660,
      h = 260;
    var inner = k.frameTitle(w, 'Uproszczony schemat oddychania tlenowego');

    // Lewa kolumna: substraty
    inner += k.rect(30, 80, 150, 40, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 8 });
    inner += k.text(105, 104, 'Glukoza (cukier)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.rect(30, 130, 150, 40, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 8 });
    inner += k.text(105, 154, 'Tlen (O2)', { anchor: 'middle', size: 11, weight: 700 });

    // Strzałki do mitochondrium
    inner += k.line(180, 100, 240, 130, { strokeWidth: 1.5 });
    inner += k.line(180, 150, 240, 130, { strokeWidth: 1.5, arrow: true });

    // Środek: mitochondrium
    inner += k.ellipse(320, 130, 80, 55, { fill: k.PALETTE.czerwonyC, stroke: k.PALETTE.czerwony, strokeWidth: 2 });
    inner += k.text(320, 122, 'Mitochondrium', { anchor: 'middle', weight: 800, size: 12 });
    inner += k.text(320, 138, '(oddychanie tlenowe)', { anchor: 'middle', size: 9.5, fill: k.PALETTE.szary });

    // Strzałka wyjściowa
    inner += k.line(400, 130, 460, 130, { arrow: true, strokeWidth: 2 });

    // Prawa kolumna: produkty
    inner += k.rect(470, 65, 160, 40, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 8 });
    inner += k.text(550, 89, 'Dwutlenek węgla (CO2)', { anchor: 'middle', size: 10.5, weight: 700 });

    inner += k.rect(470, 115, 160, 40, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 8 });
    inner += k.text(550, 139, 'Woda (H2O)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.rect(470, 165, 160, 40, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, rx: 8 });
    inner += k.text(550, 189, 'Energia', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.text(w / 2, 235, 'glukoza + tlen → (w mitochondrium) → dwutlenek węgla + woda + energia', {
      anchor: 'middle',
      size: 11.5,
      weight: 700,
      fill: k.PALETTE.tekst,
    });
    return k.svg(w, h, inner);
  });

  register.diagram('d-t114-tlenowe-a-beztlenowe', function () {
    var w = 660,
      h = 290;
    var inner = k.frameTitle(w, 'Oddychanie tlenowe a oddychanie beztlenowe (fermentacja)');

    var colW = 280;
    var xL = 40,
      xR = 340;
    var yTop = 45;

    // Nagłówki kolumn
    inner += k.rect(xL, yTop, colW, 34, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, rx: 8 });
    inner += k.text(xL + colW / 2, yTop + 22, 'Oddychanie tlenowe', { anchor: 'middle', weight: 800, size: 12.5 });

    inner += k.rect(xR, yTop, colW, 34, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 8 });
    inner += k.text(xR + colW / 2, yTop + 22, 'Fermentacja (beztlenowe)', { anchor: 'middle', weight: 800, size: 12.5 });

    var rows = [
      ['Wymaga tlenu', 'Nie wymaga tlenu'],
      ['Zachodzi w mitochondrium', 'Zachodzi w cytoplazmie'],
      ['Uwalnia dużo energii', 'Uwalnia mało energii'],
      ['Produkty: CO2 i H2O', 'Produkty: kwas mlekowy lub etanol'],
    ];
    var rowY = yTop + 34 + 14;
    rows.forEach(function (r, i) {
      var y = rowY + i * 44;
      inner += k.rect(xL, y, colW, 36, { fill: '#ffffff', stroke: k.PALETTE.szary, rx: 6 });
      inner += k.multilineText(xL + colW / 2, y + 22, [r[0]], { anchor: 'middle', size: 10.5 });
      inner += k.rect(xR, y, colW, 36, { fill: '#ffffff', stroke: k.PALETTE.szary, rx: 6 });
      inner += k.multilineText(xR + colW / 2, y + 22, [r[1]], { anchor: 'middle', size: 10.5 });
    });

    return k.svg(w, h, inner);
  });
})();
