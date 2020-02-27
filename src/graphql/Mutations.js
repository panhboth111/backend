const {GraphQLObjectType,GraphQLString} = require('graphql')
const {Container} = require('typedi')
const PostService = require('../services/PostService')
const UserService = require('../services/UserService')
const PostType = require('./PostType')
const UserType = require('./UserType')
module.exports = () => {
    const postService = Container.get(PostService)
    const userService = Container.get(UserService)
    const Mutations = new GraphQLObjectType({
        name:"Mutations",
        fields:{
            createPost:{
                type:PostType,
                args:{content:{type:GraphQLString}},
                async resolve(parent,args,req){
                    console.log("reached")
                    const post = await postService.createPost(args.content,req.user)
                    return post
                }
            },
            changeProfilePic:{
                type:UserType,
                args:{profilePic:{type:GraphQLString}},
                async resolve(parent,args,req){
                    const user = await userService.changeProfilePic(args.profilePic,req.user.username)
                    return user
                }
            }
        }
    })
    return Mutations
}