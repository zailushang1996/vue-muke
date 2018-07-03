<template>
  <div>
    {{hello}}
    <button @click="emitMyEvent">emit</button>
  </div>
</template>

<script>
  export default {
    name: "a1",
    data() {
      return {
        hello: 'I am component a'
      }
    },
    methods: {
      emitMyEvent() {
        this.$emit('my-event', this.hello)
      }
    }
  }
</script>

<style scoped>

</style>
