const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const Product = require('./models/product');
const AppError = require('./AppError')

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', wrapAsync(async(req, res, next) => {
        const { category } = req.query;
    if(category) {
        const products = await Product.find({category: category});
        res.render('products/index' , {products, category})
    } else {const products = await Product.find({});
            res.render('products/index' , {products, category: 'All'})
    }
}))

app.get('/products/new', (req,res) => {
    // throw new AppError('Test', 401)
    res.render('products/new', { categories })
})

app.post('/products',wrapAsync(async(req,res,next) => {
        const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
}))

app.get('/products/:id', wrapAsync(async (req, res, next) => {
        const { id } = req.params;
    const product = await Product.findById(id);
    if(!product) {
      throw next(new AppError('No product Found with that id!', 404));
    }
    res.render('products/show', {product})
    }))

app.get('/products/:id/edit', wrapAsync(async (req,res,next) => {
         const { id } = req.params;
    const product = await Product.findById(id);
    if(!product) {
      return next(new AppError('No product Found with that id edit ', 404));
    }
    res.render('products/edit', { product, categories })
}))

app.put('/products/:id', wrapAsync(async(req,res,next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
    console.log(req.body)
}))

function wrapAsync(fn) {
    return function(req,res,next) {
        fn(req,res,next).catch(e => next(e))
    }
}

app.delete('/products/:id', wrapAsync(async(req,res,next) => {
        const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
    }));

const handleValidationError = err => {
    console.log(err);
    return new AppError(`Validation Failed...${err.message}`, 400)
}

app.use((err,req,res,next) => {
    console.log(err.name);
    if(err.name === 'ValidationError') err = handleValidationError(err)
    next(err)
})

app.use((err,req,res,next) => {
    const { status = 500, message = 'Error Occured'} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is listening at port 3000')
})