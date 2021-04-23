const Game = require('./game');

class GameView {
    constructor () {
        this.bgCanvas = document.getElementById('bg');
        this.stairCanvas = document.getElementById('stairs');
        this.slimeCanvas = document.getElementById('slime');
        this.scoreDiv = document.getElementById('score');
        this.muteBtn = document.getElementById('mute');
        this.bgm = document.getElementById('bgm')

        this.highScore = 0;
        this.bindedBinds = this.gameOverBinds.bind(this);
        this.muteBtn.addEventListener('click', this.handleMuteBtn.bind(this));

    }

    handleMuteBtn() {
        if (this.muteBtn.className === 'muted') {
            this.bgm.play();
            this.muteBtn.className = 'unmuted';
        }
        else {
            this.bgm.pause();
            this.muteBtn.className = 'muted';
        }
    }

    start() {
        this.lastTime = 0;
        this.game = new Game(this.bgCanvas, this.stairCanvas, this.slimeCanvas, this.scoreDiv);
        let gameOverDiv = document.getElementById('game-over');
        if (gameOverDiv) gameOverDiv.remove();
        this.game.bindKeys();
    }

    gameOverBinds(e) {
        switch (e.keyCode) {
            case 13: //enter
                e.preventDefault();
                this.start();
                this.unbindGameOver();
                break;
            default:
                break;
        }
    }

    bindGameOver() {
        document.addEventListener('keydown', this.bindedBinds);
    }

    unbindGameOver() {
        document.removeEventListener('keydown', this.bindedBinds);
    }
    
    run() {
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
        this.bindGameOver();
        

        gameOverDiv.appendChild(scoreH3);
        gameOverDiv.appendChild(highScoreH3);
        gameOverDiv.appendChild(restartBtn);

        document.body.appendChild(gameOverDiv);

        this.game.gameOver = false;

    }
}

module.exports = GameView;