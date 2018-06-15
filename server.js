const express = require("express");
const app = express();
app.listen(80, () => {
  console.log("App is listening on port: 80");
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
