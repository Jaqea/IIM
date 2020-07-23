"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServe = getServe;
exports.postServe = postServe;
exports.patchServe = patchServe;
exports.getSubjectServe = getSubjectServe;
exports.getSubHistoryServe = getSubHistoryServe;
exports.getSubSituationServe = getSubSituationServe;
exports.getSubBehaviorServe = getSubBehaviorServe;
exports.getSubSortServe = getSubSortServe;

var caseBasicApi = _interopRequireWildcard(require("../api/caseBasic"));

var _index = require("util/index");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var subHistory = {
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
};
var subSituation = {
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
};
var subBehavior = {
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
};
var subSort = {
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
}; // 封装get请求

function getServe(self, activeName, phyIdentity) {
  caseBasicApi['get' + (0, _index.firstUpperCase)(activeName)](phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      var data = result.data;
      console.log(data);
    }
  })["catch"](function (error) {
    console.log(error);
  });
} //封装post请求


function postServe(self, activeName, data) {
  caseBasicApi['post' + (0, _index.firstUpperCase)(activeName)](data).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      var _data = result.data;
      var patient = {
        id: _data
      };
      self.$store.dispatch('set_patient', patient);
      self.$message({
        showClose: true,
        message: "录入成功！"
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // 封装patch请求


function patchServe(self, activeName, phyIdentity, data) {
  if (activeName != 'subject') {
    var data_new = '';

    switch (activeName) {
      case 'subHistory':
        var disease_detail = {};
        var i = 0;

        for (var item in subHistory) {
          if (item != 'disease_detail') {
            subHistory[item] = data.arr[i].checked;
            i++;
          }
        }

        for (var _i = 0; _i < data.arr.length; _i++) {
          disease_detail[data.arr[_i].label] = data.arr[_i].value;
        }

        subHistory.disease_detail = JSON.stringify(disease_detail);
        data_new = subHistory;
        break;

      case 'subSituation':
        for (var key in data) {
          subSituation[key] = data[key];
        }

        var local_treatment = JSON.stringify(data.local_treatment);
        var wch_treatment = JSON.stringify(data.wch_treatment);
        subSituation.local_treatment = local_treatment;
        subSituation.wch_treatment = wch_treatment;
        data_new = subSituation;
        break;

      case 'subBehavior':
        var arr = data.arr;
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
        };
        break;

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
        };
        break;

      default:
        break;
    }

    caseBasicApi['post' + (0, _index.firstUpperCase)(activeName)](phyIdentity, data_new).then(function (res) {
      var result = res.data;

      if (result.code == 200) {
        var _data2 = result.data;
        self.$message({
          showClose: true,
          message: "录入成功！"
        });
      } else {
        caseBasicApi['patch' + (0, _index.firstUpperCase)(activeName)](phyIdentity, data_new).then(function (res) {
          var result = res.data;

          if (result.code == 200) {
            self.$message({
              showClose: true,
              message: "修改成功！"
            });
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    })["catch"](function (error) {
      console.log(error);
    });
  } else caseBasicApi['patch' + (0, _index.firstUpperCase)(activeName)](phyIdentity, data).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      self.$message({
        showClose: true,
        message: "修改成功！"
      });
    }
  })["catch"](function (error) {
    console.log(error);
  });
} //get服务
// 基本信息


function getSubjectServe(phyIdentity, that) {
  caseBasicApi.getSubject(phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      var data = result.data;
      var subject = that.$form["default"].caseBasic["default"].subject;

      for (var item in subject) {
        subject[item] = data[item];
      }
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // 既往史


function getSubHistoryServe(phyIdentity, that) {
  caseBasicApi.getSubHistory(phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      if (result.data) {
        var list = (0, _index.objToArr)(result.data);
        list.shift(0);
        var disease_detail = (0, _index.objToArr)(JSON.parse(list[list.length - 1]));
        list.pop(list.length - 1);
        var _subHistory = that.$form["default"].caseBasic["default"].subHistory.arr;

        _subHistory.forEach(function (item, index) {
          item.checked = list[index];
          item.value = disease_detail[index];
        });
      } else that.$publicMethods.formEmpty(that, 'subHistory');
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // 诊断情况


function getSubSituationServe(phyIdentity, that) {
  caseBasicApi.getSubSituation(phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      if (result.data) {
        var data = result.data;
        var _subSituation = that.$form["default"].caseBasic["default"].subSituation;

        for (var key in data) {
          if (key != 'local_treatment' || key != 'wch_treatment') _subSituation[key] = data[key];
        }

        _subSituation.local_treatment = JSON.parse(data.local_treatment);
        _subSituation.wch_treatment = JSON.parse(data.wch_treatment);
      } else that.$publicMethods.formEmpty(that, 'subSituation');
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // 临床表现


function getSubBehaviorServe(phyIdentity, that) {
  caseBasicApi.getSubBehavior(phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      if (!result.data) that.$publicMethods.formEmpty(that, 'subBehavior');else {
        var data = result.data;
        var _subBehavior = that.$form["default"].caseBasic["default"].subBehavior;
        _subBehavior.arr[0].checked = data.has_mw;
        _subBehavior.arr[0].value = data.mw_site;
        _subBehavior.arr[1].checked = data.has_mp;
        _subBehavior.arr[1].value = data.mp_site;
        _subBehavior.arr[2].checked = data.has_js;
        _subBehavior.arr[2].value = data.js_site;
        _subBehavior.arr[3].checked = data.has_rash;
        _subBehavior.arr[4].checked = data.has_hs;
        _subBehavior.arr[5].checked = data.has_gs;
        _subBehavior.arr[6].checked = data.has_vts;
        _subBehavior.arr[7].checked = data.has_ss;
        _subBehavior.arr[8].checked = data.has_mh;
        _subBehavior.arr[9].checked = data.has_pe;
        _subBehavior.arr[10].checked = data.has_dysp;
        _subBehavior.arr[11].checked = data.has_tuss;
        _subBehavior.arr[12].checked = data.has_cough;
        _subBehavior.arr[12].value = data.sputum_color;
        _subBehavior.arr[18].checked = data.has_cd;
        _subBehavior.arr[19].checked = data.has_bh;
        _subBehavior.arr[20].checked = data.is_exhausted;
        _subBehavior.arr[21].checked = data.has_at;
        _subBehavior.arr[13].checked = data.has_cp;
        _subBehavior.arr[13].value = data.chest_pd;
        _subBehavior.arr[14].checked = data.has_syn;
        _subBehavior.arr[14].value = data.syn_duration;
        _subBehavior.arr[22].checked = data.has_ama;
        _subBehavior.arr[15].checked = data.has_ap;
        _subBehavior.arr[15].value = data.ap_site;
        _subBehavior.arr[16].checked = data.has_diar;
        _subBehavior.arr[16].value = data.diar_freq;
        _subBehavior.arr[34].checked = data.has_nau;
        _subBehavior.arr[34].value = data.vomit_freq;
        _subBehavior.arr[23].checked = data.has_us;
        _subBehavior.arr[24].checked = data.has_oli;
        _subBehavior.arr[25].checked = data.has_anu;
        _subBehavior.arr[26].checked = data.has_cs;
        _subBehavior.arr[27].checked = data.has_ps;
        _subBehavior.arr[28].checked = data.has_dysop;
        _subBehavior.arr[29].checked = data.has_dysac;
        _subBehavior.arr[30].checked = data.has_dysg;
        _subBehavior.arr[31].checked = data.has_dysos;
        _subBehavior.arr[32].checked = data.has_dysar;
        _subBehavior.arr[17].checked = data.has_ga;
        _subBehavior.arr[17].value = data.gait_ac;
        _subBehavior.arr[36].checked = data.has_fever;
        _subBehavior.arr[36].value = data.max_temp;
        _subBehavior.arr[36].days = data.fever_dura;
        _subBehavior.arr[35].checked = data.has_wl;
        _subBehavior.arr[35].value = data.lost_weight;
        _subBehavior.arr[33].checked = data.has_ce;
        _subBehavior.arr[37].value = data.other_symp;
      }
    }
  })["catch"](function (error) {
    console.log(error);
  });
} // 分类信息


function getSubSortServe(phyIdentity, that) {
  caseBasicApi.getSubSort(phyIdentity).then(function (res) {
    var result = res.data;

    if (result.code == 200) {
      if (!result.data) that.$publicMethods.formEmpty(that, 'subSort');else {
        var data = result.data;
        var _subSort = that.$form["default"].caseBasic["default"].subSort;
        _subSort.subSort1[0].checked = data.criteria_1;
        _subSort.subSort1[1].checked = data.criteria_2;
        _subSort.subSort1[2].checked = data.criteria_3;
        _subSort.subSort1[3].checked = data.criteria_4;
        _subSort.subSort1[4].checked = data.criteria_5;
        _subSort.subSort2[0].checked = data.criteria_6;
        _subSort.subSort1[5].checked = data.criteria_7;
        _subSort.subSort1[6].checked = data.criteria_8;
        _subSort.subSort1[7].checked = data.criteria_9;
        _subSort.subSort1[8].checked = data.criteria_10;
        _subSort.subSort1[9].checked = data.criteria_11;
        _subSort.subSort1[10].checked = data.criteria_12;
        _subSort.subSort1[11].checked = data.criteria_13;
        _subSort.subSort2[1].checked = data.criteria_14;
      }
    }
  })["catch"](function (error) {
    console.log(error);
  });
}