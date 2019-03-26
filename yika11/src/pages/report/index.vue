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
        <a  class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img style="width:20px;height:20px;" src="/static/images/benchi.jpg">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
            <button class="weui-media-box__desc">关注</button>
            <button class="weui-media-box__desc">预定热线</button>
          </div>
        </a>
         <a  class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img style="width:20px;height:20px;" src="/static/images/benchi.jpg">
          </div>
          <div class="weui-media-box__bd">
            <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
            <button class="weui-media-box__desc">关注</button>
            <button class="weui-media-box__desc">预定热线</button>
          </div>
        </a>
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

.nav{
 float: left;
}
</style>
