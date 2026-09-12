(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t113-schemat-fotosyntezy', function () {
    var w = 660,
      h = 260;
    var inner = k.frameTitle(w, 'Uproszczony schemat fotosyntezy');

    // Lewa kolumna: substraty
    inner += k.rect(30, 55, 150, 40, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 8 });
    inner += k.text(105, 79, 'Dwutlenek węgla (CO2)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.rect(30, 105, 150, 40, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, rx: 8 });
    inner += k.text(105, 129, 'Woda (H2O)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.rect(30, 155, 150, 40, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, rx: 8 });
    inner += k.text(105, 179, 'Energia świetlna', { anchor: 'middle', size: 11, weight: 700 });

    // Strzałki do chloroplastu
    inner += k.line(180, 75, 240, 130, { strokeWidth: 1.5 });
    inner += k.line(180, 125, 240, 130, { strokeWidth: 1.5 });
    inner += k.line(180, 175, 240, 130, { strokeWidth: 1.5, arrow: true });

    // Środek: chloroplast
    inner += k.ellipse(320, 130, 80, 55, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.text(320, 122, 'Chloroplast', { anchor: 'middle', weight: 800, size: 12 });
    inner += k.text(320, 138, '(chlorofil)', { anchor: 'middle', size: 10, fill: k.PALETTE.szary });

    // Strzałka wyjściowa
    inner += k.line(400, 130, 460, 130, { arrow: true, strokeWidth: 2 });

    // Prawa kolumna: produkty
    inner += k.rect(470, 90, 160, 40, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 8 });
    inner += k.text(550, 114, 'Glukoza (cukier)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.rect(470, 140, 160, 40, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 8 });
    inner += k.text(550, 164, 'Tlen (O2)', { anchor: 'middle', size: 11, weight: 700 });

    inner += k.text(w / 2, 225, 'CO2 + H2O + energia świetlna → (w chloroplaście, z udziałem chlorofilu) → glukoza + O2', {
      anchor: 'middle',
      size: 11.5,
      weight: 700,
      fill: k.PALETTE.tekst,
    });
    return k.svg(w, h, inner);
  });
})();
