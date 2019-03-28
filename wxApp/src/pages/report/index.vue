<template>
  <div class="mainWrap">

    <ec-canvas class="canvas" :ec="ec"></ec-canvas>

    <!--<div>-->
      <!---->
    <!--</div>-->
  </div>
</template>

<script>
  const options = {
    backgroundColor: '#2c343c',

    title: {
      text: '昨日各平台交易量',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc'
      }
    },

    tooltip : {
      trigger: 'item',
      position: 'bottom',
      formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1]
      }
    },
    series : [
      {
        name:'交易平台',
        type:'pie',
        radius : '55%',
        center: ['50%', '50%'],
        data:[
          {value:1000, name:'人人车'},
          {value:1200, name:'优享车'},
          {value:800, name:'懂车帝'},
          {value:1700, name:'瓜子二手车'}
        ].sort(function (a, b) { return a.value - b.value; }),
        roseType: 'radius',
        label: {
          normal: {
            textStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            }
          }
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          }
        },
        itemStyle: {
          normal: {
            color: '#c23531',
            shadowBlur: 200,
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
