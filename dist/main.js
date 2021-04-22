/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/cityscape_2x.png":
/*!********************************************!*\
  !*** ./src/assets/images/cityscape_2x.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6de87045b59057d0a5511720bbd3ebfd.png\");\n\n//# sourceURL=webpack:///./src/assets/images/cityscape_2x.png?");

/***/ }),

/***/ "./src/assets/images/slime_sprites.png":
/*!*********************************************!*\
  !*** ./src/assets/images/slime_sprites.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9a117b8771b11707dfb363fa9c71e502.png\");\n\n//# sourceURL=webpack:///./src/assets/images/slime_sprites.png?");

/***/ }),

/***/ "./src/assets/images/stair.png":
/*!*************************************!*\
  !*** ./src/assets/images/stair.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fc04654b9463ee1f745a3c9537adeaf5.png\");\n\n//# sourceURL=webpack:///./src/assets/images/stair.png?");

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Slime = __webpack_require__(/*! ./slime */ \"./src/classes/slime.js\");\nconst Stair = __webpack_require__(/*! ./stairs */ \"./src/classes/stairs.js\");\nconst bg = __webpack_require__(/*! ../assets/images/cityscape_2x.png */ \"./src/assets/images/cityscape_2x.png\");\n\nclass Game {\n    constructor (backgroundCanvas, stairCanvas, slimeCanvas) {\n        this.steps = 0;\n        this.highScore = 0;\n        this.bgPos = 0;\n        this.score = document.getElementById('score');\n        this.time = 10000;\n        this.backgroundCanvas = backgroundCanvas;\n        this.stairCanvas = stairCanvas;\n        this.slimeCanvas = slimeCanvas;\n        this.slimeCtx = this.slimeCanvas.getContext('2d');\n        this.stairCtx = this.stairCanvas.getContext('2d');\n        this.slime = new Slime (slimeCanvas);\n        this.stairs = [];\n        this.binds = this.keybinds.bind(this);\n    }\n\n    drawBg() {\n        let img = new Image();\n        img.src = bg.default;\n        let ctx = this.backgroundCanvas.getContext('2d');\n\n        // ctx.clearRect(0, 0, this.backgroundCanvas.width, this.backgroundCanvas.height);\n        let heightAdjustment = this.steps*8 - 8*8;\n        if (heightAdjustment < 0) heightAdjustment = 0;\n\n        ctx.drawImage(\n            img,\n            (3840-this.backgroundCanvas.width)/2 + this.bgPos*15,\n            2154-this.backgroundCanvas.height-heightAdjustment,\n            this.backgroundCanvas.width,\n            this.backgroundCanvas.height,\n            0,\n            0,\n            this.backgroundCanvas.width,\n            this.backgroundCanvas.height\n        )\n    }\n\n    drawStairs() {\n        this.stairCtx.clearRect(0,0,this.stairCanvas.width,this.stairCanvas.height);\n        this.stairs.forEach(stair => {\n            stair.render()\n        })\n    }\n\n    drawSlime() {\n        this.slimeCtx.clearRect(0,0,this.slimeCanvas.width,this.slimeCanvas.height);\n        this.slime.draw();\n    }\n\n    generateStairs() {\n        let pos = -2;\n        let height = 1;\n\n        this.stairs.push(new Stair({\n            canvas: this.stairCanvas,\n            pos: -1,\n            height: 0\n        }))\n\n        for (let i = 0; i < 31; i++) {\n            this.stairs.push(new Stair({\n                canvas: this.stairCanvas,\n                pos: pos,\n                height: height\n            }));\n            height++;\n            if (Math.random() > 0.5) {\n                pos++;\n            } else {\n                pos--;\n            }\n        }\n    }\n\n    addNewStair() {\n        let nextPos;\n        const nextHeight = this.stairs[this.stairs.length-1].height + 1;\n        if (Math.random() > 0.5) {\n            nextPos = this.stairs[this.stairs.length-1].pos + 1;\n        } else {\n            nextPos = this.stairs[this.stairs.length-1].pos - 1;\n        }\n        this.stairs.push(new Stair({\n            canvas: this.stairCanvas,\n            pos: nextPos,\n            height: nextHeight\n        }))\n    }\n\n    updateScore() {\n        this.score.innerHTML = this.steps;\n    }\n\n    move() {\n        if (this.slime.left) {\n            this.moveLeft(true);\n        } else {\n            this.moveLeft(false);\n        }\n    }\n\n    turn() {\n        if (this.slime.left) {\n            this.moveLeft(false);\n        } else {\n            this.moveLeft(true);\n        }\n        this.slime.left = !this.slime.left;\n    }\n\n    moveLeft(movingLeft) {\n        let nextStep;\n        if (this.steps < 8) {\n            nextStep = this.steps;\n        } else nextStep = 8;\n\n        if ((this.stairs[nextStep].pos === -1 && movingLeft) || (!movingLeft && this.stairs[nextStep].pos === 1)) {\n            if (nextStep < 8) this.slime.up();\n            else this.stairs = this.stairs.slice(1);\n\n            this.stairs.forEach( stair => {\n                if (movingLeft) stair.pos++;\n                else stair.pos--;\n                if (nextStep === 8) stair.height--;\n            })\n\n            this.steps++;\n\n            if (movingLeft) this.bgPos--;\n            else this.bgPos++;\n\n            if (nextStep === 8) this.addNewStair();\n\n            this.updateScore();\n        } else {\n            this.gameOver();\n        }\n    }\n\n    gameOver() {\n        if (this.steps > this.highScore) this.highScore = this.steps;\n        this.unbindKeys();\n\n        const gameOverDiv = document.createElement('div');\n        gameOverDiv.setAttribute('id', 'game-over');\n        const scoreH3 = document.createElement('h3');\n        scoreH3.setAttribute('class', 'score');\n        const highScoreH3 = document.createElement('h3');\n        highScoreH3.setAttribute('class', 'high-score');\n\n        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.steps);\n        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.highScore);\n\n        const restartBtn = document.createElement('button');\n        restartBtn.setAttribute('id', 'restart');\n        restartBtn.innerHTML = 'Retry';\n\n        gameOverDiv.appendChild(scoreH3);\n        gameOverDiv.appendChild(highScoreH3);\n        gameOverDiv.appendChild(restartBtn);\n\n        document.body.appendChild(gameOverDiv);\n\n    }\n\n    keybinds(e) {\n        switch (e.keyCode) {\n            case 74: //j\n            case 75: //k\n                this.move();\n                break;\n            case 70: //f\n            case 68: //d\n                this.turn();\n                break;\n            default:\n                break;\n        }\n    }\n\n    bindKeys() {\n        document.addEventListener(\"keydown\", this.binds);\n    }\n\n    unbindKeys() {\n        document.removeEventListener(\"keydown\", this.binds);\n    }\n \n}\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/game_view.js":
/*!**********************************!*\
  !*** ./src/classes/game_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/classes/game.js\");\n\nclass GameView {\n    constructor (game) {\n        this.game = game;\n    }\n\n    start() {\n        this.game.bindKeys();\n        this.lastSteps = 0;\n        this.game.generateStairs();\n        setInterval(() => {\n            this.game.drawBg();\n            this.game.drawStairs();\n            this.game.drawSlime();\n        }, 1000/60); //60fps\n    }\n\n    // newGame() {\n    //     let bgCanvas = document.getElementById('bg');\n    //     let stairsCanvas = document.getElementById('stairs');\n    //     let slimeCanvas = document.getElementById('slime');\n    //     this.game = new Game(bgCanvas, stairsCanvas, slimeCanvas);\n    // }\n\n    // run() {\n    //     setInterval(\n    //         () => this.draw2(),\n    //         500\n    //     );\n    // }\n\n    // draw2() {\n    //     this.draw(this.bgCanvas, bgImg);\n    //     this.draw(this.stairsCanvas, stairsImg);\n    // }\n\n    // draw(canvas, imgSrc) {\n    //     let img = new Image();\n    //     img.src = imgSrc.default;\n    //     console.log(img.src)\n        \n    //     let ctx = canvas.getContext('2d');\n    //     canvas.width = 375;\n    //     canvas.height = 812;\n\n    //     ctx.mozImageSmoothingEnabled = false;\n    //     ctx.webkitImageSmoothingEnabled = false;\n    //     ctx.msImageSmoothingEnabled = false;\n    //     ctx.imageSmoothingEnabled = false;\n\n    //     ctx.drawImage(\n    //         img,\n    //         100,\n    //         300,\n    //         375,\n    //         812,\n    //         0,\n    //         0,\n    //         375,\n    //         812\n    //     );\n    // }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/classes/game_view.js?");

/***/ }),

/***/ "./src/classes/slime.js":
/*!******************************!*\
  !*** ./src/classes/slime.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const spriteSheet = __webpack_require__(/*! ../assets/images/slime_sprites.png */ \"./src/assets/images/slime_sprites.png\");\n\nclass Slime {\n    constructor (canvas) {\n        this.left = true;\n        this.stepped = 0;\n        this.img = new Image();\n        this.img.src = spriteSheet.default;\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n    }\n\n    up() {\n        this.stepped++;\n    }\n\n    draw() {\n        // const slimeSize = 76*.65;\n        const slimeSize = 128 * 0.5;\n        this.ctx.drawImage(\n            this.img, (7-1)*128, (2-1)*128, 128, 128,\n            (this.canvas.width-slimeSize)/2, this.canvas.height-slimeSize-(this.stepped*41*0.65), slimeSize, slimeSize\n        )\n    }\n\n}\n\nmodule.exports = Slime;\n\n//# sourceURL=webpack:///./src/classes/slime.js?");

/***/ }),

/***/ "./src/classes/stairs.js":
/*!*******************************!*\
  !*** ./src/classes/stairs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const stairSprite = __webpack_require__(/*! ../assets/images/stair.png */ \"./src/assets/images/stair.png\");\n\nclass Stair {\n    constructor(options) {\n        this.canvas = options.canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.pos = options.pos;\n        this.height = options.height;\n    }\n\n    render (width, height, sheetPosX, sheetPosY) {\n        this.ctx.mozImageSmoothingEnabled = false;\n        this.ctx.webkitImageSmoothingEnabled = false;\n        this.ctx.msImageSmoothingEnabled = false;\n        this.ctx.imageSmoothingEnabled = false;\n\n        let img = new Image();\n        img.src = stairSprite.default;\n\n        const stairHeight = 41 * 0.65;\n        const stairWidth = 76 * 0.65;\n\n        this.ctx.drawImage(\n            img, \n            // this.pos * 76,\n            // this.height * 41,\n            // 76,\n            // 41\n            (this.canvas.width - stairWidth) / 2 + this.pos * stairWidth,\n            this.canvas.height - (1 + this.height) * stairHeight,\n            stairWidth,\n            stairHeight\n        );\n    }\n}\n\nmodule.exports = Stair\n\n//# sourceURL=webpack:///./src/classes/stairs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\nconst GameView = __webpack_require__(/*! ./classes/game_view */ \"./src/classes/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const bgCanvas = document.getElementById('bg');\n    const stairsCanvas = document.getElementById('stairs');\n    const slimeCanvas = document.getElementById('slime');\n    \n    const game = new Game(bgCanvas, stairsCanvas, slimeCanvas);\n    const gameView = new GameView(game);\n\n    gameView.start();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });