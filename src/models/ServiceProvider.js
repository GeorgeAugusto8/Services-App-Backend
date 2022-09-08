const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    occupations: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
        required: true
    }],
    avaiableDays: [{
        type: Number,
        required: true
    }],
    avaiableTime: [{
        type: String,
        required: true
    }],
    profileImage: {
        type: String
    }
})

module.exports = mongoose.model('ServiceProvider', schema)