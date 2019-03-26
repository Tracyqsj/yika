<template>
  <div class="page">
    <!-- 这是写html的地方，记住外层只有一个div-->

 
  </div>
</template>

<script>
import { setStorage } from "@/utils/index"; //这是引用utils中封装的方法

export default {
  data() {
    return {
      
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
