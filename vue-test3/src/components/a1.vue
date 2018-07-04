<template>
  <div>
    {{hello}}
    {{number}}
    <button @click="emitMyEvent">emit</button>
    <slot name="header">no header</slot>
    <p>luan qi ba zao</p>
    <slot name="footer">no footer</slot>
  </div>
</template>

<script>
  export default {
    name: "a1",
    props:['number'],
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
