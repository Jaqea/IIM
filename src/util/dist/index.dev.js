"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeFilter = timeFilter;
exports.firstUpperCase = firstUpperCase;
exports.subHistoryTrigger = subHistoryTrigger;
exports.objToArr = objToArr;
exports.objNum = objNum;
exports.formEmpty = formEmpty;
exports.privilegeTransform = privilegeTransform;
exports.transformPrivilege = transformPrivilege;

// 公共方法
function timeFilter(time) {
  return time;
}

function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
}

function subHistoryTrigger(self, step) {
  self.$nextTick(function () {
    self.$refs.list.scrollTop = 0;
  });
  var subHistory = self.subHistory.arr;
  var form = [];

  switch (step) {
    case 0:
      for (var i = 0; i < 12; i++) {
        form.push(subHistory[i]);
      }

      break;

    case 1:
      for (var _i = 12; _i < 23; _i++) {
        form.push(subHistory[_i]);
      }

      break;

    case 2:
      for (var _i2 = 23; _i2 < 33; _i2++) {
        form.push(subHistory[_i2]);
      }

      break;

    case 3:
      for (var _i3 = 33; _i3 < 40; _i3++) {
        form.push(subHistory[_i3]);
      }

      break;

    case 4:
      for (var _i4 = 40; _i4 < 50; _i4++) {
        form.push(subHistory[_i4]);
      }

      break;

    case 5:
      for (var _i5 = 50; _i5 < 64; _i5++) {
        form.push(subHistory[_i5]);
      }

      break;

    case 6:
      for (var _i6 = 64; _i6 < 71; _i6++) {
        form.push(subHistory[_i6]);
      }

      break;

    default:
      break;
  }

  return form;
}

function objToArr(obj) {
  var arr = [];

  for (var i in obj) {
    arr.push(obj[i]);
  }

  return arr;
}

function objNum(obj) {
  var num = 0;

  for (var i in obj) {
    num++;
  }

  return num;
}

function formEmpty(self, activeName) {
  var formEmpty = {
    subjectEmpty: {
      number: '',
      name: '',
      initials: '',
      gender: '',
      nation: '',
      birth_day: ''
    },
    subHistoryEmpty: {
      arr: [{
        label: '肺炎',
        checked: '否',
        value: ''
      }, {
        label: '慢性阻塞性肺疾病',
        checked: '否',
        value: ''
      }, {
        label: '支气管哮喘',
        checked: '否',
        value: ''
      }, {
        label: '支气管扩张',
        checked: '否',
        value: ''
      }, {
        label: '肺结核',
        checked: '否',
        value: ''
      }, {
        label: '间质性肺病',
        checked: '否',
        value: ''
      }, {
        label: '肺动脉高压',
        checked: '否',
        value: ''
      }, {
        label: '慢性肺源性心脏病',
        checked: '否',
        value: ''
      }, {
        label: '肺部肿瘤',
        checked: '否',
        value: ''
      }, {
        label: '肺血栓栓塞',
        checked: '否',
        value: ''
      }, {
        label: '胸膜疾病',
        checked: '否',
        value: ''
      }, {
        label: '睡眠呼吸暂停综合征',
        checked: '否',
        value: ''
      }, {
        label: '急慢性心衰',
        checked: '否',
        value: '啥啥啥'
      }, {
        label: '心律失常',
        checked: '否',
        value: ''
      }, {
        label: '冠心病/心梗',
        checked: '否',
        value: ''
      }, {
        label: '心脏性猝死',
        checked: '否',
        value: ''
      }, {
        label: '晕厥',
        checked: '否',
        value: ''
      }, {
        label: '高血压',
        checked: '否',
        value: ''
      }, {
        label: '高血压心脏病',
        checked: '否',
        value: ''
      }, {
        label: '心肌病',
        checked: '否',
        value: ''
      }, {
        label: '心脏血管疾病',
        checked: '否',
        value: ''
      }, {
        label: '心包疾病',
        checked: '否',
        value: ''
      }, {
        label: '心瓣膜病',
        checked: '否',
        value: ''
      }, {
        label: '消化性溃疡',
        checked: '否',
        value: ''
      }, {
        label: '炎性肠病',
        checked: '否',
        value: ''
      }, {
        label: '肠结核，结核性腹膜炎',
        checked: '否',
        value: ''
      }, {
        label: '自身免疫性肝病',
        checked: '否',
        value: ''
      }, {
        label: '病毒性肝炎',
        checked: '否',
        value: ''
      }, {
        label: '肝硬化',
        checked: '否',
        value: ''
      }, {
        label: '消化道出血',
        checked: '否',
        value: ''
      }, {
        label: '胰腺炎',
        checked: '否',
        value: ''
      }, {
        label: '返流性食管炎',
        checked: '否',
        value: ''
      }, {
        label: '消化系统肿瘤',
        checked: '否',
        value: ''
      }, {
        label: '肾小球疾病',
        checked: '否',
        value: ''
      }, {
        label: '肾小管疾病',
        checked: '否',
        value: ''
      }, {
        label: '肾血管疾病',
        checked: '否',
        value: ''
      }, {
        label: '泌尿系结石',
        checked: '否',
        value: ''
      }, {
        label: '肾移植',
        checked: '否',
        value: ''
      }, {
        label: '慢性肾脏病',
        checked: '否',
        value: ''
      }, {
        label: '泌尿系肿瘤',
        checked: '否',
        value: ''
      }, {
        label: '贫血',
        checked: '否',
        value: ''
      }, {
        label: '骨髓增生异常综合征',
        checked: '否',
        value: ''
      }, {
        label: '白血病',
        checked: '否',
        value: ''
      }, {
        label: '淋巴瘤',
        checked: '否',
        value: ''
      }, {
        label: '浆细胞疾病',
        checked: '否',
        value: ''
      }, {
        label: '骨髓增殖型肿瘤',
        checked: '否',
        value: ''
      }, {
        label: '出血性疾病',
        checked: '否',
        value: ''
      }, {
        label: '血小板疾病',
        checked: '否',
        value: ''
      }, {
        label: '凝血功能障碍性疾病',
        checked: '否',
        value: ''
      }, {
        label: '噬血细胞综合征',
        checked: '否',
        value: ''
      }, {
        label: '下丘脑疾病',
        checked: '否',
        value: ''
      }, {
        label: '垂体疾病',
        checked: '否',
        value: ''
      }, {
        label: '甲状腺疾病',
        checked: '否',
        value: ''
      }, {
        label: '甲状旁腺疾病',
        checked: '否',
        value: ''
      }, {
        label: '肾上腺疾病',
        checked: '否',
        value: ''
      }, {
        label: '性腺疾病',
        checked: '否',
        value: ''
      }, {
        label: '多发性内分泌腺瘤',
        checked: '否',
        value: ''
      }, {
        label: '异位激素分泌综合征',
        checked: '否',
        value: ''
      }, {
        label: '糖尿病',
        checked: '否',
        value: ''
      }, {
        label: '肥胖与代谢综合征',
        checked: '否',
        value: ''
      }, {
        label: '蛋白质热能营养不良',
        checked: '否',
        value: ''
      }, {
        label: '血脂异常',
        checked: '否',
        value: ''
      }, {
        label: '高尿酸血症',
        checked: '否',
        value: ''
      }, {
        label: '骨质疏松',
        checked: '否',
        value: ''
      }, {
        label: '类风湿关节炎',
        checked: '否',
        value: ''
      }, {
        label: '脊柱关节病',
        checked: '否',
        value: ''
      }, {
        label: '系统性红斑狼疮',
        checked: '否',
        value: ''
      }, {
        label: '干燥综合征',
        checked: '否',
        value: ''
      }, {
        label: '硬皮病',
        checked: '否',
        value: ''
      }, {
        label: '血管炎',
        checked: '否',
        value: ''
      }, {
        label: '抗磷脂抗体综合征',
        checked: '否',
        value: ''
      }]
    },
    subSituationEmpty: {
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
    },
    subBehaviorEmpty: {
      arr: [{
        id: 1,
        label: '是否四肢或者颈肌乏力',
        checked: '否',
        value: ''
      }, {
        label: '是否肌肉酸痛/胀痛/肿痛',
        checked: '否',
        value: ''
      }, {
        label: '是否关节肿痛',
        checked: '否',
        value: ''
      }, {
        label: '是否皮疹',
        checked: '否',
        value: ''
      }, {
        label: '是否向阳疹',
        checked: '否',
        describe: '眶周,内眦的红色/紫红色皮疹',
        value: ''
      }, {
        label: '是否Gottron',
        checked: '否',
        describe: '征掌指关节和/或近端指间关节,肘关节处的红斑,高出皮肤表面,有时脱屑,溃烂,结痂',
        value: ''
      }, {
        label: '是否V字征',
        checked: '否',
        describe: '颈部以下剑突以上V字型的片状红斑',
        value: ''
      }, {
        label: '是否披肩征',
        checked: '否',
        describe: '颈项部延伸至肩胛骨处的片状红斑',
        value: ''
      }, {
        label: '是否技工手',
        checked: '否',
        describe: '虎口处,第一指第二指相对应部位粗糙的散在的米粒大小皮疹',
        value: ''
      }, {
        label: '是否甲周红斑',
        checked: '否',
        describe: '指甲周围红色/紫红色的不伴溃烂脱屑的皮疹',
        value: ''
      }, {
        label: '是否吞咽困难,饮水呛咳',
        checked: '否',
        describe: '',
        value: ''
      }, {
        label: '是否频繁干咳',
        describe: '注意不是为了排痰时的偶尔咳嗽',
        checked: '否',
        value: ''
      }, {
        label: '是否咳嗽,咳痰',
        checked: '否',
        describe: '咳痰颜色',
        value: ''
      }, {
        label: '是否胸痛',
        checked: '否',
        describe: '持续时间',
        value: ''
      }, {
        label: '是否晕厥',
        checked: '否',
        describe: '意识不清持续时间',
        value: ''
      }, {
        label: '是否腹痛',
        checked: '否',
        describe: '腹痛部位',
        value: ''
      }, {
        label: '是否腹泻',
        checked: '否',
        describe: '腹泻次数',
        value: ''
      }, {
        label: '是否步态异常',
        checked: '否',
        describe: '异常类型',
        value: ''
      }, {
        label: '是否胸闷，呼吸频率，呼吸深度有增加',
        checked: '否',
        value: ''
      }, {
        label: '是否气紧，呼吸频率，呼吸深度有增加',
        checked: '否',
        value: ''
      }, {
        label: '是否心累，活动耐量下降',
        checked: '否',
        value: ''
      }, {
        label: '是否心律失常，心悸',
        checked: '否',
        value: ''
      }, {
        label: '是否黑蒙',
        checked: '否',
        value: ''
      }, {
        label: '是否存在泌尿系统症状',
        checked: '否',
        value: ''
      }, {
        label: '是否少尿',
        checked: '否',
        describe: '24小时尿量小于400ml'
      }, {
        label: '是否无尿',
        checked: '否',
        describe: '24 小时尿量小于100ml'
      }, {
        label: '是否存在中枢神经系统症状',
        checked: '否',
        value: ''
      }, {
        label: '是否存在外周神经系统症状',
        checked: '否',
        value: ''
      }, {
        label: '是否视觉障碍',
        checked: '否',
        value: ''
      }, {
        label: '是否听觉障碍',
        checked: '否',
        value: ''
      }, {
        label: '是否味觉障碍',
        checked: '否',
        value: ''
      }, {
        label: '是否嗅觉障碍',
        checked: '否',
        value: ''
      }, {
        label: '是否构音障碍',
        checked: '否',
        value: ''
      }, {
        label: '是否双下肢水肿',
        checked: '否',
        value: ''
      }, {
        label: '是否恶心,呕吐',
        checked: '否',
        value: ''
      }, {
        label: '是否体重下降',
        checked: '否',
        value: ''
      }, {
        label: '是否有发热',
        checked: '否',
        days: '',
        value: ''
      }, {
        label: '其它症状',
        value: ''
      }]
    },
    subSortEmpty: {
      subSort1: [{
        label: "符合IIM诊断标准",
        checked: "未知"
      }, {
        label: "成人≥16岁",
        checked: "未知"
      }, {
        label: "病程中是否有肌酶升高",
        checked: "未知"
      }, {
        label: "病程中是否有皮疹",
        checked: "未知"
      }, {
        label: "病程中是否有肺间质纤维化",
        checked: "未知"
      }, {
        label: "病程中是否出现ANA阳性",
        checked: "未知"
      }, {
        label: "初次发病时是否合并有EB病毒感染",
        checked: "未知"
      }, {
        label: "初次发病时是否合并有CMV病毒感染",
        checked: "未知"
      }, {
        label: "初次发病时是否合并有疱疹病毒感染",
        checked: "未知"
      }, {
        label: "初次发病时是否合并有肺部感染",
        checked: "未知"
      }, {
        label: "病程中是否合并实体肿瘤",
        checked: "未知"
      }, {
        label: "病程中是否出现单克隆免疫球蛋白",
        checked: "未知"
      }],
      subSort2: [{
        label: "病程中是否出现肌炎特异性抗体阳性",
        checked: "未知"
      }, {
        label: "患者入组前是否接受过激素或者免疫抑制剂治疗",
        checked: "未知"
      }],
      subSort3: [{
        label: "具体抗体",
        value: ""
      }],
      subSort4: [{
        label: "激素治疗剂量",
        value: ""
      }, {
        label: "治疗持续时间"
      }, {
        label: "免疫抑制剂种类",
        value: ""
      }, {
        label: "剂量",
        value: ""
      }, {
        label: "治疗持续时间",
        value: ""
      }]
    }
  };

  switch (activeName) {
    case 'subject':
      for (var key in formEmpty.subjectEmpty) {
        self.$form["default"]['caseBasic']["default"][activeName][key] = formEmpty.subjectEmpty[key];
      }

      break;

    case 'subHistory':
      for (var i = 0; i < formEmpty.subHistoryEmpty.arr.length; i++) {
        self.$form["default"]['caseBasic']["default"][activeName].arr[i].checked = formEmpty.subHistoryEmpty.arr[i].checked;
        self.$form["default"]['caseBasic']["default"][activeName].arr[i].value = formEmpty.subHistoryEmpty.arr[i].value;
      }

      break;

    case 'subSituation':
      for (var _key in formEmpty.subSituationEmpty) {
        if (_key != 'local_treatment' || _key != 'wch_treatment') self.$form["default"]['caseBasic']["default"][activeName][_key] = formEmpty.subSituationEmpty[_key];
      }

      for (var _key2 in formEmpty.subSituationEmpty.local_treatment) {
        self.$form["default"]['caseBasic']["default"][activeName].local_treatment[_key2] = formEmpty.subSituationEmpty.local_treatment[_key2];
      }

      for (var _key3 in formEmpty.subSituationEmpty.wch_treatment) {
        self.$form["default"]['caseBasic']["default"][activeName].wch_treatment[_key3] = formEmpty.subSituationEmpty.wch_treatment[_key3];
      }

      break;

    case 'subBehavior':
      for (var _i7 = 0; _i7 < formEmpty.subBehaviorEmpty.arr.length; _i7++) {
        self.$form["default"]['caseBasic']["default"][activeName].arr[_i7].checked = formEmpty.subBehaviorEmpty.arr[_i7].checked;
        self.$form["default"]['caseBasic']["default"][activeName].arr[_i7].value = formEmpty.subBehaviorEmpty.arr[_i7].value;
        if (self.$form["default"]['caseBasic']["default"][activeName].arr[_i7].days) self.$form["default"]['caseBasic']["default"][activeName].arr[_i7].days = formEmpty.subBehaviorEmpty.arr[_i7].days;
      }

      break;

    case 'subSort':
      for (var _i8 = 0; _i8 < formEmpty.subSortEmpty.subSort1.length; _i8++) {
        self.$form["default"]['caseBasic']["default"][activeName].subSort1[_i8].checked = formEmpty.subSortEmpty.subSort1[_i8].checked;
      }

      for (var _i9 = 0; _i9 < formEmpty.subSortEmpty.subSort2.length; _i9++) {
        self.$form["default"]['caseBasic']["default"][activeName].subSort2[_i9].checked = formEmpty.subSortEmpty.subSort2[_i9].checked;
      }

      for (var _i10 = 0; _i10 < formEmpty.subSortEmpty.subSort3.length; _i10++) {
        self.$form["default"]['caseBasic']["default"][activeName].subSort3[_i10].value = formEmpty.subSortEmpty.subSort3[_i10].value;
      }

      for (var _i11 = 0; _i11 < formEmpty.subSortEmpty.subSort4.length; _i11++) {
        self.$form["default"]['caseBasic']["default"][activeName].subSort4[_i11].value = formEmpty.subSortEmpty.subSort4[_i11].value;
      }

      break;

    default:
      break;
  }

  self.$store.dispatch('remove_patient');
}

function privilegeTransform(privilege) {
  switch (privilege) {
    case 0:
      return '管理员';
      break;

    case 1:
      return '医生';
      break;

    case 2:
      return '普通用户';

    default:
      break;
  }
}

function transformPrivilege(privilege) {
  switch (privilege) {
    case '医生':
      return 1;
      break;

    case '普通用户':
      return 2;

    default:
      break;
  }
}