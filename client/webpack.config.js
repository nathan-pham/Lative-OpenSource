const path = require('path');

module.exports = {
  entry: ["regenerator-runtime/runtime.js", path.resolve(__dirname, './src/index.tsx')],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: loader => [
                  require('postcss-import')({ root: loader.resourcePath }),
                ]
              }
            },
          },
          'sass-loader',
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets/img'
          }
        }
     },
    ],
  },
  resolve: {
    extensions: ['*', '.tsx', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  devServer: {
    static: path.resolve(__dirname, "./public"),
    compress: true,
    port: 3000,
  },
};