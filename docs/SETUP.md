# Instrukcja uruchomienia

## Wymagania

- Node.js 18+ 
- npm 9+

## Instalacja

```bash
# Klonowanie repozytorium
git clone <repository-url>
cd Kurczaki-vibe

# Instalacja zależności
npm install
```

## Uruchomienie

### Development

```bash
npm run dev
```
Gra dostępna na: http://localhost:3000

### Build produkcyjny

```bash
npm run build
```
Pliki w folderze `dist/`

### Testy

```bash
npm test                # Uruchomienie testów
npm run test:coverage   # Testy z pokryciem kodu
```

## Struktura projektu

```
src/
├── domain/          # Encje biznesowe
├── application/     # Logika aplikacji
├── presentation/    # UI i ViewModels
└── infrastructure/  # Integracje zewnętrzne

tests/               # Testy jednostkowe
docs/               # Dokumentacja
```

## Sterowanie

- **Desktop**: Strzałki ←→ lub A/D
- **Mobile**: Dotyk lewej/prawej strony ekranu

## Mechanika gry

- Unikaj spadających kurczaków
- +10 punktów za uniknięcie
- 3 życia na start
- Game Over przy 0 życiach