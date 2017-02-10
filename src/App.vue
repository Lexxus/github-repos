<template lang="pug">
  div#app
    request-form
</template>

<script>
import RequestForm from './components/request-form'

export default {
  name: 'app',
  components: {
    RequestForm
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
