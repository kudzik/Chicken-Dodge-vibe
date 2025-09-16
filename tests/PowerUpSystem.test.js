import { GameService } from '../src/application/GameService.js';
import { POWER_UP_TYPES } from '../src/domain/PowerUp.js';

describe('PowerUp System', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('power-up spawning', () => {
    test('should spawn power-up', () => {
      gameService.spawnPowerUp();
      expect(gameService.powerUps.length).toBe(1);
      expect(gameService.powerUps[0].x).toBeGreaterThanOrEqual(50);
      expect(gameService.powerUps[0].x).toBeLessThanOrEqual(750);
    });

    test('should spawn different types of power-ups', () => {
      const types = new Set();
      for (let i = 0; i < 50; i++) {
        gameService.spawnPowerUp();
        const lastPowerUp = gameService.powerUps[gameService.powerUps.length - 1];
        types.add(lastPowerUp.type);
      }
      expect(types.size).toBeGreaterThan(1);
    });
  });

  describe('power-up activation', () => {
    test('should activate extra life power-up', () => {
      const initialLives = gameService.player.lives;
      gameService.activatePowerUp(POWER_UP_TYPES.EXTRA_LIFE);
      expect(gameService.player.lives).toBe(Math.min(initialLives + 1, 3));
    });

    test('should activate timed power-ups', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      expect(gameService.activePowerUps.has(POWER_UP_TYPES.INVINCIBILITY)).toBe(true);
    });

    test('should track multiple active power-ups', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      expect(gameService.activePowerUps.size).toBe(2);
    });
  });

  describe('power-up effects', () => {
    test('should provide speed boost', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      expect(gameService.isPlayerFast()).toBe(true);
    });

    test('should provide invisibility', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVISIBILITY);
      expect(gameService.isPlayerInvisible()).toBe(true);
    });

    test('should apply double points', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.DOUBLE_POINTS);
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.y = 601; // Move off screen
      
      const initialScore = gameService.player.score;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore + 20); // 10 * 2
    });

    test('should prevent damage with invincibility', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      const initialLives = gameService.player.lives;
      gameService.updateGame();
      
      expect(gameService.player.lives).toBe(initialLives);
    });
  });

  describe('power-up collisions', () => {
    test('should activate power-up on collision', () => {
      gameService.spawnPowerUp();
      const powerUp = gameService.powerUps[0];
      powerUp.x = gameService.player.x;
      powerUp.y = gameService.player.y;
      powerUp.type = POWER_UP_TYPES.SPEED_BOOST;
      
      gameService.updateGame();
      
      expect(powerUp.active).toBe(false);
      expect(gameService.isPlayerFast()).toBe(true);
    });
  });

  describe('power-up cleanup', () => {
    test('should remove off-screen power-ups', () => {
      gameService.spawnPowerUp();
      const powerUp = gameService.powerUps[0];
      powerUp.y = 601;
      
      gameService.updateGame();
      
      expect(gameService.powerUps.length).toBe(0);
    });
  });

  describe('game state', () => {
    test('should include power-ups in game state', () => {
      gameService.spawnPowerUp();
      gameService.activatePowerUp(POWER_UP_TYPES.INVINCIBILITY);
      
      const state = gameService.getGameState();
      
      expect(state.powerUps).toBeDefined();
      expect(state.activePowerUps).toBeDefined();
      expect(state.powerUps.length).toBe(1);
      expect(state.activePowerUps).toContain(POWER_UP_TYPES.INVINCIBILITY);
    });
  });
});