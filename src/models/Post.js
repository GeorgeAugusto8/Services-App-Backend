const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    text: {
        type: String,
        required: true
    },
    images: [{
        type: String,
        required: true
    }],
    date: {
        type: Date,
        default: Date.now
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userImage: {
        type: String,
        default: 'https://www.cambe.pr.leg.br/anonimo.jpg/image_preview' 
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
    }]

})

module.exports = mongoose.model('Post', schema)