import configs from '../../configs'

/**
 * Validate text to matching by the rule in the configs.
 *
 * @param {string} text - text to validate.
 * @returns {boolean} true if text is valid.
 */
function validation (text) {
  return configs.usernameRule.test(text)
}

export default {
  name: 'requestForm',
  data () {
    return {
      disabled: true
    }
  },
  methods: {
    onSubmit (event) {
      this.disabled = true
      this.$store.dispatch('fetchRepos', event.target.elements.username.value)
    },
    onKeyup (event) {
      this.disabled = !validation(event.target.value)
    }
  }
}
