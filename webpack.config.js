module.exports = {
  entry: './src/js/main.js',
  output: {
  	path: './src/js/',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};