<template>
  <div id="nyjj-mapPh"></div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  data() {
    return {
      chart: undefined,
      titleData: "鹿城区农作物产量排行"
    };
  },
  computed: {
    ...mapState({
      // qxnzwbzmjhclb: state => {
      //   return state.qxnzwbzmjhclb.filter(item => {
      //     console.log("总产量",item)
      //     return item.zb.includes("总产量");
      //   });
      // }
    })
  },
  methods: {
    mapPh() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("nyjj-mapPh"));
      this.chart.setOption({
        grid: {
          height: "60%",
          width: "75%",
          left: "12%"
        },
        title: {
          text: this.titleData,
          left: "left",
          top: "10%",
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
          data: that.nzw_Category
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
                fontSize: 12
              }
            },
            barWidth: 15,
            data: that.nzw_Data["鹿城区"]
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
            data: that.maxObj["鹿城区"]
          }
        ]
      });
    },
    // 数据更新
    updateChart(name) {
      const that = this;
      this.titleData = `${name}农作物产量排行`;
      this.chart.setOption({
        title: {
          text: that.titleData
        },
        series: [
          {
            data: that.nzw_Data[name]
          },
          {
            data: that.maxObj[name]
          }
        ]
      });
    }
  },
  created() {
    // 数据加载
    console.log('qxnzwbzmjhclb',this.qxnzwbzmjhclb)
    const { nzw_Category, nzw_Data } = window.chartData;
    this.nzw_Category = nzw_Category;
    this.nzw_Data = nzw_Data;
    const maxObj = {};
    for (let k in nzw_Data) {
      !maxObj[k] && (maxObj[k] = []);

      const maxValue = nzw_Data[k].sort((a, b) => b - a)[0];

      for (let i = 0; i < 5; i++) {
        maxObj[k].push(maxValue);
      }
    }
    console.log("maxObj", maxObj);
    this.maxObj = maxObj;
  },
  mounted() {
    this.mapPh(); //调用地图边上的柱状图
  }
};
</script>

<style>
.jyjj-centent #nyjj-mapPh {
  height: 40%;
}
</style>