const cors = require('cors')
const express = require('express')
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.listen(port);

app.use(express.static('public'));

console.log('Example app listening on port ' + port);