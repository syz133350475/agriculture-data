<template>
  <div id="nlfxDiv">
    <div class="title" style="height:22%">
      <h3>农旅经济分析</h3>
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
export default {
  data() {
    return {
      charts: " ",
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
      const chart = this.$echarts.init(document.getElementById("nljjfx"));
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
          bottom: "20%",
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
            name: "乡村景点",
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
            name: "农业园",
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
            name: "民宿",
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
            name: "农家乐",
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
  height:100%;
}
</style>