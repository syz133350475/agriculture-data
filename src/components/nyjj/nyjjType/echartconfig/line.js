/**
 * 折线图
 * 历年农产品价格 农业产值
 */

export const lineOption = {
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
        data: []
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
        name: "农业",
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
        data: []
      },
      {
        name: "林业",
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
        data: []
      },
      {
        name: "牧业",
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
        data: []
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
        data: []
      }
    ]
  };
