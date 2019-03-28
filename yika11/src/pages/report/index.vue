<template>
  <div class="mainWrap">
    <mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @confirm="confirm"></mp-searchbar>
      <div class="grid">
        <div class="weui-grid" @click="confirm">
          <p class="weui-grid__label">20万以下</p>
        </div>
        <div class="weui-grid" @click="confirm">
          <p class="weui-grid__label">20万-50万</p>
        </div>
        <div class="weui-grid" @click="confirm">
          <p class="weui-grid__label">50万以上</p>
        </div>
      </div>


    <mp-loading :showLoading="isShowLoading" loadingText="加载中..." mask="true"></mp-loading>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block">
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block">
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block">
        </div>
        <div class="weui-cell__bd">
          <p style="font-size: 16px;">奔驰</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block">
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://2aclgika1.i-plc.cn/static/images/benchi.png"
            style="width: 70px;height: 60px;display: block">
        </div>

        <div class="weui-cell__bd">
          <p style="font-size: 16px;">大众 辉昂 两驱商务版</p>
        </div>
      </div>


  </div>
</template>

<script>
  import mpSearchbar from 'mpvue-weui/src/searchbar';
  import mpLoading from 'mpvue-weui/src/loading';
  export default {
    components: {
      mpSearchbar,
      mpLoading
    },
  data() {
    return {
      inputValue: '',
      placeholder: '搜一下',
      isShowLoading: false
    };
  },
  methods: {
    confirm(){
      this.isShowLoading = true;

      let self = this;
      setTimeout(function () {
        self.isShowLoading = false;
      }, 500)


    },

    handleclick() {
      wx.navigateTo({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../car/main",

      });
    }
  },
  created() {},
  onLoad() {

  }

};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
}

</style>
