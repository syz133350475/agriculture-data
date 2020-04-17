<template>
  <div id="center_bottom">
    <el-row>
      <el-col :span="12">
              <div class="center_bottom_left">
      <div id="nycpl">
        <span class="title">农业产品链</span>
        <div class="nycpl_content">
          <div class="nycpl_item">
            <img src="../../../assets/img/nycpl_sc.png" alt />
            <span>温州瓯海红岩红岩</span>
            <span>生产商</span>
          </div>
          <div class="nycpl_next">
            <img src="../../../assets/img/next.png" alt />
            <span>物流</span>
          </div>
          <div class="nycpl_item">
            <img src="../../../assets/img/nycpl_jg.png" alt />
            <span>温州瓯海食品加工厂</span>
            <span>加工商</span>
          </div>
            <div class="nycpl_next">
            <img src="../../../assets/img/next.png" alt />
            <span>物流</span>
          </div>
          <div class="nycpl_item">
            <img src="../../../assets/img/nycpl_xs.png" alt />
            <span>温州沃尔玛超市欧洲城店</span>
            <span>销售商</span>
          </div>
        </div>
      </div>
    </div>

      </el-col>
      <el-col :span="12">
    <div class="center_bottom_right"></div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "centerBottom",
  data() {
    return {
      imgUrl: [
        "../../../assets/img/nycpl_sc.png",
        "../../../assets/img/nycpl_jg.png",
        "../../../assets/img/nycpl_xs.png"
      ]
    };
  }
};
</script>

<style>
#center_bottom {
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.16);
  opacity: 1;
}
/* .center_bottom_left {
  width: 60%;
}
.center_bottom_right {
  width: 40%;
} */

#nycpl .title{
    display: inline-block;
    box-sizing: border-box;
    line-height: 64px;
    font-size:24px;
font-family:PingFang SC;
font-weight:800;
padding-left: 28px;
/* padding: 28px 33px 28px 54px; */

}

.nycpl_content{
    position: relative;
}

.nycpl_item {
  display: inline-block;
  width: 28%;
  box-sizing: border-box;
  padding-left:6%;
    padding-bottom:4%;
  /* background-image: url(../../../assets/img/nycpl_sc.png); */
  /* background-size: 100%; */
}
.nycpl_item img {
  display: block;
  width: 100%;
}

.nycpl_item span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.nycpl_next {
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
}
.nycpl_next img {
  display: block;
  width: 80%;
}
.nycpl_next span {
  display: block;

}
</style>