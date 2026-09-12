/**
 * KONTRAKT DANYCH TREŚCI (dokumentacja + stałe używane w runtime).
 * Każdy plik z treścią (lekcje/pytania/fiszki/diagramy/doświadczenia/...)
 * rejestruje się w App.content.register.* — patrz registry.js.
 *
 * @typedef {Object} Dzial
 * @property {string} id - np. "d1", "d2"
 * @property {string} kod - "I" lub "II"
 * @property {string} nazwa
 * @property {string} opis
 * @property {string} kolor - kolor motywu działu (hex)
 * @property {string} ikona - klucz ikony SVG z components/ui/icons.js
 *
 * @typedef {Object} Temat
 * @property {string} id
 * @property {string} dzialId
 * @property {string} nazwa
 * @property {string} [rodzic] - id tematu nadrzędnego (dla podtematów)
 * @property {number} kolejnosc
 *
 * @typedef {Object} SekcjaLekcji
 * @property {string} naglowek
 * @property {string[]} akapity
 * @property {string} [typ] - 'tekst' | 'uwaga' | 'roznica' | 'wazne'
 * @property {string} [diagramId]
 *
 * @typedef {Object} Lekcja
 * @property {string} id
 * @property {string} tematId
 * @property {string} tytul
 * @property {string} wprowadzenie
 * @property {SekcjaLekcji[]} sekcje
 * @property {{termin:string, definicja:string}[]} pojecia
 * @property {string[]} musiszWiedziec
 * @property {{tresc:string}[]} uwazajNa
 * @property {{a:string, b:string, roznica:string}[]} zapamietajRoznice
 * @property {string[]} diagramy - lista id diagramów z content/diagramy
 * @property {string[]} pytaniaKontrolne - lista id pytań
 * @property {number} kolejnosc
 *
 * TYPY PYTAŃ (App.content.TYPY_PYTAN):
 *  single      - jednokrotny wybór
 *  multiple    - wielokrotny wybór
 *  truefalse   - prawda/fałsz
 *  matching    - dopasowywanie par
 *  gapfill     - uzupełnianie luk
 *  ordering    - ustalanie kolejności
 *  image       - rozpoznawanie elementu na ilustracji/diagramie (klik/wybór podpisu)
 *  diagram     - analiza schematu
 *  table       - analiza tabeli danych
 *  chart       - analiza wykresu
 *
 * @typedef {Object} Pytanie
 * @property {string} id
 * @property {string} dzialId
 * @property {string} tematId
 * @property {string} [podtemat]
 * @property {string} typ - patrz TYPY_PYTAN
 * @property {'latwy'|'sredni'|'trudny'|'konkursowy'} poziom
 * @property {number} punkty
 * @property {string} tresc
 * @property {string} [diagramId] - dla typu 'diagram'/'image': id ręcznie rysowanego schematu SVG (content/diagramy)
 * @property {Object} [wykres] - dla typu 'chart': { typ:'slupkowy'|'liniowy'|'kolowy', tytul, jednostka, dane:[{etykieta,wartosc}] }
 * @property {Object} [tabela] - dla typu 'table': { tytul, kolumny:string[], wiersze:Array<Array<string|number>> }
 * @property {string[]} [opcje] - dla single/multiple/truefalse
 * @property {number|number[]} poprawna - indeks lub tablica indeksów poprawnych opcji
 * @property {{lewa:string[], prawa:string[], pary:number[]}} [dopasowanie] - dla matching (pary[i] = indeks w "prawa" dopasowany do lewa[i])
 * @property {string[]} [elementy] - dla ordering (poprawna kolejność jako podana)
 * @property {string} [tekstZLuka] - dla gapfill, luki oznaczone jako {{luka1}}
 * @property {Object.<string,string>} [odpowiedziLuk] - dla gapfill
 * @property {string} wyjasnienie
 * @property {Object.<string,string>} [wyjasnieniaBlednych] - klucz = indeks opcji
 * @property {string[]} umiejetnosci - tagi: wiedza, analiza, doswiadczenie, wykres, diagram, schemat, budowa-funkcja, przyczynowo-skutkowe
 *
 * @typedef {Object} Fiszka
 * @property {string} id
 * @property {string} dzialId
 * @property {string} tematId
 * @property {string} przod
 * @property {string} tyl
 * @property {string} [kontekst]
 */

(function () {
  'use strict';

  window.App.content = window.App.content || {};

  window.App.content.TYPY_PYTAN = {
    SINGLE: 'single',
    MULTIPLE: 'multiple',
    TRUEFALSE: 'truefalse',
    MATCHING: 'matching',
    GAPFILL: 'gapfill',
    ORDERING: 'ordering',
    IMAGE: 'image',
    DIAGRAM: 'diagram',
    TABLE: 'table',
    CHART: 'chart',
  };

  window.App.content.POZIOMY = {
    LATWY: 'latwy',
    SREDNI: 'sredni',
    TRUDNY: 'trudny',
    KONKURSOWY: 'konkursowy',
  };

  window.App.content.POZIOMY_LABELS = {
    latwy: 'Łatwy',
    sredni: 'Średni',
    trudny: 'Trudny',
    konkursowy: 'Konkursowy',
  };

  window.App.content.UMIEJETNOSCI_LABELS = {
    wiedza: 'Wiedza',
    analiza: 'Analiza informacji',
    doswiadczenie: 'Doświadczenie biologiczne',
    wykres: 'Analiza wykresu',
    diagram: 'Analiza diagramu',
    schemat: 'Analiza schematu',
    tabela: 'Analiza tabeli',
    'budowa-funkcja': 'Budowa → funkcja',
    'przyczynowo-skutkowe': 'Związki przyczynowo-skutkowe',
  };
})();
