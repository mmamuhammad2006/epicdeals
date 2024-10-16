const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../controllers/dbConnection');
exports.register = asyncHandler(async(req,res,next)=>{
    try{
        const mergeName = req.body.firstName+' '+ req.body.secondName;
        const data = {
            name: mergeName || 'testName',
            email: req.body.email || 'testEmail',
            password: req.body.password || 'testPassword',
        }
        const newRecord = await db('users').insert(data)
        if(newRecord){
            res.status(200).send("New User Created successfully");
            return;
        }
        // next();
    }catch(err){
        console.log("Getting error during new user creation");
        res.status(500).send("Email already exists");
    }
})