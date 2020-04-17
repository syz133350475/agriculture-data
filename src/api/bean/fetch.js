import { getDefaultAxios } from '../index.js'
const RES = "testsql_all";


/*
*传感器数据
*/

// export const getcgq =async ()=>{
//   const axios = getDefaultAxios();
//   const
// }


/**
 * 1.1.1	农业大数据农产品今日价格表(区县)
 */

export const agro_prod_today_price = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",//序号
      "product",//产品
      "industry",//产业类型
      "county",//地区
      "price",//今日价格(元)
      "unit",//计量单位
      "date"//日期(年月日)
    ];
    const name = "agro_prod_today_price";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
 * 1.1.2	农业大数据历年农产品价格表(区县)
 */

export const agro_prod_year_price = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "product",//产品
      "industry",//产业类型
      "county",//地区
      "avgprice",//年平均价格(元)
      "unit",//计量单位
      "year"//年份
    ];
    const name = "agro_prod_year_price";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

  /**
   *1.1.3	农业大数据地区年度农业产值产量表(区县)
   */
  export const agro_output_year = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "industry",//产业类型
      "output",//产值(万元)
      "yield",//产量(吨)
      "county",//地区
      "year_erlier_output",//产值同比
      "year_erlier_yield",//产量同比
      "year"//年份
    ];
    const name = "agro_output_year";
    return await axios.post("/dw/ds", option_concat(name, params));
  };


  /**
   * 1.1.4	农业大数据地区月度农业产值产量表(区县)
   */

  export const agro_output_mounth = async () => {
    const axios = getDefaultAxios();
    const params = [
      "id",
      "industry",//产业类型
      "output",//产值(万元)
      "yield",//产量(吨)
      "county",//地区
      "year_erlier_output",//产值同比
      "month_erlier_output",//产值环比
      "year_erlier_yield",//产量同比
      "month_erlier_yield",//产量环比
      "date",//日期(年月)

    ];
    const name = "agro_output_mounth";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
 * 1.1.5	农业大数据阳光农场
 */

export const agro_sunshine_farm = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name",//企业名称
      "representative",//企业法人
      "address",//企业地址
      "intro",//企业简介
      "industry",//产业类型
      "tel",//联系方式
      "output",//产值(万元)
      "yield",//产量(吨)
      "year",//年份
      "main_product",//主要产品
      "county",//地区
      "img_src",//图片地址
      "video_src"//监控地址
    ];
    const name = "agro_sunshine_farm";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

 /**
  * 1.1.6	农业大数据年度农产品的产量排行(区县)
  */
 export const agro_prod_yield_year_bank = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "product",//产品
      "industry",//产业
      "county",//地区
      "yield",//产量(吨)
      "year"//年份
    ];
    const name = "agro_prod_yield_year_bank";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
  * 1.1.7	农业大数据乡村旅游分析表(区县)
  */
 export const agro_tour_analysis = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "county",//地区
      "avgconsume",//人均消费
      "time",//旅游次数
      "year_erlier_c",//同比消费
      "year_erlier_t",//同比次数
      "year",//年份
    ];
    const name = "agro_tour_analysis";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.8	农业大数据农业占比分析表(面积，产量)
*/
export const agro_analysis = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "industry", //产业类型
      "category", //产品类
      "county", //地区
      "area", //面积(公顷)
      "yield", //产量(万吨)
      "year", //年份
      "year_erlier_area",
      "year_erlier_yield" //同比产量
    ];
    const name = "agro_analysis";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.9	农业大数据年度农村收入分析表(镇，村)
*/

export const agro_rural_economy_analysis = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "county", //地区
      "town", //镇/街道
      "village", //村
      "income", //可支配收入(万元)
      "expense", //消费支出(万元)
      "year" //年份
    ];
    const name = "agro_rural_economy_analysis";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.10	农业大数据年度灾情分析表(县区)
*/

export const agro_disaster_year_analysis = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "category", //灾情种类
      "county", //受影响地区
      "time", //次数
      "year_erlier_time", //次数同比
      "year", //年份
      "loss" //经济损失(万元)
    ];
    const name = "agro_disaster_year_analysis";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.11	农业大数据历史灾情表
*/
export const agro_history_disaster = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id", 
      "name", //灾情名称 
      "category", //灾情种类
      "county", //受影响地区
      "day", //到访时间(月日)
      "img_src", //灾情图片
      "influence", //影响统计
      "year", //年份
      "loss" //经济损失(万元)
    ];
    const name = "agro_history_disaster";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.12	农业大数据生产资源分布表(县区)
*/

export const agro_company_distribution = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name", //企业名称
      "representative", //企业法人
      "address", //企业地址
      "intro", //企业简介
      "category", //企业类型
      "industry", //产业类型
      "scope", //经营范围
      "tel", //联系方式 
      "main_product", //主营产品
      "output", //产值(万元)
      "yield", //产量(吨)
      "year", //年份
      "production_area", //生产面积
      "county", //所属地区
      "img_src", //图片地址
      "video_src"  //监控地址
    ];
    const name = "agro_company_distribution";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.13	农业大数据资源分布农产品详情表(区县)
*/

export const agro_prod_distribution = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name",//名称
      "area", //生产面积
      "address", //地址
      "county", //地区
      "intro", //简介 
      "scale" //产量占比(占主打产品)
    ];
    const name = "agro_prod_distribution";
    return await axios.post("/dw/ds", option_concat(name, params));
  };

/**
* 1.1.14	农业大数据农业园信息表(区县)
*/
export const agro_agricultural_park = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name", //企业名称
      "intro", //企业介绍
      "county", //地区
      "address", //企业地址
      "representative", //企业法人
      "area", //生产面积
      "crop", //种养作物
      "video_src", //监控视频地址
      "img_src" //图片地址
    ];
    const name = "agro_agricultural_park";
    return await axios.post("/dw/ds", option_concat(name, params));
  };



/**
* 1.1.15	农业大数据乡村振兴区域精品带表(区县)
*/
export const agro_boutique_band = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name", //项目名称
      "intro", //项目介绍
      "investment_total", //投资总额（亿元）
      "county", //区县
      "length_scope", //长度及范围
      "video_src", //视频地址
      "img_src", //图片地址
      "year", //年份
      "investment_year", //年投资(亿元)
      "year_erlier_i", //投资同比
      "year_benefit", //年效益
      "year_erlier_b" //效益同比
    ];
    const name = "agro_boutique_band";
    return await axios.post("/dw/ds", option_concat(name, params));
  };


/**
* 1.1.16	农业大数据精品项目表
*/
export const agro_boutique_item = async () => {
    const axios = getDefaultAxios();
    const params = [
      "Id",
      "name", //项目名称
      "county",//地区
      "investment_amount", //投资金额（万元）
      "intro", //项目介绍
      "status", //建设状态
      "length_scope", //长度及范围
      "img_src", //图片地址
      "video_src", //视频地址
      "project" //所属精品带
    ];
    const name = "agro_boutique_item";
    return await axios.post("/dw/ds", option_concat(name, params));
  };



/**
 * 配置
 * @param {*} name  表名
 * @param {*} cols  列名
 * @param {*} where 
 * @param {*} count
 */
const option_concat = (name, cols, where = "", count) => {
    const option = {
      module: "dwbean",
      action: "001",
      res: RES,
      ds: {
        buffers: [],
        tables: [{ alias: "f", orm: "", name, updateflag: 1 }],
        cols: cols.map(item => {
          return { name: item, raw: `f.${item}` };
        }),
        module: RES,
        where
      }
    };
    count && (option.count = count);
    return option;
  };