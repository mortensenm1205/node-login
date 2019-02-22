const { Strategy, ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');
const User  = mongoose.model('User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new Strategy(opts, (jwt_payload, done) => {
        User.findOne(jwt_payload.id)
            .then(user => {
                if(user) return done(null, user);
                return done(null, false)
            })
            .catch(err => console.error(err));
    }));
}