const Slime = require('./slime');
const Background = require('./background');
const Stairs = require('./stairs');

class Game {
    constructor (bgCanvas, stairCanvas, slimeCanvas, scoreDiv) {
        this.bgCanvas = bgCanvas;

        this.steps = 0;
        
        this.timer = 10000;
        this.gameOver = false;
        this.scoreDiv = scoreDiv;
        
        this.binds = this.keybinds.bind(this);

        this.bg = new Background(bgCanvas);
        this.slime = new Slime (slimeCanvas);
        this.stairs = new Stairs(stairCanvas);

        this.jumpSfx = document.getElementById('jump-sfx');
    }

    step(timeDelta) {
        this.bg.draw(timeDelta);
        this.stairs.draw(timeDelta);
        this.slime.draw(timeDelta);
        this.scoreDiv.innerHTML = this.steps;
    }

    climb() {
        if (this.slime.left) {
            this.climbLeft(true);
        } else {
            this.climbLeft(false);
        }
    }

    turn() {
        if (this.slime.left) {
            this.climbLeft(false);
        } else {
            this.climbLeft(true);
        }
        this.slime.left = !this.slime.left;
    }

    climbLeft(climbingLeft) {
        let nextStep;
        if (this.steps < 8) {
            nextStep = this.steps;
        } else nextStep = 8;

        if ((this.stairs.all[nextStep].pos === -1 && climbingLeft) || (!climbingLeft && this.stairs.all[nextStep].pos === 1)) {
            this.jumpSfx.fastSeek(0);
            this.jumpSfx.play();
            this.slime.jumping = true;
            this.slime.frameIdx = 0;
            if (nextStep < 8) this.slime.up();
            else this.stairs.all = this.stairs.all.slice(1);

            this.stairs.all.forEach( stair => {
                if (climbingLeft) stair.pos++;
                else stair.pos--;
                if (nextStep === 8) stair.height--;
            })

            this.steps++;

            if (climbingLeft) this.bgPos--;
            else this.bgPos++;

            if (nextStep === 8) this.stairs.addNewStair();

        } else {
            this.gameOver = true;
        }
    }

    keybinds(e) {
        switch (e.keyCode) {
            case 74: //j
            case 75: //k
            case 39: //right arrow
                this.climb();
                break;
            case 70: //f
            case 68: //d
            case 37: //left arrow
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