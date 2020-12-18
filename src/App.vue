<template>
    <v-app>
        <!-- mdi 引入示例 -->
        <v-icon size="50" color="primary">$account</v-icon>
        <router-view></router-view>
        <v-overlay :value="$store.state.loading" opacity="0.7">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    data: () => ({}),
    mounted() {
        // this.axiosExample()
        this.vuetifyDialogExample()
    },
    methods: {
        // http请求示例
        async axiosExample(params) {
            let res = await this.$axios.post('createUser', { ...params })
            if (res) {
                console.log('res :>> ', res)
            }
        },
        // vuetify-dialog示例
        async vuetifyDialogExample() {
            // toast
            this.$toast.success('Toast')
            // notification
            this.$dialog.notify.info('Notification', { position: 'top-right' })
            // confirm
            let res = await this.$dialog.warning({
                text: 'Do you really want to exit?',
                title: 'Warning'
            })
            console.log(res)
            // prompt
            res = await this.$dialog.prompt({
                title: 'Password balidation',
                text: 'Enter your password',
                rules: [v => v.length >= 6 || 'Password must be at least 6 characters long'], // vuetify's v-text-field rules prop
                textField: {
                    // Any addtional props/attrs that will be binded to v-text-field component
                    type: 'password'
                }
            })
            console.log(res)
        }
    }
}
</script>
