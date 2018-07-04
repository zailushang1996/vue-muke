import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/apple',
      component:Apple
    },
    {
      path:'/banana',
      component:Banana
    }
  ]
})
