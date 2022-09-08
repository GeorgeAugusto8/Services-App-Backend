const express = require('express');
const router = express.Router();
const verify = require('./checkToken');

const controller = require('../controllers/posts-controller');

router.get('/', verify, controller.getPosts)

router.post('/', verify, controller.post)

router.post('/like', verify, controller.like)

router.delete('/like', verify, controller.deleteLike)

module.exports = router