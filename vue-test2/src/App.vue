<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component-a number=5></component-a>
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

    <input @keydown.enter="keydown"/>

    <component-a @my-event="onComaMyEvent">
      <p slot="header">123</p>
      <span>fansh</span>
    </component-a>

    <input v-model="myValue" type="text">
    {{myValue}}
    {{myValueWithoutNum}}

    <input v-model="myBox" type="radio" value="apple">
    <input v-model="myBox" type="radio" value="banana">
    <input v-model="myBox" type="radio" value="pinapple">
    {{myBox}}

    <select v-model="selection">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    {{selection}}

    <select v-model="selection1">
      <option v-for="item in selectOptions" :value="item.value">
        {{item.text}}
      </option>
    </select>
    {{selection1}}

    <p :is="comA"></p>

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
        myValue:'',
        myBox:[],
        selection:null,
        selection1:null,
        selectOptions:[
          {
            text:'apple',
            value:0
          },
          {
            text:'banana',
            value:1
          },
          {
            text:'pinppale',
            value:2
          }
        ],
        comA:componentA,

      }
    },
    computed:{
      myValueWithoutNum() {
        return this.myValue.replace(/\d/g,'')
      }
    },
    methods: {
      addItem() {
        this.list.push({name: 'oarage', price: 23})
      },

      toggle() {
        this.isPartA = !this.isPartA;
      },
      keydown() {
        console.log("on key down");
      },
      onComaMyEvent(paramFromA) {
        console.log("on onComaMyEvent" + paramFromA)
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
