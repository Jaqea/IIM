// 受试者API

//基本信息
export function getSubject(phyIdentity) {
    return service.get("/subject/" + phyIdentity)
}

export function postSubject(data) {
    return service.post("/subject", data)
}

export function patchSubject(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity, data)
}

//既往史
export function getSubHistory(phyIdentity) {
    return service.get("/subject/" + phyIdentity + '/history')
}

export function postSubhistory(phyIdentity, data) {
    return service.post("/subject/" + phyIdentity + '/history', data)
}

export function patchSubhistory(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity + '/history', data)
}

//诊断情况
export function getSubSituation(phyIdentity) {
    return service.get("/subject/" + phyIdentity + '/iim-info')
}

export function postSubsituation(phyIdentity, data) {
    return service.post("/subject/" + phyIdentity + '/iim-info', data)
}

export function patchSubsituation(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity + '/iim-info', data)
}

// 临床表现
export function getSubBehavior(phyIdentity) {
    return service.get("/subject/" + phyIdentity + '/iim-symptom')
}

export function postSubbehavior(phyIdentity, data) {
    return service.post("/subject/" + phyIdentity + '/iim-symptom', data)
}

export function patchSubbehavior(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity + '/iim-symptom', data)
}

//分类信息
export function getSubSort(phyIdentity) {
    return service.get("/subject/" + phyIdentity + '/classification')
}

export function postSubsort(phyIdentity, data) {
    return service.post("/subject/" + phyIdentity + '/classification', data)
}

export function patchSubsort(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity + '/classification', data)
}