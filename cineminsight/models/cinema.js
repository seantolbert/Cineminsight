const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cinemaSchema = new Schema({
  title: String,
  genre: String,
});

module.exports = mongoose.model("Cinema", cinemaSchema);