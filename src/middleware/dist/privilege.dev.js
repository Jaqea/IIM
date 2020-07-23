"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = privilege;

function privilege(_ref) {
  var next = _ref.next,
      from = _ref.from,
      store = _ref.store;
  var Identity = store.getters.user.privilege;

  if (Identity != 0) {
    alert('您无权访问此页面');
    return next({
      path: from.path,
      query: from.query
    });
  }

  return next();
}