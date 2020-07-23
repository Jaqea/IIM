<template>
  <div id="crfBreath">
    <el-card>
      <div slot="header" class="clearfix">
        <span>呼吸系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfBreath"
          label-suffix="："
          :rules="crfBreathRules"
          ref="crfBreath"
          label-width="190px"
        >
          <el-row style="border-bottom:1px solid #e8eaec;">
            <el-col v-for="item in crfBreath1" :key="item.label" :span="24">
              <el-form-item :label="item.label">
                <el-input v-model="item.value" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <crfBreathFirst></crfBreathFirst>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfBreath',
  data () {
    return {
      crfBreath: this.$form.default.caseCrf.default.crfBreath,
      crfBreathRules: this.$form.default.caseCrf.default.crfBreathRules
    }
  },
  computed: {
    crfBreath1 () {
      let form = []
      for (let i = 0; i < 7; i++) {
        form.push(this.crfBreath.arr[i])
      }
      return form
    },
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
  components: {
    crfBreathFirst: resolve =>
      require([
        'components/followUp/crfList/crfBreath/crfBreathFirst.vue'
      ], resolve)
  },
  created () {
    if (this.phyTimes)
      this.$service.default.caseCrfServe.getcrfBreathServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
    else this.$publicMethods.crfFormEmpty(this, 'crfBreath')
  }
}
</script>

<style lang="less" scoped></style>
