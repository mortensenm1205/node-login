const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    email: String,
    pass_hash: String
});

const User = model('User', UserSchema);

module.exports = { User };