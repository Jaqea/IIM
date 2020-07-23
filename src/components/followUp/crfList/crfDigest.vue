<template>
  <div id="crfDigest">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>消化系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfDigest"
          label-suffix="："
          :rules="crfDigestRules"
          ref="crfDigest"
          label-width="150px"
        >
        <el-row>
          <el-col v-for="item in crfDigest1" :key="item.label" :span="24">
            <el-form-item :label="item.label">
              <el-input v-model="item.value" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col v-for="item in crfDigest2" :key="item.label" :span="6">
            <el-form-item label-width="100px" :label="item.label">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col v-for="item in crfDigest3" :key="item.label" :span="24">
            <el-form-item :label="item.label">
              <el-input v-model="item.value" type="textarea"></el-input>
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
  name: 'crfDigest',
  data () {
    return {
      crfDigest: this.$form.default.caseCrf.default.crfDigest,
      crfDigestRules: this.$form.default.caseCrf.default.crfDigestRules
    }
  },
  computed: {
    crfDigest1 () {
      let form = []
      for (let i = 0; i < 2; i++) {
        form.push(this.crfDigest.arr[i])
      }
      return form
    },
    crfDigest2 () {
      let form = []
      for (let i = 2; i < 10; i++) {
        form.push(this.crfDigest.arr[i])
      }
      return form
    },
    crfDigest3 () {
      let form = []
      for (let i = 10; i < 11; i++) {
        form.push(this.crfDigest.arr[i])
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
  created () {
    if (this.phyTimes)
      this.$service.default.caseCrfServe.getcrfDigestServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfDigest')
  }
}
</script>

<style lang="less" scoped></style>
