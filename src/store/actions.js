import * as types from './mutation-types'
import githubSvc from '../services/github'

export const getRepos = ({ commit }, username) => {
  commit(types.SET_USERNAME, username)
  githubSvc.getUserRepos(username)
    .then(data => {
      commit(types.SET_LIST, data)
    })
    .catch(error => console.error(error))
}
