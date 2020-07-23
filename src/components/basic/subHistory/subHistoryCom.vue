<template>
  <div ref="list" class="subHistoryCom" @scroll="scrollEvent">
    <div class="infinite-list-phantom" :style="{ height: listHeight + 'px' }">
      <div :style="{ transform: getTransform }">
        <el-row
          type="flex"
          justify="center"
          v-for="(item, i) in visibleData"
          :key="i"
        >
          <el-col :span="5">{{ item.label }}</el-col>
          <el-col :span="16">
            <el-col :span="2">
              <el-form-item>
                <el-select v-model="item.checked">
                  <el-option label="是" value="是"> </el-option>
                  <el-option label="否" value="否"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="14" :push="4">
              <el-form-item>
                <el-input
                  v-model="item.value"
                  placeholder="请输入详细信息"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subHistoryCom',
  data () {
    return {
      screenHeight: 0,
      startOffset: 0,
      start: 0,
      end: null
    }
  },
  computed: {
    subHistory(){
     return this.$form.default.caseBasic.default.subHistory
    },
    subHistoryList () {
      let step = this.$parent.$parent._data.step
      return this.$publicMethods.subHistoryTrigger(this,step)
    },
    listHeight () {
      return this.subHistoryList.length * 64
    },
    visibleCount () {
      return Math.ceil(this.screenHeight / 64)
    },
    getTransform () {
      return `translate3d(0,${this.startOffset}px,0)`
    },
    visibleData () {
      return this.subHistoryList.slice(
        this.start,
        Math.min(this.end, this.subHistoryList.length)
      )
    }
  },
  methods: {
    scrollEvent () {
      let scrollTop = this.$refs.list.scrollTop
      this.start = Math.floor(scrollTop / 64)
      this.end = this.start + this.visibleCount
      this.startOffset = scrollTop - (scrollTop % 64)
    },
  },
  mounted () {
    this.screenHeight = 450
    this.start = 0
    this.end = this.start + this.visibleCount
  },
}
</script>

<style lang="less" scoped>
.subHistoryCom {
  max-height: 26.9em;
  overflow-y: auto;
}
</style>
