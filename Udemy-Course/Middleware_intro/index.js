const express = require('express');
const app = express();
const morgan = require('morgan')

// morgan('tiny')

app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('On');
});
app.get('/dogs', (req, res) => {
    res.send('Woof Woof');
});

app.listen(3000,()=> {
    console.log('Listening at port 3000!')
})