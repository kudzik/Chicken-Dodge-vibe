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
        
        // Power-up legend background
        this.legendBg = this.scene.add.rectangle(680, 120, 240, 220, 0x000000, 0.8);
        
        // Power-up legend title
        this.legendTitle = this.scene.add.text(680, 25, 'POWER-UPS:', {
            fontSize: '14px',
            fill: '#ffffff',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 2
        }).setOrigin(0.5, 0);
        
        // Positive power-ups subtitle
        this.positiveTitle = this.scene.add.text(575, 45, 'POZYTYWNE (biała ramka):', {
            fontSize: '10px',
            fill: '#00ff00',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 1
        });
        
        // Create colored circles for positive power-ups
        this.legendCircles = [
            { circle: this.scene.add.circle(575, 65, 6, 0xff0000).setStrokeStyle(1, 0xffffff), text: 'Dodatkowe życie' },
            { circle: this.scene.add.circle(575, 80, 6, 0xffff00).setStrokeStyle(1, 0xffffff), text: 'Nieśmiertelność' },
            { circle: this.scene.add.circle(575, 95, 6, 0x00ff00).setStrokeStyle(1, 0xffffff), text: 'Podwójne punkty' },
            { circle: this.scene.add.circle(575, 110, 6, 0x0000ff).setStrokeStyle(1, 0xffffff), text: 'Przyspieszenie' },
            { circle: this.scene.add.circle(575, 125, 6, 0xff00ff).setStrokeStyle(1, 0xffffff), text: 'Niewidzialność' }
        ];
        
        // Negative power-ups subtitle
        this.negativeTitle = this.scene.add.text(575, 145, 'NEGATYWNE (czarna ramka):', {
            fontSize: '10px',
            fill: '#ff0000',
            fontFamily: 'Arial',
            stroke: '#000000',
            strokeThickness: 1
        });
        
        // Add negative power-ups circles
        this.negativeCircles = [
            { circle: this.scene.add.circle(575, 165, 6, 0x800080).setStrokeStyle(1, 0x000000), text: 'Spowolnienie' },
            { circle: this.scene.add.circle(575, 180, 6, 0x8b4513).setStrokeStyle(1, 0x000000), text: 'Odwrotne sterowanie' },
            { circle: this.scene.add.circle(575, 195, 6, 0x696969).setStrokeStyle(1, 0x000000), text: 'Utrata punktów' },
            { circle: this.scene.add.circle(575, 210, 6, 0x8b0000).setStrokeStyle(1, 0x000000), text: 'Utrata życia' },
            { circle: this.scene.add.circle(575, 225, 6, 0x2f4f4f).setStrokeStyle(1, 0x000000), text: 'Więcej kurczaków' }
        ];
        
        // Add text labels for positive
        this.legendTexts = this.legendCircles.map((item, index) => {
            return this.scene.add.text(590, 65 + index * 15, item.text, {
                fontSize: '10px',
                fill: '#ffffff',
                fontFamily: 'Arial',
                stroke: '#000000',
                strokeThickness: 1
            }).setOrigin(0, 0.5);
        });
        
        // Add text labels for negative
        this.negativeTexts = this.negativeCircles.map((item, index) => {
            return this.scene.add.text(590, 165 + index * 15, item.text, {
                fontSize: '10px',
                fill: '#ffffff',
                fontFamily: 'Arial',
                stroke: '#000000',
                strokeThickness: 1
            }).setOrigin(0, 0.5);
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
        
        // Update power-ups if they exist
        if (gameState.powerUps) {
            this.updatePowerUps(gameState.powerUps);
        }
        
        // Update player appearance based on power-ups
        if (this.playerSprite && gameState.activePowerUps) {
            if (gameState.activePowerUps.includes('invincibility')) {
                this.playerSprite.setFillStyle(0xffff00); // Yellow tint
                this.playerSprite.setAlpha(1);
            } else if (gameState.activePowerUps.includes('invisibility')) {
                this.playerSprite.setFillStyle(0x00ff00); // Green
                this.playerSprite.setAlpha(0.5); // Semi-transparent
            } else if (gameState.activePowerUps.includes('slow_down')) {
                this.playerSprite.setFillStyle(0x800080); // Purple tint for slow
                this.playerSprite.setAlpha(1);
            } else if (gameState.activePowerUps.includes('reverse_controls')) {
                this.playerSprite.setFillStyle(0x8b4513); // Brown tint for reverse
                this.playerSprite.setAlpha(1);
            } else {
                this.playerSprite.setFillStyle(0x00ff00); // Green (original color)
                this.playerSprite.setAlpha(1);
            }
        }
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
    
    updatePowerUps(powerUps) {
        if (!powerUps) return;
        
        // Initialize array if needed
        if (!this.powerUpSprites) {
            this.powerUpSprites = [];
        }
        
        // Remove excess sprites
        while (this.powerUpSprites.length > powerUps.length) {
            const sprite = this.powerUpSprites.pop();
            sprite.destroy();
        }
        
        // Add missing sprites (circles with border)
        while (this.powerUpSprites.length < powerUps.length) {
            const circle = this.scene.add.circle(0, 0, 12, 0x00ffff);
            this.powerUpSprites.push(circle);
        }
        
        // Different colors for different types
        const colors = {
            // Positive power-ups (bright colors)
            'extra_life': 0xff0000,     // Red - Dodatkowe życie
            'invincibility': 0xffff00,  // Yellow - Nieśmiertelność
            'double_points': 0x00ff00,  // Green - Podwójne punkty
            'speed_boost': 0x0000ff,    // Blue - Przyspieszenie
            'invisibility': 0xff00ff,   // Magenta - Niewidzialność
            // Negative power-ups (dark colors)
            'slow_down': 0x800080,      // Dark Purple - Spowolnienie
            'reverse_controls': 0x8b4513, // Brown - Odwrotne sterowanie
            'lose_points': 0x696969,    // Dark Gray - Utrata punktów
            'lose_life': 0x8b0000,      // Dark Red - Utrata życia
            'more_chickens': 0x2f4f4f   // Dark Slate Gray - Więcej kurczaków
        };
        
        // Update positions and colors
        powerUps.forEach((powerUp, index) => {
            if (this.powerUpSprites[index]) {
                this.powerUpSprites[index].x = powerUp.x;
                this.powerUpSprites[index].y = powerUp.y;
                this.powerUpSprites[index].setVisible(powerUp.active);
                this.powerUpSprites[index].setFillStyle(colors[powerUp.type] || 0x00ffff);
                
                // Set border color based on power-up type
                const isNegative = ['slow_down', 'reverse_controls', 'lose_points', 'lose_life', 'more_chickens'].includes(powerUp.type);
                const borderColor = isNegative ? 0x000000 : 0xffffff; // Black for negative, white for positive
                this.powerUpSprites[index].setStrokeStyle(2, borderColor);
            }
        });
    }
}