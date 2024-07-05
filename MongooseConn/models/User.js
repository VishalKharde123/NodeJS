const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }, 
    session_id: {
        type: String, 
        required: true
    }
}, { timestamps: true} );

//Creating model
const User = mongoose.model('UserData', userSchema);

module.exports = User;