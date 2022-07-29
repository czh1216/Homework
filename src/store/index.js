import Vue from 'vue'
import Vuex from 'vuex'
import todoHeader from './modules/todoHeader'
import todoList from './modules/todoList'
import createVuexPersisted from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bbq: '123'
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todoList,
    todoHeader
  },
  plugins: [
    createVuexPersisted({
      reducer (state) {
        return {
          todoList: state.todoList
        }
      }
    })
  ]
})
