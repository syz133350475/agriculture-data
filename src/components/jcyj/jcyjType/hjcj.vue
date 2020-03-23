<template>
  <div class="hjjcDiv">
    <div class="hjjctitle" style="height:14%;padding: 14px;">
      <h3>环境监测</h3>
    </div>
    <div id="hjjc-jpdDiv">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in hjcj" :key="item">
          <div id="hjjc-centent">
            <ul>
              <li>
                <p>{{item.kqwd}}</p>
                <h3>{{item.wd}}</h3>
              </li>
              <li>
                <p>{{item.kqsd}}</p>
                <h3>{{item.sd}}</h3>
              </li>
              <li>
                <p>{{item.gzwd}}</p>
                <h3>{{item.gz}}</h3>
              </li>
              <li>
                <p>{{item.trsd}}</p>
                <h3>{{item.tr}}</h3>
              </li>
              <li>
                <p>{{item.trwd}}</p>
                <h3>{{item.tr1}}</h3>
              </li>
              <li>
                <p>{{item.eyht}}</p>
                <h3>{{item.nd}}</h3>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      hjcj:[{
        kqwd:"空气温度",
        wd:"14.1℃",
        kqsd:"空气湿度",
        sd:"10.1℃",
        gzwd:"光照温度",
        gz:"116800lux",
        trsd:"土壤湿度",
        tr:"5.1℃",
        trwd:"土壤温度",
        tr1:"50%PH",
        eyht:"二氧化碳浓度",
        nd:"0mm/h"
      }
      ]
    };
  }
};
</script>

<style>
.jcyj-centent .hjjcDiv {
  height: 22%;
}
.jcyj-centent .hjjcDiv #hjjc-jpdDiv {
  height: 69%;
  position: relative;
  top: 1%;
}
/* .jcyj-centent .hjjcDiv #hjjc-jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent .hjjcDiv #hjjc-jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent .hjjcDiv #hjjc-jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent .hjjcDiv #hjjc-jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
} */
 #hjjc-centent,
 #hjjc-centent ul {
  height: 100%;
}
 #hjjc-centent ul li {
  width: 30%;
  float: left;
  margin-right: 3%;
  text-align: center;
  height: 50%;
}
#hjjc-centent ul li p {
  color: #84ed86;
  margin-top: 0.3em;
  margin-bottom: 0.5em;
}
#hjjc-centent ul li h3 {
  line-height: 20px;
  color: #fff;
}

 .el-carousel__container {
  height: 163px;
}
.jcyj-centent .hjjcDiv #hjjc-jpdDiv .el-carousel__item:nth-child(2n) {
  /* background-color: #99a9bf; */
}

.jcyj-centent .hjjcDiv #hjjc-jpdDiv .el-carousel__item:nth-child(2n + 1) {
  /* background-color: #d3dce6; */
}
</style>