import axios from 'axios'
import { getToken, removeToken } from 'service/cookie'
import router from '../router/index'

const service = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
    baseURL: '/api'
})

const serviceForm = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'multipart/form-data; charset=UTF-8',
        "X-Requested-With": "XMLHttpRequest",
    },
    baseURL: '/api'
})

let request = function(config) {
    const token = getToken()
    if (token) {
        config.headers.common['Authorization'] = token
    }
    return config
}

let request_err = function(err) {
    alert(err)
    console.log(err)
    return
}

let response = function(res) {
    const data = res.data
    if (res.headers.authorization)
        data.token = res.headers.authorization
    const message = `${data.code}--${data.message}` || '未知错误'
    if (res.status == 200) {
        if (data.code) {
            if (data.code == 200)
                return res
            else {
                if (data.message == 'Token过期') {
                    alert(message)
                    removeToken()
                    localStorage.clear()
                    router.go(0)
                }
            }
            return res
        } else
            return res
    } else {
        alert(message)
        return message
    }
}

let response_err = function(err) {
    if (err.response) {
        const data = err.response.data
        const message = `${data.code}--${data.message}` || '未知错误'
        alert(message)
        return message
    }
    console.log(message)
    return Promise.reject(err)
}

service.interceptors.request.use(request, request_err)
service.interceptors.response.use(response, response_err)

window.service = service