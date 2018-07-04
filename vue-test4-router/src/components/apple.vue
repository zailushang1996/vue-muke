<template>
  <div class="apple"><h1>{{msg}}</h1>
  <button @click="getParams">get param</button></div>
</template>

<script>
  export default {
    name: "apple",
    data() {
      return {
        msg: 'i am apple'
      }
    },
    methods:{
      getParams() {
        console.log(this.$route.params)
      }
    }
  }
</script>

<style scoped>

</style>
