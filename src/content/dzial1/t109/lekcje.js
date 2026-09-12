(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t109-01',
    tematId: 't109',
    kolejnosc: 1,
    tytul: 'Błona komórkowa i transport przez błony',
    wprowadzenie:
      'Błona komórkowa oddziela wnętrze komórki od otoczenia, ale nie jest szczelną przegrodą — jest półprzepuszczalna: przepuszcza jedne substancje, a innych nie. Dzięki temu komórka może pobierać potrzebne substancje i usuwać zbędne, zachowując stałe warunki wewnętrzne.',
    sekcje: [
      {
        naglowek: 'Budowa błony komórkowej',
        diagramId: 'd-t109-blona-komorkowa',
        akapity: [
          'Podstawę błony komórkowej stanowi podwójna warstwa (dwuwarstwa) fosfolipidów. Każda cząsteczka fosfolipidu ma "głowę" hydrofilową (przyciągającą wodę), skierowaną na zewnątrz i do wnętrza komórki, oraz "ogon" hydrofobowy (odpychający wodę), skierowany do wnętrza błony. Taki układ sprawia, że błona jest naturalną barierą dla większości substancji rozpuszczonych w wodzie.',
          'W dwuwarstwie lipidowej zanurzone są liczne białka błonowe, pełniące różne funkcje: białka kanałowe tworzą pory umożliwiające przechodzenie określonych cząsteczek lub jonów, białka transportowe (nośnikowe) aktywnie lub biernie przenoszą substancje przez błonę zmieniając swój kształt, a białka receptorowe rozpoznają sygnały chemiczne (np. hormony) docierające do komórki z zewnątrz.',
          'Taki model budowy błony, w którym białka "pływają" w płynnej warstwie lipidowej, nazywany jest modelem płynnej mozaiki.',
        ],
      },
      {
        naglowek: 'Transport bierny: dyfuzja i osmoza',
        akapity: [
          'Transport bierny odbywa się zgodnie z gradientem stężeń — czyli z miejsca o większym stężeniu danej substancji do miejsca o mniejszym jej stężeniu — i nie wymaga zużycia energii przez komórkę.',
          'Dyfuzja prosta to samorzutne przemieszczanie się małych, nienaładowanych cząsteczek (np. tlenu, dwutlenku węgla) bezpośrednio przez dwuwarstwę lipidową, bez udziału białek transportowych, z obszaru o wyższym do obszaru o niższym stężeniu.',
          'Dyfuzja wspomagana (ułatwiona) dotyczy większych lub naładowanych cząsteczek (np. glukozy, jonów), które nie mogą swobodnie przenikać przez dwuwarstwę lipidową i potrzebują do tego białek kanałowych lub transportowych — nadal jednak przemieszczają się zgodnie z gradientem stężeń, bez zużycia energii.',
          'Osmoza to szczególny rodzaj dyfuzji — dotyczy wyłącznie cząsteczek wody, które przemieszczają się przez błonę półprzepuszczalną z obszaru o niższym stężeniu substancji rozpuszczonej (roztworu mniej stężonego) do obszaru o wyższym jej stężeniu (roztworu bardziej stężonego).',
        ],
      },
      {
        naglowek: 'Transport aktywny',
        diagramId: 'd-t109-transport-porownanie',
        akapity: [
          'Transport aktywny polega na przenoszeniu substancji przez błonę WBREW gradientowi stężeń — z obszaru o niższym do obszaru o wyższym stężeniu. Taki ruch "pod górkę" wymaga nakładu energii, którą komórka czerpie z rozkładu ATP (adenozynotrifosforanu) do ADP i reszty fosforanowej.',
          'Za transport aktywny odpowiadają specjalne białka transportowe (tzw. pompy błonowe), które zmieniają swój kształt kosztem energii z ATP, aby "przepchnąć" cząsteczki lub jony w kierunku przeciwnym do naturalnego kierunku dyfuzji. Przykładem jest pompa sodowo-potasowa, utrzymująca odpowiednie stężenia jonów sodu i potasu po obu stronach błony komórki nerwowej.',
        ],
      },
      {
        naglowek: 'Transport substancji wielkocząsteczkowych',
        akapity: [
          'Duże cząsteczki lub całe fragmenty materii (np. bakterie) nie mogą przejść przez błonę żadnym z powyższych sposobów. Komórka pobiera je w procesie endocytozy — fragment błony komórkowej otacza materiał i tworzy pęcherzyk wpuklający się do wnętrza komórki. Proces odwrotny, czyli wydzielanie substancji na zewnątrz komórki w pęcherzykach łączących się z błoną komórkową, nazywamy egzocytozą.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Błona komórkowa', definicja: 'Półprzepuszczalna błona zbudowana z dwuwarstwy fosfolipidowej i białek, otaczająca każdą komórkę i kontrolująca transport substancji.' },
      { termin: 'Dwuwarstwa lipidowa', definicja: 'Podstawowa struktura błony komórkowej, zbudowana z dwóch warstw fosfolipidów ułożonych hydrofilowymi głowami na zewnątrz, a hydrofobowymi ogonami do wewnątrz błony.' },
      { termin: 'Białko błonowe', definicja: 'Białko zanurzone w dwuwarstwie lipidowej, pełniące funkcję kanału, nośnika transportowego lub receptora.' },
      { termin: 'Transport bierny', definicja: 'Przemieszczanie substancji przez błonę zgodnie z gradientem stężeń, bez zużycia energii przez komórkę.' },
      { termin: 'Dyfuzja prosta', definicja: 'Samorzutne przemieszczanie się małych cząsteczek bezpośrednio przez dwuwarstwę lipidową, zgodnie z gradientem stężeń.' },
      { termin: 'Dyfuzja wspomagana', definicja: 'Przemieszczanie się cząsteczek zgodnie z gradientem stężeń przy udziale białek kanałowych lub transportowych, bez zużycia energii.' },
      { termin: 'Osmoza', definicja: 'Dyfuzja cząsteczek wody przez błonę półprzepuszczalną z roztworu mniej stężonego do roztworu bardziej stężonego.' },
      { termin: 'Transport aktywny', definicja: 'Przemieszczanie substancji przez błonę wbrew gradientowi stężeń, wymagające udziału białek transportowych i energii z ATP.' },
      { termin: 'Endocytoza', definicja: 'Proces pobierania dużych cząsteczek lub cząstek materii do komórki poprzez wpuklenie błony komórkowej i utworzenie pęcherzyka.' },
      { termin: 'Egzocytoza', definicja: 'Proces wydzielania substancji z komórki na zewnątrz w pęcherzykach łączących się z błoną komórkową.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Dyfuzja / osmoza',
        b: 'Transport aktywny',
        roznica:
          'Dyfuzja i osmoza to transport bierny — substancje (lub woda) przemieszczają się zgodnie z gradientem stężeń (z obszaru o wyższym do niższego stężenia) i NIE wymagają zużycia energii ATP. Transport aktywny odbywa się WBREW gradientowi stężeń (z obszaru o niższym do wyższego stężenia) i wymaga energii z ATP oraz specjalnych białek transportowych.',
      },
      {
        a: 'Dyfuzja',
        b: 'Osmoza',
        roznica:
          'Dyfuzja dotyczy przemieszczania się różnych cząsteczek (np. gazów, glukozy, jonów) zgodnie z ich własnym gradientem stężeń. Osmoza jest szczególnym przypadkiem dyfuzji, dotyczącym wyłącznie cząsteczek WODY, które przemieszczają się w kierunku roztworu o wyższym stężeniu substancji rozpuszczonej.',
      },
    ],
    uwazajNa: [
      'Transport bierny (dyfuzja, osmoza) nie wymaga energii ATP — częsty błąd to przypisywanie zużycia energii każdemu rodzajowi transportu przez błonę.',
      'Osmoza to NIE to samo co dyfuzja w ogóle — osmoza dotyczy wyłącznie cząsteczek wody, a nie dowolnej substancji.',
      'Kierunek transportu aktywnego jest przeciwny do naturalnego kierunku dyfuzji (z niższego do wyższego stężenia) — to właśnie dlatego wymaga on energii.',
      'Duże cząsteczki i cząstki materii (np. całe komórki bakterii) nie przechodzą przez błonę w drodze dyfuzji ani transportu aktywnego, lecz w procesie endocytozy.',
    ],
    musiszWiedziec: [
      'Błona komórkowa zbudowana jest z dwuwarstwy fosfolipidowej z zanurzonymi białkami (model płynnej mozaiki) i jest półprzepuszczalna.',
      'Kluczowe kryterium odróżniające rodzaje transportu to kierunek względem gradientu stężeń (zgodnie z nim — transport bierny; wbrew niemu — transport aktywny) oraz to, czy wymagana jest energia ATP.',
    ],
    diagramy: ['d-t109-blona-komorkowa', 'd-t109-transport-porownanie'],
    pytaniaKontrolne: ['p-t109-01', 'p-t109-13'],
  });
})();
