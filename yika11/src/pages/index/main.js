import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount();
//此处配置窗口表现形式
export default {
    config: {
        //"navigationBarBackgroundColor": "#ffffff",
        //"navigationBarTextStyle": "black",
        "navigationBarTitleText": "首页",
        //"backgroundColor": "#eeeeee",
        //"backgroundTextStyle": "light"
    }
}
  

