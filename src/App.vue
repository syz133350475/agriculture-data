<template>
  <div id="app">
    <header>
      <Head />
    </header>
    <div class="container">
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>

<script>
/* eslint-disable */
import Head from "./components/head.vue";
export default {
  name: "app",
  components: {
    Head
  }
};
</script>

<style>
@import url("./assets/css/common.css");
#app,
.container {
  width: 100%;
  height: 100%;
  background-color: #192649;
  background-image: url(./assets/img/bg.png);
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
