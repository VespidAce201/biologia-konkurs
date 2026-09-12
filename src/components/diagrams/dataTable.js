/**
 * Renderer tabel danych na potrzeby modułu "Analiza danych" oraz pytań typu 'table'.
 * spec = { tytul?, kolumny: string[], wiersze: (string|number)[][] }
 */
(function () {
  'use strict';
  var esc = window.App.core.utils.escapeHTML;

  function render(spec) {
    var thead = '<thead><tr>' + spec.kolumny.map(function (k) { return '<th>' + esc(k) + '</th>'; }).join('') + '</tr></thead>';
    var tbody =
      '<tbody>' +
      spec.wiersze
        .map(function (row) {
          return '<tr>' + row.map(function (cell) { return '<td>' + esc(cell) + '</td>'; }).join('') + '</tr>';
        })
        .join('') +
      '</tbody>';
    var titleHtml = spec.tytul ? '<p style="font-weight:700; margin-bottom:8px;">' + esc(spec.tytul) + '</p>' : '';
    return '<div>' + titleHtml + '<div class="scroll-x"><table class="data-table">' + thead + tbody + '</table></div></div>';
  }

  window.App.components.dataTable = { render: render };
})();
