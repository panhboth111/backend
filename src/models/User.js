const {Schema,model} = require('mongoose')

const userSchema = Schema({
    username:String,
    email:String,
    password:String,
    profilePic:{
        type:String,
        default:""
    }
})

const userModel = model('User',userSchema)

module.exports = {
    name:'userModel',
    model:userModel
}