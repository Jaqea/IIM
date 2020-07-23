<template>
  <div class="manage">
    <el-card :body-style="{ padding: '0px 20px' }" class="box-card">
      <div slot="header" class="clearfix">
        <span>管理人员</span>
        <el-button type="text" @click="dialogFormVisible = true">
          <span>
            <i class="el-icon-plus" />
            添加用户
          </span>
        </el-button>
        <el-dialog
          :close-on-click-modal="false"
          title="添加用户"
          :visible.sync="dialogFormVisible"
        >
          <el-form
            label-width="100px"
            label-suffix="："
            :model="user"
            ref="user"
            :rules="userRules"
          >
            <el-form-item label="用户名" prop="name">
              <el-input v-model="user.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="登录名" prop="login_name">
              <el-input
                v-model="user.login_name"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model="user.password"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="权限" prop="privilege">
              <el-select v-model="user.privilege" placeholder="选择权限">
                <el-option label="医生" :value="1"></el-option>
                <el-option label="普通用户" :value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="addUser">确 定</el-button>
          </div>
        </el-dialog>
      </div>
      <el-table
        :default-sort="{ prop: 'id' }"
        :data="userList"
        style="width: 100%"
      >
        <el-table-column label="ID" prop="id"> </el-table-column>
        <el-table-column label="用户名" prop="name"> </el-table-column>
        <el-table-column label="用户权限" prop="privilege"> </el-table-column>
        <el-table-column label="最后一次登陆时间">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.last_login }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="400">
          <template slot-scope="scope">
            <el-button
              size="mini"
              v-if="scope.row.privilege != '管理员'"
              @click="
                updatePrivilege({
                  id: scope.row.id,
                  privilege: scope.row.privilege
                })
              "
              >修改权限</el-button
            >
            <el-button
              size="mini"
              @click="
                resetPassword({
                  id: scope.row.id
                })
              "
              >重置密码</el-button
            >
            <el-button
              size="mini"
              @click="
                handleEdit({
                  id: scope.row.id,
                  name: scope.row.name,
                  privilege: scope.row.privilege,
                  last_login: scope.row.last_login
                })
              "
              >编辑</el-button
            >
            <el-button
              v-if="scope.row.privilege != '管理员'"
              size="mini"
              type="danger"
              @click="
                handleDelete({
                  id: scope.row.id
                })
              "
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :close-on-click-modal="false"
        title="编辑用户"
        :visible.sync="dialogFormVisible2"
      >
        <el-form
          label-width="120px"
          label-suffix="："
          :model="userBio"
          ref="userBio"
          :rules="userBioRules"
        >
          <el-form-item label="ID">
            <el-input
              readonly
              v-model="userBio.id"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="name">
            <el-input
              @keyup.enter.native="editUser"
              v-model="userBio.name"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="权限" prop="privilege">
            <el-input
              readonly
              v-model="userBio.privilege"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="上次登陆时间" prop="last_login">
            <el-input
              readonly
              v-model="userBio.last_login"
              auto-complete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="editUser">确 定</el-button>
        </div>
      </el-dialog>
    </el-card>
    <el-pagination
      @current-change="getPage"
      :page-size="9"
      layout="prev, pager, next"
      :total="16"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'manage',
  data () {
    return {
      dialogFormVisible: false,
      dialogFormVisible2: false,
      page: 1,
      userList: [],
      user: {
        name: '',
        login_name: '',
        privilege: '',
        password: ''
      },
      userRules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
          }
        ],
        login_name: [
          {
            required: true,
            message: '请输入登录名',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['blur', 'change'] }
        ],
        privilege: [
          { required: true, message: '请选择权限', trigger: ['blur', 'change'] }
        ]
      },
      userBio: {
        id: '',
        name: '',
        privilege: '',
        last_login: ''
      },
      userBioRules: {
        name: [
          {
            required: true,
            message: '请输入用户名',
            trigger: ['blur', 'change']
          }
        ]
      },
      adminOptions: [
        {
          label: '管理员',
          value: 0
        }
      ],
      normal_options: [
        {
          label: '管理员',
          value: 0
        },
        {
          label: '医生',
          value: 1
        },
        {
          label: '普通用户',
          value: 2
        }
      ]
    }
  },
  computed: {
    hasPage () {
      return this.userList.length < 9 ? false : true
    },
    isadmin () {
      return this.userBio.privilege == '管理员' || this.userBio.privilege == 0
        ? true
        : false
    },
    options () {
      return this.isadmin ? this.adminOptions : this.normal_options
    }
  },
  methods: {
    addUser () {
      this.$refs['user'].validate(valid => {
        if (valid) {
          this.$service.default.manageServe.addUserServe(
            this.user,
            this.page,
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
    updatePrivilege (user) {
      this.$prompt('请输入权限(医生，普通用户)', '修改权限', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputValue: user.privilege,
        inputValidator (value) {
          return value == '' ? false : true
        },
        inputErrorMessage: '请输入权限',
        closeOnClickModal: false
      })
        .then(({ value }) => {
          let privileges = ['医生', '普通用户']
          if (privileges.includes(value)) {
            this.$service.default.manageServe.updatePrivilegeServe(
              user.id,
              value,
              this.page,
              this
            )
          } else
            this.$message({
              type: 'info',
              message: '不存在该权限'
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消修改'
          })
        })
    },
    resetPassword (user) {
      this.$prompt('请输入重置密码', '重置密码', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputType: 'password',
        inputValidator (value) {
          return value == '' ? false : true
        },
        inputErrorMessage: '请输入重置密码',
        closeOnClickModal: false
      })
        .then(({ value }) => {
          this.$service.default.manageServe.resetPasswordServe(
            user.id,
            value,
            this
          )
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消重置'
          })
        })
    },
    handleEdit (user) {
      this.userBio = user
      this.dialogFormVisible2 = true
    },
    editUser () {
      let userInfo = {
        name: this.userBio.name
      }
      this.$service.default.manageServe.updateUserServe(
        this.userBio.id,
        userInfo,
        this.page,
        this
      )
    },
    handleDelete (user) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        closeOnClickModal: false
      })
        .then(() => {
          this.$service.default.manageServe.deleteUserServe(
            user.id,
            this.page,
            this
          )
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    getPage (page) {
      this.page = page
      this.$service.default.manageServe.getUserListServe(page, this)
    }
  },
  watch: {
    dialogFormVisible (value) {
      if (!value) for (let key in this.user) this.user[key] = ''
    }
  },
  created () {
    this.$service.default.manageServe.getUserListServe(this.page, this)
  }
}
</script>

<style lang="less" scoped>
.el-button--text {
  margin-left: 30px;
}
</style>
