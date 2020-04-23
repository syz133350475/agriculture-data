<template>
  <div class="xczx-centent">
    <el-row>
      <el-col :span="6">
        <div id="LeftDiv">
          <jpdCentent />
        </div>
      </el-col>
      <el-col :span="12">
        <xczxMap ref="xczxMap"/>
        <xczxZxzc />
      </el-col>
      <el-col :span="6">
        <div id="xczx-rightDiv">
          <xczxVideo />
          <!-- <xczxJQC />
          <xczxMS />-->
          <!-- <xczxNJL /> -->
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
/* eslint-disable */
import jpdCentent from "./xczxType/jpdCentent.vue";
import xczxMap from "./xczxType/map.vue";
import xczxZxzc from "./xczxType/zxzc.vue";
import xczxVideo from "./xczxType/video.vue";
// import xczxMS from "./xczxType/msTop.vue";
// import xczxNJL from "./xczxType/njlTop.vue";
// import xczxJQC from "./xczxType/jqcTop.vue";
import { mapActions } from "vuex";

export default {
  name: "xczx", //乡村振兴
  components: {
    jpdCentent, //精品带详情
    xczxMap, //地图模块
    xczxZxzc, //乡村政策
    xczxVideo, //景点监控视频
    // xczxMS, //民宿排行
    // xczxNJL, //农家乐排行
    // xczxJQC //景区村排行
  },
  async mounted() {
    console.log("xczx",this.$refs)
    await this.fetch_boutique_map_band();
    await this.fetch_boutique_map_item();
  },
  methods: {
    ...mapActions(["fetch_boutique_map_item", "fetch_boutique_map_band"])
  }
};
</script>

<style>
.xczx-centent {
  width: 100%;
  height: 90%;
  position: relative;
  top: 5.7em;
}
.xczx-centent #LeftDiv,
.xczx-centent .el-row,
.xczx-centent .el-col {
  height: 100%;
}
.xczx-centent #LeftDiv {
  padding: 3%;
  padding-top: 0;
  padding-bottom: 0;
}
.xczx-centent #xczx-rightDiv {
  height: 100%;
  padding: 3%;
  padding-top: 0;
  padding-bottom: 0;
}
.xczx-centent .title {
  background-image: url(../../assets/img/title.png);
  background-size: 100%;
  background-position: 0px 15px;
  background-repeat: no-repeat;
  height: 5%;
}
</style>