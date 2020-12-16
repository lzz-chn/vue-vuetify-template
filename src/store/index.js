import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: false, // 请求头添加 token
        loading: false // 加载遮罩
    },
    mutations: {
        setToken(state, arg) {
            state.token = arg
        },
        setLoading(state, arg) {
            state.loading = arg
        }
    },
    actions: {},
    modules: {}
})
