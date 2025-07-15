const express = require('express');
const app = express();
const morgan = require('morgan')

// morgan('tiny')

app.use(morgan('tiny'));

app.use((req,res,next) => {
    req.requestTime = Date.now()
    console.log(req.method, req.path);
    next()
})

app.use('/dogs', (req,res,next) => {
    console.log('i love dogs!');
    next()
})

// app.use((req, res,next) => {
//     console.log('This is my first middleware');
//     return next();
//     console.log('this is my first middleware after calling next()!')
// })
// app.use((req, res,next) => {
//     console.log('This is my second middleware');
//     return next()
// })
// app.use((req, res,next) => {
//     console.log('This is my third middleware');
//     return next()
//})

app.get('/', (req, res) => {
    console.log(`Request Date = ${req.reqTime}`)
    res.send('On');
});
app.get('/dogs', (req, res) => {
    console.log(`Request Date = ${req.reqTime}`)
    res.send('Woof Woof');
});

app.use((req,res) => {
    res.status(404).send('Not found!')
})

app.listen(3000,()=> {
    console.log('Listening at port 3000!')
})