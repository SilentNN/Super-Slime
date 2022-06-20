const Slime = require('./slime');
const Background = require('./background');
const Stairs = require('./stairs');
const Timer = require('./timer')

class Game {
    constructor (bgCanvas, stairCanvas, slimeCanvas, scoreDiv, timerCanvas, sfxMuted) {
        this.bgCanvas = bgCanvas;

        this.steps = 0;
        this.bgPos = 0;
        
        this.gameOver = false;
        this.scoreDiv = scoreDiv;
        
        this.binds = this.keybinds.bind(this);

        this.bg = new Background(bgCanvas);
        this.slime = new Slime (slimeCanvas);
        this.stairs = new Stairs(stairCanvas);
        this.timer = new Timer(timerCanvas);

        this.jumpSfx = document.getElementById('jump-sfx');
        this.sfxMuted = sfxMuted;
    }

    step(timeDelta) {
        this.bg.draw(timeDelta, this.steps, this.bgPos);
        this.stairs.draw(timeDelta);
        this.slime.draw(timeDelta);
        this.timer.step(timeDelta);
        this.scoreDiv.innerHTML = this.steps;
        if (this.timer.timeout) this.gameOver = true;
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
        const centerStep = 14;
        if (this.steps < centerStep) {
            nextStep = this.steps;
            if (this.steps === 0) this.timer.started = true;
        } else nextStep = centerStep;

        if ((this.stairs.all[nextStep].pos === -1 && climbingLeft) || (!climbingLeft && this.stairs.all[nextStep].pos === 1)) {
            if (!this.sfxMuted) {
                this.jumpSfx.currentTime = 0;
                this.jumpSfx.play();
            }
            this.slime.jumping = true;
            this.slime.frameIdx = 0;
            if (nextStep < centerStep) this.slime.up();
            else this.stairs.all = this.stairs.all.slice(1);

            this.stairs.all.forEach( stair => {
                if (climbingLeft) stair.pos++;
                else stair.pos--;
                if (nextStep === centerStep) stair.height--;
            })

            this.steps++;
            this.timer.addTime();

            if (climbingLeft) this.bgPos--;
            else this.bgPos++;

            if (nextStep === centerStep) this.stairs.addNewStair();

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