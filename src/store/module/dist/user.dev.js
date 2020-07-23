"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Base64 = require('js-base64').Base64;

var state = {
  user: localStorage.getItem('user') ? JSON.parse(Base64.decode(localStorage.getItem('user'))) : '',
  patient: localStorage.getItem('patient') ? JSON.parse(Base64.decode(localStorage.getItem('patient'))) : ''
};
var getters = {
  user: function user(state) {
    return state.user;
  },
  patient: function patient(state) {
    return state.patient;
  }
};
var mutations = {
  set_user: function set_user(state, payload) {
    localStorage.setItem('user', Base64.encode(JSON.stringify(payload)));
    state.user = JSON.parse(Base64.decode(localStorage.getItem('user')));
  },
  set_patient: function set_patient(state, payload) {
    localStorage.setItem('patient', Base64.encode(JSON.stringify(payload)));
    state.user = JSON.parse(Base64.decode(localStorage.getItem('patient')));
  }
};
var actions = {
  set_user: function set_user(context, payload) {
    context.commit('set_user', payload);
  },
  set_patient: function set_patient(context, payload) {
    context.commit('set_patient', payload);
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;