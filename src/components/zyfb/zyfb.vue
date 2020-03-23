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
    nyzy,
    nyContent,
    nymap,
    historyButton
  }
};
</script>

<style>
.zyfb-centent {
  width: 100%;
  height: 100%;
}
</style>
