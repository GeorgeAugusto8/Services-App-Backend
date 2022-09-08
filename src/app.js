const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const path = require('path');

const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(config.connectionString,  { useNewUrlParser: true })

const Client = require('./models/Client')
const ServiceProvider = require('./models/ServiceProvider')
const Post = require('./models/Post')

const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')
const usersRoute = require('./routes/users')

app.use('/auth', authRoute)
app.use('/posts', postsRoute)
app.use('/users', usersRoute)

module.exports = app