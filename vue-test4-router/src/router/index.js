import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Apple from '@/components/apple'
import Banana from '@/components/banana'
import RedApple from '@/components/redApple'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/apple/:color/:type',
      component: Apple
    },
    /*    {
          path:'/banana',
          component:Banana
        },*/
    {
      path: '/banana',
      component: Banana,
      children: [
        {
          path: '/redApple',
          component: RedApple
        }
      ]
    }
  ]
})
