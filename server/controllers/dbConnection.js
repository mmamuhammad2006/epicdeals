const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const app = express();

// const knexConfig = {
//     client: 'mysql2',
//     connection:{
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'epicdeals'
//     }
// };

const db = knex(knexConfig.development);
async function checkConnection(){
    try{
        const result = await db.raw('SELECT 1+1 AS result');
        console.log('Connected to MySQL successfully! get  result = '+result[0][0].result);
    }catch(err){
        console.error('Error connecting to MySQL'+err.message);
    }
}

checkConnection();  

module.exports = db;