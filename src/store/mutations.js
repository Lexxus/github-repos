import * as types from './mutation-types'

export default {
  [types.RESET_USER] (state, payload) {
    state.username = payload.username
    state.repos = []
    state.isLocked = true
    if (payload.message) {
      state.message = payload.message
    }
  },
  [types.SET_LIST] (state, list) {
    state.repos = list
  },
  [types.SET_MESSAGE] (state, text) {
    state.message = text
  }
}
