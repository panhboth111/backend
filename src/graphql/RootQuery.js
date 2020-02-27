const {GraphQLObjectType,GraphQLString,GraphQLList} = require('graphql')
const {Container} = require('typedi')
const UserType = require('./UserType')
const PostType = require('./PostType')
const UserService = require('../services/UserService')
const PostService = require('../services/PostService')
module.exports = () => {
    const userService = Container.get(UserService)
    const postService = Container.get(PostService)
    const RootQuery = new GraphQLObjectType({
        name:'RootQuery',
        fields:{
            user:{
                type:UserType,
                async resolve(parent,args,req){
                    const user = await userService.getUser(req.user.username)
                    return user
                }
            },
            users:{
                type:GraphQLList(UserType),
                async resolve(parent,args,req){
                    const users = await userService.getAllUsers(req.user.username)
                    return users
                }
            },
            posts:{
                type:GraphQLList(PostType),
                async resolve(parent,args){
                    const posts = await postService.getAllPosts()
                    return posts
                }
            }
        }
    })
    return RootQuery
}