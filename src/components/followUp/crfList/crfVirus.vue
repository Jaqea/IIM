<template>
  <div id="crfVirus">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>病毒感染相关指标</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfVirus"
          label-suffix="："
          :rules="crfVirusRules"
          ref="crfVirus"
          label-width="150px"
        >
          <el-card :body-style="{padding:'20px 0'}">
            <div slot="header">
              <span>EB病毒</span>
            </div>
            <el-row style="border-bottom:1px solid #e8eaec;">
              <el-col v-for="item in crfVirus1" :key="item.label" :span="12">
                <el-form-item :label="item.label">
                  <el-input v-model="item.value"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <el-card :body-style="{padding:'20px 0'}">
            <div slot="header">
              <span>巨细胞病毒</span>
            </div>
            <el-row >
              <el-col v-for="item in crfVirus2" :key="item.label" :span="12">
                <el-form-item :label="item.label">
                  <el-input v-model="item.value"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfVirus',
  data () {
    return {
      crfVirus: this.$form.default.caseCrf.default.crfVirus,
      crfVirusRules: this.$form.default.caseCrf.default.crfVirusRules
    }
  },
  computed: {
    crfVirus1() {
      let form = [];
      for (let i = 0; i < 2; i++) {
        form.push(this.crfVirus.arr[i]);
      }
      return form;
    },
    crfVirus2() {
      let form = [];
      for (let i = 2; i < 6; i++) {
        form.push(this.crfVirus.arr[i]);
      }
      return form;
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
    this.$service.default.caseCrfServe.getcrfVirusServe(
      this.phyIdentity,
      this.phyTimes,
      this
    )
    else this.$publicMethods.crfFormEmpty(this, 'crfVirus')
  }
}
</script>

<style lang="less" scoped></style>
