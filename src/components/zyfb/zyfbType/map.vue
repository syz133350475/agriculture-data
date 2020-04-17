<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";
import { addLayer} from "./map.js"

import {
  ARCGIS_API_URL,
  OPTION,
  url,
  DT_url,
  NL_url
} from "@/assets/config/config.js";

// 具体引用例子

export default {
  data() {
    return {
      map: null,
      view: null,
      legend: null
    };
  },
  mounted: function() {
    this.addMap(); //地图
  },
  methods: {
    /*添加地图*/
    addMap() {
      const that = this;
      loadModules(
        [
          "esri/Map",
          "esri/views/MapView",
          "esri/widgets/Legend",
          "esri/layers/VectorTileLayer",
          "esri/layers/FeatureLayer"
        ],
        OPTION
      ).then(([Map, MapView, Legend, VectorTileLayer, FeatureLayer]) => {
        const baseLayer = new VectorTileLayer({
          url: DT_url
        });
        that.map = new Map();
        that.view = new MapView({
          container: "map",
          map: that.map,
          zoom: 9,
          center: [120.695, 27.997]
        });

        that.map.add(baseLayer);
        that.legend = new Legend({
          // label:"图例",
          view: that.view
        });
        that.view.ui.add(that.legend, "bottom-left");
        that.view.on("click", function(evt) {
          console.log(evt);
          that.IdentifyTaskFun(evt);
        });

        //兴趣点
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

        const NLZT = new FeatureLayer({
          url: NL_url,
          popupTemplate: popupTemplate
        });
        that.map.add(NLZT);
      });
    },
    //根据目录添加图层
    isaddLayer(item, checked) {
      const _id_ = item.id;
      if (checked) {
        // this.map && this.map.findLayerById(_id_)
        //   ? (this.map.findLayerById(_id_).visible = true)
        //   : this.addLayer(item, _id_);
        if (this.map && this.map.findLayerById(_id_)) {
          this.map.findLayerById(_id_).visible = true;
          console.log(_id_);
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
          if (historyArray.includes(_id_)) {
            this.view.goTo({
              zoom: 13,
              center: [120.64971358299253, 28.024326345443715]
            });
          }
          if (nyzyArray.includes(_id_)) {
            this.view.goTo({
              zoom: 13,
              center: [120.69317358299253, 28.154566345443715]
            });
          }
          if (nlzyArray.includes(_id_)) {
            this.view.goTo({
              zoom: 13,
              center: [120.69317358299253, 28.154566345443715]
            });
          }
        } else {
          // this.addLayer(item, _id_);
          addLayer(this,item,_id_)
        }
      } else {
        this.map && this.map.findLayerById(_id_)
          ? (this.map.findLayerById(_id_).visible = false)
          : null;

        this.view.goTo({
          zoom: 9,
          center: [120.695, 27.997]
        });
      }
    },

    //历史影像
    addhistory() {
      const that = this;
      // console.log("item",item)
      loadModules(["esri/layers/MapImageLayer"], OPTION).then(
        ([MapImageLayer]) => {
          const history = new MapImageLayer({
            id: "history",
            url: item.url,
            sublayers: item.sublayers
          });

          that.map.add(history);
        }
      );
    }, 
   // 空间查询
    IdentifyTaskFun({ mapPoint }) {
      const that = this;
      loadModules(
        ["esri/tasks/IdentifyTask", "esri/tasks/support/IdentifyParameters"],
        OPTION
      ).then(([IdentifyTask, IdentifyParameters]) => {
        const url =
          "http://218.75.26.62:6443/arcgis/rest/services/LSWH/MapServer";
        const identifyTask = new IdentifyTask(url);
        const params = new IdentifyParameters();
        params.tolerance = 2;
        params.layerIds = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        params.layerOption = "top";
        params.width = that.view.width;
        params.height = that.view.height;
        params.returnGeometry = true;
        params.geometry = mapPoint;
        params.mapExtent = that.view.extent;
        identifyTask.execute(params).then(response => {
          if (!response.results || !response.results.length) return;
          console.log(response.results[0].feature);
          that.addPop(response.results[0].feature);
        });
      });
    },
    //弹框
    addPop(item) {
      // if(!this.view || !this.map) return
      const that = this;
      const obj = item.attributes;
      return new Promise((resolve, reject) => {
        loadModules(["esri/geometry/Point"], OPTION).then(async ([Point]) => {
          that.view.popup.visible = false;
          let pointx, pointy;
          if (item.geometry.centroid) {
            pointx = item.geometry.centroid.x;
            pointy = item.geometry.centroid.y;
          } else {
            pointx = item.geometry.x;
            pointy = item.geometry.y;
          }
          const mapPoint = new Point({ x: pointx, y: pointy });
          const name = obj["名称"] || "-";
          const address = obj["地址 "] || "-";
          const area =
            obj["用地面积（平方米）"] || obj["面积（平方米）"] || "-";
          that.view.popup = {
            title: "信息",
            content: `<div class="poptemplate_frame">
                <div>
              <ul>
              <li><span>名称:</span>${name}</li>
              <li><span>地址:</span>${address}</li>
               <li><span>面积(平方米):</span>${
                 area ? Number(area).toFixed(2) : "-"
               }</li>
              </ul>
              </ul>
              </div>
            </div>`,
            location: mapPoint
          };
          that.view.popup.visible = true;
          // this.addDraw(item.geometry);
          resolve(true);
        });
      });
    }
  }
};
</script>

<style>
@import url("http://172.20.89.68:5001/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/esri/themes/light/main.css");
/* http://172.20.89.68:5001/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/esri/themes/light/main.css */
/* http://192.168.0.200:9003/s/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/esri/themes/light/main.css */
#map {
  width: 100%;
  height: 100%;
}
.esri-attribution,
.esri-zoom {
  display: none !important;
}
.esri-ui-bottom-left {
  left: 15% !important;
}
.esri-ui-corner .esri-component.esri-widget--panel {
  width: 112px !important;
  color: #fff !important;
}
.poptemplate_frame li {
  color: #fff;
  font-size: 16px;
  line-height: 23px;
}
</style>
