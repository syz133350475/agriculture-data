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
  XCZX_url,
  td_dt_url,
  ARCGIS_NEW_API_URL
} from "@/assets/config/config.js";
export default {
  mounted: function() {
    this.addMap(); //地图
    this.doMapPopup(); //弹出项目
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
        ARCGIS_NEW_API_URL
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
          const that = this;
          const baseLayer = new VectorTileLayer({
            url: td_dt_url
          });
          that.map = new Map();
          that.view = new MapView({
            container: "xczxMap",
            map: that.map,
            zoom: 9,
            center: [120.695, 27.997]
          });
          that.map.add(baseLayer);

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
          that.map.add(xczx);
        }
      );
    },
    //项目弹窗
    doMapPopup() {
      const that = this;
      this.$bus.$on("mapPoint", function({ attributes, geometry }) {
        let centerPointX = null;
        let centerPointY = null;
        let rings = geometry.rings[0];
        let chu = rings.length;
        for (let i = 0; i < rings.length; i++) {
          // rings[i]
          centerPointX = centerPointX + rings[i][0];
          centerPointY = centerPointY + rings[i][1];
        }

        const popupTemplate = `<div class="map_item">
                              <div>
                               <p>项目名称:${attributes.NAME_1}</p>
                              </div>
                              <div>
                                <p>所属示范带:${attributes.sssfd}</p>
                              </div>
                              <div>
                                <p>地址:${attributes.ADDRESS_1}</p>
                              </div>
                              <div>
                                <p>建设时间:${attributes.jssj}年</p>
                              </div>
                            </div>`;

        that.view.goTo({
          zoom: 13,
          center: [centerPointX / chu, centerPointY / chu]
        });

        that.view.popup.open({
          content: popupTemplate,
          location: { x: centerPointX / chu, y: centerPointY / chu }
        });
      });
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
.xczx-centent #xczxMap .esri-popup__footer .esri-popup__footer--has-actions,
.esri-popup__footer,
.esri-popup__footer--has-actions {
  display: none;
}

.xczx-centent #xczxMap .esri-popup__header-title:hover {
  background: none;
}

#xczxMap .map_item {
  color: #ffffff;
}
#xczxMap .esri-popup__content {
  color: #ffffff;
}
</style>