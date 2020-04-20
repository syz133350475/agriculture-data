<template>
  <div :id="echartId" class="chart_item"></div>
</template>

<script>
import echarts from "echarts";

export default {
  props: {
    echartId: String,
    option: Object
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const that = this;
      that.chart = echarts.init(document.getElementById(this.echartId));
      that.chart.setOption(this.option);
    }
  }
};
</script>

<style>
.chart_item{
    flex: 1;
}
</style>