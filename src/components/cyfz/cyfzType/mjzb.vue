<template>
  <!-- 产业发展下的农业产业面积占比 -->
  <div id="mjzbDiv"></div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.mjzbInit();
  },
  methods: {
    mjzbInit() {
      const option = {
        title: {
          text: "某站点用户访问来源",
          subtext: "纯属虚构",
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "right",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      const that = this;
      that.chart = that.$echarts.init(document.getElementById("mjzbDiv"));
      that.chart.setOption(option);
    }
  }
};
</script>

<style>
#mjzbDiv {
  height: 25%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 17px;
  margin: 10px 25px 10px 20px;
}
</style>