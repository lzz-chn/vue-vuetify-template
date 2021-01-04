<template>
    <div class="default-page">
        <div class="page-wrapper">
            <img v-show="type == 'notFound'" class="page-img" src="@/assets/img/default-page/not-found.svg" />
            <img v-show="type == 'noPower'" class="page-img" src="@/assets/img/default-page/no-power.svg" />
            <img v-show="type == 'inDevelopment'" class="page-img" src="@/assets/img/default-page/in-development.svg" />
            <div class="page-tips">
                {{ tip[type] }}
                <v-btn text color="primary" @click="$router.push('/admin')">点击跳转</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'defaultPage',
    data: () => ({
        type: '',
        tip: {
            notFound: '错误的访问',
            noPower: '无权限访问',
            inDevelopment: '开发中敬请期待'
        }
    }),
    mounted() {
        this.type = this.$route.params.type
    }
}
</script>

<style lang="less" scoped>
.default-page {
    display: flex;
    height: 100vh;
    .page-wrapper {
        margin: auto;
        .page-img {
            width: 35vw;
        }
        .page-tips {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            .v-btn {
                margin: 0 5px;
            }
        }
    }
}
</style>
