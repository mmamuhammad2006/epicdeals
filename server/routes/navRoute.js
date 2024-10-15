const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('pages/home')
})
router.get('/cart',(req,res)=>{
    res.render('pages/cart')
})
router.get('/details',(req,res)=>{
    res.render('pages/details')
})
router.get('/wishlist',(req,res)=>{
    res.render('pages/wishlist')
})

router.post('/register',(req,res)=>{
    // if(req.body.)
    console.log(req.body);
    res.send("User registered successfully")
})
router.post('/login',(req,res)=>{
    // if(req.body.)
    console.log(req.body);
    res.send("User logged in successfully")
})

module.exports = router;