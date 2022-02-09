import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
const server = app.listen(3000);

app.use(express.static('public'));

console.log('Example app listening on port 3000!')