<template>
  <div class="jcyj-centent">
    <el-row>
      <el-col :span="6">
        <div id="jcyj-LeftDiv">
          <weather />
          <jcyjCLYJ />
          <jcyjZQZB />
        </div>
      </el-col>
      <el-col :span="12">
        <div id="jcyj-centertDiv">
          <Jimg />
          <jcyjJJSS />
        </div>
      </el-col>
      <el-col :span="6">
        <div id="jcyj-rightDiv">
          <jcyjNYY />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import weather from "./jcyjType/weather.vue";
import jcyjCLYJ from "./jcyjType/clyj.vue";
import jcyjZQZB from "./jcyjType/zqzb.vue";
import Jimg from "./jcyjType/Jimg.vue";
import jcyjJJSS from "./jcyjType/jjss.vue";
import jcyjNYY from "./jcyjType/nyyList.vue";

export default {
  name: "jcyj", //监测预警
  components: {
    weather, //今日天气
    jcyjCLYJ, //产量预警
    jcyjZQZB, //灾情占比
    Jimg, //首页大图
    jcyjJJSS, //经济损失
    jcyjNYY //农业园列表
  }
};
</script>

<style>
.jcyj-centent {
  width: 100%;
  height: 90%;
  position: relative;
  top: 5.7em;
}
.jcyj-centent .el-row,
.jcyj-centent .el-col {
  height: 100%;
}
.jcyj-centent #jcyj-LeftDiv,
.jcyj-centent #jcyj-rightDiv {
  height: 100%;
  padding: 3%;
  display: flex;
  flex-direction: column;
  padding-top: 0;
  padding-bottom: 0;
}
.jcyj-centent #jcyj-centertDiv {
  height: 100%;
  flex: 1;
}
.jcyj-centent .title {
  background-image: url(../../assets/img/title.png);
  background-size: 100%;
  background-position: 0px 15px;
  background-repeat: no-repeat;
  height: 5%;
}
</style>