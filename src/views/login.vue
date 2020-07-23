<template>
  <el-row class="login">
    <el-col :span="24">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>炎性肌病病例数据管理系统</span>
        </div>
        <el-form
          :model="form"
          status-icon
          :rules="rules"
          ref="form"
          class="demo-ruleForm"
        >
          <el-form-item prop="account">
            <el-input
              type="text"
              placeholder="登录名"
              v-model="form.account"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              @keyup.enter.native="submitForm('form')"
              placeholder="密码"
              type="password"
              v-model="form.password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item prop="Identity">
            <el-radio-group v-model="form.Identity">
              <el-radio label="2">普通用户</el-radio>
              <el-radio label="1">医生</el-radio>
              <el-radio label="0">管理员</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button size="medium" type="primary" @click="submitForm('form')"
              >登 录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'login',
  data () {
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入登录名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    var validateIdentity = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择登录身份'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '',
        password: '',
        Identity: ''
      },
      rules: {
        account: [{ validator: validateAccount, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }],
        Identity: [{ validator: validateIdentity, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$service.default.loginServe.loginService(
            {
              login_name: this.form.account,
              password: this.form.password
            },
            this.form.Identity,
            this
          )
        } else {
          this.$message({
            showClose: true,
            message: '请输入完整！!',
            type: 'error'
          })
          return false
        }
      })
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.login {
  width: 30rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15%;
  .el-button {
    width: 100%;
  }
}
</style>
