(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t206-nicienie-01',
    tematId: 't206-nicienie',
    kolejnosc: 1,
    tytul: 'Nicienie',
    wprowadzenie:
      'Nicienie to jedna z najliczniejszych grup zwierząt na Ziemi. Mają wydłużone, nitkowate, niesegmentowane ciało. Wśród nicieni są zarówno gatunki wolno żyjące w glebie i wodzie, jak i liczne pasożyty roślin, zwierząt i człowieka — np. glista ludzka, owsik ludzki i włosień kręty.',
    sekcje: [
      {
        naglowek: 'Budowa ciała nicieni',
        diagramId: 'd-t206-nicienie-budowa',
        akapity: [
          'Ciało nicieni jest wydłużone, nitkowate lub wrzecionowate, zwężone ku obu końcom, i — w odróżnieniu od pierścienic — niesegmentowane. Przekrój poprzeczny ciała jest okrągły (walcowaty), a nie spłaszczony jak u płazińców.',
          'Ciało nicieni pokryte jest elastyczną, odporną na trawienie kutikulą (oskórkiem), która chroni je przed szkodliwym działaniem (np. soków trawiennych żywiciela u gatunków pasożytniczych) i jest okresowo zrzucana w miarę wzrostu.',
          'W przeciwieństwie do płazińców, nicienie mają w pełni wykształcony, przechodzący przez całe ciało przewód pokarmowy z dwoma otworami: gębowym (na przednim końcu) i odbytowym (bliżej tylnego końca). Nicienie mają jamę ciała pierwotną, wypełnioną płynem, który pełni funkcję hydraulicznego szkieletu.',
        ],
      },
      {
        naglowek: 'Środowisko życia i tryb odżywiania',
        akapity: [
          'Większość gatunków nicieni żyje wolno w glebie, w osadach dennych zbiorników wodnych oraz w wodzie morskiej, odżywiając się szczątkami organicznymi, bakteriami lub innymi drobnymi organizmami.',
          'Liczne gatunki są pasożytami roślin (np. mątwik ziemniaczany, uszkadzający korzenie ziemniaków), zwierząt oraz człowieka. Pasożyty człowieka pobierają pokarm bezpośrednio z jelita żywiciela lub odżywiają się jego tkankami i krwią.',
        ],
      },
      {
        naglowek: 'Nicienie pasożytujące w organizmie człowieka',
        diagramId: 'd-t206-nicienie-cykl',
        akapity: [
          'Glista ludzka pasożytuje w jelicie cienkim człowieka. Do zarażenia dochodzi po połknięciu jaj inwazyjnych znajdujących się na brudnych warzywach, owocach lub rękach. Z jaja wykluwa się larwa, która wędruje z krwią przez wątrobę i płuca, a następnie po odkrztuszeniu i połknięciu trafia ponownie do jelita, gdzie dojrzewa w dorosłą glistę.',
          'Owsik ludzki pasożytuje w jelicie grubym, głównie u dzieci. Samice w nocy wychodzą przez odbyt i składają jaja w okolicy odbytu, co powoduje silne swędzenie — drapanie i przenoszenie jaj na ręce (a stamtąd np. do ust lub na przedmioty) ułatwia ponowne samozarażenie i zarażanie innych osób.',
          'Włosień kręty jest pasożytem, którego larwy osiedlają się w mięśniach szkieletowych żywiciela; do zarażenia człowieka dochodzi przez spożycie surowego lub niedogotowanego mięsa (np. wieprzowiny, dziczyzny) zawierającego larwy włośnia.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Nicienie', definicja: 'Typ zwierząt bezkręgowych o wydłużonym, nitkowatym, niesegmentowanym ciele o okrągłym przekroju, pokrytym kutikulą.' },
      { termin: 'Kutikula (oskórek)', definicja: 'Elastyczna, odporna okrywa ciała nicieni, chroniąca je przed uszkodzeniami i działaniem soków trawiennych żywiciela.' },
      { termin: 'Jama ciała pierwotna', definicja: 'Przestrzeń wypełniona płynem, znajdująca się między ścianą ciała a jelitem u nicieni, pełniąca funkcję szkieletu hydraulicznego.' },
      { termin: 'Glista ludzka', definicja: 'Nicień pasożytujący w jelicie cienkim człowieka; zarażenie następuje przez połknięcie jaj inwazyjnych.' },
      { termin: 'Owsik ludzki', definicja: 'Niewielki nicień pasożytujący w jelicie grubym, głównie u dzieci; samice składają jaja w okolicy odbytu.' },
      { termin: 'Włosień kręty', definicja: 'Nicień, którego larwy pasożytują w mięśniach szkieletowych żywiciela; zarażenie następuje przez spożycie surowego mięsa.' },
      { termin: 'Jajo inwazyjne', definicja: 'Jajo pasożyta zawierające w pełni rozwiniętą larwę, zdolne wywołać zarażenie po połknięciu.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Nicienie',
        b: 'Płazińce',
        roznica:
          'Nicienie mają ciało nitkowate, walcowate w przekroju, z w pełni wykształconym przewodem pokarmowym (otwór gębowy i odbytowy). Płazińce mają ciało spłaszczone grzbietowo-brzusznie, a pasożytnicze tasiemce w ogóle nie mają przewodu pokarmowego.',
      },
    ],
    uwazajNa: [
      'Drogi zarażenia różnią się w zależności od gatunku pasożyta: glistą ludzką zarażamy się przez brudne ręce, warzywa i owoce (jaja z gleby), owsikiem — przez samozarażenie związane z drapaniem okolicy odbytu, a włosieniem krętym — przez spożycie surowego, niedogotowanego mięsa. Mycie rąk i warzyw oraz odpowiednia obróbka termiczna mięsa to podstawowe sposoby profilaktyki.',
    ],
    musiszWiedziec: [
      'Nicienie, w przeciwieństwie do płazińców, mają w pełni wykształcony przewód pokarmowy z otworem gębowym i odbytowym.',
      'Ciało nicieni jest niesegmentowane, nitkowate, o okrągłym przekroju poprzecznym, pokryte odporną kutikulą.',
    ],
    diagramy: ['d-t206-nicienie-budowa', 'd-t206-nicienie-cykl'],
    pytaniaKontrolne: ['p-t206-nicienie-01', 'p-t206-nicienie-03'],
  });
})();
