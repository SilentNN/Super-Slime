const Game = require('./classes/game');
const GameView = require('./classes/game_view');

document.addEventListener('DOMContentLoaded', () => {

    const bgCanvas = document.getElementById('bg');
    const stairsCanvas = document.getElementById('stairs');
    const slimeCanvas = document.getElementById('slime');
    
    const game = new Game(bgCanvas, stairsCanvas, slimeCanvas);
    const gameView = new GameView(game);

    gameView.start();
})
