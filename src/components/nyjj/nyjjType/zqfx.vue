<template>
  <div id="zqfxDiv">
    <div class="title" style="height:18%">
      <h3>灾情分析</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="zqfxEchart"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      chart: undefined
    };
  },
  methods: {
    //农业占比分析
    zqfxFun() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("zqfxEchart"));
      this.chart.setOption({
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
        radar: [
          {
            indicator: this.category,
            center: ["50%", "57%"],
            radius: "80%",
            name: {
              textStyle: {
                color: "#e6fae5",
                fontSize: 16
              }
            },
            splitLine: {
              lineStyle: {
                color: "#c8d4d0",
                opacity: 0.5,
                width: 1
              }
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: "#000",
                opacity: 0.2
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#c8d4d0",
                type: "dashed"
              }
            }
          }
        ],
        series: [
          {
            type: "radar",
            tooltip: {
              trigger: "item"
            },
            data: [
              {
                value: that.zq_Data,
                name: "次数"
              }
            ],
            symbolSize: 10,
            itemStyle: {
              normal: {
                borderColor: "#ffc72b",
                borderWidth: 2
              }
            },
            lineStyle: {
              normal: {
                color: "#ffc72b",
                width: 2
              }
            },
            areaStyle: {
              normal: {
                color: "#ffc72b",
                opacity: 0.5
              }
            }
          }
        ]
      });
    }
  },
  created() {
    // 数据加载
    const { zq_Category, zq_Data } = window.chartData;

    this.zq_Data = zq_Data;

    const maxValue = zq_Data.sort((a, b) => b - a)[0];

    const sArr = [];

    zq_Category.map(item => {
      sArr.push({
        text: item,
        max: maxValue
      });
    });

    this.category = sArr;
  },
  mounted() {
    this.zqfxFun(); //近5年产量预警
  }
};
</script>

<style>
.jyjj-centent #zqfxDiv {
  height: 33%;
  padding-left: 2.5%;
}
.jyjj-centent #zqfxDiv #jpdDiv {
  height: 80%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #zqfxDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #zqfxDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #zqfxDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #zqfxDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jyjj-centent #zqfxDiv #zqfxEchart {
  width: 100%;
  height: 100%;
}
</style>