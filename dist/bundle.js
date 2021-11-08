/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/modules/burger.js":
/*!**********************************!*\
  !*** ./script/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ burger; }
/* harmony export */ });
function burger() {
  var burgerBut = document.querySelector("#burgerBut"),
      menuContainer = document.querySelector("#burgerListContainer"),
      span1 = burgerBut.querySelector("span:nth-child(1)"),
      span2 = burgerBut.querySelector("span:nth-child(2)"),
      span3 = burgerBut.querySelector("span:nth-child(3)");
  burgerBut.addEventListener("click", openBurger);
  window.addEventListener("resize", closeBurger);
  window.addEventListener("scroll", closeBurger);

  function openBurger() {
    menuContainer.classList.add("menuOpen");
    span1.classList.remove("span1CrossAnimBack");
    span2.classList.remove("span2CrossAnimBack");
    span3.classList.remove("span3Show");
    span1.classList.add("span1CrossAnim");
    span2.classList.add("span2CrossAnim");
    span3.classList.add("span3Hide");
    burgerBut.addEventListener("click", closeBurger);
    burgerBut.removeEventListener("click", openBurger);
  }

  function closeBurger() {
    menuContainer.classList.remove("menuOpen");
    span1.classList.remove("span1CrossAnim");
    span2.classList.remove("span2CrossAnim");
    span3.classList.remove("span3Hide");
    span1.classList.add("span1CrossAnimBack");
    span2.classList.add("span2CrossAnimBack");
    span3.classList.add("span3Show");
    burgerBut.addEventListener("click", openBurger);
    burgerBut.removeEventListener("click", closeBurger);
  }
}

/***/ }),

/***/ "./script/modules/mainBackground.js":
/*!******************************************!*\
  !*** ./script/modules/mainBackground.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BackgroundImageLoad; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BackgroundImageLoad = /*#__PURE__*/function () {
  function BackgroundImageLoad(className, target, changeSize) {
    _classCallCheck(this, BackgroundImageLoad);

    this.className = className;
    this.target = document.querySelector("".concat(target));
    this.changeSize = changeSize;
  }

  _createClass(BackgroundImageLoad, [{
    key: "startObservation",
    value: function startObservation() {
      var _this = this;

      this.observation();
      window.addEventListener("resize", function () {
        return _this.debounce(_this.observation.bind(_this), 200);
      });
    }
  }, {
    key: "debounce",
    value: function debounce(func, timer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = setTimeout(func, timer);
    }
  }, {
    key: "observation",
    value: function observation() {
      var width = document.body.clientWidth;

      if (width <= this.changeSize) {
        this.target.classList.add("".concat(this.className));
      } else {
        this.target.classList.remove("".concat(this.className));
      }
    }
  }]);

  return BackgroundImageLoad;
}();



/***/ }),

/***/ "./script/modules/smoothScroll.js":
/*!****************************************!*\
  !*** ./script/modules/smoothScroll.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ smoothScroll; }
/* harmony export */ });
function smoothScroll(linksToScroll, options) {
  linksToScroll.forEach(function (item) {
    return item.addEventListener("click", function (e) {
      e.preventDefault();
      var targetId = e.target.getAttribute("href").slice(1),
          targetElement = document.getElementById(targetId);

      if (options) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: options.block ? options.block : "start",
          inline: options.inline ? options.inline : "nearest"
        });
      } else {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      }
    });
  });
}

/***/ }),

/***/ "./css/common.css":
/*!************************!*\
  !*** ./css/common.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/header.css":
/*!************************!*\
  !*** ./css/header.css ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/normalize.css":
/*!***************************!*\
  !*** ./css/normalize.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./script/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll.js */ "./script/modules/smoothScroll.js");
/* harmony import */ var _modules_mainBackground_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mainBackground.js */ "./script/modules/mainBackground.js");
/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger.js */ "./script/modules/burger.js");
/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/normalize.css */ "./css/normalize.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/header.css */ "./css/header.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/main.css */ "./css/main.css");
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/common.css */ "./css/common.css");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









function BackTimer(date) {
  var _this = this;

  this.curDate = new Date();
  this.diff = date - this.curDate;
  this.dayLeft = Math.floor(this.diff / 1000 / 60 / 60 / 24), this.hourLeft = Math.floor(this.diff / 1000 / 60 / 60 % 24), this.minLeft = Math.floor(this.diff / 1000 / 60 % 60);

  this.secTimer = function () {
    _this.trueCountTime();

    if (_this.secLeft <= 0) {
      _this.secLeft = 60;

      _this.minTimer();
    }

    setTimeout(_this.secTimer, 1000);

    _this.setTime("sec", --_this.secLeft);

    _this.secText();
  };

  this.minTimer = function () {
    if (_this.minLeft <= 0) {
      _this.minLeft = 60;

      _this.hourTimer();
    }

    _this.setTime("min", --_this.minLeft);

    _this.minText();
  };

  this.hourTimer = function () {
    if (_this.hourLeft <= 0) {
      _this.hourLeft = 24;

      _this.dayTimer();
    }

    _this.setTime("hour", --_this.hourLeft);
  };

  this.dayTimer = function () {
    if (_this.dayLeft <= 0) {
      return;
    }

    _this.setVal("day", --_this.dayLeft);
  };

  this.secText = function () {
    if (_this.secLeft <= 4 && _this.secLeft >= 2) {
      _this.setVal("secText", "\u0421\u0435\u043A\u0443\u043D\u0434\u044B");
    } else if (_this.secLeft === 1) {
      _this.setVal("secText", "\u0421\u0435\u043A\u0443\u043D\u0434\u0430");
    } else {
      _this.setVal("secText", "\u0421\u0435\u043A\u0443\u043D\u0434");
    }
  };

  this.minText = function () {
    if (_this.minLeft <= 4 && _this.minLeft >= 2) {
      _this.setVal("minText", "\u041C\u0438\u043D\u0443\u0442");
    } else if (_this.minLeft === 1) {
      _this.setVal("minText", "\u041C\u0438\u043D\u0443\u0442\u0430");
    } else {
      _this.setVal("minText", "\u041C\u0438\u043D\u0443\u0442");
    }
  };

  this.hourText = function () {
    if (_this.hourLeft <= 4 && _this.hourLeft >= 2) {
      _this.setVal("hourText", "\u0427\u0430\u0441\u0430");
    } else if (_this.hourLeft === 1) {
      _this.setVal("hourText", "\u0427\u0430\u0441");
    } else {
      _this.setVal("hourText", "\u0427\u0430\u0441\u043E\u0432");
    }
  };

  this.dayText = function () {
    if (_this.dayLeft <= 4 && _this.dayLeft >= 2) {
      _this.setVal("dayText", "\u0414\u043D\u044F");
    } else if (_this.dayLeft === 1) {
      _this.setVal("dayText", "\u0414\u0435\u043D\u044C");
    } else {
      _this.setVal("dayText", "\u0414\u043D\u0435\u0439");
    }
  };

  this.setVal = function (target, value) {
    document.querySelector("#".concat(target)).innerHTML = value;
  };

  this.setTime = function (target, time) {
    document.querySelector("#".concat(target)).innerHTML = time < 10 ? "0".concat(time) : time;
  };

  this.trueCountTime = function () {
    _this.diff = date - new Date();
    _this.secLeft = Math.floor(_this.diff / 1000 % 60);
  };

  this.startTimer = function () {
    _this.secTimer();

    _this.secText();

    _this.minText();

    _this.setTime("min", _this.minLeft);

    _this.setTime("hour", _this.hourLeft);

    _this.setTime("day", _this.dayLeft);
  };
}

var ProgressBarDoubleGradient = /*#__PURE__*/function () {
  function ProgressBarDoubleGradient(targetElement, rotatePercent, color1, color2) {
    _classCallCheck(this, ProgressBarDoubleGradient);

    this.target = targetElement;
    this.rotatePercent = rotatePercent;
    this.color1 = color1;
    this.color2 = color2;
  }

  _createClass(ProgressBarDoubleGradient, [{
    key: "setBackground",
    value: function setBackground(percent) {
      this.target.style.width = "".concat(percent, "%");
      this.target.style.background = "linear-gradient(".concat(this.rotatePercent, "deg, ").concat(this.color1, ", ").concat(this.color2, ")");
    }
  }]);

  return ProgressBarDoubleGradient;
}();

var dateTimerBack = new Date(2021, 10, 13),
    courseBack = new BackTimer(dateTimerBack);
courseBack.startTimer();
var studentsEarnTarget = document.querySelector("#earnProgress");
var studentsEarnProgress = new ProgressBarDoubleGradient(studentsEarnTarget, 95, "#DF5950", "#451046");
studentsEarnProgress.setBackground(40);
var allSmoothScrollsLinks = document.querySelectorAll(".menuLink");
(0,_modules_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(allSmoothScrollsLinks);
var backgroundChange = new _modules_mainBackground_js__WEBPACK_IMPORTED_MODULE_1__["default"]("headerBackground1100", ".header", 1100);
backgroundChange.startObservation();
(0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map