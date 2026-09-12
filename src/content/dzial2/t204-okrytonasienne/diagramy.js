(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t204-okrytonasienne-kwiat', function () {
    var w = 560, h = 365;
    var cx = 280;
    var inner = k.frameTitle(w, 'Uproszczona budowa kwiatu (przekrój schematyczny)');

    // lodyga
    inner += k.rect(cx - 15, 300, 30, 40, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
    inner += k.text(cx + 30, 325, 'łodyga', { size: 10.5, fill: k.PALETTE.szary });

    // kielich
    inner += k.rect(cx - 90, 270, 180, 30, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, rx: 8 });
    inner += k.text(cx - 100, 289, 'kielich', { anchor: 'end', size: 10.5, fill: k.PALETTE.szary });

    // korona (platki) - numer 1
    inner += k.rect(cx - 120, 215, 240, 55, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy, rx: 12 });

    // pareciki - numer 2
    var pylniki = [
      { x: cx - 80, y: 130 },
      { x: cx - 45, y: 110 },
      { x: cx + 35, y: 110 },
      { x: cx + 70, y: 130 },
    ];
    pylniki.forEach(function (p) {
      inner += k.line(cx, 222, p.x, p.y, { stroke: k.PALETTE.zolty, strokeWidth: 1.6 });
      inner += k.ellipse(p.x, p.y, 9, 12, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty });
    });

    // zalazania - numer 4
    inner += k.ellipse(cx, 195, 45, 28, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 1.8 });
    inner += k.circle(cx - 15, 195, 3, { fill: k.PALETTE.zielony, stroke: 'none' });
    inner += k.circle(cx, 190, 3, { fill: k.PALETTE.zielony, stroke: 'none' });
    inner += k.circle(cx + 15, 195, 3, { fill: k.PALETTE.zielony, stroke: 'none' });

    // slupek: szyjka i znamie - numer 3
    inner += k.rect(cx - 7, 90, 14, 80, { fill: k.PALETTE.jasny, stroke: k.PALETTE.linia });
    inner += k.ellipse(cx, 80, 16, 12, { fill: k.PALETTE.pomaranczowyC, stroke: k.PALETTE.pomaranczowy });

    // numerowane objasnienia
    inner += k.leader(cx + 90, 240, 480, 240, 1, {});
    inner += k.leader(pylniki[3].x, pylniki[3].y, 480, 130, 2, {});
    inner += k.leader(cx + 6, 80, 480, 80, 3, {});
    inner += k.leader(cx + 32, 195, 480, 195, 4, {});

    inner += k.legend(30, 345, [
      { label: '1 płatki (korona)', fill: k.PALETTE.pomaranczowyC },
      { label: '2 pręciki (nitka + pylnik)', fill: k.PALETTE.zoltyC },
    ]);
    inner += k.legend(300, 345, [
      { label: '3 słupek (znamię + szyjka)', fill: k.PALETTE.pomaranczowyC },
      { label: '4 zalążnia (z zalążkami)', fill: k.PALETTE.zielonyC },
    ]);

    return k.svg(w, h, inner);
  });
})();
