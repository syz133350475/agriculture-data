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
    <div
      class="zqTextDiv"
      style="position: absolute;left: 15%;top: 19%;background-color: #f4433663;border: 2px solid #ff572257;"
    >
      <div id="yj">
        <span ref="contlist" @mouseover="stopScroll" @mouseout="startScroll">近期预测将发生**灾害</span>
      </div>
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
/* eslint-disable */
export default {
  data() {
    return {
      scrollW: 0
    };
  },
  mounted() {
    //实例挂载完毕前
    //调用滚动代码
     this.scroll();
  },
  methods: {
    //鼠标悬停，停止滚动
    stopScroll() {
      clearInterval(this.scrollTime);
    },
    //鼠标移开 ，接着滚动
    startScroll() {
      var target = this.$refs.contlist;
      this.scrollW = target.offsetLeft; // 移开时记录向左移动的距离
       this.scroll();
    },
    scroll() {
     var width = document.getElementById('yj').getBoundingClientRect().width;
      var target = this.$refs.contlist;
      var initLeft = 178;
      if (this.scrollW < 0) {
        initLeft = this.scrollW * -1;
      }
      //定时器
      this.scrollTime = setInterval(function() {
        initLeft--;
        if (-initLeft > width) {
          initLeft = 178;
        }
        target.style.left = initLeft + "px"; //获取不到translateX的值改用 left

        //target.style = 'transform: translateX(-'+ initLeft +'px)';
      }, 16);
    }
  }
};
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
.jcyj-centent #JimgDiv .zqTextDiv #yj {
  width: 196px;
  height: 23px;
  background-color: #f44336;
  overflow-x: hidden;
  padding: 5px;
  line-height: 23px;
  position: absolute;
  top: -41px;
  left: 1%;
  border-radius: 10px;
}
.jcyj-centent #JimgDiv .zqTextDiv #yj span {
  font-size: 12px;
  /* text-align: center; */
  width: 100%;
  position: relative;
  left: 178px;
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