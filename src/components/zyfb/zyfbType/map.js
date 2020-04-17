/**
 * map.vue 调用的方法 
 */

import { loadModules } from "esri-loader";
import {
    ARCGIS_API_URL,
    OPTION,
    url,
    DT_url,
    NL_url
  } from "@/assets/config/config.js";

  /**
   * 第一次单击el-tree addLayer
   * @param {*} context  this 上下文
   * @param {*} item el-tree选中的对象
   * @param {*} _id_ item的id
   */
export const addLayer=function(context,item, _id_) {
      const arr = [
        "耕地",
        "园地",
        "林地",
        "历史建筑",
        "历史文物保护单位",
        "路网数据",
        "水系河网数据"
      ];
      const historyArray = [
        "history_jq",
        "history_jz",
        "history_bhdw",
        "history_mz",
        "history_mc"
      ];
      const nyzyArray = ["nyzy_gd", "nyzy_yd", "nyzy_ld", "nyzy_nt"];
      const nlzyArray = [
        "nlzy_mlxc",
        "nlzy_nyy",
        "nlzy_ms",
        "nlzy_njl",
        "nlzy_jqjd"
      ];
      loadModules(
        [
          "esri/widgets/Legend",
          "esri/layers/FeatureLayer",
          "esri/layers/MapImageLayer"
        ],
        OPTION
      ).then(([Legend, FeatureLayer, MapImageLayer]) => {
        let feature = null;
        if (context.view.zoom != 9) {
          context.view.goTo({
            zoom: 9,
            center: [120.695, 27.997]
          });
        }
        if (historyArray.includes(_id_)) {
          context.view.goTo({
            zoom: 13,
            center: [120.64971358299253, 28.024326345443715]
          });
        }
        if (nyzyArray.includes(_id_)) {
          context.view.goTo({
            zoom: 13,
            center: [120.69317358299253, 28.154566345443715]
          });
        }
        if (nlzyArray.includes(_id_)) {
          context.view.goTo({
            zoom: 13,
            center: [120.69317358299253, 28.154566345443715]
          });
        }
        if (item.label == "历史文化街区" || item.label == "历史文化建筑") {
          context.view.goTo({
            zoom: 13,
            center: [120.64971358299253, 28.024326345443715]
          });
          feature = new MapImageLayer({
            id: item.id,
            url: item.url,
            sublayers: item.sublayers
          });
        }else if (
          item.label == "温州生产主体" 
        ){          
          const popupTemplate = {
            title: "温州生产主体",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "name",
                    label: "名称"
                  },
                  {
                    fieldName: "address",
                    label: "地址"
                  },
                  {
                    fieldName:"photo",
                    label:"缩略图"
                  },
                  {
                    fieldName:"area",
                    label:"面积"
                  },
                  {
                    fieldName: "type",
                    label: "企业类型"
                  }
                ]
              }
            ]
          }
          
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        }
        else if (
          item.label == "文成生产主体" 
        ){          
          const popupTemplate = {
            title: "文成生产主体",
            content: [
              {
                type: "fields",
                fieldInfos: [{
                    fieldName: "name",
                    label: "名称 "
                  },
                  {
                    fieldName: "类型 ",
                    label: "类型"
                  },
                  {
                    fieldName: "县",
                    label: "县"
                  },
                  {
                    fieldName:"乡镇",
                    label:"乡镇 "
                  },
                  {
                    fieldName:"area",
                    label:"面积"
                  },
                  {
                    fieldName: "产品 ",
                    label: "产品 "
                  },
                ]
              }
            ]
          }
          
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        }
        else if (
          item.label == "阳光农场" 
        ){          
          const popupTemplate = {
            title: "阳光农场",
            content: [
              {
                type: "fields",
                fieldInfos: [{
                    fieldName: "name",
                    label: "名称 "
                  },
                  {
                    fieldName: "产品 ",
                    label: "产品 "
                  },
                ]
              }
            ]
          }
          
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        }
        else if (item.label == "地质灾害") {
          const popupTemplate = {
            title: "信息",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "市",
                    label: "市"
                  },
                  {
                    fieldName: "县",
                    label: "县"
                  },
                  {
                    fieldName: "威胁户数",
                    label: "威胁户数"
                  },
                  {
                    fieldName: "隐患类型",
                    label: "隐患类型"
                  },
                  {
                    fieldName: "监测人电话",
                    label: "监测人电话"
                  },
                  {
                    fieldName: "威胁财产_万",
                    label: "威胁财产_万"
                  },
                  {
                    fieldName: "威胁人数",
                    label: "威胁人数"
                  }
                ]
              }
            ]
          };
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        } else if (item.label == "电商村") {
          const popupTemplate = {
            title: "信息",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "NAME",
                    label: "名称"
                  },
                  {
                    fieldName: "ADDRESS",
                    label: "地址"
                  },
                  {
                    fieldName: "TAG",
                    label: "标签"
                  }
                ]
              }
            ]
          };
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        } else if (
          item.label == "美丽乡村" ||
          item.label == "农业园" ||
          item.label == "民宿" ||
          item.label == "景区景点"
        ) {
          const popupTemplate = {
            title: "信息",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "NAME",
                    label: "名称"
                  },
                  {
                    fieldName: "TYPE",
                    label: "类型"
                  },
                  {
                    fieldName: "PHONE ",
                    label: "电话"
                  },
                  {
                    fieldName: "ADDRESS",
                    label: "地址"
                  }
                ]
              }
            ]
          };
          console.log(item);
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers,
            popupTemplate: popupTemplate
          });
        }
        else if (
          item.label == "西部生态休闲产业带重点项目"
        ) {
          const popupTemplate = {
            title: "西部生态休闲产业带重点项目",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "name",
                    label: "名称"
                  },
                  {
                    fieldName: "项目地址",
                    label: "项目地址"
                  },               
                ]
              }
            ]
          };
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers[0].id,
            popupTemplate: popupTemplate
          });
        } 
        else if (
          item.label == "乡村振兴示范带标志性项目"
        ) {
          const popupTemplate = {
            title: "乡村振兴示范带标志性项目",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "name",
                    label: "名称"
                  },
                  {
                    fieldName: "address",
                    label: "地址"
                  },               
                ]
              }
            ]
          };
          feature = new FeatureLayer({
            id: item.id,
            url: item.url + "/" + item.sublayers[0].id,
            popupTemplate: popupTemplate
          });
        } 
        else {
          feature = new MapImageLayer({
            id: item.id,
            url: item.url,
            sublayers: item.sublayers
          });
        }
        context.map.add(feature, 1);
        if (~arr.includes(item.label) != -1) {
          context.legend.layerInfos.push({
            title: "",
            layer: feature
          });
        } else {
          context.legend.layerInfos.push({});
        }
      });
    }
    //历史影像
// export const addhistoryMap=function(context) {
      
//       loadModules(["esri/layers/MapImageLayer"], OPTION).then(
//         ([MapImageLayer]) => {
//           // const map = new Map();
//           const history = new MapImageLayer({
//             id: "history",
//             url: item.url,
//             sublayers: item.sublayers
//           });
//           context.map.add(history);
//         }
//       );
//     }
