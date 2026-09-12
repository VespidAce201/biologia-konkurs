(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t102-01',
    tematId: 't102',
    kolejnosc: 1,
    tytul: 'Związki nieorganiczne: woda i sole mineralne',
    wprowadzenie:
      'Woda i sole mineralne to związki nieorganiczne — proste pod względem budowy chemicznej, ale niezbędne do życia. Bez wody żaden organizm nie przeżyje dłużej niż kilka dni, a niedobór choćby jednego pierwiastka mineralnego może poważnie zaburzyć funkcjonowanie całego organizmu.',
    sekcje: [
      {
        naglowek: 'Budowa i właściwości cząsteczki wody',
        diagramId: 'd-t102-czasteczka-wody',
        akapity: [
          'Cząsteczka wody (H2O) zbudowana jest z jednego atomu tlenu i dwóch atomów wodoru połączonych wiązaniami kowalencyjnymi. Atom tlenu silniej przyciąga wspólne elektrony niż atomy wodoru, dlatego przy tlenie powstaje niewielki ładunek ujemny, a przy atomach wodoru — ładunek dodatni. Cząsteczka wody jest więc polarna (dwubiegunowa), mimo że jako całość jest elektrycznie obojętna.',
          'Dzięki polarności sąsiednie cząsteczki wody przyciągają się wzajemnie: dodatnio naładowany atom wodoru jednej cząsteczki przyciąga ujemnie naładowany atom tlenu cząsteczki sąsiedniej. Takie oddziaływanie nazywamy wiązaniem wodorowym. Wiązania wodorowe są znacznie słabsze od wiązań kowalencyjnych wewnątrz cząsteczki, ale jest ich bardzo dużo, co nadaje wodzie niezwykłe właściwości.',
          'Dzięki licznym wiązaniom wodorowym woda ma wysoką pojemność cieplną (wolno się nagrzewa i wolno stygnie), wysokie napięcie powierzchniowe oraz stosunkowo wysoką temperaturę wrzenia jak na tak małą cząsteczkę. Te właściwości sprawiają, że woda skutecznie stabilizuje temperaturę wewnątrz organizmów i w ich środowisku.',
        ],
      },
      {
        naglowek: 'Funkcje wody w organizmie',
        akapity: [
          'Woda jest głównym składnikiem cytoplazmy i najważniejszym rozpuszczalnikiem w organizmach żywych — dzięki polarności rozpuszcza się w niej większość substancji potrzebnych do życia (cukry, sole mineralne, wiele białek). Środowisko wodne umożliwia zachodzenie reakcji chemicznych w komórce.',
          'Woda pełni funkcję transportową: w postaci roztworów przenosi substancje odżywcze, produkty przemiany materii i gazy oddechowe (np. w krwi u zwierząt, w sokach roślinnych u roślin).',
          'Woda bierze bezpośredni udział w reakcjach chemicznych, np. w reakcjach hydrolizy (rozkładu związków z udziałem wody, jak trawienie pokarmu) oraz w fotosyntezie, gdzie jest źródłem wodoru i tlenu.',
          'U roślin woda wypełniająca wakuolę utrzymuje turgor, czyli jędrność komórki — ciśnienie, jakie wywiera na ścianę komórkową, utrzymuje łodygi i liście w pozycji wyprostowanej. Utrata wody powoduje więdnięcie rośliny. U zwierząt parowanie wody (np. potu) skutecznie obniża temperaturę ciała.',
        ],
      },
      {
        naglowek: 'Sole mineralne — makroelementy i mikroelementy',
        diagramId: 'd-t102-makro-mikro',
        akapity: [
          'Sole mineralne to nieorganiczne związki chemiczne i pojedyncze jony, które organizm pobiera z pożywieniem, a rośliny — z gleby wraz z wodą pobieraną przez korzenie. W zależności od ilości potrzebnej organizmowi dzielimy je na makroelementy i mikroelementy.',
          'Makroelementy są potrzebne w stosunkowo dużych ilościach. Należą do nich m.in. wapń (budulec kości i zębów, udział w krzepnięciu krwi), fosfor (składnik kości, DNA i związków magazynujących energię), potas i sód (przewodzenie impulsów nerwowych, gospodarka wodna organizmu) oraz chlor (składnik soku żołądkowego).',
          'Mikroelementy są potrzebne w ilościach śladowych, ale ich brak również prowadzi do poważnych zaburzeń. Przykłady: żelazo (składnik hemoglobiny transportującej tlen — niedobór powoduje anemię), jod (niezbędny do produkcji hormonów tarczycy — niedobór prowadzi do wola tarczycowego), cynk i miedź (współdziałają z wieloma enzymami), fluor (wzmacnia szkliwo zębów).',
          'Sole mineralne, mimo że stanowią niewielki procent masy organizmu, są niezastąpione — żadna substancja organiczna nie może przejąć ich funkcji, dlatego muszą być stale dostarczane wraz z pożywieniem.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Cząsteczka polarna', definicja: 'Cząsteczka, w której ładunek elektryczny rozłożony jest nierównomiernie — ma biegun ujemny i dodatni (jak woda), choć jako całość jest obojętna.' },
      { termin: 'Wiązanie wodorowe', definicja: 'Słabe oddziaływanie przyciągające między dodatnio naładowanym atomem wodoru jednej cząsteczki polarnej a ujemnie naładowanym atomem (np. tlenu) cząsteczki sąsiedniej.' },
      { termin: 'Turgor', definicja: 'Stan jędrności komórki roślinnej wywołany ciśnieniem wody wypełniającej wakuolę na ścianę komórkową.' },
      { termin: 'Hydroliza', definicja: 'Reakcja chemiczna rozkładu związku chemicznego zachodząca z udziałem cząsteczki wody.' },
      { termin: 'Sole mineralne', definicja: 'Nieorganiczne związki chemiczne i jony niezbędne do prawidłowego funkcjonowania organizmu, pobierane z pożywienia lub podłoża.' },
      { termin: 'Makroelement', definicja: 'Pierwiastek potrzebny organizmowi w stosunkowo dużych ilościach, np. wapń, fosfor, potas, sód, chlor.' },
      { termin: 'Mikroelement', definicja: 'Pierwiastek potrzebny organizmowi w ilościach śladowych, ale niezbędny do prawidłowego funkcjonowania, np. żelazo, jod, cynk, fluor.' },
      { termin: 'Pojemność cieplna wody', definicja: 'Zdolność wody do pochłaniania dużej ilości energii cieplnej przy stosunkowo niewielkim wzroście własnej temperatury — efekt licznych wiązań wodorowych.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Makroelement',
        b: 'Mikroelement',
        roznica: 'Makroelementy (np. wapń, fosfor, potas, sód, chlor) są potrzebne organizmowi w dużych ilościach. Mikroelementy (np. żelazo, jod, cynk, miedź, fluor) są potrzebne w ilościach śladowych — oba rodzaje są jednak równie niezbędne, różni je tylko ilość, nie znaczenie dla organizmu.',
      },
    ],
    uwazajNa: [
      'Sole mineralne to nie tylko sól kuchenna (NaCl) — to szeroka grupa związków i jonów, np. związków wapnia, żelaza, jodu, potasu. Sól kuchenna jest tylko jednym, potocznym przykładem.',
      '"Mikro" w nazwie mikroelement nie oznacza "mało ważny" — oznacza jedynie małą ilość potrzebną organizmowi. Brak nawet śladowej ilości jodu czy żelaza powoduje poważne choroby.',
    ],
    musiszWiedziec: [
      'Woda jest polarna i tworzy wiązania wodorowe, co decyduje o jej wyjątkowych właściwościach (rozpuszczalnik, stabilizacja temperatury, turgor), a sole mineralne — mimo znikomej masy — są niezastąpionym składnikiem odżywczym w postaci makro- i mikroelementów.',
    ],
    diagramy: ['d-t102-czasteczka-wody', 'd-t102-makro-mikro'],
    pytaniaKontrolne: ['p-t102-01', 'p-t102-02'],
  });
})();
