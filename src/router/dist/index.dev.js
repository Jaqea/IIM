"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

var _cookie = require("service/cookie");

var _index = _interopRequireDefault(require("store/index"));

var _middlewarePipeline = _interopRequireDefault(require("middleware/middlewarePipeline"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_vue["default"].use(_vueRouter["default"]); //中间件管道


var router = new _vueRouter["default"]({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: _routes["default"]
});
router.beforeEach(function (to, from, next) {
  // if (to.matched.some(record => record.meta.required)) { // 判断该路由是否需要登录权限
  //     if (getToken()) { // 判断当前的token是否存在 ； 登录存入的token
  //         if (to.matched.some(record => record.meta.Identity)) {
  //             let permission = store.getters.user.privilege
  //             if (permission == 0)
  //                 next()
  //             else {
  //                 alert('您无权限进入此页面!')
  //                 router.go(-1)
  //             }
  //         } else {
  //             next()
  //         }
  //     } else {
  //         next({
  //             path: '/login',
  //             query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
  //         })
  //     }
  // } else {
  //     next()
  // }
  if (!to.meta.middleware) return next();
  var routerName = to.path;
  var middleware = to.meta.middleware;
  var context = {
    to: to,
    from: from,
    next: next,
    store: _index["default"],
    routerName: routerName
  };
  return middleware[0](_objectSpread({}, context, {
    next: (0, _middlewarePipeline["default"])(context, middleware, 1)
  }));
});
router.afterEach(function (to, from, next) {
  window.scrollTo(0, 0);
});
var _default = router;
exports["default"] = _default;