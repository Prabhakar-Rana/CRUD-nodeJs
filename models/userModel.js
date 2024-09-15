const mongoose = require('mongoose');

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/database_name', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => {
//     console.log('MongoDB connected successfully');
// })
// .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
// });

// User schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    }
});

// User model
const User = mongoose.model('User', userSchema);

module.exports = User;