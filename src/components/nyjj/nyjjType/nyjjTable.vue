<template>
  <div>
    <el-table :data="tableData" border class="nyjjTable">
      <el-table-column prop="type" label="类型" width="70%"></el-table-column>
      <el-table-column prop="price" label="产值（万元）"></el-table-column>
      <el-table-column prop="rate" label="同比"></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
import {mapState} from 'vuex'

export default {
  data() {
    return {
      tableData: []
    };
  },
  created() {
    // 数据加载
    const { nzwTable_Data } = window.chartData;

    const typeList = ["种植业", "畜牧业", "林业", "渔业"];

    const sObj = {};
    for (let k in nzwTable_Data) {
      for (let i in nzwTable_Data[k].price) {
        !sObj[k] && (sObj[k] = []);

        sObj[k].push({
          type: typeList[i],
          price: nzwTable_Data[k].price[i] || null,
          rate:
            nzwTable_Data[k].rate[i] != null
              ? nzwTable_Data[k].rate[i] >= 0
                ? `↑ ${(nzwTable_Data[k].rate[i] * 100).toFixed(2)} %`
                : `↓ ${(-nzwTable_Data[k].rate[i] * 100).toFixed(2)} %`
              : null
        });
      }
    }

    this.sObj = sObj;

    this.tableData = sObj["鹿城区"];
  },
  methods: {
    // 数据更新
    updateChart(name) {
      const that = this;
      this.tableData = this.sObj[name];
    }
  }
};
</script>

<style>
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