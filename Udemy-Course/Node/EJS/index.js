const express = require('express');
const app = express();
const path = require('path')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/rand', (req, res)=> {
    const num = Math.floor(Math.random() * 10) +1;
    res.render('random', {num : num})
})

app.get('/cats', (req, res) => {
    const cats = ['Silly', 'billy', 'Millie', 'Killy', 'Tommy'];
    res.render('cats', { cats })
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    res.render('subreddit', { subreddit })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

