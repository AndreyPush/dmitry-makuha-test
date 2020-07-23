const path = require("path");

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Dmitry Makuha(@brainfox) Test',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@cmp": path.resolve(__dirname, 'src/components'),
                "@pages": path.resolve(__dirname, 'src/pages'),
                "@img": path.resolve(__dirname, 'src/assets/img'),
                "@assets": path.resolve(__dirname, 'src/assets')
            },
            extensions: ['.js', '.vue', '.json']
        }
    }
}
