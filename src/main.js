import Phaser from 'phaser';
import { GameService } from './application/GameService.js';
import { GameViewModel } from './presentation/GameViewModel.js';
import { GameView } from './presentation/GameView.js';
import { InputHandler } from './infrastructure/InputHandler.js';

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    create() {
        // Initialize architecture layers
        this.gameService = new GameService();
        this.viewModel = new GameViewModel(this.gameService);
        this.gameView = new GameView(this);
        this.inputHandler = new InputHandler(this, this.viewModel);

        // Connect ViewModel and View
        this.viewModel.setView(this.gameView);
        
        // Create initial view
        this.gameView.create();

        // Spawn chickens periodically (faster for testing)
        this.time.addEvent({
            delay: 1500,
            callback: () => this.viewModel.spawnChicken(),
            loop: true
        });
        
        // Spawn first chicken immediately
        this.viewModel.spawnChicken();
    }

    update() {
        this.inputHandler.update();
        this.viewModel.update();
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#87CEEB',
    scene: GameScene
};

const game = new Phaser.Game(config);