<template>
  <div id="sfdNumer"></div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: " ",
      titleData: "温州市各县（市、区）乡村振兴示范带数量",
      dataName: ["鹿城区","龙湾区","瓯海区","洞头区","瑞安市","乐清市","龙港市","永嘉县","平阳县","苍南县","文成县","泰顺县"],
      dataZZ: [2, 1, 3, 4, 5, 7, 0, 8, 7, 7, 8, 7],
      dataXM: [2, 2, 3, 7, 6, 5, 1, 6, 6, 6, 6, 4]
    };
  },
  methods: {
    //县市区产量预警
    cityCl() {
      const chart = this.$echarts.init(document.getElementById("sfdNumer"));
      chart.setOption({
        title: {
          text: this.titleData,
          left: "5%",
          top: "5%",
          textStyle: {
            color: "#a0ffe7",
            fontSize: 16,
            fontWeight: "normal"
          }
        },
        tooltip: {
          trigger: "axis"
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
        grid: {
          //图表的位置
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "15%",
          containLabel: true
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: "solid",
                color: "#075a47"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#04a58e",
                width: 2 //这里是为了突出显示加上的
              }
            },
            axisTick: false, //刻度不显示
            show: true
          }
        ],
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
              show: true,
              splitNumber: 15,
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            axisTick: false, //刻度不显示
            axisLine: {
              lineStyle: {
                color: "#04a58e",
                width: 2 //这里是为了突出显示加上的
              }
            },
            data: this.dataName
          }
        ],
        series: [
          {
            name: "2020-2022拟建乡村振兴示范带",
            type: "bar",
            color: "#4f9235",
            barWidth: "20px",
            stack: "sum",
            data: this.dataXM
          },
          {
            name: "2018-2019建设乡村振兴示范带",
            type: "bar",
            color: "#8cc773",
            stack: "sum",
            barWidth: "20px",
            data: this.dataZZ
          }
        ]
      });
    }
  },
  mounted() {
    this.cityCl(); //显示器产量预警
  }
};
</script>

<style>
.xczx-centent #sfdNumer {
  height: 100%;
}
</style>