export default function query({ next, to, from, store }) {
    const Identity = store.getters.user.privilege
        // const patient = Base64.decode(from.query.patient)
    if (from.query.patient && to.query.patient && from.query.patient != to.query.patient)
        return next({
            name: 'case',
            query: { Identity: store.getters.user.privilege }
        })

    return next()
}