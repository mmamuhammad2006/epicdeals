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
        console.log('New User Created successfully');
    }catch(err){
        console.log(err);
        console.log('Getting error during new user creation');
    }
    console.log('This is a register controller function')
})