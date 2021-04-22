const spriteSheet = require('../assets/images/slime_sprites.png');

class Slime {
    constructor (canvas) {
        this.left = true;
        this.stepped = 0;
        this.img = new Image();
        this.img.src = spriteSheet.default;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    up() {
        this.stepped++;
    }

    draw() {
        // const slimeSize = 76*.65;
        const slimeSize = 128 * 0.5;
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.drawImage(
            this.img, (7-1)*128, (2-1)*128, 128, 128,
            (this.canvas.width-slimeSize)/2, this.canvas.height-slimeSize-(this.stepped*41*0.65), slimeSize, slimeSize
        )
    }

}

module.exports = Slime;