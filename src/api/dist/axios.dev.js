"use strict";

var _axios = _interopRequireDefault(require("axios"));

var _cookie = require("service/cookie");

var _index = _interopRequireDefault(require("../router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var service = _axios["default"].create({
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  baseURL: '/api'
});

var serviceForm = _axios["default"].create({
  timeout: 60000,
  headers: {
    'Content-Type': 'multipart/form-data; charset=UTF-8',
    "X-Requested-With": "XMLHttpRequest"
  },
  baseURL: '/api'
});

var request = function request(config) {
  var token = (0, _cookie.getToken)();

  if (token) {
    config.headers.common['Authorization'] = token;
  }

  return config;
};

var request_err = function request_err(err) {
  alert(err);
  console.log(err);
  return;
};

var response = function response(res) {
  var data = res.data;
  if (res.headers.authorization) data.token = res.headers.authorization;
  var message = "".concat(data.code, "--").concat(data.message) || '未知错误';

  if (res.status == 200) {
    if (data.code) {
      if (data.code == 200) return res;else {
        if (data.message == 'Token过期') {
          alert(message);
          (0, _cookie.removeToken)();
          localStorage.clear();

          _index["default"].go(0);
        }
      }
      return res;
    } else return res;
  } else {
    alert(message);
    return message;
  }
};

var response_err = function response_err(err) {
  if (err.response) {
    var data = err.response.data;

    var _message = "".concat(data.code, "--").concat(data.message) || '未知错误';

    alert(_message);
    return _message;
  }

  console.log(message);
  return Promise.reject(err);
};

service.interceptors.request.use(request, request_err);
service.interceptors.response.use(response, response_err);
window.service = service;