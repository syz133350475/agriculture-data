<!--农产品今日价格-->
<template>
  <div class="todayprice">
    <h3>农产品今日价格</h3>
    <el-table :data="dataFrom" class="sfdlistTable" height="200">
      <el-table-column prop="dl" label="大类" width="80"></el-table-column>
      <el-table-column prop="id" label="序号" width="50"></el-table-column>
      <el-table-column prop="type" label="种类" width="80"></el-table-column>
      <!-- <el-table-column prop="pz" label="规格等级" width="150"></el-table-column> -->
      <el-table-column prop="dw" label="计量单位" width="120"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      dataFrom: [],
      spanArr: [],
      time: undefined
    };
  },
  created() {
    const tableData = window.chartData.ncp_Data;
    this.tableData = tableData;
  },
  mounted() {
    this.timeFn();
  },
  beforeDestroy() {
    // 销毁定时器
    clearInterval(this.time);
    this.time = undefined;
  },
  methods: {
    getSpanArr() {
      //    for (var i = 0; i < this.dataFrom.length; i++) {
      //   if (i === 0) {
      //     this.spanArr.push(1);
      //     this.pos = 0;
      //   } else {
      //     // 判断当前元素与上一个元素是否相同,因合并第一个所以[0]
      //     if (this.dataFrom.id === this.dataFrom[i - 1].id) {
      //       this.spanArr[this.pos] += 1;
      //       this.spanArr.push(0);
      //     } else {
      //       this.spanArr.push(1);
      //       this.pos = i;
      //     }
      //   }
      // }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArr[rowIndex];

        const _col = _row > 0 ? 1 : 0;

        return {
          rowspan: _row,

          colspan: _col
        };
      }
    },

    animateHandler() {
      this.dataFrom = [];
      const name = [];
      const data = [];
      for (var i = 0; i < 4; i++) {
        this.dataFrom.push(this.tableData[0]);
        this.tableData.push(this.tableData[0]);
        name[i] = this.dataFrom[i].type;
        data.push(this.dataFrom[i].date);
        this.tableData.shift();
      }

      this.$parent.$refs.historyPrice.chart.setOption({
        series: [
          {
            name: name[0],
            data: data[0]
          },
          {
            name: name[1],
            data: data[1]
          },
          {
            name: name[2],
            data: data[2]
          },
          {
            name: name[3],
            data: data[3]
          }
        ]
      });
    },

    timeFn() {
      const that = this;
      this.time = setInterval(() => {
        that.animateHandler();
      }, 3000);
    }
  }
};
</script>

<style scoped>
.todayprice /deep/ .el-table__body-wrapper::-webkit-scrollbar {
  width: 1px;
  height: 1px;
}
</style>
<style>
#ncpjgDiv .sfdlistTable {
  width: 96%;
  margin-left: 2%;
}
#ncpjgDiv .todayprice {
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
#ncpjgDiv .el-table--enable-row-hover .el-table__body {
  width: 100%;
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