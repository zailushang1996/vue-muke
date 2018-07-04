<template>
  <div id="app">
    <input type="text" v-model.number="myVal">
    <p :is="currentView"></p>
  </div>
</template>

<script>
  import Vue from 'vue'
  import ComA from './components/a1'
export default {
  name: 'App',
  components:{
    ComA
  },
  data() {
    return{
      currentView:'com-a',
      myVal:''
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
