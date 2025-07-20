const mongoose = require('mongoose');

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

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses : [
        {
            _id: {_id: false},
            street: String,
            city: String,
            state: String,
            country: String
}]
})


const User = mongoose.model('user', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123',
        city: 'Xyz',
        state: 'mh',
        country: 'india'
    })
    const res = await u.save()
    console.log(res)

}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '12qeweqwe3',
        city: 'Xeyeewewz',
        state: 'meewqh',
        country: 'inqwediea'
    })
    const res = await user.save();
    console.log(res)
}

addAddress('687d2384b578a82d81eb48f3')
