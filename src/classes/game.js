const Slime = require('./slime');
const Stair = require('./stairs');
const bg = require('../assets/images/cityscape_2x.png');

class Game {
    constructor (bgCanvas, stairCanvas, slimeCanvas) {
        this.bgCanvas = bgCanvas;
        this.stairCanvas = stairCanvas;
        this.slimeCanvas = slimeCanvas;
        this.slimeCtx = this.slimeCanvas.getContext('2d');
        this.stairCtx = this.stairCanvas.getContext('2d');

        this.steps = 0;
        this.bgPos = 0;
        this.bgX = (3840-this.bgCanvas.width)/2 + this.bgPos*15;
        this.bgY = 2154-this.bgCanvas.height;
        this.timer = 10000;
        this.gameOver = false;
        this.score = document.getElementById('score');
        this.slime = new Slime (slimeCanvas);

        this.binds = this.keybinds.bind(this);
        this.generateStairs();
    }

    step(timeDelta) {
        this.drawBg(timeDelta);
        this.drawStairs(timeDelta);
        this.slime.draw(timeDelta);
        this.score.innerHTML = this.steps;
    }

    drawBg(timeDelta) {
        let img = new Image();
        img.src = bg.default;
        let ctx = this.bgCanvas.getContext('2d');

        // ctx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);
        let heightAdjustment = this.steps*8 - 8*8;
        if (heightAdjustment < 0) heightAdjustment = 0;

        let bgDestinationX = (3840-this.bgCanvas.width)/2 + this.bgPos*15;
        let bgDestinationY = 2154-this.bgCanvas.height-heightAdjustment;

        if (Math.abs(this.bgX - bgDestinationX) > 0.1) this.bgX = this.bgX + 3*((bgDestinationX - this.bgX) / timeDelta);
        if (Math.abs(this.bgY - bgDestinationY) > 0.1) this.bgY = this.bgY + 3*((bgDestinationY - this.bgY) / timeDelta);

        ctx.drawImage(
            img,
            this.bgX,
            this.bgY,
            this.bgCanvas.width,
            this.bgCanvas.height,
            0,
            0,
            this.bgCanvas.width,
            this.bgCanvas.height
        )
    }

    drawStairs(timeDelta) {
        this.stairCtx.clearRect(0,0,this.stairCanvas.width,this.stairCanvas.height);
        this.stairs.forEach(stair => {
            stair.draw(timeDelta)
        })
    }

    generateStairs() {
        this.stairs = [];

        let pos = -2;
        let height = 1;

        this.stairs.push(new Stair({
            canvas: this.stairCanvas,
            pos: -1,
            height: 0
        }))

        for (let i = 0; i < 31; i++) {
            this.stairs.push(new Stair({
                canvas: this.stairCanvas,
                pos: pos,
                height: height
            }));
            height++;
            if (Math.random() > 0.5) {
                pos++;
            } else {
                pos--;
            }
        }
    }

    addNewStair() {
        let nextPos;
        const nextHeight = this.stairs[this.stairs.length-1].height + 1;
        if (Math.random() > 0.5) {
            nextPos = this.stairs[this.stairs.length-1].pos + 1;
        } else {
            nextPos = this.stairs[this.stairs.length-1].pos - 1;
        }
        this.stairs.push(new Stair({
            canvas: this.stairCanvas,
            pos: nextPos,
            height: nextHeight
        }))
    }

    move() {
        if (this.slime.left) {
            this.moveLeft(true);
        } else {
            this.moveLeft(false);
        }
    }

    turn() {
        if (this.slime.left) {
            this.moveLeft(false);
        } else {
            this.moveLeft(true);
        }
        this.slime.left = !this.slime.left;
    }

    moveLeft(movingLeft) {
        let nextStep;
        if (this.steps < 8) {
            nextStep = this.steps;
        } else nextStep = 8;

        if ((this.stairs[nextStep].pos === -1 && movingLeft) || (!movingLeft && this.stairs[nextStep].pos === 1)) {
            this.slime.jumping = true;
            this.slime.frameIdx = 0;
            if (nextStep < 8) this.slime.up();
            else this.stairs = this.stairs.slice(1);

            this.stairs.forEach( stair => {
                if (movingLeft) stair.pos++;
                else stair.pos--;
                if (nextStep === 8) stair.height--;
            })

            this.steps++;

            if (movingLeft) this.bgPos--;
            else this.bgPos++;

            if (nextStep === 8) this.addNewStair();

        } else {
            this.gameOver = true;
        }
    }

    keybinds(e) {
        switch (e.keyCode) {
            case 74: //j
            case 75: //k
                this.move();
                break;
            case 70: //f
            case 68: //d
                this.turn();
                break;
            default:
                break;
        }
    }

    bindKeys() {
        document.addEventListener("keydown", this.binds);
    }

    unbindKeys() {
        document.removeEventListener("keydown", this.binds);
    }
 
}

module.exports = Game