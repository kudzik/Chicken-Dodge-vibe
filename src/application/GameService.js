import { Player } from '../domain/Player.js';
import { Chicken } from '../domain/Chicken.js';

export class GameService {
    constructor() {
        this.player = new Player();
        this.chickens = [];
        this.gameRunning = true;
    }

    spawnChicken() {
        const x = Math.random() * 700 + 50;
        this.chickens.push(new Chicken(x));
    }

    updateGame() {
        if (!this.gameRunning) return;

        // Update chickens
        this.chickens.forEach(chicken => chicken.update());

        // Check collisions
        this.chickens.forEach(chicken => {
            if (chicken.active && chicken.checkCollision(this.player)) {
                chicken.active = false;
                const stillAlive = this.player.takeDamage();
                if (!stillAlive) {
                    this.gameRunning = false;
                }
            }
        });

        // Remove off-screen chickens and add score
        this.chickens = this.chickens.filter(chicken => {
            if (chicken.isOffScreen()) {
                if (chicken.active) {
                    this.player.addScore(10);
                }
                return false;
            }
            return true;
        });
    }

    getGameState() {
        return {
            player: this.player,
            chickens: this.chickens,
            gameRunning: this.gameRunning
        };
    }
}