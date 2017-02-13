import configs from './configs'

const messages = {
  loading: {
    en_us: 'Loading...',
    de_de: 'Laden...'
  },
  no_repos: 'No repositories.',
  bad_response: 'Bad response.',
  error: 'Something went wrong.'
}
let localeDefault = configs.locale || 'en_us'

export default {
  /**
   * Get message's text by the its key.
   *
   * @param {string} messageKey - key of a message.
   * @param {string} [locale] - name of a locale, if not sent use the default locale.
   * @returns {string} message.
   */
  get (messageKey, locale) {
    let message = messages[messageKey]

    if (typeof message === 'object') {
      message = locale && message[locale] || message[localeDefault]
    }

    return message || ''
  },

  /**
   * Set default locale.
   *
   * @param {string} locale - name of a locale.
   */
  setLocale (locale) {
    localeDefault = locale
  }
}
