import { GameService } from '../src/application/GameService.js';

describe('Multiplier System', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('streak counting', () => {
    test('should start with no streak', () => {
      expect(gameService.streakCount).toBe(0);
      expect(gameService.multiplier).toBe(1);
    });

    test('should increase streak when chicken escapes', () => {
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.y = 601; // Move off screen
      
      gameService.updateGame();
      
      expect(gameService.streakCount).toBe(1);
    });

    test('should reset streak on collision', () => {
      gameService.streakCount = 5;
      gameService.multiplier = 2;
      
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      gameService.updateGame();
      
      expect(gameService.streakCount).toBe(0);
      expect(gameService.multiplier).toBe(1);
    });
  });

  describe('multiplier calculation', () => {
    test('should increase multiplier every 3 streaks', () => {
      // Simulate 3 escapes
      for (let i = 0; i < 3; i++) {
        gameService.spawnChicken();
        const lastChicken = gameService.chickens[gameService.chickens.length - 1];
        lastChicken.y = 601;
        gameService.updateGame();
      }
      
      expect(gameService.streakCount).toBe(3);
      expect(gameService.multiplier).toBe(2);
    });

    test('should cap multiplier at 5x', () => {
      // Simulate 15 escapes (should give 5x multiplier)
      for (let i = 0; i < 15; i++) {
        gameService.spawnChicken();
        const lastChicken = gameService.chickens[gameService.chickens.length - 1];
        lastChicken.y = 601;
        gameService.updateGame();
      }
      
      expect(gameService.multiplier).toBe(5);
    });

    test('should apply multiplier to score', () => {
      const initialScore = gameService.player.score;
      
      // Get to 2x multiplier (3 streaks)
      for (let i = 0; i < 3; i++) {
        gameService.spawnChicken();
        const lastChicken = gameService.chickens[gameService.chickens.length - 1];
        lastChicken.y = 601;
        gameService.updateGame();
      }
      
      // Next escape should give 20 points (10 * 2x)
      gameService.spawnChicken();
      const lastChicken = gameService.chickens[gameService.chickens.length - 1];
      lastChicken.y = 601;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore + 10 + 10 + 20 + 20);
    });
  });

  describe('game state', () => {
    test('should include multiplier data in game state', () => {
      gameService.streakCount = 5;
      gameService.multiplier = 2;
      
      const state = gameService.getGameState();
      
      expect(state.streakCount).toBe(5);
      expect(state.multiplier).toBe(2);
    });
  });
});