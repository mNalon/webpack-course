const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|jpeg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(png)$/,
        type: 'asset/inline'
      },
      // `type: asset` will make webpack choose by itself which type of asset to use (inline or resource) based on file size
      {
        test: /\.txt/,
        type: 'asset/source'
      }
    ]
  },
  mode: 'none'
}