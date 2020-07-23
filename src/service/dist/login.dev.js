"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginService = loginService;
exports.logOut = logOut;

var _login = require("../api/login");

var cookie = _interopRequireWildcard(require("./cookie"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function loginService(data, Identity, that) {
  var password = data.password;
  (0, _login.login)(data).then(function (res) {
    var resData = res.data;

    if (resData.code == 200) {
      var _data = resData.data;

      if (_data.privilege == Identity) {
        that.$message({
          showClose: true,
          message: "登录成功！"
        });
        cookie.setToken(resData.token);
        _data.password = password;
        that.$store.dispatch('set_user', _data);
        that.$router.push({
          path: '/statistics',
          query: {
            Identity: Identity
          }
        });
      } else {
        that.$message({
          showClose: true,
          message: "所登录的用户与您选择的身份不符！",
          type: "error"
        });
      }
    } else {
      that.$message({
        showClose: true,
        message: "登录名或密码错误！",
        type: "error"
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
}

function logOut(that) {
  window.localStorage.clear();
  cookie.removeToken();
  that.$store.dispatch('set_user', '');
  that.$router.push({
    path: '/login'
  });
  that.$message({
    showClose: true,
    message: "已登出！"
  });
}