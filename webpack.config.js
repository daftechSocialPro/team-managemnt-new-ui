const path = require('path');

module.exports = {
  // Replace 'src/index.js' with the path to your entry file
  entry: './src/index.js',
  output: {
    // Replace 'dist' with the desired output directory
    path: path.resolve(__dirname, 'dist'),
    // Replace 'bundle.js' with the desired output filename
    filename: 'bundle.js',
  },
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "util": require.resolve("util/")
    }
  },
};