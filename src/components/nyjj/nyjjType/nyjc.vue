<template>
  <div id="nyjcDiv">
    <div class="title" style="height:18%">
      <h3>农业产值（万元）</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="nyjctj"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";
import {lineOption } from "./echartconfig/line"



export default {
  data() {
    return {
      chart: undefined,
      //       Id: 1
      // lycz: "1947" 林业
      // mycz: "3145" 牧业
      // nf: "1949" 年份
      // nlmyfwy: null 农林牧渔业总产值
      // nlmyyzcz: "27129"
      // nycz: "20318" 农业产值
      // yycz: "1719" 渔业产值
      cz_Cate: [],
      cz_Datab: {
        ny: [],
        ly: [],
        yy: [],
        my: []
      }
    };
  },
  computed: {
    ...mapState({
      nyczb: state => state.nyczb
    })
  },
  watch: {
    nyczb(n, o) {
      this.nyczFilter();
      this.refreshData()
    }
  },
  methods: {
    //筛选最近五年的数据
    refreshData() {
      const that = this;
      console.log("that.cz_Datab.ny",that.cz_Datab.ny)
      lineOption.series[0].data = that.cz_Datab.ny;
      lineOption.series[1].data = that.cz_Datab.ly;
      lineOption.series[2].data = that.cz_Datab.my;
      lineOption.series[3].data = that.cz_Datab.yy;
      lineOption.xAxis[0].data = that.cz_Cate;
      that.chart.setOption(lineOption);
    },

    nyczFilter() {
      const data = this.nyczb;
      let end = data.length - 6;
      for (let i = data.length - 1; end < i; i--) {
        console.log("i", i);
        console.log("data i", data[i]);
        this.cz_Datab.ny.push(parseInt(data[i].nycz));
        this.cz_Datab.ly.push(parseInt(data[i].lycz));
        this.cz_Datab.my.push(parseInt(data[i].mycz));
        this.cz_Datab.yy.push(parseInt(data[i].yycz));
        this.cz_Cate.push(data[i].nf + "年");
      }
      // console.log('cz_Datab',this.cz_Datab)
    },

    //近5年产量预警
    nyjctj() {
      const that = this;
      this.chart = this.$echarts.init(document.getElementById("nyjctj"));
     
            lineOption.series[0].data = that.zzy;
      lineOption.series[1].data = that.xmy;
      lineOption.series[2].data = that.ly;
      lineOption.series[3].data = that.yy;
      lineOption.xAxis[0].data = that.cz_Cate;
      lineOption.series.forEach(Element=>{
        Element.areaStyle={}
      })
      this.chart.setOption(lineOption);
    }
  },
  created() {
    // 数据加载
    const { cz_Category, cz_Data } = window.chartData;
    this.cz_Category = cz_Category;
    const { zzy, xmy, ly, yy } = cz_Data;
    this.zzy = zzy;
    this.xmy = xmy;
    this.ly = ly;
    this.yy = yy;
  },
  mounted() {
    this.nyjctj(); //近5年产量预警
    // this.nyczFilter();
  }
};
</script>

<style>
.jyjj-centent #nyjcDiv {
  height: 34%;
}
.jyjj-centent #nyjcDiv #nyjctj {
  height: 100%;
}
.jyjj-centent #nyjcDiv #jpdDiv {
  height: 80%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #nyjcDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #nyjcDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #nyjcDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #nyjcDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
</style>