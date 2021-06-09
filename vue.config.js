module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/exercise1": {
        target: "https://postman-echo.com",
        changeOrigin: true,
        pathRewrite: { "^/exercise1": "" },
      },
      "/exercise2": {
        target: "https://server-interview-node.herokuapp.com/",
        // target: "http://localhost:5000/",
        changeOrigin: true,
        pathRewrite: { "^/exercise2": "" },
      },
    },
  },
};
