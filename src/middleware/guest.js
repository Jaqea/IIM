import mixins from 'mixins'

const computed = mixins.computed

export default function guest({ next, store }) {
    const Identity = mixins.computed.Identity.name
    if (store.getters.user) {
        return next({
            name: 'statistics',
            query: { Identity: store.getters.user.privilege }
        })
    }
    return next()
}