import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { getToken, removeToken } from 'service/cookie'
import store from 'store/index'
Vue.use(VueRouter)

//中间件管道
import middlewarePipeline from 'middleware/middlewarePipeline'

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
})

router.beforeEach((to, from, next) => {
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
    if (!to.meta.middleware)
        return next()
    const routerName = to.path
    const middleware = to.meta.middleware

    const context = {
        to,
        from,
        next,
        store,
        routerName
    }

    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

export default router