
<template>
    <!-- 目录树 -->
    <div id="left-menu" :style="{left:`${offsetLeft}%`}">
        <!-- 标题 -->
        <div id="left-menu-name">
            <h3 >资源目录</h3>
        </div>
        <div id="left-menu-Div">
            <el-tree :data="treedata" show-checkbox node-key="treeid" default-expand-all >
                <span class="custom-tree-node" slot-scope="{ node}">
                <span>{{ node.label }}</span>
                </span>
            </el-tree>
        </div>
        <!-- 缩放按钮 -->
        <div id="sf-btn" @click='LeftClick'></div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data() {
      return {
      	offsetLeft:0,//默认淡入淡出动画
        treedata: [{
        id: 1,
        label: '农业主体分类',
        children: [{
          id: 4,
          label: '农业龙头企业'
        }, {
          id: 5,
          label: '农民专业合作社'
        }, {
          id: 6,
          label: '家庭农场'
        }, {
          id: 7,
          label: '规模户'
        }, {
          id: 8,
          label: '其他'
        }]
      }, {
        id: 2,
        label: '农业旅游',
        children: [{
          id: 9,
          label: '民宿'
        }, {
          id: 10,
          label: '农家乐'
        }, {
          id: 11,
          label: '农业园'
        }, {
          id: 12,
          label: '乡村景点'
        }]
      }, {
        id: 3,
        label: '农业区划',
        children: [{
          id: 13,
          label: '种植区划'
        }, {
          id: 14,
          label: '畜牧区划'
        }, {
          id: 15,
          label: '林业区划'
        }, {
          id: 16,
          label: '渔业区划'
        }]
      }]
      };
    },
	methods:{
	  LeftClick:function(){//图标点击事件
	     this.offsetLeft= this.offsetLeft==0 ? -15 : 0;
	  },
	},
	computed:{
	  iconstyle:function(){//图标动态样式
	   let arr = new Array();
	   arr.push('left('+this.offsetLeft+'%) ');
	   return arr.join("");
	  }
	},
  }
</script>

<style>
@import url("./zyml.css");
</style>