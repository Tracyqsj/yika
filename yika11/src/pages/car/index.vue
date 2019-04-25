<template>
  <div class="mainWrap">

    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <block v-for="(item, index) in imgs" :key="index">
        <swiper-item>
          <img :src="item">
        </swiper-item>
      </block>
    </swiper>

    <div style="padding: 10px 30px 10px 30px;">
      <div style="font-size: 16px;font-weight: bold">
        品牌：奔驰
      </div>
      <div style="font-size: 14px;">35.58-52.88万</div>
      <mpRate rateValue=3 rateClass="myrate"></mpRate>

      <div style="margin-top: 10px">
         <div>
           <span style="color: #999999;font-size: 14px">级　别:</span>
           <span style="font-size: 14px;margin-left: 10px">中型车</span>
         </div>
        <div>
          <span style="color: #999999;font-size: 14px">油　耗:</span>
          <span style="font-size: 14px;margin-left: 10px">5.8L/100km</span>
        </div>
        <div>
          <span style="color: #999999;font-size: 14px">保　修:</span>
          <span style="font-size: 14px;margin-left: 10px">3年或10万公里</span>
          <span>与同价位车(35-52万)对比       安全优秀  配置优秀  操控一般</span>
        </div>
        <div>
          <img src=" /static/images/bcxq.png">
        </div>
      </div>
    </div>
    <mpToast type="success" v-model="showToast" content="添加心愿成功"></mpToast>
    <div class="footer">
      <mpButton type="warning" size="large" btnClass="mybutton" @click="likeCar">加心愿</mpButton>
      <mpButton type="primary" size="large" btnClass="mybutton">咨询</mpButton>
    </div>


  </div>
</template>

<script>
import mpRate from 'mpvue-weui/src/rate';
import mpButton from 'mpvue-weui/src/button';
import mpToast from 'mpvue-weui/src/toast';
export default {
  components: {
    mpRate,
    mpButton,
    mpToast
  },
  data() {
    return {
      showToast:false,
      imgs: [
        "/static/images/bc.jpg",
        "/static/images/benchi-article.jpg",
        // "/static/images/banner3.jpg",
        // "/static/images/banner4.jpg"
      ]
    };
  },
  methods: {
    likeCar(e){
      this.showToast = true;
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
  position: fixed;
}
.swiper {
  width: 100%;
  height: 150px;
  z-index: 1;
}
.swiper img {
  width: 100%;
  height: 100%;
}
  .footer{
    position: fixed;
    bottom: 0;
    width: 100vw;
  }

</style>
