<template>
  <div class="page">
    <div>
      <img src="/static/images/logo.jpg" alt>
      <p>宜咔购车</p>
    </div>
    <button class="loginBtn" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">登录/注册</button>
  </div>
</template>

<script>
import { getStorage, openAlert, setStorage } from "@/utils/index";
import { getWXLogin, checkUser } from "@/http/api";

export default {
  data() {
    return {
      userInfo: {},
      hostname: "wx-demo",
      sensitiveData: {},
      unionID: "",
      comInfo: {},
      openID: "",
      compID: "",
      scene: ""
    };
  },

  methods: {
    bindGetUserInfo: function(e) {
      console.log(e);
      this.userInfo = e.mp.detail.userInfo;
      this.userAvatarUrl = e.mp.detail.userInfo.avatarUrl;
      this.userNickName = e.mp.detail.userInfo.nickName;
      this.sensitiveData.encryptedData = e.mp.detail.encryptedData; //保存敏感信息
      this.sensitiveData.iv = e.mp.detail.iv;
      this.sensitiveData.signature = e.mp.detail.signature;

      //缓存个人用户信息
      setStorage("userInfo", this.userInfo);
      wx.switchTab({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../market/main"
      });
    },
    login() {
      // var _hostname  = this.hostname;
      wx.showLoading({
        title: "加载中"
      });
      wx.login({
        success: res => {
          console.log(res);
          if (res.code) {
            //发起网络请求
            console.log(this.hostname, res.code);
            getWXLogin({ code: res.code }, this.hostname).then(res => {
              //this.unionID = res.data.data.openid;
              //console.log(res);
              wx.hideLoading();
            });
          } else {
            wx.hideLoading();
            console.log("登录失败！" + res.errMsg);
          }
        }
      });
    },
    increment(url) {
      this.$store.commit({
        type: "increment",
        url: url
      });
    }
  },
  created() {
    //this.login();
  },

  onLoad(options) {
    if (options.hasOwnProperty("scene")) {
      this.scene = options.scene;
    }

    if (getStorage("registerInfo")) {
      this.increment(getStorage("registerInfo").compIndex);
      wx.switchTab({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../index/main"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  > div {
    margin: 91px auto 0;
    text-align: center;
    img {
      width: 150px;
      height: 150px;
      margin-bottom: 15px;
    }
    p {
      font-size: 20px;
      color: rgba(53, 53, 53, 1);
      line-height: 20px;
    }
  }
}
.loginBtn {
  width: 171px;
  height: 49px;
  background: rgb(0, 251, 96);
  border-radius: 25px;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 25px;
  display: flex;
  align-items: center;
  font-family: PingFangSC-Regular;
  justify-content: center;
  letter-spacing: 2px;
  text-indent: 2px;
  margin-top: 60px;
}
</style>
