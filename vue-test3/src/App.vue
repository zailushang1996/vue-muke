<template>
  <div id="app">
    <input type="text" v-model.number="myVal">
    <p :is="currentView"></p>
    <button v-on:click="show = !show">
      Toggle
    </button>
    <div class="ab">
      <transition name="fade"><p v-show="show">i am show</p></transition>
    </div>
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
      myVal:'',
      show:true,

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
  .fade-enter-active,.fade-leave-active{
    transition: opacity .5s ease-out;
  }
  .fade-enter,.fade-leave {
    opacity: 0;

  }
</style>
