import Vue from 'vue'
import App from './App'
import '@/style/weui.css'
import store from './store/index'
Vue.prototype.$store=store;

Vue.config.productionTip = false
App.mpType = 'app'


const app = new Vue(App)
app.$mount();



export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      "pages/user/main",
      "^pages/login/main",
      "pages/market/main",
      "pages/report/main",
      "pages/concern/main"
  
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    "tabBar": {
      // "selectedColor": "",
      "list": [
       {
        "pagePath": "pages/market/main",
        "text": "市场",
        "iconPath": "/static/images/index-wei.png",
        "selectedIconPath": "/static/images/index.png"
      }, 
      {
        "pagePath": "pages/report/main",
        "text": "报表",
        "iconPath": "/static/images/news-wei.png",
        "selectedIconPath": "/static/images/news.png"
      }, {
        "pagePath": "pages/user/main",
        "text": "我的",
        "iconPath": "/static/images/person-wei.png",
        "selectedIconPath": "/static/images/person.png"
      }],
      "position":"bottom"
    },
    navigateToMiniProgramAppIdList:[
      'wxe10dd0f9b79a6211'
    ]
  }
}
