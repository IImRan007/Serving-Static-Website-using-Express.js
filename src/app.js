const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

const staticPath = path.join(__dirname, "../public");

// Built-in Middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
