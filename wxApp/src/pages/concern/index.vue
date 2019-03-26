<template>
  <div class="mainWrap">
    <div class="bg">
      <a class="weui-media-box weui-media-box_appmsg">
        <div class="weui-media-box__hd">
          <img style="width:40px;height:40px;" src="/static/images/benchi.jpg">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
          <button class="weui-media-box__desc">预约看车</button>
          <button class="weui-media-box__desc" @click="handleclick">详情</button>
        </div>
      </a>
      
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__hd">
          <img style="width:40px;height:40px;" src="/static/images/benchi.jpg">
        </div>
        <div class="weui-cell__bd">
          <p>大众</p>
          <div class="weui-cell__ft">辉昂 2018款 改款 380TSI 两驱商务版</div>
        </div>
      </a>
    </div>
    <div class="mainContent">
      <div class="userBar">
        <div class="userAvatar"></div>
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
  onLoad() {}
};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
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

.mainContent {
  position: absolute;
  z-index: 2;
  background: transparent;
  width: 100%;
  height: 100vh;
  color: #fff;
  /* background-size: 50%,50%;
  background: url('https://zw-open-files.oss-cn-shanghai.aliyuncs.com/images/report-bg.png')  center  no-repeat; */
}

.userBar {
  width: 339px;
  height: 156px;

  margin: 0 0 10px 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.userAvatar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  position: relative;
}
.userAvatar p {
  color: #fff;
  margin-right: 20px;
}
.getUserInfoBtn {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 44px;
  z-index: 5;
  background: transparent;
}
.getUserInfoBtn::after {
  border: none;
}
.userAvatar img {
  width: 44px;
  height: 44px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 50%;
}
.userAvatar p {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  letter-spacing: 0;
}
.userBar_2 {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 340px;
}
.userBar_2 img {
  width: 30px;
  height: 29px;
  margin-right: 10px;
}
.userBar_2 > div {
  display: flex;
  align-items: center;
}
.userBar_2 p {
  font-size: 16px;
  color: rgba(4, 7, 43, 0.65);
}

.machine-list {
  padding: 0 15px 0;
}
.history {
  width: 100%;
  height: 44px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
  text-align: left;
  line-height: 44px;
  font-size: 16px;
  color: rgba(4, 7, 43, 0.87);
  margin-bottom: 5px;
  padding: 0 25px 0;
}
.machine-list > div {
  border: 1px solid #fff8f8;
  box-shadow: 0 2px 6px 0 rgba(196, 203, 220, 0.4);
  border-radius: 8px;
  width: 345px;
  height: 66px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.list-top,
.list-bottom {
  display: flex;
  align-items: center;
  padding: 0 10px;
}
.list-top {
  justify-content: space-between;
}
.list-top-1 {
  font-size: 14px;
  color: rgba(4, 7, 43, 0.87);
  letter-spacing: 0;
}
.list-top-2 {
  font-size: 12px;
  color: rgba(4, 7, 43, 0.38);
  letter-spacing: 0;
  text-align: center;
}
.list-bottom {
  justify-content: space-between;
}
.list-bottom p {
  font-size: 12px;
  color: rgba(4, 7, 43, 0.38);
  letter-spacing: 0;
  text-align: center;
}
.list-bottom-1 {
  margin-right: 30px;
}
.list-bottom > span {
  font-family: Arial-Black;
  font-size: 18px;
  color: rgba(4, 7, 43, 0.65);
  letter-spacing: 0;
  text-align: center;
  font-weight: bold;
}

.scanCode {
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.scanCode img {
  width: 60px;
  height: 60px;
}
</style>
