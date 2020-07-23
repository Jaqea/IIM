<template>
  <div>
    <el-col v-for="item in crfImm6" :key="item.label" :span="8">
      <el-form-item :label="item.label">
        <el-input v-model="item.value"></el-input>
      </el-form-item>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'crfImmLast',
  data () {
    return {
        crfImm: this.$form.default.caseCrf.default.crfImm,
    }
  },
  computed: {
    crfImm6 () {
      let form = []
      for (let i = 35; i < 49; i++) {
        form.push(this.crfImm.arr[i])
      }
      return form
    }
  }
}
</script>

<style lang="less" scoped></style>
