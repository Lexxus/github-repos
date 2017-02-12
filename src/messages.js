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
  get (messageKey, locale) {
    let message = messages[messageKey]

    if (typeof message === 'object') {
      message = locale && message[locale] || message[localeDefault]
    }

    return message || ''
  },
  setLocale (locale) {
    localeDefault = locale
  }
}
