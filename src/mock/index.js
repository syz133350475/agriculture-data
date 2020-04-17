// if (process.env.NODE_ENV !== 'production') require('./mock')
// import Mock from 'mockjs'
//extend 进行扩展
// Random.extend({
//     constellation: function() {
//         const constellations = [
//             '白羊座',
//             '金牛座',
//             '双子座',
//         ];
//         return this.pick(constellations);
//     },
// });
const Mock = require('mockjs');
/**
 * mock农产品今日价格
 */
export const agro_prod_today_price=async()=>{
    let Random = Mock.Random;
    // Random.date();
    let dataMock = Mock.mock({
        'data|50': [{
            'id|+1': 1,
            'product': '@product',
            'industry': '@industry',
            'county': '@county',
            'price': Random.character('number'),
            'unit': '元500克',
            'date': '@date'
        }]
    });

    return dataMock
}

/**
 * 农产品今年价格
 */

export const agro_prod_year_price=async()=>{
    let Random = Mock.Random;
    // Random.date();
    let dataMock = Mock.mock({
        'data|50': [{
            'id|+1': 1,
            'product': '@product',
            'industry': '@industry',
            'county': '@county',
            'avgprice|1-10': 10,
            'unit': '元500克',
            'year': '@date'
        }]
    });

    return dataMock
}

/**
 * 1.1.3	农业大数据地区年度农业产值产量表
 */

export const agro_output_year=async()=>{
    let Random = Mock.Random;
    // Random.date();
    let dataMock = Mock.mock({
        'data|50': [{
            "id|+1":1,
            "industry":'@industry',//产业类型
            "output|1000-3000":3000,
            "yield|1000-3000":3000,
            "county":'@county',
            "year_erlier_output":'-2',
            "year_erlier_yield":'+2',
            "year":Random.date('yyyy')
        }]
    });

    return dataMock
}