<template>
  <div class="page">
    <!-- 这是写html的地方，记住外层只有一个div-->
    <div class="weui-search-bar">
      <div class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
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
        <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
          <icon class="weui-icon-search" type="search" size="14"></icon>
          <div class="weui-search-bar__text">搜索</div>
        </label>
      </div>
      <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
    </div>

    <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
      <navigator url class="weui-cell" hover-class="weui-cell_active">
        <div class="weui-cell__bd">
          <div>实时搜索文本</div>
        </div>
      </navigator>
      <navigator url class="weui-cell" hover-class="weui-cell_active">
        <div class="weui-cell__bd">
          <div>实时搜索文本</div>
        </div>
      </navigator>
      <navigator url class="weui-cell" hover-class="weui-cell_active">
        <div class="weui-cell__bd">
          <div>实时搜索文本</div>
        </div>
      </navigator>
      <navigator url class="weui-cell" hover-class="weui-cell_active">
        <div class="weui-cell__bd">
          <div>实时搜索文本</div>
        </div>
      </navigator>
    </div>

    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="3000" duration="500">
      <block v-for="(item, index) in imgs" :key="index">
        <swiper-item>
          <img :src="item">
        </swiper-item>
      </block>
    </swiper>
    <div class="grid">
      <a class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
      <a  class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
      <a  class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
      <a  class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
      <a  class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
      <a class="weui-grid">
        <div class="weui-grid__icon">
          <img src="/static/images/benchi.jpg" alt>
        </div>
        <p class="weui-grid__label">大众</p>
      </a>
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
        <button class="weui-btn weui-btn_primary" @click="handleclick">查看更多</button>
        <button class="weui-btn weui-btn_primary" @click="handleclick">今日推荐</button>
        <div class="weui-media-box__hd">
          <img style="width:40px;height:40px;" src="/static/images/benchi.jpg">
        </div>
        <div class="weui-media-box__bd">
          <h4 class="weui-media-box__title">产业研究：中国智能网联汽车测试示范区发展研究</h4>
          <h5>摘要：本文节选国汽智联的研究报告《中国智能网联汽车测试示范区发展调查研究》，课题研究人员通过对国家级智能网联汽车测试示范区的实地调查和问卷调研，探索测</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setStorage } from "@/utils/index"; //这是引用utils中封装的方法

export default {
  data() {
    return {
      inputShowed: false,
      inputVal: "",
      imgs: ["/static/images/banner1.jpg"],
      imgs: ["/static/images/benchi.jpg"]
    };
  },

  methods: {
    //这是定义函数的地方。只是定义，但不会立即被调用，需要手动去调用，下面函数我不删掉，留给你做示例
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = "";
      this.inputShowed = false;
    },
    clearInput() {
      this.inputVal = "";
    },
    inputTyping(e) {
      console.log(e);
      this.inputVal = e.mp.detail.value;
    },
    handleclick() {
      wx.switchTab({
        //wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
        url: "../report/main"
      });
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
.weui-search-bar{
  z-index: -1;
}
swiper {
  width: 100%;
  height: 80px;
  z-index: 1;
}
</style>
