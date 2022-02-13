const cors = require('cors')
const express = require('express')

const app = express();
app.use(cors());

const port = server.listen(process.env.PORT || 3000);
app.listen(port);

app.use(express.static('public/bundle.js'));

console.log('Example app listening on port' + port);