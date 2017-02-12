export default {
  computed: {
    username () {
      return this.$store.state.username
    },
    list () {
      return this.$store.state.repos
    },
    message () {
      return this.$store.state.message
    }
  }
}
