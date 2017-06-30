var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
      //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
       chunks: ['app'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
       // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'agreement.html',
      template: 'agreement.html',
      inject: true,
      chunks: ['agreement'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
      new HtmlWebpackPlugin({
      filename: 'custody.html',
      template: 'custody.html',
      inject: true,
      chunks: ['custody'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
        new HtmlWebpackPlugin({
      filename: 'dispute.html',
      template: 'dispute.html',
      inject: true,
      chunks: ['dispute'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'vouchercenter.html',
      template: 'vouchercenter.html',
      inject: true,
      chunks: ['vouchercenter'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
      // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'recharge.html',
      template: 'recharge.html',
      inject: true,
      chunks: ['recharge'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    new HtmlWebpackPlugin({
      filename: 'fish.html',
      template: 'fish.html',
      inject: true,
      chunks: ['fish'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    new HtmlWebpackPlugin({
      filename: 'zhugong.html',
      template: 'zhugong.html',
      inject: true,
      chunks: ['zhugong'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    new HtmlWebpackPlugin({
      filename: 'puke.html',
      template: 'puke.html',
      inject: true,
      chunks: ['puke'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    new FriendlyErrorsPlugin()
  ]
})
