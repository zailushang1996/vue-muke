// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex);

/* eslint-disable no-new */

let store = new Vuex.Store({
  state: {
    totalPrice: 0
  },
  getters:{//获取状态集，方便组件获取
    getTotal(state) {
      return state.totalPrice;
    }
  },
  mutations: {//使用mutations只能同步方式
    increment(state, price) {
      state.totalPrice += price;
    },
    decrement(state, price) {
      state.totalPrice -= price;
    }
  },
  actions:{//可以异步操作(与后端交互)
    increase(context,price) {
      context.commit('increment',price);
    },
    decrease(context, price) {
      context.commit('decrement', price);
    }
  }

});
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
