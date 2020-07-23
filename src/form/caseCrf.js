const crfSubject = {
    assessor: '',
    assessor_email: '',
    assessor_phone: '',
    assess_date: '',
}
const crfSubjectRules = {
    assessor: [
        { required: true, message: '请填写评价人', trigger: ['blur', 'change'] }
    ],
    assessor_email: [
        { required: true, message: '请填写邮箱', trigger: ['blur', 'change'] },
        { type: 'email', message: '邮箱格式不正确', trigger: ['blur', 'change'] },

    ],
    assessor_phone: [
        { required: true, message: '请填写电话', trigger: ['blur', 'change'] },
        { pattern: /^1(3|4|5|6|7|8|9)\d{9}$/, message: '电话格式不正确', trigger: ['blur', 'change'] }
    ],
    assess_date: [
        { required: true, message: '请填写日期', trigger: ['blur', 'change'] }
    ],
}
const crfDemograph = {
    hospital_id: "",
    address: "",
    phone: "",
    family_phone: "",
    education: "",
    city: "",
    city_pm25: '',
    job: "",
    exposure: "",
    income: "",
    is_smoke: "否",
    smoke_years: '',
    smoke_eachday: '',
    smoke_cessation: '',
    is_drink: "否",
    drink_years: '',
    drink_eachday: '',
    drink_cessation: ''
}
const crfDemographRules = {
    phone: [
        { pattern: /^1(3|4|5|6|7|8|9)\d{9}$/, message: '电话格式不正确', trigger: ['blur', 'change'] }
    ],
    family_phone: [
        { pattern: /^1(3|4|5|6|7|8|9)\d{9}$/, message: '电话格式不正确', trigger: ['blur', 'change'] }
    ],
    smoke_eachday: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ],
    smoke_cessation: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ],
    smoke_years: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ],
    drink_eachday: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ],
    drink_cessation: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ],
    drink_years: [
        { type: 'number', message: '请输入数字', trigger: ['blur', 'change'] },
    ]
}
const crfImm = {
    arr: [{
            label: 'ANA',
            checked: '阴',
            list: ['阴', '1:320', '1:1000', '1:3200']
        },
        {
            label: 'dsDNA',
            checked: '阴'
        },
        {
            label: 'SSA',
            checked: '阴'
        },
        {
            label: 'SSB',
            checked: '阴'
        },
        {
            label: 'Scl-70',
            checked: '阴'
        }, {
            label: 'SM',
            checked: '阴'
        },
        {
            label: 'U1-RNP',
            checked: '阴'
        },
        {
            label: 'PR3',
            checked: '阴'
        },

        {
            label: 'EL',
            checked: '阴'
        },
        {
            label: 'MPO',
            checked: '阴'
        },
        {
            label: 'CAT',
            checked: '阴'
        }, {
            label: 'LF',
            checked: '阴'
        },
        {
            label: 'BPI',
            checked: '阴'
        },
        {
            label: 'AMA',
            checked: '阴'
        },
        {
            label: 'LKM',
            checked: '阴'
        },
        {
            label: 'LC-1',
            checked: '阴'
        },
        {
            label: 'SLA',
            checked: '阴'
        },
        {
            label: 'SMA',
            checked: '阴'
        },

        // {
        //     label: '抗平滑肌抗体',
        //     checked: ''
        // },
        {
            label: 'MDA-5',
            checked: '阴'
        },
        {
            label: 'SRP',
            checked: '阴'
        },
        {
            label: 'Jo-1',
            checked: '阴'
        },
        {
            label: 'Mi-2',
            checked: '阴'
        },
        {
            label: 'PL-7',
            checked: '阴'
        },

        {
            label: 'PL-12',
            checked: '阴'
        },
        {
            label: 'EJ',
            checked: '阴'
        },
        {
            label: 'Ku',
            checked: '阴'
        },
        {
            label: 'Ro-52',
            checked: '阴'
        },
        {
            label: 'PM-Scl75',
            checked: '阴'
        },
        {
            label: 'PM-Scl100',
            checked: '阴'
        },
        {
            label: 'TiF1-γ',
            checked: '阴'
        },
        {
            label: 'NXP-2',
            checked: '阴'
        },
        {
            label: 'RF',
            checked: '阴',
            list: ['阳', '阴'],
            value: ''
        },
        {
            label: 'CCP',
            checked: '阴',
            list: ['阳', '阴'],
            value: ''
        },
        {
            label: 'ACA',
            checked: '阴',
            list: ['阳', '阴'],
            value: ''
        },
        {
            label: 'Coomls',
            checked: '阴',
            list: ['阳', '阴', '可疑']
        },
        {
            label: 'IGG',
            value: ''
        }, {
            label: 'IGA',
            value: ''
        },
        {
            label: 'IGM',
            value: ''
        },
        {
            label: 'IGE',
            value: ''
        },
        {
            label: 'CD3',
            value: ''
        },
        {
            label: 'CD4',
            value: ''
        },
        {
            label: 'CD8',
            value: ''
        },
        {
            label: 'CD4/CD8',
            value: ''
        },
        {
            label: 'C3',
            value: ''
        },
        {
            label: 'C4',
            value: ''
        },
        {
            label: 'ESR',
            value: ''
        },
        {
            label: 'CRP',
            value: ''
        },
        {
            label: 'TNF-α',
            value: ''
        },

        {
            label: 'IL-6',
            value: ''
        },
        {
            label: 'NK细胞活性',
            value: ''
        }

    ]
}
const crfImmRules = {}

const crfTissue = {
    arr: [{
            label: '肌电图结果',
            value: ''
        },
        {
            label: '肌纤维变异程度',
            checked: '',
            list: ['轻', '轻重', '中', '中重']
        },
        {
            label: '肌纤维变性坏死',
            checked: '',
            list: ['轻未见确切变性坏死肌纤维', '可见个别/少量变性坏死肌纤维', '较多/大量/明显的变性坏死肌纤维']
        },
        {
            label: '淋巴细胞浸润',
            checked: '',
            list: ['未见确切淋巴细胞浸润', '散在淋巴细胞浸润', '较多/大量/明显淋巴细胞浸润']
        },
        {
            label: '淋巴细胞浸润部位',
            checked: '',
            list: ['肌束膜处小血管周围', '肌束内/肌纤维周围']
        },
        {
            label: '肌纤维膜免疫组化',
            checked: '',
            list: ['HLA-ABC阳性', 'C5b-9阳性']
        },
        {
            label: '束周萎缩',
            checked: '',
            list: ['有', '无']
        },
        {
            label: '酶活性',
            value: ''
        },
        {
            label: '特殊染色',
            value: ''
        },
        {
            label: '病理诊断',
            value: ''
        },
    ]
}
const crfTissueRules = {}

const crfBreath = {
    arr: [{
            label: '咳嗽症状评估',
            value: ''
        },
        {
            label: '呼吸困难症状评估',
            value: ''
        },
        {
            label: '是否合并肺间质纤维化ILD',
            value: ''
        }, {
            label: '是否合并肺部感染',
            value: ''
        },
        {
            label: '肺间质纤维化分级',
            value: ''
        },
        {
            label: '肺功能评估',
            value: ''
        },
        {
            label: '肿瘤标志物',
            value: ''
        },

        {
            label: '胸部CT结果',
            value: ''
        },

        {
            label: 'ILD是否治疗',
            checked: '否'
        },
        {
            label: '药物类别',
            list: ['抗纤维化药', '抗氧化剂', '口服激素', '静脉激素'],
            checked: ''
        },
        {
            label: '商品名',
            list: ['甲泼尼龙', '氢化可的松', '地塞米松'],
            checked: ''
        },
        {
            label: '用法',
            value: ''
        },
        {
            label: '单次剂量',
            value: ''
        },
        {
            label: '次/天',
            value: ''
        },
        {
            label: '疗程',
            value: ''
        }, {
            label: '依从性',
            value: ''
        },
        {
            label: '是否具有肺动脉高压',
            checked: '否'
        },
        {
            label: '心脏彩超提示压力为',
            value: ''
        },
        {
            label: '肺动脉高压是否治疗',
            checked: '否'
        },
        {
            label: '名称',
            list: ['西地那非', '波生坦', '安立生坦', '伊洛前列素', '曲前列尼尔'],
            checked: ''
        },
        {
            label: '用法',
            value: ''
        },
        {
            label: '单次剂量',
            value: ''
        },
        {
            label: '次/天',
            value: ''
        },
        {
            label: '疗程',
            value: ''
        }, {
            label: '依从性',
            value: ''
        },
    ]
}
const crfBreathRules = {}

const crfCycle = {
    arr: [{
            label: '心功能分级',
            value: ''
        },
        {
            label: 'LV',
            value: ''
        },
        {
            label: 'LA',
            value: ''
        },
        {
            label: 'RV',
            value: ''
        },
        {
            label: 'RA',
            value: ''
        },
        {
            label: 'IVS',
            value: ''
        },
        {
            label: 'LVPW',
            value: ''
        },
        {
            label: 'AAO',
            value: ''
        },
        {
            label: 'MPA',
            value: ''
        },
        {
            label: 'Emv',
            value: ''
        },
        {
            label: 'Amv',
            value: ''
        },
        {
            label: 'AV',
            value: ''
        },
        {
            label: 'PV',
            value: ''
        },
        {
            label: 'Em',
            value: ''
        },
        {
            label: 'Am',
            value: ''
        }, {
            label: 'Emv/Em',
            value: ''
        },
        {
            label: 'EDD',
            value: ''
        },

        {
            label: 'ESD',
            value: ''
        },
        {
            label: 'EDV',
            value: ''
        },
        {
            label: 'ESV',
            value: ''
        },
        {
            label: 'SV',
            value: ''
        }, {
            label: 'EF',
            value: ''
        },
        {
            label: 'FS',
            value: ''
        },
        {
            label: '彩超诊断意见',
            value: ''
        },
        {
            label: '动态心电图数据记录',
            value: ''
        },
        {
            label: '动态心电图诊断结果',
            value: ''
        }, {
            label: '心脏核磁检查诊断结果',
            value: ''
        },
        {
            label: 'CK-MB',
            value: ''
        },
        {
            label: '肌钙蛋白',
            value: ''
        },
        {
            label: '肌红蛋白',
            value: ''
        },

        {
            label: 'BNP',
            value: ''
        },
        {
            label: '胆固醇',
            value: ''
        },
        {
            label: 'HDL',
            value: ''
        },
        {
            label: 'LDL',
            value: ''
        },
        {
            label: 'TG',
            value: ''
        },
    ]
}
const crfCycleRules = {}

const crfDigest = {
    arr: [{
            label: '消化系统彩超',
            value: ''
        },
        {
            label: 'CT或核磁诊断结果',
            value: ''
        },
        {
            label: 'ALT',
            value: ''
        },
        {
            label: 'AST',
            value: ''
        },
        {
            label: 'TBIL',
            value: ''
        },
        {
            label: 'DBIL',
            value: ''
        },
        {
            label: 'IBIL',
            value: ''
        },
        {
            label: 'CK',
            value: ''
        },
        {
            label: 'LDH',
            value: ''
        }, {
            label: 'HBDH',
            value: ''
        },
        {
            label: '肿瘤标志物',
            value: ''
        }
    ]
}
const crfDigestRules = {}

const crfUrinary = {
    arr: [{
            label: '彩超，CT，核磁等诊断结果',
            value: ''
        },
        {
            label: 'CREA',
            value: ''
        },
        {
            label: 'BUN',
            value: ''
        },
        {
            label: 'UA',
            value: ''
        },
        {
            label: '肿瘤标志物',
            value: ''
        }
    ]
}
const crfUrinaryRules = {}

const crfBlood = {
    arr: [{
            label: '血清蛋白电泳',
            value: ''
        },
        {
            label: '免疫固定电泳',
            value: ''
        },
        {
            label: 'NK细胞活性',
            value: ''
        },
        {
            label: 'IL-2受体',
            value: ''
        },
        {
            label: '铁蛋白',
            value: ''
        },
        {
            label: 'PT',
            value: ''
        },
        {
            label: 'APTT',
            value: ''
        },
        {
            label: 'INR',
            value: ''
        },
        {
            label: 'FIB',
            value: ''
        },
        {
            label: 'D-DIMER',
            value: ''
        },
        {
            label: 'FDP',
            value: ''
        },
        {
            label: 'HGB',
            value: ''
        }, {
            label: 'PLT',
            value: ''
        },
        {
            label: 'WBC',
            value: ''
        },
        {
            label: 'NEU',
            value: ''
        },
        {
            label: 'LYM',
            value: ''
        },
        {
            label: '骨髓涂片结果',
            value: ''
        },

        {
            label: '骨髓活检结果',
            value: ''
        },
        {
            label: '外周血/骨髓流式细胞血结果',
            value: ''
        }
    ]
}
const crfBloodRules = {}

const crfVirus = {
    arr: [{
            label: 'EB-DNA',
            value: ''
        },
        {
            label: 'EB病毒抗体',
            value: ''
        },
        {
            label: 'CMV-DNA',
            value: ''
        },
        {
            label: 'CMV抗体',
            value: ''
        },
        {
            label: '单纯疱疹病毒抗体',
            value: ''
        },
        {
            label: '其他病毒',
            value: ''
        },
    ]
}
const crfVirusRules = {}

const crfTisScore = {
    arr: [{
            label: '肌炎活动性评分',
            value: ''
        },
        {
            label: '肌炎损伤性评分',
            value: ''
        }
    ]
}
const crfTisScoreRules = {}
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






const crfAll = {
    caseReportFormVO: crfSubject,
    crfDemographicInfoVO: crfDemograph,
    crfImmuneInfoVO: crfImm,
    crfCheckUpVO: {
        height: "1.75",
        weight: "60",
        bmi: "BMI",
        bp: "血压值",
        hr: "心率值",
        br: "呼吸值",
        temp: "体温值",
        up_strength: "上肢肌力值",
        ll_strength: "下肢肌力值",
        neck_strength: "颈部肌力值",
        sj_count: "关节肿胀数目值",
        tj_count: "关节压痛数目值",
        mt_site: "肌肉压痛部位"
    },
    crfMuscleInfoVO: crfTissue,
    crfRespiratoryInfoVO: crfBreath,
    crfCirculatoryInfoVO: crfCycle,
    digestiveInfoVO: crfDigest,
    crfUrinaryInfoVO: crfUrinary,
    crfBloodInfoVO: crfBlood,
    crfVirusIndexVO: crfVirus,
    crfOtherInfoVO: crfTisScore,
    subSort
}

export default {
    crfSubject,
    crfSubjectRules,
    crfDemograph,
    crfDemographRules,
    crfImm,
    crfImmRules,
    crfTissue,
    crfTissueRules,
    crfBreath,
    crfBreathRules,
    crfCycle,
    crfCycleRules,
    crfDigest,
    crfDigestRules,
    crfUrinary,
    crfUrinaryRules,
    crfBlood,
    crfBloodRules,
    crfVirus,
    crfVirusRules,
    crfTisScore,
    crfTisScoreRules,
    subSort,
    subSortRules,
    crfAll
}