const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// const webpack = require('webpack');
// const componentIndex = require('./src/component-index');

// module.exports = {
//     configureWebpack: {
//         plugins: [
//             new webpack.DefinePlugin({
//                 'process.env.COMPONENT_INDEX': JSON.stringify(componentIndex),
//             }),
//         ],
//     },
// };
