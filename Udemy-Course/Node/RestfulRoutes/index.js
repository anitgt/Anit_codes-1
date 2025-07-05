const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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