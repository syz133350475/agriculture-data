<template>
  <!-- 龙头企业规模排行 -->
  <div id="gmphDiv">
    <div class="first_title">龙头企业规模排行</div>
    <div class="second_title">
      <span style="width:20%">排名</span>
      <span style="width:50%">企业名称</span>
      <span style="width:30%">营业价值(万元)</span>
      <ul class="content">
        <li v-for="item in company" :key="item.id">
          <span class="ul_span" style="width:20%">{{item.id}}</span>
          <span class="ul_span" style="width:50%">{{item.name}}</span>
          <span class="ul_span" style="width:30%">{{item.output}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: [
        {
          id: 1,
          name: "温州瓯特农开发专业合作社",
          output: 9854856.25
        },
        {
          id: 2,
          name: "温州创源农产品种植专业合...",
          output: 7854856.25
        },
        {
          id: 3,
          name: "温州哼力生态养殖有限公司",
          output: 6822818.05
        },
        {
          id: 4,
          name: "中国农业银行股份有限公司...",
          output: 5712546.0
        },
        {
          id: 5,
          name: "温州牧缘梅花鹿养殖场",
          output: 4754526.25
        }
      ]
    };
  },
  mounted() {},
  methods: {
    //获取文章数据
    gmphInit() {}
  }
};
</script>

<style>
#gmphDiv {
  height: 40%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 17px;
  margin: 10px 25px 10px 20px;
}
#gmphDiv .first_title {
  font-size: 24px;
  font-family: PingFang SC;
  font-weight: 800;
  line-height: 33px;
  color: rgba(51, 51, 51, 1);
}
#gmphDiv .second_title {
  width: 100%;
}
#gmphDiv .second_title span {
  display: inline-block;
  width: 30%;
  box-sizing: border-box;
  padding-left: 10px;
}
#gmphDiv .content ul li {
  width: 100%;
}

#gmphDiv .content .ul_span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 400;
  line-height: 20px;
  padding-top: 20px;
}
</style>