<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component-a></component-a>
    <p v-text="hello"></p>
    {{num+1}}
    {{status?'success':'fail'}}
    <ul>
      <li v-for="item in list">
        {{item.name}}的价格是：{{item.price}}
      </li>
    </ul>

    <ol>
      <li v-for="(item,index) in list" :class="{odd:index % 2}"
          v-text="item.name + '的价格是：' + item.price + '  下标是：'+index"></li>
    </ol>

    <ul>
      <li v-for="(value,key) in objectList">
        {{value +' '+ key}}
      </li>
    </ul>

    <component-a v-for="(value,key) in objectList" :key="key"></component-a>


    <button v-on:click="addItem"></button>
    <a v-bind:href="link" target="_blank" v-bind:class="classStr">百度</a>
    <a v-bind:href="link" target="_blank" v-bind:class="className">百度</a>
    <a v-bind:href="link" target="_blank" :style="linkCss">百度</a>

    <button v-on:click="toggle">toggle</button>
    <a v-if="isPartA">partA</a>
    <a v-show="!isPartA">partB</a>
  </div>
</template>

<script>
  import componentA from './components/a1'

  export default {
    components: {
      componentA: componentA
    },
    name: 'App',
    data() {
      return {
        hello: '<h1>world</h1>',
        num: 1,
        status: true,
        list: [
          {
            name: 'apple',
            price: 34
          },
          {
            name: 'banana',
            price: 45
          }
        ],
        objectList: {
          name: 'apple',
          price: '34',
          color: 'red',
          weight: 14
        },
        link: 'https://www.baidu.com/',
        classStr: 'font-color:red',
        className: {
          'red-font': true,
          'blue-font': false
        },
        linkCss:{
          'color':'red',
          'font-size':'20px'
        },
        isPartA:true,

      }
    },
    methods: {
      addItem() {
        this.list.push({name: 'oarage', price: 23})
      },

      toggle() {
        this.isPartA = !this.isPartA;
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
