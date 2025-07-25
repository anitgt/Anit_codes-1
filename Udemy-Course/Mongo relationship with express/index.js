const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')
const flash = require('connect-flash');

const Product = require('./models/product');
const Farm = require('./models/farm')

const sessionOptions = {secret: 'secret1', resave: false, saveUninitialized: false};

main().then(() => {
    console.log('Mongo connection Open!')
})
main().catch(err =>  {
    console.log('Oh no connection failed');
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/flash-demo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'));

app.use(session(sessionOptions));
app.use(flash())

app.use((req,res,next) => {
    res.locals.messages = req.flash('success');
    next()
})

const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async(req, res) => {
    const { category } = req.query;
    if(category) {
        const products = await Product.find({category: category});
        res.render('products/index' , {products, category})
    } else {const products = await Product.find({});
            res.render('products/index' , {products, category: 'All'})
    }
    
})

//Farm Routes

app.get('/farms', async (req,res) => {
    const farms = await Farm.find({});
    res.render('farms/index', { farms });
})

app.get('/farms/new', (req,res) => {
    res.render('farms/new')
});

app.get('/farms/:id', async (req,res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    // console.log(farm)
    res.render('farms/show', { farm });
})

app.delete('/farms/:id/', async(req,res) => {
    // console.log('deleting')
   const farm = await Farm.findByIdAndDelete(req.params.id);
   res.redirect('/farms')
})

app.post('/farms', async (req,res) => {
    const farm = new Farm(req.body);
    await farm.save();
    req.flash('success', 'Successfully made a new form')
    res.redirect('/farms')
});

app.get('/farms/:id/products/new', async (req,res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id)
    res.render('products/new', { categories, farm })
})

app.post('/farms/:id/products', async (req,res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id)
    const { name, price, category } = req.body;
    const product = new Product({name, price, category});
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save()
    res.redirect(`/farms/${farm._id}`)
})


//Product Routes
app.get('/products/new', (req,res) => {
    res.render('products/new', { categories })
});

app.post('/products', async(req,res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id).populate('farm', 'name')
    res.render('products/show', {product})
})

app.get('/products/:id/edit', async (req,res) => {
    const { id } = req.params 
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
    console.log(req.body)
})

app.delete('/products/:id',async(req,res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products')
} )

app.listen(3000, () => {
    console.log('App is listening at port 3000')
})