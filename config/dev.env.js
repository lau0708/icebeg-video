'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const ora = require('ora')

ora('视频监控平台').start();

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
