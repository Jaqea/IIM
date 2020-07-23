"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("store/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: function data() {
    return {};
  },
  computed: {
    Identity: function Identity() {
      var user = _index["default"].state.global.user;
      if (user) var Identity = user.privilege;
      return Identity;
    }
  },
  methods: {},
  created: function created() {// console.log(vuex)
  },
  filters: {
    routerQuery: function routerQuery(route) {
      var user = _index["default"].state.global.user;
      var Identity = user.privilege;
      if (Identity || Identity == 0) return route + '?Identity=' + Identity;
    }
  }
};
exports["default"] = _default;