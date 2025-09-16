import { ChaoticChicken } from '../src/domain/ChaoticChicken.js';
import { Player } from '../src/domain/Player.js';

describe('ChaoticChicken', () => {
  let chaoticChicken;

  beforeEach(() => {
    chaoticChicken = new ChaoticChicken(100, -30);
  });

  describe('initialization', () => {
    test('should initialize with correct values', () => {
      expect(chaoticChicken.x).toBe(100);
      expect(chaoticChicken.y).toBe(-30);
      expect(chaoticChicken.type).toBe('chaotic');
      expect(chaoticChicken.horizontalSpeed).toBe(0);
      expect(chaoticChicken.maxHorizontalSpeed).toBe(2);
    });
  });

  describe('chaotic movement', () => {
    test('should move vertically', () => {
      const initialY = chaoticChicken.y;
      chaoticChicken.update();
      expect(chaoticChicken.y).toBeGreaterThan(initialY);
    });

    test('should change direction after timer', () => {
      chaoticChicken.directionChangeTimer = 60;
      const initialHorizontalSpeed = chaoticChicken.horizontalSpeed;
      chaoticChicken.update();
      expect(chaoticChicken.directionChangeTimer).toBe(0);
    });

    test('should stay within boundaries', () => {
      chaoticChicken.x = 10;
      chaoticChicken.horizontalSpeed = -5;
      chaoticChicken.update();
      expect(chaoticChicken.x).toBeGreaterThanOrEqual(15);
      
      chaoticChicken.x = 790;
      chaoticChicken.horizontalSpeed = 5;
      chaoticChicken.update();
      expect(chaoticChicken.x).toBeLessThanOrEqual(785);
    });

    test('should not move when inactive', () => {
      chaoticChicken.active = false;
      const initialY = chaoticChicken.y;
      const initialX = chaoticChicken.x;
      chaoticChicken.update();
      expect(chaoticChicken.y).toBe(initialY);
      expect(chaoticChicken.x).toBe(initialX);
    });
  });
});