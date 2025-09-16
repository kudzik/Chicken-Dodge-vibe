export class GameView {
    constructor(scene) {
        this.scene = scene;
        this.playerSprite = null;
        this.chickenSprites = [];
    }

    create() {
        // Create player placeholder (green square)
        this.playerSprite = this.scene.add.rectangle(400, 550, 40, 40, 0x00ff00);
        
        // Create HUD background
        this.hudBg = this.scene.add.rectangle(120, 55, 220, 90, 0x000000, 0.3);
        
        // Create UI text with better styling
        this.scoreText = this.scene.add.text(20, 20, 'Score: 0', {
            fontSize: '28px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        this.livesText = this.scene.add.text(20, 55, 'Lives: ❤❤❤', {
            fontSize: '24px',
            fill: '#ff4444',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        this.multiplierText = this.scene.add.text(20, 85, 'Multiplier: x1', {
            fontSize: '20px',
            fill: '#ffff00',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        });
        
        this.gameOverText = this.scene.add.text(400, 300, '', {
            fontSize: '32px',
            fill: '#ff0000',
            fontFamily: 'Arial'
        }).setOrigin(0.5);
        
        // Score feedback text
        this.scoreGainText = this.scene.add.text(400, 200, '', {
            fontSize: '24px',
            fill: '#00ff00',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5);
        
        // Static chicken removed - now using dynamic spawning
    }

    render(gameState) {
        // Update player position
        if (this.playerSprite) {
            this.playerSprite.x = gameState.player.x;
        }

        // Update UI with hearts for lives
        this.scoreText.setText(`Score: ${gameState.player.score}`);
        const hearts = '❤'.repeat(Math.max(0, gameState.player.lives));
        const emptyHearts = '♡'.repeat(Math.max(0, 3 - gameState.player.lives));
        this.livesText.setText(`Lives: ${hearts}${emptyHearts}`);
        this.multiplierText.setText(`Multiplier: x${gameState.multiplier} (${gameState.streakCount})`);
        
        // Change multiplier color based on value
        if (gameState.multiplier > 1) {
            this.multiplierText.setFill('#00ff00'); // Green for active multiplier
        } else {
            this.multiplierText.setFill('#ffff00'); // Yellow for base multiplier
        }
        
        // Show game over message
        if (!gameState.gameRunning) {
            this.gameOverText.setText('GAME OVER\nPress F5 to restart');
        }
        
        // Show score gain feedback
        if (gameState.lastScoreGain > 0) {
            this.scoreGainText.setText(`+${gameState.lastScoreGain}`);
            // Fade out effect
            this.scene.tweens.add({
                targets: this.scoreGainText,
                alpha: 0,
                y: this.scoreGainText.y - 30,
                duration: 1000,
                onComplete: () => {
                    this.scoreGainText.alpha = 1;
                    this.scoreGainText.y = 200;
                    this.scoreGainText.setText('');
                }
            });
        }

        // Update chickens
        this.updateChickens(gameState.chickens);
    }

    updateChickens(chickens) {
        // Remove excess sprites
        while (this.chickenSprites.length > chickens.length) {
            const sprite = this.chickenSprites.pop();
            sprite.destroy();
        }

        // Add missing sprites with different colors for types
        while (this.chickenSprites.length < chickens.length) {
            const sprite = this.scene.add.rectangle(0, 0, 30, 30, 0xff6600);
            this.chickenSprites.push(sprite);
        }

        // Update positions, colors and sizes based on type
        chickens.forEach((chicken, index) => {
            if (this.chickenSprites[index]) {
                this.chickenSprites[index].x = chicken.x;
                this.chickenSprites[index].y = chicken.y;
                this.chickenSprites[index].setVisible(chicken.active);
                
                // Different colors for different types
                if (chicken.type === 'fast') {
                    this.chickenSprites[index].setFillStyle(0xff0000); // Red for fast
                    this.chickenSprites[index].setSize(30, 30); // Fixed size
                } else if (chicken.type === 'chaotic') {
                    this.chickenSprites[index].setFillStyle(0x9900ff); // Purple for chaotic
                    this.chickenSprites[index].setSize(30, 30); // Fixed size
                } else if (chicken.type === 'mutant') {
                    this.chickenSprites[index].setFillStyle(0x00ff00); // Green for mutant
                    // Only mutants change size
                    const size = chicken.currentSize || 30;
                    this.chickenSprites[index].setSize(size, size);
                } else {
                    this.chickenSprites[index].setFillStyle(0xff6600); // Orange for normal
                    this.chickenSprites[index].setSize(30, 30); // Fixed size
                }
            }
        });
    }
}