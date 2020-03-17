<template>
  <div id="weatherDiv">
    <div class="title" style="height:28%">
      <h3>今日天气</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="tp-weather-widget"></div>
    </div>
  </div>
</template>

<script>
(function(a, h, g, f, e, d, c, b) {
  b = function() {
    d = h.createElement(g);
    c = h.getElementsByTagName(g)[0];
    d.src = e;
    d.charset = "utf-8";
    d.async = 1;
    c.parentNode.insertBefore(d, c);
  };
  a["SeniverseWeatherWidgetObject"] = f;
  a[f] ||
    (a[f] = function() {
      (a[f].q = a[f].q || []).push(arguments);
    });
  a[f].l = +new Date();
  if (a.attachEvent) {
    a.attachEvent("onload", b);
  } else {
    a.addEventListener("load", b, false);
  }
})(
  window,
  document,
  "script",
  "SeniverseWeatherWidget",
  "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" +
    parseInt((new Date().getTime() / 100000000).toString(), 10)
);
export default {
  mounted: function() {
    this.$nextTick(function() {
      window.SeniverseWeatherWidget("show", {
        flavor: "slim",
        location: "WSVZ695PCF71",
        geolocation: false,
        language: "zh-Hans",
        unit: "c",
        theme: "auto",
        token: "1a15d6a5-dfb1-48c1-8e19-76f5bc1211f8",
        hover: "always",
        container: "tp-weather-widget"
      });
    });
  }
};
</script>

<style>
.jcyj-centent #weatherDiv {
  height: 23%;
}
.jcyj-centent #weatherDiv #jpdDiv {
  height: 70%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jcyj-centent #weatherDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #weatherDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #weatherDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #weatherDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
/* 天气调整 */
.jcyj-centent .EKHJj,
.jcyj-centent .fAFgBy,
.jcyj-centent .emBiRU {
  display: none;
}
.jcyj-centent .sw-card-slim-container {
  width: 90%;
  background: none;
  margin: auto;
  box-shadow: none;
}
.jcyj-centent .sc-htpNat
{
  height: 65px!important;
}
.jcyj-centent .sc-gisBJw
{
  padding-top: 5px;
  z-index: 10;
}
</style>