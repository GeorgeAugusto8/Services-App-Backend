const repository = require('../repositories/posts-repository');

exports.getPosts = (req, res, next) => {
    repository.getPosts(req.query.page, req.user)
        .then(data => {
            res.status('200').send(
                data
            )
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao buscar posts.',
                data: e
            })
        })

}

exports.post = (req, res, next) => {
    repository.post(req.body, req.user)
        .then(data => {
            res.status('200').send('Post cadastrado com sucesso.');
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao registrar post.',
                data: e
            })
        })

}

exports.like = (req, res, next) => {
    repository.like(req.body, req.user)
        .then(data => {
            res.status('200').send('Like registrado com sucesso.');
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao registrar like.',
                data: e
            })
        })

}

exports.deleteLike = (req, res, next) => {
    repository.deleteLike(req.body, req.user)
        .then(data => {
            res.status('200').send('Like removido com sucesso.');
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao remover like.',
                data: e
            })
        })

}