import * as types from './mutation-types'
import githubSvc from '../services/github'
import messages from '../messages'

export default {
  getRepos ({ commit }, username) {
    commit(types.RESET_USER, {
      username,
      message: messages.get('loading')
    })
    githubSvc.getUserRepos(username)
    .then(data => {
      let message = ''

      if (Array.isArray(data)) {
        if (data.length) {
          commit(types.SET_LIST, data)
        } else {
          message = messages.get('no_repos')
        }
      } else if (data && data.message) {
        message = data.message
      } else {
        message = messages.get('bad_response')
      }
      commit(types.SET_MESSAGE, message)
    })
    .catch(response => {
      let message = ''

      if (response) {
        message = response.body && response.body.message || response.statusText
      }
      commit(types.SET_MESSAGE, message || messages.get('error'))
    })
  }
}
