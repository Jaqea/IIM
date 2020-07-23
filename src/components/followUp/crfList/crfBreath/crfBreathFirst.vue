<template>
  <div>
    <el-card :body-style="{padding:'0'}">
      <div slot="header">
        <span style="height:41px;line-height:41px;overflow: hidden;">
          <el-row>
            <el-col :span="14">
              <el-col :span="10">
                <el-form-item
                 style="margin-bottom: 0px;"
                  label-width="160px"
                  :label="crfBreath.arr[8].label"
                >
                  <el-select v-model="crfBreath.arr[8].checked">
                    <el-option label="是" value="是"> </el-option>
                    <el-option label="否" value="否"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </div>
      <el-row v-if="isCure" style="padding-top:20px;border-bottom:1px solid #e8eaec;">
        <el-col :span="6">
          <el-form-item label-width="100px" label="药物类别">
            <el-select v-model="crfBreath.arr[9].checked">
              <el-option
                v-for="item in crfBreath.arr[9].list"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="商品名">
            <el-select v-model="crfBreath.arr[10].checked">
              <el-option
                v-for="item in crfBreath.arr[10].list"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="用法">
            <el-input v-model="crfBreath.arr[11].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="单次剂量">
            <el-input v-model="crfBreath.arr[12].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="次/天">
            <el-input v-model="crfBreath.arr[13].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="疗程">
            <el-input v-model="crfBreath.arr[14].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="依从性">
            <el-input v-model="crfBreath.arr[15].value"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card  :body-style="{padding:'0'}">
      <div slot="header">
        <span style="height:41px;line-height:41px;overflow: hidden;">
          <el-row>
            <el-col :span="14">
              <el-col :span="10">
                <el-form-item style="margin-bottom: 0px;" label-width="160px" label="是否具有肺动脉高压">
                  <el-select v-model="crfBreath.arr[16].checked">
                    <el-option label="是" value="是"> </el-option>
                    <el-option label="否" value="否"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </div>
      <el-row v-if="isHv" style="padding-top:20px;border-bottom:1px solid #e8eaec;">
        <el-col :span="8">
          <el-form-item label-width="160px" label="心脏彩超提示压力为">
            <el-input></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card  :body-style="{padding:'0'}">
      <div slot="header">
        <span style="height:41px;line-height:41px;overflow: hidden;">
          <el-row>
            <el-col :span="14">
              <el-col :span="10">
                <el-form-item style="margin-bottom: 0px;" label-width="160px" label="肺动脉高压是否治疗">
                  <el-select v-model="crfBreath.arr[18].checked">
                    <el-option label="是" value="是"> </el-option>
                    <el-option label="否" value="否"> </el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </el-row>
        </span>
      </div>
      <el-row v-if="isHvCure" style="padding-top:20px">
        <el-col :span="6">
          <el-form-item label-width="100px" label="药物类别">
            <el-select v-model="crfBreath.arr[19].checked">
              <el-option
                v-for="item in crfBreath.arr[18].list"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="用法">
            <el-input v-model="crfBreath.arr[20].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="单次剂量">
            <el-input v-model="crfBreath.arr[21].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="次/天">
            <el-input v-model="crfBreath.arr[22].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="疗程">
            <el-input v-model="crfBreath.arr[23].value"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label-width="100px" label="依从性">
            <el-input v-model="crfBreath.arr[24].value"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'crfBreathFirst',
  data () {
    return {
      crfBreath: this.$form.default.caseCrf.default.crfBreath
    }
  },
  computed: {
    isCure () {
      return this.crfBreath.arr[8].checked == '是' ? true : false
    },
    isHv () {
      return this.crfBreath.arr[16].checked == '是' ? true : false
    },
    isHvCure () {
      return this.crfBreath.arr[18].checked == '是' ? true : false
    }
  }
}
</script>

<style lang="less" scoped></style>
