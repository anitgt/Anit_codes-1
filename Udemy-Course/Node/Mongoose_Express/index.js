const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

main().then(() => {
    console.log('Mongo connection Open!')
})
main().catch(err =>  {
    console.log('Oh no connection failed');
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/shopApp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('Woof')
})

app.listen(3000, () => {
    console.log('App is listening at port 3000')
})