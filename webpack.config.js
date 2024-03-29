const path = require('path')

const TerserPlugin = require('terser-webpack-plugin') //already available as a webpack ^5 dependency
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWenpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    clean: true, // to a more grained customization use the clean-webpack-plugin
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    // publicPath: 'dist/'
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
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader',
        options: {
          esModule: false
        }
      }
      //
    ]
  },
  plugins: [
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css'
    }),
    new HtmlWenpackPlugin({
      title: 'Hello world',
      description: 'Some description',
      template: 'src/index.ejs'
    })
  ],
  mode: 'none'
}