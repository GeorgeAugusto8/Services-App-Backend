const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    url: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    ProfessorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor'
    }
})

module.exports = mongoose.model('Prova', schema)