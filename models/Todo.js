var mongoose = require("mongoose");
var schema = new mongoose.Schema({
  "title":String,
  "done":Boolean
});

module.exports = mongoose.model("Todo",schema);
