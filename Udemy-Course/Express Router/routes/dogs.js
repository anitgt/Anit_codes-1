const express = require('express');
const router = express.Router();


router.get('/',(req,res) =>{
    res.send('Bow bow')
})
router.get('/:id',(req,res) =>{
    res.send('Bow bow')
})
router.get('/:id/edit',(req,res) =>{
    res.send('Bow bow')
})

module.exports = router