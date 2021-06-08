module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/exercise1": {
        target: "https://postman-echo.com",
        pathRewrite: { "^/exercise1": "" },
      },
      "/exercise2": {
        target: "http://localhost:3000",
        pathRewrite: { "^/exercise2": "" },
      },
    },
  },
};
