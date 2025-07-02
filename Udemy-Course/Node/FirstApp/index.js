const express = require('express');
const app = express();

// app.use((req, res) => {
//     console.log('We got a new request');
//     //res.send('Hello, We got your request! This is the response')
//     // res.send({
//     //     name: 'Xyz',
//     //     age: 19
//     // })
//     res.send('<h1>This is my webpage</h1>');
// });

app.get('/', (req, res) => {
    res.send('<h1>This is the homepage</h>')
})

app.post('/cats',(req, res) => {
    res.send('Post req to /cats!!!')
})

app.get('/cats', (req, res) => {
    res.send('Meow');
})

app.get('/dogs', (req, res) => {
    res.send('Thats a dawgg')
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing post id: ${postId} on the ${subreddit} subreddit`)

})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.get(/(.*)/, (req, res) => {
    res.send('Nothing here')
})