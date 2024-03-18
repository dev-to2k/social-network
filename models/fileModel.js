const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    pdf: String,
    owner_id: String,
  },
  { collection: "files" }
);

module.exports = mongoose.model("files", fileSchema);
