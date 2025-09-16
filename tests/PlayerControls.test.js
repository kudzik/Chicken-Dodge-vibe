import { GameViewModel } from '../src/presentation/GameViewModel.js';
import { GameService } from '../src/application/GameService.js';
import { POWER_UP_TYPES } from '../src/domain/PowerUp.js';

describe('Player Controls with Power-ups', () => {
  let gameViewModel;
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
    gameViewModel = new GameViewModel(gameService);
  });

  describe('normal controls', () => {
    test('should move right when input is 1', () => {
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1);
      expect(gameService.player.x).toBeGreaterThan(initialX);
    });

    test('should move left when input is -1', () => {
      const initialX = gameService.player.x;
      gameViewModel.handleInput(-1);
      expect(gameService.player.x).toBeLessThan(initialX);
    });
  });

  describe('reverse controls', () => {
    test('should move left when input is 1 and controls are reversed', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1);
      expect(gameService.player.x).toBeLessThan(initialX);
    });

    test('should move right when input is -1 and controls are reversed', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      const initialX = gameService.player.x;
      gameViewModel.handleInput(-1);
      expect(gameService.player.x).toBeGreaterThan(initialX);
    });
  });

  describe('speed effects', () => {
    test('should move faster with speed boost', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1);
      const boostedDistance = gameService.player.x - initialX;
      
      // Reset position and test normal speed
      gameService.player.x = initialX;
      gameService.activePowerUps.clear();
      gameViewModel.handleInput(1);
      const normalDistance = gameService.player.x - initialX;
      
      expect(boostedDistance).toBeGreaterThan(normalDistance);
    });

    test('should move slower with slow down', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.SLOW_DOWN);
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1);
      const slowDistance = gameService.player.x - initialX;
      
      // Reset position and test normal speed
      gameService.player.x = initialX;
      gameService.activePowerUps.clear();
      gameViewModel.handleInput(1);
      const normalDistance = gameService.player.x - initialX;
      
      expect(slowDistance).toBeLessThan(normalDistance);
    });
  });

  describe('combined effects', () => {
    test('should handle reverse controls with speed boost', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      gameService.activatePowerUp(POWER_UP_TYPES.SPEED_BOOST);
      
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1); // Should move left fast
      
      expect(gameService.player.x).toBeLessThan(initialX);
      expect(Math.abs(gameService.player.x - initialX)).toBeGreaterThan(6); // Faster than normal
    });

    test('should handle reverse controls with slow down', () => {
      gameService.activatePowerUp(POWER_UP_TYPES.REVERSE_CONTROLS);
      gameService.activatePowerUp(POWER_UP_TYPES.SLOW_DOWN);
      
      const initialX = gameService.player.x;
      gameViewModel.handleInput(1); // Should move left slow
      
      expect(gameService.player.x).toBeLessThan(initialX);
      expect(Math.abs(gameService.player.x - initialX)).toBeLessThan(6); // Slower than normal
    });
  });
});