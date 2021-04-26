const timerbarFull = require('../assets/images/timerbar_full.png');

class Timer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');

        this.fullWidth = 256;
        this.fullHeight = 44;

        this.img = new Image();
        this.img.src = timerbarFull.default;
        this.img.onload = () => {
            this.ctx.fillStyle = this.ctx.createPattern(this.img, 'no-repeat');
            this.loaded = true;
        }

        this.time = 10000;
        this.maxTime = 20000;
        this.difficultyFactor = 100;
        
    }

    step(timeDelta) {
        if (this.started) this.time = this.time - timeDelta * this.difficultyFactor / 100;
        if (this.time < 0) {
            this.timeout = true;
            this.time = 0;
        }
        this.draw();
    }

    addTime() {
        const addedTime = this.time + 2500;
        if (addedTime > this.maxTime) this.time = this.maxTime;
        else this.time = addedTime;
        this.difficultyFactor = this.difficultyFactor + 3;
    }
    
    draw() {
        if (!this.loaded) return;

        let width = this.time/this.maxTime*this.fullWidth;
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.ctx.fillRect(0,0,width,this.fullHeight);

    }
}

module.exports = Timer;