import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'
import * as actions from './actions'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    username: '',
    repos: []
  },
  mutations: {
    [types.SET_USERNAME] (state, username) {
      state.username = username
    },
    [types.SET_LIST] (state, list) {
      state.repos = list
    }
  },
  actions,
  strict: isDebug
  // plugins: debug ? [createLogger()] : []
})
