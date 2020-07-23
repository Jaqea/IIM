import * as manageApi from '../api/manage'
import '../util/index'
import { privilegeTransform, transformPrivilege } from '../util/index'


export function getUserListServe(page, that) {
    manageApi.getUserList(page).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            data.forEach(item => {
                item.privilege = privilegeTransform(item.privilege)
            })
            that.userList = data
        }
    }).catch(error => {
        console.log(error)
    })
}
//新建用户
export function addUserServe(userInfo, page, that) {
    manageApi.addUser(userInfo).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '新建成功!'
            })
            that.$service.default.manageServe.getUserListServe(page, that)
            that.dialogFormVisible = false
        } else
            that.$message({
                type: 'error',
                message: '登陆名已存在!'
            })

    }).catch(error => {
        console.log(error)
    })
}


//修改用户权限
export function updatePrivilegeServe(phyId, privilege, page, that) {
    let new_privilege = transformPrivilege(privilege)
    manageApi.updatePrivilege(phyId, new_privilege).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '修改成功!'
            })
            that.$service.default.manageServe.getUserListServe(page, that)
        } else
            that.$message({
                type: 'error',
                message: '修改失败!'
            })

    }).catch(error => {
        console.log(error)
    })
}


//重置密码
export function resetPasswordServe(phyId, password, that) {
    manageApi.resetPassword(phyId, password).then(res => {
        let result = res.data
        if (result.code == 200)
            that.$message({
                type: 'success',
                message: '重置成功!'
            })
        else
            that.$message({
                type: 'error',
                message: '重置失败!'
            })

    }).catch(error => {
        console.log(error)
    })
}

//编辑用户信息
export function updateUserServe(phyId, userInfo, page, that) {
    manageApi.updateUser(phyId, userInfo).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '编辑成功!'
            })
            that.$service.default.manageServe.getUserListServe(page, that)
            that.dialogFormVisible2 = false
        } else
            that.$message({
                type: 'error',
                message: '编辑失败!'
            })
    }).catch(error => {
        console.log(error)
    })
}
//删除用户
export function deleteUserServe(phyId, page, that) {
    manageApi.deleteUser(phyId).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '删除成功!'
            })
            that.$service.default.manageServe.getUserListServe(page, that)
        } else
            that.$message({
                type: 'error',
                message: '删除失败!'
            })
    }).catch(error => {
        console.log(error)
    })
}

//修改登录名
export function updateLoginNameServe(phyId, userInfo, that) {
    manageApi.updateLogin_name(phyId, userInfo).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '保存成功!'
            })
            that.dialogFormVisible = false
        } else
            that.$message({
                type: 'error',
                message: '登录名已存在!'
            })
    }).catch(error => {
        console.log(error)
    })
}
//修改密码
export function updatePasswordServe(phyId, userPassword, that) {
    manageApi.updatePassword(phyId, userPassword).then(res => {
        let result = res.data
        if (result.code == 200) {
            that.$message({
                type: 'success',
                message: '修改成功!'
            })
            that.dialogFormVisible2 = false
        } else
            that.$message({
                type: 'error',
                message: '旧密码错误!'
            })
    }).catch(error => {
        console.log(error)
    })
}