const mongoose = require('mongoose');
const Professor = mongoose.model('Professor');
const Comentario = mongoose.model('Comentario');
const Prova = mongoose.model('Prova');

exports.get = (data) => {
    return Professor.find({ "faculdade": data.faculdade, "unidade": data.unidade })
}

exports.getComentarios = (data) => {
    return Comentario.find({ "ProfessorID": data.ProfessorID })
}

exports.getProvas = (data) => {
    return Prova.find({ "ProfessorID": data.ProfessorID })
}

exports.put = async (data) => {
    var professor = await Professor.findById(data.id)
    var materias = professor.materias
     materias.push(data.materia)

    return Professor.findByIdAndUpdate(data.id, {
        $set: {
            Avaliacao_quantidade: professor.Avaliacao_quantidade + 1,
            Avaliacao_total: parseInt(professor.Avaliacao_total) + parseInt(data.avaliacao),
            Comentarios_Quantidade : data.comentario ? professor.Comentarios_Quantidade + 1 : professor.Comentarios_Quantidade, 
            materias : materias
        }
    })
}

exports.postComentario = async (data) => {
    var comentario = new Comentario(data)
    return comentario.save()
}

exports.postProva = async (data) => {
    var prova = new Prova(data)
    return prova.save()
}