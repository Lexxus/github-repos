import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import * as actions from './actions'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    username: '',
    repos: [],
    message: ''
  },
  mutations: {
    [types.RESET_USER] (state, payload) {
      state.username = payload.username
      state.repos = []
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
  },
  actions,
  strict: isDebug
  // plugins: debug ? [createLogger()] : []
})
