const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    email: { 
        required: true,
        type: String
    },
    password: { 
        required: true,
        type: String
    },
    token: String
});

UserSchema.methods.setPassHash = function(pass) {
    // get and set for salt and hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(pass, salt);
    // updating the password value to the new hash value.
    return this.password = hash;
}

UserSchema.methods.generateJWT = function() {
    // This just generates a token based
    // of the users email. 
    return jwt.sign({
        _id: this._id,
        email: this.email
    }, 'secret');
}

// We need to asign the new token to our user
// model. 
UserSchema.methods.setToken = function() {
    return this.token = this.generateJWT();
}

UserSchema.statics.comparePassHash = function(entered_pass, saved_pass) {
    return bcrypt.compareSync(entered_pass, saved_pass);;
}

const User = model('User', UserSchema);

module.exports = { User };