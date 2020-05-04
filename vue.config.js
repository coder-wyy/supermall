module.exports = {
    configureWebpack: {
        resolve: {
            // 路径取别名：'@'就是src目录
            alias: {
                'assets': '@/assets',
            }
        }
    }
}

