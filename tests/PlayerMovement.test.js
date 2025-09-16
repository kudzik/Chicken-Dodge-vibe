import { Player } from '../src/domain/Player.js';

describe('Player Movement with Power-ups', () => {
  let player;

  beforeEach(() => {
    player = new Player(400, 550);
  });

  describe('normal movement', () => {
    test('should move with normal speed', () => {
      const initialX = player.x;
      player.move(1, false);
      expect(player.x).toBe(initialX + 6);
    });

    test('should move with speed boost', () => {
      const initialX = player.x;
      player.move(1, true);
      expect(player.x).toBe(initialX + 9); // 6 * 1.5
    });
  });

  describe('boundary constraints', () => {
    test('should respect left boundary with speed boost', () => {
      player.x = 50;
      player.move(-1, true);
      expect(player.x).toBeGreaterThanOrEqual(40);
    });

    test('should respect right boundary with speed boost', () => {
      player.x = 750;
      player.move(1, true);
      expect(player.x).toBeLessThanOrEqual(760);
    });
  });

  describe('direction handling', () => {
    test('should move left with speed boost', () => {
      const initialX = player.x;
      player.move(-1, true);
      expect(player.x).toBe(initialX - 9);
    });

    test('should move right with speed boost', () => {
      const initialX = player.x;
      player.move(1, true);
      expect(player.x).toBe(initialX + 9);
    });
  });
});