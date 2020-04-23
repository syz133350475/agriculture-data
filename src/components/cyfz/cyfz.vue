<template>
  <div id="cyfz-centnet">
    <el-row>
      <el-col :span="5">
        <div id="cyfz-LeftDiv">
          <!-- <cyfzCZTj />
          <cyfzMJZB />
          <cyfzGMPH />-->
          <whitebox
            :echartsId="'left_first'"
            :options="getDuiBar"
            :echartTitle="'各县市区产值统计'"
            :unit="'单位：万元'"
            :boxHeight="'31%'"
          />
          <whitebox
            :echartsId="'left_second'"
            :options="getPie"
            :echartTitle="'农业产业面积占比'"
            :boxHeight="'23%'"
          />
          <whitebox
            :echartsId="'right_third'"
            :tableData="tab"
            :tableTitle="'龙头企业规模排行'"
            :boxHeight="'30%'"
            :tableLabel="tableLabel"
          />
        </div>
      </el-col>
      <el-col :span="13">
        <div id="cyfz-centertDiv">
          <div style="height:30%"></div>
          <div style="height:42%"></div>
          <div style="height:26%">
            <centerBottom />
            <!-- <el-row>
            <el-col :span="12">
              <centerBottom />
            </el-col>
            <el-col :span="12"></el-col>
            </el-row>-->
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div id="cyfz-rightDiv">
          <!-- <cyfzGMPH style="height:22%" />
          <cyfzGMPH style="height:35%" />
          <cyfzGMPH style="height:38%" />-->
          <whitebox
            :echartsId="'right_first'"
            :options="getBar"
            :echartTitle="'各县市农机数量'"
            :unit="'单位：万台'"
            :switchtab="switchtab"
            :boxHeight="'27%'"
          />
          <whitebox :tableData="tab" 
          :tableTitle="'农产品全年销售额'"
          :tableLabel="tableLabel" :boxHeight="'29%'" />
          <whitebox :tableTitle="'农产品全年销售额'" :tableData="tab" :tableLabel="tableLabel" :boxHeight="'28%'" />

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// whitebox 参数例子

// <whitebox
//   :echartsId="'right_first'"
//   :options="opt"
//   :tableData="tab"
// :tableTitle
//   :echartTitle="'各县市区产值统计'"
//   :unit="'单位：万元'"
//   :switchtab="switchtab"
//   :boxHeight="600"
//   :tableLabel="tableLabel"
// />

// import cyfzCZTj from "./cyfzType/cztj.vue";
// import cyfzMJZB from "./cyfzType/mjzb.vue";
// import cyfzGMPH from "./cyfzType/gmph.vue";
import whitebox from "../whitebox.vue";

import duibar from "../../assets/echartOptions/duibar.js";
import pie from "../../assets/echartOptions/pie.js";
import bar from "../../assets/echartOptions/bar.js";

import centerBottom from "./cyfzType/centerBottom";
export default {
  data() {
    return {
      switchtab: ["种植业", "渔业", "畜牧业", "林业"],
      tableLabel: ["排名", "企业名称", "信用等级"],
      tab: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  watch:{
    
  },
  computed: {
    getDuiBar() {
      return duibar;
    },
    getPie() {
      return pie;
    },
    getBar() {
      return bar;
    }
  },
  components: {
    // cyfzCZTj,
    // cyfzMJZB,
    // cyfzGMPH,
    centerBottom,
    whitebox
  },
  methods: {},
  mounted() {
    this.$parent.$refs.container.className="back"
    console.log("ddd",this.$parent.$refs.container)
  }
};
</script>

<style>
.back{
    background-color: #ffffff;
  background-image: url(../../assets/img/new_bg.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}

#cyfz-centnet {
  width: 100%;
  height: 100%;
  position: relative;
  /* padding-top:90px;  */
}
#cyfz-centertDiv {
  box-sizing: border-box;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  position: relative;
}
#cyfz-LeftDiv {
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
}

#cyfz-rightDiv {
  height: 100%;
  box-sizing: border-box;
  padding-top: 100px;
}

#cyfz-centnet .el-row,
#cyfz-centnet .el-col {
  height: 100%;
}
</style>