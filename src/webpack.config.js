module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: './src/public/',
    publicPath: 'public'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
