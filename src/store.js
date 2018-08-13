import Vue from 'vue'
import Vuex from 'vuex'
import { M } from './utils'

Vue.use(Vuex)

const state = {
  toots: []
}

const actions = {
  getToots ({ commit }) {
    const params = {}
    M.get('timelines/home', params).then(result => {
      console.log(result.data)
      commit('getToots', result.data)
    })
  },
  postToots ({ commit }, tootText) {
    console.log(tootText)
    M.post('statuses', { status: tootText }).then(result => {
      console.log(result.data)
      commit('postToots', result.data)
    })
  }
}

const mutations = {
  getToots (state, payload) {
    state.toots = payload
  },
  postToots () {}
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
