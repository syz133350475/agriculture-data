<template>
  <div id="city-CL"></div>
</template>

<script>
export default {
  data() {
    return {
      charts: " ",
      titleData: "年度县市区产量预警（吨）",
      dataName: ["鹿城区","瓯海区","龙湾区","瑞安市","苍南县","永嘉县","乐清市","泰顺县","平阳县"],
      dataZZ: [20, 30, 20, 30, 20, 30, 20, 30, 20],
      dataXM: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20],
      dataLY: [20, 30, 20, 30, 20, 30, 20, 30, 20, 30],
      dataYY: [9, 30, 9, 60, 70, 20, 59, 20, 49, 20],
      color: ["#388BFF", "#05C3FA", "#F6931C", "#FFD52E"]
    };
  },
  methods: {
    //县市区产量预警
    cityCl() {
      const chart = this.$echarts.init(document.getElementById("city-CL"));
      chart.setOption({
        title: {
          text: this.titleData,
          left: "5%",
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
          bottom: "20%",
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
            name: "种植业",
            type: "bar",
            color: "rgb(14,255,216)",
            stack: "sum",
            barWidth: "20px",
            data: this.dataZZ
          },
          {
            name: "畜牧业",
            type: "bar",
            color: "rgb(255,179,62)",
            barWidth: "20px",
            stack: "sum",
            data: this.dataXM
          },
          {
            name: "林业",
            type: "bar",
            color: "rgb(80,216,0)",
            stack: "sum",
            barWidth: "20px",
            data: this.dataLY
          },
          {
            name: "渔业",
            type: "bar",
            color: "rgb(15,188,239)",
            stack: "sum",
            barWidth: "20px",
            data: this.dataYY
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
.jcyj-centent #clyjDiv #city-CL {
  height: 50%;
}
</style>