const express = require('express');
const app = express();

app.get('/tacos', (req,res) => {
    res.send('Get /Tacos response')
})

app.post('/tacos', (req, res) => {
    res.send('Post tacos response')
})

app.listen(3000, () => {
    console.log('On port 3000')
}) 