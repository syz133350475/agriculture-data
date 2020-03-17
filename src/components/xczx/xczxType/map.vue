<template>
  <div id="xczxMap"></div>
</template>

<script>
/* eslint-disable */
import { loadModules } from "esri-loader";

import {
  ARCGIS_API_URL,
  OPTION,
  url,
  DT_url,
  XCZX_url
} from "@/assets/config/config.js";
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
          "esri/layers/FeatureLayer",
          "esri/layers/MapImageLayer",
          "esri/layers/support/LabelClass",
          "esri/layers/GraphicsLayer",
          "esri/symbols/TextSymbol",
          "esri/Graphic",
          "esri/PopupTemplate"
        ],
        OPTION
      ).then(
        ([
          Map,
          MapView,
          VectorTileLayer,
          FeatureLayer,
          MapImageLayer,
          LabelClass,
          GraphicsLayer,
          TextSymbol,
          Graphic,
          PopupTemplate
        ]) => {
          const baseLayer = new VectorTileLayer({
            url: DT_url
          });
          const map = new Map();
          const view = new MapView({
            container: "xczxMap",
            map: map,
            zoom: 9,
            center: [120.695, 27.997]
          });
          map.add(baseLayer);

          //兴趣点
          var renderer = {
            type: "unique-value",
            field: "STATE",
            uniqueValueInfos: [
              {
                value: "建成",
                symbol: {
                  type: "picture-marker",
                  url: "https://lysb.lucheng.gov.cn/s/ny/jc.png",
                  width: 25,
                  height: 25
                }
              },
              {
                value: "拟建",
                symbol: {
                  type: "picture-marker",
                  url: "https://lysb.lucheng.gov.cn/s/ny/nj.png",
                  width: 25,
                  height: 27
                }
              }
            ]
          };
          const statesLabelClass = new LabelClass({
            labelExpressionInfo: { expression: "$feature.ID" },
            symbol: {
              type: "text", // autocasts as new TextSymbol()
              color: "#fff",
              xoffset: "-26pt",
              yoffset: "-24pt",
              font: {
                // autocasts as new Font()
                size: 12
              },
              horizontalAlignment: "justify",
              verticalAlignment: "baseline"
            }
          });
          const popupTemplate = {
            title: "信息",
            content: [
              {
                type: "fields",
                fieldInfos: [
                  {
                    fieldName: "NAME",
                    label: "示范带"
                  },
                  {
                    fieldName: "AREA",
                    label: "县市区"
                  },
                  {
                    fieldName: "YEAR",
                    label: "建成时间"
                  }
                ]
              }
            ]
          };
          const xczx = new FeatureLayer({
            url: XCZX_url,
            id: "xczx",
            popupTemplate: popupTemplate,
            renderer: renderer
            //showLabels : true   //一定要设置为true
          });
          xczx.labelingInfo = [statesLabelClass];
          map.add(xczx);
        }
      );
    }
  }
};
</script>

<style>
@import url("https://js.arcgis.com/4.14/esri/themes/light/main.css");
/* http://172.20.89.68:5001/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/esri/themes/light/main.css */
/* http://192.168.0.200:9003/s/lc/libs/arcgis_js_v412_api/arcgis_js_api/library/4.12/esri/themes/light/main.css */
.xczx-centent #xczx_cententDiv {
  height: 100%;
}
.xczx-centent #xczxMap {
  height: 65%;
}
.xczx-centent #xczxMap svg {
  height: 110%;
  margin: auto;
  display: block;
}
</style>