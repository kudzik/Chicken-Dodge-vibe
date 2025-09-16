import { Player } from '../domain/Player.js';
import { Chicken } from '../domain/Chicken.js';
import { FastChicken } from '../domain/FastChicken.js';
import { ChaoticChicken } from '../domain/ChaoticChicken.js';
import { MutantChicken } from '../domain/MutantChicken.js';

export class GameService {
    constructor() {
        this.player = new Player();
        this.chickens = [];
        this.gameRunning = true;
        this.lastScoreGain = 0;
    }

    spawnChicken() {
        const x = Math.random() * 700 + 50;
        const rand = Math.random();
        
        if (rand < 0.2) {
            this.chickens.push(new FastChicken(x));
        } else if (rand < 0.4) {
            this.chickens.push(new ChaoticChicken(x));
        } else if (rand < 0.6) {
            this.chickens.push(new MutantChicken(x));
        } else {
            this.chickens.push(new Chicken(x));
        }
    }

    updateGame() {
        if (!this.gameRunning) return;
        
        // Reset score gain feedback
        this.lastScoreGain = 0;

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
                    this.lastScoreGain = 10;
                } else {
                    this.lastScoreGain = 0;
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
            gameRunning: this.gameRunning,
            lastScoreGain: this.lastScoreGain
        };
    }
}