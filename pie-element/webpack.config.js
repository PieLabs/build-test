module.exports = {
  entry: "./src/index.js",
  output: {
    libraryTarget: 'commonjs2',
    library: 'pie-element',
    path: 'lib',
    filename: "index.js"
  },
  externals: {
    "react": "React",
    "react-dom" : "ReactDOM"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}