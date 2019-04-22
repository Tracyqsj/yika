<template>
  <div class="page">
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <block v-for="(item, index) in imgs" :key="index">
        <swiper-item>
          <img :src="item" @click="bannerClickHandle(index)">
        </swiper-item>
      </block>
    </swiper>
    <mp-loading :showLoading="isShowLoading" loadingText="加载中..." mask="true"></mp-loading>
    <div class="grid">
      <a class="weui-grid" @click="oneBrandClickHandle(0)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/biek.png" alt>
          <p class="weui-grid__label">别克</p>
        </div>
      </a>
      <a class="weui-grid" @click="oneBrandClickHandle(1)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/hanma.png" alt>
          <p class="weui-grid__label">悍马</p>
        </div>
      </a>
      <a class="weui-grid" @click="oneBrandClickHandle(2)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/benchi.png" alt>
          <p class="weui-grid__label">奔驰</p>
        </div>
      </a>
      <a class="weui-grid" @click="oneBrandClickHandle(3)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/falali.png" alt>
          <p class="weui-grid__label">法拉利</p>
        </div>
      </a>
      <a class="weui-grid" @click="oneBrandClickHandle(4)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/fengtian.png" alt>
          <p class="weui-grid__label">丰田</p>
        </div>
      </a>
      <a class="weui-grid" @click="oneBrandClickHandle(5)">
        <div class="weui-grid__icon myicon" >
          <img src="https://2aclgika1.i-plc.cn/static/images/qirui.png" alt>
          <p class="weui-grid__label">奇瑞</p>
        </div>
      </a>
    </div>
 
    <button class="weui-btn tuijian" @click="handleclick">今日推荐</button>
    <div class="weui-cell" v-for="(item,index) in result.data" @click="tuijianClick(index)">
      <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
        <img :src="item.img" style="width:70px;display: block">
      </div>
      <div class="weui-cell__bd">
        <p style="font-size: 16px;">{{item.title}}</p>
        <p style="font-size: 13px;color: #888888;">{{item.content}}</p>
      </div>
    </div>

    <button class="weui-btn weui-btn_default tuijian" @click="handleclick">查看更多</button>
  </div>
</template>

<script>
import mpLoading from 'mpvue-weui/src/loading';
export default {
  components: {
    mpLoading
  },
  data() {
    return {
      isShowLoading: false,
      imgs: [
        "https://2aclgika1.i-plc.cn/static/images/biek.png",
        "/static/images/banner2.jpg",
        "/static/images/banner3.jpg",
        "/static/images/banner4.jpg"
      ],
      result:{
        data:[
          {
            img : '/static/images/benchi-article.jpg',
            title: '全系进口的奔驰，油耗5毛，爆胎照样跑，售价低至17.65万',
            content: '开大奔，坐宝马”是大多数男士的梦想，也是大多数男士成功的标志。'

          },{
            img : '/static/images/article1.jpg',
            title: '智能网联汽车测试示范区发展研究',
            content: '摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》'
          }
        ]
      }
    };
  },

  methods: {
    //这是定义函数的地方。只是定义，但不会立即被调用，需要手动去调用，下面函数我不删掉，留给你做示例

    tuijianClick(index) {
      wx.navigateTo({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../article/main?banner="+index
      });
    },
    bannerClickHandle(index){
      wx.navigateTo({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../article/main?index="+index
      });
    },
    oneBrandClickHandle(index){
      wx.navigateTo({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../onebrand/main?index="+index
      });
    },
    handleclick(){

      this.isShowLoading = true;

      let self = this;
      setTimeout(function () {
        self.result.data.push(
          {
            img : '/static/images/benchi-article.jpg',
            title: '全系进口的奔驰，油耗5毛，爆胎照样跑，售价低至17.65万',
            content: '开大奔，坐宝马”是大多数男士的梦想，也是大多数男士成功的标志。'

          }
        );
        self.result.data.push(
          {
            img : '/static/images/article1.jpg',
            title: '智能网联汽车测试示范区发展研究',
            content: '摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》'
          }
        );
        self.isShowLoading = false;
      }, 500)

    }
  },
  mounted() {
    //这个是页面刚加载完成之后的。要触发的代码，比如，下面这行就是手动去调用前面的getMachineData方法
    //this.getMachineData();
  },
  onLoad(options) {
    ///这个也是页面刚加载完成之后的。要触发的代码，和上面的基本相同，除了要接受上个页面的传参的时候的情况，比如下面的代码就是获取上一个页面带过来的参数

    if (options.hasOwnProperty("scene")) {
      var scene = options.scene;
      this.hostname = scene;
      wx.redirectTo({ url: "../worker-approve/main" });
    }

    //setStorage('hostname',this.hostname);
    //this.getMachineData();
  },
  onShow() {
    //这个是页面显示的时候，调用的，每次tab切换，都会调用一次，用到的地方不多
    //this.getMachineData();
  }
};
</script>

<style scoped>
img {
  width: 50px;
  height: 35px;
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
.weui-grid {
  dispaly: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.myicon {
  width: 50px;
  height: 50px;
}
.tuijian {
  color: rgb(248, 19, 19);
  font-size: 14px;
  height: 35px;
}
</style>
