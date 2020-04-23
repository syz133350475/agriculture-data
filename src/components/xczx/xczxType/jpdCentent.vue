<template>
  <div style="height: 100%;">
    <div class="title">
      <h3>精品带展示</h3>
    </div>
    <div id="jpdDiv">
      <!-- 边框开始 -->
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <!-- 边框结束 -->
      <!-- 名称 -->
      <h3 class="s-name">建设情况</h3>
      <!-- 地址 -->
      <div class="xczx-add">
        <ul>
          <li v-for="(item, index) in overviewList" :key="index">
            <div :style="{backgroundColor:item.c,color:item.f}">
              <div :style="{borderRight:`1px ${item.f} dashed`}">
                <i>{{item.count}}</i>
                <i>{{item.unit}}</i>
              </div>
              <div>
                <span>{{item.time}}</span>
                <span>{{item.text}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <el-divider class="xczx-border"></el-divider>
      <!-- 名称 -->
      <h3 class="s-name">投资及效益</h3>
      <div class="xczx-add">
        <div class="item">
          <div>
            <header>实现投资-2019年</header>
            <div class="item_second">
              <div class="blue">70.63亿</div>
              <div>
                <span>同比增长</span>
                <span>+46.09%</span>
              </div>
            </div>
          </div>
          <div>
            <header>产出效益-2019年</header>
            <div class="item_second">
              <div class="green">- 万</div>
              <div>
                <span>同比增长</span>
                <span>- %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 名称 -->
      <h3 class="s-name">项目类型占比</h3>
      <div class="xczx-add_zb">
        <chart :option="projectOption" :echartId="projectOption['name']+new Date()"></chart>
      </div>
      <!-- 名称 -->
      <h3 class="s-name">农旅喜好占比</h3>
      <div class="xczx-add_nl">
        <div>
        <ul class="list">
          <li v-for="(item,index) in radarData" :key="index">
            <span>{{item.name}}</span>
            <span>{{item.count}}个</span>
            <span>{{item.value}}%</span>
          </li>
        </ul>
        </div>
        <chart :option="radarOption" :echartId="radarOption['name']+new Date()"></chart>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { overviewList } from "./options/overview.js";
import { projectOption } from "./options/pie.js";
import { radarData, radarOption } from "./options/radar.js";
import chart from "./common/chart.vue";

export default {
  data() {
    return {
      mapSrc: require("../../../assets/img/map/s_map.jpg"), //图片
      mapFit: "cover", //图片自适应方式
      mapSrcList: [
        // require("../../../assets/img/map/b_map1.jpg"),
        // require("../../../assets/img/map/b_map2.jpg")
      ], //大图预览
      overviewList,
      projectOption,
      radarData,
      radarOption
    };
  },
  components: {
    chart
  }
};
</script>

<style>
.xczx-centent #LeftDiv #jpdDiv {
  height: 92%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
  /* overflow: hidden;
  overflow-y:auto; */
}
/* .xczx-centent #LeftDiv #jpdDiv::-webkit-scrollbar {display:none} */

.xczx-centent #LeftDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.xczx-centent #LeftDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.xczx-centent #LeftDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.xczx-centent #LeftDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.xczx-centent #LeftDiv #jpdDiv .ny_name {
  width: 96%;
  height: 21%;
  background-color: rgba(0, 126, 52, 0.6);
  border-radius: 17px;
  margin: auto;
  margin-top: 2%;
  color: #fff;
}
.xczx-centent #LeftDiv #jpdDiv .ny_name p {
  font-size: 14px;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xczx-centent #LeftDiv #jpdDiv .s-name {
  font-size: 16px;
  font-weight: normal;
  margin-left: 2%;
}
.xczx-centent #LeftDiv #jpdDiv .xczx-add {
  color: #e9ffd0;
  margin: 0;
  padding: 0 2%;
}

.xczx-add li {
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
  padding: 4px 2px;
}

.xczx-add li div:first-child {
  display: flex;
  box-sizing: border-box;
  padding: 4px 5%;
  align-items: center;
}
.xczx-add li div:nth-child(2) {
  display: flex;
  box-sizing: border-box;
  padding: 4px 10%;
  align-items: center;
  flex-direction: column;
}

.xczx-add .item {
  display: flex;
}

.xczx-add .item_second {
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 50%;
  padding: 4px 2%;
}

.xczx-add .blue {
  color: rgba(37, 151, 248, 1);
}
.xczx-add .green {
  color: rgba(248, 118, 37, 1);
}

.xczx-add_zb {
  height: 26%;
  display: flex;
}


.xczx-add_nl {
  height: 20%;
  display: flex;
  position: relative;
  box-sizing: border-box;
  margin-bottom: 20px;
}
/* xczx-add_nl div{
  width: 50%;
  box-sizing: border-box;
} */

.xczx-add_nl .list {
        position: absolute;
        top: 10px;
        left: 4px;
        list-style: none;}
.xczx-add_nl .list li {
          height: 30px;
          line-height: 30px;
          }
.xczx-add_nl .list li span {
            font-family: Helvetica Neue;
            color: #ffffff;
            font-size: 12px;
            padding-left:10px ;
            margin-right: 10px;
          }
.xczx-add_nl .list li span:last-child {
            color: #1a934a;
          }
 


.xczx-centent #LeftDiv #jpdDiv .xczx-border {
  margin: 0;
  /* padding: 0 5%; */
  width: 96%;
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  background-color: #09dc51;
}
.xczx-centent #LeftDiv #jpdDiv .xczx-map {
  width: 96%;
  height: 55%;
  padding-left: 2%;
  padding-top: 3%;
}
.xczx-centent #LeftDiv #jpdDiv .el-card {
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #09dc51;
  width: 96%;
  margin-left: 2%;
}
.xczx-centent #LeftDiv #jpdDiv .el-card .el-card__header {
  border-bottom: 1px solid #09dc51;
}
.xczx-centent #LeftDiv #jpdDiv .el-card .el-card__header span {
  color: #fff;
}
.xczx-centent #LeftDiv #jpdDiv .el-card .text {
  color: #e9ffd0;
}
.xczx-centent #LeftDiv #jpdDiv #scrollDiv {
  width: 96%;
  height: 93%;
  overflow: hidden;
  overflow-y: auto;
  margin-left: 2%;
  margin-top: 2%;
}
</style>