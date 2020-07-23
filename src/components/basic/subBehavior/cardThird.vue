<template>
  <div style="border-top: 1px solid #e8eaec; padding-top:20px;">
    <el-row>
      <el-col style="height:33.6px;line-height:33.6px;" :span="6" :offset="1">{{
        form[0].label
      }}</el-col>
      <el-col :span="16">
        <el-col :span="2" :offset="2">
          <el-form-item>
            <el-select v-model="form[0].checked">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="6">
          <el-form-item label-width="100px" label="次/天">
            <el-input v-model="form[0].value"></el-input>
          </el-form-item>
        </el-col> </el-col
    ></el-row>
    <el-row>
      <el-col style="height:33.6px;line-height:33.6px;" :span="6" :offset="1">{{
        form[1].label
      }}</el-col>
      <el-col :span="16">
        <el-col :span="2" :offset="2">
          <el-form-item>
            <el-select v-model="form[1].checked">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="6">
          <el-form-item label-width="100px" label="下降(斤)">
            <el-input v-model="form[1].value"></el-input>
          </el-form-item>
        </el-col> </el-col
    ></el-row>
    <el-row>
      <el-col style="height:33.6px;line-height:33.6px;" :span="6" :offset="1">{{
        form[2].label
      }}</el-col>
      <el-col :span="16">
        <el-col :span="2" :offset="2">
          <el-form-item>
            <el-select v-model="form[2].checked">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="14" :offset="4">
          <el-col :span="12">
            <el-form-item label-width="120px" label="发热最高体温">
              <el-input v-model="form[2].value"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label-width="120px" label="发热持续天数">
              <el-input v-model="form[2].days"></el-input>
            </el-form-item>
          </el-col>
        </el-col> </el-col
    ></el-row>
    <el-row style="border-top: 1px solid #e8eaec; padding-top:20px;">
      <el-col style="height:33.6px;line-height:33.6px;" :span="2" :offset="1">{{
        form[3].label
      }}</el-col>
      <el-col :span="18">
        <el-form-item>
          <el-input
            :autosize="{ minRows: 3, maxRows: 8 }"
            type="textarea"
            v-model="form[3].value"
          ></el-input>
        </el-form-item> </el-col
    ></el-row>
  </div>
</template>

<script>
export default {
  name: 'cardThird',
  data () {
    return {}
  },
  computed: {
    subBehavior () {
      return this.$form.default.caseBasic.default.subBehavior.arr
    },
    form () {
      let arr = []
      for (let i = 34; i < 38; i++) arr.push(this.subBehavior[i])
      return arr
    }
  }
}
</script>

<style lang="less" scoped></style>
