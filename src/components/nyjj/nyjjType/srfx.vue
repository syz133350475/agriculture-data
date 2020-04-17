<template>
  <div id="srfxDiv">
    <div class="title" style="height:18%">
      <h3>当年农村收入分析</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="srfxEchart"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
import { baroption } from "./echartconfig/doublebar";

export default {
  data() {
    return {
      chart: undefined
      // baroption
    };
  },
  methods: {
    //农业占比分析
    srfxFun() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("srfxEchart"));

      console.log(baroption);

      baroption.xAxis.data = that.sr_Category;
      baroption.series[0].data = that.kzpsrList;
      baroption.series[0].name = "可支配收入 (万元)";
      baroption.series[1].data = that.xfzcList;
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
    this.srfxFun(); //近5年产量预警
  }
};
</script>

<style>
.jyjj-centent #srfxDiv {
  height: 33%;
  padding-left: 2.5%;
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