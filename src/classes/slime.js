const slime_idle_left = require('../assets/images/slime_idle_left.png');
const slime_idle_right = require('../assets/images/slime_idle.png');
const slime_jump_left = require('../assets/images/slime_jump_left.png');
const slime_jump_right = require('../assets/images/slime_jump.png');

class Slime {
    constructor (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        
        this.upped = 0;
        this.slimeSize = 102;
        this.y = this.canvas.height-this.slimeSize+28-(this.upped*41*0.65);

        this.idleLeft = new Image();
        this.idleLeft.src = slime_idle_left.default;
        this.idleRight = new Image();
        this.idleRight.src = slime_idle_right.default;
        this.jumpLeft = new Image();
        this.jumpLeft.src = slime_jump_left.default;
        this.jumpRight = new Image();
        this.jumpRight.src = slime_jump_right.default;
        
        this.left = true;
        this.jumping = false;
        this.ticks = 0;
        this.frameIdx = 0;
        this.dead = false;
    }

    up() {
        this.upped++;
    }

    nextFrame() {
        if (this.ticks < 1) {
            this.ticks ++;
            return;
        }
        else this.ticks = 0;
        if (this.jumping) {
            if (this.frameIdx < 10) this.frameIdx++;
            else {
                this.frameIdx = 0;
                this.jumping = false;
            }
        } else {
            if (this.frameIdx < 7) this.frameIdx++;
            else this.frameIdx = 0;
        }
    }

    draw(timeDelta) {
        // const slimeSize = 76*.65;

        let img;
        if (this.jumping) {
            if (this.left) img = this.jumpLeft;
            else img = this.jumpRight;
        } else {
            if (this.left) img = this.idleLeft;
            else img = this.idleRight;
        }

        let slimeDestinationY = this.canvas.height-this.slimeSize+28-(this.upped*41*0.65);
        if (Math.abs(this.y - slimeDestinationY) > 0.1) this.y = this.y + 10 * ((slimeDestinationY - this.y) / timeDelta);

        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.drawImage(
            img, this.frameIdx*64, 0, 64, 64,
            (this.canvas.width-this.slimeSize)/2, this.y, this.slimeSize, this.slimeSize
        )
        this.nextFrame();
    }

}

module.exports = Slime;