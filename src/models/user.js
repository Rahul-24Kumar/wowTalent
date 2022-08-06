const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    user_Id: {
        type: Number,
        required: true,
        unique: true
    },

    profile_pic: {
        type: String,
        required: true,
        default: "https://pbs.twimg.com/media/BtFUrp6CEAEmsml.jpg"
    },

    mobile: {
        type: Number,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],

    followers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', UserSchema);