(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  register.diagram('d-t204-nagonasienne-szyszki', function () {
    var w = 600, h = 320;
    var inner = k.frameTitle(w, 'Szyszki sosny — szyszka męska i żeńska (schemat)');

    // szyszka meska
    inner += k.ellipse(140, 170, 18, 45, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 1.6 });
    inner += k.line(140, 210, 140, 235, { stroke: k.PALETTE.zielony, strokeWidth: 2 });
    inner += k.multilineText(140, 260, ['gałązka'], { anchor: 'middle', size: 10, fill: k.PALETTE.szary });

    // pylek unoszony przez wiatr (strzalka + kropki)
    inner += k.line(168, 170, 355, 170, { stroke: k.PALETTE.zolty, strokeWidth: 1.5, dash: '3,4', arrow: true });
    inner += k.text(260, 158, 'pyłek przenoszony przez wiatr', { anchor: 'middle', size: 10.5, fill: k.PALETTE.szary });
    [195, 225, 255, 285, 315].forEach(function (x, i) {
      inner += k.circle(x, 170 + (i % 2 === 0 ? -6 : 6), 2.2, { fill: k.PALETTE.zolty, stroke: 'none' });
    });

    // szyszka zenska (stozkowaty ksztalt z pasami - luski)
    inner += k.ellipse(430, 180, 55, 110, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 1.8 });
    [260, 220, 180, 140, 100].forEach(function (y) {
      var dy = y - 180;
      var half = 55 * Math.sqrt(Math.max(0, 1 - (dy * dy) / (110 * 110)));
      inner += k.line(430 - half, y, 430 + half, y, { stroke: k.PALETTE.zielony, strokeWidth: 1 });
    });
    inner += k.line(430, 290, 430, 315, { stroke: k.PALETTE.zielony, strokeWidth: 2 });

    // nasiono nieoslonietena na lusce
    inner += k.circle(455, 150, 5, { fill: k.PALETTE.pomaranczowy, stroke: k.PALETTE.pomaranczowy });

    // numerowane objasnienia
    inner += k.leader(140, 128, 90, 60, 1, {});
    inner += k.leader(478, 130, 545, 90, 2, {});
    inner += k.leader(458, 148, 545, 190, 3, {});

    inner += k.legend(30, 250, [
      { label: '1 szyszka męska (wytwarza pyłek)', fill: k.PALETTE.zoltyC },
      { label: '2 szyszka żeńska (zbudowana z łusek)', fill: k.PALETTE.zielonyC },
      { label: '3 nasiono nieosłonięte, leżące odsłonięte na łusce', fill: k.PALETTE.pomaranczowyC },
    ]);

    return k.svg(w, h, inner);
  });
})();
