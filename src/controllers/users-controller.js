const repository = require('../repositories/users-repository');

exports.getByID = (req, res, next) => {
    repository.get(req.user._id)
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

exports.get = (req, res, next) => {
    repository.get(req.query.text)
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

exports.profileImage = (req, res, next) => {
    repository.profileImage(req.body, req.user) 
        .then(data => {
            res.status('200').send({message : 'Sucesso ao alterar imagem.'});
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao alterar imagem.',
                data: e
            })
        })

}

exports.put = (req, res, next) => {
    repository.put(req.body, req.user)
        .then(data => {
            res.status('200').send({message : 'Sucesso ao alterar informações.'});
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao alterar informações.',
                data: e
            })
        })

}
