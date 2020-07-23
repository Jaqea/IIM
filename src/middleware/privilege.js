export default function privilege({ next, from, store }) {
    const Identity = store.getters.user.privilege
    if (Identity != 0) {
        alert('您无权访问此页面')
        return next({
            path: from.path,
            query: from.query
        })
    }
    return next()
}