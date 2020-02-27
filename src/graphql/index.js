const {GraphQLSchema} = require('graphql')
const RootQuery = require('./RootQuery')
const Mutations = require('./Mutations')
const userModel = require('../models/User')
const postModel = require('../models/Post')
const {Container} = require('typedi')
const models = [userModel,postModel]
models.forEach(m => {
    Container.set(m.name, m.model)
})
module.exports = new GraphQLSchema({query:RootQuery(),mutation:Mutations()})