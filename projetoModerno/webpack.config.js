const path = require('path')

module.exports = {

  devServer: {
    static:{
      directory:path.resolve(__dirname,'dist')
    },
    compress:true,
    port:9000
  },

  entry: {
    index: "./src/index.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },
  output: {
    filename:'[name].min.js'
  }
};
