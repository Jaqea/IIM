<template>
  <el-card :body-style="{padding:'10px 20px'}">
    <div slot="header">
      <span style="height:35px;line-height:35px;overflow: hidden;">
        <el-row>
          <el-col :span="11">
            <el-col :span="4">
              {{ subBehavior[3].label }}
            </el-col>
            <el-col :span="3">
              <el-form-item>
                <el-select v-model="subBehavior[3].checked">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
      </span>
    </div>
    <el-row v-if="isPiZheng" v-for="(item, i) in form" :key="i">
      <el-col :span="24" style="height:41px;line-height:41px;margin:10px 0;">
        <el-col :span="5" :offset="1">
          {{ item.label }}
        </el-col>
        <el-col :span="18">
          <el-col :span="2" :offset="1">
            <el-form-item>
              <el-select v-model="item.checked">
                <el-option label="是" value="是"></el-option>
                <el-option label="否" value="否"></el-option>
              </el-select>
            </el-form-item> </el-col
          ><el-col :span="17" :offset="3">
            {{ item.describe }}
          </el-col>
        </el-col>
      </el-col>
    </el-row>
    <div v-if="isPiZheng" style="border-bottom: 1px solid #e8eaec;"></div>
  </el-card>
</template>

<script>
export default {
  name: 'cardFirst',
  data () {
    return {
      subBehavior:this.$form.default.caseBasic.default.subBehavior.arr
    }
  },
  computed: {
    form () {
      let arr = []
      for (let i = 4; i < 12; i++) arr.push(this.subBehavior[i])
      return arr
    },
    isPiZheng () {
      return this.subBehavior[3].checked == '是' ? true : false
    }
  }
}
</script>

<style lang="less" scoped></style>
