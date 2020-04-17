
<template>
  <!-- 目录树 -->
  <div id="left-menu" :style="{left:`${offsetLeft}%`}">
    <!-- 标题 -->
    <div id="left-menu-name">
      <h3>资源目录</h3>
    </div>
    <div id="left-menu-Div">
      <el-tree
        :data="treedata"
        show-checkbox
        node-key="treeid"
        default-expand-all
        ref="tree"
        @check-change="handleCheckChange"
      >
        <span class="custom-tree-node" slot-scope="{ node}">
          <span>{{ node.label }}</span>
        </span>
      </el-tree>
    </div>
    <!-- 缩放按钮 -->
    <div id="sf-btn" @click="LeftClick"></div>
  </div>
</template>

<script>
/* eslint-disable */
import {treedata} from "./tree.js";
export default {
  data() {
    return {
      offsetLeft: 0, //默认淡入淡出动画,
      sever: "http://192.168.20.53:6080",
      treedata
    };
  },
  methods: {
    LeftClick: function() {
      //图标点击事件
      this.offsetLeft = this.offsetLeft == 0 ? -15 : 0;
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log("agaga",data, checked, indeterminate)
      const arr = ["耕地","园地","林地","水域"]
      //全选中
      if (!indeterminate) {
        this.$parent.$refs.map.isaddLayer(data, checked);
      }
      //选中并存在arr所述的字符串
      if(checked && ~arr.includes(data.label)!=-1 ){
        this.$parent.$refs.nyContent.$refs.contentDiv.isShow = true;
        this.$parent.$refs.nyContent.$refs.contentDiv.updatedCharts(data.label)
        this.$parent.$refs.nyContent.isShow = false;
        //选中并不存在
      }else if(checked && ~arr.includes(data.label)==-1 &&this.$parent.$refs.nyContent.$refs.contentDiv.isShow){
        this.$parent.$refs.nyContent.$refs.contentDiv.isShow = false;
      }

    }
  },
  computed: {
    iconstyle: function() {
      //图标动态样式
      let arr = new Array();
      arr.push("left(" + this.offsetLeft + "%) ");
      return arr.join("");
    }
  }
};
</script>

<style>
@import url("./zyml.css");
</style>