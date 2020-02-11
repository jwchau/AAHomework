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

eval("const Orb = __webpack_require__(/*! ./orb.js */ \"./src/orb.js\");\nconst orbs = [];\n\nwindow.Game = function (xDim, yDim) {\n  this.xDim = xDim;\n  this.yDim = yDim;\n\n  const spread = xDim / Game.ORBS_COUNT;\n  \n  for (let x = 0; x < xDim; x += spread) {\n    orbs.push(\n      new Orb(x, yDim / 2, 50, 'white')\n    );\n  }\n};\n\nGame.ORBS_COUNT = 10;\n\nGame.prototype.render = function (ctx) {\n  ctx.fillStyle = `rgb(13, 2, 8, 0.1)`\n  ctx.fillRect(0, 0, this.xDim, this.yDim);\n\n  orbs.forEach(function (orb) {\n    orb.render(ctx);\n  });\n};\n\nGame.prototype.start = function (canvasEl) {\n  const ctx = canvasEl.getContext(\"2d\");\n  const animateCallback = () => {\n    this.render(ctx);\n    requestAnimationFrame(animateCallback);\n\n    //setTimeout(animateCallback, 1000/60);\n  };\n\n  animateCallback();\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\ncanvasEl.height = window.innerHeight;\ncanvasEl.width = window.innerWidth;\nnew Game(\n  canvasEl.width,\n  canvasEl.height\n).start(canvasEl);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/orb.js":
/*!********************!*\
  !*** ./src/orb.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Orb = function (centerX, centerY, radius, color) {\r\n    this.centerX = centerX;\r\n    this.centerY = centerY;\r\n    this.radius = radius;\r\n    this.color = color;\r\n};\r\n\r\nOrb.randomOrb = function (maxX, maxY, numOrbs) {\r\n    return new Orb(\r\n        maxX * Math.random(),\r\n        maxY * Math.random(),\r\n        Orb.radius(maxX, maxY, numOrbs),\r\n        'white'\r\n    );\r\n};\r\n\r\nOrb.prototype.movePattern = function (maxX, maxY) {\r\n    let dx = (Math.random() * 2) - 1;\r\n    let dy = (Math.random() * 2) - 1;\r\n\r\n    this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);\r\n    this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);\r\n};\r\n\r\nOrb.radius = function (maxX, maxY, numOrbs) {\r\n    let targetOrbArea = (maxX * maxY) / numOrbs;\r\n    let targetRadius = Math.sqrt(targetOrbArea / Math.PI);\r\n    return 2 * targetRadius;\r\n};\r\n\r\nOrb.prototype.render = function (ctx) {\r\n    ctx.fillStyle = this.color;\r\n    ctx.beginPath();\r\n\r\n    ctx.arc(\r\n        this.centerX,\r\n        this.centerY,\r\n        this.radius,\r\n        0,\r\n        2 * Math.PI,\r\n        false\r\n    );\r\n\r\n    ctx.fill();\r\n};\r\n\r\nmodule.exports = Orb;\n\n//# sourceURL=webpack:///./src/orb.js?");

/***/ })

/******/ });