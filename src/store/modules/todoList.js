export default {
  state: {
    list: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  getters: {},
  mutations: {
    //增加项目
    addObjRes (state, payload) {
      state.list.push(payload)
    },
    doneFalseRes (state, payload) {
      state.list[payload].done = false
    },
    doneTrueRes (state, payload) {
      state.list[payload].done = true
    },
    delItemRes (state, payload) {
      state.list.splice(payload, 1)
    }
  },
  actions: {
    //增加项目
    addObj (context, payload) {
      context.commit('addObjRes', payload)
    },
    //取消勾选
    doneFalse (context, payload) {
      context.commit('doneFalseRes', payload)
    },
    //取消勾选
    doneTrue (context, payload) {
      context.commit('doneTrueRes', payload)
    },
    //删除项目
    delItem (context, payload) {
      context.commit('delItemRes', payload)
    }
  }
}
