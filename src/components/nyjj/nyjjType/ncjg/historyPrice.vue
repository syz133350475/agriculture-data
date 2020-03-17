<!--农产品历年价格-->
<template>
  <div id="historyPrice"></div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: " ",
      titleData: "历年农产品价格(元)",
      dataName: ["2015年", "2016年", "2017年", "2018年", "2019年"],
      data_1: [11, 30, 20, 80, 11],
      data_2: [10, 56, 23, 43, 23],
      data_3: [80, 40, 8, 12, 45],
      data_4: [20, 70, 60, 80, 60],
    };
  },
  methods: {
    //近5年产量预警
    historyPrice() {
      const chart = this.$echarts.init(document.getElementById("historyPrice"));
      chart.setOption({
        title: {
          text: this.titleData,
          top: "5%",
          left: "2%",
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
          top: "20%",
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
            name: "牛肉",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgb(255,179,62)" //背景色
              }
            },
            data: this.data_1
          },
          {
            name: "猪肉",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgb(230,212,41)" //背景色
              }
            },
            data: this.data_2
          },
          {
            name: "羊肉",
            type: "line",
            smooth: true,
            itemStyle: {
              normal: {
                color: "rgb(52,227,64)" //背景色
              }
            },
            data: this.data_3
          },
          {
            name: "禽蛋",
            type: "line",
            smooth: true,
            //  symbol: "none", //去掉折线点
            itemStyle: {
              normal: {
                color: "rgb(206,62,119)" //背景色
              }
            },
            data: this.data_4
          }
        ]
      });
    }
  },
  mounted() {
    this.historyPrice(); //近5年产量预警
  }
};
</script>

<style>
#historyPrice {
  width: 100%;
  height: 50%;
}
</style>