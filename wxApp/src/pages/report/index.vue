<template>
  <div class="mainWrap">

    <h4>昨日交易量（台）：10000</h4>
    <ec-canvas class="canvas" :ec="ec"></ec-canvas>

    <!--<div>-->
      <!---->
    <!--</div>-->
  </div>
</template>

<script>
  const options = {
    // more code ...
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
      data:['销量']
    },
    xAxis: {
      data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  }
export default {
  data() {
    return {
      ec: {
        // 传 options
        options: options,
      }
    };
  },
  methods: {},
  created() {},
  onLoad() {
  }
};
</script>

<style scoped>
  .mainWrap{
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  .canvas {
  width: 100vw;
  height: 80vh;
}
</style>
