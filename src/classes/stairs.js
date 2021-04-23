const Stair = require('./stair');

class Stairs {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.generateStairs();
    }

    draw(timeDelta) {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        this.all.forEach(stair => {
            stair.draw(timeDelta)
        })
    }

    generateStairs() {
        this.all = [];

        let pos = -2;
        let height = 1;

        this.all.push(new Stair({
            canvas: this.canvas,
            pos: -1,
            height: 0
        }))

        for (let i = 0; i < 31; i++) {
            this.all.push(new Stair({
                canvas: this.canvas,
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
        const nextHeight = this.all[this.all.length-1].height + 1;
        if (Math.random() > 0.5) {
            nextPos = this.all[this.all.length-1].pos + 1;
        } else {
            nextPos = this.all[this.all.length-1].pos - 1;
        }
        this.all.push(new Stair({
            canvas: this.canvas,
            pos: nextPos,
            height: nextHeight
        }))
    }
}

module.exports = Stairs;