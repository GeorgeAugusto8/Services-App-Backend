const repository = require('../repositories/auth-repository');

exports.register = (req, res, next) => {
    repository.register(req.body)
        .then(data => {
            if(data === 0) {
                res.status('400').send({
                    message: 'Email já cadastrado.'
                })
            } else if(data !== null) {
                res.status('201').send({
                    message: 'Sucesso ao registrar usuário.'
                })
            } else {
                res.status('500').send({
                    message: 'Falha ao registrar.',
                    data: e
                })    
            }
        }).catch(e => {
            res.status('500').send({
                message: 'Falha ao registrar.',
                data: e
            })
        })

}

exports.login = (req, res, next) => {
    repository.login(req.body)
        .then(data => {
            if(data !== null && data !== undefined) res.status('200').header('auth-token', data.token).send({userType : data.userType});
            else res.status('500').send({message: 'Senha ou usuário inválidos.'})
        }).catch(e => {
            res.status('500').send({
                message: 'Senha ou usuário inválidos.',
                data: e
            })
        })

}

