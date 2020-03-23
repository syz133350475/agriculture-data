<template>
  <div id="zbfxDiv">
    <div class="title" style="height:18%">
      <h3>农业占比分析</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <!-- 标题 -->
      <div style="position: absolute;width: 100%;">
        <h3
          style="width: 50%;display: inline-block;text-align: center;color: #a0ffe7;font-weight: normal;"
        >{{ title1 }}</h3>
        <div id="select">
          <el-select v-model="value" @change="bqSelect($event)">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <h3
          style="width: 50%;display: inline-block;text-align: center;color: #a0ffe7;font-weight: normal;"
        >{{ title2 }}</h3>
      </div>
      <div id="zbfxChart"></div>
      <!-- 内容 -->
      <div
        style="position: absolute;top: 32%;left: 25%;transform: translate(-50%, 0px);text-align: center;color: #fff;"
      >
        <p style="margin-bottom: 0;">总计</p>
        <p style="font-size: 21px;margin-top: 0;">{{ sum1 }}</p>
      </div>
      <div
        style="position: absolute;top: 32%;right: 25%;transform: translate(50%, 0px);text-align: center;color: #fff;"
      >
        <p style="margin-bottom: 0;">总计</p>
        <p style="font-size: 21px;margin-top: 0;">{{ sum2 }}</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      chart: undefined,
      title1: "面积 (万公顷)",
      title2: "产量 (万吨)",
      options: [
        {
          value: "种植业",
          label: "种植业"
        },
        {
          value: "畜牧业",
          label: "畜牧业"
        },
        {
          value: "林业",
          label: "林业"
        },
        {
          value: "渔业",
          label: "渔业"
        }
      ],
      value: "种植业"
    };
  },
  methods: {
    //农业占比分析
    nczbFun() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("zbfxChart"));
      this.chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(parms) {
            if (parms.seriesIndex == 0) {
              return `${parms.marker}${parms.name}<br />
                ${
                  that.value == "畜牧业" ? "饲养量 (万只)：" : "面积 (万公顷)："
                }
                ${parms.data.value}<br />
                占比：${parms.percent} %`;
            } else {
              return `${parms.marker}${parms.name}<br />
                ${that.value == "畜牧业" ? "产量 (万只)：" : "产量 (万吨)："}
                ${parms.data.value}<br />
                占比：${parms.percent} %`;
            }
          }
        },
        legend: {
          bottom: "2%",
          textStyle: {
            color: ["#fff"]
          },
          itemWidth: 20
        },
        series: [
          {
            name: "面积统计",
            type: "pie",
            hoverAnimation: false,
            minAngle: 4,
            startAngle: 230,
            radius: ["55%", "40%"],
            center: ["25%", "50%"],
            data: that.mjData,
            label: {
              normal: {
                fontSize: 12,
                position: "outside",
                formatter: "{c}"
              }
            },
            labelLine: {
              length: 25,
              length2: 7
            }
          },
          {
            name: "产量统计",
            type: "pie",
            hoverAnimation: false,
            minAngle: 4,
            radius: ["55%", "40%"],
            center: ["75%", "50%"],
            data: that.clData,
            label: {
              normal: {
                fontSize: 12,
                position: "outside",
                formatter: "{c}"
              }
            }
          }
        ],
        color: ["#05d3f8", "#e67136", "#fcff14", "#71e636"]
      });
    },
    bqSelect(event) {
      const that = this;
      const name = event;
      this.mjData = this.mjObj[name];
      this.clData = this.clObj[name];

      this.title1 = name == "畜牧业" ? "饲养量 (万只)" : "面积 (万公顷)";
      this.title2 = name == "畜牧业" ? "产量 (万只)" : "产量 (万吨)";

      this.sum1 = this.mjSumObj[name].sum.toFixed(2);
      this.sum2 = this.clSumObj[name].sum.toFixed(2);

      this.chart.setOption({
        legend: {
          data: that.nyzb_Data[event].nameList
        },
        series: [
          {
            data: that.mjData
          },
          {
            data: that.clData
          }
        ]
      });
    }
  },
  created() {
    // 数据加载
    const { nyzb_Data } = window.chartData;

    this.nyzb_Data = nyzb_Data;

    const mjObj = {};
    const clObj = {};

    const mjSumObj = {};
    const clSumObj = {};

    for (let k in nyzb_Data) {
      const _tmp = nyzb_Data[k];
      for (let i = 0; i < _tmp.nameList.length; i++) {
        !mjObj[k] && (mjObj[k] = []);
        mjObj[k].push({
          name: _tmp.nameList[i],
          value: (_tmp.mj[i] / 10000).toFixed(2)
        });

        !clObj[k] && (clObj[k] = []);
        clObj[k].push({
          name: _tmp.nameList[i],
          value: (_tmp.cl[i] / 10000).toFixed(2)
        });

        !mjSumObj[k] && (mjSumObj[k] = { sum: 0 });
        mjSumObj[k].sum =
          Number(mjSumObj[k].sum) + Number((_tmp.mj[i] / 10000).toFixed(2));

        !clSumObj[k] && (clSumObj[k] = { sum: 0 });
        clSumObj[k].sum =
          Number(clSumObj[k].sum) + Number((_tmp.cl[i] / 10000).toFixed(2));
      }
    }

    this.mjObj = mjObj;
    this.clObj = clObj;

    this.mjSumObj = mjSumObj;
    this.clSumObj = clSumObj;

    this.mjData = mjObj["种植业"];
    this.clData = clObj["种植业"];

    this.sum1 = mjSumObj["种植业"].sum.toFixed(2);
    this.sum2 = clSumObj["种植业"].sum.toFixed(2);
  },
  mounted() {
    this.nczbFun(); //近5年产量预警
  }
};
</script>

<style>
.jyjj-centent #zbfxDiv {
  height: 33%;
  padding-left: 2.5%;
}
.jyjj-centent #zbfxDiv #jpdDiv {
  height: 80%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #zbfxDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #zbfxDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #zbfxDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #zbfxDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jyjj-centent #zbfxDiv #jpdDiv #select {
  width: 20%;
  position: absolute;
  left: 50%;
  top: 14%;
  transform: translate(-50%, 0);
  z-index: 30;
}

.jyjj-centent #zbfxDiv #jpdDiv #select .el-select .el-input__inner {
  height: 28px;
  line-height: 28px;
}

.jyjj-centent #zbfxDiv #zbfxChart {
  width: 100%;
  height: 100%;
}
</style>