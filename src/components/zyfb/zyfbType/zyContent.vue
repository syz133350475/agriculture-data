<template>
  <!-- 搜索框 -->
  <div id="search">
    <el-row class="autocomplete">
      <el-col :span="23" style="height: 5%;">
        <el-autocomplete
          class="inline-input"
          prefix-icon="el-icon-search"
          v-model="searchstate"
          :fetch-suggestions="querySearch"
          placeholder="请输入名称"
          :trigger-on-focus="false"
          @select="searchhandleSelect"
          clearable
        ></el-autocomplete>
      </el-col>
      <el-col :span="23" style="height: 94%;margin-top:1%;">
        <div id="searchDiv" v-show="isShow">
          <!-- 边框开始 -->
          <div class="border1"></div>
          <div class="border2" @click="closeDiv"></div>
          <div class="border3"></div>
          <div class="border4"></div>
          <!-- 边框结束 -->
          <!-- 内容 -->
          <div class="ny_name">
            <el-row>
              <el-col class="ny-image" :span="10">
                <el-image :src="src" :preview-src-list="srcList" :fit="fit">
                  <div slot="placeholder" class="image-slot">
                    图片加载中
                    <span class="dot">...</span>
                  </div>
                </el-image>
              </el-col>
              <el-col :span="14">
                <h3 class="ny-centent-name">平阳县家庭农场</h3>
                <p>企业地址：头上一片晴天，心中一个想念,头上一片晴天，心中一个想念</p>
                <p>所有人：张三</p>
                <p>种（养）植面积：30亩</p>
                <p>种（养）作物：水稻、西瓜、葡萄、水稻、西瓜、葡萄、水稻、西瓜、葡萄</p>
              </el-col>
            </el-row>
          </div>
          <!-- 视频监控 -->
          <div class="ny_name ny_video">
            <h3>视频监控</h3>
            <el-row>
              <el-col class="video-content" :span="12">
                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
              </el-col>
              <el-col class="video-content" :span="12">
                <img src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg" />
              </el-col>
            </el-row>
          </div>
          <!-- 经济状况 -->
          <div class="ny_name ny_jjzk">
            <h3>经济状况</h3>
            <el-row>
              <el-col class="zzy-content" :span="8">
                <p>产量（吨）</p>
                <h1>226.2</h1>
              </el-col>
              <el-col class="zzy-content" :span="8">
                <p>产值（万元）</p>
                <h1>83.6</h1>
              </el-col>
              <el-col class="zzy-content" :span="8">
                <p>总收入（万元）</p>
                <h1>105.3</h1>
              </el-col>
            </el-row>
            <h3>种（养）植农作物产量</h3>
            <el-row>
              <el-col class="zzy-content" :span="24">
                <p class="zz-name">水稻</p>
                <p class="zz-number">1000吨</p>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="70"></el-progress>
              </el-col>
              <el-col class="zzy-content" :span="24">
                <p class="zz-name">水稻</p>
                <p class="zz-number">1000吨</p>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="60"></el-progress>
              </el-col>
              <el-col class="zzy-content" :span="24">
                <p class="zz-name">水稻</p>
                <p class="zz-number">1000吨</p>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="40"></el-progress>
              </el-col>
              <el-col class="zzy-content" :span="24">
                <p class="zz-name">水稻</p>
                <p class="zz-number">1000吨</p>
                <el-progress :text-inside="true" :stroke-width="15" :percentage="80"></el-progress>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      restaurants: [],
      searchstate: "",
      isShow: false, //详情框默认隐藏
      src:
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg", //图片
      fit: "cover", //图片自适应方式
      srcList: [
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg"
      ] //大图预览
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    closeDiv() {
      this.isShow = false; //点击关闭按钮关闭
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号"
        },
        {
          value: "新旺角茶餐厅",
          address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
        },
        { value: "泷千家(天山西路店)", address: "天山西路438号" },
        {
          value: "胖仙女纸杯蛋糕（上海凌空店）",
          address: "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
        },
        { value: "贡茶", address: "上海市长宁区金钟路633号" },
        {
          value: "豪大大香鸡排超级奶爸",
          address: "上海市嘉定区曹安公路曹安路1685号"
        },
        {
          value: "茶芝兰（奶茶，手抓饼）",
          address: "上海市普陀区同普路1435号"
        },
        { value: "十二泷町", address: "上海市北翟路1444弄81号B幢-107" },
        { value: "星移浓缩咖啡", address: "上海市嘉定区新郁路817号" },
        { value: "阿姨奶茶/豪大大", address: "嘉定区曹安路1611号" },
        { value: "新麦甜四季甜品炸鸡", address: "嘉定区曹安公路2383弄55号" },
        {
          value: "Monica摩托主题咖啡店",
          address: "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F"
        },
        {
          value: "浮生若茶（凌空soho店）",
          address: "上海长宁区金钟路968号9号楼地下一层"
        },
        { value: "NONO JUICE  鲜榨果汁", address: "上海市长宁区天山西路119号" },
        { value: "CoCo都可(北新泾店）", address: "上海市长宁区仙霞西路" },
        {
          value: "快乐柠檬（神州智慧店）",
          address: "上海市长宁区天山西路567号1层R117号店铺"
        },
        {
          value: "Merci Paul cafe",
          address: "上海市普陀区光复西路丹巴路28弄6号楼819"
        },
        {
          value: "猫山王（西郊百联店）",
          address: "上海市长宁区仙霞西路88号第一层G05-F01-1-306"
        },
        { value: "枪会山", address: "上海市普陀区棕榈路" },
        { value: "纵食", address: "元丰天山花园(东门) 双流路267号" },
        { value: "钱记", address: "上海市长宁区天山西路" },
        { value: "壹杯加", address: "上海市长宁区通协路" },
        {
          value: "唦哇嘀咖",
          address: "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元"
        },
        { value: "爱茜茜里(西郊百联)", address: "长宁区仙霞西路88号1305室" },
        {
          value: "爱茜茜里(近铁广场)",
          address:
            "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺"
        },
        {
          value: "鲜果榨汁（金沙江路和美广店）",
          address: "普陀区金沙江路2239号金沙和美广场B1-10-6"
        },
        {
          value: "开心丽果（缤谷店）",
          address: "上海市长宁区威宁路天山路341号"
        },
        { value: "超级鸡车（丰庄路店）", address: "上海市嘉定区丰庄路240号" },
        { value: "妙生活果园（北新泾店）", address: "长宁区新渔路144号" },
        { value: "香宜度麻辣香锅", address: "长宁区淞虹路148号" },
        {
          value: "凡仔汉堡（老真北路店）",
          address: "上海市普陀区老真北路160号"
        },
        { value: "港式小铺", address: "上海市长宁区金钟路968号15楼15-105室" },
        { value: "蜀香源麻辣香锅（剑河路店）", address: "剑河路443-1" },
        { value: "北京饺子馆", address: "长宁区北新泾街道天山西路490-1号" },
        {
          value: "饭典*新简餐（凌空SOHO店）",
          address: "上海市长宁区金钟路968号9号楼地下一层9-83室"
        },
        {
          value: "焦耳·川式快餐（金钟路店）",
          address: "上海市金钟路633号地下一层甲部"
        },
        { value: "动力鸡车", address: "长宁区仙霞西路299弄3号101B" },
        { value: "浏阳蒸菜", address: "天山西路430号" },
        { value: "四海游龙（天山西路店）", address: "上海市长宁区天山西路" },
        {
          value: "樱花食堂（凌空店）",
          address: "上海市长宁区金钟路968号15楼15-105室"
        },
        { value: "壹分米客家传统调制米粉(天山店)", address: "天山西路428号" },
        {
          value: "福荣祥烧腊（平溪路店）",
          address: "上海市长宁区协和路福泉路255弄57-73号"
        },
        {
          value: "速记黄焖鸡米饭",
          address: "上海市长宁区北新泾街道金钟路180号1层01号摊位"
        },
        { value: "红辣椒麻辣烫", address: "上海市长宁区天山西路492号" },
        {
          value: "(小杨生煎)西郊百联餐厅",
          address: "长宁区仙霞西路88号百联2楼"
        },
        { value: "阳阳麻辣烫", address: "天山西路389号" },
        {
          value: "南拳妈妈龙虾盖浇饭",
          address: "普陀区金沙江路1699号鑫乐惠美食广场A13"
        }
      ];
    },
    searchhandleSelect(item) {
      if (!this.isShow) {
        this.isShow = true;
      }
      console.log(this.isShow);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.closeDiv(); //点击关闭按钮关闭
  }
};
</script>

<style>
#search {
  position: absolute;
  top: 5.7em;
  right: 0;
  width: 22%;
  height: 85%;
}
#search .el-autocomplete {
  display: block;
}
#search .el-input__inner {
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  color: #fff;
}
.el-autocomplete-suggestion {
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
}
.el-autocomplete-suggestion li,
.el-input__icon,
.el-image-viewer__close {
  color: #fff !important;
}
.el-autocomplete-suggestion li:hover,
.el-autocomplete-suggestion:active,
.el-autocomplete-suggestion li.highlighted {
  /*color: rgb(255, 208, 75);*/
  background-color: rgb(0, 126, 52) !important;
}
#search input[type="text"]::-webkit-input-placeholder {
  color: #fff;
}
#search input[type="text"]:-moz-placeholder {
  color: #fff;
}
#search input[type="text"]::-moz-placeholder {
  color: #fff;
}
#search input[type="text"]:-ms-input-placeholder {
  color: #fff;
}
#searchDiv {
  width: 100%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
#searchDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
#searchDiv .border2 {
  width: 45px;
  height: 40px;
  background-image: url(../../../assets/img/close.png);
  background-size: 60px;
  position: absolute;
  top: -14px;
  right: -5px;
  cursor: pointer;
}
#searchDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
#searchDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
#searchDiv .ny_name {
  width: 96%;
  height: 21%;
  background-color: rgba(0, 126, 52, 0.6);
  border-radius: 17px;
  margin: auto;
  margin-top: 2%;
  color: #fff;
}
#searchDiv .ny_name p {
  font-size: 14px;
  margin-top: 0.3em;
  margin-bottom: 0.3em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ny-image {
  height: 100%;
  padding: 3%;
}
.ny-centent-name {
  margin-left: 0 !important;
  margin-top: 5%;
  margin-bottom: 0.3em;
}
#searchDiv .ny_name h3 {
  margin-left: 3%;
  color: #72fffc;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 45px;
}
.ny_video {
  height: 25% !important;
}
.video-content {
  padding: 3%;
  padding-top: 0%;
  padding-right: 1.5%;
}
.video-content:last-child {
  padding-left: 1.5%;
}
.video-content img {
  width: 100%;
  height: 70%;
}
.ny_jjzk {
  height: 48% !important;
  margin-bottom: 2% !important;
}
.ny_jjzk p {
  color: #e9ffd0;
  /*text-align: center;*/
}
.ny_jjzk h1 {
  margin-top: 0;
  margin-bottom: 0;
  /*text-align: center;*/
}
.zz-name {
  float: left;
}
.zz-number {
  float: right;
}
.zzy-content {
  padding: 2%;
  padding-top: 0%;
}
</style>
