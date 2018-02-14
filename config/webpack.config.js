var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

var webpack_config = {
  entry: [
    path.join(__dirname, '..', 'src', 'ts', 'index.tsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist', 'js'),
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['.webpack.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: false,
          tsConfigFile: path.join(__dirname, 'tslint.json')
        }
      },
      {
        test: /\.tsx?$/,
        loaders: [
          'awesome-typescript-loader?configFileName=' + path.join(__dirname, 'tsconfig.json')
        ],
        exclude: /node_modules/
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    new UglifyJSPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devtool: 'source-map',

}

module.exports = webpack_config;