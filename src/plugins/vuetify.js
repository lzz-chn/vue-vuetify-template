import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = new Vuetify({
    lang: { locales: { zhHans }, current: 'zhHans' },
    icons: { iconfont: 'mdi' }
})
console.log('vuetify.config :>> ', Vuetify.config);
Vue.use(Vuetify)
Vue.use(VuetifyDialog, {
    context: { vuetify },
    actions: [
        { text: '取消', key: false },
        { text: '确认', color: 'blue', key: true }
    ]
})

export default vuetify
