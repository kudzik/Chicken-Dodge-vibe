# Architektura Chicken Dodge

## Przegląd

Chicken Dodge wykorzystuje **Clean Architecture** z wzorcem **MVVM** na warstwie prezentacji.

## Warstwy

### Domain Layer (`src/domain/`)

**Encje biznesowe i logika domeny**

- `Player.js` - Encja gracza (pozycja, życia, punkty, ruch)
- `Chicken.js` - Podstawowy kurczak (spadanie, kolizje)
- `FastChicken.js` - Kurczak z przyspieszeniem
- `ChaoticChicken.js` - Kurczak z chaotycznym ruchem
- `MutantChicken.js` - Kurczak zmieniający rozmiar
- `PowerUp.js` - System power-upów (10 typów efektów)

### Application Layer (`src/application/`)

**Use cases i serwisy aplikacji**

- `GameService.js` - Główna logika gry (spawning, kolizje, punkty, mnożnik, power-upy)

### Presentation Layer (`src/presentation/`)

**MVVM - Model-View-ViewModel**

- `GameView.js` - Widok (renderowanie Phaser 3, HUD, power-upy, efekty)
- `GameViewModel.js` - ViewModel (łączy logikę z widokiem, obsługa power-upów)

### Infrastructure Layer (`src/infrastructure/`)

**Integracje zewnętrzne**

- `InputHandler.js` - Obsługa wejścia (klawiatura, dotyk)

## Przepływ danych

```
InputHandler → GameViewModel → GameService → GameView
     ↑                                          ↓
     └──────────── User Input ←─────────────────┘
```

## Kluczowe wzorce

- **Dependency Injection** - Wstrzykiwanie zależności
- **Observer Pattern** - ViewModel obserwuje GameService
- **Strategy Pattern** - Różne typy kurczaków
- **Single Responsibility** - Każda klasa ma jedną odpowiedzialność