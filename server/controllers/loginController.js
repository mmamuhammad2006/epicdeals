const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../controllers/dbConnection');

exports.login = asyncHandler( async(req,res,next) => {
    try{
        const user = await db('users').where({email: req.body.email,password: req.body.password}).first();
        if(user){
            res.status(200).send('User Logged in Successfully '+user.name+" "+user.email+" "+user.password);
            return;
        }

        res.send("Email or password doesn't match");
        next();
    }catch(err){
        console.log(err);
        console.log('Getting error while logging user');
    }
})