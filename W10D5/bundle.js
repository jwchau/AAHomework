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
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/todo_redux.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/actions/step_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/step_actions.js ***!
  \******************************************/
/*! exports provided: RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP, receiveSteps, receiveStep, removeStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_STEPS", function() { return RECEIVE_STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_STEP", function() { return RECEIVE_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_STEP", function() { return REMOVE_STEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveSteps", function() { return receiveSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveStep", function() { return receiveStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStep", function() { return removeStep; });
var RECEIVE_STEPS = "RECEIVE_STEPS";
var RECEIVE_STEP = "RECEIVE_STEP";
var REMOVE_STEP = "REMOVE_STEP";
var receiveSteps = function receiveSteps(steps) {
  return {
    type: RECEIVE_STEPS,
    steps: steps
  };
};
var receiveStep = function receiveStep(step) {
  return {
    type: RECEIVE_STEP,
    step: step
  };
};
var removeStep = function removeStep(step) {
  return {
    type: REMOVE_STEP,
    step: step
  };
};

/***/ }),

/***/ "./frontend/actions/todo_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/todo_actions.js ***!
  \******************************************/
/*! exports provided: RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, TODO_ERROR, receiveTodos, receiveTodo, removeTodo, todoError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_TODOS", function() { return RECEIVE_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEIVE_TODO", function() { return RECEIVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TODO", function() { return REMOVE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODO_ERROR", function() { return TODO_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveTodos", function() { return receiveTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "receiveTodo", function() { return receiveTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodo", function() { return removeTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoError", function() { return todoError; });
var RECEIVE_TODOS = 'RECEIVE_TODOS';
var RECEIVE_TODO = 'RECEIVE_TODO';
var REMOVE_TODO = 'REMOVE_TODO';
var TODO_ERROR = 'TODO_ERROR';
var receiveTodos = function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  };
};
var receiveTodo = function receiveTodo(todo) {
  return {
    type: RECEIVE_TODO,
    todo: todo
  };
};
var removeTodo = function removeTodo(todo) {
  return {
    type: REMOVE_TODO,
    todo: todo
  };
};
var todoError = function todoError(error) {
  return {
    type: TODO_ERROR,
    error: error
  };
};

/***/ }),

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo_list_todo_list_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_list/todo_list_container */ "./frontend/components/todo_list/todo_list_container.js");



var App = function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Super Awesome Todo List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todo_list_todo_list_container__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./frontend/components/root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/root.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _app_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.jsx */ "./frontend/components/app.jsx");




var Root = function Root(_ref) {
  var store = _ref.store;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Root);

/***/ }),

/***/ "./frontend/components/step_list/step_form.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/step_list/step_form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/id_generator */ "./frontend/util/id_generator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StepForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StepForm, _React$Component);

  function StepForm(props) {
    var _this;

    _classCallCheck(this, StepForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepForm).call(this, props));
    _this.state = {
      title: "",
      body: "",
      done: false,
      todo_id: _this.props.todo_id
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StepForm, [{
    key: "update",
    value: function update(property) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, property, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var step = Object.assign({}, this.state, {
        id: Object(_util_id_generator__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])()
      });
      this.props.receiveStep(step);
      this.setState({
        title: "",
        body: ""
      }); // reset form
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "step-form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Title:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input",
        ref: "title",
        value: this.state.title,
        placeholder: "walk to store",
        onChange: this.update('title'),
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Description:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input",
        ref: "body",
        value: this.state.body,
        placeholder: "google store directions",
        onChange: this.update('body'),
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "create-button"
      }, "Create Step!"));
    }
  }]);

  return StepForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StepForm);

/***/ }),

/***/ "./frontend/components/step_list/step_list.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/step_list/step_list.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_list_item_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step_list_item_container */ "./frontend/components/step_list/step_list_item_container.js");
/* harmony import */ var _step_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step_form */ "./frontend/components/step_list/step_form.jsx");
 // Components




var StepList = function StepList(_ref) {
  var steps = _ref.steps,
      todo_id = _ref.todo_id,
      receiveStep = _ref.receiveStep;
  var stepItems = steps.map(function (step) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_step_list_item_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: step.id,
      step: step
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "step-list"
  }, stepItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_step_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    todo_id: todo_id,
    receiveStep: receiveStep
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StepList);

/***/ }),

/***/ "./frontend/components/step_list/step_list_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/step_list/step_list_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _step_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step_list */ "./frontend/components/step_list/step_list.jsx");
/* harmony import */ var _reducers_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reducers/selectors */ "./frontend/reducers/selectors.js");
/* harmony import */ var _actions_step_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/step_actions */ "./frontend/actions/step_actions.js");

 // Actions




var mapStateToProps = function mapStateToProps(state, _ref) {
  var todo_id = _ref.todo_id;
  return {
    steps: Object(_reducers_selectors__WEBPACK_IMPORTED_MODULE_2__["stepsByTodoId"])(state, todo_id),
    todo_id: todo_id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveStep: function receiveStep(step) {
      return dispatch(Object(_actions_step_actions__WEBPACK_IMPORTED_MODULE_3__["receiveStep"])(step));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_step_list__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/step_list/step_list_item.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/step_list/step_list_item.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StepListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StepListItem, _React$Component);

  function StepListItem(props) {
    var _this;

    _classCallCheck(this, StepListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StepListItem).call(this, props));
    _this.toggleStep = _this.toggleStep.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StepListItem, [{
    key: "toggleStep",
    value: function toggleStep(e) {
      var toggledStep = Object.assign({}, this.props.step, {
        done: !this.props.step.done
      });
      this.props.receiveStep(toggledStep);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "step-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "step-info"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.props.step.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.props.step.body)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "step-buttons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: this.props.step.done ? "done" : "undone",
        onClick: this.toggleStep
      }, this.props.step.done ? "Undo" : "Done"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "delete-button",
        onClick: this.props.removeStep
      }, "Delete")));
    }
  }]);

  return StepListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (StepListItem);

/***/ }),

/***/ "./frontend/components/step_list/step_list_item_container.js":
/*!*******************************************************************!*\
  !*** ./frontend/components/step_list/step_list_item_container.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _step_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step_list_item */ "./frontend/components/step_list/step_list_item.jsx");
/* harmony import */ var _actions_step_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/step_actions */ "./frontend/actions/step_actions.js");

 // Actions



var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var step = _ref.step;
  return {
    removeStep: function removeStep() {
      return dispatch(Object(_actions_step_actions__WEBPACK_IMPORTED_MODULE_2__["removeStep"])(step));
    },
    receiveStep: function receiveStep(step) {
      return dispatch(Object(_actions_step_actions__WEBPACK_IMPORTED_MODULE_2__["receiveStep"])(step));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, // step prop is already passed in
mapDispatchToProps)(_step_list_item__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/todo_list/todo_detail_view.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/todo_list/todo_detail_view.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _step_list_step_list_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../step_list/step_list_container */ "./frontend/components/step_list/step_list_container.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Components



var TodoDetailView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoDetailView, _React$Component);

  function TodoDetailView() {
    _classCallCheck(this, TodoDetailView);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoDetailView).apply(this, arguments));
  }

  _createClass(TodoDetailView, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          todo = _this$props.todo,
          removeTodo = _this$props.removeTodo;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "todo-body"
      }, todo.body), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_step_list_step_list_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        todo_id: todo.id
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "delete-button",
        onClick: removeTodo
      }, "Delete Todo"));
    }
  }]);

  return TodoDetailView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoDetailView);

/***/ }),

/***/ "./frontend/components/todo_list/todo_detail_view_container.js":
/*!*********************************************************************!*\
  !*** ./frontend/components/todo_list/todo_detail_view_container.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _todo_detail_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_detail_view */ "./frontend/components/todo_list/todo_detail_view.jsx");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/todo_actions */ "./frontend/actions/todo_actions.js");
/* harmony import */ var _actions_step_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/step_actions */ "./frontend/actions/step_actions.js");

 // Actions




var mapDispatchToProps = function mapDispatchToProps(dispatch, _ref) {
  var todo = _ref.todo;
  return {
    removeTodo: function removeTodo() {
      return dispatch(Object(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["removeTodo"])(todo));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(null, // todo props is already passed in
mapDispatchToProps)(_todo_detail_view__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/todo_list/todo_form.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/todo_list/todo_form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_id_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/id_generator */ "./frontend/util/id_generator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TodoForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoForm, _React$Component);

  function TodoForm(props) {
    var _this;

    _classCallCheck(this, TodoForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoForm).call(this, props));
    _this.state = {
      title: "",
      body: "",
      done: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoForm, [{
    key: "update",
    value: function update(property) {
      var _this2 = this;

      return function (e) {
        return _this2.setState(_defineProperty({}, property, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var todo = Object.assign({}, this.state, {
        id: Object(_util_id_generator__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])()
      });
      this.props.receiveTodo(todo);
      this.setState({
        title: "",
        body: ""
      }); // reset form
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "todo-form",
        onSubmit: this.handleSubmit
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Title:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "input",
        ref: "title",
        value: this.state.title,
        placeholder: "buy milk",
        onChange: this.update('title'),
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Body:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        className: "input",
        ref: "body",
        cols: "20",
        value: this.state.body,
        rows: "5",
        placeholder: "2% or whatever is on sale!",
        onChange: this.update('body'),
        required: true
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "create-button"
      }, "Create Todo!"));
    }
  }]);

  return TodoForm;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ }),

/***/ "./frontend/components/todo_list/todo_list.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/todo_list/todo_list.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo_list_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_list_item */ "./frontend/components/todo_list/todo_list_item.jsx");
/* harmony import */ var _todo_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo_form */ "./frontend/components/todo_list/todo_form.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

 // Components




var TodoList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoList, _React$Component);

  function TodoList() {
    _classCallCheck(this, TodoList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodoList).apply(this, arguments));
  }

  _createClass(TodoList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          todos = _this$props.todos,
          receiveTodo = _this$props.receiveTodo;
      var todoItems = todos.map(function (todo) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todo_list_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: "todo-list-item".concat(todo.id),
          todo: todo,
          receiveTodo: receiveTodo
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "todo-list"
      }, todoItems), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todo_form__WEBPACK_IMPORTED_MODULE_2__["default"], {
        receiveTodo: receiveTodo
      }));
    }
  }]);

  return TodoList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoList);

/***/ }),

/***/ "./frontend/components/todo_list/todo_list_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/todo_list/todo_list_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_list */ "./frontend/components/todo_list/todo_list.jsx");
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/todo_actions */ "./frontend/actions/todo_actions.js");
/* harmony import */ var _reducers_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/selectors */ "./frontend/reducers/selectors.js");

 // Actions




var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: Object(_reducers_selectors__WEBPACK_IMPORTED_MODULE_3__["allTodos"])(state),
    state: state
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveTodo: function receiveTodo(todo) {
      return dispatch(Object(_actions_todo_actions__WEBPACK_IMPORTED_MODULE_2__["receiveTodo"])(todo));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_todo_list__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/todo_list/todo_list_item.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/todo_list/todo_list_item.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _todo_detail_view_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo_detail_view_container */ "./frontend/components/todo_list/todo_detail_view_container.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TodoListItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodoListItem, _React$Component);

  function TodoListItem(props) {
    var _this;

    _classCallCheck(this, TodoListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoListItem).call(this, props));
    _this.state = {
      detail: false
    };
    _this.toggleDetail = _this.toggleDetail.bind(_assertThisInitialized(_this));
    _this.toggleTodo = _this.toggleTodo.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TodoListItem, [{
    key: "toggleDetail",
    value: function toggleDetail(e) {
      e.preventDefault();
      this.setState({
        detail: !this.state.detail
      });
    }
  }, {
    key: "toggleTodo",
    value: function toggleTodo(e) {
      e.preventDefault();
      var toggledTodo = Object.assign({}, this.props.todo, {
        done: !this.props.todo.done
      });
      this.props.receiveTodo(toggledTodo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          todo = _this$props.todo,
          updateTodo = _this$props.updateTodo;
      var title = todo.title,
          done = todo.done;
      var detail;

      if (this.state.detail) {
        detail = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_todo_detail_view_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
          todo: todo
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "todo-list-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "todo-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.toggleDetail
      }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: done ? "done" : "undone",
        onClick: this.toggleTodo
      }, done ? "Undo" : "Done")), detail);
    }
  }]);

  return TodoListItem;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TodoListItem);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos_reducer */ "./frontend/reducers/todos_reducer.js");
/* harmony import */ var _steps_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./steps_reducer */ "./frontend/reducers/steps_reducer.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  todos: _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  steps: _steps_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./frontend/reducers/selectors.js":
/*!****************************************!*\
  !*** ./frontend/reducers/selectors.js ***!
  \****************************************/
/*! exports provided: allTodos, stepsByTodoId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTodos", function() { return allTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsByTodoId", function() { return stepsByTodoId; });
var allTodos = function allTodos(_ref) {
  var todos = _ref.todos;
  return Object.keys(todos).map(function (id) {
    return todos[id];
  });
};
var stepsByTodoId = function stepsByTodoId(_ref2, todo_id) {
  var steps = _ref2.steps;
  var stepsByTodoId = [];
  Object.keys(steps).forEach(function (stepId) {
    var step = steps[stepId];
    if (steps[stepId].todo_id === todo_id) stepsByTodoId.push(step);
  });
  return stepsByTodoId;
};

/***/ }),

/***/ "./frontend/reducers/steps_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/steps_reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_step_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/step_actions */ "./frontend/actions/step_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var stepsReducer = function stepsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var nextState;
  Object.freeze(state);

  switch (action.type) {
    case _actions_step_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_STEPS"]:
      nextState = Object.assign({}, state);
      action.steps.forEach(function (step) {
        return nextState[step.id] = step;
      });
      return nextState;

    case _actions_step_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_STEP"]:
      return Object.assign({}, state, _defineProperty({}, action.step.id, action.step));

    case _actions_step_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_STEP"]:
      nextState = Object.assign({}, state);
      delete nextState[action.step.id];
      return nextState;

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (stepsReducer); // Sample State Shape
// {
//   1: {
//     title: "walk to store",
//     done: false,
//     todo_id: 1
//   },
//   2: {
//     title: "buy soap",
//     done: false,
//     todo_id: 1
//   },
//   3: {
//     title: "walk to park",
//     done: false,
//     todo_id: 3
//   },
//   4: {
//     title: "play with dog",
//     done: false,
//     todo_id: 2
//   }
// };

/***/ }),

/***/ "./frontend/reducers/todos_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/todos_reducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todo_actions */ "./frontend/actions/todo_actions.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var todosReducer = function todosReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = {};

  switch (action.type) {
    case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_TODOS"]:
      action.todos.forEach(function (todo) {
        nextState[todo.id] = todo;
      });
      return nextState;

    case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["RECEIVE_TODO"]:
      var newTodo = _defineProperty({}, action.todo.id, action.todo);

      return Object.assign({}, state, newTodo);

    case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TODO"]:
      nextState = Object.assign({}, state);
      delete nextState[action.todo.id];
      return nextState;

    case _actions_todo_actions__WEBPACK_IMPORTED_MODULE_0__["TODO_ERROR"]:
      alert(action.error);

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (todosReducer); // Sample State Shape
// {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   },
// };

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");



var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(addLoggingToDispatch));
  store.subscribe(function () {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

var addLoggingToDispatch = function addLoggingToDispatch(store) {
  return function (next) {
    return function (action) {
      console.log('prev state ', store.getState());
      console.log('action: ', action);
      next(action);
      console.log('new state ', store.getState());
    };
  };
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./frontend/todo_redux.jsx":
/*!*********************************!*\
  !*** ./frontend/todo_redux.jsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
/* harmony import */ var _components_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/root */ "./frontend/components/root.jsx");




document.addEventListener('DOMContentLoaded', function () {
  var preloadedState = localStorage.state ? JSON.parse(localStorage.state) : {};
  var store = Object(_store_store__WEBPACK_IMPORTED_MODULE_2__["default"])(preloadedState); // store = applyMiddlewares(store, addLoggingToDispatch);

  var root = document.getElementById('content');
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_root__WEBPACK_IMPORTED_MODULE_3__["default"], {
    store: store
  }), root);
}); // const addLoggingToDispatch = store => next => action => {
//   console.log('prev state ', store.getState());
//   console.log('action: ', action);
//   next(action);
//   console.log('new state ', store.getState());
// };
// const applyMiddlewares = (store, ...middles) => {
//   let dispatch = store.dispatch;
//   middles.forEach(middle => {
//     dispatch = middle(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch })
// };

/***/ }),

/***/ "./frontend/util/id_generator.js":
/*!***************************************!*\
  !*** ./frontend/util/id_generator.js ***!
  \***************************************/
/*! exports provided: uniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
function uniqueId() {
  return new Date().getTime();
}

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/mnt/c/Users/johnw/Desktop/universe/aA/AAHomework/W10D5/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react-redux/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
/*! exports provided: Provider, createProvider, connectAdvanced, connect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/mnt/c/Users/johnw/Desktop/universe/aA/AAHomework/W10D5/node_modules/react-redux/es/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/mnt/c/Users/johnw/Desktop/universe/aA/AAHomework/W10D5/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/index.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/mnt/c/Users/johnw/Desktop/universe/aA/AAHomework/W10D5/node_modules/redux/es/index.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map