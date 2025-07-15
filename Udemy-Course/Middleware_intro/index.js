const express = require('express');
const app = express();
const morgan = require('morgan')

// morgan('tiny')

app.use(morgan('tiny'))
app.use((req, res,next) => {
    console.log('This is my first middleware');
    return next();
    console.log('this is my first middleware after calling next()!')
})
app.use((req, res,next) => {
    console.log('This is my second middleware');
    return next()
})
app.use((req, res,next) => {
    console.log('This is my third middleware');
    return next()
})

app.get('/', (req, res) => {
    res.send('On');
});
app.get('/dogs', (req, res) => {
    res.send('Woof Woof');
});

app.listen(3000,()=> {
    console.log('Listening at port 3000!')
})