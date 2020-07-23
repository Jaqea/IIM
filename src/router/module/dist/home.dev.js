"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _manage = _interopRequireDefault(require("./manage"));

var _auth = _interopRequireDefault(require("middleware/auth"));

var _privilege = _interopRequireDefault(require("middleware/privilege"));

var _query = _interopRequireDefault(require("middleware/query"));

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

var homeChildren = [{
  path: '/statistics',
  name: 'statistics',
  component: load('home/statistics'),
  meta: {
    middleware: [_auth["default"]]
  }
}, {
  path: '/case',
  name: 'case',
  component: load('home/case'),
  meta: {
    middleware: [_auth["default"]]
  }
}, {
  path: '/caseBasic',
  name: 'caseBasic',
  component: load('home/case/basic'),
  meta: {
    middleware: [_auth["default"], _query["default"]]
  }
}, {
  path: '/caseFollowUp',
  name: 'caseFollowUp',
  component: load('home/case/followUp'),
  meta: {
    middleware: [_auth["default"], _query["default"]]
  }
}, {
  path: '/export',
  name: 'export',
  component: load('home/export'),
  meta: {
    middleware: [_auth["default"]]
  }
}, {
  path: '/manage',
  name: 'manage',
  component: load('home/manage'),
  meta: {
    middleware: [_auth["default"], _privilege["default"]],
    Identity: true
  },
  children: _manage["default"]
}];
var _default = homeChildren;
exports["default"] = _default;