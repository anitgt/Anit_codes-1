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
            required: true,
            maxlength: 20
        },
        price: {
            type: Number,
            require: true,
            min: 0
        },
        onSale: {
            type: Boolean,
            default: false
        },
        categories: [String],
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }
    })

const Product = mongoose.model('Product', productSchema);

const bike = new Product({
    name: 'Bike helmet',
    price: 29.50,
    categories: ['cycling', 'Walking', 'Flying'],
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