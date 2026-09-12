# Jak dodawać treści (lekcje, pytania, fiszki, diagramy, egzaminy)

Cała wiedza merytoryczna aplikacji żyje w `src/content/` jako zwykłe pliki JavaScript, które **rejestrują** swoje dane w globalnym rejestrze (`window.App.content.register.*`). Nie trzeba znać frameworków — wystarczy skopiować istniejący wzorzec.

Zanim zaczniesz, przeczytaj `src/content/types.js` — to pełny opis wszystkich pól (jako komentarze JSDoc).

## 1. Struktura działów i tematów

Hierarchia nauczania (działy i tematy) jest zdefiniowana w **jednym miejscu**: `src/content/struktura/dzialy.js` i `src/content/struktura/tematy.js`. Każdy temat ma unikalne `id` (np. `t107`), `dzialId` (`d1` lub `d2`), opcjonalnego `rodzic` (dla podtematów, np. gromad zwierząt pod wspólnym tematem) i `kolejnosc` (kolejność wyświetlania).

Żeby dodać zupełnie nowy temat, dopisz wpis do `tematy.js`. Żeby dodać treść do istniejącego tematu — pomiń ten krok i przejdź do punktu 2.

## 2. Dodawanie lekcji

Utwórz (lub użyj istniejącego) folder `src/content/dzialX/<tematId>/lekcje.js` (gdzie X to 1 lub 2, zależnie od działu). Wzorzec — zobacz gotowy przykład: `src/content/dzial1/t101/lekcje.js`.

```js
(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t107-01',              // unikalne id, konwencja: l-<tematId>-<numer>
    tematId: 't107',              // musi odpowiadać istniejącemu tematowi
    kolejnosc: 1,
    tytul: 'Tytuł lekcji',
    wprowadzenie: 'Krótki akapit wprowadzający.',
    sekcje: [
      { naglowek: 'Nagłówek sekcji', akapity: ['Akapit 1.', 'Akapit 2.'] },
      // opcjonalnie: diagramId żeby wstawić diagram w środku sekcji
      { naglowek: 'Inna sekcja', akapity: ['...'], diagramId: 'd-t107-01' },
    ],
    pojecia: [{ termin: 'Termin', definicja: 'Precyzyjna definicja.' }],
    zapamietajRoznice: [{ a: 'Pojęcie A', b: 'Pojęcie B', roznica: 'Na czym polega różnica.' }],
    uwazajNa: ['Częsty błąd, na który uczeń powinien uważać.'],
    musiszWiedziec: ['Najważniejsze zdanie podsumowujące temat.'],
    pytaniaKontrolne: ['p-t107-01', 'p-t107-02'], // id pytań z pytania.js (patrz niżej)
  });
})();
```

Na koniec dodaj `<script src="src/content/dzial1/t107/lekcje.js"></script>` do `index.html` w sekcji odpowiadającej danemu działowi (kolejność względem innych plików treści nie ma znaczenia).

## 3. Dodawanie pytań

Plik `pytania.js` w tym samym folderze co lekcja. Wzorzec: `src/content/dzial1/t101/pytania.js`. Pełny opis pól w `types.js`. Skrót typów pytań:

| `typ`       | Dodatkowe pola                                              |
|-------------|---------------------------------------------------------------|
| `single`    | `opcje: string[]`, `poprawna: number` (indeks)                |
| `multiple`  | `opcje: string[]`, `poprawna: number[]` (indeksy)              |
| `truefalse` | `opcje: ['Prawda','Fałsz']`, `poprawna: 0 lub 1`               |
| `matching`  | `dopasowanie: { lewa: string[], prawa: string[], pary: number[] }` (pary[i] = indeks w `prawa` dopasowany do `lewa[i]`) |
| `gapfill`   | `tekstZLuka: string` z lukami `{{luka1}}`, `odpowiedziLuk: {luka1: 'odpowiedź' lub ['warianty']}` |
| `ordering`  | `elementy: string[]` — podane od razu w POPRAWNEJ kolejności   |
| `image` / `diagram` | jak `single`, plus `diagramId` wskazujący na diagram SVG |
| `table`     | jak `single`, plus `tabela: { tytul, kolumny: string[], wiersze: any[][] }` |
| `chart`     | jak `single`, plus `wykres: { typ: 'slupkowy'|'liniowy'|'kolowy', tytul, jednostka, dane: [{etykieta, wartosc}] }` |

Każde pytanie ma też: `dzialId`, `tematId`, `poziom` (`latwy`/`sredni`/`trudny`/`konkursowy`), `punkty`, `tresc`, `wyjasnienie` (pokazywane po odpowiedzi), `umiejetnosci: string[]` (tagi: `wiedza`, `analiza`, `przyczynowo-skutkowe`, `budowa-funkcja`, `doswiadczenie`, `wykres`, `diagram`, `schemat`, `tabela`).

## 4. Dodawanie fiszek

Plik `fiszki.js`. Wzorzec: `src/content/dzial1/t101/fiszki.js`.

```js
register.fiszki([
  { id: 'f-t107-01', dzialId: 'd1', tematId: 't107', przod: 'Pytanie/pojęcie', tyl: 'Odpowiedź/definicja' },
]);
```

## 5. Dodawanie grafik i diagramów

Aplikacja **nie używa plików graficznych** (PNG/JPG) — wszystkie schematy są rysowane jako SVG w kodzie, przy użyciu prymitywów z `src/content/diagramy/svgKit.js`. Dzięki temu diagramy są lekkie, skalowalne i zawsze czytelne (mają wbudowane białe tło, więc działają identycznie w jasnym i ciemnym motywie aplikacji).

Wzorzec: `src/content/dzial1/t101/diagramy.js`.

```js
(function () {
  'use strict';
  var register = window.App.content.register;
  var k = window.App.content.svgKit; // prymitywy: rect, circle, ellipse, line, text, numberLabel, leader, legend...

  register.diagram('d-t107-01', function () {
    var w = 600, h = 200;
    var inner = k.frameTitle(w, 'Tytuł diagramu');
    inner += k.rect(40, 60, 120, 60, { fill: k.PALETTE.zielonyC, stroke: k.PALETTE.zielony });
    inner += k.text(100, 95, 'Podpis', { anchor: 'middle', weight: 700 });
    // ... kolejne kształty
    return k.svg(w, h, inner);
  });
})();
```

Diagram wywołujesz w lekcji przez `diagramId` w sekcji, a w pytaniu przez pole `diagramId` (dla typu `image`/`diagram`). Trzymaj diagramy proste — prostokąty, koła, linie ze strzałkami, podpisy i numerowane znaczniki (`k.numberLabel`/`k.leader`) do pytań typu „wskaż element oznaczony numerem X”.

Wykresy (słupkowe/liniowe/kołowe) i tabele **nie wymagają własnego SVG** — wystarczy podać surowe dane w polu `wykres`/`tabela` pytania (patrz tabela typów wyżej); renderuje je generyczny komponent `components/diagrams/chart.js` / `dataTable.js`.

## 6. Dodawanie scenariuszy doświadczeń, ćwiczeń analizy danych i budowa→funkcja

Wzorce (gotowe, w pełni działające przykłady):

- `src/content/moduly/doswiadczenia.js` — `register.doswiadczenie({...})`
- `src/content/moduly/analiza-danych.js` — `register.analizaDanych({...})`
- `src/content/moduly/budowa-funkcja.js` — `register.budowaFunkcja({...})`

Skopiuj wzorzec do nowego pliku w tym samym folderze (np. `doswiadczenia-3.js`) i dodaj `<script>` w `index.html`.

## 7. Dodawanie egzaminów

Plik w `src/content/egzaminy/`, wzorzec: `src/content/egzaminy/testowy.js`.

```js
register.egzamin({
  id: 'egz-probny-02',
  typ: 'probny',            // 'probny' albo 'konkursowy' (symulacja konkursu)
  tytul: 'Nazwa zestawu',
  opis: 'Opis zestawu.',
  limitCzasuMin: 60,
  maxPunkty: 40,
  pytaniaIds: ['p-t101-01', 'p-t102-03', /* ... */], // pytania z całej bazy, po id
});
```

Dla `typ: 'konkursowy'` trzymaj się formatu prawdziwego konkursu: `maxPunkty: 40`, `limitCzasuMin: 60`, a `pytaniaIds` dobierz tak, by reprezentowały oba działy i różne poziomy trudności.

## 8. Podpięcie nowych plików w `index.html`

Każdy nowy plik z treścią musi zostać dodany jako `<script src="...">` w `index.html`, w sekcji odpowiadającej jego typowi (struktura zawiera już wyraźnie opisane sekcje: rdzeń / baza danych / treść działu I / treść działu II / moduły / egzaminy / strony). Kolejność plików treści względem siebie **nie ma znaczenia** — rejestr tylko zbiera dane, a odwołania między nimi (np. `pytaniaKontrolne` w lekcji wskazujące na pytania) są rozwiązywane dopiero w momencie wyświetlania, nie w momencie wczytywania skryptu.

## 9. Weryfikacja

Po dodaniu treści otwórz aplikację i sprawdź w konsoli przeglądarki (F12) linię `[BioKonkurs] Załadowano treści: ...` — pokazuje liczbę zarejestrowanych działów/tematów/lekcji/pytań/fiszek. Jeśli użyjesz zduplikowanego `id`, w konsoli pojawi się ostrzeżenie `[content] Duplikat id w ...`.
