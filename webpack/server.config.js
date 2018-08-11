const path = require('path');
const webpack = require('webpack');
const config = require('sapper/webpack/config.js');
const preprocessor = require('svelte-preprocess');
const pkg = require('../package.json');

module.exports = {
  entry: config.server.entry(),
  output: config.server.output(),
  target: 'node',
  node: {
    __dirname: true,
  },
  resolve: {
    extensions: ['.js', '.json', '.html'],
    mainFields: ['svelte', 'module', 'browser', 'main'],
    alias: {
      components: path.resolve(__dirname, '../components'),
    },
  },
  externals: Object.keys(pkg.dependencies),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'svelte-loader',
          options: {
            css: false,
            generate: 'ssr',
            preprocess: preprocessor(),
          }
        }
      }
    ]
  },
  mode: process.env.NODE_ENV,
  performance: {
    hints: false // it doesn't matter if server.js is large
  }
};
