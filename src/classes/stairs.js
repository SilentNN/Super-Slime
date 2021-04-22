const stairSprite = require('../assets/images/stair.png');

class Stair {
    constructor(options) {
        this.canvas = options.canvas;
        this.ctx = this.canvas.getContext('2d');
        this.pos = options.pos;
        this.height = options.height;
    }

    render (width, height, sheetPosX, sheetPosY) {
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.ctx.msImageSmoothingEnabled = false;
        this.ctx.imageSmoothingEnabled = false;

        let img = new Image();
        img.src = stairSprite.default;

        const stairHeight = 41 * 0.65;
        const stairWidth = 76 * 0.65;

        this.ctx.drawImage(
            img, 
            // this.pos * 76,
            // this.height * 41,
            // 76,
            // 41
            (this.canvas.width - stairWidth) / 2 + this.pos * stairWidth,
            this.canvas.height - (1 + this.height) * stairHeight,
            stairWidth,
            stairHeight
        );
    }
}

module.exports = Stair