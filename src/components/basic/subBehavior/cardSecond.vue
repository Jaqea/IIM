<template>
  <div>
    <el-row v-for="(item, i) in form" :key="i">
      <el-col style="height:33.6px;line-height:33.6px;" :span="6" :offset="1">{{
        item.label
      }}</el-col>
      <el-col :span="16">
        <el-col :span="2" :offset="2">
          <el-form-item>
            <el-select v-model="item.checked">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" :offset="4">
          <el-form-item label-width="150px" :label="item.describe">
            <el-input v-model="item.value"></el-input>
          </el-form-item>
        </el-col> </el-col
    ></el-row>
  </div>
</template>

<script>
export default {
  name: 'cardSecond',
  data () {
    return {}
  },
  computed: {
    subBehavior () {
      return this.$form.default.caseBasic.default.subBehavior.arr
    },
    form () {
      let arr = []
      for (let i = 12; i < 18; i++) arr.push(this.subBehavior[i])
      return arr
    }
  }
}
</script>

<style lang="less" scoped></style>
