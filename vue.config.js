module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-tasks/" : "/",
  outputDir: __dirname + "/docs"
};