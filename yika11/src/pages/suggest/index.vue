<template>
  <div class="mainWrap">
    <div style="padding: 2vw; width: 96vw;height:40vh; margin: 20px 0 20px 0;">
      <textarea
        placeholder="请写下您的宝贵建议"
        auto-focus style="width: 100%;height: 100%;border:solid 1px black; border-radius:20px; resize:none;" />
    </div>
    <div>
      <mpButton type="primary" size="large" >提交</mpButton>
    </div>

  </div>
</template>

<script>
  import mpButton from 'mpvue-weui/src/button';
  export default {
    components: {
      mpButton
    },
  data() {
    let contact;
    let contant;
    return {
    };
  },
  methods: {},
  created() {},
  onLoad() {
  }
};
</script>

<style scoped>
  page{
    background-color: #efefef;
  }

  .contant_wrap{
    background-color: #fff;
  }
  .contant{
    width: 94%;
    margin: 0 auto
  }
  textarea{
    min-height: 300rpx;
    padding: 10rpx 0;
    width: 100%;
  }
  input{
    margin-top: 30rpx;
    height: 100rpx;
    padding-left: 20rpx;
    background-color: #fff;
  }
  button{
    margin-top: 60rpx;
    background-color: #353331;
    color: #fff;
  }
  .placeholder{
    color: #999999;
    font-size: 12pt;
  }

</style>
