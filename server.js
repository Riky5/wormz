const cors = require('cors')
const express = require('express')

const app = express();
app.use(cors());

app.listen(process.env.PORT || 3000);

app.use(express.static('public/bundle.js'));

console.log('Example app listening on port 3000');