<template>
  <!-- 产业发展下产值统计 -->
  <div id="cztjDiv"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.cztjInit();
  },
  methods: {
    cztjInit() {
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
            "直接访问",
            "邮件营销",
            "联盟广告",
            "视频广告",
            "搜索引擎",
            "百度",
            "谷歌",
            "必应",
            "其他"
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
      };
      const that = this;
      that.chart = that.$echarts.init(document.getElementById("cztjDiv"));
      that.chart.setOption(option);
    }
  }
};
</script>

<style>
#cztjDiv {
  height: 30%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 17px;
  margin: 10px 25px 10px 20px;
}
</style>