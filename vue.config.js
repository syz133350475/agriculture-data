// if(NODE_ENV=="developent"){
//   url = VUE_APP_URL
// }
// if(NODE_ENV="production")

module.exports = {
    publicPath: "./",
    assetsDir: "libs",
    devServer: {
      proxy: {
        "/api": {
          // target: "http://192.168.2.208:5001/api",
          target: process.env.VUE_APP_URL,
        //   target: "http://192.168.2.208:5001",
          changOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        },
      }
    }
  };