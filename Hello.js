let express = require("express");
let app = express();

app.get('/', function (req, res) {
  res.end("Hello World!");
});

app.listen(3000);
