(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit;

  // Uproszczona budowa komórki bakteryjnej (organizm prokariotyczny) + legenda.
  register.diagram('d-t203-budowa-bakterii', function () {
    var w = 700,
      h = 520;
    var cx = 360,
      cy = 195;

    var inner = k.frameTitle(w, 'Uproszczona budowa komórki bakteryjnej');

    // 7) Wić — wypustka ruchowa (występuje tylko u niektórych bakterii)
    inner += k.path(
      'M ' + (cx - 205) + ' ' + cy +
        ' Q ' + (cx - 250) + ' ' + (cy - 30) + ' ' + (cx - 285) + ' ' + (cy - 5) +
        ' Q ' + (cx - 315) + ' ' + (cy + 18) + ' ' + (cx - 345) + ' ' + (cy - 12),
      { stroke: k.PALETTE.szary, strokeWidth: 3 }
    );

    // 1) Otoczka śluzowa (występuje tylko u niektórych bakterii, chroni komórkę)
    inner += k.ellipse(cx, cy, 225, 128, { fill: 'none', stroke: k.PALETTE.szary, dash: '6,4', strokeWidth: 1.6 });

    // 2) Ściana komórkowa
    inner += k.ellipse(cx, cy, 200, 110, { fill: k.PALETTE.zoltyC, stroke: k.PALETTE.zolty, strokeWidth: 2 });

    // 3) Błona komórkowa (granica cytoplazmy)
    inner += k.ellipse(cx, cy, 186, 98, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony, strokeWidth: 2 });

    // 5) Nukleoid — zwinięta nić DNA bez otoczki błonowej (kontur przerywany)
    inner += k.ellipse(cx, cy, 68, 40, { fill: '#ffffff', stroke: k.PALETTE.szary, strokeWidth: 1.5, dash: '4,3' });
    inner += k.path(
      'M ' + (cx - 45) + ' ' + cy +
        ' Q ' + (cx - 24) + ' ' + (cy - 26) + ' ' + cx + ' ' + (cy - 10) +
        ' Q ' + (cx + 24) + ' ' + cy + ' ' + (cx + 45) + ' ' + (cy - 14) +
        ' Q ' + (cx + 54) + ' ' + (cy + 8) + ' ' + (cx + 24) + ' ' + (cy + 18) +
        ' Q ' + (cx - 6) + ' ' + (cy + 28) + ' ' + (cx - 32) + ' ' + (cy + 14) +
        ' Q ' + (cx - 52) + ' ' + (cy + 6) + ' ' + (cx - 45) + ' ' + cy,
      { stroke: k.PALETTE.czerwony, strokeWidth: 2.2 }
    );

    // 6) Rybosomy — drobne kropki rozproszone w cytoplazmie
    var rybosomy = [
      [cx + 130, cy - 55],
      [cx + 150, cy + 10],
      [cx + 110, cy + 65],
      [cx - 130, cy - 60],
      [cx - 150, cy + 15],
      [cx - 105, cy + 68],
      [cx + 60, cy - 78],
      [cx - 55, cy - 80],
    ];
    rybosomy.forEach(function (p) {
      inner += k.circle(p[0], p[1], 3.5, { fill: k.PALETTE.fiolet, stroke: 'none' });
    });

    // Numerowane odnośniki
    inner += k.numberLabel(cx - 345, cy - 12, 7); // wić
    inner += k.numberLabel(cx, cy - 128, 1); // otoczka śluzowa
    inner += k.numberLabel(cx + 141, cy - 78, 2); // ściana komórkowa
    inner += k.numberLabel(cx + 131, cy - 69, 3); // błona komórkowa
    inner += k.numberLabel(cx + 170, cy + 40, 4); // cytoplazma
    inner += k.numberLabel(cx, cy, 5); // nukleoid
    inner += k.numberLabel(cx + 150, cy + 10, 6); // rybosom

    // Legenda pod schematem
    inner += k.legend(55, 350, [
      { label: '1 — otoczka śluzowa (u niektórych bakterii, dodatkowa ochrona)', fill: '#ffffff' },
      { label: '2 — ściana komórkowa (nadaje kształt, chroni komórkę)', fill: k.PALETTE.zoltyC },
      { label: '3 — błona komórkowa (kontroluje wymianę substancji)', fill: k.PALETTE.zielonyC },
      { label: '4 — cytoplazma (wypełnia wnętrze komórki)', fill: k.PALETTE.zielonyC },
      { label: '5 — nukleoid — DNA bez otoczki błonowej (nie jest jądrem komórkowym!)', fill: '#ffffff' },
      { label: '6 — rybosomy (synteza białek)', fill: k.PALETTE.fiolet },
      { label: '7 — wić (u niektórych bakterii, służy do ruchu)', fill: k.PALETTE.szary },
    ]);
    inner += k.text(
      w / 2,
      h - 14,
      'Bakteria to organizm prokariotyczny — jej DNA nie jest otoczone błoną jądrową (brak jądra komórkowego).',
      { anchor: 'middle', size: 11, fill: k.PALETTE.szary }
    );

    return k.svg(w, h, inner);
  });
})();
