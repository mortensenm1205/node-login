const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    const user = new User(body);

    // This handles errors for missing password. 
    // We used a try/catch because of hashing the pw
    // before saving the doc.
    try {
        user.setPassHash(body.password)
        user.setToken();
    } catch(e) {
        let password = {
            path: 'password',
            message: 'Password is required.'
        };
        e.errors = { password };
        return res.status(500).json({ e })
    }

    return user.save()
        .then(() => res.status(200).json({ user }))
        // This handles error for missing email.
        .catch(e => res.status(400).json({ e }))
});

module.exports =  router;