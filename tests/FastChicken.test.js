import { FastChicken } from '../src/domain/FastChicken.js';
import { Player } from '../src/domain/Player.js';

describe('FastChicken', () => {
  let fastChicken;

  beforeEach(() => {
    fastChicken = new FastChicken(100, -30);
  });

  describe('initialization', () => {
    test('should initialize with correct values', () => {
      expect(fastChicken.x).toBe(100);
      expect(fastChicken.y).toBe(-30);
      expect(fastChicken.speed).toBe(3);
      expect(fastChicken.type).toBe('fast');
      expect(fastChicken.acceleration).toBe(0.1);
      expect(fastChicken.maxSpeed).toBe(8);
    });
  });

  describe('acceleration', () => {
    test('should accelerate when updated', () => {
      const initialSpeed = fastChicken.speed;
      fastChicken.update();
      expect(fastChicken.speed).toBeGreaterThan(initialSpeed);
    });

    test('should not exceed max speed', () => {
      for (let i = 0; i < 100; i++) {
        fastChicken.update();
      }
      expect(fastChicken.speed).toBeLessThanOrEqual(8);
    });

    test('should not accelerate when inactive', () => {
      fastChicken.active = false;
      const initialSpeed = fastChicken.speed;
      fastChicken.update();
      expect(fastChicken.speed).toBe(initialSpeed);
    });
  });

  describe('movement', () => {
    test('should move faster after acceleration', () => {
      const initialY = fastChicken.y;
      fastChicken.update();
      const firstY = fastChicken.y;
      fastChicken.update();
      const secondY = fastChicken.y;
      
      expect(secondY - firstY).toBeGreaterThan(firstY - initialY);
    });
  });
});