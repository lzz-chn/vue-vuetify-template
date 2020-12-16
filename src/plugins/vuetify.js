import Vue from 'vue'
import Vuetify, { VSnackbar, VBtn, VIcon, VOverlay } from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'
import vToast from 'vuetify-toast-snackbar-ng'
import '@mdi/font/css/materialdesignicons.css'
import VuetifyConfirm from 'vuetify-confirm'

const vuetify = new Vuetify({
    lang: { locales: { zhHans }, current: 'zhHans' },
    icons: { iconfont: 'mdi' }
})

Vue.use(Vuetify, { components: { VSnackbar, VBtn, VIcon, VOverlay } })
Vue.use(vToast, { x: 'center', y: 'top' })
Vue.use(VuetifyConfirm, { vuetify, title: '提示', buttonTrueText: '确认', buttonFalseText: '取消' })

export default vuetify
