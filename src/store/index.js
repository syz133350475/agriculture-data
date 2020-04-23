
import Vue from 'vue'
import Vuex from 'vuex'
// import { auth_token } from '../api/bean/auth.js'
import {
    agro_prod_today_price, agro_prod_year_price, agro_output_year, agro_output_mounth, agro_sunshine_farm,
    agro_prod_yield_year_bank, agro_tour_analysis, agro_analysis, agro_rural_economy_analysis, agro_disaster_year_analysis, agro_history_disaster, agro_company_distribution, agro_prod_distribution, agro_agricultural_park, agro_boutique_band, agro_boutique_item
} from "../mock/index"

import { fetchArcgisServer } from "@/api/bean/space.js";

import {  LAYER_SFD,LAYER_PROJECT} from "@/assets/config/config.js";
//图片信息
import { projectData } from "../../public/data/img_data";
import { sfdData } from "../../public/data/img_sfd_data";


Vue.use(Vuex)



export default new Vuex.Store({
    state: {
        sfd_picture:sfdData,
        item_picture: projectData,
        prod_today_price: [],       //农产品今日价格
        prod_year_price: [],        //农产品历年价格
        output_year: [],            //农产品年度农业产值产量
        output_mounth: [],          //农产品月度农业产值产量
        sunshine_farm: [],          //阳光农场
        prod_yield_year_bank: [],   //年度农产品的产量排行
        tour_analysis: [],          //乡村旅游分析
        analysis:[],                //农业占比分析表(面积，产量)
        rural_economy_analysis:[],  //年度农村收入分析表(镇，村)
        disaster_year_analysis:[],  //年度灾情分析表(县区)
        history_disaster:[],        //历史灾情详情表
        company_distribution:[],    //生产资源分布表(县区)
        prod_distribution:[],       //资源分布农产品详情表(区县)
        agricultural_park:[],       //农业园信息表(区县)
        boutique_band:[],           //乡村振兴区域精品带表(区县)
        boutique_item:[],           //精品项目表
        boutique_map_band:[],        //精品带数据 地图
        boutique_map_item:[]        //精品带项目数据 地图
    },
    mutations: {
        set_prod_today_price(state, data = []) {
            state.prod_today_price = data
        },
        set_prod_year_price(state, data = []) {
            state.prod_year_price = data
        },
        set_output_year(state, data = []) {
            state.output_year = data
        },
        set_output_mounth(state, data) {
            state.output_mounth = data
        },
        set_sunshine_farm(state, data = []) {
            state.sunshine_farm = data
        },
        set_prod_yield_year_bank(state, data = []) {
            state.prod_yield_year_bank = data
        },
        set_tour_analysis(state, data = []) {
            state.tour_analysis = data
        },
        set_analysis(state,data=[]){
            state.analysis=data
        },
        set_rural_economy_analysis(state,data=[]){
            state.rural_economy_analysis = data
        },
        set_disaster_year_analysis(state,data=[]){
            state.disaster_year_analysis=data
        },
        set_history_disaster(state,data=[]){
            state.history_disaster=data
        },
        set_company_distribution(state,data=[]){
            state.company_distribution=data
        },
        set_prod_distribution(state,data=[]){
            state.prod_distribution =data
        },
        set_agricultural_park(state,data=[]){
            state.agricultural_park=data
        },
        set_boutique_band(state,data=[]){
            state.boutique_band = data
        },
        set_boutique_item(state,data=[]){
            state.boutique_item= data
        },
        set_boutique_map_item(state,data=[]){
            state.boutique_map_item= data
        },
        set_boutique_map_band(state,data=[]){
            state.boutique_map_band=data
        }

    },
    actions: {
        //今日价格
        async get_prod_today_price(context) {
            const { data } = await agro_prod_today_price();
            // console.log("在store中农产品今日价格", data)
            context.commit('set_prod_today_price', data)
        },
        //历年价格
        async get_prod_year_price(context) {
            const { data } = await agro_prod_year_price();
            context.commit('set_prod_year_price', data)
        },
        //农产品年度农业产值产量表
        async get_output_year(context) {
            const { data } = await agro_output_year();
            context.commit('set_output_year', data)
        },
        //农产品月度农业产值产量表
        async get_output_mounth(context) {
            const { data } = await agro_output_mounth();
            context.commit('set_output_mounth', data)
        },
        //阳光农场
        async get_sunshine_farm(context) {
            const { data } = await agro_sunshine_farm();
            context.commit('set_sunshine_farm', data)
        },
        //据年度农产品的产量排行(区县)
        async get_prod_yield_year_bank(context) {
            const { data } = await agro_prod_yield_year_bank();
            context.commit('set_prod_yield_year_bank', data)
        },
        //乡村旅游分析
        async get_tour_analysis(context) {
            const { data } = await agro_tour_analysis();
            context.commit('set_tour_analysis', data)
        },
        //农业占比分析表(面积，产量)
        async get_analysis(context){
            const{data} =await agro_analysis();
            context.commit('set_analysis',data)
        },
        //年度农村收入分析表(镇，村)
        async get_rural_economy_analysis(context){
            const{data} =await agro_rural_economy_analysis();
            context.commit('set_rural_economy_analysis',data)
        },
        //年度灾情分析表(县区)
        async get_disaster_year_analysis(context){
            const {data} = await agro_disaster_year_analysis();
            context.commit('set_disaster_year_analysis',data)
        },
        //历史灾情详情表
        async get_history_disaster(context){
            const {data} = await agro_history_disaster();
            context.commit('set_history_disaster',data)
        },
        //生产资源分布表(县区)
        async get_company_distribution(context){
            const {data} = await agro_company_distribution();
            context.commit('set_company_distribution',data)
        },
        //资源分布农产品详情表(区县)
        async get_prod_distribution(context){
            const {data} = await agro_prod_distribution();
            context.commit('set_prod_distribution',data)
        },
        //农业园
        async get_agricultural_park(context){
            const {data} = await agro_agricultural_park();
            context.commit('set_agricultural_park',data)
        },
        //乡村振兴区域精品带表(区县)
        async get_boutique_band(context){
            const {data} =await agro_boutique_band()
            context.commit('set_boutique_band',data)
        },
        //农业大数据精品项目表
        async get_boutique_item(context){
            const {data} = await agro_boutique_item()
            context.commit('set_boutique_item',data)
        },

        //精品带项目数据  arcgis
        async fetch_boutique_map_item(context){
            const {data} =await fetchArcgisServer({url:`${LAYER_PROJECT}/0`})
            // console.log("aarcgis精品带数据",data.features)
            context.commit('set_boutique_map_item',data.features)
         },

        //精品带数据 arcgis 
        async fetch_boutique_map_band(context){
            const {data} = await fetchArcgisServer({url:`${LAYER_SFD}/0`})
            // console.log("aarcgis精品带项目数据",data.features)
            context.commit('set_boutique_map_band',data.features)
        }
    }
})

