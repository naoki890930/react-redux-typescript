const path = require("path")

const SRC = path.resolve(__dirname, "./src")

module.exports = {
  entry: './src/Index.tsx',
  output: {
    filename: './dist/bundle.js'
  },

  devtool: 'cheap-eval-source-map',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
}
