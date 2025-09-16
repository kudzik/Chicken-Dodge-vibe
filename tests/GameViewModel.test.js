import { GameViewModel } from '../src/presentation/GameViewModel.js';
import { GameService } from '../src/application/GameService.js';

describe('GameViewModel', () => {
  let gameViewModel;
  let mockGameService;
  let mockView;

  beforeEach(() => {
    mockGameService = new GameService();
    gameViewModel = new GameViewModel(mockGameService);
    
    mockView = {
      render: () => {}
    };
    
    gameViewModel.setView(mockView);
  });

  describe('initialization', () => {
    test('should initialize with game service', () => {
      expect(gameViewModel.gameService).toBe(mockGameService);
    });

    test('should set view correctly', () => {
      expect(gameViewModel.view).toBe(mockView);
    });
  });

  describe('input handling', () => {
    test('should handle left movement', () => {
      const initialX = gameViewModel.gameService.player.x;
      gameViewModel.handleInput(-1);
      expect(gameViewModel.gameService.player.x).toBeLessThan(initialX);
    });

    test('should handle right movement', () => {
      const initialX = gameViewModel.gameService.player.x;
      gameViewModel.handleInput(1);
      expect(gameViewModel.gameService.player.x).toBeGreaterThan(initialX);
    });
  });

  describe('game updates', () => {
    test('should update game service', () => {
      const initialScore = mockGameService.player.score;
      mockGameService.spawnChicken();
      mockGameService.chickens[0].y = 601; // Move off screen
      
      gameViewModel.update();
      
      expect(mockGameService.player.score).toBeGreaterThan(initialScore);
    });

    test('should render view with game state', () => {
      let renderCalled = false;
      mockView.render = () => { renderCalled = true; };
      
      gameViewModel.update();
      expect(renderCalled).toBe(true);
    });

    test('should not render if no view is set', () => {
      gameViewModel.setView(null);
      expect(() => gameViewModel.update()).not.toThrow();
    });
  });

  describe('chicken spawning', () => {
    test('should spawn chicken through game service', () => {
      const initialCount = gameViewModel.gameService.chickens.length;
      gameViewModel.spawnChicken();
      expect(gameViewModel.gameService.chickens.length).toBe(initialCount + 1);
    });
  });
});