//引入 fly
var Fly=require("flyio/dist/npm/wx")
var fly=new Fly;

//获取小程序码后接的地址 

//配置请求基地址
// //定义公共headers
// fly.config.headers={xx:5,bb:6,dd:7}
// //设置超时
// fly.config.timeout=10000;
// //设置请求基地址
// fly.config.baseURL="https://wendux.github.io/"

// request.interceptors.response.use(
//   (response, promise) => {
//     wx.hideNavigationBarLoading()
//     return promise.resolve(response.data)
//   },
//   (err, promise) => {
//     wx.hideNavigationBarLoading()
//     wx.showToast({
//       title: err.message,
//       icon: 'none'
//     })
//     return promise.resolve()
//   }
// )



//添加拦截器
fly.interceptors.request.use((config,promise)=>{
  //给所有请求添加自定义header,请求前增加配置
  //config.headers["X-Tag"]="flyio";
  return config;
})

// Vue.prototype.$http=fly //将fly实例挂在vue原型上

export default fly
