module.exports = {
  module: {
    rules: [
      {
        //whenever we import in a file that ends with an extension of either mjs or js, it should be processed by babel
        test: /\.m?js$/,
        // donot run any file on node module directory
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            //babel is going to process all different jsx tags, preset is going to transform our code in a variety of different ways
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
