var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
    agreement: './src/view/agreement.js', // 多页 j0201.js
    custody: './src/view/custody.js', // 多页 j0202.js
    dispute: './src/view/dispute.js', // 多页 j0201.js
    vouchercenter: './src/view/vouchercenter.js', // 多页 j0202.js
    fish: './src/gameview/fish.js', // 多页 j0202.js
    zhugong: './src/gameview/zhugong.js', // 多页 j0202.js
    puke: './src/gameview/puke.js', // 多页 j0202.js
   recharge: './src/view/recharge.js', // 多页 j0202.js

  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'assets': resolve('src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      //  {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //  use:[
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000,
      //         name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //       }
      //     },
      //  ]
      // },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
