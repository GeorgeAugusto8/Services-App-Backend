const jwt = require('jsonwebtoken');
const config = require('../config');

module.exports = function auth(req,res,next) {
    const token = req.header('auth-token') || req.body.headers['auth-token']
    if(!token) {
        res.status(401).send('Access denied');
    }

    try{
        const verified = jwt.verify(token, config.TOKEN_KEY )
        req.user = verified
        next()
    } catch (err) {
        res.status(401).send('Access denied');
    }
}