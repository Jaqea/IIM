"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _vuexPersistedstate = _interopRequireDefault(require("vuex-persistedstate"));

var _global = _interopRequireDefault(require("./module/global"));

var _utils = _interopRequireDefault(require("./module/utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var debug = process.env.NODE_ENV !== 'production';

var _default = new _vuex["default"].Store({
  strict: debug,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    global: _global["default"],
    utils: _utils["default"]
  }
});

exports["default"] = _default;