const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const { uploadRouter } = require("./routes/upload.route");

// basic route
app.get("/", (req, res) => {
  res.send("Hello :)");
});

app.use(uploadRouter);

app.listen(process.env.PORT, () => {
  console.log(`port is rocking at ${port}`);
});
