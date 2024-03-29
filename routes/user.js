const router = require('express').Router();
const passport = require('passport');
// In passport.js i talk about using the mongoose object
// to bring in the User model. But here i'm referencing 
// it from the User model file, and this still seems to work. 
// Idk if it's because i'm saving an entry? I'll have to switch 
// it to the mongoose object for testing later.
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    const user = new User(body);

    // We are fist testing our erros with conditions and then
    // returning an error object with a specific message.
    // This handles errors for missing password. 
    if(body.password === '') {
        let e = new Error();
        e.code = 'password';
        e.message = 'Password is required';
        // Keep in mind when wrapping this in an object, you'll be 
        // forced to call this object out via client side.
        return res.status(400).json({ e })
    } 

    // This handles error for missing email.
    if(body.email === '') {
        let e = new Error();
        e.code = 'email';
        e.message = 'Email is required';
        // This is the object that axios received during catch
        // on our client side for Registration 
        return res.status(400).json({ e })
    }

    // This is to handle an already existing user in the db.
    User.findOne({ email: body.email })
        .then(existingUser => {
            if (existingUser) {
                let e = new Error();
                e.code = 'userExists';
                e.message = 'User already exists, please log in.'
                return res.status(400).json({ e });
            }
        })

    // Luckily, none of this will run until both conditions return false. 
    user.setPassHash(body.password)
    user.setToken();
    return user.save()
        .then(() => res.status(200).json({ token: 'Bearer ' + user.token }))
        .catch(e => res.status(400).json({ e }))
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === '') {
        let e = new Error();
        e.code = 'blankEmail';
        e.message = 'Email is required';
        // This is the object that axios received during catch
        // on our client side for Registration 
        return res.status(400).json({ e })
    }

    if (password === '') {
        let e = new Error();
        e.code = 'blankPassword';
        e.message = 'Password is required';
        // Keep in mind when wrapping this in an object, you'll be 
        // forced to call this object out via client side.
        return res.status(400).json({ e })
    } 

    User.findOne({ email })
        .then(user => {
            if(!user) {
                // We are keeping the same consistent error format
                // Above is for empty fields, heres just another 
                // form of error handling. 
                let e = new Error();
                e.code = 'noFoundUser';
                e.message = 'User not found'
                return res.status(400).json({ e })
            }
            // This static method is just to return a true or false value
            if(!User.comparePassHash(password, user.password)) {
                // Still using the same format for error handling
                let e = new Error();
                e.code = 'wrongPassword';
                e.message = 'Entered password does not match what we have on file. Please try again.';
                return res.status(400).json({ e });
            } 
                
            return res.status(200).json({ token: 'Bearer ' + user.token })
        })
})

router.get('/', passport.authenticate('jwt', {session: false}), (req, res) => {
    return res.status(200).json({
        id: req.user._id,
        email: req.user.email,
        // I'm sending the exp date num value because 
        // i use it within the home client comp to see 
        // if a user need sto be logged out or not. 
        exp: req.user.exp
    });
});


module.exports =  router;