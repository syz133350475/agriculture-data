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
        >面积统计</h3>
        <h3
          style="width: 50%;display: inline-block;text-align: center;color: #a0ffe7;font-weight: normal;"
        >产量统计</h3>
      </div>
      <div id="zbfxChart"></div>
      <!-- 内容 -->
      <div style="position: absolute;top: 32%;left: 18%;text-align: center;color: #fff;">
        <p style="margin-bottom: 0;">总计</p>
        <p style="font-size: 21px;margin-top: 0;">23145</p>
      </div>
      <div style="position: absolute;top: 32%;right: 18%;text-align: center;color: #fff;">
        <p style="margin-bottom: 0;">总计</p>
        <p style="font-size: 21px;margin-top: 0;">13545</p>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: " ",
      thepieone: [],
      data_1: [11, 30, 20, 80, 11], //得到饼图的图例
      thepietwo: [], //得到饼图的左边
      thepiethree: [], //得到饼图的右边
      pieData1: [
        {
          name: "渔业",
          theData: 80
        },
        {
          name: "种植业",
          theData: 18
        },
        {
          name: "畜牧业",
          theData: 33
        },
        {
          name: "林业",
          theData: 2
        }
      ],
      pieData2: [
        {
          name: "渔业",
          theData: 80
        },
        {
          name: "种植业",
          theData: 18
        },
        {
          name: "畜牧业",
          theData: 51
        },
        {
          name: "林业",
          theData: 20
        }
      ]
    };
  },
  methods: {
    //农业占比分析
    nczbFun() {
      const chart = this.$echarts.init(document.getElementById("zbfxChart"));
      for (var i = 0; i < this.pieData1.length; i++) {
        this.thepieone.push(this.pieData1[i].name);
      }
      for (var j = 0; j < this.pieData1.length; j++) {
        let objects = {
          value: this.pieData1[j].theData,
          name: this.pieData1[j].name,
          label: {
            normal: {
              fontSize: 14,
              position: "outside",
              formatter: "{c}亩"
            }
          }
        };
        this.thepiethree.push(objects);
      }

      for (var z = 0; z < this.pieData2.length; z++) {
        let objects2 = {
          value: this.pieData2[z].theData,
          name: this.pieData2[z].name,
          label: {
            normal: {
              fontSize: 14,
              position: "outside",
              formatter: "{c}吨"
            }
          }
        };
        this.thepietwo.push(objects2);
      }
      chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: function(parms) {
            console.log(parms);
            if (parms.componentIndex == "1") {
              var str =
                // parms.name +
                // "</br>" +
                parms.marker +
                "" +
                parms.name +
                "</br>" +
                "面积（亩）：" +
                parms.data.value +
                "</br>" +
                "占比：" +
                parms.percent +
                "%";
            } else {
              var str =
                // parms.name +
                // "</br>" +
                parms.marker +
                "" +
                parms.name +
                "</br>" +
                "产量（吨）：" +
                parms.data.value +
                "</br>" +
                "占比：" +
                parms.percent +
                "%";
            }

            return str;
          }
        },
        legend: {
          data: this.thepieone,
          bottom: "2%",
          textStyle: {
            color: ["#fff"]
          },
          itemGap: 25,
          itemWidth: 20
        },
        series: [
          {
            name: "产量统计",
            type: "pie",
            hoverAnimation: false, //鼠标上去效果
            radius: ["60%", "40%"],
            center: ["75%", "50%"],
            data: this.thepietwo
          },
          {
            name: "面积统计",
            type: "pie",
            hoverAnimation: false, //鼠标上去效果
            radius: ["60%", "40%"],
            center: ["25%", "50%"],
            data: this.thepiethree
          }
        ],
        color: ["#05d3f8", "#e67136", "#fcff14", "#71e636"]
      });
    }
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
.jyjj-centent #zbfxDiv #zbfxChart {
  width: 100%;
  height: 100%;
}
</style>