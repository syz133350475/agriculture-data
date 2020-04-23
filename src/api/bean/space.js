import { getArcgisAxios } from '../index.js'

/**
 * 
 * @param {*} 获取地图信息 
 */

export async function fetchArcgisServer({where="1=1" ,url}){
    const axios = getArcgisAxios()
    return await axios.get(`${url}/query`,{params:{
        f: "json",
        outFields: "*",
        spatialRel: "esriSpatialRelIntersects",
        where,
        relationParameter: (+new Date()).toString() 
    }})
}
// key=SiuC9boCK6X6aQkap&location=wenzhou&language=zh-Hans&unit=c
// const weatherUrl='https://api.seniverse.com/v3/weather/now.json'
const weatherUrl='https://api.seniverse.com/v3/weather/now.json?key=SiuC9boCK6X6aQkap&location=wenzhou&language=zh-Hans&unit=c'

// export async function fetchWeather(weatherUrl){
//     const axios = getArcgisAxios()
//     return await axios.get(weatherUrl,{params:{
//         key:'SiuC9boCK6X6aQkap',
//         location:'wenzhou',
//         language:'zh-Hans',
//         unit:'c'
//     }})
// }


export async function fetchWeather(weatherUrl){
    const axios = getArcgisAxios()
    return await axios.get(weatherUrl)
}