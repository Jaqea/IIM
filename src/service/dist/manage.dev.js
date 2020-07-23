"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserListServe = getUserListServe;
exports.addUserServe = addUserServe;
exports.updatePrivilegeServe = updatePrivilegeServe;
exports.resetPasswordServe = resetPasswordServe;
exports.updateUserServe = updateUserServe;
exports.deleteUserServe = deleteUserServe;
exports.updateLoginNameServe = updateLoginNameServe;
exports.updatePasswordServe = updatePasswordServe;

var manageApi = _interopRequireWildcard(require("../api/manage"));

var _index = require("../util/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function getUserListServe(page, that) {
  manageApi.getUserList(page).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      var data = result.data;
      data.forEach(function (item) {
        item.privilege = (0, _index.privilegeTransform)(item.privilege);
      });
      that.userList = data;
    }
  })["catch"](function (error) {
    console.log(error);
  });
} //新建用户


function addUserServe(userInfo, page, that) {
  manageApi.addUser(userInfo).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '新建成功!'
      });
      that.$service["default"].manageServe.getUserListServe(page, that);
      that.dialogFormVisible = false;
    } else that.$message({
      type: 'error',
      message: '登陆名已存在!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //修改用户权限


function updatePrivilegeServe(phyId, privilege, page, that) {
  var new_privilege = (0, _index.transformPrivilege)(privilege);
  manageApi.updatePrivilege(phyId, new_privilege).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '修改成功!'
      });
      that.$service["default"].manageServe.getUserListServe(page, that);
    } else that.$message({
      type: 'error',
      message: '修改失败!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //重置密码


function resetPasswordServe(phyId, password, that) {
  manageApi.resetPassword(phyId, password).then(function (res) {
    var result = res.data;
    if (result.code == 200) that.$message({
      type: 'success',
      message: '重置成功!'
    });else that.$message({
      type: 'error',
      message: '重置失败!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //编辑用户信息


function updateUserServe(phyId, userInfo, page, that) {
  manageApi.updateUser(phyId, userInfo).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '编辑成功!'
      });
      that.$service["default"].manageServe.getUserListServe(page, that);
      that.dialogFormVisible2 = false;
    } else that.$message({
      type: 'error',
      message: '编辑失败!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //删除用户


function deleteUserServe(phyId, page, that) {
  manageApi.deleteUser(phyId).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '删除成功!'
      });
      that.$service["default"].manageServe.getUserListServe(page, that);
    } else that.$message({
      type: 'error',
      message: '删除失败!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //修改登录名


function updateLoginNameServe(phyId, userInfo, that) {
  manageApi.updateLogin_name(phyId, userInfo).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '保存成功!'
      });
      that.dialogFormVisible = false;
    } else that.$message({
      type: 'error',
      message: '登录名已存在!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
} //修改密码


function updatePasswordServe(phyId, userPassword, that) {
  manageApi.updatePassword(phyId, userPassword).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      that.$message({
        type: 'success',
        message: '修改成功!'
      });
      that.dialogFormVisible2 = false;
    } else that.$message({
      type: 'error',
      message: '旧密码错误!'
    });
  })["catch"](function (error) {
    console.log(error);
  });
}