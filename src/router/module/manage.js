//中间件
import auth from 'middleware/auth'
import privilege from 'middleware/privilege'

function load(component) {
    return resolve =>
        import (`../../views/${component}`)
}
const manageChildren = [{
        path: '/addUser',
        name: 'addUser',
        component: load('home/manage/addUser'),
        meta: {
            middleware: [
                auth,
                privilege
            ]
        }
    },
    {
        path: '/delete',
        name: 'delete',
        component: load('home/manage/delete'),
        meta: {
            middleware: [
                auth,
                privilege
            ]
        }
    },
    {
        path: '/depatch',
        name: 'depatch',
        component: load('home/manage/depatch'),
        meta: {
            middleware: [
                auth,
                privilege
            ]
        }
    }
]
export default manageChildren