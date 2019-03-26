import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount(); 

//此处配置窗口表现形式
export default {
    config: {
      navigationBarTitleText: '报表',  //标题
      usingComponents: {
        "ec-canvas": "../../../static/ec-canvas/ec-canvas"
      }
    }

}
  
