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

