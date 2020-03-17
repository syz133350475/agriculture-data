<template>
  <div id="zqzbDiv">
    <div class="title" style="height:26%">
      <h3>灾情经济损失</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="zqzb-centent"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      charts: " ",
      titleData: "灾情统计",
      dataAge: [
        {
          value: 335,
          name: "气象灾害",
          itemStyle: { color: "#45A2FF" }
        },
        {
          value: 310,
          name: "海洋灾害",
          itemStyle: { color: "#3EFFF5" }
        },
        {
          value: 234,
          name: "地质灾害",
          itemStyle: { color: "#54B561" }
        },
        {
          value: 154,
          name: "农、林病虫害",
          itemStyle: { color: "#FFD366" }
        },
        {
          value: 335,
          name: "人为自然灾害",
          itemStyle: { color: "#FF8666" }
        }
      ],
      dataHJ: [12312] //合计损失
    };
  },
  methods: {
    //灾情占比
    zqzb() {
      const chart = this.$echarts.init(document.getElementById("zqzb-centent"));
      chart.setOption({
        name: "xx",
        title: [
          {
            text: "合计",
            subtext: this.dataHJ + "个",
            textStyle: {
              fontSize: 12,
              color: "#fff"
            },
            subtextStyle: {
              fontSize: 16,
              color: "#fff",
              fontWeight:"bold",
            },
            textAlign: "center",
            x: "29%",
            y: "30%"
          }
        ],
        tooltip: {
          trigger: "item",
          formatter: function(parms) {
            console.log(parms);
            var str =
              // parms.name +
              // "</br>" +
              parms.marker +
              "" +
              parms.name +
              "</br>" +
              "经济损失：" +
              parms.data.value +
              "</br>" +
              "占比：" +
              parms.percent +
              "%";
            return str;
          }
        },
        legend: {
          orient: "vertical",
          left: "65%",
          align: "left",
          top: "middle",
          textStyle: {
            color: "#fff"
          },
          height: 250
        },
        series: [
          {
            type: "pie",
            center: ["30%", "50%"],
            radius: ["50%", "70%"],
            clockwise: false, //饼图的扇区是否是顺时针排布
            avoidLabelOverlap: false,
            //标签
            label: {
              normal: {
                show: true,
                position: "outter",//inside
                formatter: "{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
                textStyle: {
                  align: "center",
                  color: "#fff",
                  fontSize: 14
                }
              }
            },
            labelLine: {
                show:false,
                normal: {
                  length:5,
                  length2:3,
                  smooth:false,
                }
            },
            data: this.dataAge
          }
        ]
      });
    }
  },
  mounted() {
    this.zqzb(); //近5年产量预警
  }
};
</script>

<style>
.jcyj-centent #zqzbDiv {
  height: 25%;
}
.jcyj-centent #zqzbDiv #jpdDiv {
  height: 72%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jcyj-centent #zqzbDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #zqzbDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #zqzbDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #zqzbDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jcyj-centent #zqzbDiv #jpdDiv #zqzb-centent {
  height: 100%;
}
</style>