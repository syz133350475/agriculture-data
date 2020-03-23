export const ARCGIS_API_URL =
  //"http://192.168.0.200:9003/s/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js";
 "http://172.20.89.68:5001/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/dojo/dojo.js";
 
export const OPTION = {
  url: ARCGIS_API_URL
};
export const server = "http://218.75.26.62:6443";

//服务前缀
export const url = "http://218.75.26.62:6443/arcgis/rest/services/";
//底图
export const DT_url = "http://172.20.89.59/server/rest/services/Hosted/kfq_WGS84/VectorTileServer";//'https://services.wzmap.gov.cn/server/rest/services/Hosted/DSJ/VectorTileServer';
//天气
export const TQ_url = 'https://api.seniverse.com/v3/weather/now.json?key=SLsQOxZA2Oa2I13r3&location=wenzhou&language=zh-Hans&unit=c';


export const NL_url = url+"YJNL/NLZT/MapServer";//农旅
export const XCZX_url = "http://218.75.26.57:6080/arcgis/rest/services/NYDSJ/XCZXSFD/MapServer";//乡村振兴