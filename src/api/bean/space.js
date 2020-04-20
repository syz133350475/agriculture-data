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