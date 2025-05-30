/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

io-circle-toggle {
  outline: none;
  cursor: pointer;
}

io-circle-toggle[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

/*
 * The following rules belong to the io-circle-toggle.js rendered SVG
 * but since MS Edge does not understand the <style> node within the SVG
 * we have moved these back to this file to normalize the layout in MS Edge too
 */

io-circle-toggle .outer-circle,
io-circle-toggle .on,
io-circle-toggle .off {
  transition: all 0.5s cubic-bezier(0.8, 0, 0.25, 1);
}

/*
 * We cannot rely on SVG's masking/clipping to work with CSS transforms
 * so we have to replicate the outline of the outer circle in CSS.
 * https://gitlab.com/adblockinc/ext/adblockplus/adblockplus/-/issues/543
 * https://gitlab.com/adblockinc/ext/adblockplus/adblockplus/-/issues/598
 */
io-circle-toggle[checked] .on,
io-circle-toggle .off {
  clip-path: circle(100% at 50% 50%);
}

io-circle-toggle .on {
  clip-path: circle(100% at -100% 50%);
}

io-circle-toggle[checked] .off {
  clip-path: circle(100% at 200% 50%);
}

/*
 * Edge, Firefox 52 and 53 don't support
 * basic shape values for clip-path yet
 */
io-circle-toggle:not([checked]) .on,
io-circle-toggle[checked] .off {
  opacity: 0;
}

io-circle-toggle .outer-circle {
  transform: translateX(-32.2px);
  fill: #585858;
  stroke-width: 0;
}

io-circle-toggle[checked] .outer-circle {
  transform: translateX(-11.4px);
  fill: #0797e1;
}

io-circle-toggle:not([checked]) .on {
  transform: translateX(12px);
}

io-circle-toggle:not([checked]) .off {
  transform: translateX(14.8px);
}

io-circle-toggle:focus .outer-circle {
  stroke: rgba(88, 88, 88, 0.8);
  stroke-width: 5;
}

io-circle-toggle[checked]:focus .outer-circle {
  stroke: rgba(6, 136, 203, 0.8);
  stroke-width: 5;
}
`, "",{"version":3,"sources":["webpack://./src/components/ui/io-circle-toggle.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAEF;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;;;;EAIE;;AAEF;;;EAGE,kDAAkD;AACpD;;AAEA;;;;;EAKE;AACF;;EAEE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;;;EAGE;AACF;;EAEE,UAAU;AACZ;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,8BAA8B;EAC9B,eAAe;AACjB","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-circle-toggle {\n  outline: none;\n  cursor: pointer;\n}\n\nio-circle-toggle[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n/*\n * The following rules belong to the io-circle-toggle.js rendered SVG\n * but since MS Edge does not understand the <style> node within the SVG\n * we have moved these back to this file to normalize the layout in MS Edge too\n */\n\nio-circle-toggle .outer-circle,\nio-circle-toggle .on,\nio-circle-toggle .off {\n  transition: all 0.5s cubic-bezier(0.8, 0, 0.25, 1);\n}\n\n/*\n * We cannot rely on SVG's masking/clipping to work with CSS transforms\n * so we have to replicate the outline of the outer circle in CSS.\n * https://gitlab.com/adblockinc/ext/adblockplus/adblockplus/-/issues/543\n * https://gitlab.com/adblockinc/ext/adblockplus/adblockplus/-/issues/598\n */\nio-circle-toggle[checked] .on,\nio-circle-toggle .off {\n  clip-path: circle(100% at 50% 50%);\n}\n\nio-circle-toggle .on {\n  clip-path: circle(100% at -100% 50%);\n}\n\nio-circle-toggle[checked] .off {\n  clip-path: circle(100% at 200% 50%);\n}\n\n/*\n * Edge, Firefox 52 and 53 don't support\n * basic shape values for clip-path yet\n */\nio-circle-toggle:not([checked]) .on,\nio-circle-toggle[checked] .off {\n  opacity: 0;\n}\n\nio-circle-toggle .outer-circle {\n  transform: translateX(-32.2px);\n  fill: #585858;\n  stroke-width: 0;\n}\n\nio-circle-toggle[checked] .outer-circle {\n  transform: translateX(-11.4px);\n  fill: #0797e1;\n}\n\nio-circle-toggle:not([checked]) .on {\n  transform: translateX(12px);\n}\n\nio-circle-toggle:not([checked]) .off {\n  transform: translateX(14.8px);\n}\n\nio-circle-toggle:focus .outer-circle {\n  stroke: rgba(88, 88, 88, 0.8);\n  stroke-width: 5;\n}\n\nio-circle-toggle[checked]:focus .outer-circle {\n  stroke: rgba(6, 136, 203, 0.8);\n  stroke-width: 5;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1941:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

io-popup-footer {
  --footer-height: calc(50px - var(--border-width-thin));
  --tabs-height: 8px;
  --panels-height: calc(var(--footer-height) - var(--tabs-height));
  display: flex;
  flex-direction: column;
  position: relative;
  height: var(--footer-height);
}

io-popup-footer ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

io-popup-footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-out;
}

io-popup-footer a:not(.icon) {
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: var(--border-radius-primary);
  font-weight: 600;
  text-transform: uppercase;
}

io-popup-footer a:not(.icon):hover,
io-popup-footer a:not(.icon):focus {
  border-color: var(--border-color-ternary);
  background-color: var(--background-color-ternary);
}

io-popup-footer a.icon {
  margin: 0 var(--margin-secondary);
  width: var(--font-size-primary);
  opacity: 0.5;
}

io-popup-footer a.icon:hover,
io-popup-footer a.icon:focus {
  opacity: 1;
}

io-popup-footer a.icon img {
  pointer-events: none;
}

io-popup-footer .panels {
  overflow: hidden;
  position: relative;
  height: var(--panels-height);
}

io-popup-footer .panels > li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: var(--panels-height);
  padding: 0 var(--padding-primary);
  opacity: 0;
  transform: translateY(calc(-1 * var(--panels-height)));
  transition: transform 0.3s ease;
}

io-popup-footer .panels > [aria-hidden="false"] {
  opacity: 1;
  transform: translateY(0);
}

io-popup-footer [role="tabpanel"] > .message {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

io-popup-footer [role="tabpanel"] > .buttons {
  display: flex;
}

io-popup-footer .tabs {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
}

io-popup-footer .tabs > li {
  flex: 1;
  padding: 0 1px;
}

io-popup-footer .tabs button {
  position: relative;
  height: var(--tabs-height);
  width: 100%;
  padding: 0;
}

/*
 * ::before styles the width-fixed visible area of the tab
 * ::after styles the progress bar area of the tab
 */
io-popup-footer .tabs button::before,
io-popup-footer .tabs button::after {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50%;
  background-color: var(--color-info);
  opacity: 0.3;
  content: "";
  transition: all 0.3s ease-in;
}

io-popup-footer .tabs button[aria-selected="true"]::before,
io-popup-footer .tabs button:hover::before,
io-popup-footer .tabs button:focus::before,
io-popup-footer .tabs button[aria-selected="true"]::after {
  height: 100%;
}

io-popup-footer .tabs:not(.animated) button[aria-selected="true"]::before {
  opacity: 0.5;
}

io-popup-footer .tabs button::after {
  right: 100%;
  height: 50%;
  opacity: 0.5;
  --animation-name: progress-bar;
}

html[dir="rtl"] io-popup-footer .tabs button::after {
  right: 0%;
  left: 100%;
  --animation-name: progress-bar-rtl;
}

io-popup-footer .tabs.animated button[aria-selected="true"]::after {
  animation: var(--animation-name) var(--animation-duration) linear 0s;
}

@keyframes progress-bar {
  from {
    right: 100%;
  }

  to {
    right: 0;
  }
}

@keyframes progress-bar-rtl {
  from {
    left: 100%;
  }

  to {
    left: 0;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/ui/io-popup-footer.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAEF;EACE,sDAAsD;EACtD,kBAAkB;EAClB,gEAAgE;EAChE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,2CAA2C;EAC3C,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;;EAEE,yCAAyC;EACzC,iDAAiD;AACnD;;AAEA;EACE,iCAAiC;EACjC,+BAA+B;EAC/B,YAAY;AACd;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,WAAW;EACX,4BAA4B;EAC5B,iCAAiC;EACjC,UAAU;EACV,sDAAsD;EACtD,+BAA+B;AACjC;;AAEA;EACE,UAAU;EACV,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,OAAO;EACP,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,WAAW;EACX,UAAU;AACZ;;AAEA;;;EAGE;AACF;;EAEE,kBAAkB;EAClB,OAAO;EACP,QAAQ;EACR,SAAS;EACT,WAAW;EACX,mCAAmC;EACnC,YAAY;EACZ,WAAW;EACX,4BAA4B;AAC9B;;AAEA;;;;EAIE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,kCAAkC;AACpC;;AAEA;EACE,oEAAoE;AACtE;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,QAAQ;EACV;AACF;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,OAAO;EACT;AACF","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\nio-popup-footer {\n  --footer-height: calc(50px - var(--border-width-thin));\n  --tabs-height: 8px;\n  --panels-height: calc(var(--footer-height) - var(--tabs-height));\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  height: var(--footer-height);\n}\n\nio-popup-footer ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\nio-popup-footer a {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.4s ease-out;\n}\n\nio-popup-footer a:not(.icon) {\n  padding: 5px 10px;\n  border: 1px solid transparent;\n  border-radius: var(--border-radius-primary);\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\nio-popup-footer a:not(.icon):hover,\nio-popup-footer a:not(.icon):focus {\n  border-color: var(--border-color-ternary);\n  background-color: var(--background-color-ternary);\n}\n\nio-popup-footer a.icon {\n  margin: 0 var(--margin-secondary);\n  width: var(--font-size-primary);\n  opacity: 0.5;\n}\n\nio-popup-footer a.icon:hover,\nio-popup-footer a.icon:focus {\n  opacity: 1;\n}\n\nio-popup-footer a.icon img {\n  pointer-events: none;\n}\n\nio-popup-footer .panels {\n  overflow: hidden;\n  position: relative;\n  height: var(--panels-height);\n}\n\nio-popup-footer .panels > li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  height: var(--panels-height);\n  padding: 0 var(--padding-primary);\n  opacity: 0;\n  transform: translateY(calc(-1 * var(--panels-height)));\n  transition: transform 0.3s ease;\n}\n\nio-popup-footer .panels > [aria-hidden=\"false\"] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\nio-popup-footer [role=\"tabpanel\"] > .message {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\nio-popup-footer [role=\"tabpanel\"] > .buttons {\n  display: flex;\n}\n\nio-popup-footer .tabs {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n\nio-popup-footer .tabs > li {\n  flex: 1;\n  padding: 0 1px;\n}\n\nio-popup-footer .tabs button {\n  position: relative;\n  height: var(--tabs-height);\n  width: 100%;\n  padding: 0;\n}\n\n/*\n * ::before styles the width-fixed visible area of the tab\n * ::after styles the progress bar area of the tab\n */\nio-popup-footer .tabs button::before,\nio-popup-footer .tabs button::after {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 50%;\n  background-color: var(--color-info);\n  opacity: 0.3;\n  content: \"\";\n  transition: all 0.3s ease-in;\n}\n\nio-popup-footer .tabs button[aria-selected=\"true\"]::before,\nio-popup-footer .tabs button:hover::before,\nio-popup-footer .tabs button:focus::before,\nio-popup-footer .tabs button[aria-selected=\"true\"]::after {\n  height: 100%;\n}\n\nio-popup-footer .tabs:not(.animated) button[aria-selected=\"true\"]::before {\n  opacity: 0.5;\n}\n\nio-popup-footer .tabs button::after {\n  right: 100%;\n  height: 50%;\n  opacity: 0.5;\n  --animation-name: progress-bar;\n}\n\nhtml[dir=\"rtl\"] io-popup-footer .tabs button::after {\n  right: 0%;\n  left: 100%;\n  --animation-name: progress-bar-rtl;\n}\n\nio-popup-footer .tabs.animated button[aria-selected=\"true\"]::after {\n  animation: var(--animation-name) var(--animation-duration) linear 0s;\n}\n\n@keyframes progress-bar {\n  from {\n    right: 100%;\n  }\n\n  to {\n    right: 0;\n  }\n}\n\n@keyframes progress-bar-rtl {\n  from {\n    left: 100%;\n  }\n\n  to {\n    left: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6054);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_popup_ui_popup_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8104);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4341);
// Imports





var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_popup_ui_popup_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

/*
 * Absolute positioning of child elements behaves as if parent is
 * relatively positioned due to the following CSS properties. Therefore we
 * need to reset their values.
 */
#page-info > div {
  transform: initial;
  will-change: initial;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(0, 0, 0, 0.13)
  );
}

#block-element,
#block-element:hover,
#block-element:focus {
  position: relative;
  z-index: 1;
  border: 3px solid var(--color-brand-primary);
  cursor: default;
}
`, "",{"version":3,"sources":["webpack://./src/popup-dummy/ui/popup-dummy.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAMF;;;;EAIE;AACF;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ;;;;GAIC;AACH;;AAEA;;;EAGE,kBAAkB;EAClB,UAAU;EACV,4CAA4C;EAC5C,eAAe;AACjB","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n@import \"../../theme/ui/font.css\";\n@import \"../../popup/ui/popup.css\";\n@import \"../../theme/ui/light.css\";\n\n/*\n * Absolute positioning of child elements behaves as if parent is\n * relatively positioned due to the following CSS properties. Therefore we\n * need to reset their values.\n */\n#page-info > div {\n  transform: initial;\n  will-change: initial;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(\n    to bottom,\n    transparent,\n    rgba(0, 0, 0, 0.13)\n  );\n}\n\n#block-element,\n#block-element:hover,\n#block-element:focus {\n  position: relative;\n  z-index: 1;\n  border: 3px solid var(--color-brand-primary);\n  cursor: default;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8104:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6054);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4341);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_circle_toggle_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4270);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popup_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1941);
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_font_css__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_theme_ui_light_css__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_circle_toggle_css__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_components_ui_io_popup_footer_css__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

:root {
  --border-width-thick-doubled: calc(2 * var(--border-width-thick));
  --border-width-thin-negative: calc(-1 * var(--border-width-thin));
  --margin-primary-half: calc(var(--margin-primary) / 2);
  --block-spacing: calc(var(--padding-primary) + var(--padding-secondary));
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

html {
  background-color: var(--background-color-primary);
}

html,
body,
h2 {
  margin: 0;
}

/*
  We use CSS to hide elements depending on the context:
    disabled: Blocking is not active on page
    ignore: Extension cannot be active on page
    nohtml: Content scripts are not active on page
    private: Total blocked counter is not being updated
 */
/*
  explicitly disable Issue Reporter in EdgeHTML due bug
  https://issues.adblockplus.org/ticket/7175
 */
html[data-platform="edgehtml"] #issue-reporter,
/* Block element feature can only be used for HTML documents */
body.nohtml #block-element,
/* Block element feature can only be used if ad blocking is enabled */
body.disabled #block-element,
/* Page-specific blocked counter only updates if ad blocking is enabled */
body.disabled #stats-page,
/* Ad blocking can only be en-/disabled for HTTP(S) pages */
body.ignore #page-status,
/* Page-specific blocked counter only updates for HTTP(S) pages */
body.ignore #stats-page,
/* Page actions can only be used for HTTP(S) pages */
body.ignore #default-container .options,
/* Issue reporter button is only shown for regular tabs */
body.private #issue-reporter,
/* The separator between page and total count is only shown for regular tabs */
body.private #stats-page::after,
/* Total blocked counter only updates for regular tabs */
body.private #stats-total,
/* Blocked counters only update for regular tabs if ad blocking is enabled */
body.private.disabled #page-info,
/* Blocked counters only update for regular tabs containing HTTP(S) pages */
body.private.ignore #page-info,
/* The idle status section is displayed on all non-HTTP(S) pages  */
body:not(.ignore) #idle-status {
  display: none;
}

html,
body {
  padding: 0;
}

body {
  overflow-x: hidden;
  width: 340px;
  color: var(--color-primary);
  font-size: var(--font-size-primary);
}

header,
#notification,
main > * {
  padding: var(--padding-primary);
}

header,
#page-status > div:not(.refresh-info) {
  display: flex;
  flex-direction: row;
}

header {
  align-items: center;
  justify-content: space-between;
}

.popup-header {
  min-height: 24px;
  padding: calc(var(--block-spacing) / 2) var(--padding-primary)
    var(--padding-primary);
}

button {
  border: 0;
  color: var(--color-link);
  background: none;
  cursor: pointer;
}

button[disabled] {
  cursor: default;
}

a:focus,
button:focus {
  outline: var(--primary-outline);
  animation: 0.3s ease-out 0s 1 outline-in;
}

#page-info .options button,
io-popup-footer a:not(.icon) {
  outline: none;
  animation: none;
}

@keyframes outline-in {
  from {
    outline-color: transparent;
  }
}

#notification {
  padding-top: 0;
}

a.premium {
  display: flex;
  padding: 0 4px;
  border: 1px solid;

  border-radius: var(--border-radius);

  font-size: var(--font-size-primary);
  font-weight: 700;
  align-items: center;

  align-self: stretch;
  --button-primary-color: var(--color-premium);
}

a.premium:not(:link) {
  cursor: default;
}

a.premium:hover,
a.premium:focus {
  --button-primary-color: var(--color-premium-hover);
}

html:not([dir="rtl"]) a.premium {
  margin-right: 1rem;
  margin-left: auto;
}

html[dir="rtl"] a.premium {
  margin-right: auto;
  margin-left: 1rem;
}

a.premium-label::before,
#page-premium-controls .premium-block-title::before {
  --button-primary-color: var(--color-premium);

  display: inline-block;
  width: 15px;
  height: 10px;
  margin-right: 3px;
  background-color: var(--button-primary-color);
  background-image: none;
  content: "";
  transform: none;
  -webkit-mask-image: url(/skin/icons/premium-crown.svg);
  mask-image: url(/skin/icons/premium-crown.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}

body.premium a.premium.upgrade {
  display: none;
}

#page-premium-controls {
  display: none;
}

body.premium #page-premium-cta,
body.ignore #page-premium-cta,
body.ignore.premium #page-premium-controls {
  display: none;
}

body.premium #page-premium-controls {
  display: block;
}

a.premium.upgrade {
  border-color: var(--button-primary-color);
  color: var(--background-color-primary);
  background-color: var(--button-primary-color);
}

body:not(.premium) a.premium.manage {
  display: none;
}

a.premium.manage {
  display: flex;
  color: var(--button-primary-color);
  align-items: center;
}

#notification .content::before {
  --border-top-color: var(--color-default);
  display: block;
  overflow: hidden;
  height: var(--border-width-thick-doubled);
  margin-right: var(--border-width-thin-negative);
  margin-left: var(--border-width-thin-negative);
  border: 0;
  border-top: var(--border-width-thick) var(--border-style-primary)
    var(--border-top-color);
  border-radius: var(--border-radius-primary);
  content: "";
}

#notification .content.critical::before {
  --border-top-color: var(--color-critical);
}

#notification .content.information::before {
  --border-top-color: var(--color-info);
}

#notification .content,
main .card {
  border-width: var(--border-width-thin);
  border-style: var(--border-style-primary);
  border-color: var(--border-color-primary);
  border-radius: var(--border-radius-primary);
}

#notification .content {
  border-top: 0;
}

#notification .content > div {
  padding: var(--padding-primary);
  padding-top: var(--padding-secondary);
}

#notification .content h3[hidden] + p {
  margin-top: 0;
}

#notification .content h3 {
  margin: 0;
  color: var(--color-secondary);
  background-repeat: no-repeat;
  background-size: 32px;
  font-size: var(--font-size-primary);
}

#notification .content h3 > span {
  display: inline-flex;
  min-height: 32px;
  align-items: center;
}

html:not([dir="rtl"]) #notification .content h3 {
  margin-left: -6px;
  padding-left: 36px;
  background-position: left;
}

html[dir="rtl"] #notification .content h3 {
  margin-right: -6px;
  padding-right: 36px;
  background-position: right;
}

#notification .content.critical h3 {
  background-image: url(/skin/icons/critical.svg);
}

#notification .content.information h3 {
  background-image: url(/skin/icons/info.svg);
}

#notification .content hr {
  height: var(--border-width-thin);
  border: 0;
  background: var(--border-color-primary);
}

#notification .content button {
  display: block;
  padding-right: 0;
  padding-left: 0;
  font-size: var(--font-size-primary);
}

#notification .content button {
  margin-top: var(--margin-primary-half);
}

#options {
  width: var(--font-size-big);
  height: var(--font-size-big);
  border: 0;
  opacity: 0.5;
  background-image: url(/skin/icons/gear.svg?background#background);
  background-repeat: no-repeat;
  transition: opacity 0.1s ease-in;
  flex-shrink: 0;
}

#options:hover,
#options:focus {
  opacity: 1;
}

#idle-status {
  display: flex;
  flex-direction: column;
  width: 220px;
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

#idle-status h2 {
  margin: 0 0 var(--margin-primary) 0;
  color: var(--color-secondary);
  font-size: var(--font-size-heavy);
  line-height: 1.3em;
  letter-spacing: normal;
  text-transform: none;
}

#idle-status img {
  margin: 10px 20px;
}

#page-status {
  height: var(--page-status-height, auto);
  padding-top: 0;
  padding-bottom: 0;
  transition: height 0.3s ease-out;
  will-change: height;
}

h2 {
  font-size: var(--font-size-small);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

#page-status h2 {
  margin-bottom: var(--block-spacing);
}

#page-status h3 {
  margin: 0;
  color: var(--color-secondary);
  font-size: 14px;
  font-weight: 600;
}

.status_block {
  --toggle-width: 46px;
}

.status_block io-circle-toggle {
  width: var(--toggle-width);
}

.status_block .details {
  width: calc(100% - var(--toggle-width));
  flex-grow: 1;
}

#blocking-domain,
#blocking-page {
  overflow: hidden;
  margin: 0;
  margin-bottom: var(--block-spacing);
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
}

a,
a:hover,
a:visited,
a:active {
  color: var(--color-link);
  text-decoration: none;
}

body:not(.refresh) #page-refresh {
  display: none;
}

#page-refresh .card span {
  display: block;
  padding: 0 var(--padding-primary);
}

#page-refresh .card strong {
  display: block;
  margin-bottom: var(--margin-primary-half);
}

#page-refresh .card button {
  width: 100%;
  margin-top: var(--margin-primary);
  padding: var(--padding-secondary);
  border: 1px solid #0497e1;
  border-radius: 4px;
  background-color: #edf9ff;
  font-weight: 600;
  text-align: center;
}

#page-info,
#page-refresh {
  padding: calc(var(--block-spacing) / 2);
  border-top: var(--border-width-thin) var(--border-style-primary)
    var(--border-color-primary);
  background-color: var(--background-color-secondary);
}

#page-info #block-element-container,
#page-info.blocking #default-container {
  display: none;
}

#page-info.blocking #block-element-container,
#page-info #default-container {
  display: block;
}

.refresh #page-info {
  display: none;
}

.refresh #page-refresh {
  text-align: center;
}

.refresh #page-refresh .card {
  animation: refresh-scale 0.2s ease-in-out;
}

@keyframes refresh-scale {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

main .card {
  padding: var(--padding-primary);
  background-color: var(--background-color-primary);
}

main .card strong {
  color: var(--color-secondary);
}

main .options {
  display: flex;
  padding-top: calc(var(--block-spacing) / 2);
  gap: var(--padding-primary);
}

main .options button {
  width: 100%;
  height: 40px;
  border-radius: var(--border-radius-primary);
  font-size: var(--font-size-small);
  text-align: center;
  transition: border 0.3s ease-in;
}

#block-element {
  border: 1px solid var(--border-color-ternary);
  color: var(--color-link);
  background-color: var(--background-color-ternary);
}

body:not(.private) #block-element {
  margin-bottom: var(--margin-secondary);
}

#block-element:hover,
#block-element:focus {
  border-color: var(--color-link);
}

#block-element > * {
  display: block;
}

#block-element > strong {
  display: flex;
  font-size: var(--font-size-small);
  justify-content: center;
}

#block-element strong::before {
  display: inline-block;
  width: var(--font-size-medium);
  height: var(--font-size-medium);
  margin: 0 4px;
  background-image: url(/skin/icons/block-element.svg);
  background-repeat: no-repeat;
  background-size: var(--font-size-medium);
  content: "";
}

html[dir="rtl"] #block-element strong::before {
  transform: scaleX(-1);
}

#block-element-info strong::before {
  display: block;
  height: 32px;
  background-image: url(/skin/icons/block-element.svg);
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 28px;
  content: "";
  filter: grayscale(1);
}

html[dir="rtl"] #block-element-info strong::before {
  transform: scaleX(-1);
}

#issue-reporter,
#block-element-cancel {
  border: 1px solid var(--border-color-primary);
  color: var(--color-primary);
}

#issue-reporter:hover,
#issue-reporter:focus,
#block-element-cancel:hover,
#block-element-cancel:focus {
  border-color: var(--border-color-outline);
}

#issue-reporter > span {
  background-image: url(/skin/icons/report-issue.svg);
}

#block-element-cancel > span {
  background-image: url(/skin/icons/cancel.svg);
}

#issue-reporter > span,
#block-element-cancel > span {
  background-size: var(--font-size-small);
}

#page-info .background-icon {
  background-repeat: no-repeat;
  line-height: var(--font-size-big);
}

html:not([dir="rtl"]) #page-info .background-icon {
  padding-left: var(--font-size-big);
  background-position: left;
}

html[dir="rtl"] #page-info .background-icon {
  padding-right: var(--font-size-big);
  background-position: right;
}

html:not([dir="rtl"]) #block-element .background-icon {
  margin-left: calc(var(--font-size-big) * -1);
}

html[dir="rtl"] #block-element .background-icon {
  margin-right: calc(var(--font-size-big) * -1);
}

main .options button[disabled] {
  opacity: 0.5;
}

#page-refresh,
footer {
  border-top: var(--border-width-thin) var(--border-style-primary)
    var(--border-color-primary);
}

#block-element-info {
  text-align: center;
}

#block-element-info > strong {
  display: block;
  margin-bottom: var(--margin-primary-half);
}

#counter-panel {
  margin-top: var(--margin-secondary);
  padding: calc(var(--block-spacing) / 2) var(--padding-primary);
}

.page-info-header {
  color: var(--color-primary);
}

#counter-panel .stats {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#stats-page {
  position: relative;
}

#stats-page::after {
  position: absolute;
  top: calc(50% - 10px);
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: var(--border-color-primary);
  content: "";
}

html:not([dir="rtl"]) #stats-page::after {
  right: 0;
}

html[dir="rtl"] #stats-page::after {
  left: 0;
}

#stats-page,
#stats-total {
  text-align: center;
  flex: 1;
}

#stats-page strong,
#stats-total strong {
  display: block;
  font-size: 1.4em;
}

#page-premium-cta,
#page-premium-controls {
  padding-top: 0;
}

.ignore #page-premium {
  display: none;
}

.premium-block {
  display: block;
  width: 100%;
  margin-bottom: var(--block-spacing);
  padding: 0 0 0 8px;
  border-left: var(--background-color-secondary) 3px solid;
  font-family: "Source Sans Pro", Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}

body.premium .premium-block {
  display: flex;
  cursor: default;
  align-items: center;
  justify-content: space-between;
}

.premium-block:last-child {
  margin-bottom: 0;
}

.premium-block-title {
  display: block;
  color: var(--color-secondary);
  font-weight: 600;
}

.premium-block-title::before {
  display: inline-block;
  width: 12px;
  height: 17px;
  margin-right: 4px;
  background-color: transparent;
  background-image: url("/skin/icons/premium-lock.svg");
  background-position: center;
  content: "";
  transform: scale(0.9);
  transform-origin: bottom;
}

.premium-block-subtitle {
  display: block;
  color: var(--color-primary);
  font-size: 14px;
  font-weight: 400;
}

.premium-block io-circle-toggle {
  min-width: 30px;
  max-width: 30px;
}

.premium-block io-circle-toggle[checked] .outer-circle {
  opacity: 0.7;
  fill: var(--color-premium);
}

.premium-block io-circle-toggle .on {
  opacity: 0.9;
  fill: var(--color-premium);
}

.cookie-consent-modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.2s ease-in;
}

.cookie-consent-modal-container.visible {
  display: block;
}

.cookie-consent-modal {
  position: absolute;
  top: 50%;
  right: calc(var(--block-spacing) / 2);
  left: calc(var(--block-spacing) / 2);
  padding: calc(var(--block-spacing) / 2);
  border-radius: var(--border-radius);
  background: #fff;
  transform: translateY(-50%);
}

.cookie-consent-modal-title {
  margin: 0 0 calc(var(--block-spacing) / 2) 0;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.cookie-consent-modal-text {
  margin: 0 0 calc(var(--block-spacing) / 2) 0;
}

.cookie-consent-modal-button {
  display: block;
  width: 100%;
  height: 34px;
  margin: 0 0 calc(var(--block-spacing) / 2) 0;
  padding: 0;
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  color: var(--color-primary);
  font-weight: 700;
  line-height: 34px;
  text-align: center;
}

.cookie-consent-modal-button:last-child {
  margin-bottom: 0;
}

.cookie-consent-modal-button.premium {
  border: 0;
  color: #000;
  background-color: var(--color-premium);
}
`, "",{"version":3,"sources":["webpack://./src/popup/ui/popup.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAOF;EACE,iEAAiE;EACjE,iEAAiE;EACjE,sDAAsD;EACtD,wEAAwE;AAC1E;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,iDAAiD;AACnD;;AAEA;;;EAGE,SAAS;AACX;;AAEA;;;;;;EAME;AACF;;;EAGE;AACF;;;;;;;;;;;;;;;;;;;;;;;;;EAyBE,aAAa;AACf;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;EAC3B,mCAAmC;AACrC;;AAEA;;;EAGE,+BAA+B;AACjC;;AAEA;;EAEE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB;0BACwB;AAC1B;;AAEA;EACE,SAAS;EACT,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,+BAA+B;EAC/B,wCAAwC;AAC1C;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,iBAAiB;;EAEjB,mCAAmC;;EAEnC,mCAAmC;EACnC,gBAAgB;EAChB,mBAAmB;;EAEnB,mBAAmB;EACnB,4CAA4C;AAC9C;;AAEA;EACE,eAAe;AACjB;;AAEA;;EAEE,kDAAkD;AACpD;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,4CAA4C;;EAE5C,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,6CAA6C;EAC7C,sBAAsB;EACtB,WAAW;EACX,eAAe;EACf,sDAAsD;EACtD,8CAA8C;EAC9C,8BAA8B;EAC9B,sBAAsB;EACtB,0BAA0B;EAC1B,kBAAkB;EAClB,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yCAAyC;EACzC,sCAAsC;EACtC,6CAA6C;AAC/C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,mBAAmB;AACrB;;AAEA;EACE,wCAAwC;EACxC,cAAc;EACd,gBAAgB;EAChB,yCAAyC;EACzC,+CAA+C;EAC/C,8CAA8C;EAC9C,SAAS;EACT;2BACyB;EACzB,2CAA2C;EAC3C,WAAW;AACb;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,qCAAqC;AACvC;;AAEA;;EAEE,sCAAsC;EACtC,yCAAyC;EACzC,yCAAyC;EACzC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,+BAA+B;EAC/B,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,SAAS;EACT,6BAA6B;EAC7B,4BAA4B;EAC5B,qBAAqB;EACrB,mCAAmC;AACrC;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,0BAA0B;AAC5B;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,gCAAgC;EAChC,SAAS;EACT,uCAAuC;AACzC;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,mCAAmC;AACrC;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;EAC3B,4BAA4B;EAC5B,SAAS;EACT,YAAY;EACZ,iEAAiE;EACjE,4BAA4B;EAC5B,gCAAgC;EAChC,cAAc;AAChB;;AAEA;;EAEE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,cAAc;EACd,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,mCAAmC;EACnC,6BAA6B;EAC7B,iCAAiC;EACjC,kBAAkB;EAClB,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,uCAAuC;EACvC,cAAc;EACd,iBAAiB;EACjB,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,iCAAiC;EACjC,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,SAAS;EACT,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uCAAuC;EACvC,YAAY;AACd;;AAEA;;EAEE,gBAAgB;EAChB,SAAS;EACT,mCAAmC;EACnC,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;EAIE,wBAAwB;EACxB,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,iCAAiC;AACnC;;AAEA;EACE,cAAc;EACd,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,iCAAiC;EACjC,iCAAiC;EACjC,yBAAyB;EACzB,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;;EAEE,uCAAuC;EACvC;+BAC6B;EAC7B,mDAAmD;AACrD;;AAEA;;EAEE,aAAa;AACf;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,+BAA+B;EAC/B,iDAAiD;AACnD;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,2CAA2C;EAC3C,iCAAiC;EACjC,kBAAkB;EAClB,+BAA+B;AACjC;;AAEA;EACE,6CAA6C;EAC7C,wBAAwB;EACxB,iDAAiD;AACnD;;AAEA;EACE,sCAAsC;AACxC;;AAEA;;EAEE,+BAA+B;AACjC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,8BAA8B;EAC9B,+BAA+B;EAC/B,aAAa;EACb,oDAAoD;EACpD,4BAA4B;EAC5B,wCAAwC;EACxC,WAAW;AACb;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,oDAAoD;EACpD,4BAA4B;EAC5B,+BAA+B;EAC/B,qBAAqB;EACrB,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;;EAEE,6CAA6C;EAC7C,2BAA2B;AAC7B;;AAEA;;;;EAIE,yCAAyC;AAC3C;;AAEA;EACE,mDAAmD;AACrD;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;;EAEE,uCAAuC;AACzC;;AAEA;EACE,4BAA4B;EAC5B,iCAAiC;AACnC;;AAEA;EACE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,0BAA0B;AAC5B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE;+BAC6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yCAAyC;AAC3C;;AAEA;EACE,mCAAmC;EACnC,8DAA8D;AAChE;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,MAAM;EACN,SAAS;EACT,UAAU;EACV,6CAA6C;EAC7C,WAAW;AACb;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,OAAO;AACT;;AAEA;;EAEE,kBAAkB;EAClB,OAAO;AACT;;AAEA;;EAEE,cAAc;EACd,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mCAAmC;EACnC,kBAAkB;EAClB,wDAAwD;EACxD,iDAAiD;EACjD,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,6BAA6B;EAC7B,qDAAqD;EACrD,2BAA2B;EAC3B,WAAW;EACX,qBAAqB;EACrB,wBAAwB;AAC1B;;AAEA;EACE,cAAc;EACd,2BAA2B;EAC3B,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,0BAA0B;AAC5B;;AAEA;EACE,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;EACP,aAAa;EACb,oCAAoC;EACpC,gCAAgC;AAClC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,qCAAqC;EACrC,oCAAoC;EACpC,uCAAuC;EACvC,mCAAmC;EACnC,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,4CAA4C;EAC5C,eAAe;EACf,gBAAgB;EAChB,yBAAyB;AAC3B;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,4CAA4C;EAC5C,UAAU;EACV,sCAAsC;EACtC,mCAAmC;EACnC,2BAA2B;EAC3B,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,SAAS;EACT,WAAW;EACX,sCAAsC;AACxC","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n@import \"../../theme/ui/font.css\";\n@import \"../../theme/ui/light.css\";\n@import \"../../components/ui/io-circle-toggle.css\";\n@import \"../../components/ui/io-popup-footer.css\";\n\n:root {\n  --border-width-thick-doubled: calc(2 * var(--border-width-thick));\n  --border-width-thin-negative: calc(-1 * var(--border-width-thin));\n  --margin-primary-half: calc(var(--margin-primary) / 2);\n  --block-spacing: calc(var(--padding-primary) + var(--padding-secondary));\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nhtml {\n  background-color: var(--background-color-primary);\n}\n\nhtml,\nbody,\nh2 {\n  margin: 0;\n}\n\n/*\n  We use CSS to hide elements depending on the context:\n    disabled: Blocking is not active on page\n    ignore: Extension cannot be active on page\n    nohtml: Content scripts are not active on page\n    private: Total blocked counter is not being updated\n */\n/*\n  explicitly disable Issue Reporter in EdgeHTML due bug\n  https://issues.adblockplus.org/ticket/7175\n */\nhtml[data-platform=\"edgehtml\"] #issue-reporter,\n/* Block element feature can only be used for HTML documents */\nbody.nohtml #block-element,\n/* Block element feature can only be used if ad blocking is enabled */\nbody.disabled #block-element,\n/* Page-specific blocked counter only updates if ad blocking is enabled */\nbody.disabled #stats-page,\n/* Ad blocking can only be en-/disabled for HTTP(S) pages */\nbody.ignore #page-status,\n/* Page-specific blocked counter only updates for HTTP(S) pages */\nbody.ignore #stats-page,\n/* Page actions can only be used for HTTP(S) pages */\nbody.ignore #default-container .options,\n/* Issue reporter button is only shown for regular tabs */\nbody.private #issue-reporter,\n/* The separator between page and total count is only shown for regular tabs */\nbody.private #stats-page::after,\n/* Total blocked counter only updates for regular tabs */\nbody.private #stats-total,\n/* Blocked counters only update for regular tabs if ad blocking is enabled */\nbody.private.disabled #page-info,\n/* Blocked counters only update for regular tabs containing HTTP(S) pages */\nbody.private.ignore #page-info,\n/* The idle status section is displayed on all non-HTTP(S) pages  */\nbody:not(.ignore) #idle-status {\n  display: none;\n}\n\nhtml,\nbody {\n  padding: 0;\n}\n\nbody {\n  overflow-x: hidden;\n  width: 340px;\n  color: var(--color-primary);\n  font-size: var(--font-size-primary);\n}\n\nheader,\n#notification,\nmain > * {\n  padding: var(--padding-primary);\n}\n\nheader,\n#page-status > div:not(.refresh-info) {\n  display: flex;\n  flex-direction: row;\n}\n\nheader {\n  align-items: center;\n  justify-content: space-between;\n}\n\n.popup-header {\n  min-height: 24px;\n  padding: calc(var(--block-spacing) / 2) var(--padding-primary)\n    var(--padding-primary);\n}\n\nbutton {\n  border: 0;\n  color: var(--color-link);\n  background: none;\n  cursor: pointer;\n}\n\nbutton[disabled] {\n  cursor: default;\n}\n\na:focus,\nbutton:focus {\n  outline: var(--primary-outline);\n  animation: 0.3s ease-out 0s 1 outline-in;\n}\n\n#page-info .options button,\nio-popup-footer a:not(.icon) {\n  outline: none;\n  animation: none;\n}\n\n@keyframes outline-in {\n  from {\n    outline-color: transparent;\n  }\n}\n\n#notification {\n  padding-top: 0;\n}\n\na.premium {\n  display: flex;\n  padding: 0 4px;\n  border: 1px solid;\n\n  border-radius: var(--border-radius);\n\n  font-size: var(--font-size-primary);\n  font-weight: 700;\n  align-items: center;\n\n  align-self: stretch;\n  --button-primary-color: var(--color-premium);\n}\n\na.premium:not(:link) {\n  cursor: default;\n}\n\na.premium:hover,\na.premium:focus {\n  --button-primary-color: var(--color-premium-hover);\n}\n\nhtml:not([dir=\"rtl\"]) a.premium {\n  margin-right: 1rem;\n  margin-left: auto;\n}\n\nhtml[dir=\"rtl\"] a.premium {\n  margin-right: auto;\n  margin-left: 1rem;\n}\n\na.premium-label::before,\n#page-premium-controls .premium-block-title::before {\n  --button-primary-color: var(--color-premium);\n\n  display: inline-block;\n  width: 15px;\n  height: 10px;\n  margin-right: 3px;\n  background-color: var(--button-primary-color);\n  background-image: none;\n  content: \"\";\n  transform: none;\n  -webkit-mask-image: url(/skin/icons/premium-crown.svg);\n  mask-image: url(/skin/icons/premium-crown.svg);\n  -webkit-mask-repeat: no-repeat;\n  mask-repeat: no-repeat;\n  -webkit-mask-size: contain;\n  mask-size: contain;\n  -webkit-mask-position: center;\n  mask-position: center;\n}\n\nbody.premium a.premium.upgrade {\n  display: none;\n}\n\n#page-premium-controls {\n  display: none;\n}\n\nbody.premium #page-premium-cta,\nbody.ignore #page-premium-cta,\nbody.ignore.premium #page-premium-controls {\n  display: none;\n}\n\nbody.premium #page-premium-controls {\n  display: block;\n}\n\na.premium.upgrade {\n  border-color: var(--button-primary-color);\n  color: var(--background-color-primary);\n  background-color: var(--button-primary-color);\n}\n\nbody:not(.premium) a.premium.manage {\n  display: none;\n}\n\na.premium.manage {\n  display: flex;\n  color: var(--button-primary-color);\n  align-items: center;\n}\n\n#notification .content::before {\n  --border-top-color: var(--color-default);\n  display: block;\n  overflow: hidden;\n  height: var(--border-width-thick-doubled);\n  margin-right: var(--border-width-thin-negative);\n  margin-left: var(--border-width-thin-negative);\n  border: 0;\n  border-top: var(--border-width-thick) var(--border-style-primary)\n    var(--border-top-color);\n  border-radius: var(--border-radius-primary);\n  content: \"\";\n}\n\n#notification .content.critical::before {\n  --border-top-color: var(--color-critical);\n}\n\n#notification .content.information::before {\n  --border-top-color: var(--color-info);\n}\n\n#notification .content,\nmain .card {\n  border-width: var(--border-width-thin);\n  border-style: var(--border-style-primary);\n  border-color: var(--border-color-primary);\n  border-radius: var(--border-radius-primary);\n}\n\n#notification .content {\n  border-top: 0;\n}\n\n#notification .content > div {\n  padding: var(--padding-primary);\n  padding-top: var(--padding-secondary);\n}\n\n#notification .content h3[hidden] + p {\n  margin-top: 0;\n}\n\n#notification .content h3 {\n  margin: 0;\n  color: var(--color-secondary);\n  background-repeat: no-repeat;\n  background-size: 32px;\n  font-size: var(--font-size-primary);\n}\n\n#notification .content h3 > span {\n  display: inline-flex;\n  min-height: 32px;\n  align-items: center;\n}\n\nhtml:not([dir=\"rtl\"]) #notification .content h3 {\n  margin-left: -6px;\n  padding-left: 36px;\n  background-position: left;\n}\n\nhtml[dir=\"rtl\"] #notification .content h3 {\n  margin-right: -6px;\n  padding-right: 36px;\n  background-position: right;\n}\n\n#notification .content.critical h3 {\n  background-image: url(/skin/icons/critical.svg);\n}\n\n#notification .content.information h3 {\n  background-image: url(/skin/icons/info.svg);\n}\n\n#notification .content hr {\n  height: var(--border-width-thin);\n  border: 0;\n  background: var(--border-color-primary);\n}\n\n#notification .content button {\n  display: block;\n  padding-right: 0;\n  padding-left: 0;\n  font-size: var(--font-size-primary);\n}\n\n#notification .content button {\n  margin-top: var(--margin-primary-half);\n}\n\n#options {\n  width: var(--font-size-big);\n  height: var(--font-size-big);\n  border: 0;\n  opacity: 0.5;\n  background-image: url(/skin/icons/gear.svg?background#background);\n  background-repeat: no-repeat;\n  transition: opacity 0.1s ease-in;\n  flex-shrink: 0;\n}\n\n#options:hover,\n#options:focus {\n  opacity: 1;\n}\n\n#idle-status {\n  display: flex;\n  flex-direction: column;\n  width: 220px;\n  margin: 0 auto;\n  padding: 0;\n  text-align: center;\n}\n\n#idle-status h2 {\n  margin: 0 0 var(--margin-primary) 0;\n  color: var(--color-secondary);\n  font-size: var(--font-size-heavy);\n  line-height: 1.3em;\n  letter-spacing: normal;\n  text-transform: none;\n}\n\n#idle-status img {\n  margin: 10px 20px;\n}\n\n#page-status {\n  height: var(--page-status-height, auto);\n  padding-top: 0;\n  padding-bottom: 0;\n  transition: height 0.3s ease-out;\n  will-change: height;\n}\n\nh2 {\n  font-size: var(--font-size-small);\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n#page-status h2 {\n  margin-bottom: var(--block-spacing);\n}\n\n#page-status h3 {\n  margin: 0;\n  color: var(--color-secondary);\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.status_block {\n  --toggle-width: 46px;\n}\n\n.status_block io-circle-toggle {\n  width: var(--toggle-width);\n}\n\n.status_block .details {\n  width: calc(100% - var(--toggle-width));\n  flex-grow: 1;\n}\n\n#blocking-domain,\n#blocking-page {\n  overflow: hidden;\n  margin: 0;\n  margin-bottom: var(--block-spacing);\n  font-size: 14px;\n  font-weight: 400;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\na,\na:hover,\na:visited,\na:active {\n  color: var(--color-link);\n  text-decoration: none;\n}\n\nbody:not(.refresh) #page-refresh {\n  display: none;\n}\n\n#page-refresh .card span {\n  display: block;\n  padding: 0 var(--padding-primary);\n}\n\n#page-refresh .card strong {\n  display: block;\n  margin-bottom: var(--margin-primary-half);\n}\n\n#page-refresh .card button {\n  width: 100%;\n  margin-top: var(--margin-primary);\n  padding: var(--padding-secondary);\n  border: 1px solid #0497e1;\n  border-radius: 4px;\n  background-color: #edf9ff;\n  font-weight: 600;\n  text-align: center;\n}\n\n#page-info,\n#page-refresh {\n  padding: calc(var(--block-spacing) / 2);\n  border-top: var(--border-width-thin) var(--border-style-primary)\n    var(--border-color-primary);\n  background-color: var(--background-color-secondary);\n}\n\n#page-info #block-element-container,\n#page-info.blocking #default-container {\n  display: none;\n}\n\n#page-info.blocking #block-element-container,\n#page-info #default-container {\n  display: block;\n}\n\n.refresh #page-info {\n  display: none;\n}\n\n.refresh #page-refresh {\n  text-align: center;\n}\n\n.refresh #page-refresh .card {\n  animation: refresh-scale 0.2s ease-in-out;\n}\n\n@keyframes refresh-scale {\n  0% {\n    transform: scale(1);\n  }\n\n  50% {\n    transform: scale(0.9);\n  }\n\n  100% {\n    transform: scale(1);\n  }\n}\n\nmain .card {\n  padding: var(--padding-primary);\n  background-color: var(--background-color-primary);\n}\n\nmain .card strong {\n  color: var(--color-secondary);\n}\n\nmain .options {\n  display: flex;\n  padding-top: calc(var(--block-spacing) / 2);\n  gap: var(--padding-primary);\n}\n\nmain .options button {\n  width: 100%;\n  height: 40px;\n  border-radius: var(--border-radius-primary);\n  font-size: var(--font-size-small);\n  text-align: center;\n  transition: border 0.3s ease-in;\n}\n\n#block-element {\n  border: 1px solid var(--border-color-ternary);\n  color: var(--color-link);\n  background-color: var(--background-color-ternary);\n}\n\nbody:not(.private) #block-element {\n  margin-bottom: var(--margin-secondary);\n}\n\n#block-element:hover,\n#block-element:focus {\n  border-color: var(--color-link);\n}\n\n#block-element > * {\n  display: block;\n}\n\n#block-element > strong {\n  display: flex;\n  font-size: var(--font-size-small);\n  justify-content: center;\n}\n\n#block-element strong::before {\n  display: inline-block;\n  width: var(--font-size-medium);\n  height: var(--font-size-medium);\n  margin: 0 4px;\n  background-image: url(/skin/icons/block-element.svg);\n  background-repeat: no-repeat;\n  background-size: var(--font-size-medium);\n  content: \"\";\n}\n\nhtml[dir=\"rtl\"] #block-element strong::before {\n  transform: scaleX(-1);\n}\n\n#block-element-info strong::before {\n  display: block;\n  height: 32px;\n  background-image: url(/skin/icons/block-element.svg);\n  background-repeat: no-repeat;\n  background-position: top center;\n  background-size: 28px;\n  content: \"\";\n  filter: grayscale(1);\n}\n\nhtml[dir=\"rtl\"] #block-element-info strong::before {\n  transform: scaleX(-1);\n}\n\n#issue-reporter,\n#block-element-cancel {\n  border: 1px solid var(--border-color-primary);\n  color: var(--color-primary);\n}\n\n#issue-reporter:hover,\n#issue-reporter:focus,\n#block-element-cancel:hover,\n#block-element-cancel:focus {\n  border-color: var(--border-color-outline);\n}\n\n#issue-reporter > span {\n  background-image: url(/skin/icons/report-issue.svg);\n}\n\n#block-element-cancel > span {\n  background-image: url(/skin/icons/cancel.svg);\n}\n\n#issue-reporter > span,\n#block-element-cancel > span {\n  background-size: var(--font-size-small);\n}\n\n#page-info .background-icon {\n  background-repeat: no-repeat;\n  line-height: var(--font-size-big);\n}\n\nhtml:not([dir=\"rtl\"]) #page-info .background-icon {\n  padding-left: var(--font-size-big);\n  background-position: left;\n}\n\nhtml[dir=\"rtl\"] #page-info .background-icon {\n  padding-right: var(--font-size-big);\n  background-position: right;\n}\n\nhtml:not([dir=\"rtl\"]) #block-element .background-icon {\n  margin-left: calc(var(--font-size-big) * -1);\n}\n\nhtml[dir=\"rtl\"] #block-element .background-icon {\n  margin-right: calc(var(--font-size-big) * -1);\n}\n\nmain .options button[disabled] {\n  opacity: 0.5;\n}\n\n#page-refresh,\nfooter {\n  border-top: var(--border-width-thin) var(--border-style-primary)\n    var(--border-color-primary);\n}\n\n#block-element-info {\n  text-align: center;\n}\n\n#block-element-info > strong {\n  display: block;\n  margin-bottom: var(--margin-primary-half);\n}\n\n#counter-panel {\n  margin-top: var(--margin-secondary);\n  padding: calc(var(--block-spacing) / 2) var(--padding-primary);\n}\n\n.page-info-header {\n  color: var(--color-primary);\n}\n\n#counter-panel .stats {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n#stats-page {\n  position: relative;\n}\n\n#stats-page::after {\n  position: absolute;\n  top: calc(50% - 10px);\n  top: 0;\n  bottom: 0;\n  width: 1px;\n  background-color: var(--border-color-primary);\n  content: \"\";\n}\n\nhtml:not([dir=\"rtl\"]) #stats-page::after {\n  right: 0;\n}\n\nhtml[dir=\"rtl\"] #stats-page::after {\n  left: 0;\n}\n\n#stats-page,\n#stats-total {\n  text-align: center;\n  flex: 1;\n}\n\n#stats-page strong,\n#stats-total strong {\n  display: block;\n  font-size: 1.4em;\n}\n\n#page-premium-cta,\n#page-premium-controls {\n  padding-top: 0;\n}\n\n.ignore #page-premium {\n  display: none;\n}\n\n.premium-block {\n  display: block;\n  width: 100%;\n  margin-bottom: var(--block-spacing);\n  padding: 0 0 0 8px;\n  border-left: var(--background-color-secondary) 3px solid;\n  font-family: \"Source Sans Pro\", Arial, sans-serif;\n  font-size: 14px;\n  text-align: left;\n  cursor: pointer;\n}\n\nbody.premium .premium-block {\n  display: flex;\n  cursor: default;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.premium-block:last-child {\n  margin-bottom: 0;\n}\n\n.premium-block-title {\n  display: block;\n  color: var(--color-secondary);\n  font-weight: 600;\n}\n\n.premium-block-title::before {\n  display: inline-block;\n  width: 12px;\n  height: 17px;\n  margin-right: 4px;\n  background-color: transparent;\n  background-image: url(\"/skin/icons/premium-lock.svg\");\n  background-position: center;\n  content: \"\";\n  transform: scale(0.9);\n  transform-origin: bottom;\n}\n\n.premium-block-subtitle {\n  display: block;\n  color: var(--color-primary);\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.premium-block io-circle-toggle {\n  min-width: 30px;\n  max-width: 30px;\n}\n\n.premium-block io-circle-toggle[checked] .outer-circle {\n  opacity: 0.7;\n  fill: var(--color-premium);\n}\n\n.premium-block io-circle-toggle .on {\n  opacity: 0.9;\n  fill: var(--color-premium);\n}\n\n.cookie-consent-modal-container {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: none;\n  background-color: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.2s ease-in;\n}\n\n.cookie-consent-modal-container.visible {\n  display: block;\n}\n\n.cookie-consent-modal {\n  position: absolute;\n  top: 50%;\n  right: calc(var(--block-spacing) / 2);\n  left: calc(var(--block-spacing) / 2);\n  padding: calc(var(--block-spacing) / 2);\n  border-radius: var(--border-radius);\n  background: #fff;\n  transform: translateY(-50%);\n}\n\n.cookie-consent-modal-title {\n  margin: 0 0 calc(var(--block-spacing) / 2) 0;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.cookie-consent-modal-text {\n  margin: 0 0 calc(var(--block-spacing) / 2) 0;\n}\n\n.cookie-consent-modal-button {\n  display: block;\n  width: 100%;\n  height: 34px;\n  margin: 0 0 calc(var(--block-spacing) / 2) 0;\n  padding: 0;\n  border: 1px solid var(--color-primary);\n  border-radius: var(--border-radius);\n  color: var(--color-primary);\n  font-weight: 700;\n  line-height: 34px;\n  text-align: center;\n}\n\n.cookie-consent-modal-button:last-child {\n  margin-bottom: 0;\n}\n\n.cookie-consent-modal-button.premium {\n  border: 0;\n  color: #000;\n  background-color: var(--color-premium);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6054:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 300;
  src:
    local("Source Sans Pro Light"),
    local("SourceSansPro-Light"),
    url(/skin/fonts/source-sans-pro-300.woff2) format("woff2");
}

@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  src:
    local("Source Sans Pro Regular"),
    local("SourceSansPro-Regular"),
    url(/skin/fonts/source-sans-pro-400.woff2) format("woff2");
}

@font-face {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  src:
    local("Source Sans Pro Bold"),
    local("SourceSansPro-Bold"),
    url(/skin/fonts/source-sans-pro-700.woff2) format("woff2");
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: inherit;
}
`, "",{"version":3,"sources":["webpack://./src/theme/ui/font.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAEF;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB;;;8DAG4D;AAC9D;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB;;;8DAG4D;AAC9D;;AAEA;EACE,8BAA8B;EAC9B,kBAAkB;EAClB,gBAAgB;EAChB;;;8DAG4D;AAC9D;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n@font-face {\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 300;\n  src:\n    local(\"Source Sans Pro Light\"),\n    local(\"SourceSansPro-Light\"),\n    url(/skin/fonts/source-sans-pro-300.woff2) format(\"woff2\");\n}\n\n@font-face {\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 400;\n  src:\n    local(\"Source Sans Pro Regular\"),\n    local(\"SourceSansPro-Regular\"),\n    url(/skin/fonts/source-sans-pro-400.woff2) format(\"woff2\");\n}\n\n@font-face {\n  font-family: \"Source Sans Pro\";\n  font-style: normal;\n  font-weight: 700;\n  src:\n    local(\"Source Sans Pro Bold\"),\n    local(\"SourceSansPro-Bold\"),\n    url(/skin/fonts/source-sans-pro-700.woff2) format(\"woff2\");\n}\n\nbody {\n  font-family: \"Source Sans Pro\", sans-serif;\n  font-size: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5516);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1364);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

:root {
  --background-color-cta-primary: #0797e1;
  --background-color-cta-primary-hover: #0797e1ee;
  --background-color-cta-secondary: #fff;
  --background-color-cta-secondary-hover: #0001;
  --background-color-error: #f7dde1;
  --background-color-info: #0797e1;
  --background-color-secondary: #f7f7f7;
  --background-color-primary: #fff;
  --background-color-ternary: #edf9ff;
  --border-color-cta-primary: var(--background-color-cta-primary);
  --border-color-cta-secondary: var(--color-primary);
  --border-color-secondary: #d2d2d2;
  --border-color-primary: #cdcdcd;
  --border-color-ternary: #c0e6f9;
  --border-color-outline: #acacac;
  --border-radius: 4px;
  --border-radius-primary: 6px;
  --border-style-primary: solid;
  --border-width-thick: 4px;
  --border-width-thin: 1px;
  --box-shadow-primary: 0 2px 4px 0 hsla(0, 0%, 84%, 0.5);
  --color-brand-primary: #ed1e45;
  --color-cta-primary: #fff;
  --color-cta-secondary: #666;
  --color-primary: #585858;
  --color-secondary: #000;
  --color-dimmed: #4a4a4a;
  --color-critical: var(--color-brand-primary);
  --color-default: #ff8f00;
  --color-error: var(--color-brand-primary);
  --color-link: #0797e1;
  --color-info: #0797e1;
  --color-premium: #eda51e;
  --color-premium-hover: #eb9b05;
  --font-size-heavy: 20px;
  --font-size-big: 17px;
  --font-size-medium: 16px;
  --font-size-primary: 13px;
  --font-size-small: 12px;
  --margin-primary: 16px;
  --margin-secondary: calc(var(--margin-primary) / 2);
  --padding-primary: 16px;
  --padding-secondary: calc(var(--padding-primary) / 2);
  --primary-outline: var(--border-color-outline) dotted 1px;
}
`, "",{"version":3,"sources":["webpack://./src/theme/ui/light.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;EAeE;;AAEF;EACE,uCAAuC;EACvC,+CAA+C;EAC/C,sCAAsC;EACtC,6CAA6C;EAC7C,iCAAiC;EACjC,gCAAgC;EAChC,qCAAqC;EACrC,gCAAgC;EAChC,mCAAmC;EACnC,+DAA+D;EAC/D,kDAAkD;EAClD,iCAAiC;EACjC,+BAA+B;EAC/B,+BAA+B;EAC/B,+BAA+B;EAC/B,oBAAoB;EACpB,4BAA4B;EAC5B,6BAA6B;EAC7B,yBAAyB;EACzB,wBAAwB;EACxB,uDAAuD;EACvD,8BAA8B;EAC9B,yBAAyB;EACzB,2BAA2B;EAC3B,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,4CAA4C;EAC5C,wBAAwB;EACxB,yCAAyC;EACzC,qBAAqB;EACrB,qBAAqB;EACrB,wBAAwB;EACxB,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,wBAAwB;EACxB,yBAAyB;EACzB,uBAAuB;EACvB,sBAAsB;EACtB,mDAAmD;EACnD,uBAAuB;EACvB,qDAAqD;EACrD,yDAAyD;AAC3D","sourcesContent":["/*\n * This file is part of Adblock Plus <https://adblockplus.org/>,\n * Copyright (C) 2006-present eyeo GmbH\n *\n * Adblock Plus is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * Adblock Plus is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.\n */\n\n:root {\n  --background-color-cta-primary: #0797e1;\n  --background-color-cta-primary-hover: #0797e1ee;\n  --background-color-cta-secondary: #fff;\n  --background-color-cta-secondary-hover: #0001;\n  --background-color-error: #f7dde1;\n  --background-color-info: #0797e1;\n  --background-color-secondary: #f7f7f7;\n  --background-color-primary: #fff;\n  --background-color-ternary: #edf9ff;\n  --border-color-cta-primary: var(--background-color-cta-primary);\n  --border-color-cta-secondary: var(--color-primary);\n  --border-color-secondary: #d2d2d2;\n  --border-color-primary: #cdcdcd;\n  --border-color-ternary: #c0e6f9;\n  --border-color-outline: #acacac;\n  --border-radius: 4px;\n  --border-radius-primary: 6px;\n  --border-style-primary: solid;\n  --border-width-thick: 4px;\n  --border-width-thin: 1px;\n  --box-shadow-primary: 0 2px 4px 0 hsla(0, 0%, 84%, 0.5);\n  --color-brand-primary: #ed1e45;\n  --color-cta-primary: #fff;\n  --color-cta-secondary: #666;\n  --color-primary: #585858;\n  --color-secondary: #000;\n  --color-dimmed: #4a4a4a;\n  --color-critical: var(--color-brand-primary);\n  --color-default: #ff8f00;\n  --color-error: var(--color-brand-primary);\n  --color-link: #0797e1;\n  --color-info: #0797e1;\n  --color-premium: #eda51e;\n  --color-premium-hover: #eb9b05;\n  --font-size-heavy: 20px;\n  --font-size-big: 17px;\n  --font-size-medium: 16px;\n  --font-size-primary: 13px;\n  --font-size-small: 12px;\n  --margin-primary: 16px;\n  --margin-secondary: calc(var(--margin-primary) / 2);\n  --padding-primary: 16px;\n  --padding-secondary: calc(var(--padding-primary) / 2);\n  --primary-outline: var(--border-color-outline) dotted 1px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 1364:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 5516:
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 3465:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 5814:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 2389:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 9337:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 6622:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 8722:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 2558:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* @@package_name - v@@version - @@timestamp */
/* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* vim: set sts=2 sw=2 et tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
  throw new Error("This script should only be loaded in a browser extension.");
}

if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
  const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

  // Wrapping the bulk of this polyfill in a one-time-use function is a minor
  // optimization for Firefox. Since Spidermonkey does not fully parse the
  // contents of a function until the first time it's called, and since it will
  // never actually need to be called, this allows the polyfill to be included
  // in Firefox nearly for free.
  const wrapAPIs = extensionAPIs => {
    // NOTE: apiMetadata is associated to the content of the api-metadata.json file
    // at build time by replacing the following "include" with the content of the
    // JSON file.
    const apiMetadata = __webpack_require__(2058);

    if (Object.keys(apiMetadata).length === 0) {
      throw new Error("api-metadata.json has not been included in browser-polyfill");
    }

    /**
     * A WeakMap subclass which creates and stores a value for any key which does
     * not exist when accessed, but behaves exactly as an ordinary WeakMap
     * otherwise.
     *
     * @param {function} createItem
     *        A function which will be called in order to create the value for any
     *        key which does not exist, the first time it is accessed. The
     *        function receives, as its only argument, the key being created.
     */
    class DefaultWeakMap extends WeakMap {
      constructor(createItem, items = undefined) {
        super(items);
        this.createItem = createItem;
      }

      get(key) {
        if (!this.has(key)) {
          this.set(key, this.createItem(key));
        }

        return super.get(key);
      }
    }

    /**
     * Returns true if the given object is an object with a `then` method, and can
     * therefore be assumed to behave as a Promise.
     *
     * @param {*} value The value to test.
     * @returns {boolean} True if the value is thenable.
     */
    const isThenable = value => {
      return value && typeof value === "object" && typeof value.then === "function";
    };

    /**
     * Creates and returns a function which, when called, will resolve or reject
     * the given promise based on how it is called:
     *
     * - If, when called, `chrome.runtime.lastError` contains a non-null object,
     *   the promise is rejected with that value.
     * - If the function is called with exactly one argument, the promise is
     *   resolved to that value.
     * - Otherwise, the promise is resolved to an array containing all of the
     *   function's arguments.
     *
     * @param {object} promise
     *        An object containing the resolution and rejection functions of a
     *        promise.
     * @param {function} promise.resolve
     *        The promise's resolution function.
     * @param {function} promise.reject
     *        The promise's rejection function.
     * @param {object} metadata
     *        Metadata about the wrapped method which has created the callback.
     * @param {boolean} metadata.singleCallbackArg
     *        Whether or not the promise is resolved with only the first
     *        argument of the callback, alternatively an array of all the
     *        callback arguments is resolved. By default, if the callback
     *        function is invoked with only a single argument, that will be
     *        resolved to the promise, while all arguments will be resolved as
     *        an array if multiple are given.
     *
     * @returns {function}
     *        The generated callback function.
     */
    const makeCallback = (promise, metadata) => {
      // In case we encounter a browser error in the callback function, we don't
      // want to lose the stack trace leading up to this point. For that reason,
      // we need to instantiate the error outside the callback function.
      let error = new Error();
      return (...callbackArgs) => {
        if (extensionAPIs.runtime.lastError) {
          error.message = extensionAPIs.runtime.lastError.message;
          promise.reject(error);
        } else if (metadata.singleCallbackArg ||
                   (callbackArgs.length <= 1 && metadata.singleCallbackArg !== false)) {
          promise.resolve(callbackArgs[0]);
        } else {
          promise.resolve(callbackArgs);
        }
      };
    };

    const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";

    /**
     * Creates a wrapper function for a method with the given name and metadata.
     *
     * @param {string} name
     *        The name of the method which is being wrapped.
     * @param {object} metadata
     *        Metadata about the method being wrapped.
     * @param {integer} metadata.minArgs
     *        The minimum number of arguments which must be passed to the
     *        function. If called with fewer than this number of arguments, the
     *        wrapper will raise an exception.
     * @param {integer} metadata.maxArgs
     *        The maximum number of arguments which may be passed to the
     *        function. If called with more than this number of arguments, the
     *        wrapper will raise an exception.
     * @param {boolean} metadata.singleCallbackArg
     *        Whether or not the promise is resolved with only the first
     *        argument of the callback, alternatively an array of all the
     *        callback arguments is resolved. By default, if the callback
     *        function is invoked with only a single argument, that will be
     *        resolved to the promise, while all arguments will be resolved as
     *        an array if multiple are given.
     *
     * @returns {function(object, ...*)}
     *       The generated wrapper function.
     */
    const wrapAsyncFunction = (name, metadata) => {
      return function asyncFunctionWrapper(target, ...args) {
        if (args.length < metadata.minArgs) {
          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
        }

        if (args.length > metadata.maxArgs) {
          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
        }

        return new Promise((resolve, reject) => {
          if (metadata.fallbackToNoCallback) {
            // This API method has currently no callback on Chrome, but it return a promise on Firefox,
            // and so the polyfill will try to call it with a callback first, and it will fallback
            // to not passing the callback if the first call fails.
            try {
              target[name](...args, makeCallback({resolve, reject}, metadata));
            } catch (cbError) {
              console.warn(`${name} API method doesn't seem to support the callback parameter, ` +
                           "falling back to call it without a callback: ", cbError);

              target[name](...args);

              // Update the API method metadata, so that the next API calls will not try to
              // use the unsupported callback anymore.
              metadata.fallbackToNoCallback = false;
              metadata.noCallback = true;

              resolve();
            }
          } else if (metadata.noCallback) {
            target[name](...args);
            resolve();
          } else {
            target[name](...args, makeCallback({resolve, reject}, metadata));
          }
        });
      };
    };

    /**
     * Wraps an existing method of the target object, so that calls to it are
     * intercepted by the given wrapper function. The wrapper function receives,
     * as its first argument, the original `target` object, followed by each of
     * the arguments passed to the original method.
     *
     * @param {object} target
     *        The original target object that the wrapped method belongs to.
     * @param {function} method
     *        The method being wrapped. This is used as the target of the Proxy
     *        object which is created to wrap the method.
     * @param {function} wrapper
     *        The wrapper function which is called in place of a direct invocation
     *        of the wrapped method.
     *
     * @returns {Proxy<function>}
     *        A Proxy object for the given method, which invokes the given wrapper
     *        method in its place.
     */
    const wrapMethod = (target, method, wrapper) => {
      return new Proxy(method, {
        apply(targetMethod, thisObj, args) {
          return wrapper.call(thisObj, target, ...args);
        },
      });
    };

    let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

    /**
     * Wraps an object in a Proxy which intercepts and wraps certain methods
     * based on the given `wrappers` and `metadata` objects.
     *
     * @param {object} target
     *        The target object to wrap.
     *
     * @param {object} [wrappers = {}]
     *        An object tree containing wrapper functions for special cases. Any
     *        function present in this object tree is called in place of the
     *        method in the same location in the `target` object tree. These
     *        wrapper methods are invoked as described in {@see wrapMethod}.
     *
     * @param {object} [metadata = {}]
     *        An object tree containing metadata used to automatically generate
     *        Promise-based wrapper functions for asynchronous. Any function in
     *        the `target` object tree which has a corresponding metadata object
     *        in the same location in the `metadata` tree is replaced with an
     *        automatically-generated wrapper function, as described in
     *        {@see wrapAsyncFunction}
     *
     * @returns {Proxy<object>}
     */
    const wrapObject = (target, wrappers = {}, metadata = {}) => {
      let cache = Object.create(null);
      let handlers = {
        has(proxyTarget, prop) {
          return prop in target || prop in cache;
        },

        get(proxyTarget, prop, receiver) {
          if (prop in cache) {
            return cache[prop];
          }

          if (!(prop in target)) {
            return undefined;
          }

          let value = target[prop];

          if (typeof value === "function") {
            // This is a method on the underlying object. Check if we need to do
            // any wrapping.

            if (typeof wrappers[prop] === "function") {
              // We have a special-case wrapper for this method.
              value = wrapMethod(target, target[prop], wrappers[prop]);
            } else if (hasOwnProperty(metadata, prop)) {
              // This is an async method that we have metadata for. Create a
              // Promise wrapper for it.
              let wrapper = wrapAsyncFunction(prop, metadata[prop]);
              value = wrapMethod(target, target[prop], wrapper);
            } else {
              // This is a method that we don't know or care about. Return the
              // original method, bound to the underlying object.
              value = value.bind(target);
            }
          } else if (typeof value === "object" && value !== null &&
                     (hasOwnProperty(wrappers, prop) ||
                      hasOwnProperty(metadata, prop))) {
            // This is an object that we need to do some wrapping for the children
            // of. Create a sub-object wrapper for it with the appropriate child
            // metadata.
            value = wrapObject(value, wrappers[prop], metadata[prop]);
          } else if (hasOwnProperty(metadata, "*")) {
            // Wrap all properties in * namespace.
            value = wrapObject(value, wrappers[prop], metadata["*"]);
          } else {
            // We don't need to do any wrapping for this property,
            // so just forward all access to the underlying object.
            Object.defineProperty(cache, prop, {
              configurable: true,
              enumerable: true,
              get() {
                return target[prop];
              },
              set(value) {
                target[prop] = value;
              },
            });

            return value;
          }

          cache[prop] = value;
          return value;
        },

        set(proxyTarget, prop, value, receiver) {
          if (prop in cache) {
            cache[prop] = value;
          } else {
            target[prop] = value;
          }
          return true;
        },

        defineProperty(proxyTarget, prop, desc) {
          return Reflect.defineProperty(cache, prop, desc);
        },

        deleteProperty(proxyTarget, prop) {
          return Reflect.deleteProperty(cache, prop);
        },
      };

      // Per contract of the Proxy API, the "get" proxy handler must return the
      // original value of the target if that value is declared read-only and
      // non-configurable. For this reason, we create an object with the
      // prototype set to `target` instead of using `target` directly.
      // Otherwise we cannot return a custom object for APIs that
      // are declared read-only and non-configurable, such as `chrome.devtools`.
      //
      // The proxy handlers themselves will still use the original `target`
      // instead of the `proxyTarget`, so that the methods and properties are
      // dereferenced via the original targets.
      let proxyTarget = Object.create(target);
      return new Proxy(proxyTarget, handlers);
    };

    /**
     * Creates a set of wrapper functions for an event object, which handles
     * wrapping of listener functions that those messages are passed.
     *
     * A single wrapper is created for each listener function, and stored in a
     * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
     * retrieve the original wrapper, so that  attempts to remove a
     * previously-added listener work as expected.
     *
     * @param {DefaultWeakMap<function, function>} wrapperMap
     *        A DefaultWeakMap object which will create the appropriate wrapper
     *        for a given listener function when one does not exist, and retrieve
     *        an existing one when it does.
     *
     * @returns {object}
     */
    const wrapEvent = wrapperMap => ({
      addListener(target, listener, ...args) {
        target.addListener(wrapperMap.get(listener), ...args);
      },

      hasListener(target, listener) {
        return target.hasListener(wrapperMap.get(listener));
      },

      removeListener(target, listener) {
        target.removeListener(wrapperMap.get(listener));
      },
    });

    const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
      if (typeof listener !== "function") {
        return listener;
      }

      /**
       * Wraps an onRequestFinished listener function so that it will return a
       * `getContent()` property which returns a `Promise` rather than using a
       * callback API.
       *
       * @param {object} req
       *        The HAR entry object representing the network request.
       */
      return function onRequestFinished(req) {
        const wrappedReq = wrapObject(req, {} /* wrappers */, {
          getContent: {
            minArgs: 0,
            maxArgs: 0,
          },
        });
        listener(wrappedReq);
      };
    });

    const onMessageWrappers = new DefaultWeakMap(listener => {
      if (typeof listener !== "function") {
        return listener;
      }

      /**
       * Wraps a message listener function so that it may send responses based on
       * its return value, rather than by returning a sentinel value and calling a
       * callback. If the listener function returns a Promise, the response is
       * sent when the promise either resolves or rejects.
       *
       * @param {*} message
       *        The message sent by the other end of the channel.
       * @param {object} sender
       *        Details about the sender of the message.
       * @param {function(*)} sendResponse
       *        A callback which, when called with an arbitrary argument, sends
       *        that value as a response.
       * @returns {boolean}
       *        True if the wrapped listener returned a Promise, which will later
       *        yield a response. False otherwise.
       */
      return function onMessage(message, sender, sendResponse) {
        let didCallSendResponse = false;

        let wrappedSendResponse;
        let sendResponsePromise = new Promise(resolve => {
          wrappedSendResponse = function(response) {
            didCallSendResponse = true;
            resolve(response);
          };
        });

        let result;
        try {
          result = listener(message, sender, wrappedSendResponse);
        } catch (err) {
          result = Promise.reject(err);
        }

        const isResultThenable = result !== true && isThenable(result);

        // If the listener didn't returned true or a Promise, or called
        // wrappedSendResponse synchronously, we can exit earlier
        // because there will be no response sent from this listener.
        if (result !== true && !isResultThenable && !didCallSendResponse) {
          return false;
        }

        // A small helper to send the message if the promise resolves
        // and an error if the promise rejects (a wrapped sendMessage has
        // to translate the message into a resolved promise or a rejected
        // promise).
        const sendPromisedResult = (promise) => {
          promise.then(msg => {
            // send the message value.
            sendResponse(msg);
          }, error => {
            // Send a JSON representation of the error if the rejected value
            // is an instance of error, or the object itself otherwise.
            let message;
            if (error && (error instanceof Error ||
                typeof error.message === "string")) {
              message = error.message;
            } else {
              message = "An unexpected error occurred";
            }

            sendResponse({
              __mozWebExtensionPolyfillReject__: true,
              message,
            });
          }).catch(err => {
            // Print an error on the console if unable to send the response.
            console.error("Failed to send onMessage rejected reply", err);
          });
        };

        // If the listener returned a Promise, send the resolved value as a
        // result, otherwise wait the promise related to the wrappedSendResponse
        // callback to resolve and send it as a response.
        if (isResultThenable) {
          sendPromisedResult(result);
        } else {
          sendPromisedResult(sendResponsePromise);
        }

        // Let Chrome know that the listener is replying.
        return true;
      };
    });

    const wrappedSendMessageCallback = ({reject, resolve}, reply) => {
      if (extensionAPIs.runtime.lastError) {
        // Detect when none of the listeners replied to the sendMessage call and resolve
        // the promise to undefined as in Firefox.
        // See https://github.com/mozilla/webextension-polyfill/issues/130
        if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
          resolve();
        } else {
          reject(new Error(extensionAPIs.runtime.lastError.message));
        }
      } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
        // Convert back the JSON representation of the error into
        // an Error instance.
        reject(new Error(reply.message));
      } else {
        resolve(reply);
      }
    };

    const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
      if (args.length < metadata.minArgs) {
        throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
      }

      if (args.length > metadata.maxArgs) {
        throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
      }

      return new Promise((resolve, reject) => {
        const wrappedCb = wrappedSendMessageCallback.bind(null, {resolve, reject});
        args.push(wrappedCb);
        apiNamespaceObj.sendMessage(...args);
      });
    };

    const staticWrappers = {
      devtools: {
        network: {
          onRequestFinished: wrapEvent(onRequestFinishedWrappers),
        },
      },
      runtime: {
        onMessage: wrapEvent(onMessageWrappers),
        onMessageExternal: wrapEvent(onMessageWrappers),
        sendMessage: wrappedSendMessage.bind(null, "sendMessage", {minArgs: 1, maxArgs: 3}),
      },
      tabs: {
        sendMessage: wrappedSendMessage.bind(null, "sendMessage", {minArgs: 2, maxArgs: 3}),
      },
    };
    const settingMetadata = {
      clear: {minArgs: 1, maxArgs: 1},
      get: {minArgs: 1, maxArgs: 1},
      set: {minArgs: 1, maxArgs: 1},
    };
    apiMetadata.privacy = {
      network: {"*": settingMetadata},
      services: {"*": settingMetadata},
      websites: {"*": settingMetadata},
    };

    return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
  };

  // The build process adds a UMD wrapper around this file, which makes the
  // `module` variable available.
  module.exports = wrapAPIs(chrome);
} else {
  module.exports = globalThis.browser;
}


/***/ }),

/***/ 2058:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"alarms":{"clear":{"minArgs":0,"maxArgs":1},"clearAll":{"minArgs":0,"maxArgs":0},"get":{"minArgs":0,"maxArgs":1},"getAll":{"minArgs":0,"maxArgs":0}},"bookmarks":{"create":{"minArgs":1,"maxArgs":1},"get":{"minArgs":1,"maxArgs":1},"getChildren":{"minArgs":1,"maxArgs":1},"getRecent":{"minArgs":1,"maxArgs":1},"getSubTree":{"minArgs":1,"maxArgs":1},"getTree":{"minArgs":0,"maxArgs":0},"move":{"minArgs":2,"maxArgs":2},"remove":{"minArgs":1,"maxArgs":1},"removeTree":{"minArgs":1,"maxArgs":1},"search":{"minArgs":1,"maxArgs":1},"update":{"minArgs":2,"maxArgs":2}},"browserAction":{"disable":{"minArgs":0,"maxArgs":1,"fallbackToNoCallback":true},"enable":{"minArgs":0,"maxArgs":1,"fallbackToNoCallback":true},"getBadgeBackgroundColor":{"minArgs":1,"maxArgs":1},"getBadgeText":{"minArgs":1,"maxArgs":1},"getPopup":{"minArgs":1,"maxArgs":1},"getTitle":{"minArgs":1,"maxArgs":1},"openPopup":{"minArgs":0,"maxArgs":0},"setBadgeBackgroundColor":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"setBadgeText":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"setIcon":{"minArgs":1,"maxArgs":1},"setPopup":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"setTitle":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true}},"browsingData":{"remove":{"minArgs":2,"maxArgs":2},"removeCache":{"minArgs":1,"maxArgs":1},"removeCookies":{"minArgs":1,"maxArgs":1},"removeDownloads":{"minArgs":1,"maxArgs":1},"removeFormData":{"minArgs":1,"maxArgs":1},"removeHistory":{"minArgs":1,"maxArgs":1},"removeLocalStorage":{"minArgs":1,"maxArgs":1},"removePasswords":{"minArgs":1,"maxArgs":1},"removePluginData":{"minArgs":1,"maxArgs":1},"settings":{"minArgs":0,"maxArgs":0}},"commands":{"getAll":{"minArgs":0,"maxArgs":0}},"contextMenus":{"remove":{"minArgs":1,"maxArgs":1},"removeAll":{"minArgs":0,"maxArgs":0},"update":{"minArgs":2,"maxArgs":2}},"cookies":{"get":{"minArgs":1,"maxArgs":1},"getAll":{"minArgs":1,"maxArgs":1},"getAllCookieStores":{"minArgs":0,"maxArgs":0},"remove":{"minArgs":1,"maxArgs":1},"set":{"minArgs":1,"maxArgs":1}},"devtools":{"inspectedWindow":{"eval":{"minArgs":1,"maxArgs":2,"singleCallbackArg":false}},"panels":{"create":{"minArgs":3,"maxArgs":3,"singleCallbackArg":true},"elements":{"createSidebarPane":{"minArgs":1,"maxArgs":1}}}},"downloads":{"cancel":{"minArgs":1,"maxArgs":1},"download":{"minArgs":1,"maxArgs":1},"erase":{"minArgs":1,"maxArgs":1},"getFileIcon":{"minArgs":1,"maxArgs":2},"open":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"pause":{"minArgs":1,"maxArgs":1},"removeFile":{"minArgs":1,"maxArgs":1},"resume":{"minArgs":1,"maxArgs":1},"search":{"minArgs":1,"maxArgs":1},"show":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true}},"extension":{"isAllowedFileSchemeAccess":{"minArgs":0,"maxArgs":0},"isAllowedIncognitoAccess":{"minArgs":0,"maxArgs":0}},"history":{"addUrl":{"minArgs":1,"maxArgs":1},"deleteAll":{"minArgs":0,"maxArgs":0},"deleteRange":{"minArgs":1,"maxArgs":1},"deleteUrl":{"minArgs":1,"maxArgs":1},"getVisits":{"minArgs":1,"maxArgs":1},"search":{"minArgs":1,"maxArgs":1}},"i18n":{"detectLanguage":{"minArgs":1,"maxArgs":1},"getAcceptLanguages":{"minArgs":0,"maxArgs":0}},"identity":{"launchWebAuthFlow":{"minArgs":1,"maxArgs":1}},"idle":{"queryState":{"minArgs":1,"maxArgs":1}},"management":{"get":{"minArgs":1,"maxArgs":1},"getAll":{"minArgs":0,"maxArgs":0},"getSelf":{"minArgs":0,"maxArgs":0},"setEnabled":{"minArgs":2,"maxArgs":2},"uninstallSelf":{"minArgs":0,"maxArgs":1}},"notifications":{"clear":{"minArgs":1,"maxArgs":1},"create":{"minArgs":1,"maxArgs":2},"getAll":{"minArgs":0,"maxArgs":0},"getPermissionLevel":{"minArgs":0,"maxArgs":0},"update":{"minArgs":2,"maxArgs":2}},"pageAction":{"getPopup":{"minArgs":1,"maxArgs":1},"getTitle":{"minArgs":1,"maxArgs":1},"hide":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"setIcon":{"minArgs":1,"maxArgs":1},"setPopup":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"setTitle":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true},"show":{"minArgs":1,"maxArgs":1,"fallbackToNoCallback":true}},"permissions":{"contains":{"minArgs":1,"maxArgs":1},"getAll":{"minArgs":0,"maxArgs":0},"remove":{"minArgs":1,"maxArgs":1},"request":{"minArgs":1,"maxArgs":1}},"runtime":{"getBackgroundPage":{"minArgs":0,"maxArgs":0},"getPlatformInfo":{"minArgs":0,"maxArgs":0},"openOptionsPage":{"minArgs":0,"maxArgs":0},"requestUpdateCheck":{"minArgs":0,"maxArgs":0},"sendMessage":{"minArgs":1,"maxArgs":3},"sendNativeMessage":{"minArgs":2,"maxArgs":2},"setUninstallURL":{"minArgs":1,"maxArgs":1}},"sessions":{"getDevices":{"minArgs":0,"maxArgs":1},"getRecentlyClosed":{"minArgs":0,"maxArgs":1},"restore":{"minArgs":0,"maxArgs":1}},"storage":{"local":{"clear":{"minArgs":0,"maxArgs":0},"get":{"minArgs":0,"maxArgs":1},"getBytesInUse":{"minArgs":0,"maxArgs":1},"remove":{"minArgs":1,"maxArgs":1},"set":{"minArgs":1,"maxArgs":1}},"managed":{"get":{"minArgs":0,"maxArgs":1},"getBytesInUse":{"minArgs":0,"maxArgs":1}},"sync":{"clear":{"minArgs":0,"maxArgs":0},"get":{"minArgs":0,"maxArgs":1},"getBytesInUse":{"minArgs":0,"maxArgs":1},"remove":{"minArgs":1,"maxArgs":1},"set":{"minArgs":1,"maxArgs":1}}},"tabs":{"captureVisibleTab":{"minArgs":0,"maxArgs":2},"create":{"minArgs":1,"maxArgs":1},"detectLanguage":{"minArgs":0,"maxArgs":1},"discard":{"minArgs":0,"maxArgs":1},"duplicate":{"minArgs":1,"maxArgs":1},"executeScript":{"minArgs":1,"maxArgs":2},"get":{"minArgs":1,"maxArgs":1},"getCurrent":{"minArgs":0,"maxArgs":0},"getZoom":{"minArgs":0,"maxArgs":1},"getZoomSettings":{"minArgs":0,"maxArgs":1},"goBack":{"minArgs":0,"maxArgs":1},"goForward":{"minArgs":0,"maxArgs":1},"highlight":{"minArgs":1,"maxArgs":1},"insertCSS":{"minArgs":1,"maxArgs":2},"move":{"minArgs":2,"maxArgs":2},"query":{"minArgs":1,"maxArgs":1},"reload":{"minArgs":0,"maxArgs":2},"remove":{"minArgs":1,"maxArgs":1},"removeCSS":{"minArgs":1,"maxArgs":2},"sendMessage":{"minArgs":2,"maxArgs":3},"setZoom":{"minArgs":1,"maxArgs":2},"setZoomSettings":{"minArgs":1,"maxArgs":2},"update":{"minArgs":1,"maxArgs":2}},"topSites":{"get":{"minArgs":0,"maxArgs":0}},"webNavigation":{"getAllFrames":{"minArgs":1,"maxArgs":1},"getFrame":{"minArgs":1,"maxArgs":1}},"webRequest":{"handlerBehaviorChanged":{"minArgs":0,"maxArgs":0}},"windows":{"create":{"minArgs":0,"maxArgs":1},"get":{"minArgs":1,"maxArgs":2},"getAll":{"minArgs":0,"maxArgs":1},"getCurrent":{"minArgs":0,"maxArgs":1},"getLastFocused":{"minArgs":0,"maxArgs":1},"remove":{"minArgs":1,"maxArgs":1},"update":{"minArgs":2,"maxArgs":2}}}');

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// ./js/dom.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

const $ = (selector, container) => {
  if (!container) container = document;
  return container.querySelector(selector);
};
const $$ = (selector, container) => {
  if (!container) container = document;
  return container.querySelectorAll(selector);
};

// basic copy and paste clipboard utility
const clipboard = {
  // warning: Firefox needs a proper event to work
  //          such click or mousedown or similar.
  copy(text) {
    const selection = document.getSelection();
    const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : null;
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.cssText = "position:fixed;top:-999px";
    document.body.appendChild(el).select();
    document.execCommand("copy");
    document.body.removeChild(el);
    if (selected) {
      selection.removeAllRanges();
      // simply putting back selected doesn't work anymore
      const range = document.createRange();
      range.setStart(selected.startContainer, selected.startOffset);
      range.setEnd(selected.endContainer, selected.endOffset);
      selection.addRange(range);
    }
  },
  // optionally accepts a `paste` DOM event
  // it uses global clipboardData, if available, otherwise.
  // i.e. input.onpaste = event => console.log(dom.clipboard.paste(event));
  paste(event) {
    if (!event) event = window;
    const clipboardData = event.clipboardData || window.clipboardData;
    return clipboardData ? clipboardData.getData("text") : "";
  }
};

// helper to provide the relative coordinates
// to the closest positioned containing element
function relativeCoordinates(event) {
  return { x: event.offsetX, y: event.offsetY };
}

// helper to format as indented string any HTML/XML node
function asIndentedString(element, indentation = 0) {
  // only the first time it's called
  if (!indentation) {
    // get the top meaningful element to parse
    if (element.nodeType === Node.DOCUMENT_NODE)
      element = element.documentElement;
    // accept only elements
    if (element.nodeType !== Node.ELEMENT_NODE)
      throw new Error("Unable to serialize " + element);
    // avoid original XML pollution at first iteration
    element = element.cloneNode(true);
  }
  const before = "  ".repeat(indentation + 1);
  const after = "  ".repeat(indentation);
  const doc = element.ownerDocument;
  for (const child of Array.from(element.childNodes)) {
    const { nodeType } = child;
    if (nodeType === Node.ELEMENT_NODE || nodeType === Node.TEXT_NODE) {
      if (nodeType === Node.TEXT_NODE) {
        const content = child.textContent.trim();
        child.textContent = content.length ? `\n${before}${content}` : "";
      } else {
        element.insertBefore(doc.createTextNode(`\n${before}`), child);
        asIndentedString(child, indentation + 1);
      }
    }
    if (child === element.lastChild)
      element.appendChild(doc.createTextNode(`\n${after}`));
  }
  // inner calls don't need to bother serialization
  if (indentation) return "";
  // easiest way to recognize an HTML element from an XML one
  if (/^https?:\/\/www\.w3\.org\/1999\/xhtml$/.test(element.namespaceURI))
    return element.outerHTML;
  // all other elements should use XML serializer
  return new XMLSerializer().serializeToString(element);
}

// EXTERNAL MODULE: ../../node_modules/webextension-polyfill/src/browser-polyfill.js
var browser_polyfill = __webpack_require__(2558);
var browser_polyfill_default = /*#__PURE__*/__webpack_require__.n(browser_polyfill);
;// ./src/i18n/ui/i18n.ts

const i18nAttributes = ["alt", "placeholder", "title", "value"];
function assignAction(elements, action) {
    for (const element of elements) {
        switch (typeof action) {
            case "string":
                element.href = action;
                element.target = "_blank";
                break;
            case "function":
                element.href = "#";
                element.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    action();
                });
                break;
        }
    }
}
function* getRemainingLinks(parent) {
    const links = parent.querySelectorAll("a:not([data-i18n-index])");
    for (const link of links) {
        yield link;
    }
}
function setElementLinks(idOrElement, ...actions) {
    var _a;
    const element = typeof idOrElement === "string"
        ? document.getElementById(idOrElement)
        : idOrElement;
    if (element === null) {
        return;
    }
    const remainingLinks = getRemainingLinks(element);
    for (let i = 0; i < actions.length; i++) {
        const links = element.querySelectorAll(`a[data-i18n-index='${i}']`);
        if (links.length > 0) {
            assignAction(links, actions[i]);
            continue;
        }
        const link = remainingLinks.next();
        if ((_a = link.done) !== null && _a !== void 0 ? _a : false)
            continue;
        assignAction([link.value], actions[i]);
    }
}
function stripTagsUnsafe(text) {
    return text.replace(/<\/?[^>]+>/g, "");
}
function setElementText(element, stringName, args, children = []) {
    function processString(str, currentElement) {
        const match = /^(.*?)<(a|em|slot|strong)(\d)?>(.*?)<\/\2\3>(.*)$/.exec(str);
        if (match !== null) {
            const [, before, name, index, innerText, after] = match;
            processString(before, currentElement);
            if (name === "slot") {
                const e = children[Number(index)];
                if (e !== undefined) {
                    currentElement.appendChild(e);
                }
            }
            else {
                const e = document.createElement(name);
                if (typeof index !== "undefined") {
                    e.dataset.i18nIndex = index;
                }
                processString(innerText, e);
                currentElement.appendChild(e);
            }
            processString(after, currentElement);
        }
        else
            currentElement.appendChild(document.createTextNode(str));
    }
    while (element.lastChild !== null) {
        element.removeChild(element.lastChild);
    }
    processString(browser_polyfill_default().i18n.getMessage(stringName, args !== null && args !== void 0 ? args : undefined), element);
}
function loadI18nStrings() {
    function resolveStringNames(container) {
        var _a, _b;
        if (container === null || container === undefined) {
            return;
        }
        {
            const elements = container.querySelectorAll("[data-i18n]");
            for (const element of elements) {
                const children = Array.from(element.children);
                setElementText(element, (_a = element.dataset.i18n) !== null && _a !== void 0 ? _a : "", null, children);
            }
        }
        for (const attr of i18nAttributes) {
            const elements = container.querySelectorAll(`[data-i18n-${attr}]`);
            for (const element of elements) {
                const stringName = (_b = element.getAttribute(`data-i18n-${attr}`)) !== null && _b !== void 0 ? _b : "";
                element.setAttribute(attr, browser_polyfill_default().i18n.getMessage(stringName));
            }
        }
    }
    resolveStringNames(document);
    for (const template of document.querySelectorAll("template")) {
        resolveStringNames(template.content);
    }
}
function isLocaleInfo(candidate) {
    return (candidate !== null &&
        typeof candidate === "object" &&
        "bidiDir" in candidate &&
        "locale" in candidate);
}
async function setLanguageAttributes() {
    const localeInfo = await browser_polyfill_default().runtime.sendMessage({
        type: "app.get",
        what: "localeInfo"
    });
    if (!isLocaleInfo(localeInfo)) {
        return;
    }
    document.documentElement.lang = localeInfo.locale;
    document.documentElement.dir = localeInfo.bidiDir;
}
function initI18n() {
    void setLanguageAttributes();
    loadI18nStrings();
}

;// ./src/i18n/ui/index.ts


// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3465);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6622);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(5814);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(9337);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(2389);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(8722);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/popup-dummy/ui/popup-dummy.css
var popup_dummy = __webpack_require__(5346);
;// ./src/popup-dummy/ui/popup-dummy.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(popup_dummy/* default */.A, options);




       /* harmony default export */ const ui_popup_dummy = (popup_dummy/* default */.A && popup_dummy/* default */.A.locals ? popup_dummy/* default */.A.locals : undefined);

;// ../../node_modules/@ungap/weakmap/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var esm_self = {};
try { esm_self.WeakMap = WeakMap; }
catch (WeakMap) {
  // this could be better but 90% of the time
  // it's everything developers need as fallback
  esm_self.WeakMap = (function (id, Object) {'use strict';
    var dP = Object.defineProperty;
    var hOP = Object.hasOwnProperty;
    var proto = WeakMap.prototype;
    proto.delete = function (key) {
      return this.has(key) && delete key[this._];
    };
    proto.get = function (key) {
      return this.has(key) ? key[this._] : void 0;
    };
    proto.has = function (key) {
      return hOP.call(key, this._);
    };
    proto.set = function (key, value) {
      dP(key, this._, {configurable: true, value: value});
      return this;
    };
    return WeakMap;
    function WeakMap(iterable) {
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
      if (iterable)
        iterable.forEach(add, this);
    }
    function add(pair) {
      this.set(pair[0], pair[1]);
    }
  }(Math.random(), Object));
}
/* harmony default export */ const esm = (esm_self.WeakMap);

;// ../../node_modules/@ungap/essential-weakset/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var essential_weakset_esm_self = {};
try { essential_weakset_esm_self.WeakSet = WeakSet; }
catch (WeakSet) {
  (function (id, dP) {
    var proto = WeakSet.prototype;
    proto.add = function (object) {
      if (!this.has(object))
        dP(object, this._, {value: true, configurable: true});
      return this;
    };
    proto.has = function (object) {
      return this.hasOwnProperty.call(object, this._);
    };
    proto.delete = function (object) {
      return this.has(object) && delete object[this._];
    };
    essential_weakset_esm_self.WeakSet = WeakSet;
    function WeakSet() {'use strict';
      dP(this, '_', {value: '_@ungap/weakmap' + id++});
    }
  }(Math.random(), Object.defineProperty));
}
/* harmony default export */ const essential_weakset_esm = (essential_weakset_esm_self.WeakSet);

;// ../../node_modules/uarray/esm/index.js
const {isArray} = Array;
const {indexOf, slice} = [];



;// ../../node_modules/domdiff/esm/utils.js


const append = (get, parent, children, start, end, before) => {
  const isSelect = 'selectedIndex' in parent;
  let noSelection = isSelect;
  while (start < end) {
    const child = get(children[start], 1);
    parent.insertBefore(child, before);
    if (isSelect && noSelection && child.selected) {
      noSelection = !noSelection;
      let {selectedIndex} = parent;
      parent.selectedIndex = selectedIndex < 0 ?
        start :
        indexOf.call(parent.querySelectorAll('option'), child);
    }
    start++;
  }
};

const eqeq = (a, b) => a == b;

const identity = O => O;

const utils_indexOf = (
  moreNodes,
  moreStart,
  moreEnd,
  lessNodes,
  lessStart,
  lessEnd,
  compare
) => {
  const length = lessEnd - lessStart;
  /* istanbul ignore if */
  if (length < 1)
    return -1;
  while ((moreEnd - moreStart) >= length) {
    let m = moreStart;
    let l = lessStart;
    while (
      m < moreEnd &&
      l < lessEnd &&
      compare(moreNodes[m], lessNodes[l])
    ) {
      m++;
      l++;
    }
    if (l === lessEnd)
      return moreStart;
    moreStart = m + 1;
  }
  return -1;
};

const isReversed = (
  futureNodes,
  futureEnd,
  currentNodes,
  currentStart,
  currentEnd,
  compare
) => {
  while (
    currentStart < currentEnd &&
    compare(
      currentNodes[currentStart],
      futureNodes[futureEnd - 1]
    )) {
      currentStart++;
      futureEnd--;
    };
  return futureEnd === 0;
};

const next = (get, list, i, length, before) => i < length ?
              get(list[i], 0) :
              (0 < i ?
                get(list[i - 1], -0).nextSibling :
                before);

const remove = (get, children, start, end) => {
  while (start < end)
    drop(get(children[start++], -1));
};

// - - - - - - - - - - - - - - - - - - -
// diff related constants and utilities
// - - - - - - - - - - - - - - - - - - -

const DELETION = -1;
const INSERTION = 1;
const SKIP = 0;
const SKIP_OND = 50;

const HS = (
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges
) => {

  let k = 0;
  /* istanbul ignore next */
  let minLen = futureChanges < currentChanges ? futureChanges : currentChanges;
  const link = Array(minLen++);
  const tresh = Array(minLen);
  tresh[0] = -1;

  for (let i = 1; i < minLen; i++)
    tresh[i] = currentEnd;

  const nodes = currentNodes.slice(currentStart, currentEnd);

  for (let i = futureStart; i < futureEnd; i++) {
    const index = nodes.indexOf(futureNodes[i]);
    if (-1 < index) {
      const idxInOld = index + currentStart;
      k = findK(tresh, minLen, idxInOld);
      /* istanbul ignore else */
      if (-1 < k) {
        tresh[k] = idxInOld;
        link[k] = {
          newi: i,
          oldi: idxInOld,
          prev: link[k - 1]
        };
      }
    }
  }

  k = --minLen;
  --currentEnd;
  while (tresh[k] > currentEnd) --k;

  minLen = currentChanges + futureChanges - k;
  const diff = Array(minLen);
  let ptr = link[k];
  --futureEnd;
  while (ptr) {
    const {newi, oldi} = ptr;
    while (futureEnd > newi) {
      diff[--minLen] = INSERTION;
      --futureEnd;
    }
    while (currentEnd > oldi) {
      diff[--minLen] = DELETION;
      --currentEnd;
    }
    diff[--minLen] = SKIP;
    --futureEnd;
    --currentEnd;
    ptr = ptr.prev;
  }
  while (futureEnd >= futureStart) {
    diff[--minLen] = INSERTION;
    --futureEnd;
  }
  while (currentEnd >= currentStart) {
    diff[--minLen] = DELETION;
    --currentEnd;
  }
  return diff;
};

// this is pretty much the same petit-dom code without the delete map part
// https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L556-L561
const OND = (
  futureNodes,
  futureStart,
  rows,
  currentNodes,
  currentStart,
  cols,
  compare
) => {
  const length = rows + cols;
  const v = [];
  let d, k, r, c, pv, cv, pd;
  outer: for (d = 0; d <= length; d++) {
    /* istanbul ignore if */
    if (d > SKIP_OND)
      return null;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    cv = v[d] = [];
    for (k = -d; k <= d; k += 2) {
      if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
        c = pv[pd + k + 1];
      } else {
        c = pv[pd + k - 1] + 1;
      }
      r = c - k;
      while (
        c < cols &&
        r < rows &&
        compare(
          currentNodes[currentStart + c],
          futureNodes[futureStart + r]
        )
      ) {
        c++;
        r++;
      }
      if (c === cols && r === rows) {
        break outer;
      }
      cv[d + k] = c;
    }
  }

  const diff = Array(d / 2 + length / 2);
  let diffIdx = diff.length - 1;
  for (d = v.length - 1; d >= 0; d--) {
    while (
      c > 0 &&
      r > 0 &&
      compare(
        currentNodes[currentStart + c - 1],
        futureNodes[futureStart + r - 1]
      )
    ) {
      // diagonal edge = equality
      diff[diffIdx--] = SKIP;
      c--;
      r--;
    }
    if (!d)
      break;
    pd = d - 1;
    /* istanbul ignore next */
    pv = d ? v[d - 1] : [0, 0];
    k = c - r;
    if (k === -d || (k !== d && pv[pd + k - 1] < pv[pd + k + 1])) {
      // vertical edge = insertion
      r--;
      diff[diffIdx--] = INSERTION;
    } else {
      // horizontal edge = deletion
      c--;
      diff[diffIdx--] = DELETION;
    }
  }
  return diff;
};

const applyDiff = (
  diff,
  get,
  parentNode,
  futureNodes,
  futureStart,
  currentNodes,
  currentStart,
  currentLength,
  before
) => {
  const live = [];
  const length = diff.length;
  let currentIndex = currentStart;
  let i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        futureStart++;
        currentIndex++;
        break;
      case INSERTION:
        // TODO: bulk appends for sequential nodes
        live.push(futureNodes[futureStart]);
        append(
          get,
          parentNode,
          futureNodes,
          futureStart++,
          futureStart,
          currentIndex < currentLength ?
            get(currentNodes[currentIndex], 0) :
            before
        );
        break;
      case DELETION:
        currentIndex++;
        break;
    }
  }
  i = 0;
  while (i < length) {
    switch (diff[i++]) {
      case SKIP:
        currentStart++;
        break;
      case DELETION:
        // TODO: bulk removes for sequential nodes
        if (-1 < live.indexOf(currentNodes[currentStart]))
          currentStart++;
        else
          remove(
            get,
            currentNodes,
            currentStart++,
            currentStart
          );
        break;
    }
  }
};

const findK = (ktr, length, j) => {
  let lo = 1;
  let hi = length;
  while (lo < hi) {
    const mid = ((lo + hi) / 2) >>> 0;
    if (j < ktr[mid])
      hi = mid;
    else
      lo = mid + 1;
  }
  return lo;
}

const smartDiff = (
  get,
  parentNode,
  futureNodes,
  futureStart,
  futureEnd,
  futureChanges,
  currentNodes,
  currentStart,
  currentEnd,
  currentChanges,
  currentLength,
  compare,
  before
) => {
  applyDiff(
    OND(
      futureNodes,
      futureStart,
      futureChanges,
      currentNodes,
      currentStart,
      currentChanges,
      compare
    ) ||
    HS(
      futureNodes,
      futureStart,
      futureEnd,
      futureChanges,
      currentNodes,
      currentStart,
      currentEnd,
      currentChanges
    ),
    get,
    parentNode,
    futureNodes,
    futureStart,
    currentNodes,
    currentStart,
    currentLength,
    before
  );
};

const drop = node => (node.remove || dropChild).call(node);

function dropChild() {
  const {parentNode} = this;
  /* istanbul ignore else */
  if (parentNode)
    parentNode.removeChild(this);
}

;// ../../node_modules/domdiff/esm/index.js
/*! (c) 2018 Andrea Giammarchi (ISC) */



const domdiff = (
  parentNode,     // where changes happen
  currentNodes,   // Array of current items/nodes
  futureNodes,    // Array of future items/nodes
  options         // optional object with one of the following properties
                  //  before: domNode
                  //  compare(generic, generic) => true if same generic
                  //  node(generic) => Node
) => {
  if (!options)
    options = {};

  const compare = options.compare || eqeq;
  const get = options.node || identity;
  const before = options.before == null ? null : get(options.before, 0);

  const currentLength = currentNodes.length;
  let currentEnd = currentLength;
  let currentStart = 0;

  let futureEnd = futureNodes.length;
  let futureStart = 0;

  // common prefix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentStart], futureNodes[futureStart])
  ) {
    currentStart++;
    futureStart++;
  }

  // common suffix
  while (
    currentStart < currentEnd &&
    futureStart < futureEnd &&
    compare(currentNodes[currentEnd - 1], futureNodes[futureEnd - 1])
  ) {
    currentEnd--;
    futureEnd--;
  }

  const currentSame = currentStart === currentEnd;
  const futureSame = futureStart === futureEnd;

  // same list
  if (currentSame && futureSame)
    return futureNodes;

  // only stuff to add
  if (currentSame && futureStart < futureEnd) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      next(get, currentNodes, currentStart, currentLength, before)
    );
    return futureNodes;
  }

  // only stuff to remove
  if (futureSame && currentStart < currentEnd) {
    remove(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  const currentChanges = currentEnd - currentStart;
  const futureChanges = futureEnd - futureStart;
  let i = -1;

  // 2 simple indels: the shortest sequence is a subsequence of the longest
  if (currentChanges < futureChanges) {
    i = utils_indexOf(
      futureNodes,
      futureStart,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    );
    // inner diff
    if (-1 < i) {
      append(
        get,
        parentNode,
        futureNodes,
        futureStart,
        i,
        get(currentNodes[currentStart], 0)
      );
      append(
        get,
        parentNode,
        futureNodes,
        i + currentChanges,
        futureEnd,
        next(get, currentNodes, currentEnd, currentLength, before)
      );
      return futureNodes;
    }
  }
  /* istanbul ignore else */
  else if (futureChanges < currentChanges) {
    i = utils_indexOf(
      currentNodes,
      currentStart,
      currentEnd,
      futureNodes,
      futureStart,
      futureEnd,
      compare
    );
    // outer diff
    if (-1 < i) {
      remove(
        get,
        currentNodes,
        currentStart,
        i
      );
      remove(
        get,
        currentNodes,
        i + futureChanges,
        currentEnd
      );
      return futureNodes;
    }
  }

  // common case with one replacement for many nodes
  // or many nodes replaced for a single one
  /* istanbul ignore else */
  if ((currentChanges < 2 || futureChanges < 2)) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      get(currentNodes[currentStart], 0)
    );
    remove(
      get,
      currentNodes,
      currentStart,
      currentEnd
    );
    return futureNodes;
  }

  // the half match diff part has been skipped in petit-dom
  // https://github.com/yelouafi/petit-dom/blob/bd6f5c919b5ae5297be01612c524c40be45f14a7/src/vdom.js#L391-L397
  // accordingly, I think it's safe to skip in here too
  // if one day it'll come out like the speediest thing ever to do
  // then I might add it in here too

  // Extra: before going too fancy, what about reversed lists ?
  //        This should bail out pretty quickly if that's not the case.
  if (
    currentChanges === futureChanges &&
    isReversed(
      futureNodes,
      futureEnd,
      currentNodes,
      currentStart,
      currentEnd,
      compare
    )
  ) {
    append(
      get,
      parentNode,
      futureNodes,
      futureStart,
      futureEnd,
      next(get, currentNodes, currentEnd, currentLength, before)
    );
    return futureNodes;
  }

  // last resort through a smart diff
  smartDiff(
    get,
    parentNode,
    futureNodes,
    futureStart,
    futureEnd,
    futureChanges,
    currentNodes,
    currentStart,
    currentEnd,
    currentChanges,
    currentLength,
    compare,
    before
  );

  return futureNodes;
};

/* harmony default export */ const domdiff_esm = (domdiff);

;// ../../node_modules/@ungap/custom-event/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var custom_event_esm_self = {};
custom_event_esm_self.CustomEvent = typeof CustomEvent === 'function' ?
  CustomEvent :
  (function (__p__) {
    CustomEvent[__p__] = new CustomEvent('').constructor[__p__];
    return CustomEvent;
    function CustomEvent(type, init) {
      if (!init) init = {};
      var e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, !!init.bubbles, !!init.cancelable, init.detail);
      return e;
    }
  }('prototype'));
/* harmony default export */ const custom_event_esm = (custom_event_esm_self.CustomEvent);

;// ../../node_modules/@ungap/essential-map/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var essential_map_esm_self = {};
try { essential_map_esm_self.Map = Map; }
catch (Map) {
  essential_map_esm_self.Map = function Map() {
    var i = 0;
    var k = [];
    var v = [];
    return {
      delete: function (key) {
        var had = contains(key);
        if (had) {
          k.splice(i, 1);
          v.splice(i, 1);
        }
        return had;
      },
      forEach: function forEach(callback, context) {
        k.forEach(
          function (key, i)  {
            callback.call(context, v[i], key, this);
          },
          this
        );
      },
      get: function get(key) {
        return contains(key) ? v[i] : void 0;
      },
      has: function has(key) {
        return contains(key);
      },
      set: function set(key, value) {
        v[contains(key) ? i : (k.push(key) - 1)] = value;
        return this;
      }
    };
    function contains(v) {
      i = k.indexOf(v);
      return -1 < i;
    }
  };
}
/* harmony default export */ const essential_map_esm = (essential_map_esm_self.Map);

;// ../../node_modules/hyperhtml/esm/classes/Component.js




// hyperHTML.Component is a very basic class
// able to create Custom Elements like components
// including the ability to listen to connect/disconnect
// events via onconnect/ondisconnect attributes
// Components can be created imperatively or declaratively.
// The main difference is that declared components
// will not automatically render on setState(...)
// to simplify state handling on render.
function Component() {
  return this; // this is needed in Edge !!!
}

// Component is lazily setup because it needs
// wire mechanism as lazy content
function setup(content) {
  // there are various weakly referenced variables in here
  // and mostly are to use Component.for(...) static method.
  const children = new esm;
  const create = Object.create;
  const createEntry = (wm, id, component) => {
    wm.set(id, component);
    return component;
  };
  const get = (Class, info, context, id) => {
    const relation = info.get(Class) || relate(Class, info);
    switch (typeof id) {
      case 'object':
      case 'function':
        const wm = relation.w || (relation.w = new esm);
        return wm.get(id) || createEntry(wm, id, new Class(context));
      default:
        const sm = relation.p || (relation.p = create(null));
        return sm[id] || (sm[id] = new Class(context));
    }
  };
  const relate = (Class, info) => {
    const relation = {w: null, p: null};
    info.set(Class, relation);
    return relation;
  };
  const set = context => {
    const info = new essential_map_esm;
    children.set(context, info);
    return info;
  };
  // The Component Class
  Object.defineProperties(
    Component,
    {
      // Component.for(context[, id]) is a convenient way
      // to automatically relate data/context to children components
      // If not created yet, the new Component(context) is weakly stored
      // and after that same instance would always be returned.
      for: {
        configurable: true,
        value(context, id) {
          return get(
            this,
            children.get(context) || set(context),
            context,
            id == null ?
              'default' : id
          );
        }
      }
    }
  );
  Object.defineProperties(
    Component.prototype,
    {
      // all events are handled with the component as context
      handleEvent: {value(e) {
        const ct = e.currentTarget;
        this[
          ('getAttribute' in ct && ct.getAttribute('data-call')) ||
          ('on' + e.type)
        ](e);
      }},
      // components will lazily define html or svg properties
      // as soon as these are invoked within the .render() method
      // Such render() method is not provided by the base class
      // but it must be available through the Component extend.
      // Declared components could implement a
      // render(props) method too and use props as needed.
      html: lazyGetter('html', content),
      svg: lazyGetter('svg', content),
      // the state is a very basic/simple mechanism inspired by Preact
      state: lazyGetter('state', function () { return this.defaultState; }),
      // it is possible to define a default state that'd be always an object otherwise
      defaultState: {get() { return {}; }},
      // dispatch a bubbling, cancelable, custom event
      // through the first known/available node
      dispatch: {value(type, detail) {
        const {_wire$} = this;
        if (_wire$) {
          const event = new custom_event_esm(type, {
            bubbles: true,
            cancelable: true,
            detail
          });
          event.component = this;
          return (_wire$.dispatchEvent ?
                    _wire$ :
                    _wire$.firstChild
                  ).dispatchEvent(event);
        }
        return false;
      }},
      // setting some property state through a new object
      // or a callback, triggers also automatically a render
      // unless explicitly specified to not do so (render === false)
      setState: {value(state, render) {
        const target = this.state;
        const source = typeof state === 'function' ? state.call(this, target) : state;
        for (const key in source) target[key] = source[key];
        if (render !== false)
          this.render();
        return this;
      }}
    }
  );
}

// instead of a secret key I could've used a WeakMap
// However, attaching a property directly will result
// into better performance with thousands of components
// hanging around, and less memory pressure caused by the WeakMap
const lazyGetter = (type, fn) => {
  const secret = '_' + type + '$';
  return {
    get() {
      return this[secret] || setValue(this, secret, fn.call(this, type));
    },
    set(value) {
      setValue(this, secret, value);
    }
  };
};

// shortcut to set value on get or set(value)
const setValue = (self, secret, value) =>
  Object.defineProperty(self, secret, {
    configurable: true,
    value: typeof value === 'function' ?
      function () {
        return (self._wire$ = value.apply(this, arguments));
      } :
      value
  })[secret]
;

Object.defineProperties(
  Component.prototype,
  {
    // used to distinguish better than instanceof
    ELEMENT_NODE: {value: 1},
    nodeType: {value: -1}
  }
);

;// ../../node_modules/hyperhtml/esm/objects/Intent.js
const attributes = {};
const intents = {};
const keys = [];
const Intent_hasOwnProperty = intents.hasOwnProperty;

let Intent_length = 0;

/* harmony default export */ const Intent = ({

  // used to invoke right away hyper:attributes
  attributes,

  // hyperHTML.define('intent', (object, update) => {...})
  // can be used to define a third parts update mechanism
  // when every other known mechanism failed.
  // hyper.define('user', info => info.name);
  // hyper(node)`<p>${{user}}</p>`;
  define: (intent, callback) => {
    if (intent.indexOf('-') < 0) {
      if (!(intent in intents)) {
        Intent_length = keys.push(intent);
      }
      intents[intent] = callback;
    } else {
      attributes[intent] = callback;
    }
  },

  // this method is used internally as last resort
  // to retrieve a value out of an object
  invoke: (object, callback) => {
    for (let i = 0; i < Intent_length; i++) {
      let key = keys[i];
      if (Intent_hasOwnProperty.call(object, key)) {
        return intents[key](object[key], callback);
      }
    }
  }
});

;// ../../node_modules/@ungap/is-array/esm/index.js
var esm_isArray = Array.isArray || /* istanbul ignore next */ (function (toString) {
  /* istanbul ignore next */
  var $ = toString.call([]);
  /* istanbul ignore next */
  return function isArray(object) {
    return toString.call(object) === $;
  };
}({}.toString));
/* harmony default export */ const is_array_esm = (esm_isArray);

;// ../../node_modules/@ungap/create-content/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var createContent = (function (document) {'use strict';
  var FRAGMENT = 'fragment';
  var TEMPLATE = 'template';
  var HAS_CONTENT = 'content' in create(TEMPLATE);

  var createHTML = HAS_CONTENT ?
    function (html) {
      var template = create(TEMPLATE);
      template.innerHTML = html;
      return template.content;
    } :
    function (html) {
      var content = create(FRAGMENT);
      var template = create(TEMPLATE);
      var childNodes = null;
      if (/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(html)) {
        var selector = RegExp.$1;
        template.innerHTML = '<table>' + html + '</table>';
        childNodes = template.querySelectorAll(selector);
      } else {
        template.innerHTML = html;
        childNodes = template.childNodes;
      }
      append(content, childNodes);
      return content;
    };

  return function createContent(markup, type) {
    return (type === 'svg' ? createSVG : createHTML)(markup);
  };

  function append(root, childNodes) {
    var length = childNodes.length;
    while (length--)
      root.appendChild(childNodes[0]);
  }

  function create(element) {
    return element === FRAGMENT ?
      document.createDocumentFragment() :
      document.createElementNS('http://www.w3.org/1999/xhtml', element);
  }

  // it could use createElementNS when hasNode is there
  // but this fallback is equally fast and easier to maintain
  // it is also battle tested already in all IE
  function createSVG(svg) {
    var content = create(FRAGMENT);
    var template = create('div');
    template.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg">' + svg + '</svg>';
    append(content, template.firstChild.childNodes);
    return content;
  }

}(document));
/* harmony default export */ const create_content_esm = (createContent);

;// ../../node_modules/disconnected/esm/index.js
/*! (c) Andrea Giammarchi */
function disconnected(poly) {'use strict';
  var Event = poly.Event;
  var WeakSet = poly.WeakSet;
  var notObserving = true;
  var observer = null;
  return function observe(node) {
    if (notObserving) {
      notObserving = !notObserving;
      observer = new WeakSet;
      startObserving(node.ownerDocument);
    }
    observer.add(node);
    return node;
  };
  function startObserving(document) {
    var connected = new WeakSet;
    var disconnected = new WeakSet;
    try {
      (new MutationObserver(changes)).observe(
        document,
        {subtree: true, childList: true}
      );
    }
    catch(o_O) {
      var timer = 0;
      var records = [];
      var reschedule = function (record) {
        records.push(record);
        clearTimeout(timer);
        timer = setTimeout(
          function () {
            changes(records.splice(timer = 0, records.length));
          },
          0
        );
      };
      document.addEventListener(
        'DOMNodeRemoved',
        function (event) {
          reschedule({addedNodes: [], removedNodes: [event.target]});
        },
        true
      );
      document.addEventListener(
        'DOMNodeInserted',
        function (event) {
          reschedule({addedNodes: [event.target], removedNodes: []});
        },
        true
      );
    }
    function changes(records) {
      for (var
        record,
        length = records.length,
        i = 0; i < length; i++
      ) {
        record = records[i];
        dispatchAll(record.removedNodes, 'disconnected', disconnected, connected);
        dispatchAll(record.addedNodes, 'connected', connected, disconnected);
      }
    }
    function dispatchAll(nodes, type, wsin, wsout) {
      for (var
        node,
        event = new Event(type),
        length = nodes.length,
        i = 0; i < length;
        (node = nodes[i++]).nodeType === 1 &&
        dispatchTarget(node, event, type, wsin, wsout)
      );
    }
    function dispatchTarget(node, event, type, wsin, wsout) {
      if (observer.has(node) && !wsin.has(node)) {
        wsout.delete(node);
        wsin.add(node);
        node.dispatchEvent(event);
        /*
        // The event is not bubbling (perf reason: should it?),
        // hence there's no way to know if
        // stop/Immediate/Propagation() was called.
        // Should DOM Level 0 work at all?
        // I say it's a YAGNI case for the time being,
        // and easy to implement in user-land.
        if (!event.cancelBubble) {
          var fn = node['on' + type];
          if (fn)
            fn.call(node, event);
        }
        */
      }
      for (var
        // apparently is node.children || IE11 ... ^_^;;
        // https://github.com/WebReflection/disconnected/issues/1
        children = node.children || [],
        length = children.length,
        i = 0; i < length;
        dispatchTarget(children[i++], event, type, wsin, wsout)
      );
    }
  }
}
/* harmony default export */ const disconnected_esm = (disconnected);

;// ../../node_modules/@ungap/import-node/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var importNode = (function (
  document,
  appendChild,
  cloneNode,
  createTextNode,
  importNode
) {
  var native = importNode in document;
  // IE 11 has problems with cloning templates:
  // it "forgets" empty childNodes. This feature-detects that.
  var fragment = document.createDocumentFragment();
  fragment[appendChild](document[createTextNode]('g'));
  fragment[appendChild](document[createTextNode](''));
  /* istanbul ignore next */
  var content = native ?
    document[importNode](fragment, true) :
    fragment[cloneNode](true);
  return content.childNodes.length < 2 ?
    function importNode(node, deep) {
      var clone = node[cloneNode]();
      for (var
        /* istanbul ignore next */
        childNodes = node.childNodes || [],
        length = childNodes.length,
        i = 0; deep && i < length; i++
      ) {
        clone[appendChild](importNode(childNodes[i], deep));
      }
      return clone;
    } :
    /* istanbul ignore next */
    (native ?
      document[importNode] :
      function (node, deep) {
        return node[cloneNode](!!deep);
      }
    );
}(
  document,
  'appendChild',
  'cloneNode',
  'createTextNode',
  'importNode'
));
/* harmony default export */ const import_node_esm = (importNode);

;// ../../node_modules/@ungap/trim/esm/index.js
var trim = ''.trim || /* istanbul ignore next */ function () {
  return String(this).replace(/^\s+|\s+/g, '');
};
/* harmony default export */ const trim_esm = (trim);

;// ../../node_modules/domconstants/esm/index.js
/*! (c) Andrea Giammarchi - ISC */

// Custom
var UID = '-' + Math.random().toFixed(6) + '%';
//                           Edge issue!

var UID_IE = false;

try {
  if (!(function (template, content, tabindex) {
    return content in template && (
      (template.innerHTML = '<p ' + tabindex + '="' + UID + '"></p>'),
      template[content].childNodes[0].getAttribute(tabindex) == UID
    );
  }(document.createElement('template'), 'content', 'tabindex'))) {
    UID = '_dt: ' + UID.slice(1, -1) + ';';
    UID_IE = true;
  }
} catch(meh) {}

var UIDC = '<!--' + UID + '-->';

// DOM
var COMMENT_NODE = 8;
var DOCUMENT_FRAGMENT_NODE = 11;
var ELEMENT_NODE = 1;
var TEXT_NODE = 3;

var SHOULD_USE_TEXT_CONTENT = /^(?:plaintext|script|style|textarea|title|xmp)$/i;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;



;// ../../node_modules/domsanitizer/esm/index.js
/*! (c) Andrea Giammarchi - ISC */



/* harmony default export */ function domsanitizer_esm(template) {
  return template.join(UIDC)
          .replace(selfClosing, fullClosing)
          .replace(attrSeeker, attrReplacer);
}

var spaces = ' \\f\\n\\r\\t';
var almostEverything = '[^' + spaces + '\\/>"\'=]+';
var attrName = '[' + spaces + ']+' + almostEverything;
var tagName = '<([A-Za-z]+[A-Za-z0-9:._-]*)((?:';
var attrPartials = '(?:\\s*=\\s*(?:\'[^\']*?\'|"[^"]*?"|<[^>]*?>|' + almostEverything.replace('\\/', '') + '))?)';

var attrSeeker = new RegExp(tagName + attrName + attrPartials + '+)([' + spaces + ']*/?>)', 'g');
var selfClosing = new RegExp(tagName + attrName + attrPartials + '*)([' + spaces + ']*/>)', 'g');
var findAttributes = new RegExp('(' + attrName + '\\s*=\\s*)([\'"]?)' + UIDC + '\\2', 'gi');

function attrReplacer($0, $1, $2, $3) {
  return '<' + $1 + $2.replace(findAttributes, replaceAttributes) + $3;
}

function replaceAttributes($0, $1, $2) {
  return $1 + ($2 || '"') + UID + ($2 || '"');
}

function fullClosing($0, $1, $2) {
  return VOID_ELEMENTS.test($1) ? $0 : ('<' + $1 + $2 + '></' + $1 + '>');
}

;// ../../node_modules/umap/esm/index.js
/* harmony default export */ const umap_esm = (_ => ({
  // About: get: _.get.bind(_)
  // It looks like WebKit/Safari didn't optimize bind at all,
  // so that using bind slows it down by 60%.
  // Firefox and Chrome are just fine in both cases,
  // so let's use the approach that works fast everywhere 👍
  get: key => _.get(key),
  set: (key, value) => (_.set(key, value), value)
}));

;// ../../node_modules/domtagger/esm/walker.js






/* istanbul ignore next */
var normalizeAttributes = UID_IE ?
  function (attributes, parts) {
    var html = parts.join(' ');
    return parts.slice.call(attributes, 0).sort(function (left, right) {
      return html.indexOf(left.name) <= html.indexOf(right.name) ? -1 : 1;
    });
  } :
  function (attributes, parts) {
    return parts.slice.call(attributes, 0);
  }
;

function find(node, path) {
  var length = path.length;
  var i = 0;
  while (i < length)
    node = node.childNodes[path[i++]];
  return node;
}

function parse(node, holes, parts, path) {
  var childNodes = node.childNodes;
  var length = childNodes.length;
  var i = 0;
  while (i < length) {
    var child = childNodes[i];
    switch (child.nodeType) {
      case ELEMENT_NODE:
        var childPath = path.concat(i);
        parseAttributes(child, holes, parts, childPath);
        parse(child, holes, parts, childPath);
        break;
      case COMMENT_NODE:
        var textContent = child.textContent;
        if (textContent === UID) {
          parts.shift();
          holes.push(
            // basicHTML or other non standard engines
            // might end up having comments in nodes
            // where they shouldn't, hence this check.
            SHOULD_USE_TEXT_CONTENT.test(node.nodeName) ?
              Text(node, path) :
              Any(child, path.concat(i))
          );
        } else {
          switch (textContent.slice(0, 2)) {
            case '/*':
              if (textContent.slice(-2) !== '*/')
                break;
            case '\uD83D\uDC7B': // ghost
              node.removeChild(child);
              i--;
              length--;
          }
        }
        break;
      case TEXT_NODE:
        // the following ignore is actually covered by browsers
        // only basicHTML ends up on previous COMMENT_NODE case
        // instead of TEXT_NODE because it knows nothing about
        // special style or textarea behavior
        /* istanbul ignore if */
        if (
          SHOULD_USE_TEXT_CONTENT.test(node.nodeName) &&
          trim_esm.call(child.textContent) === UIDC
        ) {
          parts.shift();
          holes.push(Text(node, path));
        }
        break;
    }
    i++;
  }
}

function parseAttributes(node, holes, parts, path) {
  var attributes = node.attributes;
  var cache = [];
  var remove = [];
  var array = normalizeAttributes(attributes, parts);
  var length = array.length;
  var i = 0;
  while (i < length) {
    var attribute = array[i++];
    var direct = attribute.value === UID;
    var sparse;
    if (direct || 1 < (sparse = attribute.value.split(UIDC)).length) {
      var name = attribute.name;
      // the following ignore is covered by IE
      // and the IE9 double viewBox test
      /* istanbul ignore else */
      if (cache.indexOf(name) < 0) {
        cache.push(name);
        var realName = parts.shift().replace(
          direct ?
            /^(?:|[\S\s]*?\s)(\S+?)\s*=\s*('|")?$/ :
            new RegExp(
              '^(?:|[\\S\\s]*?\\s)(' + name + ')\\s*=\\s*(\'|")[\\S\\s]*',
              'i'
            ),
            '$1'
        );
        var value = attributes[realName] ||
                      // the following ignore is covered by browsers
                      // while basicHTML is already case-sensitive
                      /* istanbul ignore next */
                      attributes[realName.toLowerCase()];
        if (direct)
          holes.push(Attr(value, path, realName, null));
        else {
          var skip = sparse.length - 2;
          while (skip--)
            parts.shift();
          holes.push(Attr(value, path, realName, sparse));
        }
      }
      remove.push(attribute);
    }
  }
  length = remove.length;
  i = 0;

  /* istanbul ignore next */
  var cleanValue = 0 < length && UID_IE && !('ownerSVGElement' in node);
  while (i < length) {
    // Edge HTML bug #16878726
    var attr = remove[i++];
    // IE/Edge bug lighterhtml#63 - clean the value or it'll persist
    /* istanbul ignore next */
    if (cleanValue)
      attr.value = '';
    // IE/Edge bug lighterhtml#64 - don't use removeAttributeNode
    node.removeAttribute(attr.name);
  }

  // This is a very specific Firefox/Safari issue
  // but since it should be a not so common pattern,
  // it's probably worth patching regardless.
  // Basically, scripts created through strings are death.
  // You need to create fresh new scripts instead.
  // TODO: is there any other node that needs such nonsense?
  var nodeName = node.nodeName;
  if (/^script$/i.test(nodeName)) {
    // this used to be like that
    // var script = createElement(node, nodeName);
    // then Edge arrived and decided that scripts created
    // through template documents aren't worth executing
    // so it became this ... hopefully it won't hurt in the wild
    var script = document.createElement(nodeName);
    length = attributes.length;
    i = 0;
    while (i < length)
      script.setAttributeNode(attributes[i++].cloneNode(true));
    script.textContent = node.textContent;
    node.parentNode.replaceChild(script, node);
  }
}

function Any(node, path) {
  return {
    type: 'any',
    node: node,
    path: path
  };
}

function Attr(node, path, name, sparse) {
  return {
    type: 'attr',
    node: node,
    path: path,
    name: name,
    sparse: sparse
  };
}

function Text(node, path) {
  return {
    type: 'text',
    node: node,
    path: path
  };
}

;// ../../node_modules/domtagger/esm/index.js
// globals


// utils






// local


// the domtagger 🎉
/* harmony default export */ const domtagger_esm = (domtagger);

var parsed = umap_esm(new esm);

function createInfo(options, template) {
  var markup = (options.convert || domsanitizer_esm)(template);
  var transform = options.transform;
  if (transform)
    markup = transform(markup);
  var content = create_content_esm(markup, options.type);
  cleanContent(content);
  var holes = [];
  parse(content, holes, template.slice(0), []);
  return {
    content: content,
    updates: function (content) {
      var updates = [];
      var len = holes.length;
      var i = 0;
      var off = 0;
      while (i < len) {
        var info = holes[i++];
        var node = find(content, info.path);
        switch (info.type) {
          case 'any':
            updates.push({fn: options.any(node, []), sparse: false});
            break;
          case 'attr':
            var sparse = info.sparse;
            var fn = options.attribute(node, info.name, info.node);
            if (sparse === null)
              updates.push({fn: fn, sparse: false});
            else {
              off += sparse.length - 2;
              updates.push({fn: fn, sparse: true, values: sparse});
            }
            break;
          case 'text':
            updates.push({fn: options.text(node), sparse: false});
            node.textContent = '';
            break;
        }
      }
      len += off;
      return function () {
        var length = arguments.length;
        if (len !== (length - 1)) {
          throw new Error(
            (length - 1) + ' values instead of ' + len + '\n' +
            template.join('${value}')
          );
        }
        var i = 1;
        var off = 1;
        while (i < length) {
          var update = updates[i - off];
          if (update.sparse) {
            var values = update.values;
            var value = values[0];
            var j = 1;
            var l = values.length;
            off += l - 2;
            while (j < l)
              value += arguments[i++] + values[j++];
            update.fn(value);
          }
          else
            update.fn(arguments[i++]);
        }
        return content;
      };
    }
  };
}

function createDetails(options, template) {
  var info = parsed.get(template) || parsed.set(template, createInfo(options, template));
  return info.updates(import_node_esm.call(document, info.content, true));
}

var empty = [];
function domtagger(options) {
  var previous = empty;
  var updates = cleanContent;
  return function (template) {
    if (previous !== template)
      updates = createDetails(options, (previous = template));
    return updates.apply(null, arguments);
  };
}

function cleanContent(fragment) {
  var childNodes = fragment.childNodes;
  var i = childNodes.length;
  while (i--) {
    var child = childNodes[i];
    if (
      child.nodeType !== 1 &&
      trim_esm.call(child.textContent).length === 0
    ) {
      fragment.removeChild(child);
    }
  }
}

;// ../../node_modules/hyperhtml-style/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var hyperStyle = (function (){'use strict';
  // from https://github.com/developit/preact/blob/33fc697ac11762a1cb6e71e9847670d047af7ce5/src/varants.js
  var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
  var hyphen = /([^A-Z])([A-Z]+)/g;
  return function hyperStyle(node, original) {
    return 'ownerSVGElement' in node ? svg(node, original) : update(node.style, false);
  };
  function ized($0, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  }
  function svg(node, original) {
    var style;
    if (original)
      style = original.cloneNode(true);
    else {
      node.setAttribute('style', '--hyper:style;');
      style = node.getAttributeNode('style');
    }
    style.value = '';
    node.setAttributeNode(style);
    return update(style, true);
  }
  function toStyle(object) {
    var key, css = [];
    for (key in object)
      css.push(key.replace(hyphen, ized), ':', object[key], ';');
    return css.join('');
  }
  function update(style, isSVG) {
    var oldType, oldValue;
    return function (newValue) {
      var info, key, styleValue, value;
      switch (typeof newValue) {
        case 'object':
          if (newValue) {
            if (oldType === 'object') {
              if (!isSVG) {
                if (oldValue !== newValue) {
                  for (key in oldValue) {
                    if (!(key in newValue)) {
                      style[key] = '';
                    }
                  }
                }
              }
            } else {
              if (isSVG)
                style.value = '';
              else
                style.cssText = '';
            }
            info = isSVG ? {} : style;
            for (key in newValue) {
              value = newValue[key];
              styleValue = typeof value === 'number' &&
                                  !IS_NON_DIMENSIONAL.test(key) ?
                                  (value + 'px') : value;
              if (!isSVG && /^--/.test(key))
                info.setProperty(key, styleValue);
              else
                info[key] = styleValue;
            }
            oldType = 'object';
            if (isSVG)
              style.value = toStyle((oldValue = info));
            else
              oldValue = newValue;
            break;
          }
        default:
          if (oldValue != newValue) {
            oldType = 'string';
            oldValue = newValue;
            if (isSVG)
              style.value = newValue || '';
            else
              style.cssText = newValue || '';
          }
          break;
      }
    };
  }
}());
/* harmony default export */ const hyperhtml_style_esm = (hyperStyle);

;// ../../node_modules/hyperhtml-wire/esm/index.js
/*! (c) Andrea Giammarchi - ISC */
var Wire = (function (slice, proto) {

  proto = Wire.prototype;

  proto.ELEMENT_NODE = 1;
  proto.nodeType = 111;

  proto.remove = function (keepFirst) {
    var childNodes = this.childNodes;
    var first = this.firstChild;
    var last = this.lastChild;
    this._ = null;
    if (keepFirst && childNodes.length === 2) {
      last.parentNode.removeChild(last);
    } else {
      var range = this.ownerDocument.createRange();
      range.setStartBefore(keepFirst ? childNodes[1] : first);
      range.setEndAfter(last);
      range.deleteContents();
    }
    return first;
  };

  proto.valueOf = function (forceAppend) {
    var fragment = this._;
    var noFragment = fragment == null;
    if (noFragment)
      fragment = (this._ = this.ownerDocument.createDocumentFragment());
    if (noFragment || forceAppend) {
      for (var n = this.childNodes, i = 0, l = n.length; i < l; i++)
        fragment.appendChild(n[i]);
    }
    return fragment;
  };

  return Wire;

  function Wire(childNodes) {
    var nodes = (this.childNodes = slice.call(childNodes, 0));
    this.firstChild = nodes[0];
    this.lastChild = nodes[nodes.length - 1];
    this.ownerDocument = nodes[0].ownerDocument;
    this._ = null;
  }

}([].slice));
/* harmony default export */ const hyperhtml_wire_esm = (Wire);

;// ../../node_modules/hyperhtml/esm/shared/constants.js
// Node.CONSTANTS
// 'cause some engine has no global Node defined
// (i.e. Node, NativeScript, basicHTML ... )
const constants_ELEMENT_NODE = 1;
const constants_DOCUMENT_FRAGMENT_NODE = 11;

// SVG related constants
const OWNER_SVG_ELEMENT = 'ownerSVGElement';

// Custom Elements / MutationObserver constants
const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;

;// ../../node_modules/hyperhtml/esm/objects/Updates.js
















const componentType = Component.prototype.nodeType;
const wireType = hyperhtml_wire_esm.prototype.nodeType;

const observe = disconnected_esm({Event: custom_event_esm, WeakSet: essential_weakset_esm});



// returns an intent to explicitly inject content as html
const asHTML = html => ({html});

// returns nodes from wires and components
const asNode = (item, i) => {
  switch (item.nodeType) {
    case wireType:
      // in the Wire case, the content can be
      // removed, post-pended, inserted, or pre-pended and
      // all these cases are handled by domdiff already
      /* istanbul ignore next */
      return (1 / i) < 0 ?
        (i ? item.remove(true) : item.lastChild) :
        (i ? item.valueOf(true) : item.firstChild);
    case componentType:
      return asNode(item.render(), i);
    default:
      return item;
  }
}

// returns true if domdiff can handle the value
const canDiff = value => 'ELEMENT_NODE' in value;

// borrowed from uhandlers
// https://github.com/WebReflection/uhandlers
const booleanSetter = (node, key, oldValue) => newValue => {
  if (oldValue !== !!newValue) {
    if ((oldValue = !!newValue))
      node.setAttribute(key, '');
    else
      node.removeAttribute(key);
  }
};

const hyperSetter = (node, name, svg) => svg ?
  value => {
    try {
      node[name] = value;
    }
    catch (nope) {
      node.setAttribute(name, value);
    }
  } :
  value => {
    node[name] = value;
  };

// when a Promise is used as interpolation value
// its result must be parsed once resolved.
// This callback is in charge of understanding what to do
// with a returned value once the promise is resolved.
const invokeAtDistance = (value, callback) => {
  callback(value.placeholder);
  if ('text' in value) {
    Promise.resolve(value.text).then(String).then(callback);
  } else if ('any' in value) {
    Promise.resolve(value.any).then(callback);
  } else if ('html' in value) {
    Promise.resolve(value.html).then(asHTML).then(callback);
  } else {
    Promise.resolve(Intent.invoke(value, callback)).then(callback);
  }
};

// quick and dirty way to check for Promise/ish values
const isPromise_ish = value => value != null && 'then' in value;

// list of attributes that should not be directly assigned
const readOnly = /^(?:form|list)$/i;

// reused every slice time
const Updates_slice = [].slice;

// simplifies text node creation
const Updates_text = (node, text) => node.ownerDocument.createTextNode(text);

function Tagger(type) {
  this.type = type;
  return domtagger_esm(this);
}

Tagger.prototype = {

  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    const isSVG = OWNER_SVG_ELEMENT in node;
    let oldValue;
    // if the attribute is the style one
    // handle it differently from others
    if (name === 'style')
      return hyperhtml_style_esm(node, original, isSVG);
    // direct accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '.')
      return hyperSetter(node, name.slice(1), isSVG);
    // boolean accessors for <input .value=${...}> and friends
    else if (name.slice(0, 1) === '?')
      return booleanSetter(node, name.slice(1));
    // the name is an event one,
    // add/remove event listeners accordingly
    else if (/^on/.test(name)) {
      let type = name.slice(2);
      if (type === CONNECTED || type === DISCONNECTED) {
        observe(node);
      }
      else if (name.toLowerCase()
        in node) {
        type = type.toLowerCase();
      }
      return newValue => {
        if (oldValue !== newValue) {
          if (oldValue)
            node.removeEventListener(type, oldValue, false);
          oldValue = newValue;
          if (newValue)
            node.addEventListener(type, newValue, false);
        }
      };
    }
    // the attribute is special ('value' in input)
    // and it's not SVG *or* the name is exactly data,
    // in this case assign the value directly
    else if (
      name === 'data' ||
      (!isSVG && name in node && !readOnly.test(name))
    ) {
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (node[name] !== newValue && newValue == null) {
            // cleanup on null to avoid silly IE/Edge bug
            node[name] = '';
            node.removeAttribute(name);
          }
          else
            node[name] = newValue;
        }
      };
    }
    else if (name in Intent.attributes) {
      oldValue;
      return any => {
        const newValue = Intent.attributes[name](node, any);
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (newValue == null)
            node.removeAttribute(name);
          else
            node.setAttribute(name, newValue);
        }
      };
    }
    // in every other case, use the attribute node as it is
    // update only the value, set it as node only when/if needed
    else {
      let owner = false;
      const attribute = original.cloneNode(true);
      return newValue => {
        if (oldValue !== newValue) {
          oldValue = newValue;
          if (attribute.value !== newValue) {
            if (newValue == null) {
              if (owner) {
                owner = false;
                node.removeAttributeNode(attribute);
              }
              attribute.value = newValue;
            } else {
              attribute.value = newValue;
              if (!owner) {
                owner = true;
                node.setAttributeNode(attribute);
              }
            }
          }
        }
      };
    }
  },

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a component, update the content by rendering it
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const diffOptions = {node: asNode, before: node};
    const nodeType = OWNER_SVG_ELEMENT in node ? /* istanbul ignore next */ 'svg' : 'html';
    let fastPath = false;
    let oldValue;
    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              [Updates_text(node, value)],
              diffOptions
            );
          }
          break;
        case 'function':
          anyContent(value(node));
          break;
        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              [],
              diffOptions
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if (is_array_esm(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = domdiff_esm(
                  node.parentNode,
                  childNodes,
                  [],
                  diffOptions
                );
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent({html: value});
                  break;
                case 'object':
                  if (is_array_esm(value[0])) {
                    value = value.concat.apply([], value);
                  }
                  if (isPromise_ish(value[0])) {
                    Promise.all(value).then(anyContent);
                    break;
                  }
                default:
                  childNodes = domdiff_esm(
                    node.parentNode,
                    childNodes,
                    value,
                    diffOptions
                  );
                  break;
              }
            }
          } else if (canDiff(value)) {
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              value.nodeType === constants_DOCUMENT_FRAGMENT_NODE ?
                Updates_slice.call(value.childNodes) :
                [value],
              diffOptions
            );
          } else if (isPromise_ish(value)) {
            value.then(anyContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, anyContent);
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = domdiff_esm(
              node.parentNode,
              childNodes,
              Updates_slice.call(
                create_content_esm(
                  [].concat(value.html).join(''),
                  nodeType
                ).childNodes
              ),
              diffOptions
            );
          } else if ('length' in value) {
            anyContent(Updates_slice.call(value));
          } else {
            anyContent(Intent.invoke(value, anyContent));
          }
          break;
      }
    };
    return anyContent;
  },

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;
    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;
        if (type === 'object' && value) {
          if (isPromise_ish(value)) {
            value.then(textContent);
          } else if ('placeholder' in value) {
            invokeAtDistance(value, textContent);
          } else if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(Updates_slice.call(value).join(''));
          } else {
            textContent(Intent.invoke(value, textContent));
          }
        } else if (type === 'function') {
          textContent(value(node));
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };
    return textContent;
  }
};

;// ../../node_modules/@ungap/template-literal/esm/index.js


var isNoOp = typeof document !== 'object';

var templateLiteral = function (tl) {
  var RAW = 'raw';
  var isBroken = function (UA) {
    return /(Firefox|Safari)\/(\d+)/.test(UA) &&
          !/(Chrom[eium]+|Android)\/(\d+)/.test(UA);
  };
  var broken = isBroken((document.defaultView.navigator || {}).userAgent);
  var FTS = !(RAW in tl) ||
            tl.propertyIsEnumerable(RAW) ||
            !Object.isFrozen(tl[RAW]);
  if (broken || FTS) {
    var forever = {};
    var foreverCache = function (tl) {
      for (var key = '.', i = 0; i < tl.length; i++)
        key += tl[i].length + '.' + tl[i];
      return forever[key] || (forever[key] = tl);
    };
    // Fallback TypeScript shenanigans
    if (FTS)
      templateLiteral = foreverCache;
    // try fast path for other browsers:
    // store the template as WeakMap key
    // and forever cache it only when it's not there.
    // this way performance is still optimal,
    // penalized only when there are GC issues
    else {
      var wm = new esm;
      var set = function (tl, unique) {
        wm.set(tl, unique);
        return unique;
      };
      templateLiteral = function (tl) {
        return wm.get(tl) || set(tl, foreverCache(tl));
      };
    }
  } else {
    isNoOp = true;
  }
  return TL(tl);
};

/* harmony default export */ const template_literal_esm = (TL);

function TL(tl) {
  return isNoOp ? tl : templateLiteral(tl);
}

;// ../../node_modules/@ungap/template-tag-arguments/esm/index.js


/* harmony default export */ function template_tag_arguments_esm(template) {
  var length = arguments.length;
  var args = [template_literal_esm(template)];
  var i = 1;
  while (i < length)
    args.push(arguments[i++]);
  return args;
};

/**
 * best benchmark goes here
 * https://jsperf.com/tta-bench
 * I should probably have an @ungap/template-literal-es too
export default (...args) => {
  args[0] = unique(args[0]);
  return args;
};
 */
;// ../../node_modules/hyperhtml/esm/hyper/wire.js







// all wires used per each context
const wires = new esm;

// A wire is a callback used as tag function
// to lazily relate a generic object to a template literal.
// hyper.wire(user)`<div id=user>${user.name}</div>`; => the div#user
// This provides the ability to have a unique DOM structure
// related to a unique JS object through a reusable template literal.
// A wire can specify a type, as svg or html, and also an id
// via html:id or :id convention. Such :id allows same JS objects
// to be associated to different DOM structures accordingly with
// the used template literal without losing previously rendered parts.
const wire = (obj, type) => obj == null ?
  content(type || 'html') :
  weakly(obj, type || 'html');

// A wire content is a virtual reference to one or more nodes.
// It's represented by either a DOM node, or an Array.
// In both cases, the wire content role is to simply update
// all nodes through the list of related callbacks.
// In few words, a wire content is like an invisible parent node
// in charge of updating its content like a bound element would do.
const content = type => {
  let wire, tagger, template;
  return function () {
    const args = template_tag_arguments_esm.apply(null, arguments);
    if (template !== args[0]) {
      template = args[0];
      tagger = new Tagger(type);
      wire = wireContent(tagger.apply(tagger, args));
    } else {
      tagger.apply(tagger, args);
    }
    return wire;
  };
};

// wires are weakly created through objects.
// Each object can have multiple wires associated
// and this is thanks to the type + :id feature.
const weakly = (obj, type) => {
  const i = type.indexOf(':');
  let wire = wires.get(obj);
  let id = type;
  if (-1 < i) {
    id = type.slice(i + 1);
    type = type.slice(0, i) || 'html';
  }
  if (!wire)
    wires.set(obj, wire = {});
  return wire[id] || (wire[id] = content(type));
};

// A document fragment loses its nodes 
// as soon as it is appended into another node.
// This has the undesired effect of losing wired content
// on a second render call, because (by then) the fragment would be empty:
// no longer providing access to those sub-nodes that ultimately need to
// stay associated with the original interpolation.
// To prevent hyperHTML from forgetting about a fragment's sub-nodes,
// fragments are instead returned as an Array of nodes or, if there's only one entry,
// as a single referenced node which, unlike fragments, will indeed persist
// wire content throughout multiple renderings.
// The initial fragment, at this point, would be used as unique reference to this
// array of nodes or to this single referenced node.
const wireContent = node => {
  const childNodes = node.childNodes;
  const {length} = childNodes;
  return length === 1 ?
    childNodes[0] :
    (length ? new hyperhtml_wire_esm(childNodes) : node);
};


/* harmony default export */ const hyper_wire = (wire);

;// ../../node_modules/hyperhtml/esm/hyper/render.js






// a weak collection of contexts that
// are already known to hyperHTML
const bewitched = new esm;

// better known as hyper.bind(node), the render is
// the main tag function in charge of fully upgrading
// or simply updating, contexts used as hyperHTML targets.
// The `this` context is either a regular DOM node or a fragment.
function render() {
  const wicked = bewitched.get(this);
  const args = template_tag_arguments_esm.apply(null, arguments);
  if (wicked && wicked.template === args[0]) {
    wicked.tagger.apply(null, args);
  } else {
    upgrade.apply(this, args);
  }
  return this;
}

// an upgrade is in charge of collecting template info,
// parse it once, if unknown, to map all interpolations
// as single DOM callbacks, relate such template
// to the current context, and render it after cleaning the context up
function upgrade(template) {
  const type = OWNER_SVG_ELEMENT in this ? 'svg' : 'html';
  const tagger = new Tagger(type);
  bewitched.set(this, {tagger, template: template});
  this.textContent = '';
  this.appendChild(tagger.apply(null, arguments));
}

/* harmony default export */ const hyper_render = (render);

;// ../../node_modules/hyperhtml/esm/index.js
/*! (c) Andrea Giammarchi (ISC) */










// all functions are self bound to the right context
// you can do the following
// const {bind, wire} = hyperHTML;
// and use them right away: bind(node)`hello!`;
const bind = context => hyper_render.bind(context);
const esm_define = Intent.define;
const tagger = Tagger.prototype;

hyper.Component = Component;
hyper.bind = bind;
hyper.define = esm_define;
hyper.diff = domdiff_esm;
hyper.hyper = hyper;
hyper.observe = observe;
hyper.tagger = tagger;
hyper.wire = hyper_wire;

// exported as shared utils
// for projects based on hyperHTML
// that don't necessarily need upfront polyfills
// i.e. those still targeting IE
hyper._ = {
  WeakMap: esm,
  WeakSet: essential_weakset_esm
};

// the wire content is the lazy defined
// html or svg property of each hyper.Component
setup(content);

// everything is exported directly or through the
// hyperHTML callback, when used as top level script


// by default, hyperHTML is a smart function
// that "magically" understands what's the best
// thing to do with passed arguments
function hyper(HTML) {
  return arguments.length < 2 ?
    (HTML == null ?
      content('html') :
      (typeof HTML === 'string' ?
        hyper.wire(null, HTML) :
        ('raw' in HTML ?
          content('html')(HTML) :
          ('nodeType' in HTML ?
            hyper.bind(HTML) :
            weakly(HTML, 'html')
          )
        )
      )) :
    ('raw' in HTML ?
      content('html') : hyper.wire
    ).apply(null, arguments);
}

;// ../../node_modules/hyperhtml-element/esm/index.js
/*! (C) 2017-2018 Andrea Giammarchi - ISC Style License */



// utils to deal with custom elements builtin extends
const ATTRIBUTE_CHANGED_CALLBACK = 'attributeChangedCallback';
const O = Object;
const classes = [];
const defineProperty = O.defineProperty;
const getOwnPropertyDescriptor = O.getOwnPropertyDescriptor;
const getOwnPropertyNames = O.getOwnPropertyNames;
/* istanbul ignore next */
const getOwnPropertySymbols = O.getOwnPropertySymbols || (() => []);
/* istanbul ignore next */
const getPrototypeOf = O.getPrototypeOf || (o => o.__proto__);
/* istanbul ignore next */
const ownKeys = typeof Reflect === 'object' && Reflect.ownKeys ||
                (o => getOwnPropertyNames(o).concat(getOwnPropertySymbols(o)));
/* istanbul ignore next */
const setPrototypeOf = O.setPrototypeOf ||
                      ((o, p) => (o.__proto__ = p, o));
/* istanbul ignore stop */
const camel = name => name.replace(/-([a-z])/g, ($0, $1) => $1.toUpperCase());
const {attachShadow} = HTMLElement.prototype;
const sr = new WeakMap;

class HyperHTMLElement extends HTMLElement {

  // define a custom-element in the CustomElementsRegistry
  // class MyEl extends HyperHTMLElement {}
  // MyEl.define('my-el');
  static define(name, options) {
    const Class = this;
    const proto = Class.prototype;

    const onChanged = proto[ATTRIBUTE_CHANGED_CALLBACK];
    const hasChange = !!onChanged;

    // Class.booleanAttributes
    // -----------------------------------------------
    // attributes defined as boolean will have
    // an either available or not available attribute
    // regardless of the value.
    // All falsy values, or "false", mean attribute removed
    // while truthy values will be set as is.
    // Boolean attributes are also automatically observed.
    const booleanAttributes = Class.booleanAttributes || [];
    booleanAttributes.forEach(attribute => {
      const name = camel(attribute);
      if (!(name in proto)) defineProperty(
        proto,
        name,
        {
          configurable: true,
          get() {
            return this.hasAttribute(attribute);
          },
          set(value) {
            if (!value || value === 'false')
              this.removeAttribute(attribute);
            else
              this.setAttribute(attribute, '');
          }
        }
      );
    });

    // Class.observedAttributes
    // -------------------------------------------------------
    // HyperHTMLElement will directly reflect get/setAttribute
    // operation once these attributes are used, example:
    // el.observed = 123;
    // will automatically do
    // el.setAttribute('observed', 123);
    // triggering also the attributeChangedCallback
    const observedAttributes = (Class.observedAttributes || []).filter(
      attribute => booleanAttributes.indexOf(attribute) < 0
    );
    observedAttributes.forEach(attribute => {
      // it is possible to redefine the behavior at any time
      // simply overwriting get prop() and set prop(value)
      const name = camel(attribute);
      if (!(name in proto)) defineProperty(
        proto,
        name,
        {
          configurable: true,
          get() {
            return this.getAttribute(attribute);
          },
          set(value) {
            if (value == null)
              this.removeAttribute(attribute);
            else
              this.setAttribute(attribute, value);
          }
        }
      );
    });

    // if these are defined, overwrite the observedAttributes getter
    // to include also booleanAttributes
    const attributes = booleanAttributes.concat(observedAttributes);
    if (attributes.length)
      defineProperty(Class, 'observedAttributes', {
        get() { return attributes; }
      });

    // created() {}
    // ---------------------------------
    // an initializer method that grants
    // the node is fully known to the browser.
    // It is ensured to run either after DOMContentLoaded,
    // or once there is a next sibling (stream-friendly) so that
    // you have full access to element attributes and/or childNodes.
    const created = proto.created || function () {
      this.render();
    };

    // used to ensure create() is called once and once only
    defineProperty(
      proto,
      '_init$',
      {
        configurable: true,
        writable: true,
        value: true
      }
    );

    defineProperty(
      proto,
      ATTRIBUTE_CHANGED_CALLBACK,
      {
        configurable: true,
        value: function aCC(name, prev, curr) {
          if (this._init$) {
            checkReady.call(this, created, attributes, booleanAttributes);
            if (this._init$)
              return this._init$$.push(aCC.bind(this, name, prev, curr));
          }
          // ensure setting same value twice
          // won't trigger twice attributeChangedCallback
          if (hasChange && prev !== curr) {
            onChanged.apply(this, arguments);
          }
        }
      }
    );

    const onConnected = proto.connectedCallback;
    const hasConnect = !!onConnected;
    defineProperty(
      proto,
      'connectedCallback',
      {
        configurable: true,
        value: function cC() {
          if (this._init$) {
            checkReady.call(this, created, attributes, booleanAttributes);
            if (this._init$)
              return this._init$$.push(cC.bind(this));
          }
          if (hasConnect) {
            onConnected.apply(this, arguments);
          }
        }
      }
    );

    // define lazily all handlers
    // class { handleClick() { ... }
    // render() { `<a onclick=${this.handleClick}>` } }
    getOwnPropertyNames(proto).forEach(key => {
      if (/^handle[A-Z]/.test(key)) {
        const _key$ = '_' + key + '$';
        const method = proto[key];
        defineProperty(proto, key, {
          configurable: true,
          get() {
            return  this[_key$] ||
                    (this[_key$] = method.bind(this));
          }
        });
      }
    });

    // whenever you want to directly use the component itself
    // as EventListener, you can pass it directly.
    // https://medium.com/@WebReflection/dom-handleevent-a-cross-platform-standard-since-year-2000-5bf17287fd38
    //  class Reactive extends HyperHTMLElement {
    //    oninput(e) { console.log(this, 'changed', e.target.value); }
    //    render() { this.html`<input oninput="${this}">`; }
    //  }
    if (!('handleEvent' in proto)) {
      defineProperty(
        proto,
        'handleEvent',
        {
          configurable: true,
          value(event) {
            this[
              (event.currentTarget.dataset || {}).call ||
              ('on' + event.type)
            ](event);
          }
        }
      );
    }

    if (options && options.extends) {
      const Native = document.createElement(options.extends).constructor;
      const Intermediate = class extends Native {};
      const ckeys = ['length', 'name', 'arguments', 'caller', 'prototype'];
      const pkeys = [];
      let Super = null;
      let BaseClass = Class;
      while (Super = getPrototypeOf(BaseClass)) {
        [
          {target: Intermediate, base: Super, keys: ckeys},
          {target: Intermediate.prototype, base: Super.prototype, keys: pkeys}
        ]
        .forEach(({target, base, keys}) => {
          ownKeys(base)
            .filter(key => keys.indexOf(key) < 0)
            .forEach((key) => {
              keys.push(key);
              defineProperty(
                target,
                key,
                getOwnPropertyDescriptor(base, key)
              );
            });
        });

        BaseClass = Super;
        if (Super === HyperHTMLElement)
          break;
      }
      setPrototypeOf(Class, Intermediate);
      setPrototypeOf(proto, Intermediate.prototype);
      customElements.define(name, Class, options);
    } else {
      customElements.define(name, Class);
    }
    classes.push(Class);
    return Class;
  }

  // weakly relate the shadowRoot for refs usage
  attachShadow() {
    const shadowRoot = attachShadow.apply(this, arguments);
    sr.set(this, shadowRoot);
    return shadowRoot;
  }

  // returns elements by ref
  get refs() {
    const value = {};
    if ('_html$' in this) {
      const all = (sr.get(this) || this).querySelectorAll('[ref]');
      for (let {length} = all, i = 0; i < length; i++) {
        const node = all[i];
        value[node.getAttribute('ref')] = node;
      }
      Object.defineProperty(this, 'refs', {value});
      return value;
    }
    return value;
  }

  // lazily bind once hyperHTML logic
  // to either the shadowRoot, if present and open,
  // the _shadowRoot property, if set due closed shadow root,
  // or the custom-element itself if no Shadow DOM is used.
  get html() {
    return this._html$ || (this.html = bind(
      // in a way or another, bind to the right node
      // backward compatible, first two could probably go already
      this.shadowRoot || this._shadowRoot || sr.get(this) || this
    ));
  }

  // it can be set too if necessary, it won't invoke render()
  set html(value) {
    defineProperty(this, '_html$', {configurable: true, value: value});
  }

  // overwrite this method with your own render
  render() {}

  // ---------------------//
  // Basic State Handling //
  // ---------------------//

  // define the default state object
  // you could use observed properties too
  get defaultState() { return {}; }

  // the state with a default
  get state() {
    return this._state$ || (this.state = this.defaultState);
  }

  // it can be set too if necessary, it won't invoke render()
  set state(value) {
    defineProperty(this, '_state$', {configurable: true, value: value});
  }

  // currently a state is a shallow copy, like in Preact or other libraries.
  // after the state is updated, the render() method will be invoked.
  // ⚠️ do not ever call this.setState() inside this.render()
  setState(state, render) {
    const target = this.state;
    const source = typeof state === 'function' ? state.call(this, target) : state;
    for (const key in source) target[key] = source[key];
    if (render !== false) this.render();
    return this;
  }

};

// exposing hyperHTML utilities
HyperHTMLElement.Component = Component;
HyperHTMLElement.bind = bind;
HyperHTMLElement.intent = esm_define;
HyperHTMLElement.wire = hyper_wire;
HyperHTMLElement.hyper = hyper;

try {
  if (Symbol.hasInstance) classes.push(
    defineProperty(HyperHTMLElement, Symbol.hasInstance, {
      enumerable: false,
      configurable: true,
      value(instance) {
        return classes.some(esm_isPrototypeOf, getPrototypeOf(instance));
      }
    }));
} catch(meh) {}

/* harmony default export */ const hyperhtml_element_esm = (HyperHTMLElement);

// ------------------------------//
// DOMContentLoaded VS created() //
// ------------------------------//
const dom = {
  type: 'DOMContentLoaded',
  handleEvent() {
    if (dom.ready()) {
      document.removeEventListener(dom.type, dom, false);
      dom.list.splice(0).forEach(invoke);
    }
    else
      setTimeout(dom.handleEvent);
  },
  ready() {
    return document.readyState === 'complete';
  },
  list: []
};

if (!dom.ready()) {
  document.addEventListener(dom.type, dom, false);
}

function checkReady(created, attributes, booleanAttributes) {
  if (dom.ready() || isReady.call(this, created, attributes, booleanAttributes)) {
    if (this._init$) {
      const list = this._init$$ || [];
      delete this._init$$;
      const self = defineProperty(this, '_init$', {value: false});
      booleanAttributes.forEach(name => {
        if (self.getAttribute(name) === 'false')
          self.removeAttribute(name);
      });
      attributes.forEach(name => {
        if (self.hasOwnProperty(name)) {
          const curr = self[name];
          delete self[name];
          list.unshift(() => { self[name] = curr; });
        }
      });
      created.call(self);
      list.forEach(invoke);
    }
  } else {
    if (!this.hasOwnProperty('_init$$'))
      defineProperty(this, '_init$$', {configurable: true, value: []});
    dom.list.push(checkReady.bind(this, created, attributes, booleanAttributes));
  }
}

function invoke(fn) {
  fn();
}

function esm_isPrototypeOf(Class) {
  return this === Class.prototype;
}

function isReady(created, attributes, booleanAttributes) {
  let el = this;
  do { if (el.nextSibling) return true; }
  while (el = el.parentNode);
  setTimeout(checkReady.bind(this, created, attributes, booleanAttributes));
  return false;
}

;// ./js/io-element.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */





// common DOM utilities exposed as IOElement.utils
const DOMUtils = {
  // boolean related operations/helpers
  boolean: {
    // utils.boolean.attribute(node, name, setAsTrue):void
    // set a generic node attribute name as "true"
    // if value is a boolean one or it removes the attribute
    attribute(node, name, setAsTrue) {
      // don't use `this.value(value)` with `this` as context
      // to make destructuring of helpers always work.
      // @example
      // const {attribute: setBoolAttr} = IOElement.utils.boolean;
      // setBoolAttr(node, 'test', true);
      if (DOMUtils.boolean.value(setAsTrue)) {
        node.setAttribute(name, "true");
      } else {
        node.removeAttribute(name);
      }
    },

    // utils.boolean.value(any):boolean
    // it returns either true or false
    // via truthy or falsy values, but also via strings
    // representing "true", "false" as well as "0" or "1"
    value(value) {
      if (typeof value === "string" && value.length) {
        try {
          value = JSON.parse(value);
        } catch (error) {
          // Ignore invalid JSON to continue using value as string
        }
      }
      return !!value;
    }
  },

  event: {
    // returns true if it's a left click or a touch event.
    // The left mouse button value is 0 and this
    // is compatible with pointers/touch events
    // where `button` might not be there.
    isLeftClick(event) {
      const re = /^(?:click|mouse|touch|pointer)/;
      return re.test(event.type) && !event.button;
    }
  }
};

// provides a unique-id suffix per each component
let counter = 0;

// common Custom Element class to extend
class IOElement extends hyperhtml_element_esm {
  // exposes DOM helpers as read only utils
  static get utils() {
    return DOMUtils;
  }

  // get a unique ID or, if null, set one and returns it
  static getID(element) {
    return element.getAttribute("id") || IOElement.setID(element);
  }

  // set a unique ID to a generic element and returns the ID
  static setID(element) {
    const id = `${element.nodeName.toLowerCase()}-${counter++}`;
    element.setAttribute("id", id);
    return id;
  }

  // lazily retrieve or define a custom element ID
  get id() {
    return IOElement.getID(this);
  }

  // returns true only when the component is live and styled
  get ready() {
    return !!this.offsetParent && this.isStyled();
  }

  // whenever an element is created, render its content once
  created() {
    this.render();
  }

  // based on a `--component-name: ready;` convention
  // under the `component-name {}` related stylesheet,
  // this method returns true only if such stylesheet
  // has been already loaded.
  isStyled() {
    const computed = window.getComputedStyle(this, null);
    const property = "--" + this.nodeName.toLowerCase();
    // in some case Edge returns '#fff' instead of ready
    return computed.getPropertyValue(property).trim() !== "";
  }

  // by default, render is a no-op
  render() {}

  // usually a template would contain a main element such
  // input, button, div, section, etc.
  // having a simple way to retrieve such element can be
  // both semantic and handy, as opposite of using
  // this.children[0] each time
  get child() {
    let element = this.firstElementChild;
    // if accessed too early, will render automatically
    if (!element) {
      this.render();
      element = this.firstElementChild;
    }
    return element;
  }
}

// whenever an interpolation with ${{i18n: 'string-id'}} is found
// transform such value into the expected content
// example:
//  render() {
//    return this.html`<div>${{i18n:'about-abp'}}</div>`;
//  }
IOElement.intent("i18n", (idOrArgs) => {
  const fragment = document.createDocumentFragment();
  if (typeof idOrArgs === "string") setElementText(fragment, idOrArgs);
  else if (idOrArgs instanceof Array) setElementText(fragment, ...idOrArgs);
  return fragment;
});

/* harmony default export */ const io_element = (IOElement);

;// ./js/io-circle-toggle.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */




class IOCircleToggle extends io_element {
  static get observedAttributes() {
    return ["action", "checked", "disabled"];
  }

  static get booleanAttributes() {
    return ["checked", "disabled"];
  }

  attributeChangedCallback() {
    this.render();
  }

  created() {
    this.setState({ checked: this.checked });
    this.setAttribute("tabindex", 0);
    this.addEventListener("click", this);
    this.addEventListener("keydown", this);
    $(".outer-circle", this).addEventListener("transitionend", this);
  }

  onclick() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  }

  onkeydown(event) {
    switch (event.key) {
      case " ":
      case "Enter":
        this.onclick(event);
        break;
    }
  }

  ontransitionend(event) {
    if (event.propertyName === "transform" && !this.disabled) {
      const { checked } = this.state;
      if (checked !== this.checked) {
        this.setState({ checked: this.checked }, false);
        $("svg", this).dispatchEvent(
          new CustomEvent("change", {
            bubbles: true,
            cancelable: true,
            detail: this.checked
          })
        );
      }
    }
  }

  render() {
    this.html`
    <svg
      width="100%"
      viewBox="-2.5 -2.5 71 50" version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      role="checkbox"
      data-action="${this.action}"
      aria-checked="${this.checked}"
      aria-disabled="${this.disabled}"
    >
      <g>
        <rect fill="#E4E4E4" x="1" y="16.8"
              width="64.4" height="12.6" rx="6.3" />
        <g transform="translate(31.6, 0)">
          <circle class="outer-circle" cx="23" cy="22.4" r="22.4" />
          <circle class="on" fill="#0688CB" cx="12" cy="22.4" r="9.8" />
          <circle class="off" fill="#4B4B4B" cx="-24" cy="22.4" r="9.8" />
        </g>
      </g>
    </svg>`;
  }
}

IOCircleToggle.define("io-circle-toggle");

/* harmony default export */ const io_circle_toggle = ((/* unused pure expression or super */ null && (IOCircleToggle)));

;// ./src/core/messaging/shared/emitter.ts
class MessageEmitter {
    constructor() {
        this.listeners = new Set();
    }
    addListener(listener) {
        this.listeners.add(listener);
    }
    removeListener(listener) {
        this.listeners.delete(listener);
    }
    dispatch(message, sender) {
        const results = [];
        for (const listener of this.listeners) {
            results.push(listener(message, sender));
        }
        return results;
    }
}

;// ./src/core/messaging/shared/messaging.ts
function getMessageResponse(responses) {
    for (const response of responses) {
        if (typeof response !== "undefined") {
            return response;
        }
    }
}
function isEventMessage(candidate) {
    return isMessage(candidate) && "action" in candidate && "args" in candidate;
}
function isMessage(candidate) {
    return (candidate !== null && typeof candidate === "object" && "type" in candidate);
}
function isListenMessage(candidate) {
    return isMessage(candidate) && "filter" in candidate;
}
function isPremiumActivateOptions(candidate) {
    return (candidate !== null && typeof candidate === "object" && "userId" in candidate);
}
function isPremiumSubscriptionsAddRemoveOptions(candidate) {
    return (candidate !== null &&
        typeof candidate === "object" &&
        "subscriptionType" in candidate);
}

;// ./src/core/messaging/front/messaging.ts

let port;
const connectListeners = new Set();
const disconnectListeners = new Set();
const messageListeners = new Set();
const messageEmitter = new MessageEmitter();
function addConnectListener(listener) {
    connectListeners.add(listener);
    listener();
}
function addDisconnectListener(listener) {
    disconnectListeners.add(listener);
}
function addMessageListener(listener) {
    messageListeners.add(listener);
}
const connect = () => {
    if (port) {
        return port;
    }
    try {
        port = browser.runtime.connect({ name: "ui" });
    }
    catch (ex) {
        port = null;
        disconnectListeners.forEach((listener) => {
            listener();
        });
        return port;
    }
    port.onMessage.addListener((message) => {
        if (!isMessage(message)) {
            return;
        }
        onMessage(message);
    });
    port.onDisconnect.addListener(onDisconnect);
    connectListeners.forEach((listener) => {
        listener();
    });
    return port;
};
function listen({ type, filter, ...options }) {
    addConnectListener(() => {
        if (port) {
            port.postMessage({
                type: `${type}.listen`,
                filter,
                ...options
            });
        }
    });
}
function onDisconnect() {
    port = null;
    setTimeout(() => connect(), 100);
}
function onMessage(message) {
    if (!message.type.endsWith(".respond")) {
        return;
    }
    messageListeners.forEach((listener) => {
        listener(message);
    });
}
function removeDisconnectListener(listener) {
    disconnectListeners.delete(listener);
}
function start() {
    connect();
    if (typeof browser.devtools === "undefined") {
        browser.runtime.onMessage.addListener((message, sender) => {
            if (!isMessage(message)) {
                return;
            }
            const responses = messageEmitter.dispatch(message, sender);
            const response = getMessageResponse(responses);
            if (typeof response === "undefined") {
                return;
            }
            return Promise.resolve(response);
        });
    }
}
start();

;// ./src/core/messaging/front/category-app.ts


const platformToStore = new Map([
    ["chromium", "chrome"],
    ["edgehtml", "edge"],
    ["gecko", "firefox"]
]);
async function get(what) {
    const options = { what };
    return await send("app.get", options);
}
async function getInfo() {
    var _a;
    const [application, platform] = await Promise.all([
        get("application"),
        get("platform")
    ]);
    let store;
    if (application !== "edge" && application !== "opera") {
        store = (_a = platformToStore.get(platform)) !== null && _a !== void 0 ? _a : "chrome";
    }
    else {
        store = application;
    }
    return {
        application,
        manifestVersion: browser.runtime.getManifest().manifest_version,
        platform,
        store
    };
}
function category_app_listen(filter) {
    messaging.listen({ type: "app", filter });
}
async function category_app_open(what, parameters = {}) {
    const options = { what, ...parameters };
    await send("app.open", options);
}

;// ./src/core/messaging/front/utils.ts
async function utils_send(sendType, options = {}) {
    const args = {
        ...options,
        type: sendType
    };
    return await browser.runtime.sendMessage(args);
}

;// ./src/core/messaging/front/category-doclinks.ts

async function category_doclinks_get(link) {
    const options = { what: "doclink", link };
    return await utils_send("app.get", options);
}

;// ./src/core/messaging/front/category-filters.ts


async function category_filters_get() {
    return await send("filters.get");
}
function category_filters_listen(filter) {
    messaging.listen({ type: "filters", filter });
}

;// ./src/core/messaging/front/category-prefs.ts


async function category_prefs_get(key) {
    const options = { key };
    return await send("prefs.get", options);
}
function category_prefs_listen(filter) {
    messaging.listen({ type: "prefs", filter });
}

;// ./src/core/messaging/front/category-premium.ts


async function activate(userId) {
    const options = { userId };
    return await send("premium.activate", options);
}
async function add(subscriptionType) {
    const options = { subscriptionType };
    await send("premium.subscriptions.add", options);
}
async function category_premium_get() {
    return await send("premium.get");
}
async function getPremiumSubscriptionsState() {
    return await send("premium.subscriptions.getState");
}
function category_premium_listen(filter) {
    messaging.listen({ type: "premium", filter });
}
async function category_premium_remove(subscriptionType) {
    const options = { subscriptionType };
    await send("premium.subscriptions.remove", options);
}

;// ./src/core/messaging/front/category-requests.ts

function category_requests_listen(filter, tabId) {
    messaging.listen({ type: "requests", filter, tabId });
}

;// ./src/core/messaging/front/category-stats.ts


async function getBlockedPerPage(tab) {
    const options = { tab };
    return await send("stats.getBlockedPerPage", options);
}
async function getBlockedTotal() {
    return await send("stats.getBlockedTotal");
}
function category_stats_listen(filter) {
    messaging.listen({ type: "stats", filter });
}

;// ./src/core/messaging/front/category-subscriptions.ts


async function category_subscriptions_add(url) {
    const options = { url };
    return await send("subscriptions.add", options);
}
async function category_subscriptions_get(options) {
    return await send("subscriptions.get", options !== null && options !== void 0 ? options : {});
}
async function getInitIssues() {
    return await send("subscriptions.getInitIssues");
}
async function getRecommendations() {
    return await send("subscriptions.getRecommendations");
}
function category_subscriptions_listen(filter) {
    messaging.listen({ type: "subscriptions", filter });
}
async function category_subscriptions_remove(url) {
    const options = { url };
    await send("subscriptions.remove", options);
}

;// ./src/core/messaging/front/index.ts



















;// ./js/io-popup-footer.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */





const { getMessage } = browser.i18n;

class IOPopupFooter extends io_element {
  get defaultState() {
    return { messages: [], current: 0, animationIsOn: false };
  }

  created() {
    this._animationDuration = 3000;
    this.style.setProperty(
      "--animation-duration",
      this._animationDuration / 1000 + "s"
    );
    this._canAnimate = true;
    this.addEventListener("mouseenter", this.stopAnimation);
    this.addEventListener("mouseleave", this.startAnimation);
    this.addEventListener("focusin", this.stopAnimation);
    this.addEventListener("focusout", this.startAnimation);
  }

  attributeChangedCallback() {
    this.render();
  }

  onclick(event) {
    const { currentTarget } = event;

    // manually switch tabs
    if (currentTarget.getAttribute("role") === "tab") {
      this.stopAnimation();
      this._canAnimate = false;

      const idx = parseInt(currentTarget.id.split("-")[2], 10);

      this.setState({ current: idx });
    }
  }

  // only used for tabs navigation with arrow keys
  onkeyup(event) {
    const { currentTarget } = event;

    if (currentTarget.getAttribute("role") !== "tab") return;

    let direction = 0;
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    const idx = parseInt(currentTarget.id.split("-")[2], 10);

    switch (event.key) {
      case "ArrowLeft":
        direction = -1;
        break;
      case "ArrowRight":
        direction = 1;
        break;
    }

    if (!direction) return;

    if (isRTL) direction *= -1;

    this._canAnimate = false;
    let newIdx = idx + direction;

    if (newIdx >= this.state.messages.length) newIdx = 0;
    else if (newIdx < 0) newIdx = this.state.messages.length - 1;

    this.setState({ current: newIdx });
    $(`#footer-tab-${newIdx}`).focus();
  }

  startAnimation() {
    if (!this._canAnimate) return;

    clearInterval(this._timer);
    this._timer = setInterval(() => {
      const nextIdx = (this.state.current + 1) % this.state.messages.length;
      this.setState({ current: nextIdx });
    }, this._animationDuration);

    this.setState({ animationIsOn: true });
  }

  stopAnimation() {
    clearInterval(this._timer);
    this.setState({ animationIsOn: false });
  }

  setupDoclinks() {
    if (this._setupDoclinksInitialized) return;

    const { store } = document.documentElement.dataset;
    const anchors = $$("a[data-doclink]", this);

    if (!store) return;

    this._setupDoclinksInitialized = true;
    for (const anchor of anchors) {
      const doclink = anchor.dataset.doclink.replace("%store%", store);
      category_doclinks_get(doclink).then((url) => {
        anchor.target = anchor.target || "_blank";
        anchor.href = url;
      });
    }
  }

  render() {
    const { messages, animationIsOn } = this.state;

    if (!messages) return;

    this.html`
    <ul class="tabs ${animationIsOn ? "animated" : ""}" role="tablist">
      ${messages.map(getTab, this)}
    </ul>
    <ul class="panels">
      ${messages.map(getPanel, this)}
    </ul>`;

    this.setupDoclinks();
  }
}

IOPopupFooter.define("io-popup-footer");

function getPanel(message, idx) {
  const { current } = this.state;

  return io_element.wire(message, ":panel")`
  <li
    id="footer-panel-${idx}"
    role="tabpanel"
    aria-hidden=${current === idx ? "false" : "true"}
  >
    <span id="footer-panel-description-${idx}" class="message">
      ${{ i18n: message.i18n }}
    </span>
    <span class="buttons" ?hidden=${current !== idx}>
      ${message.buttons.map(getPanelButton, this)}
    </span>
  </li>`;
}

function getTab(message, idx) {
  const { current } = this.state;

  return io_element.wire(message, ":tab")`
  <li><button
    id="footer-tab-${idx}"
    role="tab"
    aria-controls="footer-panel-${idx}"
    aria-labelledby="footer-panel-description-${idx}"
    aria-selected=${current === idx ? "true" : "false"}
    tabindex=${current !== idx ? -1 : 0}
    onclick=${this}
    onkeyup=${this}
  /></li>`;
}

function getPanelButton(button) {
  switch (button.action) {
    case "open-doclink":
      const { image } = button;

      return io_element.wire(button)`
      <a
        class="${image ? "icon" : ""}"
        data-doclink=${button.doclink}
        onclick=${this}
      >${
        image
          ? io_element.wire()`
          <img src="${image.url}" alt="${getMessage(image.i18nAlt)}"/>`
          : io_element.wire()`${{ i18n: button.i18n }}`
      }</a>`;
  }
}

;// ./js/pages/popup-dummy.mjs
/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-present eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */








initI18n();

function onResize() {
  window.top.postMessage(
    {
      type: "popup-dummy.resize",
      height: document.body.scrollHeight
    },
    "*"
  );
}

$("#stats-page .amount").textContent = (18).toLocaleString();
$("#stats-total .amount").textContent = (21412).toLocaleString();

setupFooter();

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(onResize, {
    root: null,
    // The observer only notifies us when a threshold is passed in either way
    // so we need to specify small enough thresholds to get notified
    // of any size changes
    threshold: Array.from({ length: 101 }, (value, idx) => idx / 100)
  });
  observer.observe(document.body);
} else {
  // For older browsers, we expect all changes to have been made to the page
  // at this point so we're telling the embedding page that it's now safe
  // to resize the frame
  window.addEventListener("load", onResize);
}

function setupFooter() {
  const footer = document.querySelector("io-popup-footer");

  fetch("data/popup-footer.json")
    .then((res) => res.json())
    .then((messages) => {
      footer.setState({
        messages,
        current: 0
      });
    });
}

document.body.hidden = false;

/******/ })()
;
//# sourceMappingURL=popup-dummy.js.map