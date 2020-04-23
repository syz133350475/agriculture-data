import Vue from "vue";
import VueRouter from "vue-router";
import nyjj from "../components/nyjj/nyjj.vue";
import zyfb from "../components/zyfb/zyfb.vue";
import xczx from "../components/xczx/xczx.vue";
import jcyj from "../components/jcyj/jcyj.vue";
import cyfz from "../components/cyfz/cyfz.vue";
import {Message} from 'element-ui'



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
    },
    {
        path: "/cyfz",
        name: "产业发展", //产业发展
        component: cyfz
    },
];

const router = new VueRouter({
    mode: "hash",
    routes
});

router.beforeEach((to,from,next)=>{
    if(to.path=="/cyfz"){
        Message({
            message: '还在开发中，敬请期待',
            type: 'error',
            duration: 2 * 1000
        })
    }
    else{
        next()

    }

})

export default router;