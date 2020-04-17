/**
 * 
 * @param {*} key 键名
 * @param {*} val 值
 * @param {*} isJson  判断是否是json类型
 */
export function setLocalStorage(key, val, isJson) {
    window.localStorage.setItem(key, isJson ? JSON.stringify(val) : val)

}
export function getLocalStorage(key, isJson) {
    const obj = window.localStorage.getItem(key)
    return isJson ? obj : JSON.parse(obj)
}


/**
 * 从对象数组筛选想要的属性组合成新的数组
 * @param {*} array 对象数组
 * @param {*} key 对象的key
 */
export function getSeriesByArray(array, key) {
    console.log(array);
    return array.map(item => {
        return item[key];
    });
}



/**
 * 根据农业园作物属性名筛选作物
 * @param {*} cropName  作物字符串
 * @param {*} cropArray 作物数组
 * @param {*} key 作物的学名
 */
export function getCropByAgriculturalPark(cropName, cropArray, key) {
    const nameArray = cropName.split('、')
    return cropArray.filter(item => {
        return nameArray.includes(item[key])
    })
}



/**
 * 根据乡村振兴区域精品带筛选精品项目
 * @param {*} itemName  振兴带项目名称
 * @param {*} itemArray 精品带项目数组
 * @param {*} key 精品带项目的振兴带项目名称
 */
export function getItemByVillage(itemName, itemArray, key) {
    return itemArray.filter(item => {
        return itemName.includes(item[key])
    })
}




/**
 * 
 * @param {*} container  图表盒子节点
 * @param {*} charts     图表节点
 */
export function chartssize(container, charts) {
    function getStyle(el, name) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(el, null);
        } else {
            return el.currentStyle
        }
    }
    var wi = getStyle(container, 'width').width;
    var hi = getStyle(container, 'height').height;
    charts.style.width = wi
    charts.style.height = hi
}



/**
 * [
    {
        k1:v1,
        k2:v2
    },
    {
        k1:v1,
        k2:v2
    },
]
 * 过滤数组的对象 并将key名映射
 * @param {*} dataArray  [] 要过滤的数组
 * @param {*} field  String  要过滤的字段
 */


export function filterAndTransformKey(dataArray, field) {
    const ff = dataArray.filter(item => {
        return item.zb.includes(field)
    })

    const nzw_Category = []
    const nzw_Data = {}

    const keyMap = {
        "lcq": "鹿城区",
        "lwq": "龙湾区",
        "ohq": "瓯海区",
        "dtq": "洞头区",
        "ras": "瑞安市",
        "yqs": "乐清市",
        "yjx": "永嘉县",
        "wcx": "文成县",
        "pyx": "平阳县",
        "tsx": "泰顺县",
        "cnx": "苍南县",
        "lgs": "龙港市",
        "nf": "nf",
        "id": "id",
        "zb": "zb"
    };

    for (let key in ff[0]) {
        nzw_Data[key] = []
        let newKey = keyMap[key];
        if (newKey) {
            nzw_Data[newKey] = nzw_Data[key];
            delete nzw_Data[key];

        }
        for (let i = 0; i < ff.length; i++) {
            console.log(nzw_Data)
            nzw_Data[newKey].push(parseInt(ff[i][key]))

        }
    }
    return nzw_Data
}

/*
    深拷贝

*/

export function deepClone(data) {
    if (!data || !(data instanceof Object) || typeof data == "function") {
        return data || undefined;
    }
    var constructor = data.constructor;
    var result = new constructor();
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            result[key] = deepClone(data[key]);
        }
    }
    return result;
}


      /**
       * 过滤数据 返回y轴的数据或者x轴数据
       * 
       * @param {*} data data 传入的数组  [{},{}]
       * @param {*} key1 需要筛选的key1
       * @param {*} key2 需要传入的key2
       * @param {*} key3 
       * key1 key2  y轴数据 返回值 {
            {}.key1:[{}.key2,{}.key2]}
         key3 x轴数据 返回值[]
        const gg = filterdata(data, 'product', 'avgprice') y轴要的数据
        const ff = filterdata(data,null, null,'year')   x轴要的数据
       */
        export function filterDataByRow (data, key1, key2, key3)  {
            if(!key1){
                key1 =null
            }
            if(!key2){
                key2 =null
            }            
            if(!key3){
                key3 =null
            }

            if (key1 && key2) {
                const yData = {}  //创建一个存储的空间
                data.forEach(element => {
                    //初始化一个属性为数组
                    if (!yData[element[key1]]) {
                        yData[element[key1]] = []
                    }
                    yData[element[key1]].push(element[key2])
                });
                return yData
            }

            if (key3) {
                const xData = []
                data.forEach(element => {
                    console.log(element)
                    if(!xData.includes(element[key3])){
                        xData.push(element[key3])
                    }
                })
                return xData
            }
        }



