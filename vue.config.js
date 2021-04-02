module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-tasks/" : "/"
  configureWebpack: {
    output: {
      path: __dirname + "/docs"
    }
  }
};
