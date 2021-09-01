module.exports = {
  pages:{
    index:{
      entry:'src/main.js'
    },
  },
  lintOnSave:false,
  /*devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
        pathRewrite:{'^/api':''}
      },
      '^/foo': {
        target: '<other_url>'
      }
    }
  }*/
}
