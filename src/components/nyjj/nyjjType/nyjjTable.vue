<template>
  <div>
    <el-table :data="tableData" border class="nyjjTable">
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="price" label="产量（吨）"></el-table-column>
      <el-table-column prop="tongbi" label="同比"></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      tableData: [
        {
          type: "种植业",
          price: "124.45",
          tongbi: "↓3.02%",
        },
        {
          type: "畜牧业",
          price: "124.2",
          tongbi: "↓3.02%",
        },
        {
          type: "渔业",
          price: "23.2",
          tongbi: "↓3.02%",
        },
        {
          type: "林业",
          price: "124.5",
          tongbi: "↓3.02%",
        }
      ]
    };
  },
};
</script>

<style>
#nyjj-centertDivMapDiv .nyjjTable {
  width: 92%;
}
#nyjj-centertDivMapDiv .nyjjTable th,
#nyjj-centertDivMapDiv .nyjjTable tr,
#nyjj-centertDivMapDiv .nyjjTable {
  background-color: rgba(14, 94, 83,.2);
  color: #d3e9bf;
  text-align: center;
}
#nyjj-centertDivMapDiv .nyjjTable th {
  color: #d3e9bf;
}
#nyjj-centertDivMapDiv .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(0, 126, 52);
}
#nyjj-centertDivMapDiv td,
#nyjj-centertDivMapDiv th.is-leaf {
  text-align: center
}
</style>