"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Base64 = require('js-base64').Base64;

var state = {
  user: localStorage.getItem('user') ? JSON.parse(Base64.decode(localStorage.getItem('user'))) : '',
  patient: sessionStorage.getItem('patient') ? JSON.parse(sessionStorage.getItem('patient')) : ''
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
    sessionStorage.setItem('patient', JSON.stringify(payload));
    state.patient = JSON.parse(sessionStorage.getItem('patient'));
  },
  remove_patient: function remove_patient(state, payload) {
    sessionStorage.removeItem('patient');
    state.patient = '';
  }
};
var actions = {
  set_user: function set_user(context, payload) {
    context.commit('set_user', payload);
  },
  set_patient: function set_patient(context, payload) {
    context.commit('set_patient', payload);
  },
  remove_patient: function remove_patient(context, payload) {
    context.commit('remove_patient');
  }
};
var _default = {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
};
exports["default"] = _default;