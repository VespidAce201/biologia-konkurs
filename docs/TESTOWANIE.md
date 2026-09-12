# Zakres wykonanych testów

Aplikacja została przetestowana ręcznie w przeglądarce (Chromium) w trakcie budowy, iteracyjnie, po każdym większym etapie. Poniżej zakres tego, co zostało zweryfikowane.

## Silnik aplikacji (szkielet)

- Ładowanie wszystkich skryptów pod `file://`/serwerem lokalnym bez błędów konsoli.
- Router (nawigacja hash, parametry, query string, trasa 404).
- Zapis/odczyt `localStorage` (postęp lekcji, wyniki, SRS, gamifikacja, ustawienia) — w tym fallback, gdy `localStorage` jest niedostępny.
- Przełącznik motywu jasny/ciemny/systemowy — sprawdzone wizualnie w obu motywach.
- Menu mobilne (rozwijana nawigacja) — zweryfikowane na viewport 375×812.
- Układ responsywny (grid 4→2→1 kolumny) na desktopie i mobile.

## Treść merytoryczna

- Wszystkie **37 tematów** (Dział I: 17, Dział II: 20) mają komplet 4 plików (diagramy/lekcje/pytania/fiszki) — zweryfikowane programowo (listing katalogów) oraz przez wczytanie w przeglądarce bez błędów i bez ostrzeżeń o duplikatach id.
- Końcowe liczniki po pełnym załadowaniu: 2 działy, 39 tematów, 37 lekcji, **586 pytań**, **391 fiszek**, 61 diagramów, 9 doświadczeń, 17 ćwiczeń analizy danych, 20 ćwiczeń budowa→funkcja, 6 egzaminów.
- Losowo wybrane lekcje z różnych partii treści (m.in. t101, t104-t106, t109, t113-t117, t202-t203, t204-paprociowe/nagonasienne/okrytonasienne, t205-t206-tkanki, t206-pierscienice/stawonogi/mieczaki, t206-plazy/gady/ptaki/ssaki) sprawdzone wizualnie pod kątem poprawności renderowania treści, diagramów i pytań kontrolnych.

## Tryby nauki — pełny przepływ end-to-end

- **Lekcja**: renderowanie sekcji, calloutów („Uważaj na”, „Zapamiętaj różnicę”), pojęć, diagramu, pytań kontrolnych z natychmiastową informacją zwrotną, oznaczanie jako ukończona (+XP).
- **Quiz**: konfiguracja (dział/temat/poziom/liczba pytań), przetestowane wszystkie typy pytań w praktyce (single, truefalse, multiple, matching, gapfill, ordering — w tym poprawne liczenie częściowej punktacji), podsumowanie z zapisem wyniku i aktualizacją postępu tematu.
- **Fiszki**: flip karty, ocena (nie umiem/trudne/umiem), aktualizacja stanu SRS, ekran końca sesji.
- **Doświadczenia**: pełny scenariusz 8-krokowy (problem badawczy → hipoteza → zmienna → próba kontrolna → przewidywanie → analiza tabeli → wniosek → znajdź błąd), w tym poprawne renderowanie wbudowanej tabeli wyników.
- **Analiza danych**: zakładki (wszystkie/wykresy/tabele/diagramy/dane liczbowe), renderowanie wykresu liniowego/słupkowego oraz customowego diagramu SVG (sieć pokarmowa) bez błędów.
- **Budowa→funkcja**: łańcuch cecha→funkcja→korzyść z ujawnianiem po odpowiedzi.
- **Egzamin/symulacja konkursu**: timer z odliczaniem i zmianą koloru, siatka nawigacji pytań, oznaczanie flagą, przechodzenie między pytaniami z zachowaniem odpowiedzi, modal potwierdzenia zakończenia, ekran wyników z analizą działów i rekomendacją, zapis błędnych odpowiedzi do kolejki powtórek. **Zweryfikowano, że symulacja konkursu poprawnie sumuje się do dokładnie 40 punktów** (23 pytania, wyświetlone „X / 40 pkt” po zakończeniu).
- **Powtórka błędów**: pytania z niepoprawnie rozwiązanych quizów/egzaminów poprawnie trafiają do kolejki i są dostępne z poziomu strony quizu.
- **Statystyki**: agregacja postępu ogólnego i per dział, wykres nauki z ostatnich 7 dni, lista słabych/mocnych tematów, historia egzaminów — sprawdzone z rzeczywistymi danymi z sesji testowej.
- **Osiągnięcia**: poziom/XP, cele dzienne/tygodniowe, siatka odznak z poprawnym odblokowywaniem (sprawdzone m.in. „Pierwszy krok”, „Pierwszy quiz”, „Pierwszy egzamin”).

## PWA i publikacja jako strona internetowa

- Zweryfikowano: manifest (`manifest.webmanifest`) poprawnie się ładuje, wszystkie ikony (`assets/icons/*.png`, 5 rozmiarów) generują się poprawnie i wyglądają czytelnie.
- Zweryfikowano: `index.html` poprawnie linkuje manifest, ikony i rejestruje `sw.js`; aplikacja działa normalnie także wtedy, gdy rejestracja service workera się nie powiedzie (błąd jest łapany i tylko logowany do konsoli, nic w UI się nie psuje).
- Aplikacja opublikowana na GitHub Pages pod `https://vespidace201.github.io/biologia-konkurs/` — **zweryfikowano na żywo**: strona ładuje się poprawnie (wszystkie 208 zasobów statycznych zwraca 200, licznik treści zgadza się z lokalną wersją: 391 fiszek, pełna nawigacja hash-routingu), instalacja i test wykonany bezpośrednio na prawdziwym telefonie użytkownika (nie tylko w sandboxie) potwierdziły poprawne działanie, w tym poprawkę wyśrodkowania ikony menu mobilnego w Safari na iOS.
- Lokalny serwer (`uruchom-serwer.ps1`) do trybu offline-only nadal nasłuchuje na wszystkich interfejsach sieciowych (surowe gniazda TCP, bez wymogu uprawnień administratora) — pozostaje jako alternatywa dla osób chcących używać aplikacji bez żadnego dostępu do internetu.
- Wcześniejszy eksperyment z automatyczną synchronizacją postępu między urządzeniami przez lokalny serwer (`/api/state`) został **wycofany** na prośbę użytkownika po przejściu na model „strona internetowa" — każde urządzenie/przeglądarka trzyma teraz swój postęp niezależnie w `localStorage`, zgodnie z wybraną opcją „prosta strona statyczna, bez synchronizacji".

## Znane ograniczenia testowania

- Brak automatycznych testów jednostkowych (środowisko nie ma Node.js/npm, więc nie użyto frameworka testowego typu Jest) — całość zweryfikowano manualnie w przeglądarce, obejmując wszystkie kluczowe ścieżki użytkownika.
- Testy wykonywano w jednej przeglądarce (Chromium w sandboxie). Zalecana dodatkowa weryfikacja w Firefoksie przed szerszym wdrożeniem, choć kod nie używa żadnych API specyficznych dla jednej przeglądarki.
