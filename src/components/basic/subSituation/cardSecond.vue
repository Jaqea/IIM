<template>
  <el-card :body-style="{ padding: '20px 0px' }">
    <div slot="header">
      <span>我院确诊后给予的方案 </span>
    </div>
    <el-row
      ><el-col :span="6">
        <el-form-item label-width="100px" label="治疗措施">
          <el-select v-model="subSituation.wch_treatment.drugCategory">
            <el-option label="NSAIDS" value="NSAIDS"></el-option>
            <el-option label="口服激素" value="口服激素"></el-option>
            <el-option label="静脉激素" value="静脉激素"></el-option>
            <el-option label="其它治疗" value="其它治疗"></el-option>
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
        <el-form-item label-width="100px" label="其它治疗">
          <el-input
            :disabled="isDisabled"
            v-model="subSituation.wch_treatment.otherTreat"
          ></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="100px" label="名称">
          <el-input v-model="subSituation.wch_treatment.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="100px" label="单次剂量">
          <el-input v-model="subSituation.wch_treatment.singleDose"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="100px" label="n次/天">
          <el-input v-model="subSituation.wch_treatment.times"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="100px" label="疗程">
          <el-input v-model="subSituation.wch_treatment.treatment"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label-width="100px" label="减量方案">
          <el-input
            v-model="subSituation.wch_treatment.reduceScheme"
          ></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'cardSecond',
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
      ]
    }
  },
  computed: {
    subSituation () {
      return this.$form.default.caseBasic.default.subSituation
    },
    isDisabled () {
      return this.subSituation.wch_treatment.drugCategory == '其它治疗'
        ? false
        : true
    }
  }
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
