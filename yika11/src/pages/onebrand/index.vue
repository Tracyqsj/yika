<template>
  <div class="mainWrap">
    <mpSearchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @confirm="confirm"></mpSearchbar>

    <div>
      <div style="display:inline;width: 20vw;padding: 0 5vw 0 5vw"
           @click="saleFilterHandle"
           :class="{ filter: saleFilter }">销量</div>
      <div style="display:inline;width: 20vw;padding: 0 5vw 0 5vw"
           @click="priceFilterHandle"
           :class="{ filter: priceFilter }">价格</div>
    </div>


    <mpLoading :showLoading="isShowLoading" loadingText="加载中..." mask="true"></mpLoading>
    <mpToast type="success" v-model="showToast" content="添加心愿成功"></mpToast>
    <mpToast type="success" v-model="cancelshowToast" content="取消心愿成功"></mpToast>
    <div class="weui-cell"  v-for="(item,index) in data" @click = "toCar">
      <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
        <img
          :src = "item.img"
          style="width: 70px;height: 60px;display: block">
      </div>

      <div class="weui-cell__bd">
        <p style="font-size: 16px;">{{item.name}}</p>
        <p style="font-size: 13px;color: #888888;">{{item.content}}</p>
        <p style="font-size: 13px;color: #888888;">价格：{{item.price}}万</p>
        <p style="font-size: 13px;color: #888888;">销量：{{item.sales}}辆</p>
      </div>

      <div class="weui-cell__ft">
        <i  :class="[item.like? 'liked': '', 'iconfont'] " @click.stop="likeCar(item)" >&#xe626;</i>
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
      saleFilter: false,
      priceFilter: false,
      inputValue: '',
      placeholder: '搜一下',
      isShowLoading: false,
      showToast:false,
      cancelshowToast: false,
      data:[],

      allData:[[
        {
          id:6,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 10,
          sales:110,
          like: false
        },
        {
          id:5,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 20,
          sales:160,
          like: false
        }
      ],[
        {
          id:6,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 10,
          sales:110,
          like: false
        },
        {
          id:5,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 20,
          sales:160,
          like: false
        },
        {
          id:4,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 240,
          sales:150,
          like: false
        }
      ],[
        {
          id:6,
          img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
          name: "奔驰 辉昂 两驱商务版",
          content:"首付仅需3万",
          price: 10,
          sales:110,
          like: false
        }
      ],
        [
          {
            id:6,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 10,
            sales:110,
            like: false
          },
          {
            id:5,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 20,
            sales:160,
            like: false
          }
        ],[
          {
            id:6,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 10,
            sales:110,
            like: false
          },
          {
            id:5,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 20,
            sales:160,
            like: false
          },
          {
            id:4,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 240,
            sales:150,
            like: false
          }
        ],[
          {
            id:6,
            img: "https://2aclgika1.i-plc.cn/static/images/benchi.png",
            name: "奔驰 辉昂 两驱商务版",
            content:"首付仅需3万",
            price: 10,
            sales:110,
            like: false
          }
        ]
      ]
    };
  },
  methods: {
    sort( key ){
        let len = this.data.length;
        for (let i = 0; i < len; i++) {
          for (let j = 0; j < len - 1 - i; j++) {
            if (this.data[j][key] > this.data[j+1][key]) { //相邻元素两两对比
              let temp = this.data[j+1]; //元素交换
              this.data[j+1] = this.data[j];
              this.data[j] = temp;
            }
          }
        }
      },
    saleFilterHandle(){
      this.saleFilter = !this.saleFilter;
      this.priceFilter = false;

      if (this.saleFilter){
        this.sort("sales");
      } else{
        this.sort("id");
      }

    },
    priceFilterHandle(){
      this.priceFilter = !this.priceFilter;
      this.saleFilter = false;

      if (this.priceFilter){

        this.sort("price");

      } else{
        this.sort("id");
      }

    },
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
  onLoad( option ) {

      this.data = this.allData[ option.index ]

  }

};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
}

  .filter{
    color: #00D7A0;
  }

  .liked{
    color: red;
  }

</style>
