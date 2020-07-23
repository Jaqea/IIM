<template>
  <div class="statistics">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span><i class="el-icon-tickets"></i>信息统计</span>
      </div>
      <el-row style="border-bottom: 1px solid #EBEEF5;">
        <el-col v-for="(item, i) in dataStatus" :key="i" :span="6">
          <div class="data-status">
            <h3>{{ item.title }}</h3>
            <div>{{ item.personNum }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-for="(item, i) in dataView" :key="i" :span="6">
          <div class="data-view">
            <p>
              {{ item.title }}
              <strong>{{ item.date }}</strong>
            </p>
            <div>
              <p>{{ item.personNum }}人</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'statistics',
  data () {
    return {
      dataStatus: [
        {
          title: '受试者',
          personNum: ''
        },
        {
          title: '随访记录',
          personNum: ''
        },
        {
          title: '研究员',
          personNum: ''
        },
        {
          title: '数据录入人员',
          personNum: ''
        }
      ],
      dataView: [
        {
          title: '新增受试者',
          date: '(日)',
          personNum: '',
          rate: ''
        },
        {
          title: '新增受试者',
          date: '(月)',
          personNum: '',
          rate: ''
        },
        {
          title: '新增随访',
          date: '(日)',
          personNum: '',
          rate: ''
        },
        {
          title: '新增随访',
          date: '(月)',
          personNum: '',
          rate: ''
        }
      ]
    }
  },
  created(){
      this.$service.default.getStatistics(this)
  }
}
</script>

<style lang="less" scoped>
.data-status,
.data-view > p {
  font-size: 16px;
}
.data-status {
  margin-bottom: 20px;
  margin-right: 15%;
  padding: 5% 16px;
  background: #5285d167;
  border: 1px solid #5285d167;
}
.data-status > h3 {
  font-weight: 400;
}
.data-status > div {
  font-size: 20px;
  color: #2d8cf0;
  margin-top: 20px;
}
.data-view {
  margin-top: 20px;
  margin-right: 15%;
  padding: 5% 16px;
  background: #5285d167;
  border: 1px solid #5285d167;
}
.data-view > div {
  margin-top: 10px;
}
.data-view > div > p {
  font-size: 13px;
  margin-top: 5px;
}
</style>
