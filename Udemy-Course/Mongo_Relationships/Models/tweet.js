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

const userSchema = new Schema({
    username: String,
    age: Number
});

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweet = async () => {
//     // const user = new User({username: 'Chicken69', age: 12});
//     const user = await User.findOne({ username: 'chickenfan99' })
//     const tweet2 = new Tweet({text: 'Bock bock my chicken make noise', likes: 29});
//     tweet2.user = user;
//     tweet2.save()
// }

// makeTweet()

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user')
    console.log(t)
}

findTweet()