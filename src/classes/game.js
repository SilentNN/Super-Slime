const Slime = require('./slime');
const Stair = require('./stairs');
const bg = require('../assets/images/cityscape_2x.png');

class Game {
    constructor (backgroundCanvas, stairCanvas, slimeCanvas) {
        this.steps = 0;
        this.highScore = 0;
        this.bgPos = 0;
        this.time = 10000;
        this.gameOver = false;
        this.score = document.getElementById('score');
        this.backgroundCanvas = backgroundCanvas;
        this.stairCanvas = stairCanvas;
        this.slimeCanvas = slimeCanvas;
        this.slimeCtx = this.slimeCanvas.getContext('2d');
        this.stairCtx = this.stairCanvas.getContext('2d');
        this.slime = new Slime (slimeCanvas);
        this.stairs = [];
        this.binds = this.keybinds.bind(this);
    }

    step(timeDelta) {
        this.drawBg();
        this.drawStairs();
        this.slime.draw();
    }

    drawBg() {
        let img = new Image();
        img.src = bg.default;
        let ctx = this.backgroundCanvas.getContext('2d');

        // ctx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);
        let heightAdjustment = this.steps*8 - 8*8;
        if (heightAdjustment < 0) heightAdjustment = 0;

        ctx.drawImage(
            img,
            (3840-this.backgroundCanvas.width)/2 + this.bgPos*15,
            2154-this.backgroundCanvas.height-heightAdjustment,
            this.backgroundCanvas.width,
            this.backgroundCanvas.height,
            0,
            0,
            this.backgroundCanvas.width,
            this.backgroundCanvas.height
        )
    }

    drawStairs() {
        this.stairCtx.clearRect(0,0,this.stairCanvas.width,this.stairCanvas.height);
        this.stairs.forEach(stair => {
            stair.render()
        })
    }

    generateStairs() {
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

    updateScore() {
        this.score.innerHTML = this.steps;
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

            this.updateScore();
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