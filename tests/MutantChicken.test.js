import { MutantChicken } from '../src/domain/MutantChicken.js';
import { Player } from '../src/domain/Player.js';

describe('MutantChicken', () => {
  let mutantChicken;

  beforeEach(() => {
    mutantChicken = new MutantChicken(100, -30);
  });

  describe('initialization', () => {
    test('should initialize with correct values', () => {
      expect(mutantChicken.x).toBe(100);
      expect(mutantChicken.y).toBe(-30);
      expect(mutantChicken.type).toBe('mutant');
      expect(mutantChicken.currentSize).toBe(30);
      expect(mutantChicken.minSize).toBe(15);
      expect(mutantChicken.maxSize).toBe(45);
    });
  });

  describe('size mutation', () => {
    test('should change size after timer', () => {
      mutantChicken.sizeChangeTimer = 45;
      const initialSize = mutantChicken.currentSize;
      mutantChicken.update();
      expect(mutantChicken.currentSize).not.toBe(initialSize);
      expect(mutantChicken.sizeChangeTimer).toBe(0);
    });

    test('should reverse direction at max size', () => {
      mutantChicken.currentSize = 45;
      mutantChicken.sizeDirection = 1;
      mutantChicken.sizeChangeTimer = 45;
      mutantChicken.update();
      expect(mutantChicken.sizeDirection).toBe(-1);
    });

    test('should reverse direction at min size', () => {
      mutantChicken.currentSize = 15;
      mutantChicken.sizeDirection = -1;
      mutantChicken.sizeChangeTimer = 45;
      mutantChicken.update();
      expect(mutantChicken.sizeDirection).toBe(1);
    });

    test('should not mutate when inactive', () => {
      mutantChicken.active = false;
      const initialSize = mutantChicken.currentSize;
      mutantChicken.sizeChangeTimer = 45;
      mutantChicken.update();
      expect(mutantChicken.currentSize).toBe(initialSize);
    });
  });

  describe('collision with size', () => {
    test('should use current size for collision detection', () => {
      const player = new Player(100, 30);
      mutantChicken.y = 30;
      mutantChicken.currentSize = 45; // Large size
      
      expect(mutantChicken.checkCollision(player)).toBe(true);
      
      // Move mutant further away for small size test
      mutantChicken.x = 200;
      mutantChicken.currentSize = 15; // Small size
      expect(mutantChicken.checkCollision(player)).toBe(false);
    });
  });
});