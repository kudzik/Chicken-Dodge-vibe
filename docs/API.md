# API Documentation

## Domain Classes

### Player

```javascript
class Player {
  constructor(x = 400, y = 550)
  move(direction, speedBoost, slowDown) // Ruch z efektami power-upów
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

### PowerUp

```javascript
class PowerUp {
  constructor(x, y, type)
  update()             // Ruch w dół
  isOffScreen()        // Sprawdza czy poza ekranem
  checkCollision(player) // Sprawdza kolizję
}

// Typy power-upów:
POWER_UP_TYPES = {
  // Pozytywne (biała ramka)
  EXTRA_LIFE: 'extra_life',
  INVINCIBILITY: 'invincibility',
  DOUBLE_POINTS: 'double_points', 
  SPEED_BOOST: 'speed_boost',
  INVISIBILITY: 'invisibility',
  // Negatywne (czarna ramka)
  SLOW_DOWN: 'slow_down',
  REVERSE_CONTROLS: 'reverse_controls',
  LOSE_POINTS: 'lose_points',
  LOSE_LIFE: 'lose_life',
  MORE_CHICKENS: 'more_chickens'
}
```

## Application Services

### GameService

```javascript
class GameService {
  spawnChicken()       // Tworzy nowego kurczaka (losowy typ)
  spawnPowerUp()       // Tworzy nowy power-up (70% pozytywny, 30% negatywny)
  updateGame()         // Główna pętla gry z mnożnikiem i power-upami
  getGameState()       // Zwraca stan gry + mnożnik + power-upy
  activatePowerUp(type) // Aktywuje efekt power-upu
  
  // Właściwości:
  streakCount          // Licznik serii uników
  multiplier           // Mnożnik punktów (1-5)
  lastScoreGain        // Ostatnio zdobyte punkty
  powerUps             // Lista aktywnych power-upów
  activePowerUps       // Mapa aktywnych efektów
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