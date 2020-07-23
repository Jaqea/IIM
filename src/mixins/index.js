import store from 'store/index.js'
export default {
    data() {
        return {}
    },
    computed: {
        Identity() {
            const user = store.state.global.user
            if (user)
                var Identity = user.privilege
            return Identity
        },
    },
    methods: {

    },
    created() {
        // console.log(vuex)
    },
    filters: {
        routerQuery: function(route) {
            const user = store.state.global.user
            let Identity = user.privilege
            if (Identity || Identity == 0)
                return route + '?Identity=' + Identity
        }
    }
}