import * as caseBasicApi from '../api/caseBasic'
import { firstUpperCase, objToArr, objNum } from 'util/index'
let subHistory = {
    is_pneu: '',
    is_copd: '',
    is_ba: '',
    is_bes: '',
    is_tb: '',
    is_ild: '',
    is_pah: '',
    is_cphd: '',
    is_lt: '',
    is_pte: '',
    is_pld: '',
    is_sas: '',
    is_achf: '',
    is_arrh: '',
    is_chd: '',
    is_scd: '',
    is_sync: '',
    is_ht: '',
    is_hhd: '',
    is_cm: '',
    is_cvd: '',
    is_pcd: '',
    is_vhd: '',
    is_pu: '',
    is_ibd: '',
    is_itc: '',
    is_aild: '',
    is_vht: '',
    is_lch: '',
    is_gib: '',
    is_panc: '',
    is_rep: '',
    is_dst: '',
    is_gmd: '',
    is_rtd: '',
    is_rvd: '',
    is_uc: '',
    is_rtt: '',
    is_ckd: '',
    is_ut: '',
    is_anem: '',
    is_mds: '',
    is_leu: '',
    is_lym: '',
    is_plcd: '',
    is_mpn: '',
    is_hhad: '',
    is_pds: '',
    is_bcd: '',
    is_hps: '',
    is_htd: '',
    is_ptd: '',
    is_tds: '',
    is_ptrd: '',
    is_agd: '',
    is_gds: '',
    is_men: '',
    is_ehss: '',
    is_dm: '',
    is_oms: '',
    is_pem: '',
    is_bla: '',
    is_hua: '',
    is_oste: '',
    is_ra: '',
    is_spa: '',
    is_sle: '',
    is_ss: '',
    is_scler: '',
    is_vasc: '',
    is_aplas: '',
    disease_detail: {}
}
let subSituation = {
    onset_time: '',
    confirm_time: '',
    onset_confirm_interval: '',
    pre_treatment: '',
    local_hospital: '',
    local_hospitalized: '',
    local_treatment: {
        drugCategory: '',
        name: '',
        singleDose: '',
        times: '',
        treatment: '',
        compliance: ''
    },
    wch_confirm_time: '',
    onset_wch_interval: '',
    wch_hospitalized: '',
    has_msa: '',
    has_mb: '',
    iim_category: '',
    wch_treatment: {
        drugCategory: '',
        name: '',
        otherTreat: '',
        singleDose: '',
        times: '',
        treatment: '',
        reduceScheme: ''
    }
}
let subBehavior = {
    has_mw: '',
    mw_site: '',
    has_mp: '',
    mp_site: '',
    has_js: '',
    js_site: '',
    has_rash: '',
    has_hs: '',
    has_gs: '',
    has_vts: '',
    has_ss: '',
    has_mh: '',
    has_pe: '',
    has_dysp: '',
    has_tuss: '',
    has_cough: '',
    sputum_color: '',
    has_cd: '',
    has_bh: '',
    is_exhausted: '',
    has_at: '',
    has_cp: '',
    chest_pd: '',
    has_syn: '',
    syn_duration: '',
    has_ama: '',
    has_ap: '',
    ap_site: '',
    has_diar: '',
    diar_freq: '',
    has_nau: '',
    vomit_freq: '',
    has_us: '',
    has_oli: '',
    has_anu: '',
    has_cs: '',
    has_ps: '',
    has_dysop: '',
    has_dysac: '',
    has_dysg: '',
    has_dysos: '',
    has_dysar: '',
    has_ga: '',
    gait_ac: '',
    has_fever: '',
    max_temp: '',
    fever_dura: '',
    has_wl: '',
    lost_weight: '',
    has_ce: '',
    other_symp: ''
}
let subSort = {
    criteria_1: '',
    criteria_2: '',
    criteria_3: '',
    criteria_4: '',
    criteria_5: '',
    criteria_6: '',
    criteria_7: '',
    criteria_8: '',
    criteria_9: '',
    criteria_10: '',
    criteria_11: '',
    criteria_12: '',
    criteria_13: '',
    criteria_14: ''
}


// 封装get请求
export function getServe(self, activeName, phyIdentity) {
    caseBasicApi['get' + firstUpperCase(activeName)](phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            console.log(data)
        }
    }).catch(error => {
        console.log(error)
    })
}


//封装post请求
export function postServe(self, activeName, data) {
    caseBasicApi['post' + firstUpperCase(activeName)](data).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            const patient = {
                id: data
            }
            self.$store.dispatch('set_patient', patient)
            self.$message({
                showClose: true,
                message: "录入成功！"
            })
        }
    }).catch(error => {
        console.log(error)
    })
}
// 封装patch请求
export function patchServe(self, activeName, phyIdentity, data) {
    if (activeName != 'subject') {
        let data_new = ''
        switch (activeName) {
            case 'subHistory':
                let disease_detail = {}
                let i = 0
                for (let item in subHistory) {
                    if (item != 'disease_detail') {
                        subHistory[item] = data.arr[i].checked
                        i++
                    }
                }
                for (let i = 0; i < data.arr.length; i++) {
                    disease_detail[data.arr[i].label] = data.arr[i].value
                }
                subHistory.disease_detail = JSON.stringify(disease_detail)
                data_new = subHistory
                break
            case 'subSituation':
                for (let key in data)
                    subSituation[key] = data[key]
                let local_treatment = JSON.stringify(data.local_treatment)
                let wch_treatment = JSON.stringify(data.wch_treatment)
                subSituation.local_treatment = local_treatment
                subSituation.wch_treatment = wch_treatment
                data_new = subSituation
                break
            case 'subBehavior':
                let arr = data.arr
                data_new = {
                    has_mw: arr[0].checked,
                    mw_site: arr[0].value,
                    has_mp: arr[1].checked,
                    mp_site: arr[1].value,
                    has_js: arr[2].checked,
                    js_site: arr[2].value,
                    has_rash: arr[3].checked,
                    has_hs: arr[4].checked,
                    has_gs: arr[5].checked,
                    has_vts: arr[6].checked,
                    has_ss: arr[7].checked,
                    has_mh: arr[8].checked,
                    has_pe: arr[9].checked,
                    has_dysp: arr[10].checked,
                    has_tuss: arr[11].checked,
                    has_cough: arr[12].checked,
                    sputum_color: arr[12].value,
                    has_cd: arr[18].checked,
                    has_bh: arr[19].checked,
                    is_exhausted: arr[20].checked,
                    has_at: arr[21].checked,
                    has_cp: arr[13].checked,
                    chest_pd: arr[13].value,
                    has_syn: arr[14].checked,
                    syn_duration: arr[14].value,
                    has_ama: arr[22].checked,
                    has_ap: arr[15].checked,
                    ap_site: arr[15].value,
                    has_diar: arr[16].checked,
                    diar_freq: arr[16].value,
                    has_nau: arr[34].checked,
                    vomit_freq: arr[34].value,
                    has_us: arr[23].checked,
                    has_oli: arr[24].checked,
                    has_anu: arr[25].checked,
                    has_cs: arr[26].checked,
                    has_ps: arr[27].checked,
                    has_dysop: arr[28].checked,
                    has_dysac: arr[29].checked,
                    has_dysg: arr[30].checked,
                    has_dysos: arr[31].checked,
                    has_dysar: arr[32].checked,
                    has_ga: arr[17].checked,
                    gait_ac: arr[17].value,
                    has_fever: arr[36].checked,
                    max_temp: arr[36].value,
                    fever_dura: arr[36].days,
                    has_wl: arr[35].checked,
                    lost_weight: arr[35].value,
                    has_ce: arr[33].checked,
                    other_symp: arr[37].value
                }
                break
            case 'subSort':
                data_new = {
                    criteria_1: data.subSort1[0].checked,
                    criteria_2: data.subSort1[1].checked,
                    criteria_3: data.subSort1[2].checked,
                    criteria_4: data.subSort1[3].checked,
                    criteria_5: data.subSort1[4].checked,
                    criteria_6: data.subSort2[0].checked,
                    criteria_7: data.subSort1[5].checked,
                    criteria_8: data.subSort1[6].checked,
                    criteria_9: data.subSort1[7].checked,
                    criteria_10: data.subSort1[8].checked,
                    criteria_11: data.subSort1[9].checked,
                    criteria_12: data.subSort1[10].checked,
                    criteria_13: data.subSort1[11].checked,
                    criteria_14: data.subSort2[1].checked
                }
                break
            default:
                break
        }
        caseBasicApi['post' + firstUpperCase(activeName)](phyIdentity, data_new).then(res => {
            let result = res.data
            if (result.code == 200) {
                let data = result.data
                self.$message({
                    showClose: true,
                    message: "录入成功！"
                })
            } else {
                caseBasicApi['patch' + firstUpperCase(activeName)](phyIdentity, data_new).then(res => {
                    let result = res.data
                    if (result.code == 200) {
                        self.$message({
                            showClose: true,
                            message: "修改成功！"
                        })
                    }
                }).catch(error => {
                    console.log(error)
                })
            }
        }).catch(error => {
            console.log(error)
        })
    } else
        caseBasicApi['patch' + firstUpperCase(activeName)](phyIdentity, data).then(res => {
            let result = res.data
            if (result.code == 200) {
                self.$message({
                    showClose: true,
                    message: "修改成功！"
                })
            }
        }).catch(error => {
            console.log(error)
        })
}


//get服务
// 基本信息
export function getSubjectServe(phyIdentity, that) {
    caseBasicApi.getSubject(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            let data = result.data
            let subject = that.$form.default.caseBasic.default.subject
            for (let item in subject)
                subject[item] = data[item]
        }
    }).catch(error => {
        console.log(error)
    })
}

// 既往史
export function getSubHistoryServe(phyIdentity, that) {
    caseBasicApi.getSubHistory(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            if (result.data) {
                let list = objToArr(result.data)
                list.shift(0)
                let disease_detail = objToArr(JSON.parse(list[list.length - 1]))
                list.pop(list.length - 1)
                let subHistory = that.$form.default.caseBasic.default.subHistory.arr
                subHistory.forEach((item, index) => {
                    item.checked = list[index]
                    item.value = disease_detail[index]
                });
            } else
                that.$publicMethods.formEmpty(that, 'subHistory')
        }
    }).catch(error => {
        console.log(error)
    })
}

// 诊断情况
export function getSubSituationServe(phyIdentity, that) {
    caseBasicApi.getSubSituation(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            if (result.data) {
                let data = result.data
                let subSituation = that.$form.default.caseBasic.default.subSituation
                for (let key in data) {
                    if (key != 'local_treatment' || key != 'wch_treatment')
                        subSituation[key] = data[key]
                }
                subSituation.local_treatment = JSON.parse(data.local_treatment)
                subSituation.wch_treatment = JSON.parse(data.wch_treatment)
            } else
                that.$publicMethods.formEmpty(that, 'subSituation')
        }
    }).catch(error => {
        console.log(error)
    })
}

// 临床表现
export function getSubBehaviorServe(phyIdentity, that) {
    caseBasicApi.getSubBehavior(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            if (!result.data)
                that.$publicMethods.formEmpty(that, 'subBehavior')
            else {
                let data = result.data
                let subBehavior = that.$form.default.caseBasic.default.subBehavior
                subBehavior.arr[0].checked = data.has_mw;
                subBehavior.arr[0].value = data.mw_site;
                subBehavior.arr[1].checked = data.has_mp;
                subBehavior.arr[1].value = data.mp_site;
                subBehavior.arr[2].checked = data.has_js;
                subBehavior.arr[2].value = data.js_site;
                subBehavior.arr[3].checked = data.has_rash;
                subBehavior.arr[4].checked = data.has_hs;
                subBehavior.arr[5].checked = data.has_gs;
                subBehavior.arr[6].checked = data.has_vts;
                subBehavior.arr[7].checked = data.has_ss;
                subBehavior.arr[8].checked = data.has_mh;
                subBehavior.arr[9].checked = data.has_pe;
                subBehavior.arr[10].checked = data.has_dysp;
                subBehavior.arr[11].checked = data.has_tuss;
                subBehavior.arr[12].checked = data.has_cough;
                subBehavior.arr[12].value = data.sputum_color;
                subBehavior.arr[18].checked = data.has_cd;
                subBehavior.arr[19].checked = data.has_bh;
                subBehavior.arr[20].checked = data.is_exhausted;
                subBehavior.arr[21].checked = data.has_at;
                subBehavior.arr[13].checked = data.has_cp;
                subBehavior.arr[13].value = data.chest_pd;
                subBehavior.arr[14].checked = data.has_syn;
                subBehavior.arr[14].value = data.syn_duration;
                subBehavior.arr[22].checked = data.has_ama;
                subBehavior.arr[15].checked = data.has_ap;
                subBehavior.arr[15].value = data.ap_site;
                subBehavior.arr[16].checked = data.has_diar;
                subBehavior.arr[16].value = data.diar_freq;
                subBehavior.arr[34].checked = data.has_nau;
                subBehavior.arr[34].value = data.vomit_freq;
                subBehavior.arr[23].checked = data.has_us;
                subBehavior.arr[24].checked = data.has_oli;
                subBehavior.arr[25].checked = data.has_anu;
                subBehavior.arr[26].checked = data.has_cs;
                subBehavior.arr[27].checked = data.has_ps;
                subBehavior.arr[28].checked = data.has_dysop;
                subBehavior.arr[29].checked = data.has_dysac;
                subBehavior.arr[30].checked = data.has_dysg;
                subBehavior.arr[31].checked = data.has_dysos;
                subBehavior.arr[32].checked = data.has_dysar;
                subBehavior.arr[17].checked = data.has_ga;
                subBehavior.arr[17].value = data.gait_ac;
                subBehavior.arr[36].checked = data.has_fever;
                subBehavior.arr[36].value = data.max_temp;
                subBehavior.arr[36].days = data.fever_dura;
                subBehavior.arr[35].checked = data.has_wl;
                subBehavior.arr[35].value = data.lost_weight;
                subBehavior.arr[33].checked = data.has_ce;
                subBehavior.arr[37].value = data.other_symp;
            }
        }
    }).catch(error => {
        console.log(error)
    })
}

// 分类信息
export function getSubSortServe(phyIdentity, that) {
    caseBasicApi.getSubSort(phyIdentity).then(res => {
        let result = res.data
        if (result.code == 200) {
            if (!result.data)
                that.$publicMethods.formEmpty(that, 'subSort')
            else {
                let data = result.data
                let subSort = that.$form.default.caseBasic.default.subSort
                subSort.subSort1[0].checked = data.criteria_1;
                subSort.subSort1[1].checked = data.criteria_2;
                subSort.subSort1[2].checked = data.criteria_3;
                subSort.subSort1[3].checked = data.criteria_4;
                subSort.subSort1[4].checked = data.criteria_5;
                subSort.subSort2[0].checked = data.criteria_6;
                subSort.subSort1[5].checked = data.criteria_7;
                subSort.subSort1[6].checked = data.criteria_8;
                subSort.subSort1[7].checked = data.criteria_9;
                subSort.subSort1[8].checked = data.criteria_10;
                subSort.subSort1[9].checked = data.criteria_11;
                subSort.subSort1[10].checked = data.criteria_12;
                subSort.subSort1[11].checked = data.criteria_13;
                subSort.subSort2[1].checked = data.criteria_14;
            }
        }
    }).catch(error => {
        console.log(error)
    })
}