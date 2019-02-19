const router = require('express').Router();
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
    if (body.email === '') {
        let e = new Error();
        e.code = 'email';
        e.message = 'Email is required';
        // This is the object that axios received during catch
        // on our client side for Registration 
        return res.status(400).json({ e })
    }

    // Luckily, none of this will run until both conditions return false. 
    user.setPassHash(body.password)
    user.setToken();
    return user.save()
        .then(() => res.status(200).json({ user }))
        .catch(e => res.status(400).json({ e }))
});

module.exports =  router;