export class Player {
    constructor(x = 400, y = 550) {
        this.x = x;
        this.y = y;
        this.lives = 3;
        this.score = 0;
    }

    move(direction, speedBoost = false, slowDown = false) {
        const baseSpeed = 6;
        let speed = baseSpeed;
        
        if (speedBoost) {
            speed *= 1.5;
        } else if (slowDown) {
            speed *= 0.5;
        }
        
        this.x += direction * speed;
        this.x = Math.max(40, Math.min(760, this.x));
    }

    takeDamage() {
        this.lives--;
        return this.lives > 0;
    }

    addScore(points) {
        this.score += points;
    }
}