/**
 * 双层bar
 * 旅游分析 乡村经济分析
 */

export const baroption ={
    grid: {
      left: "3%",
      right: "5%",
      top: "10%",
      bottom: "15%",
      containLabel: true
    },
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
      itemGap: 15,
      itemWidth: 20
    },
    xAxis: {
      data: [],
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
          },
          formatter: "{value}"
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: "solid",
            color: "#075a47"
          }
        },
      },
      {
        splitLine: { show: false },
        axisLine: {
          lineStyle: {
            color: "#04a58e"
          }
        }
      }
    ],
    series: [
      {
        name: "",
        type: "bar",
        barGap: 0,
        barWidth: "30%",
        itemStyle: {
          normal: {
            color: "#5768EF"
          }
        },
        data: []
      },
      {
        name: "",
        type: "bar",
        barWidth: "30%",
        itemStyle: {
          normal: {
            color: "#50b0ff"
          }
        },
        data: []
      }
    ]
  }