const jwt = require('jsonwebtoken')
class AuthService {
    userModel
    constructor(container){
        this.userModel = container.get("userModel")
    }
    async signup({email,username,password}){
        return new Promise(async(resolve,reject)=>{
            try {
                const userExists = await this.userModel.findOne({$or:[{username},{email}]})
                if(userExists) return resolve({success:false,message:"Username or Email already used"})
                const newUser = await this.userModel.create({email,username,password})
                return resolve({success:true,message:"Registered successfully"})
            } catch (error) {
                return resolve({success:false,message:error})
            }
        })
    }
    async signin({username,password}){
        return new Promise(async(resolve,reject)=>{
            try {
                const userExists = await this.userModel.findOne({username})
                if(!userExists) return resolve({success:false,message:"User does not exist",token:null})
                if(userExists.password === password){
                    const token = jwt.sign({username},"thisismysecret")
                    return resolve({success:true,message:"Signed in successfully",token})
                }
                else return resolve({success:false,message:"Incorrect password",token:null})
            } catch (error) {
                return resolve({success:false,message:error,token:null})
            }
        })
    }
}
module.exports = AuthService