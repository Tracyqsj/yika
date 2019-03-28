<template>
  <div class="mainWrap">
    <div class="bg">
      <div>
        <div class="weui-search-bar__box">
          <!-- <div class="nav">
            shanghai
          </div> -->
   
          <icon class="weui-icon-search_in-box nav" type="search" size="14"></icon>
          <input
            type="text"
            class="weui-search-bar__input"
            placeholder="搜索"
            v-model="inputVal"
            :focus="inputShowed"
            @input="inputTyping"
          >
          <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
      </div>
      <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="/static/images/benchi.jpg" style="width: 70px;height: 60px;display: block"/>
          </div>
          
          <div class="weui-cell__bd">
              <p style="font-size: 16px;">大众 辉昂 两驱商务版 <button class="weui-btn weui-btn_mini weui-btn_primary" style="margin-top:2px;float:right;">加关注</button></p>
              <p style="font-size: 13px;color: #888888;">摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</p>
          </div>
      </div>
      <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="/static/images/benchi.jpg" style="width: 70px;height: 60px;display: block"/>
          </div>
          
          <div class="weui-cell__bd">
              <p style="font-size: 16px;">大众 辉昂 两驱商务版 <button class="weui-btn weui-btn_mini weui-btn_primary" style="margin-top:2px;float:right;">加关注</button></p>
              <p style="font-size: 13px;color: #888888;">摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</p>
          </div>
      </div>
      <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="/static/images/benchi.jpg" style="width: 70px;height: 60px;display: block"/>
          </div>
          
          <div class="weui-cell__bd">
              <p style="font-size: 16px;">大众 辉昂 两驱商务版 <button class="weui-btn weui-btn_mini weui-btn_primary" style="margin-top:2px;float:right;">加关注</button></p>
              <p style="font-size: 13px;color: #888888;">摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</p>
          </div>
      </div>
      <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="/static/images/benchi.jpg" style="width: 70px;height: 60px;display: block"/>
          </div>
          
          <div class="weui-cell__bd">
              <p style="font-size: 16px;">大众 辉昂 两驱商务版 <button class="weui-btn weui-btn_mini weui-btn_primary" style="margin-top:2px;float:right;">加关注</button></p>
              <p style="font-size: 13px;color: #888888;">摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</p>
          </div>
      </div>
      <div class="weui-cell">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
              <img src="/static/images/benchi.jpg" style="width: 70px;height: 60px;display: block"/>
          </div>
          
          <div class="weui-cell__bd">
              <p style="font-size: 16px;">大众 辉昂 两驱商务版 <button class="weui-btn weui-btn_mini weui-btn_primary" style="margin-top:2px;float:right;">加关注</button></p>
              <p style="font-size: 13px;color: #888888;">摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</p>
          </div>
      </div>
        
        
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      userInfo: {},
      unionID: "",
      comInfo: {},
      openID: "",
      compID: ""
    };
  },
  methods: {},
  created() {},
  onLoad() {
    // this.userInfo = getStorage('userInfo');
    // this.comInfo = getStorage('registerInfo');
    // this.hostname = this.$store.state.url;
    // this.scan()
  }
};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
  /* position: fixed; */
}
.bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
}
.bg img {
  width: 100%;
  height: 100%;
}

.nav{
 float: left;
}
</style>
