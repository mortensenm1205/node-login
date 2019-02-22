const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost:27017/NodeLogin',
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
)
    .then(() => console.log('DB connected'))
    .catch(err => console.log('Cannot connect to DB:', err));

module.exports = { mongoose };