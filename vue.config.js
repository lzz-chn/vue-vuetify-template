module.exports = {
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    configureWebpack: config => {
        config.plugins = [...config.plugins]
        config.devtool = 'source-map'
    },
    transpileDependencies: ['vuetify'],
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    devServer: {
        disableHostCheck: true, // 允许内网穿透
        open: true,
        port: 30000
        // proxy: {
        //     '/api': {
        //         target: 'https://www.easy-mock.com/mock', // 目标代理接口地址
        //         secure: false,
        //         changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端支持跨域
        //         pathRewrite: {
        //             '^/api': '/'  // 重写接口路径，使用 '/' 代替 '/api'
        //         }
        //     }
        // }
    }
}
