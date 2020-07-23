<template>
  <div id="crfCycle">
    <el-card>
      <div slot="header" class="clearfix">
        <span>循环系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfCycle"
          label-suffix="："
          :rules="crfCycleRules"
          ref="crfCycle"
          label-width="100px"
        >
          <el-row style="border-bottom:1px solid #e8eaec;">
            <el-col :span="20">
              <el-form-item :label="crfCycle.arr[0].label">
                <el-input v-model="crfCycle.arr[0].value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <crfCycleMid></crfCycleMid>
          <el-row>
            <el-col v-for="item in crfCycle2" :key="item.label" :span="24">
              <el-form-item label-width="170px" :label="item.label">
                <el-input v-model="item.value" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" v-for="item in crfCycle3" :key="item.label">
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
  name: 'crfCycle',
  data () {
    return {
      crfCycle: this.$form.default.caseCrf.default.crfCycle,
      crfCycleRules: this.$form.default.caseCrf.default.crfCycleRules
    }
  },
  computed: {
    crfCycle2 () {
      let form = []
      for (let i = 24; i < 27; i++) {
        form.push(this.crfCycle.arr[i])
      }
      return form
    },
    crfCycle3 () {
      let form = []
      for (let i = 27; i < 35; i++) {
        form.push(this.crfCycle.arr[i])
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
    crfCycleMid: resolve =>
      require(['components/followUp/crfList/crfCycle/crfCycleMid.vue'], resolve)
  },
  created () {
    if (this.phyTimes)
      this.$service.default.caseCrfServe.getcrfCycleServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfCycle')
  }
}
</script>

<style lang="less" scoped></style>
