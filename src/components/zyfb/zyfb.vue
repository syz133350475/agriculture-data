<template>
  <div class="zyfb-centent">
    <nymap ref="map"/>
    <nyzy />
    <nyContent ref="nyContent"/>
    <historyButton />
  </div>
</template>
<script>
/* eslint-disable */
import nyzy from "./zyfbType/zyml.vue";
import nyContent from "./zyfbType/zyContent.vue";
import nymap from "./zyfbType/map.vue";
import historyButton from "./zyfbType/historyButton.vue";

export default {
  name: "zyfb",
  components: {
    nyzy, //左边资源目录
    nyContent, //右边弹框
    nymap, //地图
    historyButton //历史地图影像
  }
};
</script>

<style>
.zyfb-centent {
  width: 100%;
  height: 100%;
}
</style>
