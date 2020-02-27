const mongoose = require('mongoose')
const DB_CONNECTION = 'mongodb+srv://panhboth:chidori8@cluster0-wpijw.mongodb.net/test'

module.exports =  async () => {
    const connection = await mongoose.connect(DB_CONNECTION,{useNewUrlParser:true,useUnifiedTopology:true})
    return connection.connection.db
}