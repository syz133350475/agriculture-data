<template>
  <div id="xczx_videoDiv">
    <div class="title">
      <h3>{{bandName}}</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <!-- 视频 -->
      <!-- <el-row class="nyy-viedo-centent">
        <el-col class="video-content" :span="12">
          <img
            style="height:98%;margin-top: 4%;"
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          />
        </el-col>
      </el-row>-->
      <el-carousel
        height="800px"
        :autoplay="false"
        ref="carousel"
        @change="filterItemBySFD(bandName)"
      >
        <el-carousel-item
          v-for="(band) in boutique_map_band"
          :key="band.OBJECTID"
          :name="band['attributes']['xmname']"
        >
          <div class="text">
            <header>基本概况</header>
            <div>
              <div class="video">
                <video
                  :src="sfdVideo ? sfdVideo : ''"
                  muted
                  autoplay
                  controls
                  loop
                >your browser does not support the video tag</video>
                <div>项目与2020年6月建成</div>
              </div>
              <ul class="text_ul">
                <li>
                  <p>项目名称</p>
                  <p>{{band['attributes']['xmname']}}</p>
                </li>
                <li>
                  <p>投资总额</p>
                  <p>{{band['attributes']['tz']?band['attributes']['tz']:'1233万元'}}</p>
                </li>
                <li>
                  <p>长度及范围</p>
                  <p>{{band['attributes']['cdfw']?band['attributes']['cdfw']:'200km'}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="data">
            <header>投资及效益</header>
            <div>
              <div>
                <header>实现投资-2019年</header>
                <div>
                  <div
                    class="blue"
                  >{{band['attributes']['tz2019']?band['attributes']['tz2019']:'10.4亿元'}}</div>
                  <div>
                    <span>同比增长</span>
                    <span>+{{band['attributes']['tz2019zz']?band['attributes']['tz2019zz']:'18.26%%'}}</span>
                  </div>
                </div>
              </div>
              <div>
                <header>产出效益-2019年</header>
                <div>
                  <div
                    class="green"
                  >{{band['attributes']['xy2019']?band['attributes']['xy2019']:'12.9亿元'}}</div>
                  <div>
                    <span>同比增长</span>
                    <span>+{{band['attributes']['xy2019zz']?band['attributes']['xy2019zz']:'65.21%'}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="project">
            <header>精品项目</header>
            <ul class="projectList">
              <li
                v-for="(item) in itemData"
                :key="item['attributes']['OBJECTID']"
                @click="goMapPoint(item)"
              >
                <img v-if="item['attributes']['img']" :src="item['attributes']['img'][0]" />
                <div>
                  <header>
                    <i>{{item['attributes']['NAME_1']}}</i>
                    <span class="ing">建设中</span>
                  </header>
                  <p>投资金额：255万元</p>
                  <p>{{item['attributes']['SUMMARY_1']}}</p>
                </div>
              </li>
            </ul>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { projectData } from "../../../../public/data/img_data";
import { sfdData } from "../../../../public/data/img_sfd_data";

export default {
  data() {
    return {
      sfd: {},
      itemData: [],
      bandName: "",
      projectData, //图片
      sfdData,
      OBJECTID: "",
      sfdVideo: ""
    };
  },
  created() {},
  mounted() {
    //接受乡村振兴示范带建设的传值
    this.findProject();
  },
  watch: {
    sfdVideo() {
      return this.sfdVideo;
    },
    boutique_map_band: {
      handler(n, o) {
        return this.boutique_map_band;
      },
      deep: true
    },
    bandName(n, o) {
      // return this.bandName;
      this.findProject();
      return this.bandName;
    },
    itemData: {
      handler(n, o) {
        return this.itemData;
      },
      deep: true
    }
  },
  computed: {
    ...mapState({
      boutique_map_item: state => state.boutique_map_item,
      boutique_map_band: state => state.boutique_map_band
      // sfd_picture:state=>state.sfd_picture,
      // item_pictur:state=>state.item_pictur
    })
  },
  methods: {
    goMapPoint(item) {
      console.log("item", item);
      this.$bus.$emit("mapPoint", item);
    },
    //接受列表的值
    findProject() {
      const that = this;
      this.$bus.$on("goProject", function(obj) {
        that.bandName = obj.xmname;
        that.OBJECTID = obj.OBJECTID;
      });
      this.$refs.carousel.setActiveItem(that.bandName);
    },
    //通过示范带找到相应的项目
    filterItemBySFD(xmname) {
      this.sfdVideo = sfdData[xmname].videos[0];
      this.bandName = xmname;
      let kk = this.boutique_map_item.filter(
        item => item.attributes.sssfd === xmname
      );
      const ff = this.projectData;
      // let name=itemData.attributes.NAME_1
      kk.forEach(item => {
        for (let key in ff) {
          if (key === item.attributes.NAME_1) {
            item.attributes.img = [];
            ff[key].nowImgs.map(element => {
              item.attributes.img.push(element);
            });
          }
        }
      });
      this.itemData = kk;

      console.log("this.itemData13131", this.itemData);
    },
    swapArr(arr) {
      let index = 0;
      this.boutique_map_band.forEach(element => {
        index++;
        if (element.attributes.xmname === "山水雁楠跨区域精品带") {
          return;
        }
      });
      arr[0] = arr.splice(index, 1, arr[0])[0];
      return arr;
    }
  }
};
</script>

<style lang="less">
.xczx-centent #xczx_videoDiv {
  height: 100%;
}
.xczx-centent #xczx_videoDiv #jpdDiv {
  height: 92%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.xczx-centent #xczx_videoDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.xczx-centent #xczx_videoDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.xczx-centent #xczx_videoDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.xczx-centent #xczx_videoDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}

#jpdDiv .el-carousel__indicators--horizontal {
  display: none !important;
}
#jpdDiv header {
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  line-height: 30px;
  height: 30px;
  color: #72fffc;
  position: relative;
  box-sizing: border-box;
  padding-left: 6px;
  width: max-content;
}

#jpdDiv .text .video {
  width: 96%;
  margin: auto;
  height: 170px;
  overflow: hidden;
  border-radius: 12px;
  background-color: rgba(0, 0, 0, 1);
  position: relative;
  box-shadow: 0px -5px 15px 0px rgba(0, 0, 0, 0.45) inset;
  margin-bottom: 6px;
}

#jpdDiv .text .video > video {
  height: 100%;
  width: 100%;
}

#jpdDiv .text .text_ul {
  list-style: none;
}
#jpdDiv .text .text_ul li {
  text-align: left;
}
#jpdDiv .text .text_ul li p {
  margin: 2px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#jpdDiv .text .text_ul li p:first-child {
  display: inline-block;
  padding: 0 6px;
  height: 24px;
  color: #72fffc;
}

#jpdDiv .text .text_ul li p:last-child {
  color: rgb(255, 255, 255);
  padding: 0 8px;
  line-height: 24px;
}
// > div {
//   position: absolute;
//   bottom: 0;
//   left: 20px;
//   right: 0px;
//   line-height: 30px;
//   text-align: left;
//   color: #fff;
// }

.data {
  display: block;
  border: 1pt rgba(146, 199, 149, 1) dashed;
  border-left: 0;
  border-right: 0;
  padding: 10px 0;
  > div {
    > div:last-child {
      border-right: 0;
      padding-left: 16px;
    }
    > div {
      vertical-align: top;
      text-align: left;
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      border-right: 1pt rgba(146, 199, 149, 1) dashed;
      header {
        font-size: 18px;
        height: 36px;
        line-height: 36px;
        font-weight: bold;
      }
      > div {
        > div {
          display: inline-block;
          text-align: left;
          height: 60px;
          line-height: 40px;
          vertical-align: top;
        }
        .blue {
          color: rgba(37, 151, 248, 1);
          padding-left: 4px;
        }
        .green {
          color: rgba(248, 118, 37, 1);
        }
        > div:first-child {
          width: 110px;
          font-size: 24px;
          font-family: Tahoma;
        }
        > div:last-child {
          width: 60px;
          line-height: unset;
          box-sizing: border-box;
          > span {
            display: inline-block;
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-size: 12px;
          }
          > span:first-child {
            color: rgba(153, 153, 153, 1);
          }
          > span:last-child {
            color: rgba(17, 17, 17, 1);
          }
        }
      }
    }
  }
}

.project {
  flex: 1;
  // max-height: 200px;
  height: 100%;
  // overflow-y: auto;
  .projectList::-webkit-scrollbar {
    display: none;
  }
  .projectList {
    list-style: none;
    height: 100%;
    flex: 1;
    overflow-y: auto;
    > li {
      box-sizing: border-box;
      padding: 10px 0;
      display: flex;
      flex-direction: unset;
      font-size: 14px;
      cursor: pointer;
      > img {
        width: 140px;
        height: 100px;
        // width: 100%;
        border-radius: 20px;
        padding-left:10px ;
        // overflow: hidden;
      }
      > div {
        text-align: left;
        box-sizing: border-box;
        padding-left: 10px;
        line-height: 24px;
        header {
          height: 24px;
          * {
            display: inline-block;
            font-size: 16px;
            vertical-align: top;
            height: 24px;
            font-style: normal;
          }
          span {
            margin-left: 16px;
            padding: 0 6px;
            color: rgba(26, 147, 74, 1);
            background-color: rgba(26, 147, 74, 0.1);
            border-radius: 8px;
          }
        }
        > p:nth-child(2) {
          margin: auto;
          color: rgb(248, 173, 37);
        }
        > p:last-child {
          color: rgb(255, 255, 255);
          width: 280px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
}
</style>