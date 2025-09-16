# Chicken Dodge

Casual arcade game gdzie gracz unika spadających kurczaków.

## Opis projektu

**Chicken Dodge** to hyper-casual gra arcade typu endless runner. Gracz steruje postacią, która musi unikać spadających z góry kurczaków, zdobywając punkty za każdego unikniętego przeciwnika.

### Kluczowe funkcje
- Sterowanie klawiaturą (←→) i dotykiem
- 3 typy kurczaków z różnymi zachowaniami
- System punktów, życia i mnożników
- Responsywny UI (desktop + mobile)
- Globalny leaderboard

## Struktura projektu

```
Kurczaki-vibe/
├── src/
│   ├── domain/          # Logika biznesowa, encje
│   ├── application/     # Use cases, serwisy
│   ├── presentation/    # UI, ViewModels (MVVM)
│   └── infrastructure/  # Integracje zewnętrzne
├── docs/               # Dokumentacja techniczna
├── tests/              # Testy jednostkowe
└── assets/             # Grafiki, dźwięki
```

## Technologie

- **Frontend**: Phaser 3 (HTML5/Canvas)
- **Architektura**: Clean Architecture + MVVM
- **Hosting**: Netlify/Vercel
- **Backend**: Firebase (Firestore, Analytics)
- **CI/CD**: GitHub Actions

## Instalacja i uruchomienie

```bash
# Klonowanie repozytorium
git clone <repository-url>
cd Kurczaki-vibe

# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build
```

## Testowanie

```bash
# Uruchomienie testów jednostkowych
npm test

# Testy z pokryciem kodu
npm run test:coverage
```

## Status rozwoju

🚧 **W trakcie rozwoju** - Sprint 1: Podstawowy rdzeń rozgrywki

Zobacz [TODO.md](./TODO.md) dla szczegółów postępu.

## Licencja

MIT License