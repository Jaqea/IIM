<template>
  <div>
    <el-card :body-style="{ padding: '0 20px' }">
      <div slot="header">
        <span style="height:41px;line-height:41px;overflow: hidden;">
          <el-row>
            <el-col :offset="1" :span="14">
              <el-col :span="10">
                {{ subSort2[0].label }}
              </el-col>
              <el-col :span="3">
                <el-form-item style="margin-bottom: 0px;" label-width="0px">
                  <el-select v-model="subSort2[0].checked">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                    <el-option label="未知" value="未知"></el-option>
                    <el-option label="忽略" value="null"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </div>
      <el-row v-if="isYangXing" v-for="(item, i) in subSort3" :key="i">
        <el-col :span="24" style="height:41px;line-height:41px;margin:10px 0;">
          <el-col :span="8">
            <el-form-item label-width="150px" :label="item.label">
              <el-input v-model="item.value"></el-input>
            </el-form-item>
          </el-col>
        </el-col>
      </el-row>
      <div v-if="isYangXing" style="border-bottom: 1px solid #e8eaec;"></div>
    </el-card>
    <el-card :body-style="{ padding: '0 20px' }">
      <div slot="header">
        <span style="height:41px;line-height:41px;overflow: hidden;">
          <el-row>
            <el-col :offset="1" :span="14">
              <el-col :span="13">
                {{ subSort2[1].label }}
              </el-col>
              <el-col :span="3">
                <el-form-item style="margin-bottom: 0px;" label-width="0px">
                  <el-select v-model="subSort2[1].checked">
                    <el-option label="是" value="是"></el-option>
                    <el-option label="否" value="否"></el-option>
                    <el-option label="未知" value="未知"></el-option>
                    <el-option label="忽略" value="null"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </div>
      <el-row v-if="isCure" style="padding-top:20px">
        <el-col :span="7" v-for="(item, i) in subSort4" :key="i">
          <el-form-item label-width="150px" :label="item.label">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'cardFirst',
  data () {
    return {}
  },
  computed: {
    subSort2 () {
      return this.$route.name == 'export'
        ? this.$form.default.dataExport.default.subExport.subSort2
        : this.$form.default.caseBasic.default.subSort.subSort2
    },
    subSort3 () {
      return this.$route.name == 'export'
        ? this.$form.default.dataExport.default.subExport.subSort3
        : this.$form.default.caseBasic.default.subSort.subSort3
    },
    subSort4 () {
      return this.$route.name == 'export'
        ? this.$form.default.dataExport.default.subExport.subSort4
        : this.$form.default.caseBasic.default.subSort.subSort4
    },
    isYangXing () {
      return this.subSort2[0].checked == '是' ? true : false
    },
    isCure () {
      return this.subSort2[1].checked == '是' ? true : false
    }
  }
}
</script>

<style lang="less" scoped>
.el-card {
  border: none;
}
// .el-form-item {
//   margin-bottom: 0px;
// }
</style>
