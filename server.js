const cors = require('cors')
const express = require('express')

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.listen(port);
app.use(express.static('public'));

console.log('Example app listening on port ' + port);