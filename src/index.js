const Game = require('./classes/game');
const GameView = require('./classes/game_view');

document.addEventListener('DOMContentLoaded', () => {
    const gameView = new GameView();
    
    const playBtn = document.getElementById('play-btn');

    playBtn.addEventListener('click', () => {
        gameView.start();
        gameView.run();
    })
})


