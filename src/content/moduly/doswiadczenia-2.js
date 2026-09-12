(function () {
  'use strict';
  var register = window.App.content.register;

  // 1. Fermentacja (oddychanie beztlenowe) drożdży — wpływ stężenia cukru
  register.doswiadczenie({
    id: 'dosw-fermentacja-drozdze',
    tytul: 'Czy stężenie cukru wpływa na intensywność fermentacji drożdży?',
    opis:
      'Uczniowie przygotowali trzy plastikowe butelki z jednakową ilością ciepłej wody (37°C) i taką samą porcją suchych drożdży piekarskich. Do pierwszej butelki nie dodano cukru, do drugiej dodano 5 g cukru, a do trzeciej 15 g cukru. Na szyjkę każdej butelki założono balonik i po 20 minutach zmierzono jego obwód, co pozwoliło ocenić ilość wydzielonego dwutlenku węgla.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy temperatura wody wpływa na smak pieczywa?',
          'Czy stężenie cukru wpływa na intensywność fermentacji przeprowadzanej przez drożdże?',
          'Czy drożdże są żywymi organizmami?',
          'Czy balonik może pęknąć pod wpływem gazu?',
        ],
        poprawna: 1,
        wyjasnienie: 'Problem badawczy określa, jaką zależność się bada — tutaj wpływ stężenia cukru (substratu fermentacji) na intensywność procesu fermentacji, mierzoną ilością wydzielonego CO2.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Im wyższe stężenie cukru w roztworze, tym więcej CO2 wydzielają drożdże w procesie fermentacji.',
          'Drożdże giną w obecności cukru.',
          'Balonik zmienia kolor pod wpływem CO2.',
          'Woda paruje szybciej z dodatkiem cukru.',
        ],
        poprawna: 0,
        wyjasnienie: 'Hipoteza powinna przewidywać kierunek zależności między badanym czynnikiem (stężeniem cukru) a mierzoną wielkością (ilością wydzielanego CO2, widoczną jako wzrost objętości balonika).',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Ilość drożdży w butelce', 'Stężenie (ilość) cukru dodanego do wody', 'Obwód balonika', 'Kolor butelki'],
        poprawna: 1,
        wyjasnienie: 'Zmienna niezależna to czynnik celowo zmieniany przez badacza — tu jest to ilość cukru dodanego do poszczególnych butelek, przy zachowaniu identycznej ilości drożdży i wody.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: ['Butelka z 5 g cukru', 'Butelka z 15 g cukru', 'Butelka bez dodatku cukru', 'Żadna z butelek'],
        poprawna: 2,
        wyjasnienie: 'Próba kontrolna to wariant bez badanego czynnika — butelka bez cukru pokazuje, jak intensywna byłaby fermentacja bez substratu, i stanowi punkt odniesienia dla pozostałych prób.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, w którym wariancie balonik powinien osiągnąć największy obwód?',
        opcje: ['Bez cukru', 'Z 5 g cukru', 'Z 15 g cukru', 'We wszystkich tak samo'],
        poprawna: 2,
        wyjasnienie: 'Jeśli więcej cukru oznacza intensywniejszą fermentację, to najwięcej CO2 (a więc największy balonik) powinno powstać przy najwyższym zastosowanym stężeniu cukru.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w którym wariancie fermentacja przebiegała najintensywniej.',
        tabela: {
          tytul: 'Obwód balonika po 20 minutach',
          kolumny: ['Wariant', 'Obwód balonika (cm)'],
          wiersze: [
            ['Bez cukru', '2'],
            ['5 g cukru', '10'],
            ['15 g cukru', '16'],
          ],
        },
        opcje: ['Bez cukru', 'Z 5 g cukru', 'Z 15 g cukru', 'Wyniki są identyczne'],
        poprawna: 2,
        wyjasnienie: 'Największy obwód balonika (16 cm) zaobserwowano przy najwyższym stężeniu cukru — oznacza to najwięcej wydzielonego CO2, czyli najintensywniejszą fermentację.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Stężenie cukru nie ma wpływu na fermentację drożdży.',
          'Wzrost stężenia cukru zwiększa intensywność fermentacji beztlenowej drożdży.',
          'Drożdże nie potrzebują cukru do fermentacji.',
          'Fermentacja zachodzi tylko przy braku cukru.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: im więcej cukru (substratu do fermentacji) dostępne jest dla drożdży, tym więcej dwutlenku węgla powstaje w tym samym czasie.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega powtórzył doświadczenie, ale do każdej butelki dodał inną ilość drożdży (im więcej cukru, tym więcej drożdży). Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — to poprawny plan',
          'Zmienił jednocześnie dwie zmienne (ilość cukru i ilość drożdży), więc nie można stwierdzić, co naprawdę wpłynęło na wynik',
          'Powinien użyć zimnej wody',
          'Powinien wykonać doświadczenie bez balonika',
        ],
        poprawna: 1,
        wyjasnienie: 'W poprawnym doświadczeniu zmienia się tylko jeden czynnik (tu: ilość cukru), a wszystkie pozostałe warunki — w tym ilość drożdży — muszą pozostać takie same we wszystkich wariantach.',
      },
    ],
  });

  // 2. Osmoza — plasterki ziemniaka w wodzie i w roztworze soli
  register.doswiadczenie({
    id: 'dosw-osmoza-ziemniak',
    tytul: 'Jak stężenie roztworu wpływa na masę plasterków ziemniaka?',
    opis:
      'Uczniowie wycięli z tego samego ziemniaka dwa jednakowe pod względem kształtu i masy plasterki, dokładnie je zważyli, a następnie umieścili jeden w naczyniu z wodą destylowaną, a drugi w naczyniu ze stężonym (10%) roztworem soli kuchennej. Po 30 minutach plasterki wyjęto, osuszono bibułą i ponownie zważono, obliczając procentową zmianę masy każdego z nich.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy ziemniak zmienia kolor pod wpływem soli?',
          'Czy stężenie roztworu, w którym zanurzono plasterek ziemniaka, wpływa na zmianę jego masy?',
          'Czy woda destylowana jest cięższa od roztworu soli?',
          'Czy sól rozpuszcza się szybciej w ciepłej wodzie?',
        ],
        poprawna: 1,
        wyjasnienie: 'Problem badawczy dotyczy zależności między stężeniem roztworu a zmianą masy tkanki roślinnej, co jest skutkiem osmotycznego przepływu wody przez błony komórkowe.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Plasterek w wodzie destylowanej zyska masę, a plasterek w stężonym roztworze soli straci masę, na skutek osmozy.',
          'Masa obu plasterków nie zmieni się.',
          'Plasterek w soli zwiększy swoją masę o połowę.',
          'Sól zabarwi plasterek na biało.',
        ],
        poprawna: 0,
        wyjasnienie: 'Hipoteza powinna odnosić się do kierunku ruchu wody przez osmozę: z roztworu o niższym stężeniu (hipotonicznego) do komórek oraz z komórek do roztworu o wyższym stężeniu (hipertonicznego).',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Masa początkowa plasterka', 'Stężenie roztworu, w którym zanurzono plasterek', 'Czas ważenia', 'Rodzaj bibuły użytej do osuszania'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest stężenie roztworu (woda destylowana vs roztwór soli) — to ten czynnik celowo różnicowano między próbami.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: ['Plasterek w roztworze soli', 'Plasterek w wodzie destylowanej', 'Oba plasterki jednocześnie', 'Żaden z plasterków'],
        poprawna: 1,
        wyjasnienie: 'Plasterek w czystej wodzie destylowanej (bez dodatku soli) stanowi punkt odniesienia — pokazuje zachowanie tkanki bez badanego czynnika, czyli bez podwyższonego stężenia roztworu.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, co powinno się stać z plasterkiem zanurzonym w stężonym roztworze soli?',
        opcje: [
          'Zwiększy masę, bo wchłonie sól',
          'Zmniejszy masę, bo woda wypłynie z komórek do roztworu o wyższym stężeniu',
          'Jego masa się nie zmieni',
          'Rozpuści się całkowicie',
        ],
        poprawna: 1,
        wyjasnienie: 'W roztworze hipertonicznym (o wyższym stężeniu niż wnętrze komórek) woda wypływa z komórek na zewnątrz, więc plasterek traci masę i staje się wiotki.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w którym roztworze plasterek stracił masę.',
        tabela: {
          tytul: 'Procentowa zmiana masy plasterków po 30 minutach',
          kolumny: ['Roztwór', 'Zmiana masy (%)'],
          wiersze: [
            ['Woda destylowana', '+8%'],
            ['Roztwór soli 10%', '−12%'],
          ],
        },
        opcje: ['W wodzie destylowanej', 'W roztworze soli', 'W obu jednakowo', 'W żadnym'],
        poprawna: 1,
        wyjasnienie: 'Ujemna wartość (−12%) oznacza ubytek masy — plasterek w roztworze soli oddał wodę do otoczenia na skutek osmozy.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Stężenie roztworu nie wpływa na masę tkanki roślinnej.',
          'Woda przemieszcza się przez błony komórkowe zgodnie z różnicą stężeń — do komórek w roztworze hipotonicznym, a z komórek w roztworze hipertonicznym.',
          'Sól zawsze zwiększa masę tkanek roślinnych.',
          'Osmoza zachodzi tylko w wodzie destylowanej.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki pokazują dwukierunkowy charakter osmozy: kierunek przepływu wody zależy od stężenia roztworu względem wnętrza komórek.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega wykonał to doświadczenie, używając plasterka grubego (0,5 cm) w wodzie i plasterka cienkiego (0,1 cm) w roztworze soli. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — grubość nie ma znaczenia',
          'Wprowadził dodatkową, niekontrolowaną zmienną (grubość plasterka), co utrudnia porównanie wyników',
          'Powinien użyć plasterków z dwóch różnych ziemniaków',
          'Powinien pominąć ważenie',
        ],
        poprawna: 1,
        wyjasnienie: 'Aby porównanie było wiarygodne, plasterki powinny różnić się tylko badanym czynnikiem (stężeniem roztworu) — różna grubość wpływa dodatkowo na tempo i zakres wymiany wody, zaburzając wynik.',
      },
    ],
  });

  // 3. Wpływ temperatury na aktywność katalazy z ziemniaka
  register.doswiadczenie({
    id: 'dosw-katalaza-temperatura',
    tytul: 'Czy temperatura wpływa na aktywność enzymu katalazy?',
    opis:
      'Uczniowie przygotowali trzy jednakowe kawałki surowego ziemniaka (źródło enzymu katalazy) i umieścili je w probówkach z jednakową ilością 3% wody utlenionej (H2O2). Probówki wcześniej schłodzono do 4°C, pozostawiono w temperaturze pokojowej (22°C) lub podgrzano do 60°C. Po dodaniu ziemniaka do każdej probówki mierzono wysokość powstającej piany tlenowej po upływie 1 minuty.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy temperatura wpływa na aktywność enzymu katalazy rozkładającego nadtlenek wodoru?',
          'Czy ziemniak jest źródłem skrobi?',
          'Czy woda utleniona ma zapach?',
          'Czy probówki szklane przewodzą ciepło?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy odpowiada temu, co jest badane: wpływowi temperatury na aktywność katalazy, ocenianą pośrednio przez ilość wydzielonego tlenu (wysokość piany).',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Aktywność katalazy jest największa w temperaturze umiarkowanej, a wysoka temperatura ją obniża wskutek denaturacji enzymu.',
          'Katalaza działa wyłącznie w niskiej temperaturze.',
          'Temperatura nie ma żadnego wpływu na enzymy.',
          'Im wyższa temperatura, tym enzym działa intensywniej bez ograniczeń.',
        ],
        poprawna: 0,
        wyjasnienie: 'Enzymy mają optymalną temperaturę działania — zbyt niska spowalnia reakcję, a zbyt wysoka prowadzi do denaturacji białka enzymatycznego i utraty aktywności.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Stężenie wody utlenionej', 'Temperatura probówki', 'Wysokość piany', 'Rodzaj probówki'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest temperatura — to ten czynnik celowo różnicowano, przy zachowaniu takiej samej ilości ziemniaka i takiego samego stężenia H2O2 we wszystkich próbach.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej (warunków referencyjnych)?',
        opcje: ['Próbka w 4°C', 'Próbka w temperaturze pokojowej (22°C)', 'Próbka w 60°C', 'Żadna z próbek'],
        poprawna: 1,
        wyjasnienie: 'Próbka w temperaturze pokojowej stanowi warunki standardowe (referencyjne), względem których ocenia się wpływ obniżonej i podwyższonej temperatury na aktywność enzymu.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, w której probówce piana powinna być najniższa?',
        opcje: ['W 4°C', 'W 22°C', 'W 60°C', 'We wszystkich tak samo'],
        poprawna: 2,
        wyjasnienie: 'W wysokiej temperaturze (60°C) białko enzymatyczne ulega denaturacji i traci zdolność katalizowania reakcji, dlatego wydzielanie tlenu (piana) powinno być najmniejsze.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w której temperaturze katalaza wykazała najwyższą aktywność.',
        tabela: {
          tytul: 'Wysokość piany po 1 minucie',
          kolumny: ['Temperatura', 'Wysokość piany (cm)'],
          wiersze: [
            ['4°C', '1,0'],
            ['22°C', '6,0'],
            ['60°C', '0,5'],
          ],
        },
        opcje: ['W 4°C', 'W 22°C', 'W 60°C', 'We wszystkich tak samo'],
        poprawna: 1,
        wyjasnienie: 'Najwyższa piana (6 cm) powstała w temperaturze pokojowej — to temperatura zbliżona do optymalnej dla tego enzymu, w niskiej reakcja przebiega wolno, a w wysokiej enzym jest zdenaturowany.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Katalaza działa jednakowo we wszystkich temperaturach.',
          'Aktywność katalazy zależy od temperatury — jest najwyższa w temperaturze umiarkowanej, a wysoka temperatura ją silnie obniża.',
          'Im wyższa temperatura, tym katalaza działa intensywniej.',
          'Katalaza działa tylko w niskiej temperaturze.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: aktywność enzymu rośnie do pewnej temperatury optymalnej, a następnie gwałtownie spada wskutek denaturacji białka w wysokiej temperaturze.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega powtórzył doświadczenie, ale do probówki w 60°C dodał dwa razy więcej wody utlenionej niż do pozostałych. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — stężenie H2O2 nie ma znaczenia',
          'Zmienił jednocześnie dwie zmienne (temperaturę i stężenie H2O2), przez co nie można ustalić przyczyny różnic w wynikach',
          'Powinien użyć mniej ziemniaka',
          'Powinien wykonać pomiar po 10 sekundach',
        ],
        poprawna: 1,
        wyjasnienie: 'Aby wyniki były wiarygodne, jedynym różniącym się czynnikiem powinna być temperatura — zmiana stężenia substratu (H2O2) wprowadza dodatkową zmienną i unieważnia porównanie.',
      },
    ],
  });

  // 4. Warunki kiełkowania nasion — wpływ dostępności wody
  register.doswiadczenie({
    id: 'dosw-kielkowanie-nasion',
    tytul: 'Czy dostępność wody wpływa na kiełkowanie nasion fasoli?',
    opis:
      'Uczniowie umieścili po 20 nasion fasoli na wacie w dwóch jednakowych pojemnikach, trzymanych w tym samym ciepłym i jasnym miejscu. Watę w pierwszym pojemniku codziennie zwilżano wodą, a wata w drugim pojemniku pozostawała sucha przez cały czas trwania doświadczenia. Po 7 dniach policzono, ile nasion w każdym pojemniku wykiełkowało.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy dostępność wody wpływa na kiełkowanie nasion fasoli?',
          'Czy fasola jest rośliną jednoroczną?',
          'Czy nasiona fasoli różnią się kolorem?',
          'Czy temperatura pokojowa jest odpowiednia do przechowywania nasion?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy dokładnie odpowiada badanej zależności: wpływowi dostępności wody na proces kiełkowania nasion.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Nasiona podlewane wodą wykiełkują liczniej niż nasiona pozbawione wody.',
          'Kolor nasion decyduje o tempie kiełkowania.',
          'Nasiona kiełkują lepiej w ciemności niż w świetle.',
          'Wielkość pojemnika wpływa na kiełkowanie.',
        ],
        poprawna: 0,
        wyjasnienie: 'Woda jest niezbędna do uruchomienia procesów metabolicznych w nasionie (pęcznienie, aktywacja enzymów), dlatego hipoteza powinna dotyczyć wpływu jej dostępności na liczbę wykiełkowanych nasion.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Liczba nasion w pojemniku', 'Dostępność wody (podlewanie lub jego brak)', 'Rodzaj pojemnika', 'Gatunek rośliny'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest dostępność wody — jedyny celowo różnicowany czynnik, przy zachowaniu takiej samej temperatury, oświetlenia i liczby nasion w obu pojemnikach.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: ['Nasiona podlewane wodą', 'Nasiona na suchej wacie (bez podlewania)', 'Oba warianty jednocześnie', 'Żaden z wariantów'],
        poprawna: 1,
        wyjasnienie: 'Wariant bez dostępu do wody stanowi próbę kontrolną — pokazuje, co dzieje się z nasionami bez badanego czynnika (wody), a więc jest punktem odniesienia dla wariantu podlewanego.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, w którym pojemniku wykiełkuje więcej nasion?',
        opcje: ['Na suchej wacie', 'Na wilgotnej wacie', 'W obu jednakowo', 'W żadnym'],
        poprawna: 1,
        wyjasnienie: 'Ponieważ woda jest niezbędna do kiełkowania, nasiona na regularnie zwilżanej wacie powinny wykiełkować znacznie liczniej niż nasiona na suchej wacie.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w którym wariancie wykiełkowało więcej nasion.',
        tabela: {
          tytul: 'Liczba wykiełkowanych nasion (na 20) po 7 dniach',
          kolumny: ['Wariant', 'Liczba wykiełkowanych nasion'],
          wiersze: [
            ['Sucha wata (bez wody)', '1'],
            ['Wilgotna wata (podlewana)', '18'],
          ],
        },
        opcje: ['Na suchej wacie', 'Na wilgotnej wacie', 'Wyniki są identyczne', 'Żadne nasiona nie wykiełkowały'],
        poprawna: 1,
        wyjasnienie: 'Na wilgotnej wacie wykiełkowało 18 z 20 nasion, a na suchej tylko 1 — potwierdza to, że woda jest niezbędnym warunkiem kiełkowania.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Dostępność wody nie wpływa na kiełkowanie nasion.',
          'Woda jest niezbędnym czynnikiem warunkującym kiełkowanie nasion fasoli.',
          'Nasiona kiełkują lepiej bez wody.',
          'Liczba nasion w pojemniku decyduje o kiełkowaniu.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: dostęp do wody znacząco zwiększa liczbę wykiełkowanych nasion, ponieważ woda uruchamia procesy metaboliczne zarodka.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega wykonał podobne doświadczenie, ale pojemnik z podlewanymi nasionami trzymał w ciepłym miejscu, a pojemnik z suchą watą w chłodnej piwnicy. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — temperatura nie ma znaczenia dla kiełkowania',
          'Zmienił jednocześnie dwie zmienne (dostępność wody i temperaturę), więc nie można jednoznacznie stwierdzić, co wpłynęło na wynik',
          'Powinien użyć mniejszej liczby nasion',
          'Powinien przeprowadzić doświadczenie w nocy',
        ],
        poprawna: 1,
        wyjasnienie: 'Poza badaną zmienną (dostępnością wody) wszystkie inne warunki — w tym temperatura i oświetlenie — powinny być takie same w obu pojemnikach, inaczej nie da się ustalić, który czynnik wpłynął na wynik.',
      },
    ],
  });

  // 5. Fototropizm — wzrost siewki w kierunku jednostronnego światła
  register.doswiadczenie({
    id: 'dosw-fototropizm-siewki',
    tytul: 'Czy jednostronne oświetlenie wpływa na kierunek wzrostu łodygi siewki?',
    opis:
      'Uczniowie wyhodowali dwie grupy jednakowych siewek grochu w doniczkach ustawionych na parapecie. Doniczki pierwszej grupy pozostawiono w jednej pozycji, dzięki czemu siewki otrzymywały światło tylko z jednej strony (z okna). Doniczki drugiej grupy obracano codziennie o 90°, dzięki czemu siewki otrzymywały światło równomiernie ze wszystkich stron. Po 5 dniach zmierzono kąt odchylenia łodygi od pionu w obu grupach.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy jednostronne oświetlenie wpływa na kierunek wzrostu łodygi siewki?',
          'Czy groch potrzebuje gleby do wzrostu?',
          'Czy wielkość doniczki wpływa na wzrost korzenia?',
          'Czy siewki grochu rosną szybciej w nocy?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy dotyczy zależności między kierunkiem padania światła a kierunkiem wzrostu łodygi, czyli zjawiskiem fototropizmu.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Siewki oświetlone jednostronnie wygną łodygę w kierunku źródła światła, w odróżnieniu od siewek oświetlanych równomiernie.',
          'Siewki rosną wyłącznie w ciemności.',
          'Kolor liści zależy od kierunku światła.',
          'Wszystkie siewki rosną zawsze prosto, niezależnie od oświetlenia.',
        ],
        poprawna: 0,
        wyjasnienie: 'Fototropizm dodatni pędu polega na wzroście w kierunku źródła światła — hipoteza powinna przewidywać silniejsze wygięcie łodygi przy jednostronnym oświetleniu.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Gatunek rośliny', 'Sposób oświetlenia (jednostronne lub równomierne)', 'Wielkość doniczki', 'Kolor liści'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest sposób padania światła na roślinę — to jedyny celowo różnicowany czynnik między dwiema grupami siewek.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: [
          'Siewki oświetlone jednostronnie (doniczki nieobracane)',
          'Siewki obracane codziennie, oświetlone równomiernie ze wszystkich stron',
          'Oba warianty jednocześnie',
          'Żaden z wariantów',
        ],
        poprawna: 1,
        wyjasnienie: 'Siewki obracane, otrzymujące światło równomiernie ze wszystkich stron, nie są poddane badanemu czynnikowi (jednostronności światła) i stanowią punkt odniesienia — powinny rosnąć prosto.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, w której grupie łodygi powinny wykazać większe odchylenie od pionu?',
        opcje: [
          'W grupie oświetlonej jednostronnie',
          'W grupie obracanej, oświetlonej równomiernie',
          'W obu grupach jednakowe odchylenie',
          'W żadnej grupie nie będzie odchylenia',
        ],
        poprawna: 0,
        wyjasnienie: 'Siewki, które otrzymują światło tylko z jednej strony, wykazują silniejszy fototropizm — łodyga wygina się w stronę źródła światła znacznie bardziej niż przy równomiernym oświetleniu.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w której grupie zaobserwowano silniejszy fototropizm.',
        tabela: {
          tytul: 'Średni kąt odchylenia łodygi od pionu po 5 dniach',
          kolumny: ['Grupa', 'Kąt odchylenia (°)'],
          wiersze: [
            ['Oświetlenie jednostronne', '45°'],
            ['Oświetlenie równomierne (obracane)', '3°'],
          ],
        },
        opcje: ['W grupie oświetlonej jednostronnie', 'W grupie obracanej', 'W obu jednakowo', 'W żadnej'],
        poprawna: 0,
        wyjasnienie: 'Znacznie większy kąt odchylenia (45° wobec 3°) w grupie oświetlonej jednostronnie wskazuje na silny fototropizm dodatni wywołany brakiem równomiernego dostępu światła.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Kierunek padania światła nie wpływa na kierunek wzrostu łodygi.',
          'Jednostronne oświetlenie powoduje wygięcie łodygi w stronę źródła światła (fototropizm dodatni).',
          'Łodyga zawsze rośnie w stronę przeciwną do światła.',
          'Rośliny rosną szybciej w ciemności niż w świetle.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: brak równomiernego oświetlenia powoduje intensywny wzrost komórek po zacienionej stronie łodygi, co prowadzi do jej wygięcia w kierunku światła.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega przeprowadzał podobne doświadczenie, ale co drugi dzień obracał także doniczki z grupy oświetlonej jednostronnie „dla porządku”. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — obracanie nie ma wpływu na wynik',
          'Wyeliminował badany czynnik (jednostronność światła) w grupie doświadczalnej, co uniemożliwia zaobserwowanie fototropizmu',
          'Powinien podlewać rośliny częściej',
          'Powinien użyć większej doniczki',
        ],
        poprawna: 1,
        wyjasnienie: 'Obracanie doniczek z grupy „jednostronnej” sprawia, że siewki zaczynają otrzymywać światło z wielu stron — zaciera to różnicę między grupami i eksperyment przestaje badać zamierzoną zależność.',
      },
    ],
  });

  // 6. Wpływ dostępności tlenu na tempo wzrostu populacji drożdży
  register.doswiadczenie({
    id: 'dosw-tlen-drozdze',
    tytul: 'Czy dostępność tlenu wpływa na tempo namnażania się drożdży?',
    opis:
      'Uczniowie przygotowali dwie identyczne hodowle drożdży piekarskich w roztworze cukru o tym samym stężeniu i objętości. Pierwszą hodowlę pozostawiono w otwartej kolbie, stale napowietrzanej przez delikatne mieszanie (dostęp tlenu), a drugą umieszczono w szczelnie zamkniętej butelce bez dostępu powietrza (warunki beztlenowe). Po 48 godzinach w tej samej temperaturze policzono liczbę komórek drożdży w 1 ml każdej hodowli pod mikroskopem.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy dostępność tlenu wpływa na tempo namnażania się komórek drożdży?',
          'Czy drożdże potrzebują światła do wzrostu?',
          'Czy temperatura wpływa na kolor hodowli drożdży?',
          'Czy drożdże mogą żyć w wodzie destylowanej?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy dotyczy wpływu obecności lub braku tlenu na liczebność (tempo namnażania) populacji drożdży w hodowli.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Hodowla z dostępem tlenu osiągnie znacznie większą liczebność komórek niż hodowla beztlenowa, ponieważ oddychanie tlenowe dostarcza więcej energii niż fermentacja.',
          'Drożdże nie mogą żyć bez dostępu tlenu.',
          'Liczba komórek drożdży nie zależy od obecności tlenu.',
          'Brak tlenu zawsze zabija wszystkie komórki drożdży.',
        ],
        poprawna: 0,
        wyjasnienie: 'Oddychanie tlenowe jest znacznie bardziej wydajne energetycznie niż fermentacja beztlenowa, dlatego przy dostępie tlenu drożdże mogą intensywniej się namnażać.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Stężenie cukru w roztworze', 'Dostępność tlenu (hodowla otwarta lub zamknięta)', 'Objętość hodowli', 'Gatunek drożdży'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest dostępność tlenu — jedyny celowo różnicowany czynnik, przy zachowaniu takiego samego stężenia cukru, objętości i temperatury w obu hodowlach.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant można uznać za próbę kontrolną, wobec której porównuje się wpływ dodania tlenu?',
        opcje: [
          'Hodowla napowietrzana',
          'Hodowla w szczelnie zamkniętej butelce, bez dostępu tlenu',
          'Obie hodowle jednocześnie',
          'Żadna z hodowli',
        ],
        poprawna: 1,
        wyjasnienie: 'Hodowla bez dostępu do tlenu (warunki beztlenowe, tylko fermentacja) stanowi punkt odniesienia — pokazuje wynik bez badanego czynnika, czyli bez dostępności tlenu.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, w której hodowli po 48 godzinach powinno być więcej komórek drożdży?',
        opcje: ['W hodowli napowietrzanej', 'W hodowli beztlenowej', 'W obu tyle samo', 'W żadnej — drożdże obumrą'],
        poprawna: 0,
        wyjasnienie: 'Dzięki wydajniejszemu pozyskiwaniu energii z oddychania tlenowego drożdże w hodowli napowietrzanej powinny namnażać się znacznie intensywniej.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w której hodowli namnażanie drożdży było intensywniejsze.',
        tabela: {
          tytul: 'Liczba komórek drożdży w 1 ml hodowli po 48 godzinach',
          kolumny: ['Warunki hodowli', 'Liczba komórek (mln/ml)'],
          wiersze: [
            ['Bez dostępu tlenu', '15'],
            ['Z dostępem tlenu (napowietrzana)', '68'],
          ],
        },
        opcje: ['Bez dostępu tlenu', 'Z dostępem tlenu', 'W obu jednakowo', 'Nie da się ustalić'],
        poprawna: 1,
        wyjasnienie: 'Znacznie wyższa liczba komórek (68 mln/ml wobec 15 mln/ml) w hodowli napowietrzanej wskazuje na intensywniejsze namnażanie się drożdży przy dostępie tlenu.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Dostępność tlenu nie ma znaczenia dla wzrostu populacji drożdży.',
          'Dostęp do tlenu zwiększa tempo namnażania się drożdży, ponieważ oddychanie tlenowe dostarcza więcej energii niż fermentacja.',
          'Drożdże namnażają się wyłącznie bez dostępu tlenu.',
          'Tlen jest szkodliwy dla drożdży.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: obecność tlenu umożliwia bardziej wydajne oddychanie tlenowe, co przekłada się na szybsze namnażanie komórek w porównaniu z warunkami beztlenowymi.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega powtórzył doświadczenie, ale hodowlę napowietrzaną trzymał w cieplejszym miejscu niż hodowlę beztlenową. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — temperatura nie wpływa na drożdże',
          'Zmienił jednocześnie dwie zmienne (dostępność tlenu i temperaturę), przez co nie można jednoznacznie ustalić przyczyny różnic w liczebności komórek',
          'Powinien użyć mniejszej objętości hodowli',
          'Powinien liczyć komórki gołym okiem zamiast pod mikroskopem',
        ],
        poprawna: 1,
        wyjasnienie: 'Aby wynik można było przypisać wyłącznie dostępności tlenu, wszystkie pozostałe warunki, w tym temperatura, muszą być identyczne w obu hodowlach.',
      },
    ],
  });

  // 7. Odruch/reakcja na bodziec — dżdżownica i światło
  register.doswiadczenie({
    id: 'dosw-dzdzownica-swiatlo',
    tytul: 'Czy dżdżownice unikają jasnego światła?',
    opis:
      'Uczniowie umieszczali pojedyncze dżdżownice na środku płaskiej tacy, której jedna połowa była silnie oświetlona lampą, a druga przykryta czarnym kartonem (zacieniona). Doświadczenie powtórzono z 20 różnymi osobnikami, notując, po ilu z nich w ciągu 2 minut znalazło się po ciemnej stronie tacy. Dla porównania wykonano też próbę z tacą całkowicie zaciemnioną (bez różnicy oświetlenia między połówkami).',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy dżdżownice unikają jasno oświetlonego miejsca, wybierając miejsce zacienione?',
          'Czy dżdżownice potrafią pływać?',
          'Czy dżdżownice reagują na dźwięk?',
          'Czy dżdżownice rosną szybciej w glebie piaszczystej czy gliniastej?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy dotyczy reakcji dżdżownic na bodziec świetlny — czy jednostronne, silne oświetlenie skłania je do ucieczki w stronę ciemności.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'Dżdżownice będą przemieszczać się w kierunku zacienionej strony tacy, unikając jasnego światła.',
          'Dżdżownice będą zawsze poruszać się w stronę światła.',
          'Kierunek ruchu dżdżownic nie zależy od oświetlenia.',
          'Dżdżownice zamierają w bezruchu niezależnie od warunków.',
        ],
        poprawna: 0,
        wyjasnienie: 'Dżdżownice mają receptory światłoczułe w skórze i wykazują ujemną fototaksję — unikają silnego światła, co chroni je przed wysychaniem i drapieżnikami.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: ['Gatunek dżdżownicy', 'Obecność jednostronnego, silnego oświetlenia tacy', 'Wielkość tacy', 'Pora dnia'],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest sposób oświetlenia tacy (jednostronne, silne światło kontra brak różnicy oświetlenia) — to celowo różnicowany warunek doświadczenia.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant pełni rolę próby kontrolnej?',
        opcje: [
          'Taca z jednostronnym oświetleniem',
          'Taca całkowicie zaciemniona (bez różnicy oświetlenia między połówkami)',
          'Obie tace jednocześnie',
          'Żadna z tac',
        ],
        poprawna: 1,
        wyjasnienie: 'Taca całkowicie zaciemniona, bez różnicy oświetlenia między połówkami, pozwala sprawdzić, czy dżdżownice poruszają się losowo, gdy nie ma badanego bodźca (jednostronnego światła).',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, ile spośród 20 dżdżownic powinno znaleźć się po ciemnej stronie w wariancie z jednostronnym oświetleniem?',
        opcje: ['Około 10 (połowa, czyli rozkład losowy)', 'Zdecydowana większość, wyraźnie ponad połowa', 'Żadna', 'Nie da się tego przewidzieć'],
        poprawna: 1,
        wyjasnienie: 'Jeśli dżdżownice rzeczywiście unikają światła, zdecydowana większość z nich powinna przemieścić się na zacienioną stronę tacy, a nie rozłożyć się losowo.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników oceń, czy dżdżownice wykazały preferencję do zacienionej strony.',
        tabela: {
          tytul: 'Liczba dżdżownic (na 20) po ciemnej stronie tacy po 2 minutach',
          kolumny: ['Wariant', 'Liczba osobników po ciemnej stronie'],
          wiersze: [
            ['Taca zaciemniona całkowicie (kontrola)', '11'],
            ['Taca z jednostronnym oświetleniem', '17'],
          ],
        },
        opcje: [
          'Nie wykazały żadnej preferencji',
          'Wykazały wyraźną preferencję do strony zacienionej przy jednostronnym oświetleniu',
          'Wykazały preferencję do strony jasnej',
          'Wynik jest identyczny w obu wariantach',
        ],
        poprawna: 1,
        wyjasnienie: 'W wariancie kontrolnym rozkład jest zbliżony do losowego (11 z 20), natomiast przy jednostronnym oświetleniu znacznie więcej osobników (17 z 20) trafiło na stronę zacienioną — to wyraźna preferencja.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Dżdżownice są obojętne na światło.',
          'Dżdżownice wykazują ujemną reakcję na silne światło (unikają go), przemieszczając się w stronę zacienionego miejsca.',
          'Dżdżownice zawsze poruszają się w stronę światła.',
          'Ruch dżdżownic jest całkowicie losowy niezależnie od warunków.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: dżdżownice, wyczuwając światło receptorami skórnymi, aktywnie przemieszczają się w kierunku ciemności, co jest zachowaniem obronnym (unikanie wysychania i drapieżników).',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega przeprowadził to samo doświadczenie, ale użył tylko jednej dżdżownicy i na tej podstawie sformułował wniosek ogólny. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — jeden osobnik w zupełności wystarczy',
          'Zastosował zbyt małą próbę badawczą, przez co pojedyncze, przypadkowe zachowanie osobnika nie pozwala na wiarygodne uogólnienie wyniku',
          'Powinien użyć dżdżownicy w innym kolorze',
          'Powinien przeprowadzić doświadczenie w nocy',
        ],
        poprawna: 1,
        wyjasnienie: 'Zachowanie pojedynczego zwierzęcia może być przypadkowe. Aby wiarygodnie ocenić reakcję gatunku na bodziec, doświadczenie trzeba powtórzyć na wielu osobnikach i analizować wynik statystycznie.',
      },
    ],
  });

  // 8. Wpływ zagęszczenia populacji na tempo wzrostu — hodowla drożdży
  register.doswiadczenie({
    id: 'dosw-zageszczenie-populacji-drozdzy',
    tytul: 'Jak ograniczona ilość zasobów wpływa na wzrost liczebności populacji drożdży?',
    opis:
      'Uczniowie założyli dwie hodowle drożdży w tym samym roztworze odżywczym o jednakowym stężeniu, w tej samej temperaturze — jedną w małej probówce (2 ml pożywki, ograniczone zasoby i przestrzeń), a drugą w dużej kolbie (200 ml tej samej pożywki, obfite zasoby). Do obu hodowli wprowadzono taką samą początkową liczbę komórek drożdży, a następnie przez 4 kolejne dni codziennie liczono liczbę komórek w próbce 1 ml z każdej hodowli.',
    pytania: [
      {
        typ: 'problem-badawczy',
        tresc: 'Jak należy sformułować problem badawczy tego doświadczenia?',
        opcje: [
          'Czy ograniczona ilość dostępnych zasobów (mała objętość pożywki) wpływa na tempo wzrostu liczebności populacji drożdży?',
          'Czy drożdże potrafią przetrwać zamrożenie?',
          'Czy kolor pożywki wpływa na wzrost drożdży?',
          'Czy drożdże rozmnażają się płciowo?',
        ],
        poprawna: 0,
        wyjasnienie: 'Problem badawczy dotyczy tego, jak dostępność zasobów i przestrzeni (objętość pożywki) wpływa na dynamikę wzrostu liczebności populacji w czasie.',
      },
      {
        typ: 'hipoteza',
        tresc: 'Która hipoteza poprawnie odnosi się do postawionego problemu badawczego?',
        opcje: [
          'W hodowli o ograniczonej ilości zasobów populacja szybciej osiągnie fazę plateau i przy niższej liczebności niż w hodowli z obfitymi zasobami.',
          'Wielkość naczynia nie ma żadnego wpływu na wzrost populacji drożdży.',
          'Populacja w małej probówce będzie rosła w nieskończoność.',
          'Drożdże w dużej kolbie wymrą szybciej niż w małej probówce.',
        ],
        poprawna: 0,
        wyjasnienie: 'Zgodnie z modelem wzrostu ograniczonego zasobami, populacja w małej objętości powinna szybciej wyczerpać pokarm i miejsce, osiągając fazę plateau (stabilizacji liczebności) wcześniej i na niższym poziomie.',
      },
      {
        typ: 'zmienna',
        tresc: 'Jaka jest zmienna niezależna w tym doświadczeniu?',
        opcje: [
          'Początkowa liczba komórek drożdży',
          'Ilość dostępnych zasobów i przestrzeni (objętość pożywki)',
          'Temperatura hodowli',
          'Dzień tygodnia, w którym liczono komórki',
        ],
        poprawna: 1,
        wyjasnienie: 'Zmienną niezależną jest objętość dostępnej pożywki, decydująca o ilości zasobów i przestrzeni życiowej — jedyny celowo różnicowany czynnik między dwiema hodowlami.',
      },
      {
        typ: 'proba-kontrolna',
        tresc: 'Który wariant można uznać za próbę kontrolną, wobec której porównuje się wpływ ograniczenia zasobów?',
        opcje: [
          'Hodowla w małej probówce (2 ml pożywki)',
          'Hodowla w dużej kolbie (200 ml pożywki, obfite zasoby)',
          'Obie hodowle jednocześnie',
          'Żadna z hodowli',
        ],
        poprawna: 1,
        wyjasnienie: 'Hodowla w dużej kolbie, z obfitym dostępem do pożywki i przestrzeni, stanowi punkt odniesienia — pokazuje przebieg wzrostu populacji bez istotnego ograniczenia zasobów.',
      },
      {
        typ: 'przewidywanie',
        tresc: 'Zgodnie z hipotezą, jak powinna zmieniać się liczebność drożdży w małej probówce w kolejnych dniach doświadczenia?',
        opcje: [
          'Będzie rosła równomiernie przez cały czas trwania doświadczenia, tak jak w dużej kolbie',
          'Po początkowym szybkim wzroście (faza logarytmiczna) tempo wzrostu wyhamuje i liczebność ustabilizuje się na niższym poziomie (faza plateau)',
          'Będzie malała od pierwszego dnia',
          'Pozostanie stała przez cały czas trwania doświadczenia',
        ],
        poprawna: 1,
        wyjasnienie: 'W ograniczonej objętości pożywka i przestrzeń szybko się wyczerpują, dlatego po fazie intensywnego wzrostu liczebność populacji przestaje rosnąć i osiąga poziom plateau.',
      },
      {
        typ: 'analiza-tabeli',
        tresc: 'Na podstawie tabeli wyników określ, w której hodowli populacja wcześniej osiągnęła fazę plateau.',
        tabela: {
          tytul: 'Liczba komórek drożdży (mln/ml) w kolejnych dniach hodowli',
          kolumny: ['Dzień', 'Mała probówka (2 ml)', 'Duża kolba (200 ml)'],
          wiersze: [
            ['1', '5', '5'],
            ['2', '40', '38'],
            ['3', '52', '95'],
            ['4', '53', '160'],
          ],
        },
        opcje: [
          'W dużej kolbie',
          'W małej probówce — od 3. dnia liczebność niemal się nie zmienia, podczas gdy w kolbie nadal rośnie',
          'W obu hodowlach jednocześnie, w tym samym dniu',
          'Nie da się tego ustalić na podstawie tabeli',
        ],
        poprawna: 1,
        wyjasnienie: 'W małej probówce wzrost wyraźnie hamuje już między 2. a 3. dniem (z 40 do 52, a potem do 53 mln/ml), podczas gdy w dużej kolbie liczebność nadal rośnie (od 38 do 160 mln/ml) — to obrazuje wcześniejsze osiągnięcie fazy plateau przy ograniczonych zasobach.',
      },
      {
        typ: 'wniosek',
        tresc: 'Który wniosek prawidłowo podsumowuje wyniki doświadczenia?',
        opcje: [
          'Objętość pożywki nie ma wpływu na dynamikę wzrostu populacji drożdży.',
          'Ograniczona ilość zasobów i przestrzeni powoduje wcześniejsze osiągnięcie fazy plateau i niższą maksymalną liczebność populacji.',
          'Populacja w mniejszej objętości zawsze rośnie szybciej niż w większej.',
          'Faza plateau występuje tylko w bardzo dużych hodowlach.',
        ],
        poprawna: 1,
        wyjasnienie: 'Wyniki potwierdzają hipotezę: po fazie wzrostu logarytmicznego populacja w ograniczonej przestrzeni szybciej wyczerpuje zasoby, co prowadzi do wcześniejszego zahamowania wzrostu (faza plateau) na niższym poziomie liczebności.',
      },
      {
        typ: 'znajdz-blad',
        tresc: 'Kolega przeprowadził podobne doświadczenie, ale liczbę komórek drożdży policzył tylko raz, dopiero na koniec, czwartego dnia. Jaki błąd popełnił?',
        opcje: [
          'Nie popełnił błędu — liczy się tylko wynik końcowy',
          'Wykonał zbyt rzadkie pomiary — bez codziennych obserwacji nie da się zaobserwować przebiegu wzrostu (fazy logarytmicznej i plateau), a jedynie stan końcowy',
          'Powinien liczyć komórki dwa razy dziennie w drugiej kolbie',
          'Powinien użyć innego gatunku drożdży',
        ],
        poprawna: 1,
        wyjasnienie: 'Aby opisać dynamikę wzrostu populacji (kiedy następuje faza szybkiego wzrostu, a kiedy stabilizacja), konieczne są regularne pomiary w czasie — pojedynczy pomiar końcowy nie pozwala odtworzyć przebiegu krzywej wzrostu.',
      },
    ],
  });
})();
