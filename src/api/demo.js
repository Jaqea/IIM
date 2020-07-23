export function get(url) {
    return service.get(url)
}

export function getParam(url, data) {
    return service.get(url, {
        params: data
    })
}

export function post(url, data, type) {
    return service.post(url, data, type)
}

export function patch(url, data, type) {
    return service.patch(url, data, type)
}