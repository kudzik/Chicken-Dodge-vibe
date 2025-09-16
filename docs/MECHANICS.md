# Mechaniki Gry - Chicken Dodge

## Typy Kurczaków

### Normal Chicken (Pomarańczowy)
- **Prawdopodobieństwo**: 40%
- **Zachowanie**: Standardowe spadanie z stałą prędkością
- **Prędkość**: 3 piksele/klatkę
- **Rozmiar**: 30x30px (stały)

### Fast Chicken (Czerwony)
- **Prawdopodobieństwo**: 20%
- **Zachowanie**: Przyspiesza podczas spadania
- **Prędkość początkowa**: 3 piksele/klatkę
- **Przyspieszenie**: 0.1 piksele/klatkę²
- **Maksymalna prędkość**: 8 pikseli/klatkę
- **Rozmiar**: 30x30px (stały)

### Chaotic Chicken (Fioletowy)
- **Prawdopodobieństwo**: 20%
- **Zachowanie**: Zmienia kierunek poziomy podczas spadania
- **Prędkość pionowa**: 3 piksele/klatkę (stała)
- **Prędkość pozioma**: -2 do +2 pikseli/klatkę (losowa)
- **Zmiana kierunku**: co 30-90 klatek
- **Rozmiar**: 30x30px (stały)

### Mutant Chicken (Zielony)
- **Prawdopodobieństwo**: 20%
- **Zachowanie**: Zmienia rozmiar podczas spadania
- **Prędkość**: 3 piksele/klatkę (stała)
- **Rozmiar**: 15-45px (cyklicznie)
- **Zmiana rozmiaru**: co 45 klatek
- **Kolizje**: Dostosowane do aktualnego rozmiaru

## System Punktów i Mnożnika

### Podstawowe Punkty
- **Za uniknięcie kurczaka**: 10 punktów bazowych
- **Mnożnik**: x1 do x5
- **Finalne punkty**: bazowe × mnożnik

### Mechanika Mnożnika
- **Licznik serii**: Liczba kolejnych unikniętych kurczaków
- **Wzrost mnożnika**: Co 3 uniknięte kurczaki
- **Maksymalny mnożnik**: x5 (po 12+ unikach)
- **Reset**: Przy każdym trafieniu

### Przykłady
- 0-2 uniki: x1 (10 punktów)
- 3-5 uników: x2 (20 punktów)
- 6-8 uników: x3 (30 punktów)
- 9-11 uników: x4 (40 punktów)
- 12+ uników: x5 (50 punktów)

## System Życia

### Podstawowe Zasady
- **Życia startowe**: 3
- **Utrata życia**: Przy kolizji z kurczakiem
- **Game Over**: Gdy życia = 0
- **Wizualizacja**: Serca w HUD (❤♡)

### Mechanika Kolizji
- **Obszar kolizji**: 35 pikseli dla normalnych kurczaków
- **Mutant kurczaki**: Kolizja dostosowana do rozmiaru
- **Efekt trafienia**: Kurczak staje się nieaktywny

## HUD (Head-Up Display)

### Elementy
- **Score**: Aktualne punkty gracza
- **Lives**: Wizualne serca (❤❤❤)
- **Multiplier**: "x2 (6)" - mnożnik i liczba serii
- **Tło**: Półprzezroczyste dla czytelności

### Kolory
- **Score**: Biały z czarnym obramowaniem
- **Lives**: Czerwony dla pełnych, szary dla pustych
- **Multiplier**: Żółty dla x1, zielony dla wyższych

## Sterowanie

### Desktop
- **Strzałki**: ← → lub A/D
- **Ruch**: Płynny z ograniczeniami granic

### Mobile
- **Dotyk**: Lewa/prawa strona ekranu
- **Responsywność**: Dostosowane do różnych rozmiarów

## Spawning Kurczaków

### Częstotliwość
- **Interwał**: Co 1.5 sekundy
- **Pozycja X**: Losowa (50-750px)
- **Pozycja Y**: -30px (powyżej ekranu)

### Rozkład Prawdopodobieństwa
- 40% Normal, 20% Fast, 20% Chaotic, 20% Mutant
- Zapewnia zróżnicowaną rozgrywkę
- Wszystkie typy mogą pojawić się w każdej chwili