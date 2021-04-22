const Game = require('./game');

class GameView {
    constructor (game) {
        this.game = game;
    }

    start() {
        this.game.bindKeys();
        this.lastSteps = 0;
        this.game.generateStairs();
        setInterval(() => {
            this.game.drawBg();
            this.game.drawStairs();
            this.game.drawSlime();
        }, 1000/60); //60fps
    }

    // newGame() {
    //     let bgCanvas = document.getElementById('bg');
    //     let stairsCanvas = document.getElementById('stairs');
    //     let slimeCanvas = document.getElementById('slime');
    //     this.game = new Game(bgCanvas, stairsCanvas, slimeCanvas);
    // }

    // run() {
    //     setInterval(
    //         () => this.draw2(),
    //         500
    //     );
    // }

    // draw2() {
    //     this.draw(this.bgCanvas, bgImg);
    //     this.draw(this.stairsCanvas, stairsImg);
    // }

    // draw(canvas, imgSrc) {
    //     let img = new Image();
    //     img.src = imgSrc.default;
    //     console.log(img.src)
        
    //     let ctx = canvas.getContext('2d');
    //     canvas.width = 375;
    //     canvas.height = 812;

    //     ctx.mozImageSmoothingEnabled = false;
    //     ctx.webkitImageSmoothingEnabled = false;
    //     ctx.msImageSmoothingEnabled = false;
    //     ctx.imageSmoothingEnabled = false;

    //     ctx.drawImage(
    //         img,
    //         100,
    //         300,
    //         375,
    //         812,
    //         0,
    //         0,
    //         375,
    //         812
    //     );
    // }
}

module.exports = GameView;