let Base64 = require('js-base64').Base64
const state = {
    user: localStorage.getItem('user') ? JSON.parse(Base64.decode(localStorage.getItem('user'))) : '',
    patient: sessionStorage.getItem('patient') ? JSON.parse(sessionStorage.getItem('patient')) : ''
}

const getters = {
    user: state => state.user,
    patient: state => state.patient
}

const mutations = {
    set_user(state, payload) {
        localStorage.setItem('user', Base64.encode(JSON.stringify(payload)))
        state.user = JSON.parse(Base64.decode(localStorage.getItem('user')))
    },
    set_patient(state, payload) {
        sessionStorage.setItem('patient', JSON.stringify(payload))
        state.patient = JSON.parse(sessionStorage.getItem('patient'))
    },
    remove_patient(state, payload) {
        sessionStorage.removeItem('patient')
        state.patient = ''
    }
}

const actions = {
    set_user(context, payload) {
        context.commit('set_user', payload)
    },
    set_patient(context, payload) {
        context.commit('set_patient', payload)
    },
    remove_patient(context, payload) {
        context.commit('remove_patient')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}