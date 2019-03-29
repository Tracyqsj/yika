<template>
  <div class="mainWrap">
    <mpSearchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @confirm="confirm"></mpSearchbar>
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


    <mpLoading :showLoading="isShowLoading" loadingText="加载中..." mask="true"></mpLoading>
    <mpToast type="success" v-model="showToast" content="添加心愿成功"></mpToast>
    <div class="weui-cell"  v-for="(item,index) in result.data" @click = "toCar">
      <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
        <img
          :src = "item.img"
          style="width: 70px;height: 60px;display: block">
      </div>

      <div class="weui-cell__bd">
        <p style="font-size: 16px;">{{item.name}}</p>
        <p style="font-size: 13px;color: #888888;">{{item.content}}</p>
      </div>

      <div class="weui-cell__ft">
        <i class="iconfont " @click.stop="likeCar">&#xe6af;</i>
      </div>
    </div>



  </div>
</template>

<script>
  import mpSearchbar from 'mpvue-weui/src/searchbar';
  import mpLoading from 'mpvue-weui/src/loading';
  import mpToast from 'mpvue-weui/src/toast';
  export default {
    components: {
      mpSearchbar,
      mpLoading,
      mpToast
    },
  data() {
    return {
      inputValue: '',
      placeholder: '搜一下',
      isShowLoading: false,
      showToast:false,
      result:{
        data:[
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万"
          },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万"
          },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万"
          },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰",
            content:"首付仅需3万"
          },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万"
          },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万"
          }
        ]
      }
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
    },

    likeCar(e){
      this.showToast = true;
    },
    toCar(){
      wx.navigateTo({
        url: "../car/main"
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
