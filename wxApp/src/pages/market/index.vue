<template>
  <div class="mainWrap">
    <mpToast type="success" v-model="showToast" content="关注成功"></mpToast>
    <mpToast type="success" v-model="cancelshowToast" content="取消关注成功"></mpToast>
    <mp-searchbar :isFocus=true :inputValue="inputValue" :placeholder="placeholder" @confirm="search" confirmType="search"></mp-searchbar>
    <mp-loading :showLoading="isShowLoading" loadingText="加载中..." mask="true">    </mp-loading>
    <div v-if="result.page != 0">

      <scroll-view
        scroll-y
        style="height: 87vh;">
        <div class="list-item" v-for="(item, index) in result.data" :key="item.id" @click="handleClick(index)">
          <div class="list-item-img">
            <img style="width: 100%;height: 100%" src="/static/images/renrenche.jpg">
          </div>

          <div class="list-item-text">
            <div class="list-item-name"> {{item.name}} </div>
            <div class="list-item-p">当日售出{{item.daySaleNumber}}台，当月售出{{item.mouthSaleNumber}}台</div>
            <div class="list-item-p">当日进购{{item.dayBuyNumber}}台，当日购进{{item.mouthBuyNumber}}台</div>
            <div class="list-item-p">今日利润：{{item.todayProfit}}</div>
          </div>

          <div class="list-item-like">
            <i  :class="[item.like? 'liked': '', 'iconfont'] " @click.stop="likeCar(item)" >&#xe626;</i>
          </div>
        </div>
        <div style="text-align: center;font-size: 14px;color: #cccccc" >
          搜到{{result.recordSize}}条结果
        </div>
        <div style="height:30px;line-height: 30px;text-align: center;font-size: 14px;color: #cccccc" v-if="result.page*result.pageSize >= result.recordSize ">
          已经到底啦
        </div>

        <div style="height:30px;line-height: 30px;text-align: center;font-size: 14px;color: #cccccc" v-else  @click="search">
          点击查看更多
        </div>
      </scroll-view>
    </div>
  </div>
</template>

<script>
  import mpToast from 'mpvue-weui/src/toast';
  import mpSearchbar from 'mpvue-weui/src/searchbar';
  import mpLoading from 'mpvue-weui/src/loading';
export default {
  components: {
    mpSearchbar,
    mpLoading,
    mpToast
  },
  data() {
    return {
      inputValue: '',
      placeholder: '快来试试搜索',
      showToast:false,
      cancelshowToast: false,
      result:{
        pageSize: 3,
        page:1,
        recordSize : 12,
        data:[{
          id: 1,
          name:'人人车',
          daySaleNumber:100,
          mouthSaleNumber:1000,
          dayBuyNumber:120,
          mouthBuyNumber:1200,
          todayProfit: '1000万',
          like:false
        },
          {
            id: 2,
            name:'优享车',
            daySaleNumber:90,
            mouthSaleNumber:700,
            dayBuyNumber:120,
            mouthBuyNumber:900,
            todayProfit: '1000万',
            like:false
          },{
            id: 3,
            name:'懂车帝',
            daySaleNumber:120,
            mouthSaleNumber:600,
            dayBuyNumber:60,
            mouthBuyNumber:1100,
            todayProfit: '1000万',
            like:false
          }
        ]
      },
      isShowLoading: false

    };
  },
  methods: {
    likeCar(item) {

      if (item.like) {
        this.cancelshowToast = true;
      } else {
        this.showToast = true;
      }

      item.like = !item.like;
    },
    handleClick(index){
      wx.navigateTo({
        url:'../history/main?id='+index
      })
    },
    search(){
      this.isShowLoading = true;

      let self = this;
      setTimeout(function () {
        self.result.page ++;

        self.result.data.push({
          id: (self.result.page-1)*self.result.pageSize + 1,
          name:'人人车',
          daySaleNumber:100,
          mouthSaleNumber:1000,
          dayBuyNumber:120,
          mouthBuyNumber:1200,
          todayProfit: '1000万',
          like:false
        });
        self.result.data.push({
          id: (self.result.page-1)*self.result.pageSize + 2,
          name:'优享车',
          daySaleNumber:90,
          mouthSaleNumber:700,
          dayBuyNumber:120,
          mouthBuyNumber:900,
          todayProfit: '1000万',
          like:false
        });
        self.result.data.push({
          id: (self.result.page-1)*self.result.pageSize + 3,
          name:'懂车帝',
          daySaleNumber:120,
          mouthSaleNumber:600,
          dayBuyNumber:60,
          mouthBuyNumber:1100,
          todayProfit: '1000万',
          like:false
        })
        self.isShowLoading = false;
      }, 500)


    }
  },
  created() {},
  onLoad() {
  }
};
</script>

<style scoped>
.mainWrap {

}
  .list-item{
    width: 100vw;
    height: 100px;
    padding: 10px 2vw 10px 2vw;
    border-bottom: solid #999999;
    border-bottom-width: thin;
  }
  .list-item-img{
    width:28vw;
    height: 100%;
    float: left;
  }
  .list-item-text{
    float: left;
    margin-left: 2vw;
    width: 61vw;
    height: 100%;
  }
.list-item-like{
  float: left;
  width: 5vw;
  height: 100%;
  display: flex;
  justify-content:center;
  align-items:Center;
}
  .list-item-p{
    font-size: 14px;
    color: #b2b2b2;
    line-height: 25px;
  }
  .list-item-name{
  }
.liked{
  color: red;
}
</style>
