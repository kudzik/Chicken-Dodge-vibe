# Architektura Chicken Dodge

## Przegląd

Chicken Dodge wykorzystuje **Clean Architecture** z wzorcem **MVVM** na warstwie prezentacji.

## Warstwy

### Domain Layer (`src/domain/`)
**Encje biznesowe i logika domeny**

- `Player.js` - Encja gracza (pozycja, życia, punkty, ruch)
- `Chicken.js` - Encja kurczaka (spadanie, kolizje)

### Application Layer (`src/application/`)
**Use cases i serwisy aplikacji**

- `GameService.js` - Główna logika gry (spawning, kolizje, punkty)

### Presentation Layer (`src/presentation/`)
**MVVM - Model-View-ViewModel**

- `GameView.js` - Widok (renderowanie Phaser 3)
- `GameViewModel.js` - ViewModel (łączy logikę z widokiem)

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