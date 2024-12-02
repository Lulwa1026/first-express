const express = require("express");
const app = express();
// const port = 8000;

app.get("/", (req, res) => {
  res.send({
    name: "Lulwa",
  });
});

app.listen("8000", () => {
  console.log("working!");
});
