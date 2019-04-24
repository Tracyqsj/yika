<template>
  <div class="mainWrap">
    <ec-canvas class="canvas" :ec="ec"></ec-canvas>
  </div>
</template>

<script>
  const options = {
    title: {
      text: '昨日各平台交易量',
      x:'center'
    },

    tooltip : {
      trigger: 'item',
      position: 'bottom',
      formatter: "{b} : {c}辆 ({d}%)"
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['人人车','优享车','懂车帝','瓜子二手车']
    },

    series : [
      {
        name:'交易平台',
        type:'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[
          {value:1000, name:'人人车'},
          {value:1200, name:'优享车'},
          {value:800, name:'懂车帝'},
          {value:1700, name:'瓜子二手车'}
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
export default {
  data() {
    return {
      ec: {
        // 传 options
        options: options
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
