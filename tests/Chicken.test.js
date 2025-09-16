import { Chicken } from '../src/domain/Chicken.js';
import { Player } from '../src/domain/Player.js';

describe('Chicken', () => {
  let chicken;

  beforeEach(() => {
    chicken = new Chicken(100, -30);
  });

  describe('initialization', () => {
    test('should initialize with correct values', () => {
      expect(chicken.x).toBe(100);
      expect(chicken.y).toBe(-30);
      expect(chicken.speed).toBe(3);
      expect(chicken.active).toBe(true);
    });
  });

  describe('movement', () => {
    test('should move down when updated', () => {
      chicken.update();
      expect(chicken.y).toBe(-27);
    });

    test('should not move when inactive', () => {
      chicken.active = false;
      chicken.update();
      expect(chicken.y).toBe(-30);
    });
  });

  describe('screen boundaries', () => {
    test('should detect when off screen', () => {
      chicken.y = 601;
      expect(chicken.isOffScreen()).toBe(true);
    });

    test('should not be off screen when on screen', () => {
      chicken.y = 300;
      expect(chicken.isOffScreen()).toBe(false);
    });
  });

  describe('collision detection', () => {
    test('should detect collision with player', () => {
      const player = new Player(100, 30);
      chicken.y = 30;
      expect(chicken.checkCollision(player)).toBe(true);
    });

    test('should not detect collision when far from player', () => {
      const player = new Player(400, 550);
      expect(chicken.checkCollision(player)).toBe(false);
    });
  });
});