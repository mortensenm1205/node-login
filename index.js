const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json(), cors());

app.listen(3000, () => console.log('Now listening on port 3000'))