<template>
  <div id="ygncDiv">
    <div class="title" style="height:22%" @click="show = true">
      <h3>阳光农场</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div class="ygncCententDiv">
        <el-table :data="sunshine_farm" height="100%" class="sfdlistTable">
          <!-- <el-table-column prop="index" label="序号" width="50"></el-table-column> -->
          <!-- <el-table-column label="农场名称">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="top">
                <p>企业名称: {{ scope.row.name}}</p>
                <p>企业法人: {{ scope.row.representative }}</p>
                <p>企业简介: {{ scope.row.intro }}</p>
                <p>行业: {{ scope.row.industry }}</p>

                <div slot="reference">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>-->
          <el-table-column prop="name" label="农场名称" width="120"></el-table-column>
          <el-table-column prop="representative" label="企业法人"></el-table-column>
          <el-table-column prop="main_product" label="主要产品" width="120"></el-table-column>
        </el-table>
      </div>
      <popUp
        :visible="show"
        @changVisible="changVisible"
        :tableData="sunshine_farm"
        :field="field"
        :tableTitle="'阳光农场详细信息'"
        :tableWidth="tableWidth"
      />
    </div>
  </div>
</template>

<script>
import { sunshine_farm } from "../../../../public/data/new_data.js";
import popUp from "../../common/popUp";

/* eslint-disable */
export default {
  data() {
    return {
      field: [
        "企业名称",
        "企业法人",
        "企业地址",
        "企业简介",
        "产业类型",
        "联系方式",
        "产值",
        "产量",
        "年份",
        "主打产品",
        "地区",
        "图片",
        "视频",
        "经度",
        "维度"
      ],
      sunshine_farm,
      show: false,
      tableWidth: "56%"
    };
  },
  components: {
    popUp
  },
  methods: {
    changVisible(data) {
      this.show = data;
    }
  },
  created() {
    // 加载数据
    // const { ygnc_Data } = window.chartData;
    // this.tableData = ygnc_Data;
    // this.tableData = sunshine_farm;
  }
};
</script>

<style>
.jyjj-centent #ygncDiv {
  height: 96%;
  padding-right: 1.5%;
}

#ygncDiv .title {
  cursor: pointer;
}
.jyjj-centent #ygncDiv .ygncCententDiv {
  width: 96%;
  margin-left: 2%;
  height: 94%;
  overflow: hidden;
}

.ygncCententDiv .el-tag {
  color: #fff;
  border-style: none;
  background: none;
}
.jyjj-centent #ygncDiv #jpdDiv {
  height: 76%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jyjj-centent #ygncDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jyjj-centent #ygncDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jyjj-centent #ygncDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jyjj-centent #ygncDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
#ygncDiv .sfdlistTable {
  width: 96%;
  margin-left: 2%;
}
#ygncDiv .todayprice {
  height: 50%;
}
#ygncDiv .todayprice h3 {
  color: #a0ffe7;
  font-size: 16px;
  font-weight: normal;
  margin-left: 2%;
}
#ygncDiv .sfdlistTable th,
#ygncDiv .sfdlistTable tr,
#ygncDiv .sfdlistTable {
  background-color: transparent;
  color: #e9ffd0;
  border-color: #04a58e;
}
#ygncDiv .sfdlistTable th {
  color: #fff;
}
#ygncDiv .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: rgb(0, 126, 52);
  cursor: pointer;
}
#ygncDiv td,
#ygncDiv th.is-leaf {
  border-bottom: 1px solid #055d44;
}
#ygncDiv td,
#ygncDiv th {
  padding: 6px 0;
}
#ygncDiv .el-table::before {
  height: 0px;
}
</style>