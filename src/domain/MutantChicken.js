import { Chicken } from './Chicken.js';

export class MutantChicken extends Chicken {
    constructor(x, y = -30) {
        super(x, y);
        this.type = 'mutant';
        this.baseSize = 30;
        this.currentSize = this.baseSize;
        this.sizeChangeTimer = 0;
        this.sizeChangeInterval = 45; // Change size every 45 frames
        this.minSize = 15;
        this.maxSize = 45;
        this.sizeDirection = 1; // 1 for growing, -1 for shrinking
    }

    update() {
        if (this.active) {
            // Normal vertical movement
            this.y += this.speed;
            
            // Size mutation
            this.sizeChangeTimer++;
            
            if (this.sizeChangeTimer >= this.sizeChangeInterval) {
                // Change size gradually
                this.currentSize += this.sizeDirection * 3;
                
                // Reverse direction at limits
                if (this.currentSize >= this.maxSize) {
                    this.sizeDirection = -1;
                } else if (this.currentSize <= this.minSize) {
                    this.sizeDirection = 1;
                }
                
                this.sizeChangeTimer = 0;
            }
        }
    }

    checkCollision(player) {
        const distance = Math.sqrt(
            Math.pow(this.x - player.x, 2) + 
            Math.pow(this.y - player.y, 2)
        );
        // Use current size for collision detection
        return distance < (this.currentSize + 20) / 2;
    }
}