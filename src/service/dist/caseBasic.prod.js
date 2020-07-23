"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getServe=getServe,exports.postServe=postServe,exports.patchServe=patchServe,exports.getSubjectServe=getSubjectServe,exports.getSubHistoryServe=getSubHistoryServe,exports.getSubSituationServe=getSubSituationServe,exports.getSubBehaviorServe=getSubBehaviorServe,exports.getSubSortServe=getSubSortServe;var caseBasicApi=_interopRequireWildcard(require("../api/caseBasic")),_index=require("util/index");function _getRequireWildcardCache(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return _getRequireWildcardCache=function(){return e},e}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache();if(a&&a.has(e))return a.get(e);var s,r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in e){Object.prototype.hasOwnProperty.call(e,t)&&((s=c?Object.getOwnPropertyDescriptor(e,t):null)&&(s.get||s.set)?Object.defineProperty(r,t,s):r[t]=e[t])}return r.default=e,a&&a.set(e,r),r}var subHistory={is_pneu:"",is_copd:"",is_ba:"",is_bes:"",is_tb:"",is_ild:"",is_pah:"",is_cphd:"",is_lt:"",is_pte:"",is_pld:"",is_sas:"",is_achf:"",is_arrh:"",is_chd:"",is_scd:"",is_sync:"",is_ht:"",is_hhd:"",is_cm:"",is_cvd:"",is_pcd:"",is_vhd:"",is_pu:"",is_ibd:"",is_itc:"",is_aild:"",is_vht:"",is_lch:"",is_gib:"",is_panc:"",is_rep:"",is_dst:"",is_gmd:"",is_rtd:"",is_rvd:"",is_uc:"",is_rtt:"",is_ckd:"",is_ut:"",is_anem:"",is_mds:"",is_leu:"",is_lym:"",is_plcd:"",is_mpn:"",is_hhad:"",is_pds:"",is_bcd:"",is_hps:"",is_htd:"",is_ptd:"",is_tds:"",is_ptrd:"",is_agd:"",is_gds:"",is_men:"",is_ehss:"",is_dm:"",is_oms:"",is_pem:"",is_bla:"",is_hua:"",is_oste:"",is_ra:"",is_spa:"",is_sle:"",is_ss:"",is_scler:"",is_vasc:"",is_aplas:"",disease_detail:{}},subSituation={onset_time:"",confirm_time:"",onset_confirm_interval:"",pre_treatment:"",local_hospital:"",local_hospitalized:"",local_treatment:{drugCategory:"",name:"",singleDose:"",times:"",treatment:"",compliance:""},wch_confirm_time:"",onset_wch_interval:"",wch_hospitalized:"",has_msa:"",has_mb:"",iim_category:"",wch_treatment:{drugCategory:"",name:"",otherTreat:"",singleDose:"",times:"",treatment:"",reduceScheme:""}},subBehavior={has_mw:"",mw_site:"",has_mp:"",mp_site:"",has_js:"",js_site:"",has_rash:"",has_hs:"",has_gs:"",has_vts:"",has_ss:"",has_mh:"",has_pe:"",has_dysp:"",has_tuss:"",has_cough:"",sputum_color:"",has_cd:"",has_bh:"",is_exhausted:"",has_at:"",has_cp:"",chest_pd:"",has_syn:"",syn_duration:"",has_ama:"",has_ap:"",ap_site:"",has_diar:"",diar_freq:"",has_nau:"",vomit_freq:"",has_us:"",has_oli:"",has_anu:"",has_cs:"",has_ps:"",has_dysop:"",has_dysac:"",has_dysg:"",has_dysos:"",has_dysar:"",has_ga:"",gait_ac:"",has_fever:"",max_temp:"",fever_dura:"",has_wl:"",lost_weight:"",has_ce:"",other_symp:""},subSort={criteria_1:"",criteria_2:"",criteria_3:"",criteria_4:"",criteria_5:"",criteria_6:"",criteria_7:"",criteria_8:"",criteria_9:"",criteria_10:"",criteria_11:"",criteria_12:"",criteria_13:"",criteria_14:""};function getServe(e,a,s){caseBasicApi["get"+(0,_index.firstUpperCase)(a)](s).then(function(e){var a,s=e.data;200==s.code&&(a=s.data,console.log(a))}).catch(function(e){console.log(e)})}function postServe(r,e,a){caseBasicApi["post"+(0,_index.firstUpperCase)(e)](a).then(function(e){var a,s=e.data;200==s.code&&(a={id:s.data},r.$store.dispatch("set_patient",a),r.$message({showClose:!0,message:"录入成功！"}))}).catch(function(e){console.log(e)})}function patchServe(s,r,c,e){if("subject"!=r){var t="";switch(r){case"subHistory":var a={},i=0;for(var h in subHistory)"disease_detail"!=h&&(subHistory[h]=e.arr[i].checked,i++);for(var _=0;_<e.arr.length;_++)a[e.arr[_].label]=e.arr[_].value;subHistory.disease_detail=JSON.stringify(a),t=subHistory;break;case"subSituation":for(var o in e)subSituation[o]=e[o];var d=JSON.stringify(e.local_treatment),u=JSON.stringify(e.wch_treatment);subSituation.local_treatment=d,subSituation.wch_treatment=u,t=subSituation;break;case"subBehavior":var n=e.arr,t={has_mw:n[0].checked,mw_site:n[0].value,has_mp:n[1].checked,mp_site:n[1].value,has_js:n[2].checked,js_site:n[2].value,has_rash:n[3].checked,has_hs:n[4].checked,has_gs:n[5].checked,has_vts:n[6].checked,has_ss:n[7].checked,has_mh:n[8].checked,has_pe:n[9].checked,has_dysp:n[10].checked,has_tuss:n[11].checked,has_cough:n[12].checked,sputum_color:n[12].value,has_cd:n[18].checked,has_bh:n[19].checked,is_exhausted:n[20].checked,has_at:n[21].checked,has_cp:n[13].checked,chest_pd:n[13].value,has_syn:n[14].checked,syn_duration:n[14].value,has_ama:n[22].checked,has_ap:n[15].checked,ap_site:n[15].value,has_diar:n[16].checked,diar_freq:n[16].value,has_nau:n[34].checked,vomit_freq:n[34].value,has_us:n[23].checked,has_oli:n[24].checked,has_anu:n[25].checked,has_cs:n[26].checked,has_ps:n[27].checked,has_dysop:n[28].checked,has_dysac:n[29].checked,has_dysg:n[30].checked,has_dysos:n[31].checked,has_dysar:n[32].checked,has_ga:n[17].checked,gait_ac:n[17].value,has_fever:n[36].checked,max_temp:n[36].value,fever_dura:n[36].days,has_wl:n[35].checked,lost_weight:n[35].value,has_ce:n[33].checked,other_symp:n[37].value};break;case"subSort":t={criteria_1:e.subSort1[0].checked,criteria_2:e.subSort1[1].checked,criteria_3:e.subSort1[2].checked,criteria_4:e.subSort1[3].checked,criteria_5:e.subSort1[4].checked,criteria_6:e.subSort2[0].checked,criteria_7:e.subSort1[5].checked,criteria_8:e.subSort1[6].checked,criteria_9:e.subSort1[7].checked,criteria_10:e.subSort1[8].checked,criteria_11:e.subSort1[9].checked,criteria_12:e.subSort1[10].checked,criteria_13:e.subSort1[11].checked,criteria_14:e.subSort2[1].checked}}caseBasicApi["post"+(0,_index.firstUpperCase)(r)](c,t).then(function(e){var a=e.data;200==a.code?(a.data,s.$message({showClose:!0,message:"录入成功！"})):caseBasicApi["patch"+(0,_index.firstUpperCase)(r)](c,t).then(function(e){200==e.data.code&&s.$message({showClose:!0,message:"修改成功！"})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}else caseBasicApi["patch"+(0,_index.firstUpperCase)(r)](c,e).then(function(e){200==e.data.code&&s.$message({showClose:!0,message:"修改成功！"})}).catch(function(e){console.log(e)})}function getSubjectServe(e,t){caseBasicApi.getSubject(e).then(function(e){var a=e.data;if(200==a.code){var s=a.data,r=t.$form.default.caseBasic.default.subject;for(var c in r)r[c]=s[c]}}).catch(function(e){console.log(e)})}function getSubHistoryServe(e,c){caseBasicApi.getSubHistory(e).then(function(e){var s,r,a=e.data;200==a.code&&(a.data?((s=(0,_index.objToArr)(a.data)).shift(0),r=(0,_index.objToArr)(JSON.parse(s[s.length-1])),s.pop(s.length-1),c.$form.default.caseBasic.default.subHistory.arr.forEach(function(e,a){e.checked=s[a],e.value=r[a]})):c.$publicMethods.formEmpty(c,"subHistory"))}).catch(function(e){console.log(e)})}function getSubSituationServe(e,t){caseBasicApi.getSubSituation(e).then(function(e){var a=e.data;if(200==a.code)if(a.data){var s=a.data,r=t.$form.default.caseBasic.default.subSituation;for(var c in s)"local_treatment"==c&&"wch_treatment"==c||(r[c]=s[c]);r.local_treatment=JSON.parse(s.local_treatment),r.wch_treatment=JSON.parse(s.wch_treatment)}else t.$publicMethods.formEmpty(t,"subSituation")}).catch(function(e){console.log(e)})}function getSubBehaviorServe(e,c){caseBasicApi.getSubBehavior(e).then(function(e){var a,s,r=e.data;200==r.code&&(r.data?(a=r.data,(s=c.$form.default.caseBasic.default.subBehavior).arr[0].checked=a.has_mw,s.arr[0].value=a.mw_site,s.arr[1].checked=a.has_mp,s.arr[1].value=a.mp_site,s.arr[2].checked=a.has_js,s.arr[2].value=a.js_site,s.arr[3].checked=a.has_rash,s.arr[4].checked=a.has_hs,s.arr[5].checked=a.has_gs,s.arr[6].checked=a.has_vts,s.arr[7].checked=a.has_ss,s.arr[8].checked=a.has_mh,s.arr[9].checked=a.has_pe,s.arr[10].checked=a.has_dysp,s.arr[11].checked=a.has_tuss,s.arr[12].checked=a.has_cough,s.arr[12].value=a.sputum_color,s.arr[18].checked=a.has_cd,s.arr[19].checked=a.has_bh,s.arr[20].checked=a.is_exhausted,s.arr[21].checked=a.has_at,s.arr[13].checked=a.has_cp,s.arr[13].value=a.chest_pd,s.arr[14].checked=a.has_syn,s.arr[14].value=a.syn_duration,s.arr[22].checked=a.has_ama,s.arr[15].checked=a.has_ap,s.arr[15].value=a.ap_site,s.arr[16].checked=a.has_diar,s.arr[16].value=a.diar_freq,s.arr[34].checked=a.has_nau,s.arr[34].value=a.vomit_freq,s.arr[23].checked=a.has_us,s.arr[24].checked=a.has_oli,s.arr[25].checked=a.has_anu,s.arr[26].checked=a.has_cs,s.arr[27].checked=a.has_ps,s.arr[28].checked=a.has_dysop,s.arr[29].checked=a.has_dysac,s.arr[30].checked=a.has_dysg,s.arr[31].checked=a.has_dysos,s.arr[32].checked=a.has_dysar,s.arr[17].checked=a.has_ga,s.arr[17].value=a.gait_ac,s.arr[36].checked=a.has_fever,s.arr[36].value=a.max_temp,s.arr[36].days=a.fever_dura,s.arr[35].checked=a.has_wl,s.arr[35].value=a.lost_weight,s.arr[33].checked=a.has_ce,s.arr[37].value=a.other_symp):c.$publicMethods.formEmpty(c,"subBehavior"))}).catch(function(e){console.log(e)})}function getSubSortServe(e,c){caseBasicApi.getSubSort(e).then(function(e){var a,s,r=e.data;200==r.code&&(r.data?(a=r.data,(s=c.$form.default.caseBasic.default.subSort).subSort1[0].checked=a.criteria_1,s.subSort1[1].checked=a.criteria_2,s.subSort1[2].checked=a.criteria_3,s.subSort1[3].checked=a.criteria_4,s.subSort1[4].checked=a.criteria_5,s.subSort2[0].checked=a.criteria_6,s.subSort1[5].checked=a.criteria_7,s.subSort1[6].checked=a.criteria_8,s.subSort1[7].checked=a.criteria_9,s.subSort1[8].checked=a.criteria_10,s.subSort1[9].checked=a.criteria_11,s.subSort1[10].checked=a.criteria_12,s.subSort1[11].checked=a.criteria_13,s.subSort2[1].checked=a.criteria_14):c.$publicMethods.formEmpty(c,"subSort"))}).catch(function(e){console.log(e)})}