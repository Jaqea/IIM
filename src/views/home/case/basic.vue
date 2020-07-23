<template>
  <div class="basic">
    <el-card :body-style="{ padding: '10px 20px 0px 20px' }">
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
        >
          <el-row class="content">
            <component :ref="item.name" :is="item.component"></component>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-row style="text-align:center;">
      <el-form>
        <el-form-item>
          <el-button v-show="last" @click="getLast">上一组</el-button>
          <el-button type="primary" @click="getSubmit">{{ submit }}</el-button>
          <el-button v-show="next" @click="getNext">下一组</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'caseBasic',
  data () {
    return {
      tabList: [
        {
          label: '基本信息',
          name: 'subject',
          component: 'subject'
        },
        {
          label: '既往史',
          name: 'subHistory',
          component: 'subHistory'
        },
        {
          label: '诊断情况',
          name: 'subSituation',
          component: 'subSituation'
        },
        {
          label: '临床表现',
          name: 'subBehavior',
          component: 'subBehavior'
        },
        {
          label: '受试者分类信息',
          name: 'subSort',
          component: 'subSort'
        }
      ]
    }
  },
  computed: {
    activeName: {
      get () {
        return this.$store.state.utils.basicActiveName
      },
      set (v) {
        this.$store.dispatch('set_basicActiveName', v)
      }
    },
    submit () {
      return this.$route.query.patient ? '保存更改' : '保存'
    },
    last () {
      let child = this.$refs[this.activeName]
      return this.activeName == 'subHistory' && child[0].step != 0
        ? true
        : false
    },
    next () {
      let child = this.$refs[this.activeName]
      return this.activeName == 'subHistory' && child[0].step != 6
        ? true
        : false
    },
    form () {
      return this.$form.default.caseBasic.default[this.activeName]
    },
    phyIdentity () {
      if (this.$route.query.patient)
        return JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
      else if (this.$store.state.global.patient)
        return this.$store.state.global.patient.id
    },
    isPost () {
      if (!this.phyIdentity && this.activeName == 'subject') return true
      else return false
    },
    isPatch () {
      return this.phyIdentity ? true : false
    }
  },
  methods: {
    handleClick (tab) {
      this.$store.dispatch('set_basicActiveName', tab.name)
    },
    getSubmit () {
      let child = this.$refs[this.activeName]
      child[0].$refs[this.activeName].validate(valid => {
        if (valid) {
          if (this.isPost)
            this.$service.default.caseBasicServe.postServe(
              this,
              this.activeName,
              this.form
            )
          else if (this.isPatch) {
            if (this.phyIdentity)
              this.$service.default.caseBasicServe.patchServe(
                this,
                this.activeName,
                this.phyIdentity,
                this.form
              )
          } else
            this.$message({
              showClose: true,
              message: '请先保存基本信息',
              type: 'error'
            })
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
    getLast () {
      let child = this.$refs[this.activeName]
      if (child[0].step != 0) child[0].step--
    },
    getNext () {
      let child = this.$refs[this.activeName]
      if (child[0].step != 6) child[0].step++
    }
  },
  created () {
    this.$store.dispatch('set_basicActiveName', 'subject')
  },
  components: {
    subject: resolve => require(['components/basic/subject.vue'], resolve),
    subHistory: resolve =>
      require(['components/basic/subHistory.vue'], resolve),
    subSituation: resolve =>
      require(['components/basic/subSituation.vue'], resolve),
    subBehavior: resolve =>
      require(['components/basic/subBehavior.vue'], resolve),
    subSort: resolve => require(['components/basic/subSort.vue'], resolve)
  }
}
</script>

<style lang="less" scoped>
.basic {
  position: relative;
}
.back {
  position: absolute;
  right: 10%;
  z-index: 1;
}
// .content {
//   max-height: 520px;
//   overflow-y: auto
// }
// .border {
//   border-top: 1px solid #ebeef5;
// }
.el-form {
  margin-top: 20px;
}
</style>
