const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const loginController = require('../controllers/loginController');

router.get('/',(req,res)=>{
    res.render('pages/home')
});
router.get('/cart',(req,res)=>{
    res.render('pages/cart')
});
router.get('/details',(req,res)=>{
    res.render('pages/details')
});
router.get('/wishlist',(req,res)=>{
    res.render('pages/wishlist')
});

router.post('/register',registerController.register);
router.post('/login',loginController.login);

module.exports = router;