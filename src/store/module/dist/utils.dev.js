"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var state = {
  activeName: 'subject'
};
var getters = {
  activeName: function activeName(state) {
    return state.activeName;
  }
};
var mutations = {
  set_activeName: function set_activeName(state, payload) {
    state.activeName = payload;
  }
};
var actions = {
  set_activeName: function set_activeName(context, payload) {
    context.commit('set_activeName', payload);
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;