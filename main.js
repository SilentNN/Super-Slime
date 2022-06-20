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

/***/ "./src/assets/images/timerbar_full.png":
/*!*********************************************!*\
  !*** ./src/assets/images/timerbar_full.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"88089216f49fbbd83dced53f1165b70a.png\");\n\n//# sourceURL=webpack:///./src/assets/images/timerbar_full.png?");

/***/ }),

/***/ "./src/classes/background.js":
/*!***********************************!*\
  !*** ./src/classes/background.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const bg = __webpack_require__(/*! ../assets/images/cityscape_2x.png */ \"./src/assets/images/cityscape_2x.png\");\n\nclass Background {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.x = (3840-this.canvas.width)/2;\n        this.y = 2154-this.canvas.height;\n    }\n\n    draw(timeDelta, steps, bgPos) {\n        let img = new Image();\n        img.src = bg.default;\n        let ctx = this.canvas.getContext('2d');\n\n        // ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        let heightAdjustment = steps*8 - 8*8;\n        if (heightAdjustment < 0) heightAdjustment = 0;\n\n        let destinationX = (3840-this.canvas.width)/2 + bgPos*15;\n        let destinationY = 2154-this.canvas.height-heightAdjustment;\n\n        if (Math.abs(this.x - destinationX) > 0.1) this.x = this.x + 3*((destinationX - this.x) / timeDelta);\n        if (Math.abs(this.y - destinationY) > 0.1) this.y = this.y + 3*((destinationY - this.y) / timeDelta);\n\n        ctx.drawImage(\n            img,\n            this.x,\n            this.y,\n            this.canvas.width,\n            this.canvas.height,\n            0,\n            0,\n            this.canvas.width,\n            this.canvas.height\n        )\n    }\n}\n\nmodule.exports = Background;\n\n//# sourceURL=webpack:///./src/classes/background.js?");

/***/ }),

/***/ "./src/classes/game.js":
/*!*****************************!*\
  !*** ./src/classes/game.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Slime = __webpack_require__(/*! ./slime */ \"./src/classes/slime.js\");\nconst Background = __webpack_require__(/*! ./background */ \"./src/classes/background.js\");\nconst Stairs = __webpack_require__(/*! ./stairs */ \"./src/classes/stairs.js\");\nconst Timer = __webpack_require__(/*! ./timer */ \"./src/classes/timer.js\")\n\nclass Game {\n    constructor (bgCanvas, stairCanvas, slimeCanvas, scoreDiv, timerCanvas, sfxMuted) {\n        this.bgCanvas = bgCanvas;\n\n        this.steps = 0;\n        this.bgPos = 0;\n        \n        this.gameOver = false;\n        this.scoreDiv = scoreDiv;\n        \n        this.binds = this.keybinds.bind(this);\n\n        this.bg = new Background(bgCanvas);\n        this.slime = new Slime (slimeCanvas);\n        this.stairs = new Stairs(stairCanvas);\n        this.timer = new Timer(timerCanvas);\n\n        this.jumpSfx = document.getElementById('jump-sfx');\n        this.sfxMuted = sfxMuted;\n    }\n\n    step(timeDelta) {\n        this.bg.draw(timeDelta, this.steps, this.bgPos);\n        this.stairs.draw(timeDelta);\n        this.slime.draw(timeDelta);\n        this.timer.step(timeDelta);\n        this.scoreDiv.innerHTML = this.steps;\n        if (this.timer.timeout) this.gameOver = true;\n    }\n\n    climb() {\n        if (this.slime.left) {\n            this.climbLeft(true);\n        } else {\n            this.climbLeft(false);\n        }\n    }\n\n    turn() {\n        if (this.slime.left) {\n            this.climbLeft(false);\n        } else {\n            this.climbLeft(true);\n        }\n        this.slime.left = !this.slime.left;\n    }\n\n    climbLeft(climbingLeft) {\n        let nextStep;\n        const centerStep = 14;\n        if (this.steps < centerStep) {\n            nextStep = this.steps;\n            if (this.steps === 0) this.timer.started = true;\n        } else nextStep = centerStep;\n\n        if ((this.stairs.all[nextStep].pos === -1 && climbingLeft) || (!climbingLeft && this.stairs.all[nextStep].pos === 1)) {\n            if (!this.sfxMuted) {\n                this.jumpSfx.currentTime = 0;\n                this.jumpSfx.play();\n            }\n            this.slime.jumping = true;\n            this.slime.frameIdx = 0;\n            if (nextStep < centerStep) this.slime.up();\n            else this.stairs.all = this.stairs.all.slice(1);\n\n            this.stairs.all.forEach( stair => {\n                if (climbingLeft) stair.pos++;\n                else stair.pos--;\n                if (nextStep === centerStep) stair.height--;\n            })\n\n            this.steps++;\n            this.timer.addTime();\n\n            if (climbingLeft) this.bgPos--;\n            else this.bgPos++;\n\n            if (nextStep === centerStep) this.stairs.addNewStair();\n\n        } else {\n            this.gameOver = true;\n        }\n    }\n\n    keybinds(e) {\n        switch (e.keyCode) {\n            case 74: //j\n            case 75: //k\n            case 39: //right arrow\n                this.climb();\n                break;\n            case 70: //f\n            case 68: //d\n            case 37: //left arrow\n                this.turn();\n                break;\n            default:\n                break;\n        }\n    }\n\n    bindKeys() {\n        document.addEventListener(\"keydown\", this.binds);\n    }\n\n    unbindKeys() {\n        document.removeEventListener(\"keydown\", this.binds);\n    }\n \n}\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/classes/game.js?");

/***/ }),

/***/ "./src/classes/game_view.js":
/*!**********************************!*\
  !*** ./src/classes/game_view.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/classes/game.js\");\n\nclass GameView {\n    constructor () {\n        this.bgCanvas = document.getElementById('bg');\n        this.stairCanvas = document.getElementById('stairs');\n        this.timerCanvas = document.getElementById('timer-canvas');\n        this.slimeCanvas = document.getElementById('slime');\n        this.scoreDiv = document.getElementById('score');\n        this.bgmBtn = document.getElementById('bgm-button');\n        this.bgmMusic = document.getElementById('bgm');\n        this.sfxBtn = document.getElementById('sfx-button');\n        this.sfxSound = document.getElementById('jump-sfx');\n\n        this.highScore = 0;\n        this.bindedGameOverbinds = this.gameOverBinds.bind(this);\n        this.bgmMusic.volume = 0.2;\n        this.sfxSound.volume = 0.2;\n        this.bgmBtn.addEventListener('click', this.handleBgmBtn.bind(this));\n        this.sfxBtn.addEventListener('click', this.handleSfxBtn.bind(this));\n    }\n\n    handleBgmBtn() {\n        if (this.bgmBtn.className === 'muted') {\n            this.bgmMusic.play();\n            this.bgmBtn.className = 'unmuted';\n        }\n        else {\n            this.bgmMusic.pause();\n            this.bgmBtn.className = 'muted';\n        }\n    }\n\n    handleSfxBtn() {\n        if (this.sfxBtn.className === 'muted') {\n            this.sfxMuted = false;\n            this.game.sfxMuted = false;\n            this.sfxBtn.className = 'unmuted';\n        }\n        else {\n            this.sfxMuted = true;\n            this.game.sfxMuted = true;\n            this.sfxBtn.className = 'muted';\n        }\n    }\n\n    start() {\n        this.lastTime = 0;\n        this.game = new Game(this.bgCanvas, this.stairCanvas, this.slimeCanvas, this.scoreDiv, this.timerCanvas, this.sfxMuted);\n        let gameOverDiv = document.getElementById('game-over');\n        if (gameOverDiv) gameOverDiv.remove();\n        this.game.bindKeys();\n    }\n\n    gameOverBinds(e) {\n        switch (e.keyCode) {\n            case 13: //enter\n                e.preventDefault();\n                this.start();\n                this.unbindGameOver();\n                break;\n            default:\n                break;\n        }\n    }\n\n    bindGameOver() {\n        document.addEventListener('keydown', this.bindedGameOverbinds);\n    }\n\n    unbindGameOver() {\n        document.removeEventListener('keydown', this.bindedGameOverbinds);\n    }\n    \n    run() {\n        requestAnimationFrame(this.animate.bind(this));\n        const gameDiv = document.getElementById('game');\n        gameDiv.classList.remove('hidden');\n        const splashDiv = document.getElementById('splash');\n        splashDiv.classList.add('hidden');\n        this.bgmMusic.play();\n    }\n    \n    animate(time) {\n        requestAnimationFrame(this.animate.bind(this));\n        const timeDelta = time - this.lastTime;\n        if (this.game.gameOver) this.gameOver();\n        this.game.step(timeDelta);\n        this.lastTime = time;\n    }\n\n    gameOver() {\n        this.game.gameOver = false;\n        this.game.timer.started = false;\n        this.game.timer.timeout = false;\n        if (this.game.steps > this.highScore) this.highScore = this.game.steps;\n        this.game.unbindKeys();\n\n        const gameOverDiv = document.createElement('div');\n        gameOverDiv.setAttribute('id', 'game-over');\n        const gameOverH2 = document.createElement('h2');\n        gameOverH2.setAttribute('class', 'game-over');\n        const scoreH3 = document.createElement('h3');\n        scoreH3.setAttribute('class', 'score');\n        const highScoreH3 = document.createElement('h3');\n        highScoreH3.setAttribute('class', 'high-score');\n\n        gameOverH2.innerHTML = 'GAME OVER';\n        scoreH3.innerHTML = '<strong>Score: </strong>'.concat(this.game.steps);\n        highScoreH3.innerHTML = '<strong>High Score: </strong>'.concat(this.highScore);\n\n        const restartBtn = document.createElement('button');\n        restartBtn.setAttribute('id', 'restart');\n        restartBtn.innerHTML = 'Retry';\n        restartBtn.addEventListener('click', this.start.bind(this));\n        this.bindGameOver();\n        \n        gameOverDiv.appendChild(gameOverH2);\n        gameOverDiv.appendChild(scoreH3);\n        gameOverDiv.appendChild(highScoreH3);\n        gameOverDiv.appendChild(restartBtn);\n\n        document.body.appendChild(gameOverDiv);\n\n        this.game.gameOver = false;\n\n    }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/classes/game_view.js?");

/***/ }),

/***/ "./src/classes/slime.js":
/*!******************************!*\
  !*** ./src/classes/slime.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const slime_idle_left = __webpack_require__(/*! ../assets/images/slime_idle_left.png */ \"./src/assets/images/slime_idle_left.png\");\nconst slime_idle_right = __webpack_require__(/*! ../assets/images/slime_idle.png */ \"./src/assets/images/slime_idle.png\");\nconst slime_jump_left = __webpack_require__(/*! ../assets/images/slime_jump_left.png */ \"./src/assets/images/slime_jump_left.png\");\nconst slime_jump_right = __webpack_require__(/*! ../assets/images/slime_jump.png */ \"./src/assets/images/slime_jump.png\");\n\nclass Slime {\n    constructor (canvas) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        \n        this.upped = 0;\n        this.slimeSize = 102;\n        this.y = this.canvas.height-this.slimeSize+28-(this.upped*41*0.65);\n\n        this.idleLeft = new Image();\n        this.idleLeft.src = slime_idle_left.default;\n        this.idleRight = new Image();\n        this.idleRight.src = slime_idle_right.default;\n        this.jumpLeft = new Image();\n        this.jumpLeft.src = slime_jump_left.default;\n        this.jumpRight = new Image();\n        this.jumpRight.src = slime_jump_right.default;\n        \n        this.left = true;\n        this.jumping = false;\n        this.ticks = 0;\n        this.frameIdx = 0;\n    }\n\n    up() {\n        this.upped++;\n    }\n\n    die() {\n        // start with jumping state\n        // translate slime up and in faced direction\n        // stop movement\n        // make slime fall\n\n        // maybe add music?\n    }\n\n    nextFrame() {\n        if (this.ticks < 1) {\n            this.ticks ++;\n            return;\n        }\n        else this.ticks = 0;\n        if (this.jumping) {\n            if (this.frameIdx < 10) this.frameIdx++;\n            else {\n                this.frameIdx = 0;\n                this.jumping = false;\n            }\n        } else {\n            if (this.frameIdx < 7) this.frameIdx++;\n            else this.frameIdx = 0;\n        }\n    }\n\n    draw(timeDelta) {\n        // const slimeSize = 76*.65;\n\n        let img;\n        if (this.jumping) {\n            if (this.left) img = this.jumpLeft;\n            else img = this.jumpRight;\n        } else {\n            if (this.left) img = this.idleLeft;\n            else img = this.idleRight;\n        }\n\n        let slimeDestinationY = this.canvas.height-this.slimeSize+28-(this.upped*41*0.65);\n        if (Math.abs(this.y - slimeDestinationY) > 0.1) this.y = this.y + 10 * ((slimeDestinationY - this.y) / timeDelta);\n\n        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);\n        this.ctx.drawImage(\n            img, this.frameIdx*64, 0, 64, 64,\n            (this.canvas.width-this.slimeSize)/2, this.y, this.slimeSize, this.slimeSize\n        )\n        this.nextFrame();\n    }\n\n}\n\nmodule.exports = Slime;\n\n//# sourceURL=webpack:///./src/classes/slime.js?");

/***/ }),

/***/ "./src/classes/stair.js":
/*!******************************!*\
  !*** ./src/classes/stair.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const stairSprite = __webpack_require__(/*! ../assets/images/stair.png */ \"./src/assets/images/stair.png\");\n\nclass Stair {\n    constructor(options) {\n        this.canvas = options.canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.pos = options.pos;\n        this.height = options.height;\n        \n        this.stairWidth = 76 * 0.65;\n        this.stairHeight = 41 * 0.65;\n        this.x = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;\n        this.y = this.canvas.height - (1 + this.height) * this.stairHeight;\n    }\n\n    draw (timeDelta) {\n        \n        let img = new Image();\n        img.src = stairSprite.default;\n\n        let stairDestinationX = (this.canvas.width - this.stairWidth) / 2 + this.pos * this.stairWidth;\n        let stairDestinationY = this.canvas.height - (1 + this.height) * this.stairHeight;\n\n        if (Math.abs(this.x - stairDestinationX) > 0.1) this.x = this.x + 7*((stairDestinationX - this.x) / timeDelta);\n        if (Math.abs(this.y - stairDestinationY) > 0.1) this.y = this.y + 7*((stairDestinationY - this.y) / timeDelta);\n\n        this.ctx.drawImage(\n            img,\n            this.x,\n            this.y,\n            this.stairWidth,\n            this.stairHeight\n        );\n    }\n}\n\nmodule.exports = Stair\n\n//# sourceURL=webpack:///./src/classes/stair.js?");

/***/ }),

/***/ "./src/classes/stairs.js":
/*!*******************************!*\
  !*** ./src/classes/stairs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Stair = __webpack_require__(/*! ./stair */ \"./src/classes/stair.js\");\n\nclass Stairs {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.generateStairs();\n    }\n\n    draw(timeDelta) {\n        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);\n        this.all.forEach(stair => {\n            stair.draw(timeDelta)\n        })\n    }\n\n    generateStairs() {\n        this.all = [];\n\n        let pos = -2;\n        let height = 1;\n\n        this.all.push(new Stair({\n            canvas: this.canvas,\n            pos: -1,\n            height: 0\n        }))\n\n        for (let i = 0; i < 31; i++) {\n            this.all.push(new Stair({\n                canvas: this.canvas,\n                pos: pos,\n                height: height\n            }));\n            height++;\n            if (Math.random() > 0.5) {\n                pos++;\n            } else {\n                pos--;\n            }\n        }\n    }\n\n    addNewStair() {\n        let nextPos;\n        const nextHeight = this.all[this.all.length-1].height + 1;\n        if (Math.random() > 0.5) {\n            nextPos = this.all[this.all.length-1].pos + 1;\n        } else {\n            nextPos = this.all[this.all.length-1].pos - 1;\n        }\n        this.all.push(new Stair({\n            canvas: this.canvas,\n            pos: nextPos,\n            height: nextHeight\n        }))\n    }\n}\n\nmodule.exports = Stairs;\n\n//# sourceURL=webpack:///./src/classes/stairs.js?");

/***/ }),

/***/ "./src/classes/timer.js":
/*!******************************!*\
  !*** ./src/classes/timer.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const timerbarFull = __webpack_require__(/*! ../assets/images/timerbar_full.png */ \"./src/assets/images/timerbar_full.png\");\n\nclass Timer {\n    constructor(canvas) {\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n\n        this.fullWidth = 256;\n        this.fullHeight = 44;\n\n        this.img = new Image();\n        this.img.src = timerbarFull.default;\n        this.img.onload = () => {\n            this.ctx.fillStyle = this.ctx.createPattern(this.img, 'no-repeat');\n            this.loaded = true;\n        }\n\n        this.time = 10000;\n        this.maxTime = 20000;\n        this.difficultyFactor = 100;\n        \n    }\n\n    step(timeDelta) {\n        if (this.started) this.time = this.time - timeDelta * this.difficultyFactor / 100;\n        if (this.time < 0) {\n            this.timeout = true;\n            this.time = 0;\n        }\n        this.draw();\n    }\n\n    addTime() {\n        const addedTime = this.time + 2500;\n        if (addedTime > this.maxTime) this.time = this.maxTime;\n        else this.time = addedTime;\n        this.difficultyFactor = this.difficultyFactor + 3;\n    }\n    \n    draw() {\n        if (!this.loaded) return;\n\n        let width = this.time/this.maxTime*this.fullWidth;\n        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);\n        this.ctx.fillRect(0,0,width,this.fullHeight);\n\n    }\n}\n\nmodule.exports = Timer;\n\n//# sourceURL=webpack:///./src/classes/timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./classes/game */ \"./src/classes/game.js\");\nconst GameView = __webpack_require__(/*! ./classes/game_view */ \"./src/classes/game_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const gameView = new GameView();\n    \n    const playBtn = document.getElementById('play-btn');\n\n    playBtn.addEventListener('click', () => {\n        gameView.start();\n        gameView.run();\n    })\n})\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });