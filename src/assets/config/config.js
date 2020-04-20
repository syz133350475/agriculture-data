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


export const NL_url = url + "YJNL/NLZT/MapServer";//农旅
export const XCZX_url = "http://218.75.26.57:6080/arcgis/rest/services/NYDSJ/XCZXSFD/MapServer";//乡村振兴


// 温州生产主体
export const wzscztUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/wzsczt/MapServer'

// 文成高山蔬菜
export const wcgsscUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/wcgssc/MapServer'

// 文成糯米山药
export const wcnmsy = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/wcnmsy/MapServer'

// 文成生产主体
export const wcscztUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/wcsczt/MapServer'

// 阳光农场产品
export const ygncUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/ygnc/MapServer'

// 乡村振兴示范带标志性项目
export const xczxsfdbzxxmUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/xczxsfdbzxxm/MapServer'

// 西部生态休闲产业带重点项目
export const xbstxxcydzdxmUrl = 'http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/xbstxxcydzdxm/MapServer'

// 文成杨梅分布数据
export const wcymfbUrl='http://218.75.26.62:6443/arcgis/rest/services/NYDSJ/wcymfb/MapServer'


/**
 * 乡村振兴
 */

const OTHER_HOST = `http://218.75.26.62:6443/arcgis/rest/services`
// 精品带数据
export const LAYER_SFD = `${OTHER_HOST}/NYDSJ/sfd/MapServer`;
// 项目数据
export const LAYER_PROJECT = `${OTHER_HOST}/NYDSJ/ZDXM_DW/MapServer`;