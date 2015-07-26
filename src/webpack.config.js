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

/* now get all css and img into lib/public */