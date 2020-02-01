module.exports = {
    configureWebpack: {
        resolve: {
            alias: {//路径别名
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
                'views': '@/views',
            }
        }
    }
}