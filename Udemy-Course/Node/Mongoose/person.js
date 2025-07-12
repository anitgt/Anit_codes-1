const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/personApp')
    .then(() => {
        console.log('Connection Open!!')
    })
    .catch(err => {
        console.log("Error");
        console.log(err)
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function() {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function() {
    this.first = 'Yo';
    this.last = 'Mama'
    console.log('About to save')
})
personSchema.post('save', async function() {
    console.log('Just saved')
})

const Person = mongoose.model('Person', personSchema);

// const testPerson = new Person({
//     first: 'Tony',
//     last: 'Stark'
// })

// testPerson.save().then(() => {
//     console.log('Sabed to database')
// })