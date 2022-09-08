const mongoose = require('mongoose');
const { findByIdAndUpdate } = require('../models/ServiceProvider');
const ServiceProvider = mongoose.model('ServiceProvider');
const multer = require('multer');
const multerConfig = require('../config/multer');

exports.getByID = async (data) => {
    return ServiceProvider.findById(data._id, 'name occupations description tags avaiableDays avaiableTime profileImage')
}

exports.get = async (data) => {
    console.log(data)
    const byDescription = await  ServiceProvider.find( {description : {$regex : `.*${data}*`}} , 'name occupations description tags avaiableDays avaiableTime profileImage')
    const byTags = await ServiceProvider.find( {tags : data} , 'name occupations description tags avaiableDays avaiableTime profileImage')
    const byJobs = await  ServiceProvider.find( {occupations : data} , 'name occupations description tags avaiableDays avaiableTime profileImage')
    const byName = await  ServiceProvider.find( {name : data} , 'name occupations description tags avaiableDays avaiableTime profileImage')

    const result = [...byDescription, ...byJobs, ...byTags, ...byName]
    
    return result
}

exports.profileImage = async (data, user) => {
    /* const response = await multer(multerConfig).single(data.file) */
    /* const client = await Client.findById(user._id)
    const serviceProvider = await ServiceProvider.findById(user._id)

    if (client) {
        return Client.findByIdAndUpdate(user._id, {
            $set: {
                profileImage: data.image
            }
        })
    }

    if (serviceProvider) {
        return ServiceProvider.findByIdAndUpdate(user._id, {
            $set: {
                profileImage: data.image
            }
        })
    } */
}

exports.put = async (data, user) => {
    const client = await Client.findById(user._id)
    const serviceProvider = await ServiceProvider.findById(user._id)

    if (client) {
        return Client.findByIdAndUpdate(user._id, {
            $set: data
        })
    }

    if (serviceProvider) {
        return ServiceProvider.findByIdAndUpdate(user._id, {
            $set: data
        })
    }
}