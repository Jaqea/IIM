<template>
  <div class="subject">
    <el-col :span="22">
      <el-col :span="20">
        <el-form
          :model="subject"
          label-suffix="："
          :rules="subjectRules"
          ref="subject"
          label-width="100px"
        >
          <el-form-item label="编号" prop="number">
            <el-input v-model="subject.number"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="subject.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名缩写" prop="initials">
            <el-input v-model="subject.initials"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="subject.gender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族" prop="nation">
            <el-select v-model="subject.nation" placeholder="请选择民族">
              <el-option label="汉族" value="汉族"></el-option>
              <el-option label="少数民族" value="少数民族"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生年月" prop="birth_day">
            <el-date-picker
              placeholder="选择出生年月"
              v-model="subject.birth_day"
              format="yyyy-MM-dd"
              value-format="yyyy-MM-dd"
              @change="this.$publicMethods.timeFilter"
            ></el-date-picker>
          </el-form-item> </el-form
      ></el-col>
    </el-col>
  </div>
</template>
<script>
let Base64 = require('js-base64').Base64
export default {
  name: 'subject',
  data () {
    return {
      subject:this.$form.default.caseBasic.default.subject,
      subjectRules: this.$form.default.caseBasic.default.subjectRules
    }
  },
  computed: {
    phyIdentity () {
      return this.$route.query.patient
        ? JSON.parse(Base64.decode(this.$route.query.patient)).phyIdentity
        : ''
    }
  },
  methods: {},
  created () {
    if (this.phyIdentity) {
      this.$service.default.caseBasicServe.getSubjectServe(
        this.phyIdentity,
        this
      )
    }else this.$publicMethods.formEmpty(this, 'subject')
  }
}
</script>

<style lang="less" scoped>
.subject {
  display: flex;
  justify-content: space-around;
}
</style>
