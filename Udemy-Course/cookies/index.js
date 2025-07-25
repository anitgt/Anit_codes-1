const express = require('express');
const app = express();

const cookieParser = require('cookie-parser')

app.use(cookieParser('secretcode1'))

app.get('/greet', (req,res) => {
    const { name = 'Person' } = req.cookies
    // res.send('Hey there!');
    res.send(`Helllo ${name}`)
})

app.get('/setname', (req,res) => {
    res.cookie('name', 'Alex Jack');
    res.cookie('age', '20')
    res.send('Sent you a cookie')
})

app.get('/getsignedcookie', (req,res) => {
    res.cookie('fruit', 'Grape', { signed: true } );
    res.send('Signing successful')
})

app.get('/verifyfruit', (req,res) => {
    // console.log(req.cookies);
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})