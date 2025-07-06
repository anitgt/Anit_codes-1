const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Nice one' 
    },
    {
        id: uuid(),
        username: 'Bomm',
        comment: 'Hello'
    },
    {
        id: uuid(),
        username: 'lil baby',
        comment: 'Nice drip ma boy'
    },
    {
        id: uuid(),
        username: 'Travis scott',
        comment: 'La flame'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments});
})

app.post('/comments', (req, res) => {
    const { username, comment}  = req.body;
    comments.push({username , comment, id: uuid()})
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
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
});

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

app.post('/tacos', (req, res) => {
    const { meat, qty} = req.body;
    res.send(`Ok! Here are your ${qty} of ${meat} `)
})

app.listen(3000, () => {
    console.log('On port 3000');
}) 