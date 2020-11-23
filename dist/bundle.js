/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ajaxRequest.js":
/*!****************************!*\
  !*** ./src/ajaxRequest.js ***!
  \****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass httpRequest {\n  ajax(type, url, async, data) {\n    //type:请求类型；url:请求地址；sync:是否异步请求\n    return new Promise((resolve) => {\n      let httpAjax = new XMLHttpRequest();\n      httpAjax.onreadystatechange = () => {\n        if (httpAjax.readyState == 4 && httpAjax.status == 200) {\n          resolve(JSON.parse(httpAjax.responseText));\n        }\n      };\n      httpAjax.open(type, url, async);\n      httpAjax.send(data ? JSON.stringify(data) : null);\n    });\n  }\n}\n\nclass ajaxRequest {\n  get(url) {\n    return new Promise((resolve, reject) => {\n      const getMethod = new httpRequest();\n      resolve(getMethod.ajax(\"get\", url, true));\n    });\n  }\n  post(url, data) {\n    return new Promise((resolve, reject) => {\n      const postMethod = new httpRequest();\n      resolve(postMethod.ajax(\"post\", url, true, data));\n    });\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ajaxRequest);\n\n\n//# sourceURL=webpack://asyncrequestcomponent/./src/ajaxRequest.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ajaxRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajaxRequest */ \"./src/ajaxRequest.js\");\n/* harmony import */ var _urlConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlConfig */ \"./src/urlConfig.js\");\n\n\n\nconst request = new _ajaxRequest__WEBPACK_IMPORTED_MODULE_0__.default();\n\nrequest.get(_urlConfig__WEBPACK_IMPORTED_MODULE_1__.default.getUrl).then((data) => {\n  console.log(\"data===\", data);\n});\n\nrequest\n  .post(_urlConfig__WEBPACK_IMPORTED_MODULE_1__.default.postUrl, {\n    a: 1,\n    b: 1,\n  })\n  .then((data) => {\n    console.log(data);\n  });\n\n\n//# sourceURL=webpack://asyncrequestcomponent/./src/index.js?");

/***/ }),

/***/ "./src/urlConfig.js":
/*!**************************!*\
  !*** ./src/urlConfig.js ***!
  \**************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst urlConfig = {\n  getUrl: \"https://mock.yonyoucloud.com/mock/6126/error\",\n  postUrl: \"https://mock.yonyoucloud.com/mock/6126/ceshi\",\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlConfig);\n\n\n//# sourceURL=webpack://asyncrequestcomponent/./src/urlConfig.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;