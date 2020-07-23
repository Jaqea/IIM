<template>
  <div id="crfTisScore">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>肌炎评分数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfTisScore"
          label-suffix="："
          :rules="crfTisScoreRules"
          ref="crfTisScore"
          label-width="150px"
        >
          <el-row>
            <el-col
              v-for="item in crfTisScore.arr"
              :key="item.label"
              :span="20"
            >
              <el-form-item :label="item.label">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfTisScore',
  data () {
    return {
      crfTisScore: this.$form.default.caseCrf.default.crfTisScore,
      crfTisScoreRules: this.$form.default.caseCrf.default.crfTisScoreRules
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
      this.$service.default.caseCrfServe.getcrfTisScoreServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfTisScore')
  }
}
</script>

<style lang="less" scoped></style>
