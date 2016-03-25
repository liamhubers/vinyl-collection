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
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'NODE_PATH': JSON.stringify(process.env.NODE_PATH),
      }
    }),
  ],
  resolve: {
    root: __dirname + '/' + process.env.NODE_PATH
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      includes: [__dirname],
      exclude: [path.join(__dirname, 'node_modules')]
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
