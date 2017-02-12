import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    username: '',
    repos: [],
    message: ''
  },
  mutations,
  actions,
  strict: isDebug
  // plugins: debug ? [createLogger()] : []
})
