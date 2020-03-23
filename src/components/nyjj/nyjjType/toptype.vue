<template>
  <div id="topFour">
    <el-row>
      <el-col :span="6">
        <div class="topDiv">
          <p>种植业产值</p>
          <h1>{{ zzy }}</h1>
          <span>万元</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="topDiv">
          <p>畜牧业产值</p>
          <h1>{{ xmy }}</h1>
          <span>万元</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="topDiv">
          <p>林业产值</p>
          <h1>{{ ly }}</h1>
          <span>万元</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="topDiv">
          <p>渔业产值</p>
          <h1>{{ yy }}</h1>
          <span>万元</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    const { topData } = window.chartData;
    const { zzy, xmy, ly, yy } = topData;
    this.zzy = zzy;
    this.xmy = xmy;
    this.ly = ly;
    this.yy = yy;
  }
};
</script>

<style>
.jyjj-centent #topFour {
  height: 10%;
}
.jyjj-centent #topFour .topDiv {
  text-align: center;
  height: 100%;
  background-image: url(../../../assets/img/top_bg.png);
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
}
.jyjj-centent #topFour .topDiv p {
  margin: 0;
  padding-top: 1em;
  padding-bottom: 0.3em;
  color: #e9ffd0;
}
.jyjj-centent #topFour .topDiv h1 {
  display: inline;
  padding-bottom: 0.4em;
  color: #fff;
  font-family: "digital";
  font-weight: normal;
  margin-right: 5px;
}
.jyjj-centent #topFour .topDiv span {
  color: #fff;
}
</style>