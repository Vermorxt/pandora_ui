module.exports = {
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
  loader: 'css-loader',
  options: {
    modules: true, // This flag enables CSS modules
  },
}
