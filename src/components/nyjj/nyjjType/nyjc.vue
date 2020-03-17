<template>
  <div id="nyjcDiv">
    <div class="title" style="height:18%">
      <h3>农业监测（万元）</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="nyjctj"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: " ",
      dataName: ["2015年", "2016年", "2017年", "2018年", "2019年"],
      dataZZ: [20, 10, 20, 80, 120],
      dataCM: [10, 70, 60, 60, 110],
      dataLY: [80, 80, 50, 120, 100],
      dataYY: [20, 70, 90, 80, 140]
    };
  },
  methods: {
    //近5年产量预警
    nyjctj() {
      const chart = this.$echarts.init(document.getElementById("nyjctj"));
      chart.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            //type: "line",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          show: true,
          icon: "roundRect",
          bottom: "2%",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        color: ["#0080ff", "#4cd5ce"],
        toolbox: {
          // feature: {
          //     saveAsImage: {}
          // }
        },
        grid: {
          left: "3%",
          right: "6%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        // legend: {
        //   orient: "vertical",
        //   top: "12%",
        //   left: "50%",
        // },
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
    this.nyjctj(); //近5年产量预警
  }
};
</script>

<style>
.jyjj-centent #nyjcDiv {
  height: 34%;
}
.jyjj-centent #nyjcDiv #nyjctj {
  height: 100%;
}
.jyjj-centent #nyjcDiv #jpdDiv {
  height: 80%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #nyjcDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #nyjcDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #nyjcDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #nyjcDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
</style>