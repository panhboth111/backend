class PostService {
    postModel
    constructor(container){
        this.postModel = container.get("postModel") 
    }
    getAllPosts(){
        return new Promise(async(resolve,reject)=>{
            const posts = await this.postModel.find()
            return resolve(posts)
        })
    }
    createPost(content,{username}){
        return new Promise(async(resolve,reject)=>{
            const post = await this.postModel.create({content,postedBy:username})
            return resolve(post)
        })
    }
}
module.exports = PostService