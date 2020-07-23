<template>
  <div id="crfSubject">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>病例信息</span>
      </div>
      <el-col :span="20">
        <el-form
          :model="crfSubject"
          label-suffix="："
          :rules="crfSubjectRules"
          ref="crfSubject"
          label-width="100px"
        >
          <el-form-item label="评价人" prop="assessor">
            <el-input v-model="crfSubject.assessor"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="assessor_email">
            <el-input v-model="crfSubject.assessor_email"></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="assessor_phone">
            <el-input v-model="crfSubject.assessor_phone"></el-input>
          </el-form-item>
          <el-form-item label="日期" prop="assess_date">
            <el-date-picker
              placeholder="选择出生年月"
              v-model="crfSubject.assess_date"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              @change="this.$publicMethods.timeFilter"
            ></el-date-picker>
          </el-form-item>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfSubject',
  data () {
    return {
      crfSubject: this.$form.default.caseCrf.default.crfSubject,
      crfSubjectRules: this.$form.default.caseCrf.default.crfSubjectRules
    }
  },
  computed: {
    phyTimes () {
      return JSON.parse(Base64.decode(this.$route.query.patient)).phyTimes
    },
    phyIdentity () {
      if (this.$route.query.patient)
        return JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
      else if (this.$store.state.global.patient)
        return this.$store.state.global.patient.id
    }
  },
  created () {
    if (this.phyTimes)
      this.$service.default.caseCrfServe.getcrfSubjectServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfSubject')
  }
}
</script>

<style lang="less" scoped></style>
