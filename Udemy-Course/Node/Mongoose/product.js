const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('Connection Open!!')
    })
    .catch(err => {
        console.log("Error");
        console.log(err)
    });

const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            require: true
        }
    })

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: 'Mountain Bike',
    price: 999,
    color: 'Blue'
})

bike.save()
    .then(data => {
        console.log('It worked');
        console.log(data)
    })
    .catch(err => {
        console.log('Error Occured'),
        console.log(err)
    })