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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../dist/images/banner.jpg */ \"./dist/images/banner.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../dist/images/reservation.jpg */ \"./dist/images/reservation.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\nul {\r\n    list-style: none;\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#navigation {\r\n    background-color: rgb(82, 64, 19);\r\n    color: white;\r\n    width: 100%;\r\n    padding-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n\r\n#navigation .menu {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n#navigation .menu li {\r\n    padding: 10px 20px;\r\n}\r\n\r\n#navigation .menu li:hover {\r\n    cursor: pointer;\r\n    text-shadow: 0 0 10px black;\r\n    transform: translateY(-10%);\r\n}\r\n\r\n#navigation .menu .active {\r\n    border-bottom: 2px solid white;\r\n}\r\n\r\n#title-section {\r\n    height: 400px;\r\n    width: 100%;\r\n    padding: 20px 0px;\r\n\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    background-blend-mode: multiply;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#title-section h1,\r\n#title-section h3,\r\n#title-section h6 {\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#our-story-section {\r\n    display: grid;\r\n    grid-template-columns: 2fr 1fr;\r\n    grid-template-rows: repeat(2, auto);\r\n    grid-column-gap: 50px;\r\n    grid-row-gap: 0;\r\n}\r\n\r\n#our-story-section h1 {\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 2;\r\n\r\n    justify-self: center;\r\n}\r\n#our-story-section p {\r\n    grid-row: 2 / 3;\r\n    grid-column: 1 / 2;\r\n\r\n    padding-left: 50px;\r\n    text-align: center;\r\n    line-height: 1.6;\r\n}\r\n\r\n#our-story-section img {\r\n    grid-column: 2 / 3;\r\n    grid-row: 1 / 3;\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n    object-fit: cover;\r\n\r\n    align-self: center;\r\n}\r\n\r\n#reservation-section {\r\n    height: 250px;\r\n    width: 100%;\r\n    padding: 20px 0px;\r\n\r\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    background-repeat: no-repeat;\r\n    background-size:cover;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    background-blend-mode: multiply;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n#reservation-section h1,\r\n#reservation-section h3,\r\n#reservation-section button {\r\n    color: white;\r\n    text-transform: uppercase;\r\n}\r\n\r\n#reservation-section button {\r\n    padding: 15px 40px;\r\n    color: black;\r\n    background: goldenrod;\r\n    border: none;\r\n    border-radius: 7px;\r\n}\r\n\r\n#reservation-section .reservation-buttons {\r\n    padding: 20px;\r\n    font-weight: bold;\r\n\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n\r\n#reservation-section .reservation-buttons button:hover {\r\n    background: rgb(250, 196, 59);\r\n    box-shadow: 0px 0px 10px black;\r\n    cursor: pointer;\r\n}\r\n\r\n#footer {\r\n    width: 100%;\r\n    padding: 15px 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    background-color: rgb(82, 64, 19);\r\n    font-size: 12px;\r\n    color: rgb(181, 181, 181);\r\n}\r\n\r\n#footer a {\r\n    text-decoration: none;\r\n    color: rgb(181, 181, 181);\r\n    align-self: center;\r\n}\r\n\r\n#footer img {\r\n    height: 30px;\r\n    width: 30px;\r\n}\r\n\r\n.footer-link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* MENU PAGE */\r\n\r\n.food-items-section,\r\n.all-contacts-section {\r\n    width: 70%;\r\n    padding: 20px 0px;\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    grid-template-rows: repeat(auto-fill, minmax(1fr, 1fr));\r\n    gap: 20px;\r\n}\r\n\r\n.food-item,\r\n.contact-card {\r\n    border: 1px solid goldenrod;\r\n    padding: 10px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.contact-card {\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    padding: 0 40px;\r\n}\r\n\r\n.food-item .food-item-image {\r\n    width: 70%;\r\n    height: auto;\r\n}\r\n\r\n.contact-card-image img {\r\n    width: 150px;\r\n    height: auto;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n\r\n\r\nfunction loadContactPage() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    \r\n    //remove all child elements from a div\r\n    if (contentDiv) {\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createNavMenu)());\r\n\r\n    const contacts = [\r\n        {name: \"John\", title: \"director\", phone: \"000-111-222\", email: \"john@hof.com\"},\r\n        {name: \"Margaret\", title: \"chef\", phone: \"333-222-777\", email: \"margaret@hof.com\"},\r\n        {name: \"Rick\", title: \"restaurant manager\", phone: \"555-888-222\", email: \"rick@hof.com\"},\r\n        {name: \"Katherine\", title: \"assistant\", phone: \"555-777-222\", email: \"katherine@hof.com\"},\r\n    ];\r\n\r\n    const allContactsDiv = document.createElement(\"div\");\r\n\r\n    allContactsDiv.classList.add(\"all-contacts-section\");\r\n\r\n    contacts.forEach(contact => {\r\n        let div = document.createElement(\"div\");\r\n        let textDiv = document.createElement(\"div\");\r\n        let imgDiv = document.createElement(\"div\");\r\n        let name = document.createElement(\"h2\");\r\n        let title = document.createElement(\"h4\");\r\n        let phone = document.createElement(\"p\");\r\n        let email = document.createElement(\"p\");\r\n        let img = document.createElement(\"img\");\r\n\r\n        div.classList.add(\"contact-card\");\r\n        textDiv.classList.add(\"contact-card-text\")\r\n        imgDiv.classList.add(\"contact-card-image\");\r\n\r\n        name.textContent = contact.name;\r\n        title.textContent = contact.title;\r\n        phone.textContent = contact.phone;\r\n        email.textContent = contact.email;\r\n        img.src = `./images/${contact.name}.jpg`;\r\n        \r\n        imgDiv.appendChild(img);\r\n        textDiv.appendChild(name);\r\n        textDiv.appendChild(title);\r\n        textDiv.appendChild(phone);\r\n        textDiv.appendChild(email);\r\n        div.appendChild(textDiv);\r\n        div.appendChild(imgDiv);\r\n\r\n        allContactsDiv.appendChild(div);\r\n    });\r\n    contentDiv.appendChild(allContactsDiv);\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n\r\nfunction loadListeners() {\r\n    let menuItems = document.querySelectorAll(\".menu-item\");\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener(\"click\", menuEventHandler);\r\n    });\r\n}\r\n\r\nfunction menuEventHandler(event) {\r\n    switch(event.target.id) {\r\n        case \"home\":\r\n            (0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\r\n            (0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.setActive)(event.target.id);\r\n            loadListeners();\r\n            break;\r\n        case \"menu\":\r\n            (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__.loadMenuPage)();\r\n            (0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.setActive)(event.target.id);\r\n            loadListeners();\r\n            break;\r\n        case \"contact\":\r\n            (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.loadContactPage)();\r\n            (0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.setActive)(event.target.id);\r\n            loadListeners();\r\n            break;\r\n        default:\r\n            console.log(\"Error: None of the valid ids were clicked\");\r\n    }\r\n}\r\n\r\n(0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\r\n(0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.setActive)(\"home\");\r\nloadListeners();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadDOM.js":
/*!************************!*\
  !*** ./src/loadDOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createFooter: () => (/* binding */ createFooter),\n/* harmony export */   createNavMenu: () => (/* binding */ createNavMenu),\n/* harmony export */   loadContent: () => (/* binding */ loadContent),\n/* harmony export */   setActive: () => (/* binding */ setActive)\n/* harmony export */ });\nfunction loadContent() {\r\n    const content = document.querySelector(\"#content\");\r\n    const arrayOfSections = [createNavMenu(), createTitleSection(), createStorySection(), createReservationSection(), createFooter()];\r\n\r\n    //remove all child elements from a div\r\n    if (content) {\r\n        while (content.firstChild) {\r\n            content.removeChild(content.firstChild);\r\n        }\r\n    }\r\n\r\n    arrayOfSections.forEach(divElement => {\r\n        content.appendChild(divElement);\r\n    });\r\n\r\n    console.log(\"Load successful!\");\r\n}\r\n\r\nfunction createNavMenu() {\r\n    // create all elements\r\n    const div = document.createElement(\"div\");\r\n    const logoImg = document.createElement(\"img\");\r\n    const ul = document.createElement(\"ul\");\r\n    const menuItems = [\"Home\", \"Menu\", \"Contact\"];\r\n\r\n    // add necessary data\r\n    div.id = \"navigation\";\r\n    logoImg.src = \"./images/logo.png\";\r\n    ul.classList.add(\"menu\");\r\n\r\n    // create menu items\r\n    menuItems.forEach( menuItem => {\r\n        let li = document.createElement(\"li\");\r\n        \r\n        li.classList.add(\"menu-item\");\r\n        li.id = menuItem.toLowerCase();\r\n        li.textContent = menuItem;\r\n\r\n        ul.appendChild(li);\r\n    });\r\n\r\n    div.appendChild(logoImg);\r\n    div.appendChild(ul);\r\n\r\n    console.log(\"created navigation menu\");\r\n    // return the whole section\r\n    return div;\r\n}\r\n\r\nfunction setActive(pageId) {\r\n    // removes current \"active\" class from button\r\n    removeActive();\r\n\r\n    const button = document.querySelector(`#${pageId}`);\r\n    button.classList.add(\"active\");\r\n}\r\n\r\nfunction removeActive() {\r\n    const menuItems = document.querySelectorAll(\".menu-items\");\r\n    \r\n    menuItems.forEach(menuItem => {\r\n        if (menuItem.classList.contains(\"active\")) {\r\n            menuItem.classList.remove(\"active\");\r\n        }\r\n    });\r\n}\r\n\r\nfunction createTitleSection() {\r\n    const div = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const h3 = document.createElement(\"h3\");\r\n    const h6 = document.createElement(\"h6\");\r\n\r\n    div.id = \"title-section\";\r\n    h1.classList.add(\"main-title\");\r\n    h3.classList.add(\"sub-title\");\r\n    h6.classList.add(\"address-title\");\r\n\r\n    h1.textContent = \"Heaven of Food\";\r\n    h3.textContent = \"By friends for friends\";\r\n    h6.textContent = \"Never Hungry Street 23\";\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(h3);\r\n    div.appendChild(h6);\r\n    \r\n    console.log(\"created title section\");\r\n\r\n    return div;\r\n}\r\n\r\nfunction createStorySection() {\r\n    const div = document.createElement(\"div\");\r\n    const title = document.createElement(\"h1\");\r\n    const p = document.createElement(\"p\");\r\n    const img = document.createElement(\"img\");\r\n\r\n    div.id = \"our-story-section\";\r\n    p.classList.add(\"text\");\r\n    img.src = \"./images/story.jpg\";\r\n\r\n    p.textContent = \"Heaven of food is a one-of-a-kind dining experience that seamlessly combines delectable fusion cuisine with an intriguing underwater ambience. This cozy restaurant nestled in the Never Hungry Street is the newest of the Heaven of Food franchise with branches all over the world. Heaven of Food is the manifestation of our vision to offer you an indulgent escape in the midst of the hustle and bustle of the city. We're all about building a fraternity of like-minded patrons who appreciate a great meal in good company. This is made possible through the soul-soothing delicacies we offer in a setting inspired by the intrigues of the world under water. Take a plunge and explore the many surprises we have lined up just for you.\";\r\n    title.textContent = \"Our story\";\r\n\r\n    div.appendChild(title);\r\n    div.appendChild(p);\r\n    div.appendChild(img);\r\n\r\n    console.log(\"created story section\");\r\n\r\n    return div;\r\n}\r\n\r\nfunction createReservationSection() {\r\n    const div = document.createElement(\"div\");\r\n    const btnDiv = document.createElement(\"div\");\r\n    const h1 = document.createElement(\"h1\");\r\n    const h3 = document.createElement(\"h3\");\r\n    const emailBtn = document.createElement(\"button\");\r\n    const phoneBtn = document.createElement(\"button\");\r\n\r\n    div.id = \"reservation-section\";\r\n    btnDiv.classList.add(\"reservation-buttons\");\r\n    h1.classList.add(\"cta-title\");\r\n    h1.textContent = \"Private dining\";\r\n    h3.classList.add(\"sub-title\");\r\n    h3. textContent = \"Your event, your way\";\r\n    emailBtn.textContent = \"Email Us\";\r\n    phoneBtn.textContent = \"Call Us\";\r\n\r\n    div.appendChild(h1);\r\n    div.appendChild(h3);\r\n    btnDiv.appendChild(emailBtn);\r\n    btnDiv.appendChild(phoneBtn);\r\n    div.appendChild(btnDiv);\r\n\r\n    console.log(\"created reservation section\");\r\n    return div;\r\n}\r\n\r\nfunction createFooter() {\r\n    // create all elements\r\n    const div = document.createElement(\"div\");\r\n    const madeByText = document.createElement(\"p\");\r\n    const githubLogo = document.createElement(\"img\");\r\n    const githubLogoLink = document.createElement(\"a\");\r\n    const gitLink = document.createElement(\"a\");\r\n    const divLink = document.createElement(\"div\");\r\n\r\n    div.id = \"footer\";\r\n    madeByText.textContent = \"Made by Jan Jankovič\";\r\n    divLink.classList.add(\"footer-link\");\r\n    githubLogo.src = \"./images/github.png\";\r\n    githubLogoLink.href = \"https://github.com/jangmz\";\r\n    gitLink.href = \"https://github.com/jangmz\";\r\n    gitLink.textContent = \"Check my other work on GitHub -> \";\r\n    \r\n    githubLogoLink.appendChild(githubLogo);\r\n    divLink.appendChild(gitLink);\r\n    divLink.appendChild(githubLogoLink);\r\n\r\n    div.appendChild(madeByText);\r\n    div.appendChild(divLink);\r\n\r\n    console.log(\"created footer\");\r\n    \r\n    return div;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadDOM.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\n/* harmony import */ var _loadDOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadDOM.js */ \"./src/loadDOM.js\");\n\r\n\r\nfunction loadMenuPage() {\r\n    const contentDiv = document.querySelector(\"#content\");\r\n    \r\n    //remove all child elements from a div\r\n    if (contentDiv) {\r\n        while (contentDiv.firstChild) {\r\n            contentDiv.removeChild(contentDiv.firstChild);\r\n        }\r\n    }\r\n\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createNavMenu)());\r\n\r\n    // menu list\r\n    const foods = [\r\n        {title: \"Cordon Bleu\", img: \"./images/cordon.jpg\", text: \"It's delicous!\", price: \"25.00\"},\r\n        {title: \"Pizza\", img: \"./images/pizza.jpg\", text: \"Straight from Italy!\", price: \"20.00\"},\r\n        {title: \"Sandwich\", img: \"./images/sandwich.jpg\", text: \"To-go\", price: \"9.50\"},\r\n        {title: \"T-bone steak\", img: \"./images/tbone.jpg\", text: \"Touch your soul with this delicousness.\", price: \"35.00\"},\r\n    ];\r\n\r\n    const foodItemsSection = document.createElement(\"div\");\r\n\r\n    foodItemsSection.classList.add(\"food-items-section\");\r\n\r\n    // create each menu item entry\r\n    foods.forEach(foodItem => {\r\n        let div = document.createElement(\"div\");\r\n        let h3 = document.createElement(\"h3\");\r\n        let img = document.createElement(\"img\");\r\n        let text = document.createElement(\"p\");\r\n        let price = document.createElement(\"p\");\r\n\r\n        div.classList.add(\"food-item\");\r\n        h3.textContent = foodItem.title;\r\n        img.src = foodItem.img;\r\n        img.classList.add(\"food-item-image\");\r\n        text.textContent = foodItem.text;\r\n        price.textContent = foodItem.price + \" €\";\r\n\r\n        div.appendChild(h3);\r\n        div.appendChild(text);\r\n        div.appendChild(img);\r\n        div.appendChild(price);\r\n\r\n        foodItemsSection.appendChild(div);\r\n    });\r\n    contentDiv.appendChild(foodItemsSection);\r\n    contentDiv.appendChild((0,_loadDOM_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)());\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menuPage.js?");

/***/ }),

/***/ "./dist/images/banner.jpg":
/*!********************************!*\
  !*** ./dist/images/banner.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4bbcbfa8e934d626dd52.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./dist/images/banner.jpg?");

/***/ }),

/***/ "./dist/images/reservation.jpg":
/*!*************************************!*\
  !*** ./dist/images/reservation.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c5b746d3e5d6bd9d102d.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./dist/images/reservation.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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