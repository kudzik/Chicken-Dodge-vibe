export class GameViewModel {
    constructor(gameService) {
        this.gameService = gameService;
        this.view = null;
    }

    setView(view) {
        this.view = view;
    }

    handleInput(direction) {
        let finalDirection = direction;
        
        // Reverse controls effect
        if (this.gameService.hasReverseControls()) {
            finalDirection = -direction;
        }
        
        const speedBoost = this.gameService.isPlayerFast();
        const slowDown = this.gameService.isPlayerSlow();
        
        this.gameService.player.move(finalDirection, speedBoost, slowDown);
    }

    update() {
        this.gameService.updateGame();
        if (this.view) {
            this.view.render(this.gameService.getGameState());
        }
    }

    spawnChicken() {
        this.gameService.spawnChicken();
    }
}