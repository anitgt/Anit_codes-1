const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        username: 'Todd',
        comment: 'Nice one'
    },
    {
        username: 'Bomm',
        comment: 'Hello'
    },
    {
        username: 'lil baby',
        comment: 'Nice drip ma boy'
    },
    {
        username: 'Travis scott',
        comment: 'La flame'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.post('/comments', (req, res) => {
    const { username, comment}  = req.body;
    comments.push({username , comment})
        res.redirect('/comments')
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new', {comments})
})

app.get('/tacos', (req,res) => {
    res.send('Get /Tacos response')
})


app.post('/tacos', (req, res) => {
    const { meat, qty} = req.body;
    res.send(`Ok! Here are your ${qty} of ${meat} `)
})

app.listen(3000, () => {
    console.log('On port 3000');
}) 