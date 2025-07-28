const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo')
.then(() => {
    console.log("MongoDB connected successfully!");
})
.catch(err => {
    console.error("MongoDB connection error:", err);
});

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded( {extended: true }));

app.get('/', (req,res) => {
    res.send('This is the homepage!')
})

app.get('/register', (req,res) => {
    res.render('register')
});

app.get('/login', (req,res) => {
    res.render('login')
})


app.post('/register', async (req,res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    });
    await user.save();
    res.redirect('/')
});

app.post('/login', async (req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne( {username });
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        res.send(`Welcome ${username}`)
    } else {
        res.send('Invalid Username or password!')
    }
})

app.get('/secret', (req,res) => {
    res.send('This is secret! You are now logged in')
})

app.listen(3000, () => {
    console.log('Listening to port 3000!')
})