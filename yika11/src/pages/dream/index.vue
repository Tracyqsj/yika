<template>
  <div class="mainWrap">
    <mpToast type="success" v-model="showToast" content="添加心愿成功"></mpToast>
    <mpToast type="success" v-model="cancelshowToast" content="取消心愿成功"></mpToast>
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
        <i  :class="[item.like? 'liked': '', 'iconfont'] " @click.stop="likeCar(item)" >&#xe626;</i>
      </div>
    </div>

  </div>
</template>

<script>
  import mpToast from 'mpvue-weui/src/toast';
  export default {
    components: {
      mpToast
    },
  data() {
    return {
      showToast:false,
      cancelshowToast: false,
      result:{
        data:[
          {
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            like: true
          },
          // {
          //   img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          //   name: "奔驰 辉昂 两驱商务版",
          //   content:"首付仅需3万"
          // },
          // {
          //   img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          //   name: "奔驰 辉昂 两驱商务版",
          //   content:"首付仅需3万"
          // },
          // {
          //   img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          //   name: "奔驰",
          //   content:"首付仅需3万"
          // },
          // {
          //   img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          //   name: "奔驰 辉昂 两驱商务版",
          //   content:"首付仅需3万"
          // },
          {
            img: "https://2aclgika1.i-plc.cn/static/images/laosilaosi.png",
            name: "劳斯莱斯",
            content:"分期免手续费",
            like: true
          }
        ]
      }
    };
  },
  methods: {
    likeCar(item){

      if (item.like){
        this.cancelshowToast = true;
      } else {
        this.showToast = true;
      }

      item.like = ! item.like;
    },
    toCar(){
      wx.navigateTo({
        url: "../car/main"
      });
    }
  },
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
.liked{
  color: red;
}
</style>
