import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount(); 

//此处配置窗口表现形式
export default {
    config: {
      navigationBarTitleText: '我的关注'  //标题
    }
}
  
