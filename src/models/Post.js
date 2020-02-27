const {Schema,model} = require('mongoose')

const postSchema = Schema({
    content:String,
    postedBy:String
})

const postModel = model('Post', postSchema)

module.exports = {
    name:'postModel',
    model:postModel
}