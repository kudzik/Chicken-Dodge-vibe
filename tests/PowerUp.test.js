import { PowerUp, POWER_UP_TYPES } from '../src/domain/PowerUp.js';
import { Player } from '../src/domain/Player.js';

describe('PowerUp', () => {
  let powerUp;
  let player;

  beforeEach(() => {
    powerUp = new PowerUp(100, -30, POWER_UP_TYPES.EXTRA_LIFE);
    player = new Player(100, 550);
  });

  describe('initialization', () => {
    test('should initialize with correct values', () => {
      expect(powerUp.x).toBe(100);
      expect(powerUp.y).toBe(-30);
      expect(powerUp.type).toBe(POWER_UP_TYPES.EXTRA_LIFE);
      expect(powerUp.active).toBe(true);
      expect(powerUp.speed).toBe(2);
      expect(powerUp.size).toBe(25);
    });
  });

  describe('movement', () => {
    test('should move down when active', () => {
      const initialY = powerUp.y;
      powerUp.update();
      expect(powerUp.y).toBe(initialY + 2);
    });

    test('should not move when inactive', () => {
      powerUp.active = false;
      const initialY = powerUp.y;
      powerUp.update();
      expect(powerUp.y).toBe(initialY);
    });
  });

  describe('off-screen detection', () => {
    test('should detect when off screen', () => {
      powerUp.y = 601;
      expect(powerUp.isOffScreen()).toBe(true);
    });

    test('should not be off screen when on screen', () => {
      powerUp.y = 300;
      expect(powerUp.isOffScreen()).toBe(false);
    });
  });

  describe('collision detection', () => {
    test('should detect collision with player', () => {
      powerUp.x = 100;
      powerUp.y = 550;
      expect(powerUp.checkCollision(player)).toBe(true);
    });

    test('should not detect collision when far away', () => {
      powerUp.x = 200;
      powerUp.y = 200;
      expect(powerUp.checkCollision(player)).toBe(false);
    });
  });

  describe('power-up types', () => {
    test('should have all required power-up types', () => {
      expect(POWER_UP_TYPES.EXTRA_LIFE).toBe('extra_life');
      expect(POWER_UP_TYPES.INVINCIBILITY).toBe('invincibility');
      expect(POWER_UP_TYPES.DOUBLE_POINTS).toBe('double_points');
      expect(POWER_UP_TYPES.SPEED_BOOST).toBe('speed_boost');
      expect(POWER_UP_TYPES.INVISIBILITY).toBe('invisibility');
    });
  });
});