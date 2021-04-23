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

/***/ "./src/assets/images/slime_idle.png":
/*!******************************************!*\
  !*** ./src/assets/images/slime_idle.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"8f43af09e29f5a1c01a3bd862d8377c9.png\");\n\n//# sourceURL=webpack:///./src/assets/images/slime_idle.png?");

/***/ }),

/***/ "./src/assets/images/slime_idle_left.png":
/*!***********************************************!*\
  !*** ./src/assets/images/slime_idle_left.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"4a48e5e0793d5a4ec64961d5df948b12.png\");\n\n//# sourceURL=webpack:///./src/assets/images/slime_idle_left.png?");

/***/ }),

/***/ "./src/assets/images/slime_jump.png":
/*!******************************************!*\
  !*** ./src/assets/images/slime_jump.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"80451b1e58fb999e5ac63579d2094f1d.png\");\n\n//# sourceURL=webpack:///./src/assets/images/slime_jump.png?");

/***/ }),

/***/ "./src/assets/images/slime_jump_left.png":
/*!***********************************************!*\
  !*** ./src/assets/images/slime_jump_left.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"56da4198c6ae09d8f1560a42d40ac231.png\");\n\n//# sourceURL=webpack:///./src/assets/images/slime_jump_left.png?");

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

eval("const Slime = __webpack_require__(/*! ./slime */ \"./src/classes/slime.js\");\nconst Stair = __webpack_require__(/*! ./stairs */ \"./src/classes/stairs.js\");\nconst bg = __webpack_require__(/*! ../assets/images/cityscape_2x.png */ \"./src/assets/images/cityscape_2x.png\");\n\nclass Game {\n    constructor (bgCanvas, stairCanvas, slimeCanvas) {\n        this.bgCanvas = bgCanvas;\n        this.stairCanvas = stairCanvas;\n        this.slimeCanvas = slimeCanvas;\n        this.slimeCtx = this.slimeCanvas.getContext('2d');\n        this.stairCtx = this.stairCanvas.getContext('2d');\n\n        this.steps = 0;\n        this.bgPos = 0;\n        this.bgX = (3840-this.bgCanvas.width)/2 + this.bgPos*15;\n        this.bgY = 2154-this.bgCanvas.height;\n        this.timer = 10000;\n        this.gameOver = false;\n        this.score = document.getElementById('score');\n        this.slime = new Slime (slimeCanvas);\n\n        this.binds = this.keybinds.bind(this);\n        this.generateStairs();\n    }\n\n    step(timeDelta) {\n        this.drawBg(timeDelta);\n        this.drawStairs(timeDelta);\n        this.slime.draw(timeDelta);\n        this.score.innerHTML = this.steps;\n    }\n\n    drawBg(timeDelta) {\n        let img = new Image();\n        img.src = bg.default;\n        let ctx = this.bgCanvas.getContext('2d');\n\n        // ctx.clearRect(0, 0, this.bgCanvas.width, this.bgCanvas.height);\n        let heightAdjustment = this.steps*8 - 8*8;\n        if (heightAdjustment < 0) heightAdjustment = 0;\n\n        let bgDestinationX = (3840-this.bgCanvas.width)/2 + this.bgPos*15;\n        let bgDestinationY = 2154-this.bgCanvas.height-heightAdjustment;\n\n        if (Math.abs(this.bgX - bgDestinationX) > 0.1) this.bgX = this.bgX + 3*((bgDestinationX - this.bgX) / timeDelta);\n        if (Math.abs(this.bgY - bgDestinationY) > 0.1) this.bgY = this.bgY + 3*((bgDestinationY - this.bgY) / timeDelta);\n\n        ctx.drawImage(\n            img,\n            this.bgX,\n            this.bgY,\n            this.bgCanvas.width,\n            this.bgCanvas.height,\n            0,\n            0,\n            this.bgCanvas.width,\n            this.bgCanvas.height\n        )\n    }\n\n    drawStairs(timeDelta) {\n        this.stairCtx.clearRect(0,0,this.stairCanvas.width,this.stairCanvas.height);\n        this.stairs.forEach(stair => {\n            stair.draw(timeDelta)\n        })\n    }\n\n    generateStairs() {\n        this.stairs = [];\n\n        let pos = -2;\n        let height = 1;\n\n        this.stairs.push(new Stair({\n            canvas: this.stairCanvas,\n            pos: -1,\n            height: 0\n        }))\n\n        for (let i = 0; i < 31; i++) {\n            this.stairs.push(new Stair({\n                canvas: this.stairCanvas,\n                pos: pos,\n                height: height\n            }));\n            height++;\n            if (Math.random() > 0.5) {\n                pos++;\n            } else {\n                pos--;\n            }\n        }\n    }\n\n    addNewStair() {\n        let nextPos;\n        const nextHeight = this.stairs[this.stairs.length-1].height + 1;\n        if (Math.random() > 0.5) {\n            nextPos = this.stairs[this.stairs.length-1].pos + 1;\n        } else {\n            nextPos = this.stairs[this.stairs.length-1].pos - 1;\n        }\n        this.stairs.push(new Stair({\n            canvas: this.stairCanvas,\n            pos: nextPos,\n            height: nextHeight\n        }))\n    }\n\n    move() {\n        if (this.slime.left) {\n            this.moveLeft(true);\n        } else {\n            this.moveLeft(false);\n        }\n    }\n\n    turn() {\n        if (this.slime.left) {\n            this.moveLeft(false);\n        } else {\n            this.moveLeft(true);\n        }\n        this.slime.left = !this.slime.left;\n    }\n\n    moveLeft(movingLeft) {\n        let nextStep;\n        if (this.steps < 8) {\n            nextStep = this.steps;\n        } else nextStep = 8;\n\n        if ((this.stairs[nextStep].pos === -1 && movingLeft) || (!movingLeft && this.stairs[nextStep].pos === 1)) {\n            this.slime.jumping = true;\n            this.slime.frameIdx = 0;\n            if (nextStep < 8) this.slime.up();\n            else this.stairs = this.stairs.slice(1);\n\n            this.stairs.forEach( stair => {\n                if (movingLeft) stair.pos++;\n                else stair.pos--;\n                if (nextStep === 8) stair.height--;\n            })\n\n            this.steps++;\n\n            if (movingLeft) this.bgPos--;\n            else this.bgPos++;\n\n            if (nextStep === 8) this.addNewStair();\n\n        } else {\n            this.gameOver = true;\n        }\n    }\n\n    keybinds(e) {\n        switch (e.keyCode) {\n            case 74: //j\n            case 75: //k\n            case 39: //right arrow\n                this.move();\n                break;\n            case 70: //f\n            case 68: //d\n            case 37: //left arrow\n                this.turn();\n                break;\n            default:\n                break;\n        }\n    }\n\n    bindKeys() {\n        document.addEventListener(\"keydown\", this.binds);\n    }\n\n    unbindKeys() {\n        document.removeEventListener(\"keydown\", this.binds);\n    }\n \n}\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/game_view.js":
/*!**********************************!*\
  !*** ./src/classes/game_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/classes/game.js\");\n\nclass GameView {\n    constructor (bgCanvas, stairCanvas, slimeCanvas) {\n        this.bgCanvas = bgCanvas;\n        this.stairCanvas = stairCanvas;\n        this.slimeCanvas = slimeCanvas;\n        this.highScore = 0;\n        this.bindedBinds = this.gameOverBinds.bind(this);\n    }\n\n    start() {\n        this.lastTime = 0;\n        this.game = new Game(this.bgCanvas, this.stairCanvas, this.slimeCanvas);\n        let gameOverDiv = document.getElementById('game-over');\n        if (gameOverDiv) gameOverDiv.remove();\n        this.game.bindKeys();\n    }\n\n    gameOverBinds(e) {\n        switch (e.keyCode) {\n            case 13: //enter\n                this.start();\n                this.unbindGameOver();\n                break;\n            default:\n                break;\n        }\n    }\n\n    bindGameOver() {\n        document.addEventListener('keydown', this.bindedBinds);\n    }\n\n    unbindGameOver() {\n        document.removeEventListener('keydown', this.bindedBinds);\n    }\n    \n    run() {\n        requestAnimationFrame(this.animate.bind(this));\n    }\n    \n    animate(time) {\n        requestAnimationFrame(this.animate.bind(this));\n        const timeDelta = time - this.lastTime;\n        if (this.game.gameOver) this.gameOver();\n        this.game.step(timeDelta);\n        this.lastTime = time;\n    }\n\n    gameOver() {\n        if (this.game.steps > this.highScore) this.highScore = this.game.steps;\n        this.game.unbindKeys();\n\n        const gameOverDiv = document.createElement('div');\n        gameOverDiv.setAttribute('id', 'game-over');\n        const scoreH3 = document.createElement('h3');\n        scoreH3.setAttribute('class', 'score');\n        const highScoreH3 = document.createElement('h3');\n        highScoreH3.setAttribute('class', 'high-score');\n\n        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.game.steps);\n        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.highScore);\n\n        const restartBtn = document.createElement('button');\n        restartBtn.setAttribute('id', 'restart');\n        restartBtn.innerHTML = 'Retry';\n        restartBtn.addEventListener('click', this.start.bind(this));\n        this.bindGameOver();\n        \n\n        gameOverDiv.appendChild(scoreH3);\n        gameOverDiv.appendChild(highScoreH3);\n        gameOverDiv.appendChild(restartBtn);\n\n        document.body.appendChild(gameOverDiv);\n\n        this.game.gameOver = false;\n\n    }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/classes/game_view.js?");

/***/ }),

/***/ "./src/classes/slime.js":
/*!******************************!*\
  !*** ./src/classes/slime.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const slime_idle_left = __webpack_require__(/*! ../assets/images/slime_idle_left.png */ \"./src/assets/images/slime_idle_left.png\");\nconst slime_idle_right = __webpack_require__(/*! ../assets/images/slime_idle.png */ \"./src/assets/images/slime_idle.png\");\nconst slime_jump_left = __webpack_require__(/*! ../assets/images/slime_jump_left.png */ \"./src/assets/images/slime_jump_left.png\");\nconst slime_jump_right = __webpack_require__(/*! ../assets/images/slime_jump.png */ \"./src/assets/images/slime_jump.png\");\n\nclass Slime {\n    constructor (canvas) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        \n        this.upped = 0;\n\n        this.idleLeft = new Image();\n        this.idleLeft.src = slime_idle_left.default;\n        this.idleRight = new Image();\n        this.idleRight.src = slime_idle_right.default;\n        this.jumpLeft = new Image();\n        this.jumpLeft.src = slime_jump_left.default;\n        this.jumpRight = new Image();\n        this.jumpRight.src = slime_jump_right.default;\n        \n        this.left = true;\n        this.jumping = false;\n        this.ticks = 0;\n        this.frameIdx = 0;\n    }\n\n    up() {\n        this.upped++;\n    }\n\n    jump() {\n\n    }\n\n    nextFrame() {\n        if (this.ticks < 1) {\n            this.ticks ++;\n            return;\n        }\n        else this.ticks = 0;\n        if (this.jumping) {\n            if (this.frameIdx < 10) this.frameIdx++;\n            else {\n                this.frameIdx = 0;\n                this.jumping = false;\n            }\n        } else {\n            if (this.frameIdx < 7) this.frameIdx++;\n            else this.frameIdx = 0;\n        }\n    }\n\n    draw(timeDelta) {\n        // const slimeSize = 76*.65;\n\n        let img;\n        if (this.jumping) {\n            if (this.left) img = this.jumpLeft;\n            else img = this.jumpRight;\n        } else {\n            if (this.left) img = this.idleLeft;\n            else img = this.idleRight;\n        }\n\n        const slimeSize = 64 * 1.6;\n        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);\n        this.ctx.drawImage(\n            img, this.frameIdx*64, 0, 64, 64,\n            (this.canvas.width-slimeSize)/2, this.canvas.height-slimeSize+28-(this.upped*41*0.65), slimeSize, slimeSize\n        )\n        this.nextFrame();\n    }\n\n}\n\nmodule.exports = Slime;\n\n//# sourceURL=webpack:///./src/classes/slime.js?");

/***/ }),

/***/ "./src/classes/stairs.js":
/*!*******************************!*\
  !*** ./src/classes/stairs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const stairSprite = __webpack_require__(/*! ../assets/images/stair.png */ \"./src/assets/images/stair.png\");\n\nclass Stair {\n    constructor(options) {\n        this.canvas = options.canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.pos = options.pos;\n        this.height = options.height;\n        \n        this.stairWidth = 76 * 0.65;\n        this.stairHeight = 41 * 0.65;\n        this.x = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;\n        this.y = this.canvas.height - (1 + this.height) * this.stairHeight;\n    }\n\n    draw (timeDelta) {\n        \n        let img = new Image();\n        img.src = stairSprite.default;\n\n        let stairDestinationX = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;\n        let stairDestinationY = this.canvas.height - (1 + this.height) * this.stairHeight;\n\n        if (Math.abs(this.x - stairDestinationX) > 0.1) this.x = this.x + 7*((stairDestinationX - this.x) / timeDelta);\n        if (Math.abs(this.y - stairDestinationY) > 0.1) this.y = this.y + 7*((stairDestinationY - this.y) / timeDelta);\n\n        this.ctx.drawImage(\n            img,\n            this.x,\n            this.y,\n            this.stairWidth,\n            this.stairHeight\n        );\n    }\n}\n\nmodule.exports = Stair\n\n//# sourceURL=webpack:///./src/classes/stairs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\nconst GameView = __webpack_require__(/*! ./classes/game_view */ \"./src/classes/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    const bgCanvas = document.getElementById('bg');\n    const stairCanvas = document.getElementById('stairs');\n    const slimeCanvas = document.getElementById('slime');\n    \n    const gameView = new GameView(bgCanvas, stairCanvas, slimeCanvas);\n\n    gameView.start();\n    gameView.run();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });