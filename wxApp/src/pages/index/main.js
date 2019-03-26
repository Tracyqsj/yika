import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount();
//此处配置窗口表现形式
export default {
    config: {
        //"navigationBarBackgroundColor": "#ffffff",
        //"navigationBarTextStyle": "black",
        "navigationBarTitleText": "我的关注",
        //"backgroundColor": "#eeeeee",
        //"backgroundTextStyle": "light"
    }
}
  

