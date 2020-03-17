/* eslint-disable */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router/index";
import App from './App.vue';
import echarts from 'echarts';
import axios from 'axios'

// Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;

Vue.use(ElementUI);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');