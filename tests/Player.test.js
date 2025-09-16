import { Player } from '../src/domain/Player.js';

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('initialization', () => {
    test('should initialize with default values', () => {
      expect(player.x).toBe(400);
      expect(player.y).toBe(550);
      expect(player.lives).toBe(3);
      expect(player.score).toBe(0);
    });
  });

  describe('movement', () => {
    test('should move left', () => {
      const initialX = player.x;
      player.move(-1);
      expect(player.x).toBe(initialX - 6);
    });

    test('should move right', () => {
      const initialX = player.x;
      player.move(1);
      expect(player.x).toBe(initialX + 6);
    });

    test('should not move beyond left boundary', () => {
      player.x = 40;
      player.move(-1);
      expect(player.x).toBe(40);
    });

    test('should not move beyond right boundary', () => {
      player.x = 760;
      player.move(1);
      expect(player.x).toBe(760);
    });
  });

  describe('damage system', () => {
    test('should lose life when taking damage', () => {
      const result = player.takeDamage();
      expect(player.lives).toBe(2);
      expect(result).toBe(true);
    });

    test('should return false when no lives left', () => {
      player.lives = 1;
      const result = player.takeDamage();
      expect(player.lives).toBe(0);
      expect(result).toBe(false);
    });
  });

  describe('scoring system', () => {
    test('should add score correctly', () => {
      player.addScore(10);
      expect(player.score).toBe(10);
    });

    test('should accumulate score', () => {
      player.addScore(10);
      player.addScore(20);
      expect(player.score).toBe(30);
    });
  });
});