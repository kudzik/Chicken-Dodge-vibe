export class GameView {
    constructor(scene) {
        this.scene = scene;
        this.playerSprite = null;
        this.chickenSprites = [];
    }

    create() {
        // Create player placeholder
        this.playerSprite = this.scene.add.rectangle(400, 550, 40, 40, 0x00ff00);
        
        // Create UI text
        this.scoreText = this.scene.add.text(16, 16, 'Score: 0', {
            fontSize: '24px',
            fill: '#000'
        });
        
        this.livesText = this.scene.add.text(16, 50, 'Lives: 3', {
            fontSize: '24px',
            fill: '#000'
        });
    }

    render(gameState) {
        // Update player position
        if (this.playerSprite) {
            this.playerSprite.x = gameState.player.x;
        }

        // Update UI
        this.scoreText.setText(`Score: ${gameState.player.score}`);
        this.livesText.setText(`Lives: ${gameState.player.lives}`);

        // Update chickens
        this.updateChickens(gameState.chickens);
    }

    updateChickens(chickens) {
        // Remove excess sprites
        while (this.chickenSprites.length > chickens.length) {
            const sprite = this.chickenSprites.pop();
            sprite.destroy();
        }

        // Add missing sprites
        while (this.chickenSprites.length < chickens.length) {
            const sprite = this.scene.add.rectangle(0, 0, 30, 30, 0xff0000);
            this.chickenSprites.push(sprite);
        }

        // Update positions
        chickens.forEach((chicken, index) => {
            if (this.chickenSprites[index]) {
                this.chickenSprites[index].x = chicken.x;
                this.chickenSprites[index].y = chicken.y;
                this.chickenSprites[index].setVisible(chicken.active);
            }
        });
    }
}