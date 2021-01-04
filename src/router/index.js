import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/defaultPage/:type',
        name: 'defaultPage',
        component: () => import('@/components/defaultPage') // 缺省页
    },
    {
        path: '*',
        redirect: '/defaultPage/notFound' // 路由错误无此页面
    }
]

const router = new VueRouter({
    routes
})

// 根据meta修改title
router.beforeEach((to, from, next) => {
    to.meta.title && (document.title = to.meta.title)
    next()
})

export default router
