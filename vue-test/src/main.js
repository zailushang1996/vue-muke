// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

var myHeaderChild = {
  template: '<p>i am my header child</p>'
};

var myHeader = {
  template: '<p v-on:click="log"><my-header-child></my-header-child>this is my header</p>',
  components: {
    'my-header-child': myHeaderChild
  },
  methods:{
    log() {
      console.log('you clicked!')
    }
  }


};
Vue.component('my-footer', {
  template: '<p>this is my footer</p>'
});
new Vue({
  el: '#app',
  // template: '<p>hello world{{word}}</p>',
  data: {
    word: 'hello world2'
  },
  components: {
    'my-header': myHeader
  }
});
