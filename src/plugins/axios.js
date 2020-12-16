import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import Api from '@/api'

const vToast = Vue.prototype.$toast // 轻提示
axios.defaults.baseURL = process.env.VUE_APP_API

// 请求拦截器
axios.interceptors.request.use(
    config => {
        // 是否添加 token
        if (store.state.token) {
            config.headers.token = sessionStorage.getItem('token')
        }
        // // 是否为演示账号
        // if (filterRequest(config.url)) {
        //     config.url += '/mock' // 使用模拟数据
        // }
        store.commit('setLoading', true) // 开启加载遮罩
        return config
    },
    error => {
        vToast.error('请求异常')
        store.commit('setLoading', false) // 关闭加载遮罩
        return Promise.error(error)
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.data.code != 0) {
            response.data.msg && vToast.error(response.data.msg)
            store.commit('setLoading', false) // 关闭加载遮罩
            return Promise.resolve(response.data)
        }
        // store.state.token = true
        store.commit('setLoading', false) // 关闭加载遮罩
        return Promise.resolve(response.data)
    },
    error => {
        vToast.error('响应异常')
        // store.state.token = true
        store.commit('setLoading', false) // 关闭加载遮罩
        return Promise.reject(error)
    }
)

Plugin.install = Vue => {
    Vue.prototype.$axios = {
        // 封装 全参数
        default(config) {
            return axios(config)
        },
        // 封装 get
        get(url, params) {
            return axios.get(Api[url], { params })
        },
        // 封装 post
        post(url, params) {
            return axios.post(Api[url], qs.stringify(params))
        },
        // 封装 all
        all(config) {
            return axios.all(config)
        },
        spread(config) {
            return axios.spread(config)
        }
    }
}

Vue.use(Plugin)

export default Plugin
