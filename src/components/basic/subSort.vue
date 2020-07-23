<template>
  <div :class="subSortClass">
    <el-form
      :model="subSort"
      label-suffix="："
      :rules="subSortRules"
      ref="subSort"
      label-width="260px"
    >
      <el-row>
        <el-col :offset="1" :span="9" v-for="(item, i) in subSort1" :key="i">
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
      <cardFirst></cardFirst>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'subSort',
  data () {
    return {
      subSort:
        this.$route.name == 'export'
          ? this.$form.default.dataExport.default.subExport
          : this.$form.default.caseBasic.default.subSort,
      subSortRules: this.$form.default.caseBasic.default.subSortRules
    }
  },
  computed: {
    subSortClass () {
      return this.$route.name == 'export' ? 'export' : 'subSort'
    },
    subSort1 () {
      return this.subSort.subSort1
    },
    phyIdentity () {
      return this.$route.query.patient
        ? JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
        : ''
    }
  },
  components: {
    cardFirst: resolve =>
      require(['components/basic/subSort/cardFirst.vue'], resolve)
  },
  created () {
    if (this.phyIdentity) {
      this.$service.default.caseBasicServe.getSubSortServe(
        this.phyIdentity,
        this
      )
    } else this.$publicMethods.formEmpty(this, 'subSort')
  }
}
</script>

<style lang="less" scoped>
.subSort {
  max-height: 32em;
  overflow-y: auto;
}
.export {
  max-height: 31em;
  overflow-y: auto;
}
</style>
