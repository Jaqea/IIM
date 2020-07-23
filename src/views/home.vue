<template>
  <el-container class="home">
    <el-header height="60px">
      <el-dialog
        :close-on-click-modal="false"
        title="个人信息"
        :visible.sync="dialogFormVisible"
      >
        <el-form
          label-width="120px"
          label-suffix="："
          :model="userInfo"
          ref="userInfo"
          :rules="userInfoRules"
        >
          <el-form-item label="用户名" prop="name">
            <el-input
              readonly
              v-model="userInfo.name"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="登录名" prop="login_name">
            <el-input
              @keyup.enter.native="saveUser"
              v-model="userInfo.login_name"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="权限">
            <el-input
              readonly
              v-model="userInfo.privilege"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户创建时间" prop="create_time">
            <el-input
              readonly
              v-model="userInfo.create_time"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="上次登陆时间" prop="last_login">
            <el-input
              readonly
              v-model="userInfo.last_login"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveUser">保 存</el-button>
        </div>
      </el-dialog>
      <el-dialog
        :close-on-click-modal="false"
        title="修改密码"
        :visible.sync="dialogFormVisible2"
      >
        <el-form
          label-width="80px"
          label-suffix="："
          :model="userPassword"
          ref="userPassword"
          :rules="userPasswordRules"
        >
          <el-form-item label="旧密码" prop="old_password">
            <el-input
              type="password"
              v-model="userPassword.old_password"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="new_password">
            <el-input
              type="password"
              v-model="userPassword.new_password"
              auto-complete="off"
              @keyup.enter.native="updataPassword"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="updataPassword">修 改</el-button>
        </div>
      </el-dialog>
      <el-col :span="10">
        炎性肌病科研数据管理系统
      </el-col>
      <el-col :span="11">
        <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">
            用户<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown"
            ><el-dropdown-item command="userInfo">个人信息</el-dropdown-item>
            <el-dropdown-item command="updatePassword"
              >修改密码</el-dropdown-item
            >
            <el-dropdown-item command="exit">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-question"></i>
      </el-col>
    </el-header>
    <el-container>
      <el-aside width="17%">
        <el-menu
          :default-active="activePath | routerQuery"
          class="el-menu-vertical-demo"
          router
        >
          <el-menu-item
            v-for="(item, i) in router"
            :key="i"
            :index="item.index | routerQuery"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <el-menu-item
            v-show="Identity == 0"
            v-for="item in adminRouter"
            :key="item.title"
            :index="item.index | routerQuery"
          >
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main height="100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      dialogFormVisible: false,
      dialogFormVisible2: false,
      userInfo: {
        create_time: '',
        id: '',
        last_login: '',
        login_name: '',
        name: '',
        privilege: ''
      },
      userInfoRules: {
        login_name: [
          {
            required: true,
            message: '请输入登录名',
            trigger: ['blur', 'change']
          }
        ],
        privilege: [
          {
            required: true,
            message: '请选择权限',
            trigger: ['blur', 'change']
          }
        ]
      },
      userPassword: {
        old_password: '',
        new_password: ''
      },
      userPasswordRules: {
        old_password: [
          {
            required: true,
            message: '请输入旧密码',
            trigger: ['blur', 'change']
          }
        ],
        new_password: [
          {
            required: true,
            message: '请输入新密码',
            trigger: ['blur', 'change']
          }
        ]
      },
      router: [
        {
          index: '/statistics',
          title: '信息统计',
          icon: 'el-icon-menu'
        },
        {
          index: '/case',
          title: '病例数据',
          icon: 'el-icon-upload2'
        },
        {
          index: '/export',
          title: '数据导出',
          icon: 'el-icon-download'
        }
      ],
      adminRouter: [
        {
          index: '/manage',
          title: '管理人员',
          icon: 'el-icon-setting'
        }
      ]
    }
  },
  computed: {
    activePath () {
      let path = this.$route.path
      let index
      this.router.forEach(element => {
        if (path.indexOf(element.index) != -1) index = element.index
      })
      this.adminRouter.forEach(element => {
        if (path.indexOf(element.index) != -1) index = element.index
      })
      return index
    }
  },
  methods: {
    handleCommand (value) {
      switch (value) {
        case 'exit':
          this.$service.default.loginServe.logOut(this)
          break
        case 'userInfo':
          for (let key in this.$store.state.global.user)
            this.userInfo[key] = this.$store.state.global.user[key]
          this.userInfo.privilege = this.$publicMethods.privilegeTransform(
            this.userInfo.privilege
          )
          this.dialogFormVisible = true
          break
        case 'updatePassword':
          this.dialogFormVisible2 = true
          break
        default:
          break
      }
    },
    saveUser () {
      this.$refs['userInfo'].validate(valid => {
        if (valid) {
          this.userInfo.password = this.$store.state.global.user.password
          let userInfo = {
            password: this.userInfo.password,
            newLoginName: this.userInfo.login_name
          }
          this.$service.default.manageServe.updateLoginNameServe(
            this.userInfo.id,
            userInfo,
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
    },
    updataPassword () {
      this.$refs['userPassword'].validate(valid => {
        if (valid) {
          this.$service.default.manageServe.updatePasswordServe(
            this.$store.state.global.user.id,
            this.userPassword,
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
  watch: {
    dialogFormVisible2 (value) {
      if (!value) for (let key in this.userPassword) this.userPassword[key] = ''
    }
  },
  created () {}
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
}
.el-header {
  .el-col-10,
  .el-col-11,
  .el-col-2 {
    height: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    font-size: 18px;
  }
  .el-col-10 {
    flex-direction: row;
  }
  i {
    cursor: pointer;
    transition: 0.1s all;
  }
  i:hover {
    opacity: 0.7;
  }
  .el-dropdown {
    color: #fff;
    cursor: pointer;
  }
}
</style>
