<template>
  <div>

    <div style="width: 100vw;height: 100px;">
      <div style="float: left;width: 33%;height: 100%;text-align: center;line-height: 100%;">
        <img src="/static/images/renrenche.jpg" style="margin: 0 auto;display: unset;">
      </div>
      <div style="float: left;width: 67%;height: 100%;text-align: center;display: flex;display: -webkit-flex;justify-content:center;align-items: center;">
        <div>
          <p style="font-size: 16px;font-weight: bold">人人车</p>
          <p style="font-size: 13px;color: #999999">2018年交易量：1000辆</p>
          <p style="font-size: 13px;color: #999999">月交易额：100辆</p>
        </div>

      </div>
    </div>

    <div  class="canvas">
      <ec-canvas id="mychart1" canvas-id="mychart-bar1" class="canvas" :ec="sale"></ec-canvas>
    </div>
    <div  class="canvas">
      <ec-canvas id="mychart2" canvas-id="mychart-bar2" class="canvas" :ec="profit"></ec-canvas>
    </div>




  </div>
</template>

<script>
  const saleOptions = {
    title: {
      text: '销售情况'
    },
    tooltip: {
      trigger: 'axis',
      position: 'bottom',
      formatter: "{b} : {c}千辆"
    },
    xAxis:  {
      type: 'category',
      data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'盈利情况',
        type:'line',
        data:[12, 34, 5, 61, 7, 12, 32,1,2,3,4,12],
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      }
    ]
  };
  const profitOptions = {
    title: {
      text: '盈利情况'
    },
    tooltip: {
      trigger: 'axis',
      position: 'bottom',
      formatter: "{b} : {c}万元"
    },
    xAxis:  {
      type: 'category',
      data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name:'盈利情况',
        type:'line',
        data:[1000, 800, 1111, 2224, 555, 1661, 880,144,1442,123,5151,151],
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
            {type: 'min', name: '最小值'}
          ]
        },
        markLine: {
          data: [
            {type: 'average', name: '平均值'}
          ]
        }
      }
    ]
  };
export default {
  data() {
    return {
      sale: {
        options: saleOptions
      },
      profit:{
        options: profitOptions
      }
    };
  },
  methods: {},
  created() {},
  onLoad: function(option) {

    console.log(option.id)
  }
};
</script>

<style scoped>
  .canvas {
    width: 100vw;
    height: 400px;
    padding: 10px;
  }
</style>
