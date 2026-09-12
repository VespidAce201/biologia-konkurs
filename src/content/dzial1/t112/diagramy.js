(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t112-sposoby-odzywiania', function () {
    var w = 660,
      h = 260;
    var inner = k.frameTitle(w, 'Sposoby odżywiania się organizmów');

    inner += k.rect(260, 40, 140, 44, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia, strokeWidth: 2, rx: 10 });
    inner += k.text(330, 67, 'Odżywianie', { anchor: 'middle', weight: 800, size: 13 });

    inner += k.line(330, 84, 330, 100, { strokeWidth: 2 });
    inner += k.line(330, 100, 150, 100, { strokeWidth: 2 });
    inner += k.line(330, 100, 500, 100, { strokeWidth: 2 });
    inner += k.line(150, 100, 150, 115, { arrow: true, strokeWidth: 2 });
    inner += k.line(500, 100, 500, 115, { arrow: true, strokeWidth: 2 });

    inner += k.rect(60, 115, 180, 40, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, rx: 8 });
    inner += k.text(150, 140, 'Samożywność (autotrofizm)', { anchor: 'middle', weight: 700, size: 11 });

    inner += k.rect(410, 115, 180, 40, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 8 });
    inner += k.text(500, 140, 'Cudzożywność (heterotrofizm)', { anchor: 'middle', weight: 700, size: 11 });

    inner += k.text(150, 172, 'fotosynteza, chemosynteza', { anchor: 'middle', size: 10, fill: k.PALETTE.szary });
    inner += k.text(150, 186, '(rośliny, glony, niektóre bakterie)', { anchor: 'middle', size: 10, fill: k.PALETTE.szary });

    inner += k.text(500, 172, 'roślinożerność, mięsożerność,', { anchor: 'middle', size: 10, fill: k.PALETTE.szary });
    inner += k.text(500, 186, 'pasożytnictwo, saprotrofizm', { anchor: 'middle', size: 10, fill: k.PALETTE.szary });

    inner += k.text(w / 2, 225, 'Samożywne wytwarzają związki organiczne same, cudzożywne pobierają je z gotowego pokarmu.', {
      anchor: 'middle',
      size: 11,
      fill: k.PALETTE.szary,
    });
    return k.svg(w, h, inner);
  });
})();
