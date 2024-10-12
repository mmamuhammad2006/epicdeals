const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();


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
app.listen(5000) 