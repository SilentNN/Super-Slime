const Game = require('./game');

class GameView {
    constructor (bgCanvas, stairCanvas, slimeCanvas) {
        this.bgCanvas = bgCanvas;
        this.stairCanvas = stairCanvas;
        this.slimeCanvas = slimeCanvas;
        this.highScore = 0;
    }

    start() {
        this.lastTime = 0;
        this.game = new Game(this.bgCanvas, this.stairCanvas, this.slimeCanvas);
        let gameOverDiv = document.getElementById('game-over');
        if (gameOverDiv) gameOverDiv.remove();
        this.game.bindKeys();
    }
    
    run () {
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
        if (this.game.steps > this.highScore) this.highScore = this.game.steps;
        this.game.unbindKeys();

        const gameOverDiv = document.createElement('div');
        gameOverDiv.setAttribute('id', 'game-over');
        const scoreH3 = document.createElement('h3');
        scoreH3.setAttribute('class', 'score');
        const highScoreH3 = document.createElement('h3');
        highScoreH3.setAttribute('class', 'high-score');

        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.game.steps);
        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.highScore);

        const restartBtn = document.createElement('button');
        restartBtn.setAttribute('id', 'restart');
        restartBtn.innerHTML = 'Retry';
        restartBtn.addEventListener('click', this.start.bind(this));

        gameOverDiv.appendChild(scoreH3);
        gameOverDiv.appendChild(highScoreH3);
        gameOverDiv.appendChild(restartBtn);

        document.body.appendChild(gameOverDiv);

        this.game.gameOver = false;

    }
}

module.exports = GameView;