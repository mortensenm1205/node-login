const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    // Error handling for when email and password are blank values. 
    if (!body.email) return res.status(400).send('Email is required');
    if (!body.password) return res.status(400).send('Password is required');
    // This final is so that we can use the methods.
    const finalUser = new User(body);
    finalUser.setPassHash(body.password)
    finalUser.setToken();
    return finalUser.save()
        .then(() => res.status(200).json({ user: finalUser }))
});

module.exports =  router;