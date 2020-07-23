<template>
  <el-card :body-style="{padding:'20px 0'}">
    <div slot="header">
      <span>心脏彩超数据采集</span>
    </div>
    <el-row>
      <el-col v-for="item in crfCycle1" :key="item.label" :span="6">
        <el-form-item :label="item.label">
          <el-input v-model="item.value"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row style="padding-top:20px;border-bottom:1px solid #e8eaec;">
      <el-col :span="24">
        <el-form-item label-width="120px" :label="crfCycle.arr[23].label">
          <el-input v-model="crfCycle.arr[23].value" type="textarea"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'crfCycleMid',
  data () {
    return {
      crfCycle: this.$form.default.caseCrf.default.crfCycle
    }
  },
  computed: {
    crfCycle1 () {
      let form = []
      for (let i = 1; i < 23; i++) {
        form.push(this.crfCycle.arr[i])
      }
      return form
    },
  }
}
</script>

<style lang="less" scoped></style>
