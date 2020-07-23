<template>
  <div id="crfDemograph">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>人口学信息</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="crfDemograph"
          label-suffix="："
          :rules="crfDemographRules"
          ref="crfDemograph"
          label-width="150px"
        >
          <el-col :span="11">
            <el-form-item label="住院ID" prop="hospital_id">
              <el-input v-model="crfDemograph.hospital_id"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" prop="phone">
              <el-input v-model="crfDemograph.phone"></el-input>
            </el-form-item>
            <el-form-item label="文化成程度" prop="education">
              <el-select v-model="crfDemograph.education">
                <el-option
                  v-for="(item, i) in educationOptions"
                  :key="i"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="常住城市" prop="city">
              <el-input v-model="crfDemograph.city"></el-input>
            </el-form-item>
            <el-form-item label="职业生活暴露" prop="exposure">
              <el-input v-model="crfDemograph.exposure"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11" :offset="2">
            <el-form-item label="住院地址" prop="address">
              <el-input v-model="crfDemograph.address"></el-input>
            </el-form-item>
            <el-form-item label="家属电话" prop="family_phone">
              <el-input v-model="crfDemograph.family_phone"></el-input>
            </el-form-item>
            <el-form-item label="工作" prop="job">
              <el-input v-model="crfDemograph.job"></el-input>
            </el-form-item>
            <el-form-item label="常住城市PM2.5" prop="city_pm25">
              <el-input v-model="crfDemograph.city_pm25"></el-input
            ></el-form-item>
            <el-form-item label="收入" prop="income">
              <el-select v-model="crfDemograph.income">
                <el-option
                  v-for="(item, i) in incomeOptions"
                  :key="i"
                  :label="item"
                  :value="item"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="是否吸烟" prop="is_smoke">
              <el-select v-model="crfDemograph.is_smoke">
                <el-option label="是" value="是"> </el-option>
                <el-option label="否" value="否"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="4">
            <el-form-item
              label-width="100px"
              label="若是，吸烟"
              prop="smoke_years"
            >
              <el-input v-model.number="crfDemograph.smoke_years"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>年</span></el-col>
          <el-col :offset="1" :span="4">
            <el-form-item label-width="80px" label="每天" prop="smoke_eachday">
              <el-input v-model.number="crfDemograph.smoke_eachday"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>支</span></el-col>
          <el-col :offset="1" :span="4">
            <el-form-item
              label-width="80px"
              label="戒烟"
              prop="smoke_cessation"
            >
              <el-input v-model.number="crfDemograph.smoke_cessation"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>年</span></el-col>
          <el-col :span="6">
            <el-form-item label="是否饮酒" prop="is_smoke">
              <el-select v-model="crfDemograph.is_drink">
                <el-option label="是" value="是"> </el-option>
                <el-option label="否" value="否"> </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :offset="1" :span="4">
            <el-form-item
              label-width="100px"
              label="若是，饮酒"
              prop="smoke_years"
            >
              <el-input v-model.number="crfDemograph.drink_years"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>年</span></el-col>
          <el-col :offset="1" :span="4">
            <el-form-item label-width="80px" label="每天" prop="smoke_eachday">
              <el-input v-model.number="crfDemograph.drink_eachday"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>支</span></el-col>
          <el-col :offset="1" :span="4">
            <el-form-item
              label-width="80px"
              label="戒酒"
              prop="smoke_cessation"
            >
              <el-input v-model.number="crfDemograph.drink_cessation"></el-input
            ></el-form-item>
          </el-col>
          <el-col :span="1"><span>年</span></el-col>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfDemograph',
  data () {
    return {
      incomeOptions: ['1万以下', '1-5万', '5-10万', '10万以上'],
      educationOptions: ['小学及以下', '初中', '高中', '大学', '硕士及以上'],
      crfDemograph: this.$form.default.caseCrf.default.crfDemograph,
      crfDemographRules: this.$form.default.caseCrf.default.crfDemographRules
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
      this.$service.default.caseCrfServe.getcrfDemographServe(
        this.phyIdentity,
        this.phyTimes,
        this
      )
      else this.$publicMethods.crfFormEmpty(this, 'crfDemograph')
  }
}
</script>

<style lang="less" scoped>
#crfDemograph {
  .el-col-1 {
    span {
      display: inline-block;
      height: 40px;
      line-height: 40px;
      margin-left: 10px;
    }
  }
}
</style>
