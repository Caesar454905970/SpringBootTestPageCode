import { createStore } from 'vuex'
// 组件通信：状态管理器
export default createStore({
    state: {
        num:888,
        user: {}
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        }
    },
    actions: {
        SET_USER({commit}, user) {
            this.state.user = user
        }
    },
    getters: {
        getUser: (state) => state.user
    }
})
