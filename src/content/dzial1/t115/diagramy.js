(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t115-rozmnazanie', function () {
    var w = 640,
      h = 290;
    var inner = k.frameTitle(w, 'Rozmnażanie bezpłciowe a płciowe');

    // linia podziału
    inner += k.line(320, 45, 320, 270, { stroke: k.PALETTE.szary, strokeWidth: 1, dash: '4,4' });

    // ===== LEWA STRONA: bezpłciowe =====
    inner += k.text(160, 50, 'ROZMNAŻANIE BEZPŁCIOWE', { anchor: 'middle', weight: 800, size: 12.5, fill: k.PALETTE.zielony });

    inner += k.circle(160, 90, 22, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
    inner += k.text(160, 94, 'Rodzic', { anchor: 'middle', weight: 700, size: 10 });

    inner += k.line(148, 108, 122, 165, { arrow: true, stroke: k.PALETTE.zielony });
    inner += k.line(172, 108, 198, 165, { arrow: true, stroke: k.PALETTE.zielony });

    inner += k.circle(120, 183, 18, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
    inner += k.text(120, 187, 'Potomek', { anchor: 'middle', size: 8.5, weight: 700 });
    inner += k.circle(200, 183, 18, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
    inner += k.text(200, 187, 'Potomek', { anchor: 'middle', size: 8.5, weight: 700 });

    inner += k.multilineText(160, 228, ['Potomstwo identyczne genetycznie', '(klon jednego rodzica)'], {
      anchor: 'middle', size: 10.5, fill: k.PALETTE.szary, lineHeight: 14,
    });

    // ===== PRAWA STRONA: płciowe =====
    inner += k.text(480, 50, 'ROZMNAŻANIE PŁCIOWE', { anchor: 'middle', weight: 800, size: 12.5, fill: k.PALETTE.niebieski });

    inner += k.circle(430, 85, 14, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    inner += k.text(430, 105, 'Gameta ♂', { anchor: 'middle', size: 9 });
    inner += k.circle(530, 85, 14, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet });
    inner += k.text(530, 105, 'Gameta ♀', { anchor: 'middle', size: 9 });

    inner += k.line(438, 96, 468, 132, { arrow: true, stroke: k.PALETTE.niebieski });
    inner += k.line(522, 96, 492, 132, { arrow: true, stroke: k.PALETTE.fiolet });

    inner += k.circle(480, 150, 20, { fill: k.PALETTE.fioletC, stroke: k.PALETTE.fiolet });
    inner += k.text(480, 154, 'Zygota', { anchor: 'middle', size: 9.5, weight: 700 });

    inner += k.line(480, 170, 480, 195, { arrow: true, stroke: k.PALETTE.niebieski });

    inner += k.circle(480, 215, 20, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski });
    inner += k.text(480, 219, 'Potomek', { anchor: 'middle', size: 9, weight: 700 });

    inner += k.multilineText(480, 250, ['Potomstwo zróżnicowane genetycznie', '(nowa kombinacja genów rodziców)'], {
      anchor: 'middle', size: 10.5, fill: k.PALETTE.szary, lineHeight: 14,
    });

    return k.svg(w, h, inner);
  });
})();
