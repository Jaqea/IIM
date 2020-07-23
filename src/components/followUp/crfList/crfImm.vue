<template>
  <div id="crfImm">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>免疫系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfImm"
          label-suffix="："
          :rules="crfImmRules"
          ref="crfImm"
          label-width="100px"
        >
          <el-row style="margin-bottom:20px; border-bottom:1px solid #e8eaec;">
            <el-col :span="12">
              <el-form-item :label="crfImm.arr[0].label">
                <el-select v-model="crfImm.arr[0].checked">
                  <el-option
                    v-for="item in crfImm.arr[0].list"
                    :label="item"
                    :value="item"
                    :key="item"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="ENA">
                <el-col v-for="item in crfImm1" :key="item.label" :span="10">
                  <span>{{ item.label }}：</span>
                  <el-checkbox
                    true-label="阳"
                    false-label="阴"
                    :label="item.label"
                    v-model="item.checked"
                    >阳</el-checkbox
                  >
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:20px; border-bottom:1px solid #e8eaec;">
            <el-col :span="12">
              <el-form-item label="ANCA">
                <el-col v-for="item in crfImm2" :key="item.label" :span="10">
                  <span>{{ item.label }}：</span>
                  <el-checkbox
                    true-label="阳"
                    false-label="阴"
                    :label="item.label"
                    v-model="item.checked"
                    >阳</el-checkbox
                  >
                </el-col>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label-width="100px" label="自免肝抗体">
                <el-col v-for="item in crfImm3" :key="item.label" :span="10">
                  <span>{{ item.label }}：</span>
                  <el-checkbox
                    true-label="阳"
                    false-label="阴"
                    :label="item.label"
                    v-model="item.checked"
                    >阳</el-checkbox
                  >
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="margin-bottom:20px; border-bottom:1px solid #e8eaec;">
            <el-col :span="22">
              <el-form-item label-width="130px" label="肌炎特异性抗体">
                <el-col v-for="item in crfImm4" :key="item.label" :span="6">
                  <span>{{ item.label }}：</span>
                  <el-checkbox
                    true-label="阳"
                    false-label="阴"
                    :label="item.label"
                    v-model="item.checked"
                    >阳</el-checkbox
                  >
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col v-for="item in crfImm5" :span="6" :key="item.label">
              <el-form-item :label="item.label">
                <el-select v-model="item.checked">
                  <el-option
                    v-for="item1 in item.list"
                    :key="item1"
                    :label="item1"
                    :value="item1"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <crfImmLast></crfImmLast>
          </el-row>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfImm',
  data () {
    return {
      crfImm: this.$form.default.caseCrf.default.crfImm,
      crfImmRules: this.$form.default.caseCrf.default.crfImmRules
    }
  },
  computed: {
    crfImm1 () {
      let form = []
      for (let i = 1; i < 7; i++) {
        form.push(this.crfImm.arr[i])
      }
      return form
    },
    crfImm2 () {
      let form = []
      for (let i = 7; i < 13; i++) {
        form.push(this.crfImm.arr[i])
      }
      return form
    },
    crfImm3 () {
      let form = []
      for (let i = 13; i < 18; i++) {
        form.push(this.crfImm.arr[i])
      }
      return form
    },
    crfImm4 () {
      let form = []
      for (let i = 18; i < 31; i++) {
        form.push(this.crfImm.arr[i])
      }
      return form
    },
    crfImm5 () {
      let form = []
      for (let i = 31; i < 35; i++) {
        form.push(this.crfImm.arr[i])
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
    crfImmLast: resolve =>
      require(['components/followUp/crfList/crfImm/crfImmLast.vue'], resolve)
  },
  created () {
    if (this.phyTimes)
      this.$service.default.caseCrfServe.getcrfImmServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfImm')
  }
}
</script>

<style lang="less" scoped>
#crfImm {
  .el-col-12,
  .el-col-22 {
    span {
      display: inline-block;
      width: 5em;
      text-align: right;
    }
  }
  .el-col-22 {
    span {
      width: 7em;
    }
  }
}
</style>
