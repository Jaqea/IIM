<template>
  <div class="crfList">
    <el-row>
      <el-col :span="20">
        <el-tabs
          v-model="activeName"
          @tab-click="handleClick"
          tab-position="right"
        >
          <el-tab-pane
            v-for="(item, i) in steps"
            :key="i"
            :label="item.label"
            :name="item.name"
          >
            <component :ref="item.name" :is="item.component"></component>
          </el-tab-pane> </el-tabs
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'crfLIst',
  data () {
    return {
      route: this.$route.fullPath,
      steps: [
        { name: 'crfSubject', label: '病例信息', component: 'crfSubject' },
        {
          name: 'crfDemograph',
          label: '人口学信息',
          component: 'crfDemograph'
        },
        // {
        //   name: 'crfDemograph',
        //   label: '受试者情况信息',
        //   component: 'crfSub'
        // },
        { name: 'crfImm', label: '免疫系统信息', component: 'crfImm' },
        { name: 'crfTissue', label: '肌肉组织信息', component: 'crfTissue' },
        { name: 'crfBreath', label: '呼吸系统信息', component: 'crfBreath' },
        { name: 'crfCycle', label: '循环系统信息', component: 'crfCycle' },
        { name: 'crfDigest', label: '消化系统信息', component: 'crfDigest' },
        { name: 'crfUrinary', label: '泌尿系统信息', component: 'crfUrinary' },
        { name: 'crfBlood', label: '血液系统信息', component: 'crfBlood' },
        { name: 'crfVirus', label: '病毒感染信息', component: 'crfVirus' },
        {
          name: 'crfTisScore',
          label: '肌炎评分信息',
          component: 'crfTisScore'
        },
        {
          name: 'subSort',
          label: '受试者分类信息',
          component: 'subSort'
        }
      ]
    }
  },
  computed: {
    activeName: {
      get () {
        return this.$store.state.utils.crfActiveName
      },
      set (v) {
        this.$store.dispatch('set_crfActiveName', v)
      }
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
    crfSubject: resolve =>
      require(['components/followUp/crfList/crfSubject.vue'], resolve),
    crfDemograph: resolve =>
      require(['components/followUp/crfList/crfDemograph.vue'], resolve),
    crfImm: resolve =>
      require(['components/followUp/crfList/crfImm.vue'], resolve),
    crfTissue: resolve =>
      require(['components/followUp/crfList/crfTissue.vue'], resolve),
    crfBreath: resolve =>
      require(['components/followUp/crfList/crfBreath.vue'], resolve),
    crfCycle: resolve =>
      require(['components/followUp/crfList/crfCycle.vue'], resolve),
    crfDigest: resolve =>
      require(['components/followUp/crfList/crfDigest.vue'], resolve),
    crfUrinary: resolve =>
      require(['components/followUp/crfList/crfUrinary.vue'], resolve),
    crfBlood: resolve =>
      require(['components/followUp/crfList/crfBlood.vue'], resolve),
    crfVirus: resolve =>
      require(['components/followUp/crfList/crfVirus.vue'], resolve),
    crfTisScore: resolve =>
      require(['components/followUp/crfList/crfTisScore.vue'], resolve),
    subSort: resolve =>
      require(['components/followUp/crfList/subSort.vue'], resolve)
  },
  methods: {
    handleClick (tab) {
      this.$store.dispatch('set_crfActiveName', tab.name)
    }
  },
  created () {
    this.$store.dispatch('set_crfActiveName', 'crfSubject')
  }
}
</script>

<style lang="less" scoped></style>
