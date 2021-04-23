const bg = require('../assets/images/cityscape_2x.png');

class Background {
    constructor(canvas) {
        this.canvas = canvas;
        this.bgPos = 0;
        this.x = (3840-this.canvas.width)/2 + this.bgPos*15;
        this.y = 2154-this.canvas.height;
    }

    draw(timeDelta) {
        let img = new Image();
        img.src = bg.default;
        let ctx = this.canvas.getContext('2d');

        // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let heightAdjustment = this.steps*8 - 8*8;
        if (heightAdjustment < 0) heightAdjustment = 0;

        let destinationX = (3840-this.canvas.width)/2 + this.bgPos*15;
        let destinationY = 2154-this.canvas.height-heightAdjustment;

        if (Math.abs(this.x - destinationX) > 0.1) this.x = this.x + 3*((destinationX - this.x) / timeDelta);
        if (Math.abs(this.y - destinationY) > 0.1) this.y = this.y + 3*((destinationY - this.y) / timeDelta);

        ctx.drawImage(
            img,
            this.x,
            this.y,
            this.canvas.width,
            this.canvas.height,
            0,
            0,
            this.canvas.width,
            this.canvas.height
        )
    }
}

module.exports = Background;