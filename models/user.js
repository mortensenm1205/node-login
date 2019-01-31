const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    email: String,
    password: String
});

UserSchema.methods.setPassHash = function(pass) {
    // get and set for salt and hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    // updating the password value to the new hash value.
    return this.password = hash;
}

UserSchema.methods.generateJWT = function() {
    return jwt({
        _id: this._id,
        email: this.email
    }, 'secret');
}

UserSchema.methods.setToken = function() {
    return this.token = this.generateJWT();
}

const User = model('User', UserSchema);

module.exports = { User };