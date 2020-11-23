const express = require("express");
const server = express();
const routes = require("./src/app");
const { server:serverConfig } = require("./src/config");

server.use("/api", routes);

server.listen(serverConfig.port, () => {
  console.log("App is running");
});


module.exports=server;
