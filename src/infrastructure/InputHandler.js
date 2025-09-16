export class InputHandler {
    constructor(scene, viewModel) {
        this.scene = scene;
        this.viewModel = viewModel;
        this.keys = {};
        this.setupInput();
    }

    setupInput() {
        // Keyboard input
        this.keys.left = this.scene.input.keyboard.addKey('LEFT');
        this.keys.right = this.scene.input.keyboard.addKey('RIGHT');
        this.keys.a = this.scene.input.keyboard.addKey('A');
        this.keys.d = this.scene.input.keyboard.addKey('D');

        // Touch input - continuous movement
        this.touchDirection = 0;
        
        this.scene.input.on('pointerdown', (pointer) => {
            const centerX = this.scene.cameras.main.width / 2;
            this.touchDirection = pointer.x < centerX ? -1 : 1;
        });
        
        this.scene.input.on('pointermove', (pointer) => {
            if (pointer.isDown) {
                const centerX = this.scene.cameras.main.width / 2;
                this.touchDirection = pointer.x < centerX ? -1 : 1;
            }
        });
        
        this.scene.input.on('pointerup', () => {
            this.touchDirection = 0;
        });
    }

    update() {
        let direction = 0;
        
        // Keyboard input
        if (this.keys.left.isDown || this.keys.a.isDown) {
            direction -= 1;
        }
        if (this.keys.right.isDown || this.keys.d.isDown) {
            direction += 1;
        }
        
        // Touch input
        direction += this.touchDirection;
        
        // Apply movement if there's input
        if (direction !== 0) {
            this.viewModel.handleInput(Math.sign(direction));
        }
    }
}