(function () {
  'use strict';
  var register = window.App.content.register;

  register.budowaFunkcja({
    id: 'bf-liscie-igly',
    cecha: 'Igiełkowate, pokryte grubą kutikulą liście sosny',
    funkcja: 'Ograniczenie powierzchni parowania wody',
    korzysc: 'Roślina traci mniej wody, co pozwala jej przetrwać zimą i w suchych siedliskach',
    pytanie: 'Jaką funkcję pełni igiełkowaty kształt liści sosny?',
    opcje: ['Zwiększenie powierzchni fotosyntezy', 'Ograniczenie parowania wody', 'Przyciąganie owadów zapylających', 'Magazynowanie wody'],
    poprawna: 1,
    wyjasnienie: 'Mała powierzchnia igieł oraz gruba kutikula ograniczają parowanie wody (transpirację), co jest korzystne w warunkach zimowych i na ubogich, przepuszczalnych glebach.',
  });

  register.budowaFunkcja({
    id: 'bf-plywki-kaczka',
    cecha: 'Błony pławne między palcami u kaczki',
    funkcja: 'Zwiększenie powierzchni odpychanej wody podczas wiosłowania nogami',
    korzysc: 'Sprawne pływanie i zdobywanie pokarmu w środowisku wodnym',
    pytanie: 'Do czego służą błony pławne u kaczki?',
    opcje: ['Do lotu', 'Do sprawnego pływania', 'Do kopania nor', 'Do wspinaczki na drzewa'],
    poprawna: 1,
    wyjasnienie: 'Błony pławne zwiększają powierzchnię stopy, dzięki czemu kaczka skuteczniej odpycha wodę podczas pływania — to przystosowanie do środowiska wodnego.',
  });

  register.budowaFunkcja({
    id: 'bf-korzenie-kaktus',
    cecha: 'Płytki, ale bardzo rozległy system korzeniowy kaktusa',
    funkcja: 'Szybkie wchłanianie dużej ilości wody z dużej powierzchni gleby po rzadkich opadach',
    korzysc: 'Roślina może przetrwać długie okresy suszy w środowisku pustynnym',
    pytanie: 'Dlaczego system korzeniowy kaktusa jest bardzo rozległy, choć płytki?',
    opcje: [
      'Aby mocniej zakotwiczyć roślinę w podłożu',
      'Aby szybko wchłonąć jak najwięcej wody z dużej powierzchni po rzadkich opadach',
      'Aby umożliwić rozmnażanie wegetatywne',
      'Aby ograniczyć fotosyntezę',
    ],
    poprawna: 1,
    wyjasnienie: 'Rozległy, płytki system korzeniowy pozwala kaktusowi szybko wchłonąć wodę z dużej powierzchni gleby zaraz po rzadkim, ale intensywnym opadzie deszczu na pustyni.',
  });

  register.budowaFunkcja({
    id: 'bf-dziob-krzyzodziob',
    cecha: 'Skrzyżowany, haczykowaty dziób krzyżodzioba',
    funkcja: 'Precyzyjne wyłuskiwanie nasion spod łusek szyszek',
    korzysc: 'Dostęp do pokarmu (nasion drzew iglastych) niedostępnego dla innych ptaków',
    pytanie: 'Jaką korzyść daje krzyżodziobowi skrzyżowany kształt dzioba?',
    opcje: [
      'Ułatwia pływanie',
      'Pozwala na dostęp do nasion ukrytych pod łuskami szyszek, niedostępnych dla innych ptaków',
      'Zwiększa prędkość lotu',
      'Służy do kopania gniazd w ziemi',
    ],
    poprawna: 1,
    wyjasnienie: 'Skrzyżowany dziób działa jak narzędzie do rozchylania łusek szyszek, dzięki czemu krzyżodziób zdobywa pokarm niedostępny dla ptaków o prostym dziobie — to zmniejsza konkurencję o pokarm.',
  });
})();
