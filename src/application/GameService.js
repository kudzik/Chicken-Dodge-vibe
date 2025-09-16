import { Player } from '../domain/Player.js';
import { Chicken } from '../domain/Chicken.js';
import { FastChicken } from '../domain/FastChicken.js';
import { ChaoticChicken } from '../domain/ChaoticChicken.js';
import { MutantChicken } from '../domain/MutantChicken.js';
import { PowerUp, POWER_UP_TYPES } from '../domain/PowerUp.js';

export class GameService {
    constructor() {
        this.player = new Player();
        this.chickens = [];
        this.powerUps = [];
        this.gameRunning = true;
        this.lastScoreGain = 0;
        this.streakCount = 0;
        this.multiplier = 1;
        this.activePowerUps = new Map();
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
        
        // 10% chance to spawn power-up
        if (Math.random() < 0.1) {
            this.spawnPowerUp();
        }
    }
    
    spawnPowerUp() {
        const x = Math.random() * 700 + 50;
        const positiveTypes = [POWER_UP_TYPES.EXTRA_LIFE, POWER_UP_TYPES.INVINCIBILITY, POWER_UP_TYPES.DOUBLE_POINTS, POWER_UP_TYPES.SPEED_BOOST, POWER_UP_TYPES.INVISIBILITY];
        const negativeTypes = [POWER_UP_TYPES.SLOW_DOWN, POWER_UP_TYPES.REVERSE_CONTROLS, POWER_UP_TYPES.LOSE_POINTS, POWER_UP_TYPES.LOSE_LIFE, POWER_UP_TYPES.MORE_CHICKENS];
        
        // 70% positive, 30% negative
        const isPositive = Math.random() < 0.7;
        const types = isPositive ? positiveTypes : negativeTypes;
        const type = types[Math.floor(Math.random() * types.length)];
        
        this.powerUps.push(new PowerUp(x, -30, type));
    }

    updateGame() {
        if (!this.gameRunning) return;
        
        // Reset score gain feedback
        this.lastScoreGain = 0;

        // Update chickens and power-ups
        this.chickens.forEach(chicken => chicken.update());
        this.powerUps.forEach(powerUp => powerUp.update());
        
        // Update active power-ups timers
        for (let [type, endTime] of this.activePowerUps) {
            if (Date.now() > endTime) {
                this.activePowerUps.delete(type);
            }
        }

        // Check chicken collisions
        this.chickens.forEach(chicken => {
            if (chicken.active && chicken.checkCollision(this.player)) {
                chicken.active = false;
                
                // Check invincibility
                if (!this.activePowerUps.has(POWER_UP_TYPES.INVINCIBILITY)) {
                    const stillAlive = this.player.takeDamage();
                    // Reset streak and multiplier on hit
                    this.streakCount = 0;
                    this.multiplier = 1;
                    if (!stillAlive) {
                        this.gameRunning = false;
                    }
                }
            }
        });
        
        // Check power-up collisions
        this.powerUps.forEach(powerUp => {
            if (powerUp.active && powerUp.checkCollision(this.player)) {
                powerUp.active = false;
                this.activatePowerUp(powerUp.type);
            }
        });

        // Remove off-screen chickens and add score
        this.chickens = this.chickens.filter(chicken => {
            if (chicken.isOffScreen()) {
                if (chicken.active) {
                    // Increase streak and multiplier
                    this.streakCount++;
                    this.multiplier = Math.min(Math.floor(this.streakCount / 3) + 1, 5); // Max 5x multiplier
                    
                    const baseScore = 10;
                    let finalScore = baseScore * this.multiplier;
                    
                    // Apply double points power-up
                    if (this.activePowerUps.has(POWER_UP_TYPES.DOUBLE_POINTS)) {
                        finalScore *= 2;
                    }
                    
                    this.player.addScore(finalScore);
                    this.lastScoreGain = finalScore;
                } else {
                    this.lastScoreGain = 0;
                }
                return false;
            }
            return true;
        });
        
        // Remove off-screen power-ups
        this.powerUps = this.powerUps.filter(powerUp => {
            return !powerUp.isOffScreen();
        });
    }

    getGameState() {
        return {
            player: this.player,
            chickens: this.chickens,
            powerUps: this.powerUps,
            gameRunning: this.gameRunning,
            lastScoreGain: this.lastScoreGain,
            streakCount: this.streakCount,
            multiplier: this.multiplier,
            activePowerUps: Array.from(this.activePowerUps.keys())
        };
    }
    
    activatePowerUp(type) {
        const duration = 5000; // 5 seconds
        
        switch (type) {
            // Positive power-ups
            case POWER_UP_TYPES.EXTRA_LIFE:
                this.player.lives = Math.min(this.player.lives + 1, 3);
                break;
            case POWER_UP_TYPES.INVINCIBILITY:
            case POWER_UP_TYPES.DOUBLE_POINTS:
            case POWER_UP_TYPES.SPEED_BOOST:
            case POWER_UP_TYPES.INVISIBILITY:
                this.activePowerUps.set(type, Date.now() + duration);
                break;
            
            // Negative power-ups
            case POWER_UP_TYPES.LOSE_LIFE:
                this.player.takeDamage();
                if (this.player.lives <= 0) {
                    this.gameRunning = false;
                }
                break;
            case POWER_UP_TYPES.LOSE_POINTS:
                this.player.score = Math.max(0, this.player.score - 50);
                break;
            case POWER_UP_TYPES.MORE_CHICKENS:
                // Spawn 3 extra chickens immediately
                for (let i = 0; i < 3; i++) {
                    this.spawnChicken();
                }
                break;
            case POWER_UP_TYPES.SLOW_DOWN:
            case POWER_UP_TYPES.REVERSE_CONTROLS:
                this.activePowerUps.set(type, Date.now() + duration);
                break;
        }
    }
    
    isPlayerFast() {
        return this.activePowerUps.has(POWER_UP_TYPES.SPEED_BOOST);
    }
    
    isPlayerInvisible() {
        return this.activePowerUps.has(POWER_UP_TYPES.INVISIBILITY);
    }
    
    isPlayerSlow() {
        return this.activePowerUps.has(POWER_UP_TYPES.SLOW_DOWN);
    }
    
    hasReverseControls() {
        return this.activePowerUps.has(POWER_UP_TYPES.REVERSE_CONTROLS);
    }
}