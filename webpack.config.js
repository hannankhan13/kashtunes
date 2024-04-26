const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/', 

  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), 
    },
    port: 3000,
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
    ]
  },
};