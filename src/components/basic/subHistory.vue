<template>
  <div class="subHistory">
    <el-steps :active="step" id="step">
      <el-step v-for="(item, i) in title" :title="item" :key="i"> </el-step>
    </el-steps>
    <el-divider></el-divider>
    <el-form :model="subHistory" :rules="subHistoryRules" ref="subHistory">
      <subHistoryCom></subHistoryCom>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'subHistory',
  data () {
    return {
      subHistory:this.$form.default.caseBasic.default.subHistory,
      subHistoryRules: this.$form.default.caseBasic.default.subHistoryRules,
      title: [
        '呼吸系统',
        '循环系统',
        '消化系统',
        '泌尿系统',
        '血液系统',
        '内分泌系统',
        '免疫系统'
      ],
      step: 0
    }
  },
  computed: {
    phyIdentity () {
      return this.$route.query.patient
        ? JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
        : ''
    }
  },
  created () {
    if (this.phyIdentity) {
      this.$service.default.caseBasicServe.getSubHistoryServe(
        this.phyIdentity,
        this
      )
    }else this.$publicMethods.formEmpty(this, 'subHistory')
  },
  components: {
    subHistoryCom: resolve =>
      require(['components/basic/subHistory/subHistoryCom.vue'], resolve)
  }
}
</script>

<style lang="less" scoped>
.el-divider--horizontal {
  margin: 12px 0;
}
</style>
