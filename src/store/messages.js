import configs from '../configs'

const messages = {
  loading: 'Loading...',
  no_repos: 'No repositories.',
  bad_response: {
    en_us: 'Bad response.',
    de_de: 'Schlechte Antwort.'
  },
  error: 'Something went wrong.'
}
let localeDefault = configs.locale || 'en_us'

export default {
  get (messageKey, locale) {
    let message = messages[messageKey]

    if (typeof message === 'object') {
      message = locale && message[locale] || message[localeDefault]
    }

    return message
  },
  setLocale (locale) {
    localeDefault = locale
  }
}
