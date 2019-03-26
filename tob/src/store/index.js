
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    url: 'index'
  },
  mutations: {   //将每个公司不同的url状态保存
    increment: (state,payload) => {
      const obj = state
      obj.url = payload.url
    },
    decrement: (state,payload) => {
      const obj = state
      obj.url = '';
    }
  }
})

export default store
