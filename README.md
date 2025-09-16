# Chicken Dodge

[Chat](https://www.perplexity.ai/search/product-requirements-document-5QH0DyNjQQ.YZB50aTXbQQ)

Casual arcade game gdzie gracz unika spadających kurczaków.

## Opis projektu

**Chicken Dodge** to hyper-casual gra arcade typu endless runner. Gracz steruje postacią, która musi unikać spadających z góry kurczaków, zdobywając punkty za każdego unikniętego przeciwnika.

### Kluczowe funkcje

- Sterowanie klawiaturą (←→) i dotykiem
- 4 typy kurczaków z różnymi zachowaniami
- System punktów, życia i mnożników (do x5)
- 10 typów power-upów (5 pozytywnych + 5 negatywnych)
- Efekty wizualne i dźwiękowe
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

✅ **Sprint 1 ukończony** - Podstawowy rdzeń rozgrywki  
✅ **Sprint 2 ukończony** - Różne typy kurczaków i mnożnik punktów  
🚧 **Sprint 3 w toku** - System power-upów (3/4 fazy ukończone)

Zobacz [TODO.md](./TODO.md) dla szczegółów postępu.

## Dokumentacja

- [Architektura](./docs/ARCHITECTURE.md) - Opis architektury systemu
- [Mechaniki gry](./docs/MECHANICS.md) - Szczegółowy opis mechanik
- [Instrukcja uruchomienia](./docs/SETUP.md) - Jak uruchomić projekt
- [API](./docs/API.md) - Dokumentacja klas i metod

## Licencja

MIT License
