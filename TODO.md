# Sprint 1: Podstawowy rdzeń rozgrywki i środowisko

## Faza 1: Przygotowanie środowiska i architektury

- [x] ✍️ Skonfigurować repozytorium Git z podstawowym README  
  ✅ Repozytorium dostępne, README zawiera opis projektu i strukturę  
  ⏱️ ~1h

- [x] ✍️ Ustalić szkielet aplikacji z Phaser 3
  ✅ Aplikacja uruchamia się z pustym ekranem i poprawnym buildem  
  ⏱️ ~3h

- [x] ✍️ Implementować strukturę projektu zgodnie z architekturą MVVM i Clean Architecture  
  ✅ Moduły/domain, aplikacji i prezentacji utworzone, wstępna komunikacja działa  
  ⏱️ ~4h

## Faza 2: Podstawowy gameplay - sterowanie i podstawowy widok

- [x] ✍️ Zaimplementować sterowanie postacią (klawisze ← → i dotyk)  
  ✅ Sterowanie przesuwa postać płynnie w lewo i prawo zarówno na desktop, jak i mobile  
  ⏱️ ~3h

- [x] ✍️ Wyświetlić prostą postać kurczaka (placeholder) na scenie  
  ✅ Kurczak widoczny na ekranie, statyczny  
  ⏱️ ~2h

- [x] ✍️ Zaimplementować mechanizm spadania kurczaka z góry ekranu  
  ✅ Kurczak spada z losowej pozycji z góry ekranu, powtarzalny ruch  
  ⏱️ ~4h

- [x] ✍️ Podstawowa detekcja kolizji postaci i kurczaka (śmierć na 1 trafienie)  
  ✅ Trafienie kurczakiem powoduje utratę życia i zatrzymanie ruchu kurczaka  
  ⏱️ ~3h

## Faza 3: Punkty i życie, UI podstawowe (HUD)

- [x] ✍️ Wyświetlanie aktualnej liczby punktów i życia na ekranie (HUD)  
  ✅ HUD aktualizuje się zgodnie z punktami i życiami  
  ⏱️ ~2h

- [x] ✍️ Naliczanie punktów za uniknięcie kurczaka (po opuszczeniu ekranu)  
  ✅ Punkty rosną po każdorazowym uniknięciu kurczaka  
  ⏱️ ~3h

## Faza 4: Testy i dokumentacja

- [x] ✍️ Napisać pierwsze testy jednostkowe dla logiki punktów i życia  
  ✅ Testy wykonują się bez błędów i pokrywają podstawową logikę  
  ⏱️ ~3h

- [x] ✍️ Dokumentacja podstawowa architektury i instrukcja uruchomienia  
  ✅ Dokumentacja dostępna w repozytorium i zweryfikowana przez lidera  
  ⏱️ ~2h

***

Sprint 2: Rozszerzenie mechaniki kurczaków, mnożnik i życie

## Faza 1: Rozszerzenie mechaniki kurczaków

- [x] ✍️ Zaimplementować spadającego kurczaka szybkiego (z przyspieszeniem w locie)  
  ✅ Kurczak pojawia się i przyspiesza podczas spadania, widoczny efekt animacji przyspieszenia  
  ⏱️ ~4h

- [x] ✍️ Zaimplementować kurczaka chaotycznego (zmieniającego kierunek lotu w trakcie spadania)  
  ✅ Kurczak zmienia losowo kierunek spadania, zachowanie jest rozpoznawalne i płynne  
  ⏱️ ~4h

- [x] ✍️ Zaimplementować kurczaka mutant (zmieniającego rozmiar w locie)  
  ✅ Kurczak zmienia rozmiar podczas spadania, zmiana jest płynna i zauważalna przez gracza  
  ⏱️ ~4h

## Faza 2: Mnożnik punktów i mechanika życia

- [x] ✍️ Dodać licznik serii uników dla mnożnika punktów  
  ✅ Mnożnik rośnie z każdym kolejnym unikniętym kurczakiem, jest resetowany przy trafieniu  
  ⏱️ ~3h

## Sprint 3: Power-upy, system skórek i podstawowa monetizacja

### Faza 1: Power-upy i ich efekty

- [x] ✍️ Zaimplementować pozytywne power-up  
  - dodatkowe życie  
  - chwilowa niesmiertelność
  - podwójne punkty
  - szybsze ruchy postaci
  - niewidzialność
  ✅ Power-upy są różnorodne i mają unikalne ikony  
  ✅ Power-up pojawia się losowo, aktywuje efekt i znika po 5 sekundach lub podczas kolizji
⏱️ ~4h

### Faza 2: Power-upy i ich efekty

- [ ] ✍️ Zaimplementować negatywne power-up
  - spowolnienie ruchów postaci
  - odwrotne sterowanie
  - utrata punktów
  - utrata życia
  - zwiększona liczba spadających kurczaków
  ✅ Power-upy są różnorodne i mają unikalne ikony  
  ✅ Power-up pojawia się losowo, aktywuje efekt i znika po 5 sekundach lub podczas kolizji
  ⏱️ ~4h

### Faza 3: Power-upy i ich efekty

- [ ] ✍️ Dodać logikę aktywacji i dezaktywacji power-upów wraz z efektami wizualnymi  
  ✅ Po aktywacji power-up wpływa na rozgrywkę przez zaplanowany czas, efekt jest widoczny  
  ⏱️ ~3h

### Faza 4: System skórek postaci i kurczaków

- [ ] ✍️ Utworzyć mechanizm odblokowywania i wyboru skórki (minimum 3 skórki)  
  ✅ Użytkownik może wybrać skórkę w menu, zmiana widoczna w grze  
  ⏱️ ~4h

- [ ] ✍️ Zaimplementować wyświetlanie aktualnej skórki na postaci i kurczakach w grze  
  ✅ Skórki prawidłowo wyświetlane i zmieniane dynamicznie  
  ⏱️ ~3h

### Faza 3: Podstawowa monetizacja – reklamy rewardowane

- [ ] ✍️ Zintegrować system nagród reklamowych rewarded video (np. usługa AdMob lub inny provider)  
  ✅ Reklama wyświetla się poprawnie i nagradza użytkownika (np. dodatkowym życiem)  
  ⏱️ ~4h

- [ ] ✍️ Dodanie UI do aktywacji reklamy i obserwacji statusu nagrody  
  ✅ UI przyjazne, komunikuje możliwość obejrzenia reklamy oraz efekt po jej zakończeniu  
  ⏱️ ~2h

### Faza 4: Testy i dokumentacja

- [ ] ✍️ Napisać testy jednostkowe pokrywające logikę power-upów i wyboru skórek  
  ✅ Testy wykonują się poprawnie i pokrywają scenariusze aktywacji i zmiany skórek  
  ⏱️ ~3h

- [ ] ✍️ Uaktualnić dokumentację techniczną o opis nowych funkcji i integracji reklam  
  ✅ Dokumentacja dostępna i zweryfikowana przez zespół  
  ⏱️ ~2h

---

**Szacowany czas sprintu:** ~25h
