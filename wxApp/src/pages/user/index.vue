<template>
  <div class="counter-warp">
    <div class="person">
      <img :src="userImg" alt="">
      <p>{{userName}}</p>
    </div>
    <div class="line"  @click="goOther(2)">
      <div >
        <img src="/static/images/userInfo.png" alt="">
        <span>我的关注</span>
      </div>
      <div class="goRight">
        >
      </div>
    </div>

    <div class="line borderBottom" @click="goInput">
       <div  >
        <img src="/static/images/ZHTicon.png" alt="">
        <span>反馈意见
        </span>
      </div>
      <div class="goRight">
        >
      </div>
    </div>
  </div>
</template>

<script>

import {getStorage,openAlert,setStorage} from '@/utils/index'

export default {
  data(){
    return{
      url:'',
      userImg:'',
      userName:""
    }
  },

  methods: {
    goOther(n){
      if(n == 2){
        let nextUrl = "../concern/main";
        wx.navigateTo({
          url:nextUrl
        })
      }
    },
    goInput(){

    },
  },
  handleclick(){
    wx.navigateTo({
        url:'../zixun/main'
      })
  },
  created () {

    //此处的两行代码是指将存在缓存中的用户信息赋值给用户变量

    this.userImg = getStorage('userInfo').avatarUrl;
    this.userName = getStorage('userInfo').nickName;


  },
  onShow(){
    console.log(this.$store.state.url)
  }
}
</script>

<style lang='less'>
.person img{
    margin:0 auto;
    width:100px;
    height:100px;
}
.counter-warp{
  text-align: center;
  padding:15px;
}
.line{
  border-top: 1px solid rgba(229,229,229,1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  padding: 0 15px 0 0;
  img{
    width:30px;
    height:29px;
    margin-right: 10px;
  }
  div{
    display: flex;
    align-items: center;
    span{
      font-weight:400;
      color:rgba(4,7,43,0.65);
      line-height:24px;
      font-size:17px;
    }
  }
  .goRight{
    width:8px;
    height:13px;
  }
}
.borderBottom{
  border-bottom:  1px solid rgba(229,229,229,1);
}
</style>
