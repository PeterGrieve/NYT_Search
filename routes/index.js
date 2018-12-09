var path = require("path");
var expressRouter = require("express").Router();
var routes = require("./api");

expressRouter.use("/api", routes);

expressRouter.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = expressRouter;