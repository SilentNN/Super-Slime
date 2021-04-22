const Game = require('./classes/game');
const GameView = require('./classes/game_view');

document.addEventListener('DOMContentLoaded', () => {

    const bgCanvas = document.getElementById('bg');
    const stairCanvas = document.getElementById('stairs');
    const slimeCanvas = document.getElementById('slime');
    
    const gameView = new GameView(bgCanvas, stairCanvas, slimeCanvas);

    gameView.start();
})
