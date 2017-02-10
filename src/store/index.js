import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const isDebug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    repos: []
  },
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
