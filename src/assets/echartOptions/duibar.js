

const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data: [
        "邮件营销",
        "联盟广告",
        "视频广告",
      ]
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    xAxis: [
      {
        type: "category",
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      }
    ],
    yAxis: [
      {
        type: "value"
      }
    ],
    series: [
      {
        name: "邮件营销",
        type: "bar",
        stack: "广告",
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: "联盟广告",
        type: "bar",
        stack: "广告",
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: "视频广告",
        type: "bar",
        stack: "广告",
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  }


// export default {
//     option: function(){
//         return option
//     }
// }

//export放在调用的下面

export default  option

