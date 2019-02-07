const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    const user = new User(body);

    // This handles errors for missing password. 
    // We use an else clause because we still need 
    // to hash the password. 
    if(body.password === '') {
        let e = new Error();
        e.code = 'password';
        e.message = 'Password is required';
        return res.status(400).json({ e })
    } else {
        user.setPassHash(body.password)
        user.setToken();
    }

    // This handles error for missing email.
    if (body.email === '') {
        let e = new Error();
        e.code = 'email';
        e.message = 'Email is required';
        return res.status(400).json({ e })
    }

    return user.save()
        .then(() => res.status(200).json({ user }))
        .catch(e => res.status(400).json({ e }))
});

module.exports =  router;