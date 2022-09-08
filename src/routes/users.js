const express = require('express');
const router = express.Router();
const verify = require('./checkToken');
const multer = require('multer');
const multerConfig = require('../config/multer');

const controller = require('../controllers/users-controller')

router.get('/', verify, controller.get)

router.get('/id', verify, controller.getByID)

router.post('/profileimage', multer(multerConfig).single("file") , controller.profileImage)

router.put('/', verify, controller.put)

module.exports = router