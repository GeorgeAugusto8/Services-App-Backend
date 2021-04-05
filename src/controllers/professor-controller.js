const repository = require('../repositories/professor-repository')

exports.get = (req, res, next) => {
    repository.get(req.body)
        .then(data => {
            res.status('200').send({
                data: data
            })
        }).catch(e => {
            res.status('400').send({
                message: 'Falha ao buscar professores.',
                data: e
            })
        })

}

exports.put = (req, res, next) => {
    if (!req.body.id || !req.body.avaliacao) {
        res.status('400').send({
            data: 'Dados inválidos.'
        })
    }
    repository.put(req.body)
        .then(data => {
            res.status('200').send({
                message: 'Sucesso ao registrar avaliação.',
            })
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao processar avaliação.',
                data: e
            })
        })

}

exports.getComentarios = (req, res, next) => {
    if (!(req.body.ProfessorID)) {
        res.status('400').send({
            data: 'Dados inválidos.'
        })
    }
    repository.getComentarios(req.body)
        .then(data => {
            res.status('200').send({
                data: data
            })
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao buscar comentarios.',
                data: e
            })
        })

}


exports.postComentario = (req, res, next) => {
    if (!req.body.ProfessorID || !req.body.Text || !req.body.Date) {
        res.status('400').send({
            data: 'Dados inválidos.'
        })
    }

    repository.postComentario(req.body)
        .then(data => {
            res.status('200').send({
                message: 'Sucesso ao registrar comentario.',
                data: data
            })
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao processar comentario.',
                data: e
            })
        })

}

exports.getProvas = (req, res, next) => {
    if (!req.body.ProfessorID ) {
        res.status('400').send({
            data: 'Dados inválidos.'
        })
    }
    repository.getProvas(req.body)
        .then(data => {
            res.status('200').send({
                data: data
            })
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao buscar provas.',
                data: e
            })
        })

}

exports.postProva = (req, res, next) => {
    if (!req.body.ProfessorID || !req.body.url || !req.body.Date) {
        res.status('400').send({
            data: 'Dados inválidos.'
        })
    }

    repository.postProva(req.body)
        .then(data => {
            res.status('200').send({
                message: 'Sucesso ao registrar prova.',
                data: data
            })
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao processar prova.',
                data: e
            })
        })

}