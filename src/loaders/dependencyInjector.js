const {Container} = require('typedi')
const userModel = require('../models/User')
const postModel = require('../models/Post')

module.exports = () => {
    const models = [userModel,postModel]
    models.forEach(m => {
        Container.set(m.name, m.model)
    })
}