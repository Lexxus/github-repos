<template lang="pug">
  div#app
    request-form
    repo-list
</template>

<script>
import RequestForm from './components/request-form'
import RepoList from './components/repo-list'

export default {
  name: 'app',
  components: {
    RequestForm,
    RepoList
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
