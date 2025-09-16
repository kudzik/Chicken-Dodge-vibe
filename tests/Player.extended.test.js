import { Player } from '../src/domain/Player.js';

describe('Player - Extended Features', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });

  describe('boundary testing', () => {
    test('should handle extreme left movement', () => {
      player.x = 40;
      for (let i = 0; i < 10; i++) {
        player.move(-1);
      }
      expect(player.x).toBe(40);
    });

    test('should handle extreme right movement', () => {
      player.x = 760;
      for (let i = 0; i < 10; i++) {
        player.move(1);
      }
      expect(player.x).toBe(760);
    });
  });

  describe('score accumulation', () => {
    test('should handle large score values', () => {
      player.addScore(1000);
      player.addScore(500);
      expect(player.score).toBe(1500);
    });

    test('should handle zero score addition', () => {
      player.addScore(0);
      expect(player.score).toBe(0);
    });
  });

  describe('life management edge cases', () => {
    test('should handle taking damage when already at 0 lives', () => {
      player.lives = 0;
      const result = player.takeDamage();
      expect(result).toBe(false);
      expect(player.lives).toBe(-1);
    });

    test('should handle multiple damage in sequence', () => {
      let alive = true;
      while (alive && player.lives > 0) {
        alive = player.takeDamage();
      }
      expect(player.lives).toBe(0);
      expect(alive).toBe(false);
    });
  });

  describe('custom initialization', () => {
    test('should accept custom position', () => {
      const customPlayer = new Player(100, 200);
      expect(customPlayer.x).toBe(100);
      expect(customPlayer.y).toBe(200);
    });
  });
});