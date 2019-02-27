const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const user = require('./routes/user');

const app = express();
const port = process.env.PORT || 5000;

require('./config/passport')(passport);
app.use(passport.initialize());

app.use(express.static(path.join(__dirname, 'client/build')))
// Will get cors deined when paried with cra so use cors()
app.use(bodyParser.json(), cors());
app.use('/user', user);

app.listen(port, () => console.log(`Now listening on port ${port}`))