import { Chicken } from './Chicken.js';

export class ChaoticChicken extends Chicken {
    constructor(x, y = -30) {
        super(x, y);
        this.type = 'chaotic';
        this.horizontalSpeed = 0;
        this.directionChangeTimer = 0;
        this.directionChangeInterval = 60; // Change direction every 60 frames (~1 second)
        this.maxHorizontalSpeed = 2;
    }

    update() {
        if (this.active) {
            // Normal vertical movement
            this.y += this.speed;
            
            // Chaotic horizontal movement
            this.directionChangeTimer++;
            
            if (this.directionChangeTimer >= this.directionChangeInterval) {
                // Change horizontal direction randomly
                this.horizontalSpeed = (Math.random() - 0.5) * this.maxHorizontalSpeed * 2;
                this.directionChangeTimer = 0;
                // Vary the interval for more chaos
                this.directionChangeInterval = 30 + Math.random() * 60;
            }
            
            // Apply horizontal movement with boundary check
            this.x += this.horizontalSpeed;
            this.x = Math.max(15, Math.min(785, this.x));
        }
    }
}