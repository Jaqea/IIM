// 管理账号API

//分页获取用户列表信息
export function getUserList(page) {
    return service.get("/p0/users/list-info?page-num=" + page * 1)
}

//新建用户账号
export function addUser(userInfo) {
    return service.post('/p0/user', userInfo)
}

//重置用户登陆密码
export function resetPassword(phyId, password) {
    return service.patch('/p0/user/' + phyId + '/password?new-password=' + password)
}

//修改用户信息
export function updateUser(phyId, userInfo) {
    return service.patch('/p0/user/' + phyId + '/info', userInfo)
}

//修改用户权限
export function updatePrivilege(phyId, privilege) {
    return service.patch('/p0/user/' + phyId + '/privilege', privilege)
}

//删除用户账号
export function deleteUser(phyId) {
    return service.delete('/p0/user/' + phyId)
}

//用户API
//修改登录名
export function updateLogin_name(phyId, userInfo) {
    return service.patch('/user/' + phyId + '/login-name', userInfo)
}

//修改密码
export function updatePassword(phyId, userPassword) {
    return service.patch('/user/' + phyId + '/password', userPassword)
}