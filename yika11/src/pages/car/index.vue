<template>
  <div class="mainWrap">
    <div class="bg">
     <div>
       <img src="https://2aclgika1.i-plc.cn/static/images/biek.png" style="width:50px;height:50px;">
        <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
         <h4 class="weui-media-box__title">价格</h4>
         <mpRate rateValue=3 ></mpRate>
         <img src="https://2aclgika1.i-plc.cn/static/images/biek.png" alt="">
          <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
           <h4 class="weui-media-box__title">详细参数</h4>
            <button class="weui-media-box__desc">咨询</button>
               <button class="weui-media-box__desc">关注</button>
        
     </div>
    </div>
  </div>
</template>

<script>
import mpRate from 'mpvue-weui/src/rate';
export default {
  components: {
    mpRate,
  },
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
