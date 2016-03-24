import path from 'path';
import webpack from 'webpack';

const entryFolder = 'source';

export default {
  devtool: 'source-map',
  debug: true,
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/dev-server',
    `./${entryFolder}/index.js`,
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_PATH': JSON.stringify(entryFolder),
        'NODE_ENV': JSON.stringify('development'),
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: [path.join(__dirname, entryFolder)]
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer-loader!less'
    }, {
      test: [/\.jpg$/, /\.png$/, /\.gif$/],
      loader: "file-loader?prefix=assets/images/"
    }, {
      test: [/\.svg/, /\.eot/, /\.ttf/, /\.woff/, /\.woff2/],
      loader: "file-loader?prefix=assets/fonts/"
    }]
  }
};
