<template>
  <div class="jyjj-centent">
    <el-row>
      <el-col :span="6">
        <div id="jyjj-LeftDiv">
          <jyjjNCJG />
          <jyjjNYJC />
        </div>
      </el-col>
      <el-col :span="12">
        <div id="jyjj-centertDiv">
          <jyjjTop />
          <div id="nyjj-centertDivMapDiv">
            <el-row>
              <el-col :span="8">
                <jyjjmapPh ref="jyjjmapPh" />
                <jyjjTable ref="jyjjTable" />
              </el-col>
              <el-col :span="16">
                <jyjjMAP ref="jyjjMAP" />
              </el-col>
            </el-row>
          </div>
          <div style="height:30%">
            <el-row>
              <el-col :span="12">
                <jyjjYGNC />
              </el-col>
              <el-col :span="12">
                <jyjjNYJJ />
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div id="jyjj-rightDiv" style="padding-left: 0;">
          <jyjjZBFX />
          <jyjjSRFX />
          <jyjjZQFX />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import jyjjNCJG from "./nyjjType/ncjg.vue";
import jyjjNYJC from "./nyjjType/nyjc.vue";
import jyjjTop from "./nyjjType/toptype.vue";
import jyjjMAP from "./nyjjType/map.vue";
import jyjjYGNC from "./nyjjType/ygnc.vue";
import jyjjNYJJ from "./nyjjType/nljjfx.vue";
import jyjjZBFX from "./nyjjType/zbfx.vue";
import jyjjSRFX from "./nyjjType/srfx.vue";
import jyjjZQFX from "./nyjjType/zqfx.vue";
import jyjjmapPh from "./nyjjType/mapPh.vue";
import jyjjTable from "./nyjjType/nyjjTable.vue";

export default {
  name: "nyjj", //农业经济
  components: {
    jyjjNCJG, //农产品价格
    jyjjNYJC, //农业监测
    jyjjTop, //顶部四大类
    jyjjMAP, //经济地图
    jyjjYGNC, //阳光农场
    jyjjNYJJ, //农旅经济分析
    jyjjZBFX, //农业占比分析
    jyjjSRFX, //农村收入分析
    jyjjZQFX, //灾情分析
    jyjjmapPh, //地图（农作物产量排行）
    jyjjTable //农产产量排行
  }
};
</script>

<style>
.jyjj-centent {
  width: 100%;
  height: 90%;
  position: relative;
  top: 5.7em;
  overflow: hidden;
}
.jyjj-centent .el-row,
.jyjj-centent .el-col {
  height: 100%;
}
.jyjj-centent #jyjj-LeftDiv,
.jyjj-centent #jyjj-rightDiv {
  height: 100%;
  padding: 3%;
  padding-top: 0;
  padding-bottom: 0;
}
.jyjj-centent #jyjj-centertDiv {
  height: 100%;
}
.jyjj-centent .title {
  background-image: url(../../assets/img/title.png);
  background-size: 100%;
  background-position: 0px 15px;
  background-repeat: no-repeat;
  height: 5%;
}
.jyjj-centent #nyjj-centertDivMapDiv {
  height: 60%;
}
</style>