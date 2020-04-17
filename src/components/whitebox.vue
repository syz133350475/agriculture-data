<template>
  <div class="hidden">
    <div class="whitebox" :style="{height: boxHeight}" ref="whitebox">
      <div class="type_circle"></div>
      <div class="echart_title" v-if="options">
        <div class="echart_title_left">{{echartTitle}}</div>
        <div class="echart_title_right" v-if="unit">{{unit}}</div>
      </div>
      <div class="table_title" v-if="tableData">{{tableTitle}}</div>
      <!-- !将改回来  <div class="table_title" v-if="tableData">{{tableTitle}}</div> -->

      <div class="switch">
        <ul>
          <li v-for="(item,index) in switchtab" :key="index">{{item}}</li>
        </ul>
      </div>
      <div :id="echartsId" class="echartData" v-if="options" ref="echartsRef"></div>
      <div class="tableData" v-if="tableData">
        <el-table :data="tableData" style="width: 100%">
          <!-- tableKey -->
          <el-table-column
            v-for="(item,index) in tableKey"
            :key="index"
            :prop="item"
            :label="tableLabel[index]"
            width="30%"
          ></el-table-column>

          <!-- <el-table-column prop="date" label="排名" width="60"></el-table-column>
          <el-table-column prop="name" label="企业名称" width="180"></el-table-column>
          <el-table-column prop="address" label="信用等级"></el-table-column>-->
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
// 复用

// 标题 要变 标题设为两种 1为图表标题 带单位 2为表格标题  ok

// 输入的组件要变 1图表 options  有切换功能 默认不显示切换按钮 传入多组options ok
// 	        2表格 隐藏label的选项
// 		 label的个数 label的名字

// 都变成border-box
// 宽度 左边400 右边423 宽度输入值 ok

// 高度 不一定 输入值  ok

// 添加slot 随时添加新的模块
export default {
  props: {
    boxHeight: {
      type: String,
      required: false
    },
    echartsId: {
      //图表id选择器 如果有图表必须 没图表不是
      type: String,
      required: false
    },
    echartTitle: {
      //图表标题
      type: String,
      required: false
    },
    unit: {
      //图表单位
      type: String,
      required: false
    },
    tableTitle: {
      //表格标题
      type: String,
      required: false
    },
    switchtab: {
      //切换菜单
      type: Array,
      required: false
    },
    options: {
      //图表数据
      type: Object,
      required: false
    },
    tableData: {
      //表格数据
      type: Array,
      required: false
    },
    tableLabel: {
      //表格的列label名
      type: Array,
      required: false
    }
  },
  data() {
    return {
      tableKey: []
    };
  },
  mounted() {
    // const boxHeight = this.$refs.whitebox.style.height
    // const hightNum = Number.parseInt(boxHeight)/100
    // const gg =document.getElementById("cyfz-LeftDiv")
    // const clientHeight= Math.floor(gg.clientHeight*hightNum*0.8)
    //   this.$refs.echartsRef.clientHeight = clientHeight

    this.initEcharts();
    this.getKeyByTable();
  },
  methods: {
    //获取表格数据key
    getKeyByTable() {
      if (this.tableData) {
        const data = this.tableData;
        // Object.keys(data[0])
        // console.log( "表格数据",  Object.keys(data[0]))
        this.tableKey = Object.keys(data[0]);
      }
      return;
    },

    //初始化图表
    initEcharts() {
      const that = this;
      if (that.options) {
        // console.log(that.options);
        // 给echart高度百分比赋予值
        const boxHeight = this.$refs.whitebox.style.height;
        const hightNum = Number.parseInt(boxHeight) / 100;
        const gg = document.getElementById("cyfz-LeftDiv");
        // console.log(gg.clientHeight)
        const clientHeight = Math.floor(gg.clientHeight * hightNum * 0.8);
        console.log(clientHeight);
        this.$refs.echartsRef.style.height = clientHeight + "px";

        const name = that.echartsId;
        that.chart = that.$echarts.init(document.getElementById(name));
        that.chart.setOption(this.options);
        console.log("this.$refs", this.$refs);
        console.log("this.$refs.echartsRef", this.$refs.echartsRef);
      }
      return;
    }
  }
};
</script>

<style>
.hidden {
  box-sizing: border-box;
  overflow: hidden;
  width: 94%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 17px;
  margin: 10px 20px;
}
.whitebox {
  width: 104%;
  /* overflow-y: scroll; */
}
.type_circle {
  margin: 0 18px;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background: #34e340;
  display: inline-block;
}

.echart_title {
  display: inline-block;
  padding: 20px 0;
}

.echart_title_left {
  display: inline-block;
  height: 33px;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 33px;
}

.echart_title_right {
  display: inline-block;
  margin-left: 22px;
  height: 20px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 20px;
}

.table_title {
  display: inline-block;
  height: 33px;
  padding: 20px 0;
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 33px;
}

.switch {
  margin-left: 10px;
  display: inline-block;
}

.switch ul li {
  display: inline-block;
  border: 1px solid blanchedalmond;
  padding: 5px 10px;
}

.echartData {
  width: 100%;
  height: 100%;
}
.tableData {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}

.tableData .el-table__body tr,
.el-table__body td {
  padding: 0 !important;
  height: 40px;
}

.tableData .el-table__header-wrapper .el-table__header {
  width: 92%;
}

.tableData .el-table__body-wrapper .el-table__body {
  width: 92% !important;
}

.tableData .el-table__header col {
  width: 128px;
}
</style>