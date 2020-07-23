"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = guest;

var _mixins = _interopRequireDefault(require("mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var computed = _mixins["default"].computed;

function guest(_ref) {
  var next = _ref.next,
      store = _ref.store;
  var Identity = _mixins["default"].computed.Identity.name;

  if (store.getters.user) {
    return next({
      name: 'statistics',
      query: {
        Identity: store.getters.user.privilege
      }
    });
  }

  return next();
}