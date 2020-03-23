<template>
  <div id="contentDiv" v-show="isShow">
    <!-- 边框开始 -->
    <div class="border1"></div>
    <div class="border2" @click="closeDiv"></div>
    <div class="border3"></div>
    <div class="border4"></div>
    <!-- 边框结束 -->
    <!-- 内容 -->
    <div class="zzt">
      <ecoecharts ref="zzt" id="zzt" :option="zztOption"></ecoecharts>
    </div>
    <div class="bt">
      <ecoecharts ref="bt" id="bt" :option="btOption"></ecoecharts>
    </div>
  </div>
</template>

<script>
import ecoecharts from "./echarts";
import { zztOption, btOption } from "./option.js";
export default {
  name: "contentDiv",
  data() {
    return {
      isShow: false,
      chartData: [],
      zztOption,
      btOption
    };
  },
  components: { ecoecharts },
  created() {
    const chartData = window.Tabel.zyfb;
    this.chartData = chartData;
  },
  mounted() {},
  computed: {},
  methods: {
    closeDiv() {
      this.isShow = false;
    },
    //更改图表数据
    updatedCharts(label) {
      // console.log();
      const value = this.chartData[label].map(item => {
        return [parseFloat(item / this.chartData.wzs[0][label]).toFixed(2)];
      });
      let btdata = [];
      for (var i = 0; i < this.chartData.area.length; i++) {
        btdata.push({
          name: this.chartData.area[i],
          value: value[i]
        });
      }
      this.$refs.zzt.chart.setOption({
        title: {
          left: "center",
          text: `温州市${label}资源分布`,
          textStyle: {
            color: ["#fff"]
          }
        },
        series: [
          {
            data: this.chartData[label]
          }
        ]
      });
      this.$refs.bt.chart.setOption({
        title: {
          left: "center",
          text: `温州市${label}资源占比`,
          textStyle: {
            color: ["#fff"]
          }
        },
        legend: {
          data: this.chartData.area
        },
        series: [
          {
            data: btdata
          }
        ]
      });
    }
  }
};
</script>
 <style lang="less">
#contentDiv {
  width: 95%;
  height: 100%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
  .border1 {
    width: 40px;
    height: 40px;
    background-image: url(../../../../assets/img/bk.png);
    background-size: 100%;
    position: absolute;
    top: -3px;
    left: -2px;
  }
  .border2 {
    width: 45px;
    height: 40px;
    background-image: url(../../../../assets/img/close.png);
    background-size: 60px;
    position: absolute;
    top: -1px;
    right: 7px;
    cursor: pointer;
    z-index: 1;
  }
  .border3 {
    width: 40px;
    height: 40px;
    background-image: url(../../../../assets/img/bk.png);
    background-size: 100%;
    position: absolute;
    bottom: -2px;
    left: -3px;
    transform: rotate(270deg);
  }
  .border4 {
    width: 40px;
    height: 40px;
    background-image: url(../../../../assets/img/bk.png);
    background-size: 100%;
    position: absolute;
    bottom: -3px;
    right: -2px;
    transform: rotate(180deg);
  }
  .zzt,
  .bt {
    width: 100%;
    height: 50%;
    box-sizing: border-box;
    padding: 10px;
  }
}
</style>