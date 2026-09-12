(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t110-01',
    tematId: 't110',
    kolejnosc: 1,
    tytul: 'Tkanki — wprowadzenie',
    wprowadzenie:
      'U organizmów wielokomórkowych komórki nie działają w pojedynkę — grupy komórek o podobnej budowie i wspólnej funkcji tworzą tkanki. Poznanie głównych rodzajów tkanek roślinnych i zwierzęcych pozwala zrozumieć, jak zbudowane są narządy i cały organizm.',
    sekcje: [
      {
        naglowek: 'Jak powstają tkanki',
        akapity: [
          'Tkanka powstaje w wyniku różnicowania się komórek — komórki potomne powstałe z podziałów komórki macierzystej zmieniają kształt, wielkość i wyposażenie wewnętrzne, aby lepiej pełnić określoną funkcję. Proces ten nazywamy specjalizacją (różnicowaniem) komórek.',
          'U roślin zdolność do podziałów zachowują przez całe życie tylko komórki tkanki twórczej (merystematycznej) — dzięki niej rośliny mogą stale rosnąć, wydłużając pędy i korzenie oraz zwiększając ich grubość.',
          'U zwierząt, w tym u człowieka, większość komórek dojrzałych tkanek traci zdolność do podziałów; intensywny wzrost całego organizmu odbywa się głównie we wczesnych etapach życia.',
        ],
      },
      {
        naglowek: 'Tkanki roślinne',
        diagramId: 'd-t110-tkanki-roslinne',
        akapity: [
          'Tkanka twórcza (merystematyczna) zbudowana jest z małych, ściśle przylegających komórek zdolnych do intensywnych podziałów. Znajduje się na wierzchołkach pędów i korzeni oraz w kambium, umożliwiając wzrost rośliny na długość i grubość.',
          'Tkanka okrywająca (np. skórka, korek) pokrywa powierzchnię rośliny, chroniąc ją przed nadmierną utratą wody, urazami mechanicznymi i wnikaniem drobnoustrojów. W skórce liścia znajdują się aparaty szparkowe, umożliwiające wymianę gazową.',
          'Tkanka miękiszowa (podstawowa) wypełnia wnętrze organów roślinnych. Jej odmiana zawierająca chloroplasty — miękisz asymilacyjny — prowadzi fotosyntezę, a miękisz spichrzowy gromadzi materiały zapasowe.',
          'Tkanka przewodząca transportuje substancje: ksylem (drewno) prowadzi wodę z solami mineralnymi od korzeni w górę rośliny, a floem (łyko) transportuje produkty fotosyntezy do wszystkich jej części. Tkanka wzmacniająca usztywnia organy rośliny i pozwala jej utrzymać kształt.',
        ],
      },
      {
        naglowek: 'Tkanki zwierzęce',
        diagramId: 'd-t110-tkanki-zwierzece',
        akapity: [
          'Tkanka nabłonkowa pokrywa ciało z zewnątrz (naskórek) oraz wyściela narządy wewnętrzne i jamy ciała. Zbudowana jest z gęsto ułożonych komórek i pełni funkcje ochronne, wydzielnicze (buduje gruczoły) oraz wchłaniające.',
          'Tkanka łączna (np. kostna, chrzęstna, tłuszczowa, krew) zbudowana jest z komórek rozproszonych w obfitej istocie międzykomórkowej. Łączy inne tkanki, nadaje kształt ciału, magazynuje substancje zapasowe i uczestniczy w transporcie (krew).',
          'Tkanka mięśniowa zbudowana jest z komórek zdolnych do kurczenia się, dzięki czemu umożliwia ruch całego ciała oraz pracę narządów wewnętrznych, np. serca i jelit.',
          'Tkanka nerwowa zbudowana jest z komórek nerwowych (neuronów) zdolnych do odbierania, przewodzenia i przekazywania impulsów nerwowych — umożliwia szybką łączność między różnymi częściami organizmu.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Tkanka', definicja: 'Zespół komórek o podobnej budowie i pochodzeniu, wspólnie pełniących określoną funkcję.' },
      { termin: 'Tkanka twórcza (merystematyczna)', definicja: 'Tkanka roślinna zbudowana z komórek zdolnych do ciągłych podziałów, umożliwiająca wzrost rośliny.' },
      { termin: 'Tkanka okrywająca', definicja: 'Tkanka pokrywająca powierzchnię rośliny, chroniąca ją przed utratą wody i uszkodzeniami.' },
      { termin: 'Tkanka miękiszowa', definicja: 'Tkanka podstawowa wypełniająca wnętrze organów roślinnych, m.in. prowadząca fotosyntezę lub gromadząca materiały zapasowe.' },
      { termin: 'Ksylem (drewno)', definicja: 'Tkanka przewodząca transportująca wodę i sole mineralne od korzeni do reszty rośliny.' },
      { termin: 'Floem (łyko)', definicja: 'Tkanka przewodząca transportująca produkty fotosyntezy (substancje odżywcze) do wszystkich części rośliny.' },
      { termin: 'Tkanka nabłonkowa', definicja: 'Tkanka zwierzęca pokrywająca ciało z zewnątrz i wyściełająca narządy wewnętrzne.' },
      { termin: 'Tkanka łączna', definicja: 'Tkanka zwierzęca zbudowana z komórek rozproszonych w obfitej istocie międzykomórkowej, łącząca inne tkanki i pełniąca funkcje podporowe, zapasowe lub transportowe.' },
      { termin: 'Tkanka mięśniowa', definicja: 'Tkanka zwierzęca zbudowana z komórek zdolnych do kurczenia się, umożliwiająca ruch.' },
      { termin: 'Tkanka nerwowa', definicja: 'Tkanka zwierzęca zbudowana z neuronów, przewodząca impulsy nerwowe.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Ksylem (drewno)',
        b: 'Floem (łyko)',
        roznica: 'Ksylem transportuje wodę i sole mineralne w jednym kierunku — od korzeni ku górze rośliny. Floem transportuje substancje odżywcze wytworzone w fotosyntezie do miejsc wzrostu lub magazynowania, w różnych kierunkach.',
      },
    ],
    uwazajNa: [
      'Nie wszystkie komórki roślinne dzielą się przez całe życie — zdolność tę zachowują tylko komórki tkanki twórczej (merystematycznej); komórki pozostałych tkanek są już wyspecjalizowane.',
      'Tkanka łączna to nie tylko struktury „twarde”, jak kość czy chrząstka — zalicza się do niej także krew i tkanka tłuszczowa, mimo że nie mają sztywnej postaci.',
    ],
    musiszWiedziec: [
      'Rośliny rosną przez całe życie dzięki tkance twórczej (merystematycznej) — to zasadnicza różnica względem większości zwierząt.',
      'Cztery podstawowe tkanki zwierzęce to: nabłonkowa, łączna, mięśniowa i nerwowa.',
    ],
    diagramy: ['d-t110-tkanki-roslinne', 'd-t110-tkanki-zwierzece'],
    pytaniaKontrolne: ['p-t110-01', 'p-t110-03'],
  });
})();
