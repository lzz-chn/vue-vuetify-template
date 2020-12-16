<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js App"></hello-world>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: { 'hello-world': HelloWorld }
}
</script>

<style lang="less">
.home {
    text-align: center;
}
</style>
