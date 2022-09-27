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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  padding: 20px 0;\\n  margin: 0;\\n  display: flex;\\n  justify-content: center;\\n  width: 100vw;\\n  height: 100vh;\\n}\\n\\n.area {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 20px;\\n  border: solid brown;\\n  width: 50%;\\n  height: 80%;\\n  background-color: antiquewhite;\\n  padding: 20px;\\n}\\n\\ntextarea {\\n  width: 100%;\\n  height: 100%;\\n  resize: none;\\n}\\n\\nbutton {\\n  padding: 10px 30px;\\n  background-color: cornflowerblue;\\n  border: none;\\n  border-radius: 10px;\\n  font-size: 1.5rem;\\n  font-weight: bolder;\\n  color: white;\\n  cursor: pointer;\\n}\\n\\nbutton:hover {\\n  background-color: blue;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://squad-generator/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://squad-generator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://squad-generator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://squad-generator/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://squad-generator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/createTable.js":
/*!****************************!*\
  !*** ./src/createTable.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _squadsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squadsData */ \"./src/squadsData.js\");\n\n\n\nfunction createTable() {\n  const table = document.createElement(\"table\");\n  generateHeaders(table);\n  generateBody(table);\n  download(table.outerHTML);\n}\n\nfunction generateHeaders(table) {\n  const head = document.createElement(\"thead\");\n  const row = document.createElement(\"tr\");\n\n  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_0__.squads.length; i++) {\n    row.appendChild(generateHeader(\"Squad \" + (i + 1), \"#ffd966\"));\n  }\n\n  row.appendChild(generateHeader());\n  row.appendChild(generateHeader(\"Accepted\", \"#93c47d\"))\n  row.appendChild(generateHeader(\"Maybe\", \"#e06666\"))\n\n  head.appendChild(row);\n  table.appendChild(head);\n}\n\nfunction generateHeader(text, color) {\n  return generateCell(text, color, \"bolder\", \"1.5rem\");\n}\n\nfunction generateBody(table) {\n  const acceptedArray = Array.from(_index__WEBPACK_IMPORTED_MODULE_0__.accepted);\n  const maybeArray = Array.from(_index__WEBPACK_IMPORTED_MODULE_0__.maybe);\n\n  const body = document.createElement(\"tbody\");\n\n  for (let i = 0; i < 10; i++) {\n    const row = document.createElement(\"tr\");\n\n    for (let j = 0; j < 8; j++) {\n      row.appendChild(generateCell(_index__WEBPACK_IMPORTED_MODULE_0__.squads[j][i]))\n    }\n\n    row.appendChild(generateCell());\n    row.appendChild(generateCell(acceptedArray[i]));\n    row.appendChild(generateCell(maybeArray[i] ? maybeArray[i] + _index__WEBPACK_IMPORTED_MODULE_0__.maybeFormatter : undefined));\n\n    body.appendChild(row);\n  }\n\n  let i = 10;\n  while (acceptedArray[i] || maybeArray[i]) {\n    const row = document.createElement(\"tr\");\n    for (let i = 0; i < 9; i++) {\n      row.appendChild(generateCell());\n    }\n    row.appendChild(generateCell(acceptedArray[i]));\n    row.appendChild(generateCell(maybeArray[i] ? maybeArray[i] + _index__WEBPACK_IMPORTED_MODULE_0__.maybeFormatter : undefined));\n\n    body.appendChild(row);\n\n    i++;\n  }\n\n  table.appendChild(body);\n}\n\nfunction generateCell(text, color, weight, size) {\n  const cell = document.createElement(\"td\");\n  cell.style.backgroundColor = color ? color : text ? getColor(text) : \"\";\n  cell.style.fontWeight = weight ? weight : \"\";\n  cell.style.fontSize = size ? size : \"\";\n  cell.style.border = text ? \"solid black\" : \"\";\n  cell.style.textAlign = \"center\";\n  cell.textContent = text ? text : \"\";\n\n  return cell;\n}\n\nfunction getColor(text) {\n  text = text.replaceAll(_index__WEBPACK_IMPORTED_MODULE_0__.maybeFormatter, \"\");\n  if (_squadsData__WEBPACK_IMPORTED_MODULE_1__.clerics.has(text)) {\n    return \"#00ff00\";\n  } else if (_squadsData__WEBPACK_IMPORTED_MODULE_1__.mystics.has(text)) {\n    return \"cyan\";\n  } else {\n    return \"\";\n  }\n}\n\nfunction download(file) {\n  var element = document.createElement('a');\n  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(file));\n  element.setAttribute('download', \"squads-generated.html\");\n\n  element.style.display = 'none';\n  document.body.appendChild(element);\n\n  element.click();\n\n  document.body.removeChild(element);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTable);\n\n//# sourceURL=webpack://squad-generator/./src/createTable.js?");

/***/ }),

/***/ "./src/fillSquadsWithBlademasters.js":
/*!*******************************************!*\
  !*** ./src/fillSquadsWithBlademasters.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _squadsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squadsData */ \"./src/squadsData.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction fillSquadsWithBlademasters() {\n  _index__WEBPACK_IMPORTED_MODULE_1__.squads.forEach(squad => {\n    if (squad.length < 10 && !hasBlademaster(squad)) {\n      addRandomBlademaster(squad);\n    }\n  })\n}\n\nfunction hasBlademaster(squad) {\n  for (let name of squad.values()) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.blademasters.has(name)) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction addRandomBlademaster(squad) {\n  let blademaster = getBlademasterFromAccepted();\n  if (blademaster === null) {\n    blademaster = getBlademasterFromMaybe();\n    blademaster = blademaster !== null ? (0,_index__WEBPACK_IMPORTED_MODULE_1__.format)(blademaster) : null;\n  }\n\n  if (blademaster !== null) {\n    squad.push(blademaster);\n  }\n}\n\nfunction getBlademasterFromAccepted() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.accepted) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.blademasters.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.accepted[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\nfunction getBlademasterFromMaybe() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.maybe) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.blademasters.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.maybe[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillSquadsWithBlademasters);\n\n//# sourceURL=webpack://squad-generator/./src/fillSquadsWithBlademasters.js?");

/***/ }),

/***/ "./src/fillSquadsWithClerics.js":
/*!**************************************!*\
  !*** ./src/fillSquadsWithClerics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _squadsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squadsData */ \"./src/squadsData.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction fillSquadsWithClerics() {\n  _index__WEBPACK_IMPORTED_MODULE_1__.squads.forEach(squad => {\n    if (squad.length < 10 && !hasCleric(squad)) {\n      addRandomCleric(squad);\n    }\n  })\n}\n\nfunction hasCleric(squad) {\n  for (let name of squad) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.clerics.has(name)) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction addRandomCleric(squad) {\n  let cleric = getClericFromAccepted();\n  if (cleric === null) {\n    cleric = getClericFromMaybe();\n    cleric = cleric !== null ? (0,_index__WEBPACK_IMPORTED_MODULE_1__.format)(cleric) : null;\n  }\n\n  if (cleric !== null) {\n    squad.push(cleric);\n  }\n}\n\nfunction getClericFromAccepted() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.accepted) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.clerics.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.accepted[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\nfunction getClericFromMaybe() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.maybe) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.clerics.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.maybe[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillSquadsWithClerics);\n\n//# sourceURL=webpack://squad-generator/./src/fillSquadsWithClerics.js?");

/***/ }),

/***/ "./src/fillSquadsWithMystics.js":
/*!**************************************!*\
  !*** ./src/fillSquadsWithMystics.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _squadsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./squadsData */ \"./src/squadsData.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n\nfunction fillSquadsWithMystics() {\n  _index__WEBPACK_IMPORTED_MODULE_1__.squads.forEach(squad => {\n    if (squad.length < 10 && !hasMystic(squad)) {\n      addRandomMystic(squad);\n    }\n  })\n}\n\nfunction hasMystic(squad) {\n  for (let name of squad) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.mystics.has(name)) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction addRandomMystic(squad) {\n  let mystic = getMysticFromAccepted();\n  if (mystic === null) {\n    mystic = getMysticFromMaybe();\n    mystic = mystic !== null ? (0,_index__WEBPACK_IMPORTED_MODULE_1__.format)(mystic) : null;\n  }\n\n  if (mystic !== null) {\n    squad.push(mystic);\n  }\n}\n\nfunction getMysticFromAccepted() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.accepted) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.mystics.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.accepted[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\nfunction getMysticFromMaybe() {\n  for (let name of _index__WEBPACK_IMPORTED_MODULE_1__.maybe) {\n    if (_squadsData__WEBPACK_IMPORTED_MODULE_0__.mystics.has(name)) {\n      _index__WEBPACK_IMPORTED_MODULE_1__.maybe[\"delete\"](name);\n      return name;\n    }\n  }\n\n  return null;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fillSquadsWithMystics);\n\n//# sourceURL=webpack://squad-generator/./src/fillSquadsWithMystics.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accepted\": () => (/* binding */ accepted),\n/* harmony export */   \"format\": () => (/* binding */ format),\n/* harmony export */   \"maybe\": () => (/* binding */ maybe),\n/* harmony export */   \"maybeFormatter\": () => (/* binding */ maybeFormatter),\n/* harmony export */   \"squads\": () => (/* binding */ squads)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _squadsData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squadsData */ \"./src/squadsData.js\");\n/* harmony import */ var _fillSquadsWithClerics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fillSquadsWithClerics */ \"./src/fillSquadsWithClerics.js\");\n/* harmony import */ var _fillSquadsWithMystics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fillSquadsWithMystics */ \"./src/fillSquadsWithMystics.js\");\n/* harmony import */ var _fillSquadsWithBlademasters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fillSquadsWithBlademasters */ \"./src/fillSquadsWithBlademasters.js\");\n/* harmony import */ var _createTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createTable */ \"./src/createTable.js\");\n\n\n\n\n\n\n\nconst maybeFormatter = \" (mb)\";\nconst accepted = new Set();\nconst maybe = new Set();\nlet squads = []\n\nconst generateButton = document.querySelector(\"button\");\ngenerateButton.addEventListener(\"click\", () => {\n  squads = [];\n  const list = document.querySelector(\"textarea\").value.split(\"\\n\");\n\n  let fillingList = accepted;\n\n  for (let i = 0; i < list.length; i++) {\n    if ((/.*Accepted.*/gmi).test(list[i])) {\n      fillingList = accepted;\n      continue;\n    } else if ((/.*Tentative.*/gmi).test(list[i])) {\n      fillingList = maybe;\n      continue;\n    } else if ((/.*Declined.*/gmi).test(list[i])) {\n      fillingList = new Set();\n      continue;\n    }\n\n    fillingList.add(list[i]);\n  }\n\n  manipulateData();\n  (0,_fillSquadsWithClerics__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_fillSquadsWithMystics__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_fillSquadsWithBlademasters__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n  fillEmptySquad();\n  console.log(squads);\n  (0,_createTable__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n})\n\nfunction fillEmptySquad() {\n  squads.forEach(squad => {\n    while (squad.length < 10) {\n      squad.push(\" \");\n    }\n  })\n}\n\nfunction manipulateData() {\n  _squadsData__WEBPACK_IMPORTED_MODULE_1__.concreteSquads.forEach(squad => {\n    const newSquad = [];\n    squad = squad.filter(name => {\n      if (accepted.has(name) || maybe.has(name)) {\n        accepted.delete(name);\n        return true;\n      } else {\n        return false;\n      }\n    })\n\n    squad.forEach(name => {\n      if (maybe.has(name)) {\n        maybe.delete(name);\n        newSquad.push(format(name));\n      } else {\n        newSquad.push(name);\n      }\n    })\n\n    squads.push(newSquad);\n  })\n}\n\nfunction format(name) {\n  return name + \" (mb)\";\n}\n\n\n\n//# sourceURL=webpack://squad-generator/./src/index.js?");

/***/ }),

/***/ "./src/squadsData.js":
/*!***************************!*\
  !*** ./src/squadsData.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blademasters\": () => (/* binding */ blademasters),\n/* harmony export */   \"clerics\": () => (/* binding */ clerics),\n/* harmony export */   \"concreteSquads\": () => (/* binding */ concreteSquads),\n/* harmony export */   \"mystics\": () => (/* binding */ mystics)\n/* harmony export */ });\nconst clerics = new Set([\"Claramenta\", \"✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠\", \"Aeliah\", \"BetterDays\", \"ganjarule\", \"Talonwife\", \"Tamrood\", \"WhiteDove_\", \"Averelle\", \"Galaxy_Girl\", \"Lady_EverLuv\", \"Aenara\", \"Nurse/Rosie\"]);\nconst mystics = new Set([\"Elonei\", \"Maryiam\", \"Natta\", \"Fuji\", \"Alivia\", \"Gly\", \"Siachi\"]);\nconst blademasters = new Set([\"slewdem\", \"grei\", \"SmashWolf\"]);\n\nconst concreteSquads = [\n  [\"WoodUToDeath\", \"GILF\", \"Aenara\"],\n  [\"Aeliah\", \"Elonei\", \"Aemirah\"],\n  [],\n  [],\n  [],\n  [],\n  [],\n  []\n];\n\n\n\n//# sourceURL=webpack://squad-generator/./src/squadsData.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;