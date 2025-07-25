const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    if (req.query.isAdmin) {
        next()
    };
    res.send('Not admin')
})

router.get('/topsecret', (req,res) => {
    res.send('This is top secret')
})

router.get('/deleteeverything', (req,res) => {
    res.send('OK deleted everything')
})

module.exports = router