<template>
  <div id="srfxDiv">
    <div class="title" style="height:18%" @click="show = true">
      <h3>当年农村收入分析</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="srfxEchart"></div>
    </div>
    <popUp
      :visible="show"
      @changVisible="changVisible"
      :tableData="economy_analysis"
      :field="field"
      :tableTitle="'历年农村收入分析'"
      :tableWidth="tableWidth"
    />
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import { baroption } from "./echartconfig/doublebar";
import { economy_analysis } from "../../../../public/data/new_data.js";
import { filterDataByRow } from "../../../util.js";
import popUp from "../../common/popUp";

export default {
  data() {
    return {
      chart: undefined,
      field: [
        "地区",
        "镇",
        "村",
        "可支配收入(万元)",
        "可消费收入(万元)",
        "年份"
      ],
      economy_analysis,
      show: false,
      tableWidth:"30%",
      kzpdata: [],
      kxfdata: [],
      county: []
    };
  },
  components: {
    popUp
  },
  // watch:{
  //   show(n,o){
  //     this.$on('changVisible',true)
  //   }
  // },
  methods: {
    changVisible(data) {
      this.show = data;
    },

    filterData() {
      const that = this;
      that.county = filterDataByRow(economy_analysis, null, null, "county");
      const kzpdata = filterDataByRow(economy_analysis, "county", "income");
      const kxfdata = filterDataByRow(economy_analysis, "county", "expense");
      //  2018年
      const arr = [];
      const arr2 = [];
      for (let key in kzpdata) {
        arr.push(kzpdata[key][0]);
      }
      for (let key in kxfdata) {
        arr2.push(kxfdata[key][0]);
      }
      that.kzpdata = arr;
      that.kxfdata = arr2;
    },
    srfxFun() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("srfxEchart"));

      // console.log(baroption);

      // baroption.xAxis.data = that.sr_Category;
      // baroption.series[0].data = that.kzpsrList;
      // baroption.series[0].name = "可支配收入 (万元)";
      // baroption.series[1].data = that.xfzcList;
      // baroption.series[1].name = "消费支出 (万元)";
      baroption.xAxis.data = that.county;
      baroption.series[0].data = that.kzpdata;
      baroption.series[0].name = "可支配收入 (万元)";
      baroption.series[1].data = that.kxfdata;
      baroption.series[1].name = "消费支出 (万元)";
      this.chart.setOption(baroption);
    }
  },
  created() {
    // 加载数据
    const { sr_Category, sr_Data } = window.chartData;
    this.sr_Category = sr_Category;

    const { rjsrList, kzpsrList, xfzcList } = sr_Data;
    this.rjsrList = rjsrList;
    this.kzpsrList = kzpsrList;
    this.xfzcList = xfzcList;
  },
  mounted() {
    this.filterData();
    this.srfxFun(); //农业收入
    //可支配收入

    //  const county = filterDataByRow(economy_analysis,null,null,"county")

    //  console.log("数据1",income)
    //  console.log("数据2",kxfdata)
    //  const keysData =Object.keys(kxfdata)

    //  console.log("数据3",keysData)
  }
};
</script>

<style>
.jyjj-centent #srfxDiv {
  height: 33%;
  padding-left: 2.5%;
}
#srfxDiv .title {
  cursor: pointer;
}
.jyjj-centent #srfxDiv #jpdDiv {
  height: 80%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #srfxDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #srfxDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #srfxDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #srfxDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jyjj-centent #srfxDiv #srfxEchart {
  width: 100%;
  height: 100%;
}
</style>