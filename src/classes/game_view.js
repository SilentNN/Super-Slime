const Game = require('./game');

class GameView {
    constructor () {
        this.bgCanvas = document.getElementById('bg');
        this.stairCanvas = document.getElementById('stairs');
        this.timerCanvas = document.getElementById('timer-canvas');
        this.slimeCanvas = document.getElementById('slime');
        this.scoreDiv = document.getElementById('score');
        this.bgmBtn = document.getElementById('bgm-button');
        this.bgmMusic = document.getElementById('bgm');
        this.sfxBtn = document.getElementById('sfx-button');
        this.sfxSound = document.getElementById('jump-sfx');

        this.highScore = 0;
        this.bindedGameOverbinds = this.gameOverBinds.bind(this);
        this.bgmMusic.volume = 0.2;
        this.sfxSound = 0.2;
        this.bgmBtn.addEventListener('click', this.handleBgmBtn.bind(this));
        this.sfxBtn.addEventListener('click', this.handleSfxBtn.bind(this));
    }

    handleBgmBtn() {
        if (this.bgmBtn.className === 'muted') {
            this.bgmMusic.play();
            this.bgmBtn.className = 'unmuted';
        }
        else {
            this.bgmMusic.pause();
            this.bgmBtn.className = 'muted';
        }
    }

    handleSfxBtn() {
        if (this.sfxBtn.className === 'muted') {
            this.sfxMuted = false;
            this.game.sfxMuted = false;
            this.sfxBtn.className = 'unmuted';
        }
        else {
            this.sfxMuted = true;
            this.game.sfxMuted = true;
            this.sfxBtn.className = 'muted';
        }
    }

    start() {
        this.lastTime = 0;
        this.game = new Game(this.bgCanvas, this.stairCanvas, this.slimeCanvas, this.scoreDiv, this.timerCanvas, this.sfxMuted);
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
        document.addEventListener('keydown', this.bindedGameOverbinds);
    }

    unbindGameOver() {
        document.removeEventListener('keydown', this.bindedGameOverbinds);
    }
    
    run() {
        requestAnimationFrame(this.animate.bind(this));
        const gameDiv = document.getElementById('game');
        gameDiv.classList.remove('hidden');
        const splashDiv = document.getElementById('splash');
        splashDiv.classList.add('hidden');
        this.bgmMusic.play();
    }
    
    animate(time) {
        requestAnimationFrame(this.animate.bind(this));
        const timeDelta = time - this.lastTime;
        if (this.game.gameOver) this.gameOver();
        this.game.step(timeDelta);
        this.lastTime = time;
    }

    gameOver() {
        this.game.gameOver = false;
        this.game.timer.started = false;
        this.game.timer.timeout = false;
        if (this.game.steps > this.highScore) this.highScore = this.game.steps;
        this.game.unbindKeys();

        const gameOverDiv = document.createElement('div');
        gameOverDiv.setAttribute('id', 'game-over');
        const gameOverH2 = document.createElement('h2');
        gameOverH2.setAttribute('class', 'game-over');
        const scoreH3 = document.createElement('h3');
        scoreH3.setAttribute('class', 'score');
        const highScoreH3 = document.createElement('h3');
        highScoreH3.setAttribute('class', 'high-score');

        gameOverH2.innerHTML = 'GAME OVER';
        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.game.steps);
        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.highScore);

        const restartBtn = document.createElement('button');
        restartBtn.setAttribute('id', 'restart');
        restartBtn.innerHTML = 'Retry';
        restartBtn.addEventListener('click', this.start.bind(this));
        this.bindGameOver();
        
        gameOverDiv.appendChild(gameOverH2);
        gameOverDiv.appendChild(scoreH3);
        gameOverDiv.appendChild(highScoreH3);
        gameOverDiv.appendChild(restartBtn);

        document.body.appendChild(gameOverDiv);

        this.game.gameOver = false;

    }
}

module.exports = GameView;