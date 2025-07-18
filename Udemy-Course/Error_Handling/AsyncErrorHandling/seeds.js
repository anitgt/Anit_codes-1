const mongoose = require('mongoose');
const Product = require('./models/product');


main().then(() => {
    console.log('Mongo connection Open!')
})
main().catch(err =>  {
    console.log('Oh no connection failed');
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand2');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


// const p = new Product({
//     name: 'Grape Fruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(() => {
//     console.log(p)
// })
//     .catch((e) => {
//         console.log('Error Occured');
//         console.log(e)
//     })


const seedProducts = [
  {
    name: 'Grapefruit',
    price: 1.99,
    category: 'fruit'
  },
  {
    name: 'Organic Banana',
    price: 0.99,
    category: 'fruit'
  },
  {
    name: 'Celery',
    price: 1.50,
    category: 'vegetable'
  },
  {
    name: 'Whole Milk',
    price: 2.99,
    category: 'dairy'
  },
  {
    name: 'Carrot',
    price: 0.79,
    category: 'vegetable'
  },
  {
    name: 'Broccoli',
    price: 1.29,
    category: 'vegetable'
  },
  {
    name: 'Strawberries',
    price: 3.50,
    category: 'fruit'
  },
  {
    name: 'Cheddar Cheese',
    price: 4.75,
    category: 'dairy'
  },
  {
    name: 'Lettuce',
    price: 1.25,
    category: 'vegetable'
  },
  {
    name: 'Blueberries',
    price: 3.99,
    category: 'fruit'
  }
];


Product.insertMany(seedProducts).then(res => {
    console.log(res)
})
    .catch((err) => {
        console.log(err)
    })