module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './index',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  devtool: false,
}
