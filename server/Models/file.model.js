const mongoose = require("mongoose");

const fileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    isProtected: {
      type: Boolean,
    },
    password: {
      type: String,
    },
    fileData: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FileModel = mongoose.model("file", fileSchema);

module.exports = { FileModel };
