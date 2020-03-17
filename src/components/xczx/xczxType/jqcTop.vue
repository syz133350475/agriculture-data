<template>
  <div id="jqcDiv">
    <div class="title" style="height:17%">
      <h3>景区村榜</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <!-- 美丽乡村榜 -->
      <ul>
        <li v-for="i in 10" :key="i">
          <el-tag effect="dark" size="mini" :class="`list-item ${colorClass[i-1] || ''}`">NO:{{ i }}</el-tag>
          <p>永嘉县上日川村</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      colorClass: ["el-tag--danger", "el-tag--warning", "el-tag--success"] //列表颜色
    };
  }
};
</script>

<style>
.xczx-centent #jqcDiv {
  height: 34%;
}
.xczx-centent #jqcDiv #jpdDiv {
  height: 81%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.xczx-centent #jqcDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.xczx-centent #jqcDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.xczx-centent #jqcDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.xczx-centent #jqcDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.xczx-centent #jqcDiv #jpdDiv ul {
  width: 100%;
  height: 98%;
  overflow: hidden;
}
.xczx-centent #jqcDiv #jpdDiv ul li {
  width: 92%;
  margin-left: 4%;
  border-bottom: 1px solid #055d44;
  cursor: pointer;
}
.xczx-centent #jqcDiv #jpdDiv ul li :hover{
  color: #5cde69;
}
.xczx-centent #jqcDiv #jpdDiv ul li p {
  display: inline-block;
  margin-left: 4%;
  margin-bottom: 2%;
  margin-top: 2%;
  color: #e9ffd0;
}
</style>