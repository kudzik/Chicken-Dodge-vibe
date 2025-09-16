import { GameService } from '../src/application/GameService.js';
import { POWER_UP_TYPES } from '../src/domain/PowerUp.js';

describe('Negative Power-ups', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('lose life power-up', () => {
    test('should reduce player lives', () => {
      const initialLives = gameService.player.lives;
      gameService.activatePowerUp(POWER_UP_TYPES.LOSE_LIFE);
      expect(gameService.player.lives).toBe(initialLives - 1);
    });

    test('should end game when lives reach zero', () => {
      gameService.player.lives = 1;
      gameService.activatePowerUp(POWER_UP_TYPES.LOSE_LIFE);
      expect(gameService.gameRunning).toBe(false);
    });
  });

  describe('lose points power-up', () => {
    test('should reduce player score', () => {
      gameService.player.score = 100;
      gameService.activatePowerUp(POWER_UP_TYPES.LOSE_POINTS);
      expect(gameService.player.score).toBe(50);
    });

    test('should not go below zero points', () => {
      gameService.player.score = 30;
      gameService.activatePowerUp(POWER_UP_TYPES.LOSE_POINTS);
      expect(gameService.player.score).toBe(0);
    });
  });

  describe('more chickens power-up', () => {
    test('should spawn additional chickens', () => {
      const initialCount = gameService.chickens.length;
      gameService.activatePowerUp(POWER_UP_TYPES.MORE_CHICKENS);
      expect(gameService.chickens.length).toBe(initialCount + 3);
    });
  });

  describe('slow down power-up', () => {
    test('should activate slow down effect', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SLOW_DOWN);
      expect(gameService.isPlayerSlow()).toBe(true);
    });

    test('should be included in active power-ups', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SLOW_DOWN);
      const state = gameService.getGameState();
      expect(state.activePowerUps).toContain(POWER_UP_TYPES.SLOW_DOWN);
    });
  });

  describe('reverse controls power-up', () => {
    test('should activate reverse controls effect', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      expect(gameService.hasReverseControls()).toBe(true);
    });

    test('should be included in active power-ups', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      const state = gameService.getGameState();
      expect(state.activePowerUps).toContain(POWER_UP_TYPES.REVERSE_CONTROLS);
    });
  });

  describe('power-up spawning balance', () => {
    test('should spawn both positive and negative power-ups', () => {
      const types = new Set();
      for (let i = 0; i < 100; i++) {
        gameService.spawnPowerUp();
        const lastPowerUp = gameService.powerUps[gameService.powerUps.length - 1];
        types.add(lastPowerUp.type);
      }
      
      // Should have both positive and negative types
      const positiveTypes = ['extra_life', 'invincibility', 'double_points', 'speed_boost', 'invisibility'];
      const negativeTypes = ['slow_down', 'reverse_controls', 'lose_points', 'lose_life', 'more_chickens'];
      
      const hasPositive = positiveTypes.some(type => types.has(type));
      const hasNegative = negativeTypes.some(type => types.has(type));
      
      expect(hasPositive).toBe(true);
      expect(hasNegative).toBe(true);
    });
  });
});