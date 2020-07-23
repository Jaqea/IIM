// 公共方法

export function timeFilter(time) {
    return time
}

export function firstUpperCase(str) {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

export function subHistoryTrigger(self, step) {
    self.$nextTick(() => {
        self.$refs.list.scrollTop = 0
    })
    let subHistory = self.subHistory.arr
    let form = [];
    switch (step) {
        case 0:
            for (let i = 0; i < 12; i++) {
                form.push(subHistory[i]);
            }
            break;
        case 1:
            for (let i = 12; i < 23; i++) {
                form.push(subHistory[i]);
            }
            break
        case 2:
            for (let i = 23; i < 33; i++) {
                form.push(subHistory[i]);
            }
            break
        case 3:
            for (let i = 33; i < 40; i++) {
                form.push(subHistory[i]);
            }
            break
        case 4:
            for (let i = 40; i < 50; i++) {
                form.push(subHistory[i]);
            }
            break
        case 5:
            for (let i = 50; i < 64; i++) {
                form.push(subHistory[i]);
            }
            break
        case 6:
            for (let i = 64; i < 71; i++) {
                form.push(subHistory[i]);
            }
            break
        default:
            break;
    }
    return form
}
export function objToArr(obj) {
    let arr = []
    for (let i in obj)
        arr.push(obj[i])
    return arr
}
export function objNum(obj) {
    let num = 0
    for (let i in obj)
        num++
        return num
}
export function formEmpty(self, activeName) {
    const formEmpty = {
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
                    value: '啥啥啥'
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
        },
        subSortEmpty: {
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
    }
    switch (activeName) {
        case 'subject':
            for (let key in formEmpty.subjectEmpty)
                self.$form.default['caseBasic'].default[activeName][key] = formEmpty.subjectEmpty[key]
            break;
        case 'subHistory':
            for (let i = 0; i < formEmpty.subHistoryEmpty.arr.length; i++) {
                self.$form.default['caseBasic'].default[activeName].arr[i].checked = formEmpty.subHistoryEmpty.arr[i].checked
                self.$form.default['caseBasic'].default[activeName].arr[i].value = formEmpty.subHistoryEmpty.arr[i].value
            }
            break
        case 'subSituation':
            for (let key in formEmpty.subSituationEmpty)
                if (key != 'local_treatment' || key != 'wch_treatment')
                    self.$form.default['caseBasic'].default[activeName][key] = formEmpty.subSituationEmpty[key]
            for (let key in formEmpty.subSituationEmpty.local_treatment)
                self.$form.default['caseBasic'].default[activeName].local_treatment[key] = formEmpty.subSituationEmpty.local_treatment[key]
            for (let key in formEmpty.subSituationEmpty.wch_treatment)
                self.$form.default['caseBasic'].default[activeName].wch_treatment[key] = formEmpty.subSituationEmpty.wch_treatment[key]
            break
        case 'subBehavior':
            for (let i = 0; i < formEmpty.subBehaviorEmpty.arr.length; i++) {
                self.$form.default['caseBasic'].default[activeName].arr[i].checked = formEmpty.subBehaviorEmpty.arr[i].checked
                self.$form.default['caseBasic'].default[activeName].arr[i].value = formEmpty.subBehaviorEmpty.arr[i].value
                if (self.$form.default['caseBasic'].default[activeName].arr[i].days)
                    self.$form.default['caseBasic'].default[activeName].arr[i].days = formEmpty.subBehaviorEmpty.arr[i].days
            }
            break
        case 'subSort':
            for (let i = 0; i < formEmpty.subSortEmpty.subSort1.length; i++)
                self.$form.default['caseBasic'].default[activeName].subSort1[i].checked = formEmpty.subSortEmpty.subSort1[i].checked
            for (let i = 0; i < formEmpty.subSortEmpty.subSort2.length; i++)
                self.$form.default['caseBasic'].default[activeName].subSort2[i].checked = formEmpty.subSortEmpty.subSort2[i].checked
            for (let i = 0; i < formEmpty.subSortEmpty.subSort3.length; i++)
                self.$form.default['caseBasic'].default[activeName].subSort3[i].value = formEmpty.subSortEmpty.subSort3[i].value
            for (let i = 0; i < formEmpty.subSortEmpty.subSort4.length; i++)
                self.$form.default['caseBasic'].default[activeName].subSort4[i].value = formEmpty.subSortEmpty.subSort4[i].value
            break
        default:
            break;
    }
    self.$store.dispatch('remove_patient')
}

export function privilegeTransform(privilege) {
    switch (privilege) {
        case 0:
            return '管理员'
            break;
        case 1:
            return '医生'
            break
        case 2:
            return '普通用户'
        default:
            break;
    }
}

export function transformPrivilege(privilege) {
    switch (privilege) {
        case '医生':
            return 1
            break
        case '普通用户':
            return 2
        default:
            break;
    }
}
export function phyTimesToUrl(phyTimes) {
    switch (phyTimes.toString().length) {
        case 1:
            return '000' + phyTimes.toString()
            break
        case 2:
            return '00' + phyTimes.toString()
            break
        case 3:
            return '0' + phyTimes.toString()
            break
        case 4:
            return phyTimes.toString()
            break
        default:
            break
    }
}

export function crfFormEmpty(self, activeName) {
    const formEmpty = {
        crfSubjectEmpty: {
            assessor: '',
            assessor_email: '',
            assessor_phone: '',
            assess_date: '',
        },
        crfDemographEmpty: {
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
        },
        crfImmEmpty: {
            arr: [{
                    label: 'ANA',
                    checked: '阴',
                    list: ['阴', '1:320', '1:1000', '1:3200']
                },
                {
                    label: 'dsDNA',
                    checked: ''
                },
                {
                    label: 'SSA',
                    checked: ''
                },
                {
                    label: 'SSB',
                    checked: ''
                },
                {
                    label: 'Scl-70',
                    checked: ''
                }, {
                    label: 'SM',
                    checked: ''
                },
                {
                    label: 'U1-RNP',
                    checked: ''
                },
                {
                    label: 'PR3',
                    checked: ''
                },

                {
                    label: 'EL',
                    checked: ''
                },
                {
                    label: 'MPO',
                    checked: ''
                },
                {
                    label: 'CAT',
                    checked: ''
                }, {
                    label: 'LF',
                    checked: ''
                },
                {
                    label: 'BPI',
                    checked: ''
                },
                {
                    label: 'AMA',
                    checked: ''
                },
                {
                    label: 'LKM',
                    checked: ''
                },
                {
                    label: 'LC-1',
                    checked: ''
                },
                {
                    label: 'SLA',
                    checked: ''
                },
                {
                    label: 'SMA',
                    checked: ''
                },

                // {
                //     label: '抗平滑肌抗体',
                //     checked: ''
                // },
                {
                    label: 'MDA-5',
                    checked: ''
                },
                {
                    label: 'SRP',
                    checked: ''
                },
                {
                    label: 'Jo-1',
                    checked: ''
                },
                {
                    label: 'Mi-2',
                    checked: ''
                },
                {
                    label: 'PL-7',
                    checked: ''
                },

                {
                    label: 'PL-12',
                    checked: ''
                },
                {
                    label: 'EJ',
                    checked: ''
                },
                {
                    label: 'Ku',
                    checked: ''
                },
                {
                    label: 'Ro-52',
                    checked: ''
                },
                {
                    label: 'PM-Scl75',
                    checked: ''
                },
                {
                    label: 'PM-Scl100',
                    checked: ''
                },
                {
                    label: 'TiF1-γ',
                    checked: ''
                },
                {
                    label: 'NXP-2',
                    checked: ''
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
        },
        crfTissueEmpty: {
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
        },
        crfBreathEmpty: {
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
        },
        crfCycleEmpty: {
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
        },
        crfDigestEmpty: {
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
        },
        crfUrinaryEmpty: {
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
        },
        crfBloodEmpty: {
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
        },
        crfVirusEmpty: {
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
        },
        crfTisScoreEmpty: {
            arr: [{
                    label: '肌炎活动性评分',
                    value: ''
                },
                {
                    label: '肌炎损伤性评分',
                    value: ''
                }
            ]
        },
        subSortEmpty: {
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
    }
    switch (activeName) {
        case 'crfSubject':
            for (let key in formEmpty.crfSubjectEmpty)
                self.$form.default['caseCrf'].default[activeName][key] = formEmpty.crfSubjectEmpty[key]
            break;
        case 'crfDemograph':
            for (let key in formEmpty.crfDemographEmpty)
                self.$form.default['caseCrf'].default[activeName][key] = formEmpty.crfDemographEmpty[key]
            break
        case 'crfImm':
            for (let i = 0; i < 35; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].checked = formEmpty.crfImmEmpty.arr[i].checked
            for (let i = 35; i < 50; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfImmEmpty.arr[i].value
            break
        case 'crfTissue':
            self.$form.default['caseCrf'].default[activeName].arr[0].value = formEmpty.crfTissueEmpty.arr[0].value
            self.$form.default['caseCrf'].default[activeName].arr[1].checked = formEmpty.crfTissueEmpty.arr[1].checked
            self.$form.default['caseCrf'].default[activeName].arr[2].checked = formEmpty.crfTissueEmpty.arr[2].checked
            self.$form.default['caseCrf'].default[activeName].arr[3].checked = formEmpty.crfTissueEmpty.arr[3].checked
            self.$form.default['caseCrf'].default[activeName].arr[4].checked = formEmpty.crfTissueEmpty.arr[4].checked
            self.$form.default['caseCrf'].default[activeName].arr[5].checked = formEmpty.crfTissueEmpty.arr[5].checked
            self.$form.default['caseCrf'].default[activeName].arr[6].checked = formEmpty.crfTissueEmpty.arr[6].checked
            self.$form.default['caseCrf'].default[activeName].arr[7].value = formEmpty.crfTissueEmpty.arr[7].value
            self.$form.default['caseCrf'].default[activeName].arr[8].value = formEmpty.crfTissueEmpty.arr[8].value
            self.$form.default['caseCrf'].default[activeName].arr[9].value = formEmpty.crfTissueEmpty.arr[9].value
            console.log(self.$form.default['caseCrf'].default[activeName].arr)
            break
        case 'crfBreath':
            self.$form.default['caseCrf'].default[activeName].arr[0].value = formEmpty.crfBreathEmpty.arr[0].value
            self.$form.default['caseCrf'].default[activeName].arr[1].value = formEmpty.crfBreathEmpty.arr[1].value
            self.$form.default['caseCrf'].default[activeName].arr[2].value = formEmpty.crfBreathEmpty.arr[2].value
            self.$form.default['caseCrf'].default[activeName].arr[3].value = formEmpty.crfBreathEmpty.arr[3].value
            self.$form.default['caseCrf'].default[activeName].arr[4].value = formEmpty.crfBreathEmpty.arr[4].value
            self.$form.default['caseCrf'].default[activeName].arr[5].value = formEmpty.crfBreathEmpty.arr[5].value
            self.$form.default['caseCrf'].default[activeName].arr[6].value = formEmpty.crfBreathEmpty.arr[6].value
            self.$form.default['caseCrf'].default[activeName].arr[7].value = formEmpty.crfBreathEmpty.arr[7].value
            self.$form.default['caseCrf'].default[activeName].arr[8].checked = formEmpty.crfBreathEmpty.arr[8].checked
            self.$form.default['caseCrf'].default[activeName].arr[9].checked = formEmpty.crfBreathEmpty.arr[9].checked
            self.$form.default['caseCrf'].default[activeName].arr[10].checked = formEmpty.crfBreathEmpty.arr[10].checked
            self.$form.default['caseCrf'].default[activeName].arr[11].value = formEmpty.crfBreathEmpty.arr[11].value
            self.$form.default['caseCrf'].default[activeName].arr[12].value = formEmpty.crfBreathEmpty.arr[12].value
            self.$form.default['caseCrf'].default[activeName].arr[13].value = formEmpty.crfBreathEmpty.arr[13].value
            self.$form.default['caseCrf'].default[activeName].arr[14].value = formEmpty.crfBreathEmpty.arr[14].value
            self.$form.default['caseCrf'].default[activeName].arr[15].value = formEmpty.crfBreathEmpty.arr[15].value
            self.$form.default['caseCrf'].default[activeName].arr[16].checked = formEmpty.crfBreathEmpty.arr[16].checked
            self.$form.default['caseCrf'].default[activeName].arr[17].value = formEmpty.crfBreathEmpty.arr[17].value
            self.$form.default['caseCrf'].default[activeName].arr[18].checked = formEmpty.crfBreathEmpty.arr[18].checked
            self.$form.default['caseCrf'].default[activeName].arr[19].checked = formEmpty.crfBreathEmpty.arr[19].checked
            self.$form.default['caseCrf'].default[activeName].arr[20].value = formEmpty.crfBreathEmpty.arr[20].value
            self.$form.default['caseCrf'].default[activeName].arr[21].value = formEmpty.crfBreathEmpty.arr[21].value
            self.$form.default['caseCrf'].default[activeName].arr[22].value = formEmpty.crfBreathEmpty.arr[22].value
            self.$form.default['caseCrf'].default[activeName].arr[23].value = formEmpty.crfBreathEmpty.arr[23].value
            self.$form.default['caseCrf'].default[activeName].arr[24].value = formEmpty.crfBreathEmpty.arr[24].value
            break
        case 'crfCycle':
            for (let i = 0; i < formEmpty.crfCycleEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfCycleEmpty.arr[i].value
            break
        case 'crfDigest':
            for (let i = 0; i < formEmpty.crfDigestEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfDigestEmpty.arr[i].value
            break
        case 'crfUrinary':
            for (let i = 0; i < formEmpty.crfUrinaryEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfUrinaryEmpty.arr[i].value
            break
        case 'crfBlood':
            for (let i = 0; i < formEmpty.crfBloodEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfBloodEmpty.arr[i].value
            break
        case 'crfVirus':
            for (let i = 0; i < formEmpty.crfVirusEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfVirusEmpty.arr[i].value
            break
        case 'crfTisScore':
            for (let i = 0; i < formEmpty.crfTisScoreEmpty.arr.length; i++)
                self.$form.default['caseCrf'].default[activeName].arr[i].value = formEmpty.crfTisScoreEmpty.arr[i].value
            break
        case 'subSort':
            for (let i = 0; i < formEmpty.subSortEmpty.subSort1.length; i++)
                self.$form.default['caseCrf'].default[activeName].subSort1[i].checked = formEmpty.subSortEmpty.subSort1[i].checked
            for (let i = 0; i < formEmpty.subSortEmpty.subSort2.length; i++)
                self.$form.default['caseCrf'].default[activeName].subSort2[i].checked = formEmpty.subSortEmpty.subSort2[i].checked
            for (let i = 0; i < formEmpty.subSortEmpty.subSort3.length; i++)
                self.$form.default['caseCrf'].default[activeName].subSort3[i].value = formEmpty.subSortEmpty.subSort3[i].value
            for (let i = 0; i < formEmpty.subSortEmpty.subSort4.length; i++)
                self.$form.default['caseCrf'].default[activeName].subSort4[i].value = formEmpty.subSortEmpty.subSort4[i].value
            break
        default:
            break;
    }
    self.$store.dispatch('remove_patient')
}