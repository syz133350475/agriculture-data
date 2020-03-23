const category = [
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
];
const barData = [
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
];
export const zztOption = {
  title: {
    left: "center",
    // text: "大数据量面积图"
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
    data: category,
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
      }
      //   axisLabel: {
      //     formatter: "{value} "
      //   }
    }
  ],

  series: [
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
      data: barData
    }
  ]
};
var data = [
  {
    name: "1",
    value: 10
  },
  {
    name: "2",
    value: 10
  },
  {
    name: "3",
    value: 10
  },
  {
    name: "4",
    value: 10
  },
  {
    name: "5",
    value: 10
  },
  {
    name: "6",
    value: 20
  },
  {
    name: "7",
    value: 30
  }
];
export const btOption = {
  // title: {
  //   left: "center",
  //   text: "大数据量面积图"
  // },
  color: [
    "#A0CE3A",
    "#31C5C0",
    "#1E9BD1",
    "#0F347B",
    "#585247",
    "#7F6AAD",
    "#009D85",
    "rgba(250,250,250,0.3)"
  ],
  grid: {
    top: 10,
    left: "5%",
    right: "5%"
  },
  legend: {
    // orient: "vertical",
    bottom: "1%",
    // right: "1%",
    textStyle: {
      color: "#f2f2f2",
      fontSize: 18
    },
    icon: "roundRect",
    data: data
  },
  series: [
    // 主要展示层的
    {
      radius: ["30%", "51%"],
      center: ["50%", "40%"],
      type: "pie",
      label: {
        normal: {
          show: true,
          formatter: "{b}:{c}%",
          textStyle: {
            fontSize: 20
          },
          position: "outside"
        },
        emphasis: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true,
          length: 10,
          length2: 5
        },
        emphasis: {
          show: true
        }
      },
      // name: "民警训练总量",
      data: data
    },
    // 边框的设置
    {
      radius: ["30%", "34%"],
      center: ["50%", "40%"],
      type: "pie",
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      animation: false,
      tooltip: {
        show: false
      },
      data: [
        {
          value: 1,
          itemStyle: {
            color: "rgba(250,250,250,0.3)"
          }
        }
      ]
    },
    {
      name: "外边框",
      type: "pie",
      clockWise: false, //顺时加载
      hoverAnimation: false, //鼠标移入变大
      center: ["50%", "40%"],
      radius: ["50%", "50%"],
      label: {
        normal: {
          show: false
        }
      },
      data: [
        {
          value: 9,
          name: "",
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: "#0b5263"
            }
          }
        }
      ]
    }
  ]
};
