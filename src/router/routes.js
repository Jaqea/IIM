import './module/home'
import homeChildren from './module/home'


//中间件
import auth from 'middleware/auth'
import guest from 'middleware/guest'

function load(component) {
    return resolve =>
        import (`../views/${component}`)
}
const routes = [{
        path: '/home',
        name: 'home',
        component: load('home'),
        meta: {
            // required: true,
            middleware: [
                auth
            ]
        },
        children: homeChildren
    },
    {
        path: '/login',
        name: 'login',
        component: load('login'),
        meta: {
            middleware: [
                guest
            ]
        }
    },
    {
        path: '*',
        redirect: {
            path: '/login'
        }
    }
]
export default routes