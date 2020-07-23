export default function auth({ to, next, store }) {
    if (!store.getters.user) {
        alert('请先登录！')
        window.location.replace('login')
        return next({
            name: 'login',
            replace: true
        })
    }
    return next()
}