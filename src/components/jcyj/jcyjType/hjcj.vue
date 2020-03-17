<template>
  <div id="hjjcDiv">
    <div class="title" style="height:29%">
      <h3>环境监测</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="hjjc-centent">
        <ul>
          <li>
            <p>空气温度</p>
            <h3>14.1℃</h3>
          </li>
          <li>
            <p>空气湿度</p>
            <h3>10.1℃</h3>
          </li>
          <li>
            <p>光照温度</p>
            <h3>116800lux</h3>
          </li>
          <li>
            <p>土壤湿度</p>
            <h3>5.1℃</h3>
          </li>
          <li>
            <p>土壤温度</p>
            <h3>50%PH</h3>
          </li>
          <li>
            <p>二氧化碳浓度</p>
            <h3>0mm/h</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jcyj-centent #hjjcDiv {
  height: 22%;
}
.jcyj-centent #hjjcDiv #jpdDiv {
  height: 69%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jcyj-centent #hjjcDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #hjjcDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #hjjcDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #hjjcDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jcyj-centent #hjjcDiv #jpdDiv #hjjc-centent,.jcyj-centent #hjjcDiv #jpdDiv #hjjc-centent ul 
{
  height: 100%;
}
.jcyj-centent #hjjcDiv #jpdDiv #hjjc-centent ul li {
  width: 30%;
  float: left;
  margin-right: 3%;
  text-align: center;
  height: 50%;
}
.jcyj-centent #hjjcDiv #jpdDiv #hjjc-centent ul li p {
  color: #84ed86;
  margin-top: .3em;
  margin-bottom: 0.5em;
}
.jcyj-centent #hjjcDiv #jpdDiv #hjjc-centent ul li h3 {
  line-height: 20px;
  color: #fff;
}
</style>