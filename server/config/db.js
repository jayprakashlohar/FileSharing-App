const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnection = mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { mongoConnection };
