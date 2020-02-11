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

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const theMatrix = __webpack_require__(/*! ./matrix.js */ \"./src/matrix.js\");\n\nwindow.Game = function (xDim, yDim) {\n  this.xDim = xDim;\n  this.yDim = yDim;\n  this.matrix = new theMatrix();\n};\n\nGame.prototype.render = function (ctx) {\n  ctx.fillStyle = `rgb(13, 2, 8, 0.1)`\n  ctx.fillRect(0, 0, this.xDim, this.yDim);\n\n  this.matrix.render(ctx);\n};\n\nGame.prototype.start = function (canvasEl) {\n  // get a 2d canvas drawing context. The canvas API lets us call\n  // a `getContext` method on a canvas DOM element.\n  const ctx = canvasEl.getContext(\"2d\");\n  // debugger;\n  //clear the canvas, and redraw them\n  const animateCallback = () => {\n    this.render(ctx);\n\n    //this will call our animateCallback again, but only when the browser\n    //is ready, usually every 1/60th of a second\n    requestAnimationFrame(animateCallback);\n    //if we didn't know about requestAnimationFrame, we could use setTimeout\n    //setTimeout(animateCallback, 1000/60);\n  };\n\n  //this will cause the first render and start the endless triggering of\n  //the function using requestAnimationFrame\n  animateCallback();\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\ncanvasEl.height = window.innerHeight;\ncanvasEl.width = window.innerWidth;\nnew Game(\n  canvasEl.width,\n  canvasEl.height\n).start(canvasEl);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/matrix.js":
/*!***********************!*\
  !*** ./src/matrix.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//Matrix stuff\r\nfunction Matrix(size = 25, speed = 0.333) {\r\n    this.size = size;\r\n    this.drops = [];\r\n    this.speed = speed;\r\n    const columns = window.innerWidth / size;\r\n    for (let x = 0; x < columns; x++) this.drops[x] = 1;\r\n}\r\n\r\nlet code = \"\\uFB20,\\uFB21,\\uFB23,\\uFB24,\\uFB25,\\uFB26,\\uFB27,\";\r\ncode += \"\\uFB28,\\uFB29,\\uFB2A,\\uFB2B,\\uFB2C,\\uFB2D,\";\r\ncode += \"\\u2327,\\u2300,\\u2299,\\u2205,\\u2206,\\u2107,\";\r\ncode += \"\\u210A,\\u210B,\\u210C,\\u2110,\\u2112,\\u2111,\";\r\ncode += \"\\u2130,\\u2123,\\u211B,\\u211C,\\u211D,\\u211E,\";\r\ncode += \"\\u30B7,\\u30B9,\\u30BB,\\u30DD,\\u30CF,\\u30AB,\";\r\ncode += \"\\u30A5,\\u30C1,\\u30D1,\\u30E1,\\u30E0,\\u30C9,\";\r\n\r\nMatrix.SYMS = code.split(\",\");\r\n//Matrix.SYMS = \"사랑하게됐어한이방인어떻게나를이해시켜야할지저멀\\\r\n//리검은그림자널만난다면수천킬로나는달려가가슴에총소리가\\\r\n//출발해널향한커다란두눈에빠져온통신비로운감정그사람들은\\\r\n//내가바라보는너를그들은전혀보려하지않아말해언어난맘을열어\"\r\n\r\nconst N = Matrix.SYMS.length;\r\n\r\n//#0D0208 vampire black\r\n//#003B00 darkest\r\n//#008F11 mediumest\r\n//#00FF41 lightest\r\nMatrix.COLORS = [\"#003B00\", \"#008F11\", \"#00FF41\"];\r\n\r\nArray.prototype.sample = function() {\r\n    return this[Math.floor(Math.random() * this.length)];\r\n} \r\n\r\n\r\n//drawing the characters\r\nMatrix.prototype.render = function(ctx) {\r\n    \r\n    ctx.fillStyle = Matrix.COLORS.sample(); //green text\r\n    ctx.font = this.size + \"px Arial\";\r\n\r\n    for (let i = 0; i < this.drops.length; i++) {\r\n\r\n        let text = Matrix.SYMS[Math.floor(Math.random() * N)];\r\n        ctx.fillText(text, i * this.size, this.drops[i] * this.size);\r\n\r\n        if (this.drops[i] * this.size > window.innerHeight && Math.random() > 0.975)\r\n            this.drops[i] = 0;\r\n\r\n        this.drops[i] += this.speed;\r\n    }\r\n}\r\n\r\nmodule.exports = Matrix;\n\n//# sourceURL=webpack:///./src/matrix.js?");

/***/ })

/******/ });