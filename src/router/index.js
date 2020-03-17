import Vue from "vue";
import VueRouter from "vue-router";
import nyjj from "../components/nyjj/nyjj.vue";
import zyfb from "../components/zyfb/zyfb.vue";
import xczx from "../components/xczx/xczx.vue";
import jcyj from "../components/jcyj/jcyj.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "农业经济", //农业经济
        component: nyjj
    },
    {
        path: "/zyfb",
        name: "资源分布", //资源分布
        component: zyfb
    },
    {
        path: "/xczx",
        name: "乡村振兴", //乡村振兴
        component: xczx
    },
    {
        path: "/jcyj",
        name: "监测预警", //监测预警
        component: jcyj
    }
];

const router = new VueRouter({
    mode: "hash",
    routes
});

export default router;