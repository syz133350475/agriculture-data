<template>
  <div id="nyjcDiv">
    <div class="title" style="height:18%">
      <h3>农业产值（万元）</h3>
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
      chart: undefined
    };
  },
  methods: {
    //近5年产量预警
    nyjctj() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("nyjctj"));
      this.chart.setOption({
        grid: {
          left: "3%",
          right: "6%",
          top: "10%",
          bottom: "15%",
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
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
            color: "#fff"
          }
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff",
                fontSize: 12
              }
            },
            axisTick: false,
            axisLine: {
              lineStyle: {
                color: "#04a58e",
                width: 2
              }
            },
            data: that.cz_Category
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              onZero: false,
              lineStyle: {
                width: 2,
                color: "#04a58e"
              }
            },
            axisTick: false,
            axisLabel: {
              show: true,
              textStyle: {
                color: "#fff"
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
            itemStyle: {
              normal: {
                color: "rgba(14,255,216,.4)",
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(14,255,216)"
                }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: that.zzy
          },
          {
            name: "畜牧业",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(255,179,62,.4)",
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(255,179,62)"
                }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: that.xmy
          },
          {
            name: "林业",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(80,216,0,.4)",
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(80,216,0)"
                }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: that.ly
          },
          {
            name: "渔业",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgba(15,188,239,.4)",
                lineStyle: {
                  width: 2,
                  type: "solid",
                  color: "rgb(15,188,239)"
                }
              }
            },
            symbolSize: 5,
            areaStyle: {
              normal: {}
            },
            data: that.yy
          }
        ]
      });
    }
  },
  created() {
    // 数据加载
    const { cz_Category, cz_Data } = window.chartData;
    this.cz_Category = cz_Category;
    const { zzy, xmy, ly, yy } = cz_Data;
    this.zzy = zzy;
    this.xmy = xmy;
    this.ly = ly;
    this.yy = yy;
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