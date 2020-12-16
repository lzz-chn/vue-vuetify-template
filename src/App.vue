<template>
    <v-app>
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
    },
    methods: {
        // http请求示例
        async axiosExample(params) {
            let res = await this.$axios.post('createUser', { ...params })
            if (res) {
                console.log('res :>> ', res)
            }
        }
    }
}
</script>
