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
});

const verifyPassword = ((req,res,next) => {
    const { password } = req.query
    if (password === 'chickennugget') {
        next()
    }
    //res.send('Need a password');
    throw new Error('Password required!')
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

app.get('/secret', verifyPassword,(req,res) => {
    res.send('Welcome to the secret area of the internet')
})

app.get('/error', (req,res) => {
    chicken.fly()
})

app.use((req,res) => {
    res.status(404).send('Not found!')
});

app.use((err,req,res,next)=> {
    console.log('*****************')
    console.log('********ERROR*********')
    console.log('*****************');
    res.status(500).send('Oh boy error');
    console.log(err)
    next(err)
})

app.listen(3000,()=> {
    console.log('Listening at port 3000!')
})