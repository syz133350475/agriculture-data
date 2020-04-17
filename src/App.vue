<template>
  <div id="app">
    <header>
      <Head />
    </header>
    <div class="container" ref="container">
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>

<script>
/* eslint-disable */
import Head from "./components/head.vue";
import {auth_token} from './api/bean/auth.js'

export default {
  name: "app",
  components: {
    Head
  },
  created() {
    (async () => {
      if (!localStorage.getItem("token")) {
        await auth_token();
      }
      return;
    })();
  },
  mounted(){
    this.$refs.container.className="container"
  }
};
</script>

<style>
@import url("./assets/css/common.css");

#app {
  background-color: #ffffff;

}
#app,
.container {
  background-image: url(./assets/img/bg.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
