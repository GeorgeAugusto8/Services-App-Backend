const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
    Avaliacao_quantidade : {
        type : Number,
        required : true
    },
    Avaliacao_total : {
        type : Number,
        required : true
    },
    NOME : {
        type: String,
        required : true
    },
    UORG_LOTACAO : {
        type: String,
        required : true
    },
    faculdade : {
        type: String,
    },
    unidade : {
        type: String,
    },
    Comentarios_Quantidade : {
        type: Number,
    },
    materias: [{
        type: String,
    }],
})

module.exports = mongoose.model('Professor', schema)