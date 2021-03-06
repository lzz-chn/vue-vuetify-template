import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import zhHans from 'vuetify/es5/locale/zh-Hans'
import VuetifyDialog from 'vuetify-dialog'
import 'vuetify-dialog/dist/vuetify-dialog.css'
import { mdiAccount } from '@mdi/js'

const vuetify = new Vuetify({
    lang: { locales: { zhHans }, current: 'zhHans' },
    icons: {
        iconfont: 'mdiSvg',
        values: {
            account: mdiAccount  // 组件中直接引入即可 <v-icon>$account</v-icon>
        }
    }
})

Vue.use(Vuetify)
Vue.use(VuetifyDialog, {
    context: { vuetify },
    warning: {
        title: '提示'
    },
    actions: {
        false: { text: '取消' },
        true: { text: '确认', color: 'primary' }
    }
})

Vue.prototype.$toast = {
    message: Vue.prototype.$dialog.message,
    params: { position: 'top', timeout: 3000 },
    info(msg) {
        return this.message.info(msg, this.params)
    },
    success(msg) {
        return this.message.success(msg, this.params)
    },
    warning(msg) {
        return this.message.warning(msg, this.params)
    },
    error(msg) {
        return this.message.error(msg, this.params)
    }
}

export default vuetify
