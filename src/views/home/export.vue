<template>
  <div class="export">
    <el-card :body-style="{ padding: '0px' }" class="box-card">
      <div slot="header" class="clearfix">
        <span>数据导出</span>
      </div>
      <el-row style="padding-top:20px;">
        <subSort></subSort>
      </el-row>
    </el-card>
    <el-row style="text-align:center;margin-top: 20px;">
      <el-form>
        <el-form-item>
          <el-button type="primary" @click="getExport">导出Excel数据</el-button>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'export',
  data () {
    return {
      subSort: this.$form.default.dataExport.default.subExport
    }
  },
  computed: {},
  methods: {
    getExport () {
      this.$service.default.dataExportServe.postExportServe(this.subSort, this)
    }
  },
  components: {
    subSort: resolve => require(['components/basic/subSort.vue'], resolve)
  }
}
</script>

<style lang="less" scoped></style>
