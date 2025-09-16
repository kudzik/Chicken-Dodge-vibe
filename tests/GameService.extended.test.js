import { GameService } from '../src/application/GameService.js';

describe('GameService - Extended Features', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('score feedback system', () => {
    test('should track last score gain', () => {
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.y = 601; // Move off screen
      
      gameService.updateGame();
      
      expect(gameService.lastScoreGain).toBe(10);
    });

    test('should reset score gain when no chickens escape', () => {
      gameService.updateGame();
      expect(gameService.lastScoreGain).toBe(0);
    });

    test('should not give score for inactive chickens', () => {
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.active = false;
      chicken.y = 601;
      
      const initialScore = gameService.player.score;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore);
      expect(gameService.lastScoreGain).toBe(0);
    });
  });

  describe('game state management', () => {
    test('should include lastScoreGain in game state', () => {
      gameService.lastScoreGain = 10;
      const state = gameService.getGameState();
      
      expect(state.lastScoreGain).toBe(10);
    });

    test('should stop updating when game is not running', () => {
      gameService.gameRunning = false;
      gameService.spawnChicken();
      const initialChickens = gameService.chickens.length;
      
      gameService.updateGame();
      
      expect(gameService.chickens.length).toBe(initialChickens);
    });
  });

  describe('collision improvements', () => {
    test('should handle multiple collisions in one frame', () => {
      // Spawn multiple chickens at player position
      gameService.spawnChicken();
      gameService.spawnChicken();
      
      gameService.chickens.forEach(chicken => {
        chicken.x = gameService.player.x;
        chicken.y = gameService.player.y;
      });
      
      const initialLives = gameService.player.lives;
      gameService.updateGame();
      
      // Should lose at least one life
      expect(gameService.player.lives).toBeLessThan(initialLives);
    });
  });
});