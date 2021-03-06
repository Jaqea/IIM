const subject = {
    number: '',
    name: '',
    initials: '',
    gender: '',
    nation: '',
    birth_day: ''
}
const subjectRules = {
    number: [
        { required: true, message: '请输入编号', trigger: ['blur', 'change'] }
    ],
    name: [
        { required: true, message: '请输入姓名', trigger: ['blur', 'change'] }
    ],
    initials: [
        { required: true, message: '请输入姓名缩写', trigger: ['blur', 'change'] }
    ],
    gender: [
        { required: true, message: '请选择性别', trigger: ['blur', 'change'] }
    ],
    nation: [
        { required: true, message: '请选择民族', trigger: 'change' }
    ],
    birth_day: [
        { required: true, message: '请选择出生年月', trigger: ['blur', 'change'] }
    ]
}

const subHistory = {
    arr: [{
            label: '肺炎',
            checked: '否',
            value: ''
        },
        {
            label: '慢性阻塞性肺疾病',
            checked: '否',
            value: ''
        },
        {
            label: '支气管哮喘',
            checked: '否',
            value: ''
        },
        {
            label: '支气管扩张',
            checked: '否',
            value: ''
        },
        {
            label: '肺结核',
            checked: '否',
            value: ''
        },
        {
            label: '间质性肺病',
            checked: '否',
            value: ''
        },
        {
            label: '肺动脉高压',
            checked: '否',
            value: ''
        },

        {
            label: '慢性肺源性心脏病',
            checked: '否',
            value: ''
        },
        {
            label: '肺部肿瘤',
            checked: '否',
            value: ''
        },
        {
            label: '肺血栓栓塞',
            checked: '否',
            value: ''
        },
        {
            label: '胸膜疾病',
            checked: '否',
            value: ''
        },
        {
            label: '睡眠呼吸暂停综合征',
            checked: '否',
            value: ''
        },
        {
            label: '急慢性心衰',
            checked: '否',
            value: ''
        },
        {
            label: '心律失常',
            checked: '否',
            value: ''
        },
        {
            label: '冠心病/心梗',
            checked: '否',
            value: ''
        },
        {
            label: '心脏性猝死',
            checked: '否',
            value: ''
        }, {
            label: '晕厥',
            checked: '否',
            value: ''
        },
        {
            label: '高血压',
            checked: '否',
            value: ''
        },
        {
            label: '高血压心脏病',
            checked: '否',
            value: ''
        },
        {
            label: '心肌病',
            checked: '否',
            value: ''
        },
        {
            label: '心脏血管疾病',
            checked: '否',
            value: ''
        },
        {
            label: '心包疾病',
            checked: '否',
            value: ''
        },
        {
            label: '心瓣膜病',
            checked: '否',
            value: ''
        },
        {
            label: '消化性溃疡',
            checked: '否',
            value: ''
        },
        {
            label: '炎性肠病',
            checked: '否',
            value: ''
        },
        {
            label: '肠结核，结核性腹膜炎',
            checked: '否',
            value: ''
        },
        {
            label: '自身免疫性肝病',
            checked: '否',
            value: ''
        },
        {
            label: '病毒性肝炎',
            checked: '否',
            value: ''
        },
        {
            label: '肝硬化',
            checked: '否',
            value: ''
        },
        {
            label: '消化道出血',
            checked: '否',
            value: ''
        },
        {
            label: '胰腺炎',
            checked: '否',
            value: ''
        },
        {
            label: '返流性食管炎',
            checked: '否',
            value: ''
        }, {
            label: '消化系统肿瘤',
            checked: '否',
            value: ''
        },
        {
            label: '肾小球疾病',
            checked: '否',
            value: ''
        },
        {
            label: '肾小管疾病',
            checked: '否',
            value: ''
        },
        {
            label: '肾血管疾病',
            checked: '否',
            value: ''
        },
        {
            label: '泌尿系结石',
            checked: '否',
            value: ''
        },
        {
            label: '肾移植',
            checked: '否',
            value: ''
        },
        {
            label: '慢性肾脏病',
            checked: '否',
            value: ''
        },
        {
            label: '泌尿系肿瘤',
            checked: '否',
            value: ''
        },
        {
            label: '贫血',
            checked: '否',
            value: ''
        },
        {
            label: '骨髓增生异常综合征',
            checked: '否',
            value: ''
        },

        {
            label: '白血病',
            checked: '否',
            value: ''
        },
        {
            label: '淋巴瘤',
            checked: '否',
            value: ''
        }, {
            label: '浆细胞疾病',
            checked: '否',
            value: ''
        },
        {
            label: '骨髓增殖型肿瘤',
            checked: '否',
            value: ''
        },
        {
            label: '出血性疾病',
            checked: '否',
            value: ''
        },
        {
            label: '血小板疾病',
            checked: '否',
            value: ''
        },
        {
            label: '凝血功能障碍性疾病',
            checked: '否',
            value: ''
        },

        {
            label: '噬血细胞综合征',
            checked: '否',
            value: ''
        },
        {
            label: '下丘脑疾病',
            checked: '否',
            value: ''
        },
        {
            label: '垂体疾病',
            checked: '否',
            value: ''
        },
        {
            label: '甲状腺疾病',
            checked: '否',
            value: ''
        },
        {
            label: '甲状旁腺疾病',
            checked: '否',
            value: ''
        }, {
            label: '肾上腺疾病',
            checked: '否',
            value: ''
        },
        {
            label: '性腺疾病',
            checked: '否',
            value: ''
        },
        {
            label: '多发性内分泌腺瘤',
            checked: '否',
            value: ''
        },
        {
            label: '异位激素分泌综合征',
            checked: '否',
            value: ''
        },
        {
            label: '糖尿病',
            checked: '否',
            value: ''
        },

        {
            label: '肥胖与代谢综合征',
            checked: '否',
            value: ''
        }, {
            label: '蛋白质热能营养不良',
            checked: '否',
            value: ''
        },
        {
            label: '血脂异常',
            checked: '否',
            value: ''
        },
        {
            label: '高尿酸血症',
            checked: '否',
            value: ''
        },
        {
            label: '骨质疏松',
            checked: '否',
            value: ''
        },
        {
            label: '类风湿关节炎',
            checked: '否',
            value: ''
        },
        {
            label: '脊柱关节病',
            checked: '否',
            value: ''
        },
        {
            label: '系统性红斑狼疮',
            checked: '否',
            value: ''
        },
        {
            label: '干燥综合征',
            checked: '否',
            value: ''
        },
        {
            label: '硬皮病',
            checked: '否',
            value: ''
        },
        {
            label: '血管炎',
            checked: '否',
            value: ''
        },
        {
            label: '抗磷脂抗体综合征',
            checked: '否',
            value: ''
        },
    ]
}
const subHistoryRules = {}


const subSituation = {
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
const subSituationRules = {
    onset_time: [
        { required: true, message: '请选择发病时间', trigger: ['blur'] }
    ],
    onset_confirm_interval: [
        { required: true, message: '请输入持续时间', trigger: ['blur'] }
    ],
    local_hospital: [
        { required: true, message: '请选择确诊医院', trigger: ['blur'] }
    ],
    confirm_time: [
        { required: true, message: '请选择确诊时间', trigger: ['blur'] }
    ],
    pre_treatment: [
        { required: true, message: '请选择治疗措施', trigger: 'blur' }
    ],
    local_hospitalized: [
        { required: true, message: '请选择确诊类型', trigger: ['blur'] }
    ]
}

const subBehavior = {
    arr: [{
            id: 1,
            label: '是否四肢或者颈肌乏力',
            checked: '否',
            value: ''
        },
        {
            label: '是否肌肉酸痛/胀痛/肿痛',
            checked: '否',
            value: ''
        },
        {
            label: '是否关节肿痛',
            checked: '否',
            value: ''
        },
        {
            label: '是否皮疹',
            checked: '否',
            value: ''
        },
        {
            label: '是否向阳疹',
            checked: '否',
            describe: '眶周,内眦的红色/紫红色皮疹',
            value: ''
        },
        {
            label: '是否Gottron',
            checked: '否',
            describe: '征掌指关节和/或近端指间关节,肘关节处的红斑,高出皮肤表面,有时脱屑,溃烂,结痂',
            value: ''
        },
        {
            label: '是否V字征',
            checked: '否',
            describe: '颈部以下剑突以上V字型的片状红斑',
            value: ''
        },
        {
            label: '是否披肩征',
            checked: '否',
            describe: '颈项部延伸至肩胛骨处的片状红斑',
            value: ''
        },
        {
            label: '是否技工手',
            checked: '否',
            describe: '虎口处,第一指第二指相对应部位粗糙的散在的米粒大小皮疹',
            value: ''
        },
        {
            label: '是否甲周红斑',
            checked: '否',
            describe: '指甲周围红色/紫红色的不伴溃烂脱屑的皮疹',
            value: ''
        },
        {
            label: '是否吞咽困难,饮水呛咳',
            checked: '否',
            describe: '',
            value: ''
        },

        {
            label: '是否频繁干咳',
            describe: '注意不是为了排痰时的偶尔咳嗽',
            checked: '否',
            value: ''
        },

        {
            label: '是否咳嗽,咳痰',
            checked: '否',
            describe: '咳痰颜色',
            value: ''
        },
        {
            label: '是否胸痛',
            checked: '否',
            describe: '持续时间',
            value: ''
        },
        {
            label: '是否晕厥',
            checked: '否',
            describe: '意识不清持续时间',
            value: ''
        },
        {
            label: '是否腹痛',
            checked: '否',
            describe: '腹痛部位',
            value: ''
        },
        {
            label: '是否腹泻',
            checked: '否',
            describe: '腹泻次数',
            value: ''
        },
        {
            label: '是否步态异常',
            checked: '否',
            describe: '异常类型',
            value: ''
        },
        {
            label: '是否胸闷，呼吸频率，呼吸深度有增加',
            checked: '否',
            value: ''
        }, {
            label: '是否气紧，呼吸频率，呼吸深度有增加',
            checked: '否',
            value: ''
        },
        {
            label: '是否心累，活动耐量下降',
            checked: '否',
            value: ''
        },
        {
            label: '是否心律失常，心悸',
            checked: '否',
            value: ''
        },
        {
            label: '是否黑蒙',
            checked: '否',
            value: ''
        },
        {
            label: '是否存在泌尿系统症状',
            checked: '否',
            value: ''
        },
        {
            label: '是否少尿',
            checked: '否',
            describe: '24小时尿量小于400ml'
        },
        {
            label: '是否无尿',
            checked: '否',
            describe: '24 小时尿量小于100ml'
        },
        {
            label: '是否存在中枢神经系统症状',
            checked: '否',
            value: ''
        },
        {
            label: '是否存在外周神经系统症状',
            checked: '否',
            value: ''
        },
        {
            label: '是否视觉障碍',
            checked: '否',
            value: ''
        },
        {
            label: '是否听觉障碍',
            checked: '否',
            value: ''
        },
        {
            label: '是否味觉障碍',
            checked: '否',
            value: ''
        },
        {
            label: '是否嗅觉障碍',
            checked: '否',
            value: ''
        },
        {
            label: '是否构音障碍',
            checked: '否',
            value: ''
        },
        {
            label: '是否双下肢水肿',
            checked: '否',
            value: ''
        },
        {
            label: '是否恶心,呕吐',
            checked: '否',
            value: ''
        },
        {
            label: '是否体重下降',
            checked: '否',
            value: ''
        },
        {
            label: '是否有发热',
            checked: '否',
            days: '',
            value: ''
        },
        {
            label: '其它症状',
            value: ''
        },
    ]
}
const subBehaviorRules = {}

const subSort = {
    subSort1: [{
            label: "符合IIM诊断标准",
            checked: "未知"
        },
        {
            label: "成人≥16岁",
            checked: "未知"
        }, {
            label: "病程中是否有肌酶升高",
            checked: "未知"
        },
        {
            label: "病程中是否有皮疹",
            checked: "未知"
        },
        {
            label: "病程中是否有肺间质纤维化",
            checked: "未知"
        },
        {
            label: "病程中是否出现ANA阳性",
            checked: "未知"
        },
        {
            label: "初次发病时是否合并有EB病毒感染",
            checked: "未知"
        },
        {
            label: "初次发病时是否合并有CMV病毒感染",
            checked: "未知"
        },
        {
            label: "初次发病时是否合并有疱疹病毒感染",
            checked: "未知"
        },

        {
            label: "初次发病时是否合并有肺部感染",
            checked: "未知"
        },
        {
            label: "病程中是否合并实体肿瘤",
            checked: "未知"
        },
        {
            label: "病程中是否出现单克隆免疫球蛋白",
            checked: "未知"
        },
    ],
    subSort2: [{
            label: "病程中是否出现肌炎特异性抗体阳性",
            checked: "未知",
        },
        {
            label: "患者入组前是否接受过激素或者免疫抑制剂治疗",
            checked: "未知",
        }
    ],
    subSort3: [{
        label: "具体抗体",
        value: ""
    }],
    subSort4: [{
            label: "激素治疗剂量",
            value: ""
        },
        {
            label: "治疗持续时间"
        },
        {
            label: "免疫抑制剂种类",
            value: ""
        },
        {
            label: "剂量",
            value: ""
        },
        {
            label: "治疗持续时间",
            value: ""
        }
    ]
}
const subSortRules = {}
export default {
    subject,
    subjectRules,
    subHistory,
    subHistoryRules,
    subSituation,
    subSituationRules,
    subBehavior,
    subBehaviorRules,
    subSort,
    subSortRules
}