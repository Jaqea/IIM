<template>
  <div class="case">
    <el-card :body-style="{ padding: '0px 20px' }" class="box-card">
      <div slot="header" class="clearfix">
        <span>病例数据</span>
        <router-link :to="'caseBasic' | routerQuery">
          <el-button type="text">
            <span>
              <i class="el-icon-plus" />
              新增受试者
            </span>
          </el-button>
        </router-link>
      </div>
      <el-table
        @cell-click="searchSubject"
        :data="subjectList"
        stripe
        :cell-style="tableCli"
        style="width: 100%"
      >
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="gender" label="性别"> </el-table-column>
        <el-table-column prop="number" label="编号"> </el-table-column>
        <el-table-column prop="follow_up" label="随访记录">
          <template slot-scope="scope">
            <el-dropdown @command="handleCommand" trigger="click">
              <el-button
                @click="dropdownShow(scope.row.follow_up)"
                size="small"
                plain
              >
                随访记录<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  :command="{
                    phyIdentity: scope.row.id,
                    phyTimes: item,
                    followUp: scope.row.follow_up
                  }"
                  v-for="(item, i) in scope.row.follow_up"
                  :key="i"
                  >{{ '第' + item + '次随访记录' }}</el-dropdown-item
                ></el-dropdown-menu
              >
            </el-dropdown>
            <el-button
              style="margin-left:10px;"
              @click="addFollowUp(scope.row.id, scope.row.follow_up)"
              size="small"
              type="primary"
            >
              <i class="el-icon-circle-plus-outline"></i>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="getPage"
        :page-size="9"
        layout="prev, pager, next"
        :total="72"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
let Base64 = require('js-base64').Base64
export default {
  name: 'case',
  data () {
    return {
      subjectList: []
    }
  },
  methods: {
    tableCli ({ row, column, rowIndex, columnIndex }) {
      if (column.property == 'name') {
        return 'cursor:pointer'
      }
    },
    getPage (page) {
      this.$service.default.caseServe.getSubjectListServe(page, this)
    },
    searchSubject (row, col) {
      if (col.property == 'name')
        this.$router.push({
          path: '/caseBasic',
          query: {
            Identity: this.Identity,
            patient: Base64.encode(
              JSON.stringify({
                phyIdentity: row.id,
                followUp: row.follow_up
              })
            )
          }
        })
    },
    handleCommand (phy) {
      this.$router.push({
        path: '/caseFollowUp',
        query: {
          Identity: this.Identity,
          patient: Base64.encode(
            JSON.stringify({
              phyIdentity: phy.phyIdentity,
              phyTimes: phy.phyTimes,
              followUp: phy.followUp
            })
          )
        }
      })
    },
    addFollowUp (phyIdentity, followUp) {
      this.$router.push({
        path: '/caseFollowUp',
        query: {
          Identity: this.Identity,
          patient: Base64.encode(
            JSON.stringify({
              phyIdentity: phyIdentity,
              followUp: followUp
            })
          )
        }
      })
    },
    dropdownShow (followUp) {
      if (!followUp)
        this.$notify({
          title: '提示',
          dangerouslyUseHTMLString: true,
          message: '<strong>该受试者暂无随访记录，请添加随访记录</strong>'
        })
    }
  },
  created () {
    this.$service.default.caseServe.getSubjectListServe(1, this)
  }
}
</script>

<style lang="less" scoped>
.el-button--text {
  margin-left: 30px;
}
.el-pagination {
  margin: 10px 0;
}
.el-dropdown-menu {
  max-height: 250px;
  overflow-y: auto;
}
</style>
