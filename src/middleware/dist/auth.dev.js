"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = auth;

function auth(_ref) {
  var next = _ref.next,
      store = _ref.store;

  if (!store.getters.user) {
    return next({
      name: 'login'
    });
  }

  return next();
}