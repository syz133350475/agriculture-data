<template>
  <div id="nyyDiv">
    <div class="title" style="height:5%">
      <h3>农业园信息</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div class="ny_name">
        <el-row>
          <el-col class="ny-image" :span="10">
            <el-image :src="src" :preview-src-list="srcList" :fit="fit" style="height:100%">
              <div slot="placeholder" class="image-slot">
                图片加载中
                <span class="dot">...</span>
              </div>
            </el-image>
          </el-col>
          <el-col :span="14">
            <h3 class="ny-centent-name">藤桥镇科技园</h3>
            <p>企业地址：浙江省温州市藤桥镇117号</p>
            <p>所有人：张三</p>
            <p>种（养）植面积：30亩</p>
            <p>种（养）作物：水稻、西瓜、葡萄、水稻、西瓜、葡萄、水稻、西瓜、葡萄</p>
          </el-col>
        </el-row>
        <h3 id="nyy-viedo-name">监控视频</h3>
        <el-row class="nyy-viedo-centent">
          <el-col class="video-content" :span="12">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
          </el-col>
          <el-col class="video-content" :span="12">
            <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
          </el-col>
        </el-row>
      </div>
       <jcyjHJJC />
    <jcyjSZZQ />
    </div>
  </div>
</template>

<script>
import jcyjHJJC from "./hjcj.vue";
import jcyjSZZQ from "./szzq.vue";
export default {
  data() {
    return {
      src:
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg", //图片,内容图片，可设置轮播
      fit: "scale-down", //图片自适应方式
      srcList: [
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
      ] //大图预览
    };
  },
  components:{
    jcyjHJJC, //环境监测
    jcyjSZZQ //生长周期
  }
};
</script>

<style>
.jcyj-centent #nyyDiv {
  height: 100%;
}
.jcyj-centent #nyyDiv #jpdDiv {
  height: 95%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
  display: flex;
    flex-direction: column;
}
.jcyj-centent #nyyDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #nyyDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #nyyDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #nyyDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jcyj-centent #nyyDiv .ny_name {
  width: 96%;
  margin: auto;
  margin-top: 2%;
  color: #fff;
  height: 23%;
}
.jcyj-centent #nyyDiv .ny_name p {
  font-size: 14px;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jcyj-centent #nyyDiv .ny-image {
  height: 100%;
  padding: 3%;
  padding-bottom: 0;
}
.jcyj-centent #nyyDiv .ny-image img {
  background-color: #000;
  height: 100%;
}
.jcyj-centent #nyyDiv .ny-centent-name {
  margin-left: 0 !important;
  margin-top: 5%;
  margin-bottom: 0.3em;
}
.jcyj-centent #nyyDiv .ny_name #nyy-viedo-name {
  margin-left: 3%;
  color: #72fffc;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 45px;
  font-size: 16px;
  font-weight: normal;
  margin-left: 3%;
}
.jcyj-centent #nyyDiv .video-content img
{
  height: 100%;
}
.jcyj-centent #nyyDiv .ny_name .nyy-viedo-centent
{
  height: 65%;
}
</style>