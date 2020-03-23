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
      <h3 class="s-name">山水雁楠精品带</h3>
      <!-- 地址 -->
      <p class="xczx-add">地址：起点为永嘉县岩坦镇源头村，终点为乐清市大荆镇下山头村。途径永嘉岩坦、岩头、鹤盛和乐清芙蓉、雁荡等6个镇。</p>
      <el-divider class="xczx-border"></el-divider>
      <!-- 简介 -->
      <p class="xczx-add">简介：国内著名自驾旅游胜地，风景秀丽乡村田园、公益性民宿群和山水诗歌旅游目的地。</p>
      <!-- 缩略图 -->
      <el-image :src="mapSrc" :preview-src-list="mapSrcList" :fit="mapFit" class="xczx-map">
        <div slot="placeholder" class="image-slot">
          图片加载中
          <span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <div class="title" style="margin-top: 4%;">
      <h3>项目建设情况</h3>
    </div>
    <div id="jpdDiv" style="height:35%; border-radius: 22px 0px 0px 22px;">
      <!-- 边框开始 -->
      <div class="border1"></div>
      <!-- <div class="border2"></div> -->
      <div class="border3"></div>
      <!-- <div class="border4"></div> -->
      <!-- 边框结束 -->
      <!-- 内部移动 -->
      <div id="scrollDiv">
        <!-- 项目进度卡片 -->
        <el-card class="box-card" v-for="o in 4" :key="o">
          <div slot="header" class="clearfix">
            <span>{{o}}.皮划艇漂流</span>
            <el-progress
              style="float: right;width:35%"
              :text-inside="true"
              :stroke-width="20"
              :percentage="70"
            ></el-progress>
            <span style="float: right">项目进度：</span>
          </div>
          <div
            class="text item"
          >划艇、皮艇分两大类:速度赛和急流回转赛。速度赛在静水域进行,而急流回转赛在动水域进行。 具体小项如下 12个静水项目 男子9项静水项目:500米单人皮艇、500米双人皮艇、1000米单人皮艇、1000米双人皮艇、1000米四人皮艇;500米单人划艇、500米双人划艇、1000米单人划艇和1000米双人划艇;女子3项静水项目:500米单人皮艇、500米双人皮艇。 四个急流回转赛项目 男子单人皮艇急流回转赛、男子单人划艇急流回转赛、男子双人划艇急流回转赛和女子单人皮艇急流回转赛。选手在动水域要越过设有25个障碍门的水道。 获得包括罚时在内的积累时间最低的选手将成为获胜者。选手每接触障碍门一次,就要被罚时两秒。漏穿障碍门是最糟糕的犯规,每次漏穿要被罚时50秒。 静水项目赛制 比赛在静水中进行,各路选手必须严格在自己的赛道内行进。</div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      mapSrc: require("../../../assets/img/map/s_map.jpg"), //图片
      mapFit: "cover", //图片自适应方式
      mapSrcList: [
        // require("../../../assets/img/map/b_map1.jpg"),
        // require("../../../assets/img/map/b_map2.jpg")
      ] //大图预览
    };
  }
};
</script>

<style>
.xczx-centent #LeftDiv #jpdDiv {
  height: 50%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
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