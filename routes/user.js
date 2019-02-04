const router = require('express').Router();
const { mongoose } = require('../config/db');
const { User } = require('../models/user');

router.post('/create', (req, res) => {
    // This is nested destructuring for objects. We are selectin { user }.
    const { body } = req;
    const finalUser = new User(body);
    
    finalUser.setPassHash(body.password)
    finalUser.setToken();
    return finalUser.save()
        .then(() => res.status(200).json({ user: finalUser }))
});

module.exports =  router;