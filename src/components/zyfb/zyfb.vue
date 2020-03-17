<template>
  <div class="zyfb-centent">
    <nymap />
    <nyzy />
    <nyContent />
  </div>
</template>
<script>
/* eslint-disable */
import nyzy from "./zyfbType/zyml.vue";
import nyContent from "./zyfbType/zyContent.vue";
import nymap from "./zyfbType/map.vue";
export default {
  name: "zyfb",
  components: {
    nyzy,
    nyContent,
    nymap
  }
};
</script>

<style>
.zyfb-centent {
  width: 100%;
  height: 100%;
}
</style>
