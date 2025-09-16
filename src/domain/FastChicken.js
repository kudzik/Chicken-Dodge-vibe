import { Chicken } from './Chicken.js';

export class FastChicken extends Chicken {
    constructor(x, y = -30) {
        super(x, y);
        this.initialSpeed = 3;
        this.speed = this.initialSpeed;
        this.acceleration = 0.1;
        this.maxSpeed = 8;
        this.type = 'fast';
    }

    update() {
        if (this.active) {
            // Przyspiesz podczas spadania
            this.speed = Math.min(this.speed + this.acceleration, this.maxSpeed);
            this.y += this.speed;
        }
    }
}