const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'root.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      routes: path.resolve(__dirname, './src/routes'),
      assets: path.resolve(__dirname, './src/assets'),
      theme: path.resolve(__dirname, './src/theme'),
      api: path.resolve(__dirname, './src/api'),
      content: path.resolve(__dirname, './src/content'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(mp4|mov)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              publicPath: './src/assets/video',
              outputPath: './src/assets/video',
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg|ttf|otf|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html', //source html
      favicon: 'src/assets/images/fav.svg',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    }),
    new Dotenv({
      path: './.env',
    }),
  ],
};
