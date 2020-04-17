module.exports = {
    publicPath: "./",
    assetsDir: "libs",
    devServer: {
      proxy: {
        "/api": {
          target: "http://192.168.2.208:5001/api",
        //   target: "http://192.168.2.208:5001",
          changOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        },
      }
    }
  };