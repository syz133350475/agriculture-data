<template>
  <div id="JimgDiv">
    <!-- 上 -->
    <div class="zqTextDiv" style="position: absolute;left: 42%;top: 0%;">
      <p>
        发生次数（次）：
        <span>245</span>
      </p>
      <p>
        经济损失（万元）:
        <span>255.34</span>
      </p>
      <p>
        灾情占比（%）：
        <span>20</span>
      </p>
      <h2 style="top: 108%;">气象灾害</h2>
    </div>
    <!-- 左边 -->
    <div class="zqTextDiv" style="position: absolute;left: 15%;top: 19%;">
      <p>
        发生次数（次）：
        <span>245</span>
      </p>
      <p>
        经济损失（万元）:
        <span>255.34</span>
      </p>
      <p>
        灾情占比（%）：
        <span>20</span>
      </p>
      <h2 style="top: 108%;">地质灾害</h2>
    </div>
    <!-- 右边 -->
    <div class="zqTextDiv" style="position: absolute;right: 11%;top: 19%;">
      <p>
        发生次数（次）：
        <span>245</span>
      </p>
      <p>
        经济损失（万元）:
        <span>255.34</span>
      </p>
      <p>
        灾情占比（%）：
        <span>20</span>
      </p>
      <h2 style="top: 108%;">海洋灾害</h2>
    </div>
    <!-- 左下 -->
    <div class="zqTextDiv" style="position: absolute;left: 24%;bottom: 2%;">
      <p>
        发生次数（次）：
        <span>245</span>
      </p>
      <p>
        经济损失（万元）:
        <span>255.34</span>
      </p>
      <p>
        灾情占比（%）：
        <span>20</span>
      </p>
      <h2 style="top: -61%;">病虫灾害</h2>
    </div>
    <!-- 右下 -->
    <div class="zqTextDiv" style="position: absolute;right: 22%;bottom: 2%;">
      <p>
        发生次数（次）：
        <span>245</span>
      </p>
      <p>
        经济损失（万元）:
        <span>255.34</span>
      </p>
      <p>
        灾情占比（%）：
        <span>20</span>
      </p>
      <h2 style="top: -61%;">人为灾害</h2>
    </div>
    <img src="../../../assets/img/jcyj.gif" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
.jcyj-centent #JimgDiv {
  height: 72%;
  position: relative;
}
.jcyj-centent #JimgDiv img {
  position: absolute;
  width: 80%;
  margin: auto;
  display: block;
  left: 10%;
  top: -5%;
}
.jcyj-centent #JimgDiv .zqTextDiv {
  width: 180px;
  font-size: 13px;
  color: #fff;
  position: relative;
  z-index: 10;
  background-color: #0b4f4d;
  padding: 5px 15px;
  border-radius: 8px;
  border: 2px solid #1e6955;
}
.jcyj-centent #JimgDiv .zqTextDiv span {
  float: right;
  font-family: "digital";
  font-size: 23px;
}
.jcyj-centent #JimgDiv .zqTextDiv h2 {
  position: absolute;
  right: 0;
}
.jcyj-centent #JimgDiv .zqTextDiv p {
  padding: 0;
  margin-top: 0;
  margin-bottom: 10px;
}
.jcyj-centent #JimgDiv .zqTextDiv p:nth-child(1) span {
  color: #04cb86;
}
.jcyj-centent #JimgDiv .zqTextDiv p:nth-child(2) span {
  color: #2e73fe;
}
.jcyj-centent #JimgDiv .zqTextDiv p:nth-child(3) span {
  color: #dcc113;
}
</style>