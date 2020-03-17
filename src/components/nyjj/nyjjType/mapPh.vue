<template>
  <div id="nyjj-mapPh"></div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: "",
      phname: ["小麦", "玉米", "大米", "高粱", "苹果"],
      phData: [11, 33, 77, 39, 55],
      phKd:[100, 100, 100, 100, 100],
      titleData:"鹿城区农作物产量排行",
    };
  },
  methods: {
    mapPh() {
      const chart = this.$echarts.init(document.getElementById("nyjj-mapPh"));
      chart.setOption({
        grid: {
          show: "true",
          borderWidth: "0",
          height: "60%",
          width: "80%",
          x: "12%"
          // y:"20%",
        },
        title: {
          text: this.titleData,
          x: "left",
          y: "10%",
          textStyle: {
            color: "#6cf1f0",
            fontSize: "16"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{b0}: {c0}"
        },
        xAxis: {
          show: false, //是否显示x轴
          type: "value"
        },
        yAxis: {
          type: "category",
          inverse: true, //让y轴数据逆向
          axisLabel: {
            show: true,
            textStyle: {
              color: "#666" //y轴字体颜色
            },
            formatter: function(value, index) {
              return [
                "{lg|" + (index + 1) + "}" + "{title|" + value + "} "
              ].join("\n");
            },
            //定义富文本标签
            rich: {
              lg: {
                fontWeight: "bold",
                fontSize: 12, //字体默认12
                color: "#08C",
                padding: [0, 5, 0, 0]
              },
              title: {
                color: "#fff",
                fontWeight: "lighter"
              }
            }
          },
          splitLine: { show: false }, //横向的线
          axisTick: { show: false }, //y轴的端点
          axisLine: { show: false }, //y轴的线
          data: this.phname
        },
        series: [
          {
            name: "数据内框",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: "#00b5eb"
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                color: "#fff",
                fontSize: 12,
              }
            },
            barWidth: 15,
            data: this.phData
          },
          {
            name: "外框",
            type: "bar",
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: "#025e56" //rgba设置透明度0.14
              }
            },
            barGap: "-100%",
            z: 0,
            barWidth: 15,
            data: this.phKd
          }
        ]
      });
    }
  },
  mounted() {
    this.mapPh(); //调用地图边上的柱状图
  }
};
</script>

<style>
.jyjj-centent #nyjj-mapPh {
  height:40%;
}
</style>