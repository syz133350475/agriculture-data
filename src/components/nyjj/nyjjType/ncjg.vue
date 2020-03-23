<template>
  <div id="ncpjgDiv">
    <div class="title" style="height:9%">
      <h3>农产品价格</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <todayprice ref="todayprice" />
      <historyPrice ref="historyPrice" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import todayprice from "./ncjg/todayprice.vue";
import historyPrice from "./ncjg/historyPrice.vue";

export default {
  name: "ncjg", //农产品价格
  components: {
    todayprice, //今日价格
    historyPrice //历史价格
  },
  props: {
    msg: String
  }
};
</script>

<style>
.jyjj-centent #ncpjgDiv {
  height: 65%;
}
.jyjj-centent #ncpjgDiv #jpdDiv {
  height: 89%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #ncpjgDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #ncpjgDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #ncpjgDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #ncpjgDiv #jpdDiv .border4 {
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