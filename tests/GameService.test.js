import { GameService } from '../src/application/GameService.js';

describe('GameService', () => {
  let gameService;

  beforeEach(() => {
    gameService = new GameService();
  });

  describe('initialization', () => {
    test('should initialize with correct state', () => {
      expect(gameService.player).toBeDefined();
      expect(gameService.chickens).toEqual([]);
      expect(gameService.gameRunning).toBe(true);
    });
  });

  describe('chicken spawning', () => {
    test('should spawn chicken', () => {
      gameService.spawnChicken();
      expect(gameService.chickens.length).toBe(1);
      expect(gameService.chickens[0].x).toBeGreaterThanOrEqual(50);
      expect(gameService.chickens[0].x).toBeLessThanOrEqual(750);
    });
    
    test('should spawn different types of chickens', () => {
      const types = new Set();
      for (let i = 0; i < 50; i++) {
        gameService.spawnChicken();
        const lastChicken = gameService.chickens[gameService.chickens.length - 1];
        types.add(lastChicken.type);
      }
      expect(types.size).toBeGreaterThan(1); // Should have multiple types
    });
  });

  describe('game state', () => {
    test('should return correct game state', () => {
      const state = gameService.getGameState();
      expect(state.player).toBe(gameService.player);
      expect(state.chickens).toBe(gameService.chickens);
      expect(state.gameRunning).toBe(true);
    });
  });

  describe('collision handling', () => {
    test('should handle collision and reduce lives', () => {
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      
      // Position chicken near player
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      const initialLives = gameService.player.lives;
      gameService.updateGame();
      
      expect(gameService.player.lives).toBe(initialLives - 1);
      expect(chicken.active).toBe(false);
    });

    test('should end game when no lives left', () => {
      gameService.player.lives = 1;
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      
      chicken.x = gameService.player.x;
      chicken.y = gameService.player.y;
      
      gameService.updateGame();
      
      expect(gameService.gameRunning).toBe(false);
    });
  });

  describe('scoring system', () => {
    test('should add score when chicken goes off screen', () => {
      gameService.spawnChicken();
      const chicken = gameService.chickens[0];
      chicken.y = 601; // Off screen
      
      const initialScore = gameService.player.score;
      gameService.updateGame();
      
      expect(gameService.player.score).toBe(initialScore + 10);
      expect(gameService.chickens.length).toBe(0);
    });
  });
});