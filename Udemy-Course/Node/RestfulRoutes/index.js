const express = require('express');
const app = express();
const path = require('path')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: 1,
        username: 'Todd',
        comment: 'Nice one'
    },
    {
        id: 2,
        username: 'Bomm',
        comment: 'Hello'
    },
    {
        id: 3,
        username: 'lil baby',
        comment: 'Nice drip ma boy'
    },
    {
        id: 4,
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
    res.send('Get /tacos response')
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', {comment})
})

app.post('/tacos', (req, res) => {
    const { meat, qty} = req.body;
    res.send(`Ok! Here are your ${qty} of ${meat} `)
})

app.listen(3000, () => {
    console.log('On port 3000');
}) 