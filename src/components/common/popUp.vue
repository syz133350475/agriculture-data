<template>
  <div class="pop_common">
    <!-- <el-table :data="tableData" border class="nyjjTable">
      <el-table-column prop="type" label="类型" width="70%"></el-table-column>
      <el-table-column prop="price" label="产值（万元）"></el-table-column>
      <el-table-column prop="rate" label="同比"></el-table-column>a
      fafafs
    </el-table>-->
          <!-- <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div> -->

    <el-dialog
      :title="tableTitle"
      :visible.sync="dialogVisible"
      :width="tableWidth"
      :before-close="handleClose"
    >
      <el-table :data="tableData" border class="sfdlistTable">
        <el-table-column
          v-for="(item,index) in tableDataKey"
          :key="index"
          :prop="item"
          :label="field[index]"
          width="100px"
        ></el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="setState()">取 消</el-button> -->
        <el-button type="success" @click="setState()">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import { mapState } from "vuex";

export default {
  props: {
    tableData: Array,
    field: Array,
    visible: Boolean,
    tableTitle:String,
    tableWidth:String

  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  mounted() {

  },
  watch: {
    visible(n, o) {
      this.dialogVisible = this.visible;
    }
  },
  computed: {
    tableDataKey() {
      if(this.tableData){
      return Object.keys(this.tableData[0]);

      }
      // console.log("数据",this.tableData)
    }
  },
  // created() {
  // this.dialogVisible=  this.visible
  // },
  methods: {
    handleClose(done) {
      const that = this;
      this.$confirm("确认关闭？")
        .then(_ => {
          // done();
          that.setState();
        })
        .catch(_ => {});
    },
    setState() {
      this.dialogVisible = false;
      this.$emit("changVisible", false);
    },
    // 数据更新
    updateTable() {}
  }
};
</script>

<style>

.pop_common .el-dialog__title{
  color:  #72fffc;
  font-weight: bold;
  line-height: 45px;
}

.pop_common .el-button{
  background-color: rgba(53, 201, 115, 0.3);

}

 .pop_common .el-dialog {
  height: 76%;
  background-color: rgba(53, 201, 115, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
 .pop_common .el-dialog__body{
  background-color: rgba(53, 201, 115, 0.3);

}


.pop_common {
  /* border: 1px solid #24ff78 !important; */
border-radius: 22px !important;
position: relative !important;
background-color: rgba(0, 126, 52, 0.3) !important;
}

.pop_common .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.pop_common .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.pop_common .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.pop_common .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}

.pop_common .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(5, 214, 92);
  cursor: pointer;
}
.pop_common td,
.pop_common th.is-leaf {
  border-bottom: 1px solid #055d44;
}


.pop_common .sfdlistTable th,
.pop_common .sfdlistTable tr,
.pop_common .sfdlistTable {
  background-color: transparent;
  color: #e9ffd0;
  border-color: #04a58e;
}
#ygncDiv .sfdlistTable th {
  color: #fff;
}

.pop_common .el-table__body-wrapper{
  height: 400px !important;
  overflow: auto;
}
::-webkit-scrollbar {/*隐藏滚轮*/
   display: none;
}

.pop_common .el-dialog__header{
padding: 30px 20px 10px;
}
#nyjj-centertDivMapDiv .nyjjTable {
  width: 92%;
}
#nyjj-centertDivMapDiv .nyjjTable th,
#nyjj-centertDivMapDiv .nyjjTable tr,
#nyjj-centertDivMapDiv .nyjjTable {
  background-color: rgba(14, 94, 83, 0.2);
  color: #d3e9bf;
  text-align: center;
}
#nyjj-centertDivMapDiv .nyjjTable th {
  color: #d3e9bf;
}
#nyjj-centertDivMapDiv
  .el-table--enable-row-hover
  .el-table__body
  tr:hover
  > td {
  background-color: rgb(0, 126, 52);
}
#nyjj-centertDivMapDiv td,
#nyjj-centertDivMapDiv th.is-leaf {
  text-align: center;
}
</style>