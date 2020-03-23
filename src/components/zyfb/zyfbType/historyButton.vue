<template>
  <div class="button">
    <ul>
      <li @click="addhistory">历史影像</li>
      <li>清空</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "historyButton",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  computed: {},
  methods: {
      addhistory(){
          this.$parent.map.addhistory();
      }
  }
};
</script>
 <style lang="less">
.button {
    display: inline-block;
    position: absolute;
    bottom: 5%;
    right: 24%;
  ul {
    li {
      height: 21px;
      list-style: none;
      float: left;
      background-color: #243968;
      border: 1px solid #05fff8;
      padding: 10px 10px;
      margin-left: 5px;
      cursor: pointer;
      overflow: hidden;
      color: #fff;
    }
  }
}
</style>