(function () {
  'use strict';
  var register = window.App.content.register;

  register.lekcja({
    id: 'l-t116-01',
    tematId: 't116',
    kolejnosc: 1,
    tytul: 'Wzrost i rozwój organizmów',
    wprowadzenie:
      'Każdy organizm żywy zmienia się od momentu powstania aż do osiągnięcia dojrzałości. Te zmiany opisujemy dwoma powiązanymi, ale różnymi pojęciami: wzrostem (przyrostem wielkości) i rozwojem (zmianami jakościowymi). U wielu zwierząt, zwłaszcza owadów, rozwojowi towarzyszy przeobrażenie — głębokie przekształcenie budowy ciała.',
    sekcje: [
      {
        naglowek: 'Wzrost a rozwój',
        akapity: [
          'Wzrost to trwały, ilościowy przyrost masy i rozmiarów ciała organizmu. Zachodzi dzięki podziałom komórkowym (zwiększaniu liczby komórek) oraz powiększaniu się poszczególnych komórek.',
          'Rozwój to zmiany jakościowe zachodzące w organizmie w ciągu całego życia — różnicowanie (specjalizacja) komórek, kształtowanie się tkanek i narządów oraz zmiany funkcji organizmu prowadzące do osiągnięcia dojrzałości płciowej.',
        ],
      },
      {
        naglowek: 'Rozwój prosty i rozwój złożony',
        akapity: [
          'W rozwoju prostym młody osobnik od momentu narodzin (lub wyklucia) przypomina wyglądem postać dorosłą i różni się od niej głównie wielkością. Taki typ rozwoju występuje np. u ssaków, ptaków, gadów i pająków.',
          'W rozwoju złożonym młode stadium wyraźnie różni się od postaci dorosłej, a organizm przechodzi przez kolejne etapy przekształceń nazywane przeobrażeniem (metamorfozą). Rozwój złożony z przeobrażeniem jest typowy dla owadów oraz — w innej formie — dla płazów (np. kijanka przekształcająca się w żabę).',
        ],
      },
      {
        naglowek: 'Przeobrażenie zupełne i niezupełne',
        diagramId: 'd-t116-przeobrazenie',
        akapity: [
          'Przeobrażenie zupełne obejmuje cztery stadia: jajo, larwę, poczwarkę i postać dorosłą (imago). Larwa (np. gąsienica motyla) znacznie różni się budową ciała i sposobem odżywiania od postaci dorosłej. W nieruchomym stadium poczwarki zachodzi głęboka przebudowa ciała, w wyniku której powstaje owad dorosły. Przeobrażenie zupełne występuje np. u motyli, chrząszczy i much.',
          'Przeobrażenie niezupełne obejmuje trzy stadia: jajo, larwę (nazywaną nimfą) i postać dorosłą — brak w nim stadium poczwarki. Nimfa od wyklucia przypomina wyglądem postać dorosłą (ma podobny kształt ciała), lecz jest mniejsza i nie ma jeszcze w pełni wykształconych skrzydeł ani narządów rozrodczych. Dojrzewa stopniowo poprzez kolejne wylinki. Przeobrażenie niezupełne występuje np. u konika polnego, ważki i pluskwiaków.',
        ],
      },
    ],
    pojecia: [
      { termin: 'Wzrost', definicja: 'Trwały, ilościowy przyrost masy i rozmiarów ciała organizmu.' },
      { termin: 'Rozwój', definicja: 'Zmiany jakościowe zachodzące w organizmie od jego powstania do osiągnięcia dojrzałości, obejmujące różnicowanie komórek i narządów.' },
      { termin: 'Rozwój prosty', definicja: 'Rozwój, w którym młody osobnik od urodzenia (wyklucia) przypomina wyglądem postać dorosłą, np. u ssaków i ptaków.' },
      { termin: 'Przeobrażenie (metamorfoza)', definicja: 'Głębokie przekształcenie budowy ciała organizmu w toku rozwoju złożonego, prowadzące do postaci dorosłej.' },
      { termin: 'Przeobrażenie zupełne', definicja: 'Rozwój obejmujący cztery stadia: jajo, larwę, poczwarkę i postać dorosłą, przy dużych różnicach między larwą a dorosłym.' },
      { termin: 'Przeobrażenie niezupełne', definicja: 'Rozwój obejmujący trzy stadia: jajo, larwę (nimfę) i postać dorosłą, bez stadium poczwarki.' },
      { termin: 'Larwa', definicja: 'Młode, ruchliwe i żerujące stadium rozwojowe, występujące po wykluciu z jaja przed osiągnięciem postaci dorosłej.' },
      { termin: 'Poczwarka', definicja: 'Nieruchome stadium przejściowe w przeobrażeniu zupełnym, w którym zachodzi przebudowa ciała larwy w postać dorosłą.' },
      { termin: 'Nimfa', definicja: 'Młode stadium owada z przeobrażeniem niezupełnym, przypominające wyglądem postać dorosłą.' },
      { termin: 'Imago', definicja: 'W pełni ukształtowana, zdolna do rozmnażania postać dorosła owada.' },
    ],
    zapamietajRoznice: [
      {
        a: 'Przeobrażenie zupełne',
        b: 'Przeobrażenie niezupełne',
        roznica:
          'Przeobrażenie zupełne ma cztery stadia (jajo, larwa, poczwarka, postać dorosła), a larwa wyraźnie różni się budową i sposobem odżywiania od dorosłego owada (np. gąsienica i motyl). Przeobrażenie niezupełne ma trzy stadia (jajo, nimfa, postać dorosła), bez stadium poczwarki, a nimfa od początku przypomina wyglądem postać dorosłą i stopniowo do niej dojrzewa.',
      },
    ],
    uwazajNa: [
      'Nie każde zwierzę przechodzi przeobrażenie — ssaki, ptaki i gady mają rozwój prosty, mimo że oczywiście rosną i dojrzewają.',
      'Larwa i nimfa to nie to samo pojęcie: larwa (w znaczeniu stadium przeobrażenia zupełnego) znacznie różni się od postaci dorosłej, natomiast nimfa (przeobrażenie niezupełne) już od wyklucia przypomina dorosłego owada.',
    ],
    musiszWiedziec: [
      'Kluczowa cecha odróżniająca oba typy przeobrażenia to obecność (przeobrażenie zupełne) lub brak (przeobrażenie niezupełne) stadium poczwarki oraz stopień podobieństwa młodego stadium do postaci dorosłej.',
    ],
    diagramy: ['d-t116-przeobrazenie'],
    pytaniaKontrolne: ['p-t116-k1', 'p-t116-k2'],
  });
})();
