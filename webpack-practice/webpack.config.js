module.exports = {
  entry: './main.jsx',
  output: {
    path: './',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    port: 1333
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
