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
  4444,
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

/**
 * 柱状图
 */
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


/**
 * 饼图
 */
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
      radius: ["25%", "38%"],
      center: ["50%", "40%"],
      type: "pie",
      label: {
        normal: {
          show: true,
          formatter: "{b}:{c}%",
          textStyle: {
            fontSize: 18
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
          length: 5,
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
      radius: ["38%", "38%"],
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
      radius: ["40%", "40%"],
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


export const  lineOption = {
  title: {
    text: '堆叠区域图',
    left:'center'
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'cross',
          label: {
              backgroundColor: '#6a7985'
          }
      }
  },
  toolbox: {
      feature: {
          saveAsImage: {}
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [
      {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
          name: '视频广告',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
          name: '直接访问',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
  ]
};