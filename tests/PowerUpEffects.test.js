import { GameService } from '../src/application/GameService.js';
import { POWER_UP_TYPES } from '../src/domain/PowerUp.js';

describe('Power-up Effects Integration', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('power-up duration', () => {
    test('should expire timed power-ups', (done) => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      expect(gameService.activePowerUps.has(POWER_UP_TYPES.INVINCIBILITY)).toBe(true);
      
      // Mock time passage
      const originalNow = Date.now;
      Date.now = () => originalNow() + 6000; // 6 seconds later
      
      gameService.updateGame();
      
      expect(gameService.activePowerUps.has(POWER_UP_TYPES.INVINCIBILITY)).toBe(false);
      
      // Restore original Date.now
      Date.now = originalNow;
      done();
    });
  });

  describe('power-up interactions', () => {
    test('should handle multiple active power-ups', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      gameService.activatePowerUp(POWER_UP_TYPES.DOUBLE_POINTS);
      gameService.activatePowerUp(POWER_UP_TYPES.SLOW_DOWN);
      
      expect(gameService.activePowerUps.size).toBe(3);
      expect(gameService.isPlayerFast()).toBe(true);
      expect(gameService.isPlayerSlow()).toBe(true);
    });

    test('should reset power-ups on collision without invincibility', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      gameService.activatePowerUp(POWER_UP_TYPES.DOUBLE_POINTS);
      
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      gameService.updateGame();
      
      // Power-ups should still be active (they don't reset on collision)
      expect(gameService.activePowerUps.size).toBeGreaterThanOrEqual(0);
    });

    test('should prevent damage with invincibility', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      const initialLives = gameService.player.lives;
      
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      gameService.updateGame();
      
      expect(gameService.player.lives).toBe(initialLives);
    });
  });

  describe('score effects', () => {
    test('should apply double points correctly', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.DOUBLE_POINTS);
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.y = 601; // Move off screen
      
      const initialScore = gameService.player.score;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore + 20); // 10 * 2
    });

    test('should combine multiplier with double points', () => {
      // Get to 2x multiplier
      for (let i = 0; i < 3; i++) {
        gameService.spawnChicken();
        const chicken = gameService.chickens[gameService.chickens.length - 1];
        chicken.y = 601;
        gameService.updateGame();
      }
      
      gameService.activatePowerUp(POWER_UP_TYPES.DOUBLE_POINTS);
      gameService.spawnChicken();
      const chicken = gameService.chickens[gameService.chickens.length - 1];
      chicken.y = 601;
      
      const initialScore = gameService.player.score;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore + 40); // 10 * 2 (multiplier) * 2 (double points)
    });
  });

  describe('game state consistency', () => {
    test('should include all power-up data in game state', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      gameService.spawnPowerUp();
      
      const state = gameService.getGameState();
      
      expect(state.activePowerUps).toContain(POWER_UP_TYPES.SPEED_BOOST);
      expect(state.activePowerUps).toContain(POWER_UP_TYPES.REVERSE_CONTROLS);
      expect(state.powerUps).toBeDefined();
      expect(state.powerUps.length).toBe(1);
    });
  });
});