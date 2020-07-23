const state = {
    basicActiveName: 'subject',
    crfActiveName: 'crfSubject',
}

const getters = {
    basicActiveName: state => state.basicActiveName,
    crfActiveName: state => state.crfActiveName
}

const mutations = {
    set_basicActiveName(state, payload) {
        state.basicActiveName = payload
    },
    set_crfActiveName(state, payload) {
        state.crfActiveName = payload
    }
}

const actions = {
    set_basicActiveName(context, payload) {
        context.commit('set_basicActiveName', payload)
    },
    set_crfActiveName(context, payload) {
        context.commit('set_crfActiveName', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}