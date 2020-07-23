<template>
  <div id="crfTissue">
    <el-card class="box-card">
      <div slot="header">
        <span>肌肉组织数据采集</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfTissue"
          label-suffix="："
          :rules="crfTissueRules"
          ref="crfTissue"
          label-width="150px"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item :label="crfTissue.arr[0].label">
                <el-input
                  type="textarea"
                  v-model="crfTissue.arr[0].value"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row  style="margin-bottom:20px; border-bottom:1px solid #e8eaec;">
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header">
                  <span>肌肉组织病理结果</span>
                </div>
                <el-row>
                  <el-col
                    v-for="item in crfTissue1"
                    :key="item.label"
                    :span="12"
                  >
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
                </el-row>
              </el-card>
            </el-col>
          </el-row>
          <el-row>
            <el-col v-for="item in crfTissue2" :key="item.label" :span="24">
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
  name: 'crfTissue',
  data () {
    return {
      crfTissue: this.$form.default.caseCrf.default.crfTissue,
      crfTissueRules: this.$form.default.caseCrf.default.crfTissueRules
    }
  },
  computed: {
    crfTissue1 () {
      let form = []
      for (let i = 1; i < 7; i++) {
        form.push(this.crfTissue.arr[i])
      }
      return form
    },
    crfTissue2 () {
      let form = []
      for (let i = 7; i < 10; i++) {
        form.push(this.crfTissue.arr[i])
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
      this.$service.default.caseCrfServe.getcrfTissueServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfTissue')
  }
}
</script>

<style lang="less" scoped></style>
