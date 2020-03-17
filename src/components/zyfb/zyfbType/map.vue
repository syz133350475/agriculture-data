<template>
  <div id="map"></div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";


import { ARCGIS_API_URL,OPTION,url, DT_url, NL_url } from "@/assets/config/config.js";

// 具体引用例子

export default {
  mounted: function() {
    this.addMap(); //地图
  },
  methods: {
    /*添加地图*/
    addMap() {
      loadModules(
        [
          "esri/Map",
          "esri/views/MapView",
          "esri/layers/VectorTileLayer",
          "esri/layers/FeatureLayer"
        ],
        OPTION
      ).then(([Map, MapView, VectorTileLayer, FeatureLayer]) => {
        const baseLayer = new VectorTileLayer({
          url: DT_url
        });
        const map = new Map();
        const view = new MapView({
          container: "map",
          map: map,
          zoom: 12,
          center: [120.695, 27.997]
        });
        map.add(baseLayer);

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
          popupTemplate: popupTemplate,
        });
        map.add(NLZT);
        
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
.esri-attribution,.esri-zoom {
  display: none !important;
}
</style>
