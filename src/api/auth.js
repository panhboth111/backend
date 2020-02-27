const express = require("express");
const router = express.Router();
const {Container} = require('typedi')
const AuthService = require('../services/AuthService')
module.exports = () => {
    const authService = Container.get(AuthService)
    router.post('/signup',async (req,res)=>{
        const response = await authService.signup(req.body)
        return res.json(response)
    })
    router.post('/signin',async (req,res)=>{
        const response = await authService.signin(req.body)
        return res.json(response)
    })
    return router
}