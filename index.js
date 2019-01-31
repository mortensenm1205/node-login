const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const user = require('./routes/user');

const app = express();
const port = process.env.PORT || 3000;

// Will get cors deined when paried with cra so use cors()
app.use(bodyParser.json(), cors());
app.use('/user', user);

app.listen(port, () => console.log(`Now listening on port ${port}`))