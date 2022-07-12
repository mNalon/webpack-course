const path = require('path')

const TerserPlugin = require('terser-webpack-plugin') //already available as a webpack ^5 dependency

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist/'
  },
  module: {
    rules: [
      // assets modules
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
      },
      //

      // loaders
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [['@babel/plugin-proposal-decorators', {decoratorsBeforeExport: true}]],
          }
        }
      }
      //
    ]
  },
  plugins: [
    new TerserPlugin()
  ],
  mode: 'none'
}