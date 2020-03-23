<template>
  <div id="head" class="el-header">
    <el-row type="flex" class="row-bg">
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <h1 id="head-name">{{ headName }}</h1>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light">
          <div id="head-menu">
            <el-menu
              :default-active="activeIndex"
              class="el-menu"
              mode="horizontal"
              text-color="#e7fcce"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="1">
                <router-link to="/">农业全景</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/zyfb">资源分布</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/jcyj">监测预警</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/xczx">乡村振兴</router-link>
              </el-menu-item>
            </el-menu>
          </div>
        </div>
      </el-col>
      <el-col :span="3" :offset="7">
        <div class="grid-content bg-purple">
          <!-- 天气 -->
          <div id="tq">
            <h1>{{ wd }}</h1>
            <div class="wd">
              <span>℃</span>
              <p>{{ wstext }}</p>
            </div>
            <h4 style="margin-bottom: 0;">{{ city }}</h4>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */

import { TQ_url } from "@/assets/config/config.js";
export default {
  data() {
    return {
      activeIndex: "1",
      headName: "温州市农业大数据平台",
      wd: "20",
      wstext: "晴转多云",
      city: "温州市"
    };
  },
  mounted() {
    //this.fetchData();//天气
  },
  methods: {
    /*天气*/
    fetchData() {
      axios({
        method: "get",
        url: TQ_url
      }).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style>
#head {
  position: absolute;
  width: 100%;
  background-image: linear-gradient(
    rgba(0, 126, 52, 0.5),
    rgba(18, 45, 60, 0.4)
  );
  z-index: 10;
}
#head h1 {
  color: #59e019;
  background-image: -webkit-linear-gradient(bottom, #59e019, #ede711);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0px;
}
.el-menu {
  background-color: unset;
}
#head-menu .el-menu.el-menu--horizontal {
  border-bottom: none;
}
#head-menu .el-menu-item {
  font-size: 18px;
}
#head-menu .el-menu-item:hover,
#head-menu .el-menu-item:active,
#head-menu .el-menu-item:focus {
  background-color: unset;
}
#head-menu {
  margin-top: 0.67em;
}
#tq {
  float: right;
}
#tq h1 {
  display: inline-block;
  color: #fff;
}
#tq .wd {
  width: 60px;
  font-size: 12px;
  display: inline-block;
  color: #fff;
}
#tq .wd p {
  padding: 0;
  margin: 0;
}
#tq h4 {
  display: inline-block;
  color: #fff;
}
#head a
{
  display: block;
}
</style>
