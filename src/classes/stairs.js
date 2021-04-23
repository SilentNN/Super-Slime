const stairSprite = require('../assets/images/stair.png');

class Stair {
    constructor(options) {
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.pos = options.pos;
        this.height = options.height;
        
        this.stairWidth = 76 * 0.65;
        this.stairHeight = 41 * 0.65;
        this.x = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;
        this.y = this.canvas.height - (1 + this.height) * this.stairHeight;
    }

    draw (timeDelta) {
        
        let img = new Image();
        img.src = stairSprite.default;

        let stairDestinationX = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;
        let stairDestinationY = this.canvas.height - (1 + this.height) * this.stairHeight;

        if (Math.abs(this.x - stairDestinationX) > 0.1) this.x = this.x + 7*((stairDestinationX - this.x) / timeDelta);
        if (Math.abs(this.y - stairDestinationY) > 0.1) this.y = this.y + 7*((stairDestinationY - this.y) / timeDelta);

        this.ctx.drawImage(
            img,
            this.x,
            this.y,
            this.stairWidth,
            this.stairHeight
        );
    }
}

module.exports = Stair