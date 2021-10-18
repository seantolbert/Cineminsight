const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const insightSchema = new Schema({
  content: {
    type: String,
    ref: "Cinema",
  },
  rating: String,
  review: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Insight", insightSchema);