<template>
  <div id="nyjjMapDiv">
    <div id="nyjj-map"></div>
    <img src="../../../assets/img/map_tl.png" alt />
  </div>
</template>

<script>
/* eslint-disable */

import wenzhouMap from "../../../assets/js/WenZhou.js";
export default {
  data() {
    return {
      charts: " ",
      //坐标
      geoMap: {
        鹿城区: [120.489894, 28.132536],
        龙湾区: [120.805894, 27.900969],
        瓯海区: [120.531369, 27.986593],
        洞头区: [121.113762, 27.832626],
        瑞安市: [120.465572, 27.841998],
        乐清市: [120.978579, 28.220666],
        永嘉县: [120.642158, 28.330733],
        文成县: [119.982316, 27.807567],
        平阳县: [120.390537, 27.643857],
        泰顺县: [119.877783, 27.481151],
        苍南县: [120.452814, 27.381237],
        龙港市: [120.6099323, 27.52166944]
      },
      //数值
      geoData: {
        鹿城区: [8, 6, 4, 2],
        龙湾区: [8, 6, 4, 2],
        瓯海区: [8, 6, 4, 2],
        洞头区: [8, 6, 4, 2],
        瑞安市: [8, 6, 4, 2],
        乐清市: [8, 6, 4, 2],
        永嘉县: [8, 6, 4, 2],
        文成县: [8, 6, 4, 2],
        平阳县: [8, 6, 4, 2],
        泰顺县: [8, 6, 4, 2],
        苍南县: [8, 6, 4, 2],
        龙港市: [8, 6, 4, 2]
      }
    };
  },
  methods: {
    NYJJMap() {
      const chart = this.$echarts.init(document.getElementById("nyjj-map"));
      this.$echarts.registerMap("wenzhou", wenzhouMap);
      chart.setOption({
        geo: {
          map: "wenzhou",
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(147, 235, 248, 1)",
              borderWidth: 1,
              areaColor: {
                type: "radial",
                x: 0.5,
                y: 0.5,
                r: 0.8,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(147, 235, 248, 0)"
                  },
                  {
                    offset: 1,
                    color: "rgba(147, 235, 248, .2)"
                  }
                ]
              },
              shadowColor: "rgba(128, 217, 248, 1)",
              shadowOffsetX: -2,
              shadowOffsetY: 2,
              shadowBlur: 10
            },
            emphasis: {
              areaColor: "#389BB7",
              borderWidth: 0
            }
          }
        }
      });
    },
    addBar() {
      const grids = [];
      const xAxis = [];
      const yAxis = [];
      const barSeries = [];
      Object.keys(this.geoData).map((item, index) => {
        const coord = this.$echarts
          .init(document.getElementById("nyjj-map"))
          .convertToPixel("geo", this.geoMap[item]);

        grids.push({
          width: 40,
          height: 30,
          left: coord[0] - 25,
          top: coord[1] - 25,
          z: 100
        });

        xAxis.push({
          gridIndex: index,
          name: item,
          nameLocation: "middle",
          nameTextStyle: {
            color: "#FFF",
            fontSize: 14
          },
          type: "category",
          data: [1, 2, 3, 4],
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 100
        });

        yAxis.push({
          type: "value",
          show: false,
          gridIndex: index,
          z: 100
        });

        barSeries.push({
          id: index,
          type: "bar",
          xAxisIndex: index,
          yAxisIndex: index,
          barCategoryGap: "35%",
          data: this.geoData[item],
          z: 100,
          itemStyle: {
            normal: {
              color: function(params) {
                // 柱状图每根柱子颜色
                const colorList = ["#0effd8", "#ffb33e", "#50d800", "#0fbcef"];
                return colorList[params.dataIndex];
              },
              barBorderRadius: 5
            },
            emphasis: {
              label: {
                show: false
              }
            }
          }
        });
      });

      return {
        geo: this.$echarts.init(document.getElementById("nyjj-map")).getOption()
          .geo,
        grid: grids,
        xAxis: xAxis,
        yAxis: yAxis,
        series: [...barSeries]
      };
    }
  },
  mounted() {
    this.NYJJMap(); //调用地图
    this.addBar(); //添加柱状图
    const newOption = this.addBar();

    this.$echarts
      .init(document.getElementById("nyjj-map"))
      .setOption(newOption);
  }
};
</script>

<style>
.jyjj-centent #nyjjMapDiv {
  width: 100%;
  height: 100%;
}
.jyjj-centent #nyjj-map {
  width: 100%;
  height: 100%;
}
.jyjj-centent #nyjjMapDiv img {
  position: absolute;
  right: 2%;
  top: 70%;
  width: 65px;
}
</style>