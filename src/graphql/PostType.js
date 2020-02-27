const {GraphQLObjectType,GraphQLString} = require('graphql')

const PostType = new GraphQLObjectType({
    name:'PostType',
    fields:()=>({
        content:{type:GraphQLString},
        postedBy:{type:GraphQLString}
    })
})

module.exports = PostType