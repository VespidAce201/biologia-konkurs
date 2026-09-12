(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t105-01',
    tematId: 't105',
    kolejnosc: 1,
    tytul: 'Tłuszcze (lipidy)',
    wprowadzenie:
      'Tłuszcze (lipidy) to zróżnicowana grupa związków organicznych zbudowanych głównie z węgla, wodoru i tlenu, których wspólną cechą jest brak rozpuszczalności w wodzie i dobra rozpuszczalność w rozpuszczalnikach organicznych. Są najbardziej skoncentrowanym źródłem energii spośród wszystkich związków organicznych, a niektóre ich rodzaje pełnią też ważne funkcje budulcowe i regulacyjne.',
    sekcje: [
      {
        naglowek: 'Budowa tłuszczów właściwych',
        diagramId: 'd-t105-budowa-tluszczu',
        akapity: [
          'Tłuszcz właściwy (triacyloglicerol) zbudowany jest z jednej cząsteczki glicerolu — trójwęglowego alkoholu — połączonej wiązaniami estrowymi z trzema cząsteczkami kwasów tłuszczowych. Reakcja łączenia glicerolu z kwasami tłuszczowymi to estryfikacja, przebiegająca (podobnie jak kondensacja przy powstawaniu białek i węglowodanów) z uwolnieniem cząsteczek wody.',
          'Kwasy tłuszczowe nasycone nie zawierają wiązań podwójnych między atomami węgla w swoim łańcuchu — przeważają w tłuszczach zwierzęcych (np. smalec, łój) i są zwykle stałe w temperaturze pokojowej.',
          'Kwasy tłuszczowe nienasycone zawierają co najmniej jedno wiązanie podwójne między atomami węgla — przeważają w tłuszczach roślinnych (olejach, np. słonecznikowym, rzepakowym, oliwie z oliwek) i są zwykle ciekłe w temperaturze pokojowej.',
        ],
      },
      {
        naglowek: 'Rodzaje lipidów',
        diagramId: 'd-t105-rodzaje-lipidow',
        akapity: [
          'Oprócz tłuszczów właściwych (triacylogliceroli), pełniących głównie funkcję zapasową, do lipidów zaliczamy też fosfolipidy — główny składnik dwuwarstwy lipidowej budującej błony komórkowe wszystkich komórek.',
          'Do lipidów należą również steroidy, np. cholesterol (składnik błon komórkowych zwierząt, substrat do produkcji niektórych hormonów) oraz hormony płciowe — pełnią one przede wszystkim funkcję regulacyjną.',
        ],
      },
      {
        naglowek: 'Funkcje tłuszczów w organizmie',
        akapity: [
          'Funkcja energetyczna i zapasowa jest najważniejszą rolą tłuszczów właściwych — spalenie (utlenienie) 1 grama tłuszczu dostarcza organizmowi około dwa razy więcej energii niż spalenie 1 grama białka lub węglowodanu, dzięki czemu tłuszcz jest najbardziej efektywnym materiałem zapasowym, magazynowanym w tkance tłuszczowej.',
          'Funkcja izolacyjna (termoizolacyjna) polega na tym, że warstwa tkanki tłuszczowej pod skórą ogranicza utratę ciepła — szczególnie widoczne jest to u ssaków morskich (np. wielorybów, fok), które mają bardzo grubą warstwę tłuszczu chroniącą przed zimną wodą.',
          'Funkcja ochronna (amortyzująca) polega na tym, że tkanka tłuszczowa otaczająca narządy wewnętrzne (np. nerki) chroni je przed urazami mechanicznymi, działając jak poduszka amortyzująca wstrząsy.',
          'Funkcja budulcowa realizowana jest przez fosfolipidy, które budują błony komórkowe wszystkich komórek organizmu — bez nich niemożliwe byłoby oddzielenie wnętrza komórki od jej otoczenia.',
          'Tłuszcz jest też niezbędny do wchłaniania witamin rozpuszczalnych w tłuszczach (A, D, E, K) — bez obecności tłuszczu w pożywieniu witaminy te nie mogą zostać prawidłowo przyswojone w jelicie.',
        ],
      },
      {
        naglowek: 'Tłuszcze roślinne a zwierzęce',
        akapity: [
          'Tłuszcze zwierzęce (np. smalec, łój, masło) zawierają przeważnie nasycone kwasy tłuszczowe i mają zwykle stałą konsystencję w temperaturze pokojowej.',
          'Tłuszcze roślinne, czyli oleje (np. słonecznikowy, rzepakowy, oliwa z oliwek), zawierają głównie nienasycone kwasy tłuszczowe i są ciekłe w temperaturze pokojowej.',
          'Istnieją wyjątki od tej reguły — np. olej kokosowy i olej palmowy są pochodzenia roślinnego, ale zawierają dużo nasyconych kwasów tłuszczowych i w temperaturze pokojowej są półstałe lub stałe.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Lipid', definicja: 'Związek organiczny nierozpuszczalny w wodzie, rozpuszczalny w rozpuszczalnikach organicznych; do lipidów należą tłuszcze właściwe, fosfolipidy i steroidy.' },
      { termin: 'Tłuszcz właściwy (triacyloglicerol)', definicja: 'Lipid zbudowany z cząsteczki glicerolu połączonej wiązaniami estrowymi z trzema cząsteczkami kwasów tłuszczowych.' },
      { termin: 'Glicerol', definicja: 'Trójwęglowy alkohol będący jednym z dwóch składników budujących tłuszcz właściwy.' },
      { termin: 'Kwas tłuszczowy', definicja: 'Drugi obok glicerolu składnik budujący tłuszcz właściwy; może być nasycony lub nienasycony.' },
      { termin: 'Kwas tłuszczowy nasycony', definicja: 'Kwas tłuszczowy bez wiązań podwójnych między atomami węgla; przeważa w tłuszczach zwierzęcych, stały w temperaturze pokojowej.' },
      { termin: 'Kwas tłuszczowy nienasycony', definicja: 'Kwas tłuszczowy z co najmniej jednym wiązaniem podwójnym między atomami węgla; przeważa w tłuszczach roślinnych (olejach), ciekły w temperaturze pokojowej.' },
      { termin: 'Wiązanie estrowe', definicja: 'Wiązanie chemiczne łączące glicerol z kwasami tłuszczowymi w cząsteczce tłuszczu właściwego, powstające w reakcji estryfikacji.' },
      { termin: 'Fosfolipid', definicja: 'Lipid będący głównym składnikiem błon komórkowych; w odróżnieniu od tłuszczu właściwego zawiera grupę fosforanową.' },
      { termin: 'Steroid', definicja: 'Lipid o odmiennej budowie od tłuszczów właściwych, pełniący funkcje regulacyjne, np. cholesterol i hormony płciowe.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Kwasy tłuszczowe nasycone',
        b: 'Kwasy tłuszczowe nienasycone',
        roznica: 'Kwasy nasycone nie mają wiązań podwójnych między atomami węgla, są zwykle stałe w temperaturze pokojowej i przeważają w tłuszczach zwierzęcych. Kwasy nienasycone mają co najmniej jedno wiązanie podwójne, są zwykle ciekłe w temperaturze pokojowej i przeważają w tłuszczach roślinnych (olejach).',
      },
      {
        a: 'Tłuszcz właściwy (triacyloglicerol)',
        b: 'Fosfolipid',
        roznica: 'Tłuszcz właściwy zbudowany jest z glicerolu i trzech kwasów tłuszczowych i pełni głównie funkcję zapasową (energetyczną). Fosfolipid ma tylko dwa kwasy tłuszczowe (trzecie miejsce zajmuje grupa fosforanowa) i pełni funkcję budulcową jako główny składnik błon komórkowych.',
      },
    ],
    uwazajNa: [
      '"Tłuszcz" potocznie kojarzy się wyłącznie z tkanką tłuszczową magazynującą energię, ale do lipidów należą też fosfolipidy budujące błony komórkowe i steroidy (np. cholesterol) — nie każdy lipid pełni funkcję zapasową.',
      'Nie wszystkie tłuszcze roślinne są płynne — olej kokosowy i palmowy zawierają dużo nasyconych kwasów tłuszczowych i w temperaturze pokojowej są półstałe lub stałe, mimo pochodzenia roślinnego.',
    ],
    musiszWiedziec: [
      'Spalenie (utlenienie) 1 grama tłuszczu dostarcza organizmowi około dwa razy więcej energii niż spalenie 1 grama węglowodanów lub białek — dlatego tłuszcz jest najbardziej efektywnym materiałem zapasowym.',
    ],
    diagramy: ['d-t105-budowa-tluszczu', 'd-t105-rodzaje-lipidow'],
    pytaniaKontrolne: ['p-t105-01', 'p-t105-05'],
  });
})();
