"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("middleware/auth"));

var _privilege = _interopRequireDefault(require("middleware/privilege"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function load(component) {
  return function (resolve) {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("../../views/".concat(component)));
    });
  };
}

var manageChildren = [{
  path: '/addUser',
  name: 'addUser',
  component: load('home/manage/addUser'),
  meta: {
    middleware: [_auth["default"], _privilege["default"]]
  }
}, {
  path: '/delete',
  name: 'delete',
  component: load('home/manage/delete'),
  meta: {
    middleware: [_auth["default"], _privilege["default"]]
  }
}, {
  path: '/depatch',
  name: 'depatch',
  component: load('home/manage/depatch'),
  meta: {
    middleware: [_auth["default"], _privilege["default"]]
  }
}];
var _default = manageChildren;
exports["default"] = _default;