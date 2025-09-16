export class GameViewModel {
    constructor(gameService) {
        this.gameService = gameService;
        this.view = null;
    }

    setView(view) {
        this.view = view;
    }

    handleInput(direction) {
        const speedBoost = this.gameService.isPlayerFast();
        this.gameService.player.move(direction, speedBoost);
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