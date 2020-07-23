"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = query;

function query(_ref) {
  var next = _ref.next,
      to = _ref.to,
      from = _ref.from,
      store = _ref.store;
  var Identity = store.getters.user.privilege; // const patient = Base64.decode(from.query.patient)

  if (from.query.patient && from.query.patient != to.query.patient) return next({
    name: 'case',
    query: {
      Identity: store.getters.user.privilege
    }
  });
  return next();
}