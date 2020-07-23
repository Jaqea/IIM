import { login } from '../api/login'
import * as cookie from './cookie'
export function loginService(data, Identity, that) {
    let password = data.password
    login(data).then(res => {
        let resData = res.data
        if (resData.code == 200) {
            let data = resData.data
            if (data.privilege == Identity) {
                that.$message({
                    showClose: true,
                    message: "登录成功！"
                });
                cookie.setToken(resData.token)
                data.password = password
                that.$store.dispatch('set_user', data)
                that.$router.push({
                    path: '/statistics',
                    query: {
                        Identity: Identity
                    }
                })
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
    }).catch(error => {
        console.log(error);
    })
}
export function logOut(that) {
    window.localStorage.clear()
    cookie.removeToken()
    that.$store.dispatch('set_user', '')
    that.$router.push({
        path: '/login'
    })
    that.$message({
        showClose: true,
        message: "已登出！",
    });
}