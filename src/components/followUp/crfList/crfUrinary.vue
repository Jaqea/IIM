<template>
  <div id="crfUrinary">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>泌尿系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfUrinary"
          label-suffix="："
          :rules="crfUrinaryRules"
          ref="crfUrinary"
          label-width="200px"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item :label="crfUrinary.arr[0].label">
                <el-input
                  v-model="crfUrinary.arr[0].value"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </el-col> </el-row
          ><el-row>
            <el-col :span="24">
              <el-form-item :label="crfUrinary.arr[4].label">
                <el-input
                  v-model="crfUrinary.arr[4].value"
                  type="textarea"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col v-for="item in crfUrinary1" :key="item.label" :span="20">
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
  name: 'crfUrinary',
  data () {
    return {
      crfUrinary: this.$form.default.caseCrf.default.crfUrinary,
      crfUrinaryRules: this.$form.default.caseCrf.default.crfUrinaryRules
    }
  },
  computed: {
    crfUrinary1 () {
      let form = []
      for (let i = 1; i < 4; i++) {
        form.push(this.crfUrinary.arr[i])
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
      this.$service.default.caseCrfServe.getcrfUrinaryServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfUrinary')
  }
}
</script>

<style lang="less" scoped></style>
