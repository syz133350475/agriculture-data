<template>
  <div id="clyjDiv">
    <div class="title" style="height:12%">
      <h3>产量预警</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <!-- 5年产量统计 -->
      <div id="five-CL"></div>
      <!-- 县市区产量预警 -->
      <cityClyj />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import cityClyj from "./cityClyj.vue";
export default {
  components: {
    cityClyj //县市区产量预警
  },
  data() {
    return {
      charts: " ",
      titleData: "近五年产量预警（吨）",
      dataName: ["2015年", "2015年", "2015年", "2015年", "2015年"],
      dataZZ: [20, 10, 20, 80, 120],
      dataCM: [10, 70, 60, 60, 110],
      dataLY: [80, 80, 50, 120, 100],
      dataYY: [20, 70, 90, 80, 140]
    };
  },
  methods: {
    //近5年产量预警
    fiveCl() {
      const chart = this.$echarts.init(document.getElementById("five-CL"));
      chart.setOption({
        title: {
          text: this.titleData,
          top: "5%",
          left: "5%",
          textStyle: {
            color: "#a0ffe7",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            //type: "line",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        toolbox: {
          // feature: {
          //     saveAsImage: {}
          // }
        },
        grid: {
          left: "4%",
          right: "5%",
          top: "25%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.dataName,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
            },
            axisTick: false, //刻度不显示
            axisLine: {
              lineStyle: {
                color: "#04a58e",
                width: 2 //这里是为了突出显示加上的
              }
            }
          }
        ],
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
            }
          }
        ],
        series: [
          {
            name: "种植业",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(14,255,216,.4)", //背景色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  type: "solid",
                  color: "rgb(14,255,216)"
                }
              }
            },
            symbolSize: 5, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: this.dataZZ
          },
          {
            name: "畜牧业",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(255,179,62,.4)", //背景色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  type: "solid",
                  color: "rgb(255,179,62)"
                }
              }
            },
            symbolSize: 5, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: this.dataCM
          },
          {
            name: "渔业",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(15,188,239,.4)", //背景色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  type: "solid",
                  color: "rgb(15,188,239)"
                }
              }
            },
            symbolSize: 5, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: this.dataZZ
          },
          {
            name: "林业",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgba(80,216,0,.4)", //背景色
                lineStyle: {
                  // 系列级个性化折线样式
                  width: 2,
                  type: "solid",
                  color: "rgb(80,216,0)"
                }
              }
            },
            symbolSize: 5, //折线点的大小
            areaStyle: {
              normal: {}
            },
            data: this.dataLY
          }
        ]
      });
    }
  },
  mounted() {
    this.fiveCl(); //近5年产量预警
  }
};
</script>

<style>
.jcyj-centent #clyjDiv {
  height: 51%;
}
.jcyj-centent #clyjDiv #jpdDiv {
  height: 86%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jcyj-centent #clyjDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #clyjDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #clyjDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #clyjDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jcyj-centent #clyjDiv #five-CL {
  height: 50%;
}
</style>