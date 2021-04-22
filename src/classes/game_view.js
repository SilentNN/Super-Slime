const Game = require('./game');

class GameView {
    constructor (game) {
        this.game = game;
    }

    start() {
        this.lastTime = 0;
        this.game.bindKeys();
        this.lastSteps = 0;
        this.game.generateStairs();
        // setInterval(() => {
        //     this.game.drawBg();
        //     this.game.drawStairs();
        //     this.game.slime.draw();
        // }, 1000/60); //60fps
        requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        requestAnimationFrame(this.animate.bind(this));
        const timeDelta = time - this.lastTime;
        if (this.game.gameOver) this.gameOver();
        this.game.step(timeDelta);
        this.lastTime = time;
    }

    gameOver() {
        if (this.steps > this.highScore) this.highScore = this.steps;
        this.game.unbindKeys();

        const gameOverDiv = document.createElement('div');
        gameOverDiv.setAttribute('id', 'game-over');
        const scoreH3 = document.createElement('h3');
        scoreH3.setAttribute('class', 'score');
        const highScoreH3 = document.createElement('h3');
        highScoreH3.setAttribute('class', 'high-score');

        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.game.steps);
        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.game.highScore);

        const restartBtn = document.createElement('button');
        restartBtn.setAttribute('id', 'restart');
        restartBtn.innerHTML = 'Retry';

        gameOverDiv.appendChild(scoreH3);
        gameOverDiv.appendChild(highScoreH3);
        gameOverDiv.appendChild(restartBtn);

        document.body.appendChild(gameOverDiv);

        this.game.gameOver = false;

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