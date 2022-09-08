const mongoose = require('mongoose');
const Client = mongoose.model('Client');
const ServiceProvider = mongoose.model('ServiceProvider');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.register = async (data) => {
    const emailExistsClient = await Client.findOne({ email: data.email })
    const emailExistsServiceProvider = await ServiceProvider.findOne({ email: data.email })

    var hashedPassword = await bcrypt.hash(data.password,10)

    if (emailExistsClient || emailExistsServiceProvider) return 0
    if(data.registerType !== "Client" && data.registerType !== "ServiceProvider") return null

    if (data.registerType === "Client") {
        const client = new Client({
            name: data.name,
            email: data.email,
            password: hashedPassword
        })
        return client.save()
    }

    if (data.registerType === "ServiceProvider") {
        const serviceProvider = new ServiceProvider(data)
        serviceProvider.password = hashedPassword
        var response = await serviceProvider.save()
        return response
    }

}

exports.login = async (data) => {
    const client = await Client.findOne({ email: data.email })
    const serviceProvider = await ServiceProvider.findOne({ email: data.email })

    if (client) {
        const validPassword = await bcrypt.compare(data.password, client.password)
        if (validPassword) {
            const token = jwt.sign({ _id: client._id }, config.TOKEN_KEY)
            return {token : token, userType : "Client"}
        }
    }

    if (serviceProvider) {
        const validPassword = await bcrypt.compare(data.password, serviceProvider.password)
        if (validPassword) {
            const token =  jwt.sign({ _id: serviceProvider._id }, config.TOKEN_KEY)
            return {token : token, userType : "ServiceProvider"}
        }
    }

}
