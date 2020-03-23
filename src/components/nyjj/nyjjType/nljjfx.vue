<template>
  <div id="nlfxDiv">
    <div class="title" style="height:22%">
      <h3>乡村旅游分析</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="nljjfx"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import echarts from "echarts";
export default {
  data() {
    return {
      chart: undefined
    };
  },
  methods: {
    //近5年产量预警
    historyPrice() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("nljjfx"));
      this.chart.setOption({
        grid: {
          left: "3%",
          right: "5%",
          top: "24%",
          bottom: "5%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#333"
            }
          }
        },
        legend: {
          // data: ["各县市区旅游次数", "人均消费(万元)"],
          top: "2%",
          textStyle: {
            color: "#fff"
          }
        },
        xAxis: {
          data: that.ly_Category,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        yAxis: {
          splitLine: { show: false },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            name: "人均消费 (万元)",
            type: "bar",
            barGap: 0,
            barWidth: "30%",
            itemStyle: {
              normal: {
                color: "#ffda47"
              }
            },
            data: that.xf
          },
          {
            name: "各县市区旅游次数",
            type: "bar",
            barWidth: "30%",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#14c8d4" },
                  { offset: 1, color: "#43eec6" }
                ])
              }
            },
            data: that.cs
          }
        ]
      });
    }
  },
  created() {
    const { ly_Category, ly_Data } = window.chartData;
    this.ly_Category = ly_Category;

    const { cs, xf } = ly_Data;
    this.cs = cs;
    this.xf = xf;
  },
  mounted() {
    this.historyPrice(); //近5年产量预警
  }
};
</script>

<style>
.jyjj-centent #nlfxDiv {
  height: 96%;
  padding-left: 1.5%;
}
.jyjj-centent #nlfxDiv #jpdDiv {
  height: 76%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #nlfxDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #nlfxDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #nlfxDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #nlfxDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jyjj-centent #nlfxDiv #nljjfx {
  width: 100%;
  height: 100%;
}
</style>