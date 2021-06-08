module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/exercise1": {
        target: "https://postman-echo.com",
        pathRewrite: { "^/exercise1": "" },
      },
      "/exercise2": {
        target: "https://server-interview-node.herokuapp.com/",
        pathRewrite: { "^/exercise2": "" },
      },
    },
  },
};
