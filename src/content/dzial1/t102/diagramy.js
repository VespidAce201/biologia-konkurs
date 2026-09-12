(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t102-czasteczka-wody', function () {
    var w = 560,
      h = 300;
    var inner = k.frameTitle(w, 'Budowa cząsteczki wody i wiązanie wodorowe');

    // Cząsteczka A
    var oAx = 160,
      oAy = 140;
    var h1x = 110,
      h1y = 195;
    var h2x = 210,
      h2y = 195;
    inner += k.line(oAx, oAy, h1x, h1y, { strokeWidth: 2 });
    inner += k.line(oAx, oAy, h2x, h2y, { strokeWidth: 2 });
    inner += k.circle(oAx, oAy, 18, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });
    inner += k.text(oAx, oAy + 5, 'O', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.circle(h1x, h1y, 11, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    inner += k.text(h1x, h1y + 4, 'H', { anchor: 'middle', weight: 700, size: 11 });
    inner += k.circle(h2x, h2y, 11, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    inner += k.text(h2x, h2y + 4, 'H', { anchor: 'middle', weight: 700, size: 11 });
    inner += k.text(oAx - 22, oAy - 18, String.fromCharCode(948) + '-', { anchor: 'middle', size: 12, fill: k.PALETTE.niebieski, weight: 700 });
    inner += k.text(h1x - 18, h1y + 22, String.fromCharCode(948) + '+', { anchor: 'middle', size: 12, fill: k.PALETTE.czerwony, weight: 700 });
    inner += k.text(h2x + 18, h2y + 22, String.fromCharCode(948) + '+', { anchor: 'middle', size: 12, fill: k.PALETTE.czerwony, weight: 700 });

    // Cząsteczka B
    var oBx = 380,
      oBy = 195;
    var h3x = 430,
      h3y = 160;
    var h4x = 430,
      h4y = 230;
    inner += k.line(oBx, oBy, h3x, h3y, { strokeWidth: 2 });
    inner += k.line(oBx, oBy, h4x, h4y, { strokeWidth: 2 });
    inner += k.circle(oBx, oBy, 18, { fill: k.PALETTE.niebieskiC, stroke: k.PALETTE.niebieski, strokeWidth: 2 });
    inner += k.text(oBx, oBy + 5, 'O', { anchor: 'middle', weight: 800, size: 13 });
    inner += k.circle(h3x, h3y, 11, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    inner += k.text(h3x, h3y + 4, 'H', { anchor: 'middle', weight: 700, size: 11 });
    inner += k.circle(h4x, h4y, 11, { fill: k.PALETTE.jasny, stroke: k.PALETTE.szary, strokeWidth: 1.5 });
    inner += k.text(h4x, h4y + 4, 'H', { anchor: 'middle', weight: 700, size: 11 });

    // Wiązanie wodorowe (linia przerywana) między H cząsteczki A a O cząsteczki B
    inner += k.line(h2x + 10, h2y, oBx - 18, oBy, { stroke: k.PALETTE.szary, strokeWidth: 1.5, dash: '5,4' });

    // Numerowane odnośniki
    inner += k.leader(oAx, oAy - 18, oAx, 55, 1, {});
    inner += k.leader(h1x, h1y + 10, 70, 255, 2, {});
    inner += k.leader((h2x + oBx) / 2, oBy, (h2x + oBx) / 2, 260, 3, {});

    inner += k.text(w / 2, h - 12, '1 = atom tlenu (ładunek ujemny)   2 = atom wodoru (ładunek dodatni)   3 = wiązanie wodorowe', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });

    return k.svg(w, h, inner);
  });

  register.diagram('d-t102-makro-mikro', function () {
    var w = 560,
      h = 300;
    var inner = k.frameTitle(w, 'Sole mineralne: makroelementy i mikroelementy');

    inner += k.rect(40, 50, 220, 220, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.text(150, 80, 'Makroelementy', { anchor: 'middle', weight: 800, size: 14 });
    inner += k.text(150, 100, '(duże ilości w organizmie)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
    var makro = ['Wapń (Ca) - kości, zęby', 'Fosfor (P) - kości, DNA', 'Potas (K) - nerwy, mięśnie', 'Sód (Na) - gospodarka wodna', 'Chlor (Cl) - sok żołądkowy'];
    makro.forEach(function (t, i) {
      inner += k.text(60, 130 + i * 24, t, { size: 11 });
    });

    inner += k.rect(300, 50, 220, 220, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, strokeWidth: 2 });
    inner += k.text(410, 80, 'Mikroelementy', { anchor: 'middle', weight: 800, size: 14 });
    inner += k.text(410, 100, '(śladowe ilości, ale niezbędne)', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
    var mikro = ['Żelazo (Fe) - hemoglobina', 'Jod (I) - hormony tarczycy', 'Cynk (Zn) - działanie enzymów', 'Miedź (Cu) - enzymy, krwinki', 'Fluor (F) - szkliwo zębów'];
    mikro.forEach(function (t, i) {
      inner += k.text(320, 130 + i * 24, t, { size: 11 });
    });

    return k.svg(w, h, inner);
  });
})();
