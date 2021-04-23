const Game = require('./classes/game');
const GameView = require('./classes/game_view');

document.addEventListener('DOMContentLoaded', () => {
    
    const gameView = new GameView();

    gameView.start();
    gameView.run();
})
