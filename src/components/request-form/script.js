export default {
  name: 'requestForm',
  data() {
    return {
      disabled: true
    }
  },
  methods: {
    onSubmit (event) {
      this.$store.dispatch('getRepos', event.target.elements.username.value)
    },
    onKeyup (event) {
      this.disabled = !event.target.value
    }
  }
}
