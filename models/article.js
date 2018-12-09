
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  headline: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  link: { type: String, required: true }
});

var article = mongoose.model("Article", articleSchema);

module.exports = article;