<template>
  <div id="subSort">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>受试者分类信息</span>
      </div>
      <el-col :span="24">
        <el-form
          :model="subSort"
          label-suffix="："
          :rules="subSortRules"
          ref="subSort"
          label-width="260px"
        >
          <el-row>
            <el-col
              :offset="1"
              :span="10"
              v-for="(item, i) in subSort1"
              :key="i"
            >
              <el-form-item :label="item.label">
                <el-select v-model="item.checked">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                  <el-option label="未知" value="未知"></el-option>
                  <el-option label="忽略" value="null"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <crfCardFirst></crfCardFirst>
        </el-form>
      </el-col>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'subSort',
  data () {
    return {
      subSort: this.$form.default.caseCrf.default.subSort,
      subSortRules: this.$form.default.caseCrf.default.subSortRules
    }
  },
  computed: {
    subSort1 () {
      return this.subSort.subSort1
    },
    phyIdentity () {
      if (this.$route.query.patient)
        return JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
      else if (this.$store.state.global.patient)
        return this.$store.state.global.patient.id
    }
  },
  components: {
    crfCardFirst: resolve =>
      require([
        'components/followUp/crfList/crfSubSort/crfCardFirst.vue'
      ], resolve)
  },
  created () {
    this.$service.default.caseCrfServe.getsubSortServe(this.phyIdentity, this)
  }
}
</script>

<style lang="less" scoped></style>
