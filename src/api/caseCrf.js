//CRF表API
import { phyTimesToUrl } from '../util/index'

//所有信息
export function getcrfAll(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/all-info')
}
export function postcrfAll(phyIdentity, data) {
    return service.post('/subject/' + phyIdentity + '/crf/all-info', data)
}
export function patchcrfAll(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/all-info', data)
}

//基本信息
export function getcrfSubject(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes))
}
export function postcrfSubject(phyIdentity, phyTimes, data) {
    return service.post('/subject/' + phyIdentity + '/crf', data)
}

export function patchcrfSubject(data) {
    return service.patch("/crf", data)
}

//人口学信息
export function getcrfDemograph(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/demographic-info')
}

export function postcrfDemograph(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/demographic-info', data)
}

export function patchcrfDemograph(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/demographic-info', data)
}

//一般情况和查体情况
export function getcrfCheck(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/check-up')
}

export function postcrfCheck(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/check-up', data)
}

export function patchcrfCheck(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/check-up', data)
}

//免疫系统
export function getcrfImm(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/immune-info')
}

export function postcrfImm(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/immune-info', data)
}

export function patchcrfImm(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/immune-info', data)
}

//肌肉组织

export function getcrfTissue(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/muscle-info')
}

export function postcrfTissue(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/muscle-info', data)
}

export function patchcrfTissue(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/muscle-info', data)
}

//呼吸系统

export function getcrfBreath(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/respiratory-info')
}

export function postcrfBreath(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/respiratory-info', data)
}

export function patchcrfBreath(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/respiratory-info', data)
}

//循环系统
export function getcrfCycle(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/circulatory-info')
}

export function postcrfCycle(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/circulatory-info', data)
}

export function patchcrfCycle(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/circulatory-info', data)
}

//消化系统
export function getcrfDigest(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/digestive-info')
}

export function postcrfDigest(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/digestive-info', data)
}

export function patchcrfDigest(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/digestive-info', data)
}

//泌尿系统
export function getcrfUrinary(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/urinary-info')
}

export function postcrfUrinary(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/urinary-info', data)
}

export function patchcrfUrinary(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/urinary-info', data)
}

//血液系统
export function getcrfBlood(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/blood-info')
}

export function postcrfBlood(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/blood-info', data)
}

export function patchcrfBlood(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/blood-info', data)
}

//病毒感染
export function getcrfVirus(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/virus-index')
}

export function postcrfVirus(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/virus-index', data)
}

export function patchcrfVirus(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/virus-index', data)
}

//肌炎评分
export function getcrfTisScore(phyIdentity, phyTimes) {
    return service.get("/crf/" + phyIdentity + phyTimesToUrl(phyTimes) + '/other-info')
}

export function postcrfTisScore(phyIdentity, phyTimes, data) {
    return service.post('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/other-info', data)
}

export function patchcrfTisScore(phyIdentity, phyTimes, data) {
    return service.patch('/crf/' + phyIdentity + phyTimesToUrl(phyTimes) + '/other-info', data)
}

//受试者分类信息
export function getsubSort(phyIdentity) {
    return service.get("/subject/" + phyIdentity + '/classification')
}

export function postsubSort(phyIdentity, data) {
    return service.post("/subject/" + phyIdentity + '/classification', data)
}

export function patchsubSort(phyIdentity, data) {
    return service.patch("/subject/" + phyIdentity + '/classification', data)
}