export default {
  name: 'requestForm',
  methods: {
    onSubmit (event) {
      this.$store.dispatch('getRepos', event.target.elements.username.value)
    }
  }
}
