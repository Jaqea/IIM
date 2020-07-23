<template>
  <div class="subBehavior">
    <el-card :body-style="{ padding: '10px 0px' }">
      <div slot="header">
        <span>主要临床表现</span>
      </div>
      <el-form
        label-suffix="："
        :model="subBehavior"
        :rules="subBehaviorRules"
        ref="subBehavior"
        ><el-row v-for="(item, i) in mainBehavior" :key="i">
          <el-col
            style="height:33.6px;line-height:33.6px;"
            :span="6"
            :offset="1"
            >{{ item.label }}</el-col
          >
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
              <el-form-item label-width="100px" label="部位">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col> </el-col
        ></el-row>
        <cardFirst></cardFirst>
        <cardSecond></cardSecond>
        <el-row v-for="(item) in mainBehavior2" :key="item.describe">
          <el-col
            style="height:33.6px;line-height:33.6px;"
            :span="6"
            :offset="1"
            >{{ item.label }}</el-col
          >
          <el-col :span="16">
            <el-col :span="2" :offset="2">
              <el-form-item>
                <el-select v-model="item.checked">
                  <el-option label="是" value="是"></el-option>
                  <el-option label="否" value="否"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="6">
              {{ item.describe }}
            </el-col>
          </el-col></el-row
        >
        <cardThird></cardThird>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'subBehavior',
  data () {
    return {
      subBehavior: this.$form.default.caseBasic.default.subBehavior,
      subBehaviorRules: this.$form.default.caseBasic.default.subBehaviorRules
    }
  },
  computed: {
    mainBehavior () {
      let arr = []
      for (let i = 0; i < 3; i++) arr.push(this.subBehavior.arr[i])
      return arr
    },
    mainBehavior2 () {
      let arr = []
      for (let i = 18; i < 34; i++) arr.push(this.subBehavior.arr[i])
      return arr
    },
    phyIdentity () {
      return this.$route.query.patient
        ? JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
        : ''
    }
  },
  created () {
    if (this.phyIdentity) {
      this.$service.default.caseBasicServe.getSubBehaviorServe(
        this.phyIdentity,
        this
      )
    } else this.$publicMethods.formEmpty(this, 'subBehavior')
  },
  components: {
    cardFirst: resolve =>
      require(['components/basic/subBehavior/cardFirst.vue'], resolve),
    cardSecond: resolve =>
      require(['components/basic/subBehavior/cardSecond.vue'], resolve),
      cardThird: resolve =>
      require(['components/basic/subBehavior/cardThird.vue'], resolve)
  }
}
</script>

<style lang="less" scoped>
.el-card {
  border: none;
}
.subBehavior {
  max-height: 32em;
  overflow-y: auto;
}
</style>
