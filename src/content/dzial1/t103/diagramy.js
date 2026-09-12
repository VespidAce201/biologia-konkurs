(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t103-wiazanie-peptydowe', function () {
    var w = 600,
      h = 300;
    var inner = k.frameTitle(w, 'Powstawanie wiązania peptydowego');

    // Aminokwas 1
    inner += k.rect(30, 60, 190, 80, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.text(125, 85, 'Aminokwas 1', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.text(125, 108, 'H2N-CH(R1)-COOH', { anchor: 'middle', size: 11 });

    // Aminokwas 2
    inner += k.rect(380, 60, 190, 80, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.text(475, 85, 'Aminokwas 2', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.text(475, 108, 'H2N-CH(R2)-COOH', { anchor: 'middle', size: 11 });

    inner += k.text(300, 105, '+', { anchor: 'middle', size: 22, weight: 800 });

    // Strzałka reakcji w dół
    inner += k.line(300, 150, 300, 195, { arrow: true, strokeWidth: 2 });
    inner += k.text(360, 180, '(reakcja kondensacji)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });

    // Dipeptyd
    inner += k.rect(90, 205, 420, 60, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });
    inner += k.text(300, 232, 'Dipeptyd', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.text(300, 252, 'H2N-CH(R1)-CO-NH-CH(R2)-COOH', { anchor: 'middle', size: 11 });

    // Uwolniona woda
    inner += k.circle(500, 175, 16, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    inner += k.text(500, 179, 'H2O', { anchor: 'middle', size: 10, weight: 700 });

    // Numerowane odnośniki
    inner += k.leader(70, 75, 40, 40, 1, {});
    inner += k.leader(530, 75, 560, 40, 2, {});
    inner += k.leader(255, 232, 220, 270, 3, {});
    inner += k.leader(500, 175, 555, 200, 4, {});

    inner += k.text(w / 2, h - 10, '1 = grupa aminowa   2 = grupa karboksylowa   3 = wiązanie peptydowe   4 = uwolniona cząsteczka wody', {
      anchor: 'middle',
      size: 10.5,
      fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });

  register.diagram('d-t103-struktury-bialka', function () {
    var w = 600,
      h = 230;
    var inner = k.frameTitle(w, 'Poziomy struktury przestrzennej białka');

    var etapy = [
      { nazwa: 'I-rzędowa', opis: 'Liniowa sekwencja aminokwasów' },
      { nazwa: 'II-rzędowa', opis: 'Helisa lub harmonijka (wiązania wodorowe)' },
      { nazwa: 'III-rzędowa', opis: 'Przestrzenne zwinięcie całego łańcucha' },
      { nazwa: 'IV-rzędowa', opis: 'Połączenie kilku łańcuchów białkowych' },
    ];
    var boxW = 130,
      gap = 10,
      startX = (w - (etapy.length * boxW + (etapy.length - 1) * gap)) / 2,
      y = 50,
      boxH = 140;

    etapy.forEach(function (e, i) {
      var x = startX + i * (boxW + gap);
      inner += k.rect(x, y, boxW, boxH, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet, strokeWidth: 2 });
      inner += k.numberLabel(x + 16, y + 16, i + 1, {});
      inner += k.text(x + boxW / 2, y + 45, e.nazwa, { anchor: 'middle', weight: 800, size: 12.5 });
      inner += k.multilineText(x + 8, y + 70, wrapText(e.opis, 16), { size: 10.5 });
      if (i < etapy.length - 1) {
        inner += k.line(x + boxW, y + boxH / 2, x + boxW + gap, y + boxH / 2, { arrow: true, strokeWidth: 1.5 });
      }
    });

    function wrapText(str, maxLen) {
      var words = str.split(' ');
      var lines = [];
      var cur = '';
      words.forEach(function (word) {
        if ((cur + ' ' + word).trim().length > maxLen) {
          lines.push(cur.trim());
          cur = word;
        } else {
          cur = (cur + ' ' + word).trim();
        }
      });
      if (cur) lines.push(cur);
      return lines;
    }

    return k.svg(w, h, inner);
  });
})();
