<template>
  <div>
    <el-card :body-style="{ margin: '20px 0px','border-bottom':'1px solid #EBEEF5' }">
      <div slot="header">
        <span>当地确诊医院给予的治疗</span>
      </div>
      <el-row
        ><el-col :span="6">
          <el-form-item
            label-width="100px"
            label="治疗措施"
          >
            <el-select v-model="subSituation.local_treatment.drugCategory">
              <el-option label="NSAIDS" value="NSAIDS"></el-option>
              <el-option label="口服激素" value="口服激素"></el-option>
              <el-option label="静脉激素" value="静脉激素"></el-option>
              <el-option-group label="免疫抑制剂">
                <el-option
                  v-for="(item, i) in immSupre"
                  :key="i"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-option-group>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="名称">
            <el-input v-model="subSituation.local_treatment.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="单次剂量">
            <el-input v-model="subSituation.local_treatment.singleDose"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label='次/天'>
            <el-input v-model="subSituation.local_treatment.times"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="疗程">
            <el-input v-model="subSituation.local_treatment.treatment"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="依从性">
            <el-input v-model="subSituation.local_treatment.compliance"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-row>
      <el-col :span="11">
        <el-form-item
          label-width="180px"
          label="就诊时间"
        >
          <el-date-picker
            v-model="subSituation.wch_confirm_time"
            format="yyyy-MM-dd HH:mm:ss"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="this.$publicMethods.timeFilter"
          ></el-date-picker>
        </el-form-item>
        <el-form-item
          label="在我院是否住院确诊"
          label-width="180px"
        >
          <el-select v-model="subSituation.wch_hospitalized">
            <el-option label="住院确诊" value="住院确诊"></el-option>
            <el-option label="门诊确诊" value="门诊确诊"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label-width="180px"
          label="肌炎特异性抗体结果"
        >
          <el-select v-model="subSituation.has_msa">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="11" :offset="1">
        <el-form-item
          label-width="180px"
          label="从发病到我院持续时间"
        >
          <el-input v-model="subSituation.onset_wch_interval"></el-input>
        </el-form-item>
        <el-form-item
          label-width="180px"
          label="肌肉活检病理结果"
        >
          <el-select v-model="subSituation.has_mb">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label-width="180px"
          label="我院IIM诊断具体类型"
        >
          <el-select v-model="subSituation.iim_category">
            <el-option
              v-for="(item, i) in iim_category"
              :key="i"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'cardFirst',
  data () {
    return {
      immSupre: [
        '甲氨喋呤',
        '霉酚酸酯',
        '环孢素A',
        '硫唑嘌呤',
        '来氟米特',
        '雷公藤多苷',
        '硫酸羟氯喹',
        '柳氮磺吡啶',
        '青霉胺'
      ],
      iim_category: [
        '皮肌炎',
        '多发性肌炎',
        '免疫性坏死性肌炎',
        '抗合成酶抗体综合征',
        '无肌病皮肌炎',
        '包涵体肌炎',
        '重叠性肌炎',
        '其他：非特异性肌炎'
      ]
    }
  },
  computed: {
    subSituation () {
      return this.$form.default.caseBasic.default.subSituation
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.el-card {
  border: none;
}
.el-input,
.el-select {
  width: 100%;
}
</style>
