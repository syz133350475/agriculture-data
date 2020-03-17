<template>
  <div id="sfdDiv">
    <h3>乡村振兴示范带建设</h3>
    <el-table :data="tableData" height="180" style="width: 100%" class="sfdlistTable">
      <el-table-column prop="date" label="建成时间" width="95px"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="address" label="区域" width="65px"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {date: "2018-2019",name: "岩坦南溪古韵示范带",address: "永嘉县"},
        {date: "2018-2019",name: "鹤盛山水诗歌示范带",address: "永嘉县"},
        {date: "2018-2019",name: "岩头红军小镇示范带",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "岩坦南溪古韵示范带",address: "永嘉县"},
        {date: "2018-2019",name: "鹤盛山水诗歌示范带",address: "永嘉县"},
        {date: "2018-2019",name: "岩头红军小镇示范带",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
        {date: "2018-2019",name: "大若岩陶公养生福地示范类",address: "永嘉县"},
      ]
    };
  }
};
</script>

<style>
/* #zxzcDiv .sfdlistTable{
    background-color: transparent;
} */
#zxzcDiv #sfdDiv {
  width: 98%;
}
#zxzcDiv .sfdlistTable th,
#zxzcDiv .sfdlistTable tr,
#zxzcDiv .sfdlistTable {
  background-color: transparent;
  color: #e9ffd0;
  border-color: #04a58e;
}
#zxzcDiv .sfdlistTable th {
  color: #fff;
}
#zxzcDiv .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(0, 126, 52);
  cursor: pointer;
}
#zxzcDiv td,
#zxzcDiv th.is-leaf {
  border-bottom: 1px solid #055d44;
}
#zxzcDiv td,
#zxzcDiv th {
  padding: 3px 0;
}
#zxzcDiv .el-table::before {
  height: 0px;
}
#zxzcDiv #sfdDiv h3 {
  color: #a0ffe7;
  font-size: 16px;
  font-weight: normal;
  margin-left: 2%;
}
</style>