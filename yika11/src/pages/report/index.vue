<template>
  <div class="mainWrap">
    <div class="bg">
      <div>
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box nav" type="search" size="14"></icon>
             <div class="grid">
        <a  class="weui-grid">
          <p class="weui-grid__label">10万以下</p>
        </a>
        <a  class="weui-grid">
          <p class="weui-grid__label">20万以下</p>
        </a>
        <a  class="weui-grid">
          <p class="weui-grid__label">30万以上</p>
    </a>
          <input
            type="text"
            class="weui-search-bar__input"
            placeholder="高级搜索"
            v-model="inputVal"
            :focus="inputShowed"
            @input="inputTyping"
          >
          <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
            <icon type="clear" size="14"></icon>
          </div>
        </div>
      </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block" >
        </div>

        <div class="weui-cell__bd">
          <a  ><p style="font-size: 16px;">大众 辉昂 两驱商务版</p></a>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block"
          >
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block"
          >
        </div>
        <div class="weui-cell__bd">
          <p style="font-size: 14px; hight:4px;float:left;weight:5px ">奔驰</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block"
          >
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block"
          >
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
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
  },
    handleclick() {
      wx.navigateTo({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../car/main",
        
      });
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

.nav {
  float: left;
}
</style>
