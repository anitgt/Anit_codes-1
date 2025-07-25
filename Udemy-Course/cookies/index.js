const express = require('express');
const app = express();

app.get('/greet', (req,res) => {
    res.send('Hey there!');
})

app.get('/setname', (req,res) => {
    res.cookie('name', 'Alex Jack');
    res.cookie('age', '20')
    res.send('Sent you a cookie')
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})