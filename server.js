const cors = require('cors');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.listen(port, '0.0.0.0');

console.log('Listening on port ' + port);