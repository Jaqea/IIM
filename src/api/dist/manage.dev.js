"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserList = getUserList;
exports.addUser = addUser;
exports.resetPassword = resetPassword;
exports.updateUser = updateUser;
exports.updatePrivilege = updatePrivilege;
exports.deleteUser = deleteUser;
exports.updateLogin_name = updateLogin_name;
exports.updatePassword = updatePassword;

// 管理账号API
//分页获取用户列表信息
function getUserList(page) {
  return service.get("/p0/users/list-info?page-num=" + page * 1);
} //新建用户账号


function addUser(userInfo) {
  return service.post('/p0/user', userInfo);
} //重置用户登陆密码


function resetPassword(phyId, password) {
  return service.patch('/p0/user/' + phyId + '/password?new-password=' + password);
} //修改用户信息


function updateUser(phyId, userInfo) {
  return service.patch('/p0/user/' + phyId + '/info', userInfo);
} //修改用户权限


function updatePrivilege(phyId, privilege) {
  return service.patch('/p0/user/' + phyId + '/privilege', privilege);
} //删除用户账号


function deleteUser(phyId) {
  return service["delete"]('/p0/user/' + phyId);
} //用户API
//修改登录名


function updateLogin_name(phyId, userInfo) {
  return service.patch('/user/' + phyId + '/login-name', userInfo);
} //修改密码


function updatePassword(phyId, userPassword) {
  return service.patch('/user/' + phyId + '/password', userPassword);
}