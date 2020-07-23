"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSubject = getSubject;
exports.postSubject = postSubject;
exports.patchSubject = patchSubject;
exports.getSubHistory = getSubHistory;
exports.postSubhistory = postSubhistory;
exports.patchSubhistory = patchSubhistory;
exports.getSubSituation = getSubSituation;
exports.postSubsituation = postSubsituation;
exports.patchSubsituation = patchSubsituation;
exports.getSubBehavior = getSubBehavior;
exports.postSubbehavior = postSubbehavior;
exports.patchSubbehavior = patchSubbehavior;
exports.getSubSort = getSubSort;
exports.postSubsort = postSubsort;
exports.patchSubsort = patchSubsort;

// 受试者API
//基本信息
function getSubject(phyIdentity) {
  return service.get("/subject/" + phyIdentity);
}

function postSubject(data) {
  return service.post("/subject", data);
}

function patchSubject(phyIdentity, data) {
  return service.patch("/subject/" + phyIdentity, data);
} //既往史


function getSubHistory(phyIdentity) {
  return service.get("/subject/" + phyIdentity + '/history');
}

function postSubhistory(phyIdentity, data) {
  return service.post("/subject/" + phyIdentity + '/history', data);
}

function patchSubhistory(phyIdentity, data) {
  return service.patch("/subject/" + phyIdentity + '/history', data);
} //诊断情况


function getSubSituation(phyIdentity) {
  return service.get("/subject/" + phyIdentity + '/iim-info');
}

function postSubsituation(phyIdentity, data) {
  return service.post("/subject/" + phyIdentity + '/iim-info', data);
}

function patchSubsituation(phyIdentity, data) {
  return service.patch("/subject/" + phyIdentity + '/iim-info', data);
} // 临床表现


function getSubBehavior(phyIdentity) {
  return service.get("/subject/" + phyIdentity + '/iim-symptom');
}

function postSubbehavior(phyIdentity, data) {
  return service.post("/subject/" + phyIdentity + '/iim-symptom', data);
}

function patchSubbehavior(phyIdentity, data) {
  return service.patch("/subject/" + phyIdentity + '/iim-symptom', data);
} //分类信息


function getSubSort(phyIdentity) {
  return service.get("/subject/" + phyIdentity + '/classification');
}

function postSubsort(phyIdentity, data) {
  return service.post("/subject/" + phyIdentity + '/classification', data);
}

function patchSubsort(phyIdentity, data) {
  return service.patch("/subject/" + phyIdentity + '/classification', data);
}