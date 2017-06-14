import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import mutations from './mutations'
export default new Vuex.Store({
  state: {
    userName: '',
    avatarUrl: '',
    conversations: [],
    chatServer: ''
  },
  mutations: mutations
})
