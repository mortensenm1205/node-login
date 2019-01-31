const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    email: String,
    pass_hash: String
});

UserSchema.methods.setPassHash = function(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return this.pass_hash = hash;
}

const User = model('User', UserSchema);

module.exports = { User };