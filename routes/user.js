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
    // Our else clause is because we still have to
    // encyrpt the password before saving.
    } else {
        user.setPassHash(body.password)
        user.setToken();
    }

    // This handles error for missing email.
    if (body.email === '') {
        let e = new Error();
        e.code = 'email';
        e.message = 'Email is required';
        // This is the object that axios received during catch
        // on our client side for Registration 
        return res.status(400).json({ e })
    }

    // Luckily, this won't run until both conditions
    // return false. 
    return user.save()
        .then(() => res.status(200).json({ user }))
        .catch(e => res.status(400).json({ e }))
});

module.exports =  router;