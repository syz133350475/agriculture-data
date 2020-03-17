<template>
  <div id="zxzcDiv">
    <div id="zc-title">
      <h3>乡村振兴示范带</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <el-row>
        <el-col :span="14">
          <ZXSL />
          <!-- 乡村振兴各县市区数量 -->
        </el-col>
        <el-col :span="10" style="overflow: hidden;">
          <sfdList />
          <!--示范带列表 -->
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ZXSL from "./zxzc/zxsl.vue";
import sfdList from "./zxzc/sfdList.vue";
export default {
  components: {
    ZXSL, //乡村振兴各县市区数量
    sfdList //示范带列表
  }
};
</script>

<style>
.xczx-centent #zc-title {
  height: 13%;
  background-image: url(../../../assets/img/zc_title.png);
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 0 10px;
}
.xczx-centent #zc-title h3 {
  text-align: center;
  line-height: 35px;
}

.xczx-centent #zxzcDiv {
  height: 34%;
}
.xczx-centent #zxzcDiv #jpdDiv {
  height: 84%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.xczx-centent #zxzcDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.xczx-centent #zxzcDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.xczx-centent #zxzcDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.xczx-centent #zxzcDiv #jpdDiv .border4 {
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