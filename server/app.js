const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors'); 
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname,'../client/public')))
app.use(expressLayouts);

app.set('views',path.join(__dirname,'../client/views'))
app.set('layout','layouts/app')
app.set('view engine','ejs')
const navRoute = require('./routes/navRoute');
app.use(navRoute);

const db = require('./controllers/dbConnection');
app.set(db);

app.listen(5000) 