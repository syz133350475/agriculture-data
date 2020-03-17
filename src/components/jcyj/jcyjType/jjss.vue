<template>
  <div id="jjssDiv">
    <el-row>
      <el-col :span="6">
        <div id="centerleftDiv">
          <ul class="city">
            <li>
              <p>1.鹿城区</p>
              <h2>22369</h2>
            </li>
            <li>
              <p>2.瓯海区</p>
              <h2>22369</h2>
            </li>
            <li>
              <p>3.平阳区</p>
              <h2>22369</h2>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="12">
        <div id="centerCenterDiv">
          <div id="ss-number">
            <span>1</span>
            <span>3</span>
            <span>4</span>
            <span>6</span>
            <span>7</span>
            <span>1</span>
          </div>
          <div id="jcyj-name">
            <h1>温州市灾情经济损失</h1>
            <span>（万元）</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div id="centerrightDiv">
          <ul class="city">
            <li>
              <p>4.文成区</p>
              <h2>22369</h2>
            </li>
            <li>
              <p>5.永嘉区</p>
              <h2>22369</h2>
            </li>
            <li>
              <p>6.泰顺区</p>
              <h2>22369</h2>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jcyj-centent #jjssDiv {
  height: 28%;
}
.jcyj-centent #centerleftDiv {
  width: 100%;
  height: 98%;
  background-image: url(../../../assets/img/jm2.png);
  background-repeat: no-repeat;
  background-position: bottom;
}
.jcyj-centent #centerrightDiv {
  width: 100%;
  height: 98%;
  background-image: url(../../../assets/img/jm1.png);
  background-repeat: no-repeat;
  background-position: bottom;
}
.jcyj-centent #centerCenterDiv {
  height: 98%;
}
.jcyj-centent #centerCenterDiv #jcyj-name {
  height: 29%;
  background-image: url(../../../assets/img/c1.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: bottom;
  text-align: center;
}
.jcyj-centent #centerCenterDiv h1 {
  color: #59e019;
  background-image: -webkit-linear-gradient(bottom, #b6b6b6, #fff);
  -webkit-background-clip: text;
  text-align: center;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
.jcyj-centent #centerCenterDiv span {
  color: #fff;
}
.jcyj-centent #centerCenterDiv #ss-number {
  height: 71%;
  text-align: center;
  width: 100%;
  line-height: 14em;
}
.jcyj-centent #centerCenterDiv #ss-number span {
  background-image: -webkit-linear-gradient(bottom, #0e9848, #1dc478);
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 8px;
  margin-left: 10px;
  font-family: "digital";
  font-size: 56px;
}
.jcyj-centent #centerleftDiv .city {
  padding-left: 18%;
  padding-top: 6%;
}
.jcyj-centent #centerrightDiv .city {
  padding-right: 18%;
  padding-top: 6%;
}
.jcyj-centent #centerrightDiv .city li {
  margin-bottom: 1.1em;
}
.jcyj-centent #centerleftDiv .city p,
.jcyj-centent #centerrightDiv .city p {
  color: #fff;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
  text-align: left;
}
.jcyj-centent #centerleftDiv .city h2,
.jcyj-centent #centerrightDiv .city h2 {
  font-family: "digital";
  font-size: 27px;
  margin-top: 0.2em;
  color: #4cffc6;
  font-style: italic;
  font-weight: normal;
}
.jcyj-centent #centerrightDiv .city p,
.jcyj-centent #centerrightDiv .city h2 {
  text-align: right;
}
</style>