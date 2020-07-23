<template>
  <div id="crfBlood">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>血液系统数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfBlood"
          label-suffix="："
          :rules="crfBloodRules"
          ref="crfBlood"
          label-width="150px"
        >
          <el-row>
            <el-col v-for="item in crfBlood1" :key="item.label" :span="24">
              <el-form-item :label="item.label">
                <el-input v-model="item.value" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col v-for="item in crfBlood2" :key="item.label" :span="8">
              <el-form-item :label="item.label">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-card :body-style="{ padding: '20px 0' }">
            <div slot="header">
              <span>凝血指标</span>
            </div>
            <el-row style="padding-top:20px;border-bottom:1px solid #e8eaec;">
              <el-col v-for="item in crfBlood3" :key="item.label" :span="8">
                <el-form-item label-width="100px" :label="item.label">
                  <el-input v-model="item.value"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-card>
          <el-row>
            <el-col v-for="item in crfBlood4" :key="item.label" :span="8">
              <el-form-item label-width="100px" :label="item.label">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col v-for="item in crfBlood5" :key="item.label" :span="20">
              <el-form-item :label="item.label">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item :label="crfBlood.arr[17].label">
                <el-input
                  v-model="crfBlood.arr[17].value"
                  type="textarea"
                ></el-input>
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
  name: 'crfBlood',
  data () {
    return {
      crfBlood: this.$form.default.caseCrf.default.crfBlood,
      crfBloodRules: this.$form.default.caseCrf.default.crfBloodRules
    }
  },
  computed: {
    crfBlood1 () {
      let form = []
      for (let i = 0; i < 2; i++) {
        form.push(this.crfBlood.arr[i])
      }
      return form
    },
    crfBlood2 () {
      let form = []
      for (let i = 2; i < 5; i++) {
        form.push(this.crfBlood.arr[i])
      }
      return form
    },
    crfBlood3 () {
      let form = []
      for (let i = 5; i < 10; i++) {
        form.push(this.crfBlood.arr[i])
      }
      return form
    },
    crfBlood4 () {
      let form = []
      for (let i = 10; i < 15; i++) {
        form.push(this.crfBlood.arr[i])
      }
      return form
    },
    crfBlood5 () {
      let form = []
      for (let i = 15; i < 17; i++) {
        form.push(this.crfBlood.arr[i])
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
      this.$service.default.caseCrfServe.getcrfBloodServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
    else this.$publicMethods.crfFormEmpty(this, 'crfBlood')
  }
}
</script>

<style lang="less" scoped></style>
