const {GraphQLObjectType,GraphQLString} = require('graphql')

const UserType = new GraphQLObjectType({
    name:'UserType',
    fields:()=>({
        username:{type:GraphQLString},
        password:{type:GraphQLString},
        email:{type:GraphQLString},
        profilePic:{type:GraphQLString}
    })
})

module.exports = UserType