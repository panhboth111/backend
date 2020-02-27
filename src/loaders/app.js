const bodyParser = require("body-parser");
const cors = require("cors");
const graphqlHTTP = require('express-graphql')
const authRoutes = require('../api/auth')
const schema = require('../graphql')
const verify = require('../utilities/verify')
module.exports = async app => {
    app.use(bodyParser.json({ limit: "10mb", extended: true }))
    app.use(cors())
    app.use('/api',verify,graphqlHTTP({graphiql:true,schema}))
    app.use('/auth',authRoutes())
    return app 
}