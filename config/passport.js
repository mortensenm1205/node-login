const { Strategy, ExtractJwt } = require('passport-jwt');
// I got a weird error if i tried to bring in User from the
// User's model file. 
// After some research turns out, it's easier to reference mongoose
// as soon below. It's better to bring in the model via the mongoose object.
const mongoose = require('mongoose');
const User  = mongoose.model('User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new Strategy(opts, (jwt_payload, done) => {
        User.findOne({_id: jwt_payload._id})
            .then(user => {
                if(user) return done(null, {...user._doc, exp: jwt_payload.iat});
                return done(null, false)
            })
            .catch(err => console.error(err));
    }));
}