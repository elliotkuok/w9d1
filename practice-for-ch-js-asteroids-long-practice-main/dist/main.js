/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/moving-object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static RADIUS = 25;\n    static COLOR = \"red\";\n    constructor(options = {}) {\n        options.pos = options.pos || options.game.randomPosition();\n        options.vel = options.vel || _util_js__WEBPACK_IMPORTED_MODULE_1__.randomVec(5);\n        options.color = Asteroid.COLOR;\n        options.radius = Asteroid.RADIUS;\n        super(options);\n    }\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Asteroid);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/asteroid.js?");

/***/ }),

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nclass GameView {\n    constructor(game, ctx) {\n        this.game = game;\n        this.ctx = ctx;\n      }\n\n    start(){\n        const that = this;\n        setInterval(function(){\n            that.game.moveObjects();\n            that.game.draw(that.ctx);\n        }, 20);\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameView);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/game-view.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n// import Ship from './ship'\n\n\nclass Game {\n    static DIM_X = 800;\n    static DIM_Y = 600;\n    static NUM_ASTEROIDS = 10;\n    constructor() {\n        this.asteroids = [];\n        this.addAsteroids();\n    }\n\n    addAsteroids() {\n        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n          const asteroid = new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({ pos: this.randomPosition() });\n          this.asteroids.push(asteroid);\n        }\n    }\n\n    randomPosition() {\n        const x = Math.floor(Math.random() * Game.DIM_X);\n        const y = Math.floor(Math.random() * Game.DIM_Y);\n        return [x, y];\n    }\n\n    draw(ctx) {\n        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        this.asteroids.forEach(asteroid => asteroid.draw(ctx));\n    }\n\n    moveObjects() {\n        this.asteroids.forEach(asteroid => asteroid.move());\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n/* harmony import */ var _game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-view.js */ \"./src/game-view.js\");\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n\n// Entry file that webpack is interested in\n\n\n\n\nwindow.MovingObject = _moving_object_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n// import Asteroid from \"./asteroid.js\";\n// window.Asteroid = Asteroid;\n// window.asteroid = new Asteroid({ pos: [100, 100] });\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    const canvas = document.getElementById('game-canvas');\n    const ctx = canvas.getContext('2d');\n  \n    // Set canvas dimensions using Game constants\n    canvas.width = _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_X;\n    canvas.height = _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].DIM_Y;\n  \n    // Create a new Game instance and GameView instance\n    const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    new _game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).start();\n  });\n\n\n// ctx.beginPath();\n// ctx.arc(200, 200, 25, 0, 2*Math.PI, false);\n// ctx.stroke();\n// ctx.fill();\n\n// const game = new Game(ctx);\n// game.draw();\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass MovingObject {\n    constructor(options){\n        this.pos = options[\"pos\"];\n        this.vel = options[\"vel\"];\n        this.radius = options[\"radius\"];\n        this.color = options[\"color\"];\n    }\n    \n    draw(ctx){\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);\n        ctx.stroke();\n        ctx.fill();\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovingObject);\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/moving-object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\n// Return a randomly oriented vector with the given length.\nfunction randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n  }\n  \n  // Scale the length of a vector by the given amount.\n  function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n\n//# sourceURL=webpack://practice-for-ch-js-asteroids-long-practice-main/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;