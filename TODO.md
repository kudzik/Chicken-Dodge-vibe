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

- [ ] ✍️ Zaimplementować kurczaka chaotycznego (zmieniającego kierunek lotu w trakcie spadania)  
  ✅ Kurczak zmienia losowo kierunek spadania, zachowanie jest rozpoznawalne i płynne  
  ⏱️ ~4h

- [ ] ✍️ Zaimplementować kurczaka mutant (zmieniającego rozmiar w locie)  
  ✅ Kurczak zmienia rozmiar podczas spadania, zmiana jest płynna i zauważalna przez gracza  
  ⏱️ ~4h

## Faza 2: Mnożnik punktów i mechanika życia

- [ ] ✍️ Dodać licznik serii uników dla mnożnika punktów  
  ✅ Mnożnik rośnie z każdym kolejnym unikniętym kurczakiem, jest resetowany przy trafieniu  
  ⏱️ ~3h

- [ ] ✍️ Ulepszyć logikę utraty życia i game over  
  ✅ Postać ma 3 życia na start, utrata życia przy trafieniu, wyświetlenie komunikatu game over przy zerze życia  
  ⏱️ ~3h

## Faza 3: Aktualizacja HUD i UI

- [ ] ✍️ Rozszerzyć HUD o wyświetlanie mnożnika punktów i aktualnych żyć  
  ✅ HUD pokazuje aktualne punkty, życia i mnożnik w czasie rzeczywistym  
  ⏱️ ~2h

## Faza 4: Testy i dokumentacja

- [ ] ✍️ Napisać testy jednostkowe dla nowej logiki kurczaków, mnożnika i życia  
  ✅ Testy pokrywają zachowania wszystkich typów kurczaków oraz mechaniki mnożnika i życia  
  ⏱️ ~3h

- [ ] ✍️ Zaktualizować dokumentację techniczną opisując nowe mechaniki  
  ✅ Dokumentacja dostępna i zatwierdzona na repozytorium  
  ⏱️ ~2h

---
