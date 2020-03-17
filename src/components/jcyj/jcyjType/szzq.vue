<template>
  <div id="szzqDiv">
    <div class="title" style="height:17%">
      <h3>生长周期监测</h3>
    </div>
    <div id="jpdDiv">
      <div class="border1"></div>
      <div class="border2"></div>
      <div class="border3"></div>
      <div class="border4"></div>
      <div id="szzq-centent">
        <div class="jibenff">
          <table class="jbxx-table" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td>学名</td>
                <td class="jiben-name">水稻</td>
                <td>别名</td>
                <td class="jiben-name">稻谷、谷子</td>
              </tr>
              <tr>
                <td>拉丁文名</td>
                <td class="jiben-name">Oryza sativa</td>
                <td>英文名</td>
                <td class="jiben-name">rice</td>
              </tr>
              <tr>
                <td>科</td>
                <td class="jiben-name">禾本科</td>
                <td>属</td>
                <td class="jiben-name">稻属</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3>生长周期（天）</h3>
        <el-steps :active="2" align-center finish-status="success">
          <el-step title="幼苗期" description=" ">
            <img
              width="100%"
              src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            />
          </el-step>
          <el-step title="生长期" description="距离下个节点20天"></el-step>
          <el-step title="抽穗期" description=" "></el-step>
          <el-step title="成熟期" description=" "></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.jcyj-centent #szzqDiv {
  height: 35%;
}
.jcyj-centent #szzqDiv #jpdDiv {
  height: 81%;
  background-color: rgba(0, 126, 52, 0.3);
  border: 1px solid #24ff78;
  border-radius: 22px;
  position: relative;
  top: 1%;
}
.jcyj-centent #szzqDiv #jpdDiv .border1 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -3px;
  left: -2px;
}
.jcyj-centent #szzqDiv #jpdDiv .border2 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  top: -2px;
  right: -3px;
  transform: rotate(90deg);
}
.jcyj-centent #szzqDiv #jpdDiv .border3 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -2px;
  left: -3px;
  transform: rotate(270deg);
}
.jcyj-centent #szzqDiv #jpdDiv .border4 {
  width: 40px;
  height: 40px;
  background-image: url(../../../assets/img/bk.png);
  background-size: 100%;
  position: absolute;
  bottom: -3px;
  right: -2px;
  transform: rotate(180deg);
}
.jcyj-centent #szzqDiv #jpdDiv .el-step__head.is-process {
  color: #ffb33e;
  border-color: #ffb33e;
}
.jcyj-centent #szzqDiv #jpdDiv .el-step__title {
  font-size: 14px;
}
.jcyj-centent #szzqDiv #jpdDiv .el-step__title.is-process {
  color: #ffb33e;
}
.jcyj-centent #szzqDiv #jpdDiv .el-step__description.is-process {
  color: #ffb33e;
}
.jcyj-centent #szzqDiv #jpdDiv .el-step.is-center .el-step__description {
  background-color: #057f53;
  border-radius: 4px;
  color: #fff;
}
.jcyj-centent #szzqDiv #jpdDiv .jibenff {
  height: 43%;
}
.jcyj-centent #szzqDiv #jpdDiv #szzq-centent h3 {
  font-size: 16px;
  font-weight: normal;
  margin-left: 2%;
}
.jcyj-centent #szzqDiv #jpdDiv .jibenff table {
  width: 96%;
  font-size: 14px;
  height: 100%;
  color: #fff;
  padding-left: 3%;
  padding-right: 1%;
  padding-top: 2%;
}
.jcyj-centent #szzqDiv #jpdDiv .jibenff table td {
  border-bottom: 1px dashed #05ab75;
  padding: 5px 5px;
}
.jcyj-centent #szzqDiv #jpdDiv .jiben-name {
  font-weight: bold;
  color: #4cffc6;
}
.jcyj-centent #szzqDiv .el-step.is-center .el-step__description {
  padding-left: 5px;
  padding-right: 5px;
}
</style>