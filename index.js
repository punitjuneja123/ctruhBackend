const express = require("express");
const cors = require("cors");

const app = express();
const port = 4500;

app.use(cors());
app.use(express.json());

const { uploadRouter } = require("./routes/upload.route");

// basic route
app.get("/", (req, res) => {
  res.send("Hello :)");
});

app.use(uploadRouter);

app.listen(port, () => {
  console.log(`port is rocking at ${port}`);
});
