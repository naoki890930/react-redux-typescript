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
          {
            loader: 'ts-loader'
          },
        ],
      },
      {
        test: /\.p?css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: "[name]-[local]-[hash:base64:5]",
            },
          },
          {
            loader: 'typed-css-modules-loader',
          },
          {
            loader: 'postcss-loader',
          },
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
}
