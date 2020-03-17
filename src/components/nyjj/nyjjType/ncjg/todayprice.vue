<!--农产品今日价格-->
<template>
  <div class="todayprice">
    <h3>农产品今日价格</h3>
    <el-table :data="tableData" class="sfdlistTable">
      <el-table-column prop="type" label="品种" width="90"></el-table-column>
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column prop="tongbi" label="同比" width="90"></el-table-column>
      <el-table-column prop="huanbi" label="环比"></el-table-column>
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
          type: "猪肉",
          price: "28.00元/斤",
          tongbi: "↓3.02%",
          huanbi: "↓3.02%"
        },
        {
          type: "猪肉",
          price: "28.00元/斤",
          tongbi: "↓3.02%",
          huanbi: "↓3.02%"
        },
        {
          type: "牛肉",
          price: "28.00元/斤",
          tongbi: "↓3.02%",
          huanbi: "↓3.02%"
        },
        {
          type: "牛肉",
          price: "28.00元/斤",
          tongbi: "↓3.02%",
          huanbi: "↓3.02%"
        }
      ]
    };
  },
  // mounted() {
  //   this.fetchData();
  // },
  // methods: {
  //   fetchData() {
  //     this.$axios
  //       .post("http://www.wzszhny.com/b2b_loadData.do", {
  //         big_class_name: "冻品类",
  //         PageSize: "9"
  //       })
  //       .then(function(response) {
  //         console.log(response);
  //       });
  //   }
  // }
};
</script>

<style>
#ncpjgDiv .sfdlistTable {
  width: 96%;
  margin-left: 2%
}
#ncpjgDiv .todayprice
{
  height: 50%;
}
#ncpjgDiv .todayprice h3 {
  color: #a0ffe7;
  font-size: 16px;
  font-weight: normal;
  margin-left: 2%;
}
#ncpjgDiv .sfdlistTable th,
#ncpjgDiv .sfdlistTable tr,
#ncpjgDiv .sfdlistTable {
  background-color: transparent;
  color: #e9ffd0;
  border-color: #04a58e;
}
#ncpjgDiv .sfdlistTable th {
  color: #fff;
}
#ncpjgDiv .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(0, 126, 52);
  cursor: pointer;
}
#ncpjgDiv td,
#ncpjgDiv th.is-leaf {
  border-bottom: 1px solid #055d44;
}
#ncpjgDiv td,
#ncpjgDiv th {
  padding: 8px 0;
}
#ncpjgDiv .el-table::before {
  height: 0px;
}
/* h4 {
  color: rgb(157, 251, 227);
padding-left: 1em;
}
.el-table {
  width: 100%;
  padding:0 1em;
  color: #fff;
}
.el-table thead{
  color: #fff;
}
.el-table, .el-table__expanded-cell{
  background-color: transparent;
}
.el-table td, .el-table th.is-leaf{
  border-bottom: 1px solid rgba(41, 151, 115, 1);
}
.todayprice.el-table th, .el-table tr{
  background-color:transparent;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color:rgb(157, 251, 227);
}
.todayprice.el-table td, .el-table th.is-leaf{
  background-color: rgba(41, 151, 115, 1);
  border:1px solid rgba(41, 151, 115, 1);
} */
</style>