export class Chicken {
    constructor(x, y = -30) {
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.active = true;
    }

    update() {
        if (this.active) {
            this.y += this.speed;
        }
    }

    isOffScreen() {
        return this.y > 600;
    }

    checkCollision(player) {
        const distance = Math.sqrt(
            Math.pow(this.x - player.x, 2) + 
            Math.pow(this.y - player.y, 2)
        );
        return distance < 35;
    }
}