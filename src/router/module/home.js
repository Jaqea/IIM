import manageChildren from './manage'

//中间件
import auth from 'middleware/auth'
import privilege from 'middleware/privilege'
import query from 'middleware/query'

function load(component) {
    return resolve =>
        import (`../../views/${component}`)
}
const homeChildren = [{
        path: '/statistics',
        name: 'statistics',
        component: load('home/statistics'),
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/case',
        name: 'case',
        component: load('home/case'),
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/caseBasic',
        name: 'caseBasic',
        component: load('home/case/basic'),
        meta: {
            middleware: [
                auth,
                query
            ]
        }
    },
    {
        path: '/caseFollowUp',
        name: 'caseFollowUp',
        component: load('home/case/followUp'),
        meta: {
            middleware: [
                auth,
                query
            ]
        }
    }, {
        path: '/export',
        name: 'export',
        component: load('home/export'),
        meta: {
            middleware: [
                auth
            ]
        }
    },
    {
        path: '/manage',
        name: 'manage',
        component: load('home/manage'),
        meta: {
            middleware: [
                auth,
                privilege
            ],
            Identity: true
        },
        children: manageChildren
    },
]
export default homeChildren