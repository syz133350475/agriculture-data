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
export default {
  data() {
    return {
      charts: " ",
      category: [
        "鹿城",
        "龙湾",
        "瓯海",
        "洞头",
        "永嘉",
        "乐清",
        "瑞安",
        "文成",
        "苍南",
        "平阳",
        "泰顺"
      ],
      dottedBase: [],
      lineData: [
        18092,
        24045,
        32808,
        36097,
        44715,
        50415,
        56061,
        59521,
        18092,
        24045,
        32808,
        36097,
        44715,
        50415,
        39867,
        44715,
        48444,
        50415,
        50061,
        32677,
        49521,
        32808
      ],
      barData: [
        4600,
        5500,
        7500,
        8500,
        12500,
        21500,
        23200,
        25250,
        4600,
        5500,
        6500,
        8500,
        22500,
        21500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
      ],
      //rateData: [],
    };
  },
  methods: {
    //农业占比分析
    srfxFun() {
      const chart = this.$echarts.init(document.getElementById("srfxEchart"));
      // for (var i = 0; i < 33; i++) {
      //   var rate = (this.barData[i] / this.lineData[i]) * 100;
      //   this.rateData[i] = rate;//.toFixed(2);
      // }
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#0bb364"
            }
          }
        },
        legend: {
          bottom: "2%",
          textStyle: {
            color: ["#fff"]
          },
          itemGap: 25,
          itemWidth: 20
        },
        grid: {
          x: "14%",
          width: "73%",
          height: "68%",
          y: "9%"
        },
        xAxis: {
          data: this.category,
          axisLine: {
            onZero: false,
            lineStyle: {
              width: 2, //这里是为了突出显示加上的
              color: "#04a58e"
            }
          },
          axisTick: false, //刻度不显示
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff" //字体颜色
            }
          }
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              onZero: false,
              lineStyle: {
                width: 2, //这里是为了突出显示加上的
                color: "#04a58e"
              }
            },
            axisTick: false, //刻度不显示
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff" //字体颜色
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "#075a47"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#04a58e"
              }
            },
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],

        series: [
          {
            name: "农村人均收入（万元）",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#ffda47"
              }
            },
            data: this.lineData
          },

          {
            name: "农业收入（万元）",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: "#50b0ff"
              }
            },
            data: this.barData
          }
        ]
      });
    }
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