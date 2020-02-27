class UserService {
    userModel
    constructor(container){
        this.userModel = container.get("userModel")
    }
    async getUser(username){
        return new Promise(async (resolve,reject)=>{
            const user = await this.userModel.findOne({username})
            return resolve(user)
        })
    }
    async getAllUsers(username_){
        return new Promise(async (resolve,reject)=>{
            const users = await this.userModel.find({username:{$ne:username_}})
            return resolve(users)
        })
    }
    async changeProfilePic(profilePic,username){
        return new Promise(async (resolve,reject)=>{
            const user = await this.userModel.updateOne({username},{profilePic})
            resolve(user)
        })
    }
}
module.exports = UserService