<template>
  <div class="banana">
    <h1>{{msg}}</h1>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
  export default {
    name: "banana",
    data() {
      return {
        msg: 'i am banana',
        price:10
      }
    },
    methods: {
      addOne() {
        this.$store.dispatch('increase', this.price);
      },
      minusOne() {
        this.$store.dispatch('decrease', this.price);
      }
    }
  }
</script>

<style scoped>

</style>
