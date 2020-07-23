<template>
  <div class="followUp">
    <el-card :body-style="{ padding: '10px 20px', 'padding-bottom': '0px' }">
      <router-link class="back" :to="'case' | routerQuery">
        <el-button type="text">
          <span>
            <i class="el-icon-back" />
            返回
          </span>
        </el-button>
      </router-link>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          :label="item.label"
          v-for="(item, i) in tabList"
          :key="i"
          :name="item.name"
          ><el-row class="content">
            <component
              :ref="item.name"
              :is="item.component"
            ></component> </el-row
        ></el-tab-pane>
      </el-tabs>
    </el-card>
    <el-row style="margin-top:20px;text-align:center;">
      <el-form>
        <el-form-item>
          <!-- <el-button type="primary" @click="getSubmit">{{ submit }}</el-button> -->
          <el-button type="primary" @click="getSubmitAll">{{
            submitAll
          }}</el-button></el-form-item
        >
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'followUp',
  data () {
    return {
      activeName: 'crfList',
      tabList: [
        {
          label: '病例报告表crf',
          name: 'crfList',
          component: 'crfList'
        },
        {
          label: '肌肉拐伤评估',
          name: 'muscleInjury',
          component: 'muscleInjury'
        },
        {
          label: '肌肉活动评估',
          name: 'muscleActivity',
          component: 'muscleActivity'
        }
      ]
    }
  },
  computed: {
    submit () {
      return JSON.parse(Base64.decode(this.$route.query.patient)).phyTimes
        ? '保存更改'
        : '保存'
    },
    submitAll () {
      return JSON.parse(Base64.decode(this.$route.query.patient)).phyTimes
        ? '保存所有更改'
        : '保存所有'
    },
    isPhyTimes () {
      return JSON.parse(Base64.decode(this.$route.query.patient)).phyTimes
        ? true
        : false
    },
    isPost () {
      return !this.isPhyTimes ? true : false
    },
    isPatch () {
      return this.isPhyTimes ? true : false
    },
    phyIdentity () {
      if (this.$route.query.patient)
        return JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
      else if (this.$store.state.global.patient)
        return this.$store.state.global.patient.id
    },
    phyTimes () {
      return JSON.parse(Base64.decode(this.$route.query.patient)).phyTimes
    },
    form () {
      let activeName = this.$store.state.utils.crfActiveName
      return this.$form.default.caseCrf.default[activeName]
    },
    allForm () {
      return this.$form.default.caseCrf.default['crfAll']
    }
  },
  methods: {
    handleClick (tab) {
      this.activeName = tab.name
    },
    getSubmit () {
      let activeName = this.$store.state.utils.crfActiveName
      let child = this.$refs['crfList'][0].$refs[activeName]
      child[0].$refs[activeName].validate(valid => {
        if (valid) {
          if (this.isPost)
            this.$service.default.caseCrfServe.postServe(
              this,
              activeName,
              this.phyIdentity,
              this.phyTimes,
              this.form
            )
          else if (this.isPatch) {
            if (this.phyIdentity)
              this.$service.default.caseCrfServe.patchServe(
                this,
                activeName,
                this.phyIdentity,
                this.phyTimes,
                this.form
              )
          }
        } else {
          this.$message({
            showClose: true,
            message: '请输入完整！!',
            type: 'error'
          })
          return false
        }
      })
    },
    getSubmitAll () {
      // let activeName = this.$store.state.utils.crfActiveName
      let child = this.$refs['crfList'][0].$refs['crfSubject']
      child[0].$refs['crfSubject'].validate(valid => {
        if (valid) {
          if (this.isPost)
            this.$service.default.caseCrfServe.postAllServe(
              this,
              this.phyIdentity,
              this.allForm
            )
          else if (this.isPatch) {
            if (this.phyIdentity)
              this.$service.default.caseCrfServe.patchAllServe(
                this,
                this.phyIdentity,
                this.phyTimes,
                this.allForm
              )
          }
        } else {
          this.$message({
            showClose: true,
            message: '病例信息请输入完整!',
            type: 'error'
          })
          return false
        }
      })
    }
  },
  components: {
    crfList: resolve => require(['components/followUp/crfList.vue'], resolve),
    muscleInjury: resolve =>
      require(['components/followUp/muscleInjury.vue'], resolve),
    muscleActivity: resolve =>
      require(['components/followUp/muscleActivity.vue'], resolve)
  }
}
</script>

<style lang="less" scoped>
.followUp {
  position: relative;
}
.back {
  position: absolute;
  right: 10%;
  z-index: 1;
}
.content {
  height: 31em;
  overflow-y: auto;
}
</style>
