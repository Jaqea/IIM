<template>
  <div class="subSituation">
    <el-col :span="23">
      <el-form
        :model="subSituation"
        label-suffix="："
        :rules="subSituationRules"
        ref="subSituation"
        label-width="150px"
      >
        <el-row>
          <el-col :span="11">
            <el-form-item label="发病时间" prop="onset_time">
              <el-date-picker
                v-model="subSituation.onset_time"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="this.$publicMethods.timeFilter"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="持续时间" prop="onset_confirm_interval">
              <el-input
                v-model="subSituation.onset_confirm_interval"
              ></el-input>
            </el-form-item>
            <el-form-item label="确诊医院" prop="local_hospital">
              <el-select
                v-model="subSituation.local_hospital"
              >
                <el-option label="医院1" value="医院1"></el-option>
                <el-option label="医院2" value="医院2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="11">
            <el-form-item label="确诊时间" prop="confirm_time">
              <el-date-picker
                v-model="subSituation.confirm_time"
                format="yyyy-MM-dd HH:mm:ss"
                value-format="yyyy-MM-dd HH:mm:ss"
                @change="this.$publicMethods.timeFilter"
              ></el-date-picker>
            </el-form-item>
            <el-form-item label="治疗措施" prop="pre_treatment">
              <el-select v-model="subSituation.pre_treatment">
                <el-option label="措施1" value="措施1"></el-option>
                <el-option label="措施2" value="措施2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="经过确诊类型" prop="local_hospitalized">
              <el-select
                v-model="subSituation.local_hospitalized"
              >
                <el-option label="住院确诊" value="住院确诊"></el-option>
                <el-option label="门诊确诊" value="门诊确诊"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <cardFirst></cardFirst>
          <cardSecond></cardSecond> </el-row></el-form
    ></el-col>
  </div>
</template>

<script>
export default {
  name: 'subSituation',
  data () {
    return {
      subSituation: this.$form.default.caseBasic.default.subSituation,
      subSituationRules: this.$form.default.caseBasic.default.subSituationRules
    }
  },
  computed: {
    phyIdentity () {
      return this.$route.query.patient
        ? JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
        : ''
    }
  },
  components: {
    cardFirst: resolve =>
      require(['components/basic/subSituation/cardFirst.vue'], resolve),
    cardSecond: resolve =>
      require(['components/basic/subSituation/cardSecond.vue'], resolve)
  },
  created () {
    if (this.phyIdentity) {
      this.$service.default.caseBasicServe.getSubSituationServe(
        this.phyIdentity,
        this
      )
    } else this.$publicMethods.formEmpty(this, 'subSituation')
  }
}
</script>

<style lang="less" scoped>
.subSituation {
  max-height: 32em;
  overflow-y: auto;
}
.el-input,
.el-select {
  width: 100%;
}
</style>
