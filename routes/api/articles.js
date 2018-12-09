var expressRouter = require("express").Router();
var articlesController = require("../../controllers/articlesController");

expressRouter.route("/")
  .get(articlesController.findAll)
  .post(articlesController.create);

expressRouter.route("/:id")
  .delete(articlesController.remove);

module.exports = expressRouter;