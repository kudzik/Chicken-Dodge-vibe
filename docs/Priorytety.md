
## Must-have

| Funkcja / Wymaganie                             | Kryteria sukcesu                                                          | Metody testowalności / weryfikacji   |
| ----------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------ |
| Core gameplay (unikaj kurczaków)                | Responsywne sterowanie; punkty za uniknięcie; utrata życia przy trafieniu | Test manualny gry; testy jednostkowe |
| 3 typy kurczaków (szybki, chaotyczny, mutant)   | Każdy typ pojawia się i ma unikalne zachowanie                            | Obserwacja rozgrywki; testy zachowań |
| Punkty, życie, mnożnik                          | Pokazywanie i poprawne działanie punktów, liczby żyć i mnożnika           | Testy jednostkowe; weryfikacja HUD   |
| Sterowanie klawiatura i dotyk                   | Klawisze i dotyk przesuwają postać na boki                                | Testy manualne wejść                 |
| Podstawowy HUD (punkty, życie, mnożnik)         | HUD poprawnie wyświetla dane                                              | Inspekcja UI                         |
| Model free-to-play z reklamami rewardowanymi    | Reklamy uruchamiają się poprawnie; przyznawanie życia po reklamie         | Test integracji reklam               |
| Globalna tabela wyników                         | Wyniki aktualizują się i zapisywane                                       | Test funkcjonalny leaderboarda       |
| Responsywny UI na mobile i desktop              | UI dopasowuje się do różnych ekranów; działa dotyk i klawiatura           | Test responsywności UI               |
| Testy jednostkowe logiki gry                    | Pokrycie testami scoringu, życia, mnożnika                                | Raporty pokrycia testów              |
| Testy wydajności 60fps                          | Gra działa płynnie (60fps) na docelowych urządzeniach                     | Benchmarki wydajności                |
| Mobile QA na Android Chrome i iOS Safari        | Gra działająca poprawnie na mobilnych przeglądarkach                      | Testy na urządzeniach mobilnych      |
| Integracja analityki (Firebase + GameAnalytics) | Zdarzenia gry wysyłane do systemów analitycznych                          | Weryfikacja śledzenia zdarzeń        |

## Should-have

| Funkcja / Wymaganie                                                | Kryteria sukcesu                                  | Metody testowalności / weryfikacji    |
| ------------------------------------------------------------------ | ------------------------------------------------- | ------------------------------------- |
| Skórki dla postaci i kurczaków (min. 3)                            | Skórki odblokowują się i poprawnie wyświetlają    | Testy odblokowywania i wizualne       |
| Power-upy i boosty                                                 | Power-upy działają i wpływają na rozgrywkę        | Obserwacja działania power-upów       |
| Humorystyczna mini fabuła / cut-scenki                             | Cut-scenki odtwarzają się poprawnie               | Testy odtwarzania cut-scenek          |
| System daily rewards                                               | Nagrody przyznawane prawidłowo codziennie         | Testy logowania i przyznawania nagród |
| Interstitial ads co 2-3 min                                        | Reklamy pojawiają się w ustalonych czasach        | Testy czasów pojawiania się reklam    |
| Dodatkowe animacje i efekty dźwiękowe (combo, trafienie, power-up) | Animacje i dźwięki pojawiają się przy zdarzeniach | Testy wizualne i dźwiękowe            |
| Tryb wysokiego kontrastu (accessibility)                           | UI przełącza się na tryb wysokiego kontrastu      | Testy przełączania trybu              |
| Retention hooks (tygodniowe resetowanie leaderboarda)              | Reset działa według harmonogramu                  | Weryfikacja resetu leaderboarda       |

## Could-have

| Funkcja / Wymaganie                             | Kryteria sukcesu                          | Metody testowalności / weryfikacji |
| ----------------------------------------------- | ----------------------------------------- | ---------------------------------- |
| Eventowe aktualizacje contentu (skórki, eventy) | Nowa zawartość dostępna                   | Kontrola cykli aktualizacji        |
| Lokalna tabela wyników                          | Lokalny leaderboard działa poprawnie      | Testy funkcjonalne                 |
| Viral/social sharing (zdjęcia wyników)          | Udostępnianie zdjęć działa na platformach | Testy funkcji udostępniania        |
| Alternatywny silnik (Unity WebGL)               | Gra buduje się i działa w Unity WebGL     | Testy kompilacji i uruchamiania    |
| Dodatkowe power-upy i zwroty w mechanice        | Nowe power-upy działają i są zbalansowane | Testy rozgrywki i balansu          |
| Eventy czasowe                                  | Eventy mają działające timery i nagrody   | Testy logiki eventów               |

## Won't-have

| Funkcja / Wymaganie             | Kryteria sukcesu           | Metody testowalności / weryfikacji     |
| ------------------------------- | -------------------------- | -------------------------------------- |
| Paywalle blokujące progresję    | Brak blokad paywall w grze | Testowanie pełnego przebiegu rozgrywki |
| Złożona fabuła lub elementy RPG | Brak skomplikowanej fabuły | Przegląd zakresu contentu              |
| Wsparcie VR/AR                  | Brak funkcji VR/AR         | Potwierdzenie braku funkcji            |
| Tryb offline                    | Brak trybu offline         | Potwierdzenie braku trybu offline      |
