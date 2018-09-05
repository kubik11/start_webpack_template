module.exports = {
  context: __dirname,
  devtool: "source-map",
  entry: "./js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env"] }
        }
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
	      	loader: 'file-loader',
	        options: {
	            name: '[name].[ext]',
	            outputPath: 'fonts/'
	        }
        }]
	   }
    ]
  },
  watch: true,
  mode: 'development'
}
