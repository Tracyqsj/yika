<template>
  <div class="mainWrap">
    <div class="bg">
     <div>
       <img src="/static/images/banner1.jpg" alt="">
        <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
         <h4 class="weui-media-box__title">价格</h4>
          <h4 class="weui-media-box__title">大众 辉昂 2018款 改款 380TSI 两驱商务版</h4>
           <h4 class="weui-media-box__title">详细参数</h4>
            <button class="weui-media-box__desc">咨询</button>
               <button class="weui-media-box__desc">关注</button>
        
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
