import webpack from 'webpack';
import config from './webpack.config';
import Server from 'webpack-dev-server';

new Server(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
