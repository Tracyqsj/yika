<template>
  <div class="mainWrap">
    <div class="bg">
 
     <h4>昨日交易量（台）：10000</h4>    
    </div>
  </div>
</template>

<script>


let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: 20,
    height: 20
  });
  canvas.setChart(chart);

  var option = {}; // ECharts 配置项

  chart.setOption(option);

  return chart; // 返回 chart 后可以自动绑定触摸操作
}
export default {
  components: {
    mpvueEcharts
  },
  data() {
    return {
      userInfo: {},
      unionID: "",
      comInfo: {},
      openID: "",
      compID: ""
    };
  },
  methods: {},
  created() {},
  onLoad() {
    // this.userInfo = getStorage('userInfo');
    // this.comInfo = getStorage('registerInfo');
    // this.hostname = this.$store.state.url;
    // this.scan()
  }
};
</script>

<style scoped>
.mainWrap {
  width: 100vw;
  height: 100vh;
  position: fixed;
}
.bg {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
}
.bg img {
  width: 100%;
  height: 100%;
}

.nav {
  float: left;
}

.echarts-wrap {
  width: 100%;
  height: 300px;
}
</style>
</style>
