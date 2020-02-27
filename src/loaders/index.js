const databaseLoader = require('./database')
const appLoader = require('./app')
const dependencyInjector = require('./dependencyInjector')

module.exports = async (app) => {
    await databaseLoader()
    console.log("database initialized")
    // await dependencyInjector()
    // console.log("dependency injected")
    await appLoader(app)
    console.log("app initialized")
}