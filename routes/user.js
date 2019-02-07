const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    // This handles errors for missing password. 
    // We used a try/catch because of hashing the pw
    // before saving the doc.
    try {
        const user = new User(body);
    } catch(e) {
        if (body.password === '') {
            let password = {
                path: 'password',
                message: 'Password is required.'
            };
            return e.errors = { password };
        }
        return res.status(400).json({ e })
    }

    user.setPassHash(body.password)
    user.setToken();
    return user.save()
        .then(() => res.status(200).json({ user }))
        // This handles error for missing email.
        .catch(e => res.status(400).json({ e }))
});

module.exports =  router;