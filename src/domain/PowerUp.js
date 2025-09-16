export class PowerUp {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.active = true;
        this.speed = 2;
        this.size = 25;
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
        return distance < 30;
    }
}

export const POWER_UP_TYPES = {
    EXTRA_LIFE: 'extra_life',
    INVINCIBILITY: 'invincibility', 
    DOUBLE_POINTS: 'double_points',
    SPEED_BOOST: 'speed_boost',
    INVISIBILITY: 'invisibility',
    // Negative power-ups
    SLOW_DOWN: 'slow_down',
    REVERSE_CONTROLS: 'reverse_controls',
    LOSE_POINTS: 'lose_points',
    LOSE_LIFE: 'lose_life',
    MORE_CHICKENS: 'more_chickens'
};