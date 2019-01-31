const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body: { user } } = req;
    // Error handling for when email and password are blank values. 
    if (!user.email) return res.status(400).send('Email is required');
    if (!user.password) return res.status(400).send('Password is required');
    // This final is so that we can use the methods.
    const finalUser = new User(user);
    finalUser.setPassHash(user.password)
    finalUser.setToken();
    return finalUser.save()
        .then(() => res.status(200).json({ user: finalUser }))
});

router.post('/login', (req, res)=> {
    const { headers: { authorization } } = req;

    if (authorization && authorization.split(' ')[0] === 'Token') {
        console.log(authorization.split(' ')[1]);
    }
    console.log(null);
});

module.exports =  router;