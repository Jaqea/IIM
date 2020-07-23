import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

import global from './module/global'
import utils from './module/utils'

export default new Vuex.Store({
    strict: debug,
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        global,
        utils
    }
})