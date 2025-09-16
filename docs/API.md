# API Documentation

## Domain Classes

### Player

```javascript
class Player {
  constructor(x = 400, y = 550)
  move(direction)      // -1 lewo, 1 prawo
  takeDamage()         // Zwraca true jeśli żyje
  addScore(points)     // Dodaje punkty
}
```

### Chicken

```javascript
class Chicken {
  constructor(x, y = -30)
  update()             // Ruch w dół
  isOffScreen()        // Sprawdza czy poza ekranem
  checkCollision(player) // Sprawdza kolizję
}
```

### FastChicken

```javascript
class FastChicken extends Chicken {
  constructor(x, y = -30)
  update()             // Ruch z przyspieszeniem
  // Dziedziczy: isOffScreen(), checkCollision()
}
```

### ChaoticChicken

```javascript
class ChaoticChicken extends Chicken {
  constructor(x, y = -30)
  update()             // Ruch chaotyczny poziomo
  // Dziedziczy: isOffScreen(), checkCollision()
}
```

### MutantChicken

```javascript
class MutantChicken extends Chicken {
  constructor(x, y = -30)
  update()             // Ruch z mutacją rozmiaru
  checkCollision(player) // Kolizja dostosowana do rozmiaru
}
```

## Application Services

### GameService

```javascript
class GameService {
  spawnChicken()       // Tworzy nowego kurczaka (losowy typ)
  updateGame()         // Główna pętla gry z mnożnikiem
  getGameState()       // Zwraca stan gry + mnożnik
  
  // Właściwości:
  streakCount          // Licznik serii uników
  multiplier           // Mnożnik punktów (1-5)
  lastScoreGain        // Ostatnio zdobyte punkty
}
```

## Presentation Layer

### GameViewModel

```javascript
class GameViewModel {
  handleInput(direction) // Obsługuje wejście
  update()              // Aktualizuje grę i widok
  spawnChicken()        // Deleguje do GameService
}
```

### GameView

```javascript
class GameView {
  create()             // Tworzy elementy UI
  render(gameState)    // Renderuje stan gry
}
```

## Infrastructure

### InputHandler

```javascript
class InputHandler {
  setupInput()         // Konfiguruje wejście
  update()            // Sprawdza stan klawiszy
}
```