const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors'); 
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname,'../client/public')))
app.use(expressLayouts);

app.set('views',path.join(__dirname,'../client/views'))
app.set('layout','layouts/app')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('pages/home')
})
app.get('/cart',(req,res)=>{
    res.render('pages/cart')
})
app.get('/details',(req,res)=>{
    res.render('pages/details')
})
app.get('/wishlist',(req,res)=>{
    res.render('pages/wishlist')
})
app.listen(5000) 