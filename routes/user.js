const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body: { user } } = req;
    // Error handling for when email and password are blank values. 
    if (!user.email) return res.status(400).send('Email is required');
    if (!user.password) return res.status(400).send('Password is required');

    const finalUser = new User(user);
    finalUser.setPassHash(user.password)
    return finalUser.save()
        .then(() => res.status(200).json({ user: finalUser }))
});

router.get('/', (req, res) => {
    res.send(req.headers);
})

module.exports =  router;