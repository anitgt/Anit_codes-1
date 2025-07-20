const mongoose = require('mongoose');
const { Schema } = mongoose;


// Replace with your actual MongoDB URI
const MONGO_URI = 'mongodb://localhost:27017/relationshipDemo';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB connected successfully! 🚀");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = mongoose.model('Product', productSchema);
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {name: 'Melon', price: 4.99, season: 'Summer'},
//     {name: 'Baby watermelon', price: 4599, season: 'Winter'},
//     {name: 'asparagus', price: 4499, season: 'Fall'}
// ]);

// const makeFarm = async() => {
//     const farm = new Farm({name: 'New belly farms', city: 'Gondia, IN'});
//     const melon = await Product.findOne({ name: 'Melon' })
//     farm.products.push(melon);
//     await farm.save()
//     console.log(farm)
// }

// makeFarm()

const addProduct = async() => {
    const farm = await Farm.findOne({name: 'New belly farms'});
    const watermelon = await Product.findOne({ name: 'Baby watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm)
}

Farm.findOne({ name: 'New belly farms'})
.populate('products')
.then( farm => console.log(farm))