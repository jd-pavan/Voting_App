const mongoose = require("mongoose");
const voteCountsSchema = new mongoose.Schema({
  party_name: {
    type: String,
    required: true,
  },
  sub_party_name: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
});
const voteCounts = mongoose.model("Vote_Counts", voteCountsSchema);
module.exports = voteCounts;
