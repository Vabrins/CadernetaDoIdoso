const path = require('path')

module.exports = {
  entry: './public/js/index.js',

  output: {
    path: __dirname + "/public/js/",
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query:
        {
          presets:['react']
        }
      }
    ]
  }
}