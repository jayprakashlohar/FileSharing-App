const express = require("express");
const { mongoConnection } = require("./config/db");
const { userRouter } = require("./Routes/user.route");
const fileRouter = require("./Routes/file.route");
const auth = require("./Middleware/auth");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Welcome To File Sharing App...");
});

app.use("/user", userRouter);
app.use("/api", auth, fileRouter);

app.listen(PORT, async () => {
  try {
    await mongoConnection;
    console.log("Database is connected successfully");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listing on port ${PORT}`);
});
